
import * as f from './func/index.js';
import * as s from './static/index.js';

function Fraction(
    int, // bigint
    dc, // bigint,
    z, // int,
    m, // 0 / 1
    inf,
    nan
) {
    this.int = int;
    this.dc = dc;
    
    this.z = z;
    this.m = m;

    this.inf = inf;
    this.nan = nan;
    this.aD = this.AFTER_DOT;
}

Object.assign(Fraction, s);
Object.assign(Fraction.prototype, f);

(
    (p, f) => (
        (p["+"] = f.add),
        (p["-"] = f.subtract),
        (p["*"] = f.multiply),
        (p["/"] = f.divide)
    )
)(
    Fraction.prototype,
    f
);

export default Fraction;