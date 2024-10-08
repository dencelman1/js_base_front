

function Progress(s, line) {
    
    (this.line = line)
    .classList.value = (
        this.s = (
            "progress-line " +
            s.slice(8)
        )
    );
    
};

Progress.prototype.to = function(p) {
    this.line
    .style.setProperty("--width", (p.toString() + "%"))
};

Progress.prototype.done = function(cb) {
    var t = this;
    return (
        this.to(100) ||
        (this.line.classList.value = "progress-line closed") &&
        setTimeout(() => (
            t.to(0) ||
            cb &&
            setTimeout(() => cb(t), 500)
        ), 1_000)
    )
};



Progress.prototype.reset = function() {
    (
        this.line
        .classList.value = (
            this.s
        )
    );
    return this;
};

export default Progress;

