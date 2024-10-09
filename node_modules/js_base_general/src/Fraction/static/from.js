import {abs, mod} from "#utils/general";

export default (
    function(
        n // double
    ) {
        var
            int = 0,
            m = mod(n, (int = (n | 0))),
            z = 0,
            less = Number(n < 0),
            p = this.prototype
        ;
        
        while(m[0] === "0") {
            m = m.substring(1);
            z++;
        };
        
        return (
            (
                (n === Infinity) ||
                (Number.isNaN(n))
            )
            ? (
                p[
                    n.toString()
                ](
                    this,
                    p.tmpv,
                    less
                )
            )
            : (
                new this(
                    BigInt(
                        abs(int).toString()
                    ),
                    BigInt(
                        m || "0"
                    ),
                    z,
                    less,

                    0, 0
                )
            )
        )
    }
)