

export default function(id, root, selector) {
    
    return (
        (
            (
                selector &&
                document.querySelector(selector)
            )
            ||
            document.body
        )
        .appendChild(
            this.constructor.create(
                id,
                `${process.env.CDN_ORIGIN}/javascript/app${root}`
            )
        )
        &&
        this
    );
};
