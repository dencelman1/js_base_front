

export default (
    (t, ut, v, delay) => {
        var
            cr = (
                t.querySelector(".cursor")
            ),

            lns = t.querySelector(".lines"),
            lnss = lns.querySelectorAll(".line"),

            ss = t.querySelector(".ss"),
            ssl = ss.querySelectorAll("li"),

            ts = ut.lineSplit(v)
        ;


        return (
            cr.remove(),
            
            new Promise(r => {
                var
                    ln = null,
                    lh = ut.lh,
                    
                    cDelay = 0,
                    createElement = (
                        (ex, text, ut, ss, lns, s, i) => {
                            var newS = null;
        
                            ex = ex.cloneNode(true);
        
                            ex.style.top = i;
                            ex.querySelector(".c").innerHTML = ut.repl(text);
        
                            lns.appendChild(ex);
        
                            newS = s.cloneNode(true);
                            newS.style.top = i;
        
                            ss.appendChild(newS);
        
                            return ex;
                        }
                    ),
                    i = 0
                ;
                for (; i < ts.length; i++) {
                    ln = lnss[i];

                    if (ln === undefined) {
                        setTimeout(
                            ((text, ln, last, lastLn, lastS, i) => (
                                
                                () => (
                                    console.log(i),

                                    (ln = createElement(
                                        lastLn,
                                        text,
                                        ut,
                                        ss, lns, lastS, i
                                    )),
                                    (
                                        last && r(

                                            (
                                                console.dir(ln),
                                                console.log(cr),
                                                    ln
                                                    .appendChild(
                                                        cr
                                                    )
                                            )
                                        )
                                    )
                                )
                            ))(
                                (ts[i]),
                                ln,
                                (i === (ts.length - 1)),
                                t.querySelector(".lines .line:last-child"),
                                t.querySelector(".ss li:last-child"),
                                ((i * lh) + "px")
                            ),
                            (cDelay += delay)
                        )
                    }
                    else {
                        ln.querySelector(".c").innerHTML = ut.repl(ts[i]);
                        (
                            (i === (ts.length - 1))
                            &&
                            r(
                                (
                                    console.dir(ln),
                                    console.log(cr),
                                    ln
                                    .appendChild(
                                        cr
                                    )
                                )
                            )
                        )
                    }
                }
            })
            .then((cr) => {
                var i = 0;

                for (i = ts.length; i < (lnss.length - ts.length); i++) {
                    lnss[i].remove();
                    ssl[i].remove()
                };
                cr.style.left = "0px";
            })
        );
    }
)