

export default (
    (dc, cb) => (
        dc.addEventListener("fullscreenchange", cb) ||
        dc.addEventListener("webkitfullscreenchange", cb) ||
        dc.addEventListener("mozfullscreenchange", cb) ||
        dc.addEventListener("MSFullscreenChange", cb)
    )
);
