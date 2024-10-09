import actn from './actn.js';



export default (
    function(cb) {
        var
            l = null,
            id = "",
            
            cl = actn(
                (id = Date.now().toString()),
                (l = document.getElementById("alert")),
                "confirm",
                (e) => cb(e, 0)
            ),
            ok = actn(id, l, "confirm", (e) => cb(e, 1))
        ;
        
        
            
        return (
            l.setAttribute("data-id", id) ||
            ((
                l.querySelector("button.close").onclick = cl
            )
            &&
            (
                l.querySelector("button.ok").onclick = ok
            ))
            &&
            undefined
        );
    }
);
