import { selectFull } from "../../ut/select/index.js";

export default (
    selectFull(
        (e, pos, ut) => {
            var
                l,
                t = e.currentTarget,
                ln
            ;

            return (
                (
                    pos[0] === (
                        (
                            l = t.querySelector(".line:has(.cursor) .c")
                        )
                        .textContent.length
                    )
                )
                ? (
                    (
                        ln =
                            t.querySelector(".line:has(.cursor)")
                            .nextElementSibling
                    )
                    &&
                    (
                        (
                            (
                                ln.appendChild(t.querySelector(".cursor"))
                            )
                            .style.left = "0px"
                        ),
                        (pos[0] = 0),
                        (pos[1] += 1)
                    )
                    
                )
                : (
                    
                    t.querySelector(".cursor")
                    .style.left = (
                        ut.w(
                            t.querySelector(".check-letter"),
                            l.textContent.slice(
                                0, (
                                    pos[0] += 1
                                )
                            )
                        )
                    ) + "px"
                )
            );
        }
    )
);
