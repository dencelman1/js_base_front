

export default (
    (el, pr) => (
        Array.prototype.indexOf.call((pr || el.parentNode.children), el)
    )
)