

export default (
    t,
    f//0
) => (
    t.substring(
        t.indexOf("/") + 1,
        ((f = t.indexOf(";")) === -1)
        ? undefined
        : f
    )
)