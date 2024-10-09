

function Text() {

}

Text.prototype.limited = function(
    text,
    maxLength,
    symb,
) {
    return ( text.length > ( maxLength ||= 20 ) )
    ? (
        text.slice(
            0,
            (
                maxLength - (
                    ( symb ||= ".." ).length
                )
            )
        ) + symb
    )
    : text
};

export default Text;
