

export default (
    function(n, inf, nan) {
        var startM = false, v = "";

        inf ||= this.isInfinity(n);
        nan ||= this.isNaN(n);

        v = (
            (inf)
            ? (n)
            : (
                nan
                ? "NaN"
                : (
                    (startM = n.startsWith("-")),

                    ((startM ) ? "-": "")
                    +
                    this.trimZ(
                        this.trimZ(
                            this.mZero(
                                this.toWithDc(
                                    n
                                )
                            ),
                            0
                        ),
                        1
                    )
                )
            )
        );
        return (
            v === "-0.0"
            ? "0.0"
            : v
        )
    }
)
