

export default (
    (t, tmpv, n, f, s) => {
        var fI = 0,
            sI = 0;

        return (

            ((fI = (t.inf === 1)) && (sI = (n === "Infinity")))
            ? t.toNaN(t, tmpv)

            : (
            
            fI
            ? (
                (t.m = ((f + s) & 1)),
                t
            )
            : t.toZero(t, tmpv)

            )
        );
    }
)