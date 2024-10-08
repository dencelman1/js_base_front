import {Cookie} from '#utils/front';
import {now} from "#utils/general";

import actn from './actn.js';
import Confirm from './Confirm.js';
import Prompt from './Prompt.js';
import set from './set.js';
import Jump from './Jump.js';
import clearBtn from './clearBtn.js';
import next from './next.js';

var Alert = (cb) => {
    var
        l = null,
        id = "",

        cl = (
            actn(
                (id = now().toString()),
                (l = document.getElementById("alert")),
                "alert",
                cb
            )
        )
    ;
    
    return (
        l.setAttribute("data-id", id) ||
        (
            l.querySelector("button.close")
            .onclick = cl
        )
        &&
        undefined
    );
};

Alert.removeAt = function() {
    return (
        Cookie.delete("at", document.cookie),
        this.checkAn()
    )
}

Alert.checkAn = function() {
    return (
        (
            (Cookie.get("an", document.cookie) === "1")
            || undefined
        )
        && (
            Cookie.delete("an", document.cookie),
            Alert("unlog")
        )
    );
}
Object.assign(
    Alert,
    {
        Jump,
        set,
        Confirm,
        Prompt,

        clearBtn,
        next,
    }
)

export default Alert;
