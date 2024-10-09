

function Stage( all ) {
    this.i = 0;
    this.all = ( all );
}

Stage.prototype.to = function(i) {
    this.i = i
    return this;
};

Stage.prototype.isCompleted = function() {
    return this.i > ( this.all().length - 1 )
};

Stage.prototype.onNext = function(cb) {
    return new Proxy(
        this,
        {
            get(t, p, r) {
                return (
                    (p === "next")
                    ? function(d) {
                        cb(
                            t.current(), ( t[p](d) ).current()
                        );

                        return t;
                    }
                    : t[p]
                )
            }
        }
    )
};

Stage.prototype.isLast = function() {
    return (
        this.i === ( this.all().length - 1 )
    )
};

Stage.prototype.current = function() {
    return (
        ( this.all() )[ this.i ]
    )
};

Stage.prototype.next = function(d) {
    (d ? (this.i += d): ++this.i)
    return this;
};



export default Stage;
