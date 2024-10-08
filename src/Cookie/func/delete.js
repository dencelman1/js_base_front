import updateCore from "./updateCore.js";

export default (
    (k, src) => (
        updateCore(k, "", -1, src)
    )
)