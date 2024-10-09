import { ceil, floor, min } from "js_base_general";


export default (
    (pos, ut) => function(e) {
        var
            t = null,

            moveCursor = (e, pos, ut, r) => {
                var
                    t = null,
                    ln = null,
                    df = 0,
                    ow = 0,
                    lg = 0,
                    l = null
                ;

                return (
                    (ln = (
                        t = e.currentTarget
                    ).querySelector(
                        `.line:nth-child(${
                            (
                                pos[1] = min(
                                    floor((e.clientY - r.top) / ut.lh),
                                    t.querySelector(".lines").childElementCount - 1
                                )
                            )
                            + 1
                        })`
                    ))
                    .appendChild(
                        t.querySelector(".cursor")
                    )
                    .style.left = (
                    
                        (
                            (
                                df = (
                                    e.clientX - r.left
                                )
                            ) > (
                                ow = (
                                    l = ln.querySelector(".c")
                                ).offsetWidth
                            )
                        )
                        ? ((pos[0] = l.textContent.length), ow)
                        : (
                            ut.w(
                                (
                                    t.querySelector(".check-letter")
                                ),
                                l.textContent.slice(
                                    0,
                                    (
                                        pos[0] = (
                                            
                                            (
                                                parseFloat(
                                                    ((
                                                        lg = (
                                                            (l.textContent.length)
                                                            * (
                                                                df / ow
                                                            )
                                                        )
                                                    ) - floor(lg))
                                                    .toFixed(2)
                                                )
                                                >
                                                0.4
                                            )
                                            ? ceil
                                            : floor
                                            
                                        )(lg)
                                    )
                                )
                            )
                        )
                        
                    ) + "px"
                );
            },

            move = function(e) {
                return (
                    moveCursor(e,pos, ut, this.getBoundingClientRect()),
                    ut.renderSelect(e, pos, ut)
                );
            },

            up = (e) => {
                var t;
    
                return (
                    (
                        t = e.currentTarget
                    ).removeEventListener("mousemove", move),
                    t.removeEventListener("mouseleave", up),
                    t.removeEventListener("mouseup", up)
                )
            }
        ;
        
        return (
            ((pos[2] === -1) || ut.clearSelect(e, pos)),
            moveCursor(e,pos,ut, this.getBoundingClientRect()),

            (pos[2] = pos[0]),
            (pos[3] = pos[1]),

            (t = e.currentTarget).addEventListener("mousemove", move) ||
            t.addEventListener("mouseleave", up),
            t.addEventListener("mouseup", up)
        )
    }
);
