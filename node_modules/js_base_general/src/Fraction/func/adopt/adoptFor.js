

export default (
    (
        t,
        
        n,
        operName,
        f, // t.toString()
        aD
    ) => (
        t.adopt(n),
        t[operName](f, aD)
    )
)