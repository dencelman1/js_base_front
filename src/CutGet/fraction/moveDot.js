import {abs} from "#utils/general";


export default (
    (
        r, // str.replace(".", "")
        steps, // int
        dot, // str.indexOf(".")
        ni // 0
    ) => (
        (dot === -1) && (
            (dot = r.length)
        ),

        (
            (
                r = (
                    (
                        r = (
                            (ni = (dot + steps)) < 0
                            ? (
                                (r = (
                                    '0'.repeat(abs(ni)) + r
                                )),
                                (ni = 1),
                                r
                            )
                            : (

                            (ni > r.length)
                            ? (r + '0'.repeat(ni - r.length + 1))
                            : r

                            )
                        )
                    )
                    .slice(0, ni)
                    +
                    '.'
                    +
                    r.slice(ni)
                )
            )
            .startsWith('0')
            &&
            (r.startsWith('0.') === false)
            &&
            (r.startsWith('.') === false)
        )
        ? r.substring(1)
        : r
    )
)