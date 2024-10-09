

function Func() {

}

Func.prototype.checkTime = (
    function( func ) { return (
        new Promise(( res ) => {
            
            var f = (
                (this?.alert)
                ? performance.now()
                : process?.hrtime()
            );

            return this.resolve(
                func(),

                () => {
                    res(
                        (this?.alert)
                        ? ( performance.now() - f )
                        : ((f = process?.hrtime(f))[0] * 1000 + f[1] / 1000000)
                    );
                },
            )

        })
    ); }
);

Func.prototype.resolve = (
    (
        callInstanse,
        callback,
        onError,
    ) => (
        

        ( callInstanse instanceof Promise )
        ? (
            callInstanse
            .then( callback )
            .catch( onError || console.error )
        )
        : (
            callback( callInstanse )
        )
    )
);

export default Func;
