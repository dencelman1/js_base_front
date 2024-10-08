import { selectFull } from "../ut/select/index.js";

export default selectFull(
    (e, pos, ut) => {
        var
            cr,
            t,
            l
        ;

        return (
            (
                (
                    cr = (
                        t = e.currentTarget
                    ).querySelector(".cursor")
                ).style.left = (
                    ut.w(
                        t.querySelector(".check-letter"),
                        (
                            l = cr.previousElementSibling
                        ).textContent
                    )
                    +
                    "px"
                )
            )
            &&
            (pos[0] = l.textContent.length)
        );
    }
)