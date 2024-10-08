

export default (
    (e, pos, ut) => {
        var sht = e.shiftKey
        
        if (sht && (pos[2] === -1)) {
            return (
                ut.logSelect(pos),
                true
            )
        }

        if (!(sht) && (pos[2] !== -1)) {
            return (
                ut.clearSelect(e, pos),
                false
            )
        }
        
        return sht;
    }
)