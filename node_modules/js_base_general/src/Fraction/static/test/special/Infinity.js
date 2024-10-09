import { Fraction } from "#utils/general";

export default (() => {
    var p = Fraction.parse.bind(Fraction),
    
        res = [
            "Infinity",        // 0  (Infinity + 2)
            "-Infinity",       // 1  (-Infinity + (-1))
            "NaN",             // 2  (Infinity - Infinity)
            "Infinity",        // 3  (5 / 0)
            "-Infinity",       // 4  (-Infinity / 2)
            "Infinity",        // 5  (Infinity * 2)
            "-Infinity",       // 6  (-Infinity * 1)
            "Infinity",        // 7  (Infinity * 0.25)
            "Infinity",        // 8  (Infinity / 2)
            "-Infinity",       // 9  (-Infinity * 1)
            "NaN",             // 10 (Infinity / Infinity)
            "Infinity",        // 11 (Infinity + 100)
            "Infinity",        // 12 (Infinity * 100)
            "0",               // 13 (1 / Infinity)
            "NaN",             // 14 (Infinity * 0)
            "-Infinity",       // 15 (Infinity * -1)
            "Infinity",        // 16 (Infinity * Infinity)
            "0",               // 17 (0 / Infinity)
            "-Infinity",       // 18 (-2 / 0)
            "-Infinity",       // 19 (-1 / 0)
            "Infinity",        // 20 (Infinity + Infinity)
            "NaN",             // 21 (-Infinity + Infinity)
            "NaN",             // 22 (Infinity - Infinity)
            "NaN",             // 23 (Infinity / Infinity)
            "NaN",             // 24 (0 * Infinity)
            "Infinity",        // 25 (Infinity - -Infinity)
            "-Infinity",       // 26 (-Infinity + (-Infinity))
            "Infinity",        // 27 (Infinity * 0.5)
            "-Infinity",       // 28 (-Infinity * 0.5)
            "NaN",             // 29 (0 / 0)
            "Infinity",        // 30 (1 / 0)
            "-Infinity",       // 31 (-1 / 0)
            "NaN",             // 32 (Infinity * NaN)
            "NaN",             // 33 (-Infinity * NaN)
            "NaN",             // 34 (NaN + NaN)
            "NaN",             // 35 (NaN - NaN)
            "Infinity",        // 36 (Infinity + 0)
            "-Infinity",       // 37 (-Infinity + 0)
            "Infinity",        // 38 (Infinity - 0)
            "-Infinity",       // 39 (-Infinity - 0)
            "NaN",             // 40 (NaN * 0)
            "Infinity",        // 41 (Infinity * 1)
            "-Infinity",       // 42 (-Infinity * 1)
            "Infinity",        // 43 (Infinity / 1)
            "-Infinity",       // 44 (-Infinity / 1)
            "NaN",             // 45 (Infinity - NaN)
            "NaN",             // 46 (NaN / Infinity)
            "NaN",             // 47 (Infinity / NaN)
            "NaN",             // 48 (-Infinity / NaN)
            "NaN"              // 49 (0 * NaN)
        ],
    
        calls = 0;
    
    calls = (
        [
            () => p("Infinity")["+"](("2")), // 0
            () => p("-Infinity")["+"](("-1")), // 1
            () => p("Infinity")["-"]("Infinity"), // 2
            () => p("5")["/"]("0"), // 3
            () => p("-Infinity")["/"]("2"), // 4
            () => p("Infinity")["*"]("2"), // 5
            () => p("-Infinity")["*"](("1")), // 6
            () => p("Infinity")["*"](("0.25")), // 7
            () => p("Infinity")["/"](("2")), // 8
            () => p("-Infinity")["*"](("1")), // 9
            () => p("Infinity")["/"](("Infinity")), // 10
            () => p("Infinity")["+"](("100")), // 11
            () => p("Infinity")["*"](("100")), // 12
            () => p("1")["/"](("Infinity")), // 13
            () => p("Infinity")["*"](("0")), // 14
            () => p("Infinity")["*"](("-1")), // 15
            () => p("Infinity")["*"](("Infinity")), // 16
            () => p("0")["/"](("Infinity")), // 17
            () => p("-2")["/"](("0")), // 18
            () => p("-1")["/"](("0")), // 19
            () => p("Infinity")["+"](("Infinity")), // 20
            () => p("-Infinity")["+"](("Infinity")), // 21
            () => p("Infinity")["-"](("Infinity")), // 22
            () => p("Infinity")["/"](("Infinity")), // 23
            () => p("0")["*"](("Infinity")), // 24
            () => p("Infinity")["-"](("-Infinity")), // 25
            () => p("-Infinity")["+"](("-Infinity")), // 26
            () => p("Infinity")["*"](("0.5")), // 27
            () => p("-Infinity")["*"](("0.5")), // 28
            () => p("0")["/"](("0")), // 29
            () => p("1")["/"](("0")), // 30
            () => p("-1")["/"](("0")), // 31
            () => p("Infinity")["*"]("NaN"), // 32
            () => p("-Infinity")["*"]("NaN"), // 33
            () => p("NaN")["+"]("NaN"), // 34
            () => p("NaN")["-"]("NaN"), // 35
            () => p("Infinity")["+"](("0")), // 36
            () => p("-Infinity")["+"](("0")), // 37
            () => p("Infinity")["-"](("0")), // 38
            () => p("-Infinity")["-"](("0")), // 39
            () => p("NaN")["*"](("0")), // 40
            () => p("Infinity")["*"](("1")), // 41
            () => p("-Infinity")["*"](("1")), // 42
            () => p("Infinity")["/"](("1")), // 43
            () => p("-Infinity")["/"](("1")), // 44
            () => p("Infinity")["-"]("NaN"), // 45
            () => p("NaN")["/"](("Infinity")), // 46
            () => p("Infinity")["/"]("NaN"), // 47
            () => p("-Infinity")["/"]("NaN"), // 48
            () => p("0")["*"]("NaN") // 49
        ].reduce((count, rs, i) => {
            var value = rs(),
                newRes = (
                    value.is(res[i])
                );
            newRes || console.log(`[${i}]: ${newRes} result of "${value}" === "${res[i]}"`);
            
            return count + Number(newRes);
        }, 0)
    );
    
    return console.log(`[ ${calls} / ${res.length} ]`);
});
