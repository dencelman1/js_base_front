

export default (
    (d) => {
        var
            n = d.toString(),
            _ = n.indexOf("e")
        ;
        

        return (
            (_ === - 1)
            ? n
            : (
                d.toFixed(
                    n.substring(_ + 2)
                )
            )

        );
    }
)