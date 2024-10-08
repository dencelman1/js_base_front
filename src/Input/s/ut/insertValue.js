

export default (
    (t, pos, ut) => (text) => {
        var
            cspl = (
                ut.value(
                    t,
                    pos,
                    ut
                )
                .split(/(?<!\\)\n/)
            ),
            str = "",

            x = pos[0],
            y = pos[1],

            ps = (
                text.split(/(?<!\\)\n/)
            )
        ;

        return (
            (
                pos[0] = (
                    ps.length === 1
                    ? x + ps[0].length
                    : ps[ps.length - 1].length
                )
            ),
            (pos[1] += (ps.length - 1)),

            (
                cspl[y] = (
                    (
                        str = cspl[y]
                    )
                    .slice(0, x) +
                    text +
                    str.slice(x)
                )
            ),
            
            ut.setValue(t, ut, cspl.join("\n")),
            ut.cursorMove(t, pos, ut)
        );
    }
);
