

export default (
    (e, pos, ut) => {
        var
            r = null,
            a = null
        ;
        return (
            ut.clearSelect(e,pos),
            (
                a = (
                    (
                        r = ut.redo
                    )[
                        r.length - 1
                    ]
                )
            )
            &&
            (
                (r.length -= 1),
                ut.undo.push(a),
                
                a.exec(e, pos, ut)
                
            )
        );
    }
)