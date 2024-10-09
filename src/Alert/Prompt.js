import actn from './actn.js';


export default (
    function(cb, dv) {
        var
            l = null,
            id = "",
            
            cl = actn(
                (id = Date.now().toString()),
                (l = document.getElementById("alert")),
                "prompt",
                (e) => cb(e, undefined)
            ),
            ok = actn(
                id,
                l,
                "prompt",
                (e) => {
                    var
                        i = null,
                        v = ((i = l.querySelector("input")).value || "")
                    ;

                    return (
                        (i.value = "") ||
                        cb(e, v)
                    );
                }
            )
        ;
        
        return (
            ((dv) && (l.querySelector("input").value = dv)),

            l.setAttribute("data-id", id) ||
            (l.querySelector("button.close").onclick = cl) &&
            (l.querySelector("button.ok").onclick = ok) &&
            undefined
        );
    }
);
