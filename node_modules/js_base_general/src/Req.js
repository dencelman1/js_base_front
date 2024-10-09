import { stringify } from "#utils/general";


function Req(url, config) {
    this.url = url;
    this.config = (
        config
        ||
        {
            method: "GET",
        }
    );
};

Req.prototype.queryString = ( data ) => (

    Object.keys( data )
    .map(key => (
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    ))
    .join('&')

);

Req.prototype.get = function(data) {
    return (
        (
            this.url += (
                "?" + this.queryString(data)
            )
        )
        &&
        this
    );
}

Req.prototype.post = function(data) {
    return (
        Object.assign(
            this.config,
            {
                method: (
                    this.config.method === "GET"
                    ? "POST"
                    : this.config.method
                ),
                body: stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        &&
        this
    );
};

Req.prototype.fetch = function() {
    return (
        fetch(this.url, this.config)
    );
};

Req.prototype.textFetch = function(cb) {
    return (
        this.fetch()
        .then(r => r.text())
        .then(cb)
    )
};

Req.prototype.jsonFetch = function(cb) {
    return (
        this.fetch()
        .then(r => r.json())
        .then(cb)
    )
};

export default Req;
