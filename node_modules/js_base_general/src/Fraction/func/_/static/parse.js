

export default (
    (n, t, cb) => {
        var
            dot = 0,
            int = "",
            m = "0",
            z = 0,
            nan = t.isNaN(n),
            inf = t.isInfinity(n),
            
            startM = 0
        ;
        
        return (
            (
                (startM =
                    Number(
                        (n = t.toFr(n, inf, nan))
                        .startsWith("-")
                    )
                )
                && (n = n.substring(1))
            ),

            (
            
            (nan || inf)
            ? t[n](t, t.tmpv, startM)

            : (


                (
                    (
                        dot =
                            n
                            .indexOf(".")
                    )
                    === -1
                )
                ||
                (
                    (int = n.substring(0, dot)),
                    (
                        (z =
                            t.collectZ(
                                (
                                    m = (
                                        t.trimZ(
                                            n.substring(dot + 1),
                                            1
                                        )
                                    )
                                ),
                                0
                            )
                        ) > 0 && m === "0"
                    )
                    && (z = 0)
                ),
                cb(
                    BigInt( int ),
                    BigInt( m ),
                    z,
                    startM,
                    inf,
                    nan
                )
            )

            )
        );
    }
)