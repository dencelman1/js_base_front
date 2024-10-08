

export default (
    (d) => (
        d.exitFullscreen ||
        d.msExitFullscreen ||
        d.mozCancelFullScreen ||
        d.webkitExitFullscreen
    )
    .bind(d)
)