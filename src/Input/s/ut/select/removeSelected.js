

export default (
    (t, pos, ut, ahead, cr) => {
        var
            lall = (
                Array.from(t.querySelectorAll(".lines .line"))
                .slice(
                    (ahead ? pos[3]: pos[1]),
                    (ahead ? pos[1]: pos[3]) + 1,
                )
            )
        ;
        
        lall
        .forEach((line, i, arr) => (
            (arr.length === 1)
            ? (
                (line = line.querySelector(".c")),
                (line.textContent = (
                    ahead
                    ? (
                        line.textContent.slice(0, pos[2]) +
                        line.textContent.slice(pos[0])
                    )
                    : (
                        line.textContent.slice(0, pos[0]) +
                        line.textContent.slice(pos[2])
                    )

                ))
            )
            : (
            (i === 0)
            ? (
                (
                    (line = line.querySelector(".c")).textContent =
                        line.textContent
                        .slice(
                            0,
                            ahead ? pos[2]: pos[0]
                        )
                )
            )
            : (

            i === (arr.length - 1)
            ? (
                (arr[0].querySelector(".c").textContent+=(
                    line.querySelector(".c").textContent
                    .slice(ahead ? pos[0]: pos[2])
                )),
                ut.reMoveFromDown(line,t,ut)
                
            )
            : (
                ut.reMoveFromDown(line,t,ut)
            )

            )
            )
        ))

        return (

            cr && (

                (lall[0]
                .appendChild(cr)
                .style.left = ut.w(
                    t.querySelector('.check-letter'),
                    (
                        lall[0].querySelector(".c")
                        .textContent
                        .slice(0, (pos[0] = (
                            ahead ? pos[2]: pos[0]
                        )))
                    )
                ) + "px")
                &&
                (
                    pos[1] = (
                        ahead ? pos[3]: pos[1]
                    )
                )

            )
        );
        
        
    }
);
