

export default (
    (title, desc) => (
        (document.querySelector("#alert .title").textContent = title),
        (document.querySelector("#alert .desc").textContent = desc)
    )
)