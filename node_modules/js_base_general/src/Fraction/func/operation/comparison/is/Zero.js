

export default (
    (n) => (
        Number(
            (n === "-0.0") ||
            (n === "0.0")
        )
    )
)