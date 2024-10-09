
export default (
    function(
        n // string
    ) {
        var
            t = this
        ;
        
        return (
            t._parse(
                n,
                t,
                (
                    int,
                    dc,
                    z,
                    m,
                    inf,
                    nan
                ) => (
                    (t.int = int),
                    (t.dc = dc),
                    (t.z = z),
                    (t.m = m),
                    (t.inf = inf),
                    (t.nan = nan),
                    t
                )
            )
        );
    }
)
