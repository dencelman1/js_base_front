
function LoadSpin() {
};

LoadSpin.prototype.data = (
    (
        elem,
        o,
        cb,
    ) => {
        var
            spin
        ;
        
        
        
        return (
            elem.classList.add("hasLoadSpin") ||
            elem.insertBefore(
                (
                    (
                        spin = document.querySelector("#base .loadSpin").cloneNode(true)
                    )
                    &&
                    spin.setAttribute("width", o.w) ||
                    spin.setAttribute("height", o.w) ||
                    spin
                ),
                elem.firstChild
            )
            &&
            Promise.resolve(
                cb()
            )
            .then(() => (
                spin.remove() ||
                elem.classList.remove("hasLoadSpin")
            ))
        );
    }
);

export default LoadSpin;