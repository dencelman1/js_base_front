import { Fraction } from "#utils/general";

export default (
    () => {
        var
            p = Fraction.parse.bind(Fraction),
    
            res = [
                "NaN",        // 0 (NaN + 2)
                "NaN",        // 1 (NaN - 1)
                "NaN",        // 2 (Infinity - NaN)
                "NaN",        // 3 (NaN / 5)
                "NaN",        // 4 (2 / NaN)
                "NaN",        // 5 (NaN * 2)
                "NaN",        // 6 (NaN * -Infinity)
                "NaN",        // 7 (Infinity * NaN)
                "NaN",        // 8 (NaN / Infinity)
                "NaN",        // 9 (Infinity / NaN)
                "NaN",        // 10 (NaN / NaN)
                "NaN",        // 11 (NaN + Infinity)
                "NaN",        // 12 (Infinity + NaN)
                "NaN",        // 13 (NaN / Infinity)
                "NaN",        // 14 (NaN * 0)
                "NaN",        // 15 (0 * NaN)
                "NaN",        // 16 (NaN * NaN)
                "NaN",        // 17 (NaN / 0)
                "NaN",        // 18 (-2 / NaN)
                "NaN",        // 19 (NaN / -Infinity)
                "NaN",        // 20 (NaN + NaN)
                "NaN",        // 21 (NaN - NaN)
                "NaN",        // 22 (NaN * NaN)
                "NaN",        // 23 (NaN / NaN)
                "NaN",        // 24 (NaN * Infinity)
            ],
    
            calls = 0
        ;
        calls = (
            [
                () => p("NaN")["+"]("2"), // 0
                () => p("NaN")["-"]("1"), // 1
                () => p("Infinity")["-"]("NaN"), // 2
                () => p("NaN")["/"]("5"), // 3
                () => p("2")["/"]("NaN"), // 4
                () => p("NaN")["*"]("2"), // 5
                () => p("NaN")["*"]("-Infinity"), // 6
                () => p("Infinity")["*"]("NaN"), // 7
                () => p("NaN")["/"]("Infinity"), // 8
                () => p("Infinity")["/"]("NaN"), // 9
                () => p("NaN")["/"]("NaN"), // 10
                () => p("NaN")["+"]("Infinity"), // 11
                () => p("Infinity")["+"]("NaN"), // 12
                () => p("NaN")["/"]("Infinity"), // 13
                () => p("NaN")["*"]("0"), // 14
                () => p("0")["*"]("NaN"), // 15
                () => p("NaN")["*"]("NaN"), // 16
                () => p("NaN")["/"]("0"), // 17
                () => p("-2")["/"]("NaN"), // 18
                () => p("NaN")["/"]("-Infinity"), // 19
                () => p("NaN")["+"]("NaN"), // 20
                () => p("NaN")["-"]("NaN"), // 21
                () => p("NaN")["*"]("NaN"), // 22
                () => p("NaN")["/"]("NaN"), // 23
                () => p("NaN")["*"]("Infinity"), // 24
            ]
            .reduce((count, rs, i) => {
                var
                    value = rs(),
    
                    newRes = (
                        (
                            value
                            .is(
                                res[
                                    i
                                ]
                            )
                        )
                    )
                ;
                newRes || console.log(
                    `[ ${i} ]: ${newRes} result of  "${value}" === "${res[i]}"`
                )
                
                return (
                    count + Number(newRes)
                )
            }, 0)
        );
        
        return (
            console.log(`[ ${calls} / ${res.length} ]`)
        );
    }
)
