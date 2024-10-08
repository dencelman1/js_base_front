import * as f from './func/index.js';
import * as s from './static/index.js';

function ExactDecimal(
    int, // bigint
    dc // bigint
) {
    this.int = int;
    this.dc = dc;
}

Object.assign(ExactDecimal, s)
Object.assign(ExactDecimal.prototype, f)

export default ExactDecimal;