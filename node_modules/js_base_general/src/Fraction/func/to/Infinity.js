

export default (
    (t, tmpv, m) => (
        (t.dc = tmpv),
        (t.int = tmpv),
        (t.m = m),
        (t.nan = (t.z = 0)),
        (t.inf = 1),
        t
    )
)