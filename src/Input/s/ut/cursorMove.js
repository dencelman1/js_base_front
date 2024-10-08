

export default (
    (t, pos, ut) => {
        var
            ln=null
        ;
        return (
            (ln = t.querySelector(`.lines .line:nth-child(${pos[1] + 1})`))
            .appendChild(
                t.querySelector(".cursor")
            )
            .style.left = (
                ut.w(
                    t.querySelector(".check-letter"),
                    ut.repl(
                        ln.querySelector(".c").textContent.slice(0, pos[0])
                    )
                ) + "px"
            )
        );
    }
)