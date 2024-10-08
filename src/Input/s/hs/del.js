import { do_ } from "./hs.js";



export default do_(
    (e, pos, ut) => {
        var
            ln, l, t, v,

        withoutSelect = () => (
            (pos[0] === (
                l = (
                    ln = (
                        t = e.currentTarget
                    )
                    .querySelector(".line:has(.cursor)")
                )
                .querySelector('.c')
            ).textContent.length)
            ? (
                (
                    (
                        e.key = ""
                    ),
                    (ln = ln.nextElementSibling)
                )
                &&
                (
                    (
                        l.innerHTML += (
                            ln.querySelector(".c")
                            .innerHTML
                        )
                    ),
                    (
                        e.key = "\n"
                    )
                    &&
                    ut.reMoveFromDown(
                        ln, t, ut
                    )
                )
            )
            : (
                (
                    e.key = (v = l.textContent)[
                        pos[0]
                    ]
                ),
                
                (
                    l.innerHTML = (
                        ut.repl(
                            v.slice(0, pos[0]) +
                            v.slice(pos[0] + 1)
                        )
                    )
                )
            )
        );

        return (
            (pos[2] === -1)
            ? withoutSelect()
            : (
                ut.removeSelected((t=e.currentTarget), pos, ut, ut.selectAhead(pos), t.querySelector(".cursor")),
                ut.clearSelect(e, pos)
            )
        )
    },

    (e, pos, ut) => (
        (e.pos[2] === -1)
        ? (
            (e.key === "")
            ||
            (
                (pos[0] = e.pos[0]),
                (pos[1] = e.pos[1]),

                ut[
                    e.key === "\n"
                    ? "enter"
                    : "type"
                ]
                .exec(e,pos,ut),

                (pos[0] = e.pos[0]),
                (pos[1] = e.pos[1]),

                ut.cursorMove(e.currentTarget, pos, ut)
            )
        )
        : (
            (pos[0] = e.afterPos[0]),
            (pos[1] = e.afterPos[1]),
            (
                ut.insertValue(e.currentTarget, pos, ut)
            )(
                e.sv
            )
        )
    )
    
)