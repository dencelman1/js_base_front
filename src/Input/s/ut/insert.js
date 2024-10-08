

export default (
    (t, ut, sel, ln, nLn) => {
        var lall = null;
        
        return (
            (
                nLn.style.top = (parseInt(ln.style.top) + ut.lh ) + "px"
            )
            &&
            (
                lall = Array.from(t.querySelectorAll(sel))
            )
            .slice(
                lall.indexOf(ln) + 1
            )
            .forEach((line) => (
                line.style.top = (
                    (
                        parseInt(line.style.top) +
                        ut.lh
                    ) +
                    "px"
                )
            ))
            ||
            ln.insertAdjacentElement('afterend', nLn)
        );
    }
)