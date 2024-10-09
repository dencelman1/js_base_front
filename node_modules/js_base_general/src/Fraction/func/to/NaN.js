

export default (
    (t, tmpv) => (
        (t.dc = tmpv),
        (t.int = tmpv),
        (t.inf = (t.m = (t.z = 0))),
        (t.nan = 1),
        t
    )
)