

export default function() {
    var v = "";
    v = (
        (this.nan === 1)
        ? "NaN"
        : (
            (
                (
                    this.m === 1
                )
                ? "-"
                : ""
            )
            +
            (
                (this.inf === 1)
                ? "Infinity"
                : (
                    this.int.toString() +
                    "." +
                    this.fullDc(
                        0, this.dc.toString(), this.z
                    )
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