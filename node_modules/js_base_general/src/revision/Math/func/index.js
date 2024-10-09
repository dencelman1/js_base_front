
export var

    floor = Math.floor,
    log10 = Math.log10,
    abs = Math.abs,
    ceil = Math.ceil,
    random = Math.random,
    pow = Math.pow,
    round = Math.round,

    min = (a,b) => (a>b?b:a),
    max = (a,b) => (a>b?a:b),

    maxMany = Math.max,

    closeDivisor = ( // adopted for BigInt
        // floor(

            (n, d) => (
                n / d
            )

        // )
    ),
    
    closeDivider = (
        (
            s, // divisor
            d
        ) => (
            s * d
        )
    ),

    

    intCount = (
        (n) => (
            (
                log10(
                    abs(
                        n || 1
                    )
                )
                | 0
            )
            + 1
        )
    ),

    mod = (
        (orig, int) => (
            orig.toString()
            .slice(
                intCount(int) + 1
            )
        )
    )
;