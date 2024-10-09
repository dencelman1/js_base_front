

export default (
    (t, n, tmpv, aD) => {
        var
            fStrDc = "", sStrDc = "", smStr = "", smDcStr = "",
            fDcI = 0, sDcI = 0, l = 0, dot = n.indexOf("."),

            mStart = n.startsWith("-")
        ;
        
        // 1 remember z and to int both;
        // 2 operation with ints;   
        // 3 result to fraction;

        return (
            (
                l = (
                    (
                        (fDcI = (
                            (
                                fStrDc = (
                                    "0".repeat(t.z) +
                                    t.dc.toString()
                                )
                            )
                            .length
                        ))
                        >
                        (sDcI = (
                            (
                                sStrDc = (
                                    (
                                        n = (
                                            ( mStart = n.startsWith("-") )
                                            ? ( n.substring(1) )
                                            : n
                                        )
                                    )
                                    .substring(dot + 1)
                                )
                            )
                            .length
                        ))
                    )
                    ? fDcI
                    : sDcI
                )
            ),

            (
                t.z = (
                    (
                        (t.dc =
                            BigInt(
                                (
                                    smDcStr =
                                        t.trimZ(
                                            (
                                                smStr = (
                                                    (
                                                        t.m = (
                                                            Number(
                                                                (
                                                                    smStr = (
                                                                        (
                                                                            BigInt(
                                                                                (
                                                                                    (t.m ? "-": "")
                                                                                    +
                                                                                    t.int.toString()
                                                                                    +
                                                                                    fStrDc
                                                                                    .padEnd(
                                                                                        l,
                                                                                        "0"
                                                                                    )
                                                                                )
                                                                            )
                                                                            -
                                                                            BigInt(
                                                                                (
                                                                                    (mStart ? "-": "") +
                                                                                    n.substring(0, dot)
                                                                                    +
                                                                                    sStrDc
                                                                                    .padEnd(l, "0")
                                                                                )
                                                                            )
                                                                        )
                                                                        .toString()
                                                                    )
                                                                )
                                                                .startsWith("-")
                                                            )
                                                        )
                                                    )
                                                    ? smStr.substring(1)
                                                    : smStr
                                                )
                                            )
                                            .substring(
                                                dot = smStr.length - l
                                            ),
                                            1
                                        )
                                )
                            )
                        )
                        === tmpv
                    )
                    ? 0

                    : t.collectZ(smDcStr, 0)
                )
            ),
            (t.int =
                BigInt(
                    smStr.substring(0, dot) || "0"
                )
            ),

            t.afterDot(t, aD)
        );
    }
)