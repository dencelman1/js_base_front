

export default (
    (k, src) => {
        
        var
            ca = src.split(';'),
            c, i,
            v
        ;

        (k += "=");
        
        for ((i = 0); i < ca.length; i++) {
            c = ca[i];
            
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
    
            if (c.indexOf(k) === 0) {
                return (
                    ((
                        v = c.substring(k.length, c.length)
                    ) === "undefined")
                    ? undefined
                    : (
                        v
                    )
                );
            }
    
        }
        return undefined;
    }
)