
export default (
    function(i) {
        return (
            BigInt(
                this.fullDc(
                    i, this.dc.toString(), this.z
                )
            )
        );
    }
);