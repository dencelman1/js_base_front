import * as hs from './hs.js';


export default (
    () => (

        (( withButton ) => (
            Object.assign({

                8: hs.backspace,
                27: hs.escape,
                13: hs.enter,

                37: hs.arrowL,
                39: hs.arrowR,
                38: hs.arrowT,
                40: hs.arrowB,
                
                46: hs.del,
                36: hs.home,
                35: hs.end,
                9: hs.tab,

                86: withButton("ctrl", hs.ctrlV),
                65: withButton("ctrl", hs.ctrlA),
                67: withButton("ctrl", hs.ctrlC),
                74: withButton("ctrl", hs.escape),
                82: withButton("ctrl", window.location.reload.bind(window.location)),
                88: withButton("ctrl", hs.ctrlX),

                90: (e,pos,ut) => (
                    (
                        e.ctrlKey
                        ? (
                            e.shiftKey
                            ? hs.ctrlShiftZ
                            : hs.ctrlZ
                        )
                        : (
                            ut.type
                        )
                    )(
                        e,pos,ut
                    )
                )
            },
            {

            })
        ))(
            (b, wth) => (
                (e, pos, ut) => (
                    (e[b + "Key"] ? wth: ut.type)(
                        e, pos, ut
                    )
                )
            )
        )

    )
);