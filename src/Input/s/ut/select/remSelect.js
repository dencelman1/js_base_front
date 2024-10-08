

export default (
    (e, pos, ut) => {
        var
            cr,
            toLn,
            t
        ;

        return (
            (
                (
                    (
                        cr = (
                            (
                                t = e.currentTarget
                            )
                            .querySelector(".cursor")
                        )
                    )
                    .remove(),
                    cr
                )
                .style.left = (
                    ut.w(
                        t.querySelector(".check-letter"),
                        (
                            (toLn = t.querySelector(
                                `.lines .line:nth-child(${pos[3] + 1})`
                            ))
                            .appendChild(cr),

                            toLn

                        )
                        .textContent.slice(0, pos[2])
                    )
                    +
                    "px"
                )
            )
            
            &&

            t.querySelectorAll(".line:has(.select)")
            .forEach((ln) => {
                var
                    c = ln.querySelector(".c")
                ;
                return (
                    (
                        c.querySelector(".select")
                        .remove()
                    )
                    ||
                    (
                        (
                            ln.previousElementSibling
                            &&
                            (c.textContent === "")
                        )
                        &&
                        ln.remove()
                    )
                )
                
            })
        );
    }
)