import * as funcs from "./funcs/index.js";


function gt(n) {
    this.n = n;
};

Object.assign(gt.prototype, funcs)

export default gt;
