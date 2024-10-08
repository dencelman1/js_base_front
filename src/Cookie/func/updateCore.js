

export default (
    (
        k,
        v,
        e,
        src
    ) => (
        
        src === document.cookie
        ? ((document.cookie) = (
            `${k}=${v};`+
            `domain=${
                new URL(
                    process.env.MARKETPLACE_ORIGIN
                ).host
            };`+
            `expires=${
                ( e || "" )
                && (
                    (
                        new Date(
                            Date.now() + e
                        )
                    )
                    .toGMTString()
                )
            }; path=/`
        ))
        : (
            src + `${k}=${v};`
        )
        
    )
)