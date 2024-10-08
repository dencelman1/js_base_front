import {do_} from "./hs.js";
import { max } from "#utils/general";

export default do_(
    (e, pos, ut) => {
        var
            ahead = false,
            t=null,
            shft = e.shiftKey,
            ps = null,

            ls = (
                (
                    (
                        ahead = ut.selectAhead(pos)
                    )
                    ? pos[3]
                    : pos[1]
                )
            ),
            le = (
                (
                    ahead
                    ? pos[1]
                    : pos[3]
                ) + 1
            )
            
        ;
        
        return (
            (
                (pos[2] === -1) ||
                (pos[1] === pos[3])
            )
            ? (
                ut.type.exec(
                    (
                        (e.key = "    "),
                        e
                    ),
                    pos,
                    ut
                )
            )
            : (
                (
                    ps = (
                        ut.lineSplit(
                            ut.value(
                                t = e.currentTarget
                            )
                        )
                    )
                ),
                (
                    shft
                    ? (
                        (pos[
                            ahead
                            ? 0
                            : 2
                        ] = max(
                            0,
                            (pos[ahead? 0: 2] - 4)
                        ))
                    )
                    : (
                        pos[
                            ahead
                            ? 0
                            : 2
                        ]
                        += 4
                    )
                ),

                ut.setValue(
                    t,
                    ut,
                    (
                        
                        ((ps[ls].length < pos[ahead ? 2 : 0])
                        &&
                        (
                            pos[ahead ? 2 : 0] = ps[ls].length
                        )),

                        ps
                        .reduce(
                            (r, s, i, arr) => {

                                return (
                                    r +
                                    (
                                        (
                                            (i > ls  - 1)
                                            &&
                                            (i < le)
                                        )
                                        ? (
                                            shft
                                            ? (
                                                s.replace(/^ {1,4}/, '')
                                            )
                                            : ("    " + s)
                                        )
                                        : s
                                    ) +
                                    (
                                        (
                                            (arr.length === 1)
                                            ||
                                            (i === (arr.length - 1))
                                        )
                                        ? ""
                                        : "\n"
                                    )
                                );
                            },
                            ""
                        )
                    )
                ),

                ut.renderSelect(e, pos, ut),
                ut.cursorMove(t, pos, ut)

            )
        );
    },

    (e, pos, ut) => (
        (
            (e.pos[2] === -1) ||
            (e.pos[1] === e.pos[3])
        )
        ? (
            (pos[0] = e.afterPos[0]),
            (pos[1] = e.afterPos[1]),
            ut.cursorMove(e.currentTarget, pos, ut),
            
            ut.backspace.exec(e, pos, ut),
            ut.backspace.exec(e, pos, ut),
            ut.backspace.exec(e, pos, ut),
            ut.backspace.exec(e, pos, ut),
            
            (e.sv === "")
            ||
            (
                ut.insertValue(e.currentTarget, pos, ut)(e.sv)
            )
        )
        : (
            (pos[0] = e.afterPos[0]),
            (pos[1] = e.afterPos[1]),
            (pos[2] = e.afterPos[2]),
            (pos[3] = e.afterPos[3]),

            ut.tab.exec(
                (
                    (e.shiftKey = !(e.shiftKey)),
                    e
                ),
                pos,
                ut
            ),

            (e.shiftKey = !(e.shiftKey))
        )
    )

)