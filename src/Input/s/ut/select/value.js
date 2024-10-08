

export default (
    (t, pos, ut, ahead) => {
        return Array.from(
            t
            .querySelectorAll(".lines .line")
        )
        .slice(
            (ahead ? pos[3]: pos[1]),
            (ahead ? pos[1]: pos[3]) + 1,
        )
        .reduce(
            (r, line, i, arr) => {
                var tx = line.querySelector(".c").textContent;

                return (
                    r +
                    (
                        (i === 0)
                        ? (
                            ahead
                            ? (
                                tx.slice(pos[2], (
                                    arr.length === 1
                                    ? pos[0]
                                    : undefined
                                ))
                            )
                            : tx.slice(pos[0], (
                                arr.length === 1
                                ? pos[2]
                                : undefined
                            ))
                        )
                        : (

                        (i === (arr.length - 1))
                        ? (
                            ahead
                            ? (
                                tx.slice(
                                    (
                                        arr.length === 1
                                        ? pos[2]
                                        : 0
                                    ),
                                    pos[0]
                                )
                            )
                            : (
                                tx.slice(
                                    (
                                        arr.length === 1
                                        ? pos[0]
                                        : 0
                                    ),
                                    pos[2]
                                )
                            )
                        )
                        
                        : tx


                        )
                    )
                    .replaceAll("\n", "\\n")
                    +
                    (
                        ((arr.length === 1) || (i === (arr.length - 1)))
                        ? ""
                        : "\n"
                    )
                );
            },
            ""
        )
    }
)