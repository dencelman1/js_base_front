import { do_ } from "./hs.js";


export default do_(
    (e, pos, ut) => {
        var
            t,
            cr,
            v,
            l,
            ln
        ;

        var remove = (sel, ln) => {
            var lall = null;

            return (
                (
                    lall = Array.from(t.querySelectorAll(sel))
                )
                .slice(
                    lall.indexOf(ln) + 1
                )
                .forEach(line => (
                    line.style.top = (
                        (
                            parseInt(line.style.top) -
                            ut.lh
                        ) + "px"
                    )
                ))
                ||
                ln.remove()
            );
        };

        var withoutSelect = (t) => (
            (pos[0] > 0)
            ? (

                (
                    (
                        cr = t.querySelector(".cursor")
                    )
                    .style.left = (
                        ut.w(
                            t.querySelector(".check-letter"),
                            (
                                (
                                    v = (
                                        (
                                            l = (
                                                t.querySelector(
                                                    ".line:has(.cursor) .c"
                                                )
                                            )
                                        )
                                        .textContent
                                    )
                                ).slice(0, (pos[0] -= 1))
                            )
                        ) + "px"
                    )
                ),
                (
                    e.key = v[
                        pos[0]
                    ]
                ),
                (
                    l.textContent = (
                        v.slice(0, pos[0]) +
                        v.slice(pos[0] + 1)
                    )
                )
                
            )
            : (
                (
                    ln = (
                        (
                            v = (
                                (
                                    l = (
                                        (
                                            ln = (
                                                t
                                                .querySelector(".line:has(.cursor)")
                                            )
                                        )
                                        .querySelector(".c")
                                    )
                                ).textContent
                            )
                        ),

                        ln
                        .previousElementSibling
                    )
                ) && (
                    
                    (
                        ln.appendChild(cr = t.querySelector(".cursor"))
                        .style.left =
                            ut.w(
                                t.querySelector(".check-letter"),
                                (
                                    (
                                        pos[0] = (
                                            (
                                                ln.querySelector(".c")
                                            )
                                            .textContent
                                            .length
                                        )
                                    ),
                                    ln.querySelector(".c").textContent
                                )
                            )
                            +
                            "px"
                    ),
                    (
                        v
                        &&
                        (
                            ln.querySelector(".c").innerHTML += l.innerHTML
                        )
                    ),
                    (
                        l.innerHTML = ""
                    )
                    ||
                    (
                        remove(".ss li", (
                            t.querySelector(`.ss li:nth-child(${
                                ut.elInd(
                                    ln.nextElementSibling
                                )
                                + 1
                            })`)
                        )),
                        remove(".lines .line", ln.nextElementSibling)
                    ),

                    (pos[1] -= 1)
                )
                
            )
        )

        return (
            (pos[2] === -1)
            ? (
                withoutSelect(
                    t = e.currentTarget
                )
            )
            : (
                ut.removeSelected((t=e.currentTarget), pos, ut, ut.selectAhead(pos), t.querySelector(".cursor")),
                ut.clearSelect(e, pos)
            )
        );
    },

    (e, pos, ut) => (
        (pos[0] = e.afterPos[0]),
        (pos[1] = e.afterPos[1]),
        
        (

            (e.pos[2] === -1)
            ? (
                ut[
                    (e.pos[0] > 0)
                    ? "type"
                    : "enter"
                ]
                .exec(e, pos, ut)
            )
            : (
                ut.insertValue(e.currentTarget, pos, ut)(e.sv)
            )
        )
    )
)