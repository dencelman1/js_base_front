

export default (
    (e) => (
        (
            e.requestFullscreen ||
            e.msRequestFullscreen ||
            e.mozRequestFullScreen ||
            e.webkitRequestFullscreen
        )
        .bind(e)
    )
)