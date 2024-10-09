

export default (
    function(
        m,
        end // 0 or 1
    ) {
        var
            dl = 0,
            i = 0,
            sb = (
                (m) => (
                    m.substring(1)
                )
            ),
            smbl = ""

        ;

        (end === 1) &&
        (
            (dl = -1),
            (
                i = (
                    m.length - 1
                )
            ),
            (
                sb = (m) => (
                    m.substring(0, m.length - 1)
                )
            )
        );
        
        while(
            ((smbl = m[i]) === "0") ||
            (smbl === "-")
        ) {
            if (m.length > 1) {
                m = sb(m);
                i += dl;
            }
            else {
                break;
            }
        };
        
        return (
            (smbl === ".")
            ? (
                (end === 1)
                ? m + "0"
                : "0" + m
            )
            : m
        );
    }
)