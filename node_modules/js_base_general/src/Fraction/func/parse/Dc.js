

export default (
    (
        n, // str
        dot // n.indexOf(".")
    ) => (
        (dot === -1)
        ? "0"
        : n.substring(dot + 1)
    )
)