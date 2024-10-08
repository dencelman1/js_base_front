import { selectFull } from "../../ut/select/index.js";


export default (
    selectFull(
        (e, pos, ut) => {
            var t, lst = null;

            pos[2] = (pos[3] = 0);

            pos[0] = (
                lst = (
                    (t=e.currentTarget).querySelector(
                        `.lines .line:nth-child(${
                            (
                                pos[1] = (
                                    t.querySelector(".lines")
                                    .childElementCount
                                    -
                                    1
                                )
                            )
                            + 1
                        })`
                    )
                )
            )
            .querySelector(".c")
            .textContent.length;
            
            return (
                lst.appendChild(
                    t.querySelector(".cursor")
                )
                .style.left = (
                    ut.w(
                        t.querySelector(".check-letter"),
                        
                        lst.querySelector(".c").textContent
                    )
                    + "px"
                )
            );
        },
        true
    )
);
