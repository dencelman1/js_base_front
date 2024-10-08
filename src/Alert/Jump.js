


export default function(text, after, cb) {
    var

        dl = 200,
        d,

        getCH = (ch) => (
            ch - 10 + "px"
        ),
        close = () => (
            
            (d.className = "jump to") &&
            (d.style.marginTop = getCH(-d.clientHeight)) &&
            setTimeout(() => (
                d.remove()
            ), dl)
        )
    ;



    (
    
    document.querySelector("#alertJump")
    .appendChild(
        Object.assign(
        Object.assign(
            (d = document.createElement("div")),
            {
                className: "jump from"
            }
        )
            .style,
            {
                position: 'absolute',
                left: '-200%'
            }
        )
        &&
        d
    )
    .appendChild(
        Object.assign(
            document.createElement("span"),
            {
                textContent: text
            }
        )
    )
    &&
    (d.style.marginTop = getCH(-d.clientHeight)) &&
    setTimeout(() => (
        (d.style.position = "") ||
        (d.style.left = "") ||

        setTimeout(() => (
            (d.style.marginTop = "0px") &&
            (d.className = "jump") &&
            setTimeout(() => (
                after
                ? setTimeout(close, after)
                : cb(close, d)
            ), dl)
        ), dl)

    ), dl)

    );

    return undefined;
}