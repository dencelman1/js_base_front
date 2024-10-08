


export default (
    (
        t,
        f//0
    ) => (
        ((f = t.indexOf('codecs="')) === -1)
        ? ""
        : t.substring((f += 8), t.indexOf('"', f))
    )
)