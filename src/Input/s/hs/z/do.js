import { Action, DeepEvent } from "../../type/index.js";


export default (
    (exec, undo) => (

        Object.assign(
            (e,pos,ut) => (
                (
                    e = new DeepEvent(e, pos, ut)
                ),

                ut.undo.push(
                    new Action(
                        () => exec(e,pos,ut),
                        () => undo(e,pos,ut)
                    )
                ),
                (ut.redo.length = 0) ||

                Promise.resolve(
                    exec(e,pos,ut)
                )
                .then(() => (
                    e.afterPos = Array.from(pos)
                ))
            ),
            {
                exec,
                undo
            }
        )

    )
);