

export default (
    (e, pos, ut) => {
        var
            u = null,
            a = null
        ;
        return (
            ut.clearSelect(e,pos),
            (
                a = (
                    (
                        u = ut.undo
                    )[
                        u.length - 1
                    ]
                )
            )
            &&
            (
                (u.length -= 1),
                a.undo(e, pos, ut),
                ut.redo.push(a)
            )
        )
    }
)