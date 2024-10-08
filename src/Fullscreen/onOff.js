

export default (
    (dc, cb) => {
        var f = (
            (e) => (
                dc.removeEventListener("fullscreenchange", f) ||
                dc.removeEventListener("webkitfullscreenchange", f) ||
                dc.removeEventListener("mozfullscreenchange", f) ||
                dc.removeEventListener("MSFullscreenChange", f) ||

                cb(e)
            )
        );

        return (
            dc.addEventListener("fullscreenchange", f) ||
            dc.addEventListener("webkitfullscreenchange", f) ||
            dc.addEventListener("mozfullscreenchange", f) ||
            dc.addEventListener("MSFullscreenChange", f)
        );
    }
)