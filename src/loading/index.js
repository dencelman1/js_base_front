import Progress from "./progress.js";
import LoadSpin from "./LoadSpin.js";
import opacity from "./opacity.js";


export default (() => {
    var oa = {
        opacity,
        class: (s, lo) => (
            (
                lo ||= document.getElementById("loadingOverlay")
            )
            .setAttribute(
                "aria-label",
                (
                    s
                    ? "loading"
                    : 'loaded'
                )
            )
        )
    }

    return (
        Object.assign(
            (
                s,
            ) => (
                s.startsWith("progress")
                ? new Progress(s, document.querySelector("#loadingOverlay .progress-line"))
                : (
                
                s.startsWith("spin")
                ? new LoadSpin(s)
                
                : null
    
                )
            ),
            oa
        )
    )

})()
