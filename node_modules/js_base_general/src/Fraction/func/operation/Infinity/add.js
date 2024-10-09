

export default (
    (t, tmpv, n, f, s) => {
        var fI = (t.inf === 1), sI = t.isInfinity(n);
        

        return (
            (
                (
                    (f + s) === 1
                )
                &&
                sI
                &&
                fI
            )
        )
        ? t.toNaN(t, tmpv)
        : (

            t.toInfinity(
                t,
                tmpv,
                (
                    (fI && f === 1) ||
                    (sI && s === 1)
                )
                ? 1
                : 0
            )
        )
    }
);