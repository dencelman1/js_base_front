

export default (
    () => (
        document.querySelectorAll("#alert .btns button")
        .forEach((b) => (
            b.onclick = null
        ))
    )
)