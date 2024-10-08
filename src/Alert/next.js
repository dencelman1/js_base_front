import clearBtn from "./clearBtn.js";


export default (from, l, cb) => {
    clearBtn()
    ||
    (
        (
            (l === null)
            ? (l = document.getElementById("alert"))
            : (l)
        )
        .setAttribute("data-id", "0")
    )
    ||
    ((l = l.classList).value = from)
    &&
    setTimeout(
        (
            () => (
                (l.value === from) &&
                (l.value = "")
                ||
                (cb === null)
                ||
                cb()
            )
        ),
        200
    )
}