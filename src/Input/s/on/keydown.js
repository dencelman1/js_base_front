
export default (
    (
        pos, id,
        hs, ut,
        isType, type
    ) =>
        
    (e) => {
        // ln = e.currentTarget.querySelector(""),
        // cr = ln.querySelector(" .cursor"),
        // l = ln.querySelector(".c"),
        
        var h, cr;

        return (
            (
                (h = hs[e.keyCode])
                ? e.preventDefault() || h(e, pos, ut)
                : (
                    isType(e.keyCode)
                    &&
                    (
                        e.preventDefault() ||
                        type(e, pos, ut)
                    )
                )
            ),
            (
                (
                    cr = e.currentTarget.querySelector(".cursor")
                )
                .classList.add("type")
                ||
                clearTimeout(id),
                (
                    id = setTimeout(
                        () => (
                            cr.classList.remove("type")
                        ),
                        200
                    )
                )
            )
        );
    }
)