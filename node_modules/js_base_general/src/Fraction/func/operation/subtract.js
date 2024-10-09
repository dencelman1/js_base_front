import { _o } from "../_/index.js";


export default _o(
    "subtract",
    
    (t, n, aD) => {

        var
            fM = Number(t.m === 1),
            sM = Number(n.startsWith("-")),
            s = (fM + sM)
        ;
        
        return (
            ( s === 2 )
            ? (
                t.add(n, aD),
                (t.m = 1),
                t
            )
            
            : (

            (s === 0)
            ? (
                t.mSteps(
                    t,
                    n,
                    t.tmpv,
                    aD
                )
            )
            : (
                (fM === 1)
                ? (
                    (t.m = 0),
                    t.add(n, aD),
                    (t.m = 1),
                    t
                )

                : t.add(n.substring(1), aD)
            )

            )

        );
    }
)