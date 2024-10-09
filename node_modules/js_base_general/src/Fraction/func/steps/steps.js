import {max} from "#utils/general";


export default (
    (t, n, tmpv, aD, intCb, dcCb) => {
        var
            int = tmpv, dc = tmpv,
            BI = tmpv, fBI = tmpv, sBI = tmpv,

            f= "", s= "", fDc ="",  ndc = "", dcs="", dl="",
            fZ = 0, dot = 0, fL = 0, sL= 0, ndz = 0, l = 0, z= 0, dlc = 0
        ;
        return (
            (
                int = (
                    intCb(
                        t.int,
                        t.parseInt(
                            n,
                            (
                                dot = (
                                    (
                                        n = t.trimZ(n, 1)
                                    )
                                    .indexOf(".")
                                )
                            )
                        )
                    )
                )
            ),
            
            (
                (
                    fL = (
                        (
                            f = t.fullDc(0, (fDc = t.dc.toString()), (fZ = t.z))
                        )
                        .length
                    )
                )
                >
                (
                    sL = (
                        (
                            s = (
                                t.fullDc(
                                    0,
                                    (
                                        ndc =
                                            (
                                                ndc = t.parseDc(n, dot)
                                            )
                                            .substring(
                                                ndz = t.collectZ(ndc, 0)
                                            )
                                    ),
                                    ndz
                                )
                            )
                        )
                        .length
                    )
                )
                ? (
                    sL =
                        (
                            s =
                                t.fullDc(
                                    fL, ndc, ndz
                                )
                        )
                        .length
                )
                : (
                    fL =
                        (
                            f =
                                t.fullDc(
                                    sL, fDc, fZ
                                )
                        )
                        .length
                )
            ),

            (
                l = (
                
                    (
                        (
                            (fBI = BigInt(f)) > (sBI = BigInt(s))
                        )
                        ? (
                            (BI = fBI),
                            (s =
                                t.fullDc(
                                    f.length, ndc, ndz
                                )
                            ),
                            
                            (z = t.collectZ(f, 0)),
                            fL
                        )
                        : (
                            (BI = sBI),
                            (f =
                                t.fullDc(
                                    s.length, fDc, fZ
                                )
                            ),
                            (z = t.collectZ(s, 0)),
                            sL
                        )
                    )
                )
            ),

            (
                z = (
                    max(
                        z -
                        (
                            (
                                dcs = (
                                    (
                                        dc =
                                            dcCb(
                                                fBI,
                                                sBI
                                            )
                                    )
                                    .toString()
                                )
                            )
                            .length
                            -
                            BI.toString().length
                        ),
                        0
                    )
                )
            ),

            (
                (
                    (
                        dlc = (
                            (
                                (
                                    dl = (
                                        dcs
                                        .substring(
                                            0,
                                            max((dcs.length - l), 0)
                                        )
                                    )
                                )
                                === "-"
                                ? ""
                                : dl
                            ).length
                        )
                    )
                    > 0
                )
                &&
                (
                    (int = intCb(int, BigInt(dl))),
                    (
                        dc = BigInt(
                            t.trimZ(
                                (dcs = dcs.substring(dlc)),
                                1
                            )
                        )
                    )
                )
            ),

            (t.dc = dc),
            (
                t.z = (
                    (tmpv === dc)
                    ? 0
                    : z
                )
            ),
            (
                t.m = (
                    (
                        int < tmpv
                    )
                    ? ((int *= t.mOne), 1)
                    : 0
                )
            ),
            (t.int = int),

            t.afterDot(t, aD)
        );
    }
)