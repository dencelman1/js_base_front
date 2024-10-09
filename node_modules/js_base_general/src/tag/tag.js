


export default (
    new Proxy(
        (
            (
                name,
                attr,
                inner
            ) => (
                inner
                ? `<${name} ${attr}>${inner}</${name}>`
                : `<${name} ${attr}/>`
            )
        ),

        {
            get(t, p) {
                return (
                    (attr, inner) => (
                        t(p, attr, inner)
                    )
                );
            }
        }
    )
);
