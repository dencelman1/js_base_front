import { selectFull } from "../../ut/select/index.js";

export default selectFull(
    (e, pos, ut) => {
        
        var
            t,
            ln,            
            l
        ;

        return (
            (
                ln  = (
                    (
                        t = e.currentTarget
                    ).querySelector(".line:has(.cursor)")
                ).nextElementSibling
            )
            &&
            (
                (
                    ln.appendChild(
                        ln.previousElementSibling.querySelector(".cursor")
                    )
                    .style.left = (
                        ut.w(
                            t.querySelector(".check-letter"),
                            (
                                l = ln.querySelector(".c")
                            )
                            .textContent.slice(
                                0, (
                                    pos[0] = (
                                        (pos[0] >= l.textContent.length)
                                        ? l.textContent.length
                                        : pos[0] 
                                    )
                                )
                            )
                        )
                    ) + "px"
                ),
                (pos[1] += 1)
            )
            
        );
    }
)