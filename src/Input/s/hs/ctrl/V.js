import { do_ } from "../hs.js";


export default (
    do_(
        (e, pos, ut) => {
            var
                t = e.currentTarget
            ;
            
            return (
                
                (
                    (pos[2] === -1)
                    ||
                    (
                        ut.backspace.exec(e, pos, ut),
                        (e.pos[0] = pos[0]),
                        (e.pos[1] = pos[1])
                    )
                ),

                navigator.clipboard.readText()
                .then(
                    ut.insertValue(t, pos, ut)
                )
            )
        },
        (e, pos, ut) => (
            
            (
                (pos[0] = e.afterPos[0]),
                (pos[1] = e.afterPos[1]),
                (pos[2] = e.pos[0]),
                (pos[3] = e.pos[1])
            ),
            ut.backspace.exec(e,pos,ut),
            
            (e.sv === "")
            ||
            (
                (
                    ut.insertValue(e.currentTarget, pos, ut)
                )(
                    e.sv
                )
            )
        
        )
    )
);