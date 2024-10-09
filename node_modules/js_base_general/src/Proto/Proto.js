
function Proto() {}

Proto.extendsFor = (parent, child) => (
    (
        child.prototype = (
            child.prototype
            ? Object.assign(child.prototype, parent.prototype)
            : Object.create(parent.prototype)
        )
    )
    &&
    (
        child.prototype.constructor = child
    )
);

export default Proto;
