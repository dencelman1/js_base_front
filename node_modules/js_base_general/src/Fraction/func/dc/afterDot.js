

export default (
    (t, aD) => {
        var
            str = t.toString(),
            m = str.startsWith("-"),
            dc = "",
            dot  = 0,
            int = (
                (str = m ? str.substring(1): str)
                .substring(0, (dot = str.indexOf(".")))
            ),
            dc = (
                str
                .substring(dot + 1)
            )

        ;
        (dc === "0")
        || (
            dc = dc.substring(0, aD)
        );
        return (
            t.adopt(
                (m ? "-": "") +
                int +
                "." +
                dc
            )
        )
    }
)