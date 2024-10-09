

export default (
    (n, dot) => (
        BigInt(
            (dot === -1)
            ? n
            : n.substring(0, dot)
        )
    )
)