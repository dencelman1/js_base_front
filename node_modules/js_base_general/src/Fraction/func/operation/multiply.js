import { _o } from "../_/index.js";


export default _o(
    "multiply",
    
    (
        t,
        n,
        aD
    ) => {
        var
            startM = n.startsWith("-"),
            m = t.m,
            
            dot = (n = (startM ? n.substring(1): n)).indexOf("."),

            sliced = t.trimZ(n.substring(dot + 1), 1),

            c = (
                (
                    t.z +
                    (
                        t.trimZ(t.dc.toString(), 1)
                        .length
                    )
                )
                +
                (
                    (sliced)
                    .length
                )
                -1
            ),

            valueOf = t.valueOf(),
            
            sm = 
                (
                    (m === 1 ? valueOf * BigInt("-1"): valueOf)
                    *
                    BigInt(
                        n.substring(0, dot) +
                        sliced
                    )
                )
                .toString()

            
        ;
        
        return (
            (
                (
                    startM
                )
                &&
                (
                    t.m = (t.m === 0 ? 1 : 0)
                )
            ),
            
            (
                t.setFrom(c, sm)
            ),

            t.afterDot(t, aD)
        )
    }
)