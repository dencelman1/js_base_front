import { _o } from "../_/index.js";
import {moveDot} from '#utils/general';

import { closeDivider, closeDivisor } from "#utils/general";


export default _o(
    "divide",

    (
        t,
        n,
        aD
    ) => {
        var
            tmpv = t.tmpv,
            
            fIZ = (t.int === tmpv && t.dc === tmpv),
            sIZ = t.isZero(n),

            withoutMZero = (n) => (
                (
                    n = (
                        n.startsWith("-")
                        ? n.substring(1)
                        : n
                    )
                )
                .endsWith(".0")
                ? n.substring(0, n.length - 2)
                : n
            ),
            startM = Number(n.startsWith("-"))
        ;

        
        
        return (
            ( sIZ && fIZ )
            
            ? t.toNaN(t, tmpv)
            
            : (
                
            fIZ
            ? t
            
            : (

            sIZ
            ? ( ( t.inf = 1 ), t )

            : (
                (
                    startM = (
                        (startM === 1)
                        ? (
                            t.m === 1
                            ? 0
                            : 1
                        )
                        : t.m
                    )
                ),
                
                t.adopt(
                (

                    (
                        n,
                        BigInt,
                        dvStr,
                        moveDot,
                        tmpv,
                        t
                    ) => {
                        var
                            dv = tmpv,
                            dot = dvStr.indexOf("."),

                            divisor = tmpv, from = tmpv,

                            l = 0, lnth = 0, i = 0,
                            cL = "", bf = "", rs = "",
                            
                            inDc = 0,
                            last = false
                        ;
                        
                        dvStr === "1"
                        ? (
                            (rs = n),
                            (lnth = -1)
                        )
                        : (
                            (
                                (
                                    l = (
                                        dvStr.includes(".")
                                        ? (
                                            (dv = BigInt(dvStr.replace(".", ""))),

                                            dvStr.substring(dot + 1).length
                                        )
                                        :
                                        (
                                            (dv = BigInt(dvStr)),
                                            0
                                        )
                                    )
                                )
                                ? (
                                    n = (
                                        moveDot(
                                            n.replace(".", ""),
                                            l,
                                            n.indexOf("."),
                                            0
                                        )
                                    )
                                )
                                : n
                            ),

                            ((n = t.trimZ(n, 0)).startsWith(".") && (n = "0"+ n)),

                            ((dot = n.indexOf(".")) === -1)
                            ||
                            ((n = t.trimZ(n, 1)).endsWith(".") && (n = n.substring(0, n.length - 1))),
                            
                            (n.endsWith(".0") && (n = n.substring(0, n.length - 2))),
                            (lnth = n.length)

                        );
                        
                        for (; i < lnth; i++) {
                            last = i === lnth - 1;
                            cL = n[i];

                            if (
                                ( ( dot = rs.indexOf(".") ) > -1 )
                                &&
                                rs.substring(dot + 1).length > aD
                            ) {
                                break;
                            }
                            else if (  ( cL === "." ) ) {
                                inDc = 1;
                                rs = (
                                    rs === ""
                                    ? "0."
                                    : rs + "."
                                );
                            }
                            
                            else if (
                                (from =
                                    BigInt(
                                        bf += cL
                                    )
                                )
                                >= dv
                            )
                            {
                                rs += (
                                    (divisor = closeDivisor(from, dv))
                                    .toString()
                                );
                                bf = (
                                    from -
                                    closeDivider(divisor, dv)
                                );
                                
                            }
                            else {
                                rs += "0";
                            }
                            
                            (last)
                            &&
                            (
                                (inDc === 0) && ((inDc = 1), (rs +=".")),
                                (lnth += 1),
                                (n += '0')
                            );
                        
                            
                        };

                        return rs;
                    }

                )(
                    withoutMZero(t.toString()),
                    BigInt,
                    withoutMZero(n),
                    

                    moveDot,
                    tmpv,
                    t
                )
                
                ),
                (t.m = startM),
                t
            )

            )

            )
        )
    }
)