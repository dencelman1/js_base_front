

function RegexPattern(v) {
    this.v = v;
};

RegexPattern.prototype.withValue = function(v) {
    this.v = v;
    return this;
}

RegexPattern.prototype.patterns = function() {
    return {
        email: /^(?=.{1,300}$)([a-zA-Z0-9._%+-]{1,64})@([a-zA-Z0-9.-]{1,253})\.[a-zA-Z]{2,}$/,
        name: /^[a-z][a-z0-9_]{0,31}$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
        givtakUrl: /^https:\/\/(?:[a-zA-Z0-9-]+\.)?givtak\.(com|xyz)(?:\/.*)?$/,
        code: /\b\d{6}\b/g,
    }
};

RegexPattern.prototype.is = function(type) {

    return (
        ( this.patterns()[type] )
        .test(this.v)
    )
    
};


RegexPattern.prototype.isFrom = function(types) {
    return (
        types.reduce((c, v) => (
            (this.is(v))
            ? v
            : c
        ), "")
    )
}

export default RegexPattern;
