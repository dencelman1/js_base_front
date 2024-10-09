import load from "./load.js";

function Script() {};

Script.prototype.load = load;

Script.create = (id, src) => (
    Object.assign(
        document.createElement("script"),
        {
            id,
            src,
            type: 'text/javascript'
        }
    )
)

export default Script;
