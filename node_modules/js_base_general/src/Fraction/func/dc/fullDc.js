

export default (
    function(i, dc, z) {
        return (
            (
                this.leftZ(z) +
                dc
            )
            .padEnd(i, "0")
        );
    }
)