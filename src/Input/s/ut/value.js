

export default (
    (t) => {
        return Array.from(
            t
            .querySelectorAll(".lines .line")
        )
        .reduce(
            (r, line, i, arr) => (
                
                r +
                (
                    line.querySelector(".c").textContent
                    .replaceAll("\n", "\\n")
                ) +
                (
                    ((arr.length === 1) || (i === (arr.length - 1)))
                    ? ""
                    : "\n"
                )
            ),
            ""
        )
    }
)