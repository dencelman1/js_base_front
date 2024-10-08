

export default (
    (t, cr, v) => (
        t.querySelector(`.line:nth-child(${v + 1})`).appendChild(cr)
    )
)