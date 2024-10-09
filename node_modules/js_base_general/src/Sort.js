import { maxMany, stringify } from "#utils/general";

function Sort() {

}

Sort.prototype.list = ( list, key ) => {

    if (list.length <= 0) return list;

    var $withKey = (e) => ( key ? e[key]: e );
    
    var
        values = list.map($withKey),
        type;

    switch ( type = typeof values[0] ) {
        case "number":
        case "boolean":
            var reversed = (
                values[0] === (type === 'boolean' ? true: maxMany(...values))
            );

            return (
                list
                .sort((a, b) =>
                    ($withKey(a) === $withKey(b))
                    ? 0
                    : (
                        ($withKey(a) < $withKey(b))
                        ? (reversed ? -1: 1)
                        : (reversed ? 1: -1)
                    )
                )
            )
        case "string":
            var sorted = ( reversed ) => {
                
                return (
                    list
                    .sort((a, b) => (
                        $withKey( reversed ? b: a )
                        .localeCompare(
                            $withKey( reversed ?  a: b )
                        )
                    ))
                )
            }
            
            return (
                sorted(
                    stringify( list ) === stringify( sorted( false ) )
                )
            )
            
        default:
            return list;
    }

}

export default Sort;
