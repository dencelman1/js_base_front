
export default (
    function() {
        return (
            this.nan === 1
            ? NaN
            : (
                (this.inf === 1)
                ? (m === 1) ? -Infinity: Infinity
                
                : (
                    BigInt(
                        this.toString()
                        .replace(".", "")
                    )
                )
            )
        );
    }
)