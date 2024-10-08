

export default (
    (e, pos, ut) => (
        (pos[2] === -1)
        ? (
            (e.ctrlKey || 0)
            && (
                (pos[2] = pos[0]),
                (pos[3] = pos[1]),
                1
            )
        )
        : (
            (e.ctrlKey && 1) || (
                ut.remSelect(e, pos, ut),
                (pos[2] = -1) &&
                (pos[3] = -1) &&
                0
            )
        )
    )
)