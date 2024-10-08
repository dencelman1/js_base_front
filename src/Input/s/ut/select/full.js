

export default (
    (cb, straight) =>

    (e, pos, ut) => {

        var
            shft
        ;
        
        return (
            (
                shft = straight || ut.checkUnselect(
                    e,
                    pos,
                    ut
                )
            ),
            cb(e, pos, ut),
            (
                shft && ut.renderSelect(e, pos, ut)
            )
        )
    }
)