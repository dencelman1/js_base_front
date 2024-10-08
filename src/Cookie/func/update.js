import updateCore from "./updateCore.js";
import toValue from './toValue.js';


export default (
    (
        k,
        v,
        e,
        src
    ) => (
        updateCore(
            k,
            toValue(v),
            e,
            src
        )
    )
)