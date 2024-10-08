


export default (
    (e, pos, ut) => {
        var
            t = e.currentTarget,

            x = pos[0],
            y = pos[1],

            sx = pos[2],
            sy = pos[3],

            cl = t.querySelector(".check-letter"),
            w = ut.w,
            sall = null,

            ahead = (
                (sy < y) ||
                (sx < x)
            )
        ;
        alert(ahead);
        
        return (
            (
                sall = Array.from(
                    t.querySelectorAll(".ss .s")
                )
            )
            .slice(sy, y + 1)
            .forEach(
                ahead
                ? (
                    (sel, i, arr) => {
                        var
                            tx = (
                                t.querySelector(
                                    `.lines .line:nth-child(${
                                        sall.indexOf(sel) + 1
                                    }) .c`
                                )
                                .textContent
                            )
                        ;
                        return (
                            (
                                sel.style.left = w(
                                    cl,
                                    (
                                        (i === 0)
                                        ? tx.slice(0, sx)
                                        : (
                                            i === (arr.length - 1)
                                            ? ""
                                            : tx
                                        )
                                    )
                                )
                                + "px"
                            )   
                            &&
                            (
                                sel.style.width = w(
                                    cl,
                                    (
                                        (i === 0)
                                        ? tx.slice(sx)
                                        : (
                                            i === (arr.length - 1)
                                            ? tx.slice(x)
                                            : tx
                                        )
                                    )
                                )
                                + "px"
                            )
                        )
                    }
                )
                : (
                    (sel, i, arr) => {
                        var
                            tx = (
                                t.querySelector(
                                    `.lines .line:nth-child(${
                                        sall.indexOf(sel) + 1
                                    }) .c`
                                )
                                .textContent
                            )
                        ;
                        return (
                            (
                                sel.style.left = w(
                                    cl,
                                    (
                                        (i === 0)
                                        ? tx.slice(x)
                                        : (
                                            i === (arr.length - 1)
                                            ? ""
                                            : tx
                                        )
                                    )
                                )
                                + "px"
                            )   
                            &&
                            (
                                sel.style.width = w(
                                    cl,
                                    (
                                        (i === 0)
                                        ? tx.slice(x)
                                        : (
                                            i === (arr.length - 1)
                                            ? tx.slice(sx)
                                            : tx
                                        )
                                    )
                                )
                                + "px"
                            )
                        )
                    }
                )
            )
        );
    }
);
