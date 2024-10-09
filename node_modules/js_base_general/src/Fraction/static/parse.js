import _parse from "../func/_/static/parse.js";

export default (
    function(
        n // string
    ) {
        var t = this;
        
        return (
            _parse(
                n,
                t.prototype,

                (
                    (
                        int,
                        dc,
                        z,
                        m,
                        inf,
                        nan
                    ) => (
                        new t(
                            int,
                            dc,
                            z,
                            m,
                            inf,
                            nan
                        )
                    )
                )
            )
        );
    }
)
