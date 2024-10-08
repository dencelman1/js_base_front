import {do_} from '../hs/hs.js';


export default (

    do_(
        (e, pos, ut) => {
            var
                v,
                l,
                t,
                k = ""
            ;
    
            return (
                ((pos[2] === -1) || ut.backspace.exec(e, pos, ut)),
    
                (
                    (
                        l = (t = e.currentTarget).querySelector(".line:has(.cursor) .c")
                    )
                    .innerHTML = ut.repl(
                        (v = l.textContent).slice(0, pos[0]) +
                        (k = e.key) +
                        v.slice(pos[0])
                    )
                ),
                (
                    t.querySelector(".cursor")
                    .style.left = (
                        ut.w(
                            t.querySelector(".check-letter"),
                            l.textContent.slice(0, (pos[0] += k.length))
                        )
                        + "px"
                    )
                )
                
            );
        },

        (e, pos, ut) => (
            (pos[0] = e.afterPos[0]),
            (pos[1] = e.afterPos[1]),
            ut.cursorMove(e.currentTarget, pos, ut),
            
            ut.backspace.exec(e, pos, ut),
            
            (e.pos[2] === -1)
            ||
            (
                ut.insertValue(e.currentTarget, pos, ut)(e.sv)
            )
        )
    )
    
    
)