import {mod} from "#utils/general";

export default (
    function(
        n // double
    ) {
        var
            int = 0
        ;
        return (
            new this(
                BigInt(
                    (int = (n | 0)).toString()
                ),
                BigInt(
                    mod(n, int)
                )
            )
        )
    }
)