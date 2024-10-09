import { floor, random, pow } from "#utils/general";

function Generate() {

};

Generate.prototype.code = (l) => (
    (
        floor(
            random() * (
                (
                    pow(10, l)
                ) - (
                    l = pow(10, l - 1)
                )
            )
        )
    )
    + l
);

export default Generate;
