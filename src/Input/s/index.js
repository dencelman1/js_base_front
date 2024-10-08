import { mousedown, keydown } from "./on/index.js";
import codeHs from './hs/index.js';
import * as hs from "./hs/hs.js";
import * as ut_ from './ut/index.js';


export default (si, getText) => (
    Promise.resolve(
        getText
        ? getText()
        : ""
    )
    .then((text) => {
        var
            pos = [0, 0, -1, -1],
            ut = (
                Object.assign(
                Object.assign(
                    {
                        lh: 19,

                        undo: [],
                        redo: []
                    },
                    ut_
                ),
                    hs
                )
            )
        ;
        
        return (
            si.addEventListener("keydown", keydown(pos, 0, codeHs(), ut, ut.isType, ut.type)),
            si.addEventListener("mousedown", mousedown(pos, ut)),

            Promise.resolve(
                text &&
                ut.setValue(si, ut, text)
            )
            .then(() => [si, pos, ut])
        );  
    })
);