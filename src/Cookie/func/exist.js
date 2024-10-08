

export default (
    (k, src) => {
        k += "=";

        var
            ca = src.split(';'),
            c, i
        ;
        
        for( i = 0; i < ca.length; i++ ) {
            c = ca[i];
            
            while (c.charAt(0) == ' ') {
                c = c.substring( 1, c.length);
            }
    
            if (c.indexOf(k) === 0) {
                return 1
            }
    
        }
        return 0;
    }
)