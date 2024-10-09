

export default (
    (t, tmpv, n, f, s) => {
        var fI = (t.inf === 1), sI = t.isInfinity(n), both = fI && sI;
        
        return (
            (
                (
                    (f ===0 && s === 0)
                    ||
                    (f === 1 && s === 1)
                )
                &&
                (
                    both
                )
            )
        )
        ? t.toNaN(t, tmpv)
        : (
            t.toInfinity(
                t,
                tmpv,

                Number(
                    (fI && f === 1) && (!sI && s === 0)
                )
            )
        )
    }
);