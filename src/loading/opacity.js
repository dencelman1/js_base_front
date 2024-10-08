

export default (e, cb, ms, to) => {
    var p = e.style.opacity;
    return (
        (e.style.opacity = (to || 0).toString()) &&
        setTimeout(() => (
            Promise.resolve(
                cb(e)
            )
            .then(() => (
                e.style.opacity = p
            ))
        ), ms)
    );
}