


export default (
    (cr, cl, l, v, w) => (
        cr.style.left = (
            w(
                cl,      
                l.textContent.slice(0, v)
            )
            + "px"
        )
    )
)