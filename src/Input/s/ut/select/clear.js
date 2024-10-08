

export default (
    (e, pos) => (
        (e.currentTarget.querySelectorAll(".ss li"))
        .forEach(s => (
            (s.querySelector(".sames").innerHTML = "") ||
            (
                s.querySelector(".s")
                .style.width = (
                    "0px"
                )
            )
        ))
        ||
        (
            pos[2] = (pos[3] = -1)
        )
    )
)