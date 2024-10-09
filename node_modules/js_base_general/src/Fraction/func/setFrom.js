

export default (
    function(
        c,
        fulln
    ) {
        var
            dot = (fulln.length - c) - 1,
            dc = this.trimZ(fulln.substring(dot), 1)
        ;

        return (
            (
                this.z = (
                    (
                        (
                            this.dc = (
                                BigInt(
                                    dc
                                )
                            )
                        )
                        === this.tmpv
                    )
                    ? 0
                    : (
                        this.collectZ(dc, 0) + (dot < 0 ? -dot: 0)
                    )
                )
            ),

            (
                this.int = (
                    BigInt(
                        fulln.substring(
                            0,
                            dot
                        )
                    )
                )
            ),
            this
        );
    }
)