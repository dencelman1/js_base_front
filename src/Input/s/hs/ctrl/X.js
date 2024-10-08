

export default (
    (e, pos, ut) => {
        
        var

            t = e.currentTarget,
            ln = e.currentTarget.querySelector(".line:has(.cursor)"),
            
            last = ln.nextElementSibling === null,
            first = ln.previousElementSibling === null,
            one = last && first,
            
            newP = null
        ;
        
        return (
            (
                (pos[2] === -1)
                ? (
                    (
                        e.sv = (
                            ln
                            .querySelector(".c")
                            .textContent
                        )
                    ),
                    (
                        newP = (
                            (one || first)
                            ? [0, 0]
                            : (
                            
                            last
                            ? [
                                (
                                    ln.previousElementSibling
                                    .querySelector(".c")
                                    .textContent
                                    .length
                                ),
                                pos[1] - 1
                            ]

                            : [
                                0,
                                pos[1]
                            ]
                            

                            )
                        )
                    ),
                    
                    ut.backspace(
                        e,

                        (
                            (
                            one
                            ? (
                                (pos[2] = 0) ||
                                (pos[3] = 0) ||
                                (pos[0] = e.sv.length)
                            )
                            : (

                            first
                            ? (
                                (e.sv += "\n") &&
                                (pos[2] = 0) ||
                                (pos[3] = 0) ||
                                
                                (pos[0] = 0) ||
                                (pos[1] = 1)
                            )
                            : (

                            last
                            ? (
                                (
                                    e.sv = (
                                        "\n" +
                                        e.sv
                                    )
                                )
                                &&
                                (pos[2] = newP[0]),
                                (pos[3] = pos[1] - 1),
                                
                                (pos[0] = e.sv.length)
                            )
                            : (
                                (e.sv += "\n"),
                                (pos[2] = 0) ||
                                (pos[3] = pos[1]),

                                (pos[0] = 0) ||
                                (pos[1] += 1)
                            )
                            
                            )
                            )
                        ),

                        pos

                        ),

                        ut
                    ),

                    ut.cursorMove(t, Object.assign(pos, newP), ut)
                )
                : (
                    ut.backspace(e,pos,ut)
                )
            ),
            navigator.clipboard.writeText(e.sv)
        )
    }
)