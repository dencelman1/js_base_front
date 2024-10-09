

export default (
    (t, tmpv, n, f, s) => {
        var
            nl = (
                (t.int === tmpv)
                &&
                (t.dc === tmpv)
            )
        ;
        
        return (
            (
                (
                    t.isZero(n) && (t.inf === 1)
                )
                ||
                (
                    t.isInfinity(n) &&
                    (nl && t.inf === 0)
                )
            )
            ? t.toNaN(t, tmpv)
            
            : (
                t.toInfinity(
                    t,
                    tmpv,
                    Number(
                        (f + s) & 1
                    )
                )
            )
        );
    }
)