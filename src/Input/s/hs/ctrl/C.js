

export default (
    (e, pos, ut) => {
        return (
            navigator.clipboard.writeText(
                pos[2] === -1
                ? (
                    (e.currentTarget)
                    .querySelector(".cursor")
                    .previousElementSibling
                    .textContent
                    .replaceAll("\n", "\\n")
                )
                : ut.selectValue(e.currentTarget,pos,ut, ut.selectAhead(pos))
            )
        );
    }
)