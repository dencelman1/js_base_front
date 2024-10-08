

export default (
    (line, t, ut) => {
        var lall = Array.from(t.querySelectorAll(".lines .line"));

        lall = lall.slice(lall.indexOf(line) + 1);

        (
            t.querySelector(`.ss li:nth-child(${ut.elInd(line) + 1})`)
            .remove()
            ||
            line.remove()
        );
        
        lall.forEach((ln) => (
            (t.querySelector(`.ss li:nth-child(${ut.elInd(ln) + 1})`)
            .style.top = (
                ln.style.top =
                ((parseInt(ln.style.top) - (
                    ut.lh
                )) + "px")
            ))
        ))
        
    }
);
