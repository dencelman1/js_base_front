

export default (
    (
        n,
        f //0
    ) => (
        n.substring(
            0,
            ((f = ( n.indexOf(";") )) === -1)
            ? undefined
            : f
        )
    )
)