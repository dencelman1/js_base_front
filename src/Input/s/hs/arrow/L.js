import { selectFull } from "../../ut/select/index.js";

export default selectFull(
    (e, pos, ut) => {
        var
            t,
            ln,
            l
        ;

        return (
            (pos[0] === 0)
            ? (
                (ln = (
                    (
                        t = e.currentTarget
                    ).querySelector(".line:has(.cursor)")
                ).previousElementSibling) && (
                    (
                        
                        (
                            ln.appendChild(
                                ln.nextElementSibling.querySelector(".cursor")
                            )
                        )
                        .style.left = (
                            ut.w(
                                t.querySelector(".check-letter"),
                                (
                                    l = ln.querySelector(".c")
                                )
                                .textContent.slice(
                                    0,
                                    (
                                        pos[0] = (
                                            l
                                            .textContent
                                            .length
                                        )
                                    )
                                )
                            )
                        ) + "px"
                    )
                    &&
                    (pos[1] -= 1)
                )
            )
            : (
                (
                    t = e.currentTarget
                ).querySelector(".cursor")
                .style.left = (
                    ut.w(
                        t.querySelector(".check-letter"),
                        (
                            l = t.querySelector(".line:has(.cursor) .c")
                        )
                        .textContent.slice(
                            0, (
                                pos[0] -= 1
                            )
                        )
                    )
                ) + "px"
            )
        );
    }
)