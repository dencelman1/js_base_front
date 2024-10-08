import { do_ } from "./hs.js";


export default (

    do_(
        (e, pos, ut) => {
            var
                nLn = null,
                cr,
                ln,
                l,
                t,
                repl
            ;
            
            return (
                (
                    (
                        l = (
                            cr = (
                                ln = (
                                    t = e.currentTarget
                                )
                                .querySelector(".line:has(.cursor)")
                            )
                            .querySelector(".cursor")
                        )
                        .previousElementSibling
                    ),
                    cr
                ).remove() ||
                (
                    (
                        nLn = ln.cloneNode(true)   
                    )
                    .querySelector(".c").innerHTML = ""
                )
                ||
                (
                    (pos[2] === -1)
                    ||
                    (
                        ut.removeSelected(t, pos, ut, ut.selectAhead(pos), cr),
                        ut.clearSelect(e, pos),
                        (ln = t.querySelector(".line:has(.cursor)")),
                        (l = t.querySelector(".line:has(.cursor) .c"))
                    )
                ),
                (
                    e.ctrlKey
                    ||
                    (
                        (
                            nLn
                            .querySelector(".c")
                            .innerHTML = (
                                (
                                    repl = ut.repl
                                )(
                                    l.textContent.slice(pos[0])
                                )
                            )
                        ),
                        (l.innerHTML =
                            repl(
                                l.textContent.slice(0, pos[0])
                            )
                        )
                    )
                ),


                ut.insert(
                    t,
                    ut,
                    ".lines .line",
                    ln,
                    nLn
                ),
                ut.insert(
                    t,
                    ut,
                    ".ss li",
                    t.querySelector(
                        `.ss li:nth-child(${
                            ut.elInd(ln) + 1
                        })`
                    ),
                    (t.querySelector('.ss li').cloneNode(true))
                ),

                (
                    (
                        nLn.appendChild(cr)
                    )
                    .style.left = "0px"
                )
                &&
                (pos[1] += 1),
                (pos[0] = 0)
            );
        },

        (e, pos, ut) => (
            (pos[0] = e.afterPos[0]),
            (pos[1] = e.afterPos[1]),

            ut.backspace.exec(e, pos, ut),
            (
                (e.sv === "")
                ||
                (
                    ut.insertValue(e.currentTarget, pos, ut)(e.sv)
                )
            )
        )
    )
)