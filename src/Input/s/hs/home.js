import { selectFull } from "../ut/select/index.js";

export default selectFull(
    (e, pos) => (
        ((
            e.currentTarget.querySelector(".cursor")
        ).style.left = "0px") &&
        (pos[0] = 0)
    )
)