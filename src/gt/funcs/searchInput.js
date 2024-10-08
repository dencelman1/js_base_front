

export default function() {

    var

        ex = document.querySelector("#searchInput .droplist li"),
        ab = new AbortController(),

        li = (
            d
        ) => (
            ex.setAttribute("data-type", d.type) ||
            ex.setAttribute("data-href", d.href) ||
            (ex.querySelector(".text").textContent = d.text),
            ex.outerHTML
        ),

        set = (q) => (
            fetch(
                `/back/SearchPoint/${this.n}/droplist?q=${encodeURIComponent(q)}`,
                {
                    signal: ab.signal
                }

            )
            .then(r => r.ok && (
                r.json()
                .then((p) => (
                    (document.querySelector("#searchInput .droplist ul")
                    .innerHTML = (
                        p.reduce(
                            (v, i)=> (
                                v + li(i)
                            ),
                            ""
                        )
                    )) && (
                        dlOpen(true)
                    )
                ))
            ))
        ),

        dlOpen = (v) => (
            document.querySelector("#searchInput .droplist").classList[
                v 
                ? "remove"
                : "add"
            ]("hidden")
        )

    ;
    
    return ex && (
        
        ex.remove()
        ||
        document.querySelector('#searchInput button[type="reset"]')
        .addEventListener("click", (e) => {
            var i;

            return (
                dlOpen(false) ||
                (
                    (i = document.querySelector("#searchInput input"))
                    .value = ""
                )
                ||
                e.currentTarget.classList.add("hidden")
                ||
                i.focus()
            )
        })
        ||
    
        document.querySelector("#searchInput input")
        .addEventListener("keydown", (e) => (
            e.key === "Escape" && (
                e.currentTarget.blur()
            )
        ))
        ||
        document.querySelector("#searchInput input")
        .addEventListener(
            "input",
            ((
                id
            ) => (
                (e) => {
                    var q = e.currentTarget.value;

                    return (
                        ab.abort("") ||
                        (ab = new AbortController()) &&
                        document.querySelector('#searchInput button[type="reset"]').classList[
                            (q)
                            ? (
                                clearTimeout(id) ||
                                (id = setTimeout(
                                    () => set(q),
                                    100
                                ) || 1)
                                &&
                                "remove"
                            )
                            : (
                                dlOpen(false)
                                ||
                                "add"
                            )
                        ]("hidden")
                    );
                }
            ))(
                0
            )

        )
    );

}