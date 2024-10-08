

export default (
    (pos) => {
        var
            x = pos[0],
            y = pos[1],
            sx = pos[2],
            sy = pos[3]
        ;

        return (
            (sy < y) ||
            ((sy === y) && (sx < x))
        )
    }
)