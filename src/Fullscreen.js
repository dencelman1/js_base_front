

export default (
    {
        who: (
            (d) => (
                d.fullscreenElement ||
                d.webkitFullscreenElement ||
                d.mozFullScreenElement ||
                d.msFullscreenElement ||
                null
            )
        ),
    
        on: (
            (e) => (
                e.requestFullscreen ||
                e.msRequestFullscreen ||
                e.mozRequestFullScreen ||
                e.webkitRequestFullscreen
            )
        ),
    
        off: (
            (d) => (
                d.exitFullscreen ||
                d.msExitFullscreen ||
                d.mozCancelFullScreen ||
                d.webkitExitFullscreen
            )
        )
    }
);
