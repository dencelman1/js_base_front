import clearBtn from './clearBtn.js';
import next from './next.js';


export default (
    (id, l, type, cb) => (
        (l.classList.value = ("on " + type)) &&
        
        ((e) => (
            (
                (l.classList.value === ("on " + type)) &&
                (id === l.getAttribute("data-id"))
            )
            &&
            (
                (cb && cb(e)),
                next(type, null, null)
            )
        ))
    )
)