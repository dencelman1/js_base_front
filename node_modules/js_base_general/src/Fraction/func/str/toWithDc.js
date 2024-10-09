

export default (
    (n) => (
        (n.indexOf(".") === -1)
        ? n + '.0'
        : n
    )
)