

export default (
    (
        m,
        z // 0
    ) => {
        while(m[z] === "0") {
            z++;
        };
        return z;
    }
)