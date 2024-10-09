

export default (
    (t, tmpv) => (
        (t.dc = tmpv),
        (t.int = tmpv),
        (t.nan = (t.inf = (t.m = (t.z = 0)))),
        t
    )
)