

export default (
    (v) => (
        v
        .replace(/ /g, "&nbsp;")
        .replace(/(?<!\\)\n/g, "")
    )
)