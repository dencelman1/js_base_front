


export default (
    (e, pos, ut, ) => {
        var
            t = e.currentTarget,

            x = pos[0],
            y = pos[1],

            sx = pos[2],
            sy = pos[3],

            cl = t.querySelector(".check-letter"),
            w = ut.w,
            ss = null,

            tx_ = (sel) => (
                t.querySelector(
                    `.lines .line:nth-child(${
                        ss
                        .indexOf(sel) + 1
                    }) .c`
                )
                .textContent
            ),
            
            ahead = ut.selectAhead(pos)
        ;

        // TODO: render .same

        
        var findAllOccurrences = (all, sel) => {
            var
                fd = [],
        
                x = 0,
                y = 0,
        
                i = 0,
                l = "",
        
                chi = null,
        
                il = "",
        
                al = all.split("")
            ;

            var
                checkSet = (il) => (
                    (sel[0] === il)
                    &&
                    (
                        (chi = [x, y, x, y]) &&
                        (l = il)
                    )
                ),
                clear = () => (
                    (chi = null) ||
                    (l = "")
                )
            ;
        
            for(i; i < al.length; i++) {
                il = al[i];
        
                if (il === "\n") {
                    if (chi) {
                        x = chi[2] = 0;
                        chi[3]++;
                        y++;
                    } else {
                        x = 0;
                        y++;
                    }
                    continue;
                }
        
                if (chi === null)
                    checkSet(il)

                else {
                    if (sel.length === l.length) {
                        chi[2] = x;
                        
                        fd.push(chi);
                        clear() || checkSet(il)
                    }
                    else if (sel[l.length] === il) {
                        chi[2] = x;
                        chi[3] = y;

                        l += il;
                    }
                    else {
                        clear() || checkSet(il)
                    }
                }
        
                x++;
            }
        
            if (chi && l.length === sel.length) {
                fd.push(chi);
            }
        
            return fd;
        };

        (ss = Array.from(t.querySelectorAll(".ss li")));
        var lines = Array.from(t.querySelectorAll(".lines .line .c"));

        var allSames = null;

        (allSames = t.querySelectorAll(".ss .sames"))
        .forEach(
            sames => (
                sames.innerHTML = ""
            )
        );
        
        var
            selv
        ;
        
        return (

            (
                ((selv = ut.raw(ut.selectValue(t, pos, ut, ahead))).length > 0) &&
                findAllOccurrences(
                    ut.value(t), selv
                )
                .forEach((o) => {
                    var y = o[1];
                    var tx = "";

                    var moveSame = (sames, from, to) => {
                        var same;
                        Object.assign(
                            sames.appendChild(
                                Object.assign(
                                    (same = document.createElement('span')),
                                    {
                                        className: "same"
                                    }
                                )
                            ).style,
                            {
                                left: ut.w(cl, from) + "px",
                                width: ut.w(cl, to) + "px"
                            }
                        );
                        return same;
                    };

                    while (y <= o[3]) {
                        tx = lines[o[1] + (y - o[1])].textContent;

                        moveSame(
                            allSames[o[1] + (y - o[1])],
                            (y === o[1] ? tx.slice(0, o[0]) : ""),
                            (y === o[1] ? tx.slice(o[0], (o[1] === o[3] ? o[2] : undefined)) :
                                (y === o[3] ? tx.slice(0, o[2]) : tx))
                        );

                        y++;
                    }
                })
            ),

            (ss = ss
            .map(v => {
                var el = v.querySelector(".s");

                el.style.left=( el.style.width = "");

                return el;
            }))
            .slice(
                ahead ? sy: y,
                (ahead ? y: sy) + 1,
            )
            .forEach(
                ahead
                ? (
                    (sel, i, arr) => {
                        var tx = tx_(sel);

                        return (
                            
                            (i === 0)
                            ? (
                                (
                                    sel.style.left =(
                                        w(cl,(tx).slice(0,sx))+"px"
                                    )
                                ),
                               (
                                sel.style.width=w(cl,tx.slice( sx, (
                                    arr.length === 1
                                    ? x
                                    : undefined
                               ) ))+"px"))

                            : ( 
                            i === (arr.length - 1)
                            ? (
                                (
                                    sel.style.left = "0px"
                                ),
                                (
                                    sel.style.width = w(cl,tx.slice(0,x))+"px"
                                )
                            )

                            : ((sel.style.left ="0px"),
                               (sel.style.width=w(cl,tx)+"px"))
                            )
                            
                        )
                    }
                )
                : (
                    (sel, i, arr) => {
                        var tx = tx_(sel);
                        
                        return (
                            (i === 0)
                            ? (
                                (
                                    sel.style.left =
                                        w(
                                            cl,
                                            (tx).slice(0, x)
                                        )
                                        + "px"
                                ),
                                (
                                    sel.style.width=
                                        w(
                                            cl,
                                            tx.slice(
                                                x, (
                                                    arr.length === 1
                                                    ? sx
                                                    : undefined
                                                )
                                            )
                                        ) + "px"
                                )
                            )
                            : (
                            i === (arr.length - 1)
                            ? (
                                (
                                    sel.style.left= (
                                        "0px"
                                    )
                                ),
                                (
                                    sel.style.width=(
                                        w(cl,tx.slice(0, sx)) +"px"
                                    )
                                )
                            )

                            : ((sel.style.left="0px"),
                               (sel.style.width=w(cl,tx)+"px"))
                            )
                        )
                    }
                )
            )
        );
    }
);
