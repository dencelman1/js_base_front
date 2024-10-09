

export default (
    function(n) {
        return (
            Number(
                this.toString()
                ===
                (
                    this.toFr(
                        n,
                        this.isInfinity(n),
                        this.isNaN(n)
                    )
                )
            )
        );
    }
)