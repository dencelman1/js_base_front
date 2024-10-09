

export default (
    function() {
        Object.keys(this)
        .forEach((k) => (
            k === "all" || console.log(k) || this[k]()
        ))
    }
)