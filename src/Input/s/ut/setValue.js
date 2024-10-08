

export default (
    (t, ut, v) => {
        var
            cr = (
                t.querySelector(".cursor")
            ),

            lns = t.querySelector(".lines"),
            lnss = lns.querySelectorAll(".line"),

            ss = t.querySelector(".ss"),
            ssl = ss.querySelectorAll("li"),
            
            i = 0,

            ts = ut.lineSplit(v),

            ln = null,
            
            lh = ut.lh,

            createElement = (
                (ex, text, ut, ss, lh, lns, s) => {
                    var newS = null;

                    ex = ex.cloneNode(true);

                    ex.style.top = (parseFloat(ex.style.top) + lh + "px");
                    ex.querySelector(".c").innerHTML = ut.repl(text);

                    lns.appendChild(ex);

                    newS = s.cloneNode(true);
                    newS.style.top = (parseFloat(newS.style.top) + lh + "px");

                    ss.appendChild(newS);

                    return ex;
                }
            ),
            text = ""
        ;

        cr.remove()
        
        for (i; i < ts.length; i++) {
            text = ts[i]

            if ((ln = lnss[i]) === undefined) {
                ln = createElement(
                    (
                        t.querySelector(".lines .line:last-child")
                    ),
                    text,
                    ut,
                    ss, lh, lns,
                    (
                        t.querySelector(".ss li:last-child")
                    )
                )
            }
            else {
                ln.querySelector(".c").innerHTML = ut.repl(text);
            }
        };

        for (i = ts.length; i < (lnss.length - ts.length); i++) {
            lnss[i].remove();
            ssl[i].remove()
        };

        return (
            ln
            .appendChild(
                cr
            )
        );
    }
)