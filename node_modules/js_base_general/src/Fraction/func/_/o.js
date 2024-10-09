

export default (
    (name, cb) =>
        
    function(n, aD) {
        var
            t = this,
            tmpv = t.tmpv,
            nan = t.isNaN(n),
            inf = t.isInfinity(n)
        ;
        
        
        return (
            (n = t.toFr(n, inf, nan)),
            
            (
                (nan) ||
                (t.nan === 1)
            )
            ? t.toNaN(t, tmpv)
            : (
                (
                    (inf) ||
                    (t.inf === 1)
                )
                ? (
                    t[name + "Infinity"](
                        t, tmpv, n, Number(t.m === 1), Number(n.startsWith("-"))
                    ),
                    t
                )
                : (
                    cb(t, n, (t.aD = (aD || t.aD)))
                )
            )
        );
    }
)