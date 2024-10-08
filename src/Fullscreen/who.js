

export default (
    (d) => (
        d.fullscreenElement ||
        d.webkitFullscreenElement ||
        d.mozFullScreenElement ||
        d.msFullscreenElement ||
        null
    )
);
