import {max} from '#utils/general'
import { _o } from '../_/index.js';

export default _o(
    "add",

    (
        t, n, aD
    ) => {
        var
            startM = false
        ;

        return (
            (
                (
                    startM = (
                        (
                            n = t.toWithDc(n)
                        )
                        .startsWith("-")
                    )
                )
                &&
                (t.m === 0)
            )
            ? t.subtract(n.substring(1), aD)
            
            : (
            
            (
                (t.m === 1) &&
                (startM === false)
            )
            ? t.adoptFor(t, n, "subtract", t.toString().substring(1), aD)                
            
            : (
                t.steps(
                    t,
                    (
                        startM
                        ? n.substring(1)
                        : n
                    ),
                    t.tmpv,
                    aD,

                    (f, s) => (f + s),
                    (f, s) => (f + s)
                )
            )

            )
        );
    }
);
