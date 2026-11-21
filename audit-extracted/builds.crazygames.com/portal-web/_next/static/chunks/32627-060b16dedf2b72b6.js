! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var a in n) n.hasOwnProperty(a) && (e[a] = n[a])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2c798857-2963-40c5-964d-4c3a6f3d7bdd", e._sentryDebugIdIdentifier = "sentry-dbid-2c798857-2963-40c5-964d-4c3a6f3d7bdd")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [32627], {
        32627: (e, t, n) => {
            n.d(t, {
                A: () => G
            });
            var a = n(6029),
                r = n(75155),
                s = n(55729),
                o = n(50212),
                l = n(89922),
                d = n(52461),
                i = n(69395),
                c = n(15490);

            function u(e) {
                return e()
            }
            var m = n(79942),
                v = n(96967),
                g = n.n(v),
                h = n(4230),
                y = n(34302),
                f = n(47883),
                b = n(90930),
                p = n(82638),
                w = n(37916),
                x = n(40369),
                j = n(81930),
                A = n(71684),
                C = n(37434),
                E = n(47352),
                I = n(52711),
                L = n(83582),
                M = n(99521),
                k = n(82207),
                S = n(59958),
                _ = n(20636),
                N = n.n(_);
            let T = s.memo(e => {
                    let {
                        game: t,
                        width: n,
                        loading: r,
                        enableInstantJoin: l,
                        autoplayOnlyCentered: d,
                        removeThumbLabels: i,
                        allowVideo: u = !0
                    } = e, {
                        game: v,
                        artworkId: _,
                        artworkExperimentId: T
                    } = (0, f.F)(t), P = (0, f.m)(), O = v.covers && v.covers["1x1"] ? v.covers["1x1"] : v.cover, {
                        gameService: R
                    } = s.useContext(A.A).services, D = s.useContext(h.A), [G, W] = s.useState(!1), [V, q] = s.useState(!1), [F, J] = s.useState(!1), [K, z] = s.useState(!1), [B, H] = s.useState(!1), U = s.useRef(null), Q = s.useContext(p.g).addViewedGames, X = (0, x.Ay)(s.useContext(b.o)), Y = s.useRef(null), Z = s.useCallback(() => {
                        v && R.prefetchGameData(v, D)
                    }, [v, R, D]);
                    s.useEffect(() => {
                        let e;
                        return U && U.current && (e = U.current, I.A.get().observe(U.current, () => {
                            I.A.get().unobserve(e), Q(v.id, X), W(!0)
                        })), () => {
                            e && I.A.get().unobserve(e)
                        }
                    }, [v.id, Q, X]), (0, y.A)({
                        gameId: v.id,
                        artworkId: _,
                        artworkExperimentId: T,
                        enabled: G
                    });
                    let $ = s.useMemo(() => g()(() => q(!1), 150), []);
                    s.useEffect(() => {
                        let e = new IntersectionObserver(e => {
                            let [t] = e, n = window.innerHeight, a = (t.boundingClientRect.top + t.boundingClientRect.bottom) / 2, r = .3 * n, s = t.intersectionRatio >= .4;
                            t.isIntersecting && s ? ($.clear(), q(!0)) : $(), !F && t.isIntersecting && (!d || a > n / 2 - r && a < n / 2 + r) && (J(!0), (0, c.requestIdleCallback)(Z))
                        }, d ? {
                            root: null,
                            rootMargin: "-30% 0px -30% 0px",
                            threshold: .5
                        } : {
                            threshold: [0, .4, 1]
                        });
                        return U && U.current && e.observe(U.current), () => {
                            e.disconnect()
                        }
                    }, [r, U, F, Z, d, $]);
                    let ee = (0, k.V)(v),
                        et = u && B && V && n && !r && !ee,
                        en = n && v.cover && P,
                        ea = V && et && K && B,
                        er = i ? v.gameThumbLabels ? .filter(e => !i.includes(e)) ? ? [] : v.gameThumbLabels;
                    return (0, a.jsx)(E.A, {
                        slug: v.slug,
                        ref: Y,
                        isInstantJoin: l,
                        "data-testid": w.y7,
                        children: (0, a.jsxs)("div", {
                            className: (0, o.A)(N().instantThumb, N().isLarge, ee && N().greyedOut),
                            children: [(0, a.jsxs)("div", {
                                ref: U,
                                className: N().gameThumbArea,
                                children: [(0, a.jsx)(M.A, {
                                    game: v
                                }), en && (0, a.jsx)("img", {
                                    className: (0, o.A)(N().mainImage, ea && N().fadeOut),
                                    src: (0, j.Ay)(v.cover, {
                                        width: n
                                    }),
                                    alt: v.name,
                                    srcSet: (0, j.Wn)(v.cover, {
                                        width: n
                                    }),
                                    onLoad: () => H(!0)
                                }), (0, a.jsx)("div", {
                                    className: N().largeThumbPlaceholder
                                }), et && (0, a.jsx)(S.A, {
                                    videoWidth: n,
                                    game: v,
                                    onCanPlayThrough: () => z(!0)
                                }), !r && K && (0, a.jsxs)("div", {
                                    className: N().bottomContainer,
                                    children: [(0, a.jsx)("img", {
                                        src: (0, j.Ay)(O, {
                                            width: 50
                                        }),
                                        srcSet: (0, j.Wn)(O, {
                                            width: 50
                                        }),
                                        alt: v.name
                                    }), (0, a.jsxs)("div", {
                                        style: {
                                            maxWidth: "calc(100% - 114px)"
                                        },
                                        children: [(0, a.jsx)("div", {
                                            className: N().gameNameContainer,
                                            children: v.name
                                        }), (0, a.jsx)("div", {
                                            style: {
                                                color: "rgba(255, 255, 255, 0.60)"
                                            },
                                            children: v.categoryName
                                        })]
                                    }), (0, a.jsx)(C.A, {
                                        variant: "contained",
                                        color: "purple",
                                        children: (0, a.jsx)(m.x6, {
                                            id: "common.instant.play"
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(L.default, {
                                videoPlaying: !1,
                                gameThumbLabels: er
                            })]
                        })
                    })
                }),
                P = s.memo(() => (0, a.jsx)("div", {
                    style: {
                        width: "100%",
                        borderRadius: 16,
                        position: "relative",
                        overflow: "hidden",
                        aspectRatio: "400 / 224",
                        background: "var(--black-60)"
                    }
                }));
            var O = n(74914),
                R = n(29256),
                D = n.n(R);
            let G = e => {
                let t, n, m, v, g, h = (0, r.c)(32),
                    {
                        games: y,
                        loading: f,
                        expectedSize: b,
                        enableInstantJoin: p,
                        customOrigin: w,
                        autoplayOnlyCentered: x,
                        overlapInOrientationChange: j,
                        className: A,
                        removeThumbLabels: C,
                        videoDeferStrategy: E
                    } = e,
                    {
                        innerWidth: I
                    } = s.useContext(O.w),
                    L = (0, i.A)(),
                    M = (e => {
                        let t, n, a = (0, r.c)(3),
                            [o, l] = (0, s.useState)(!1);
                        return a[0] !== e ? (t = () => {
                            let t, n = !1,
                                a = () => {
                                    n || l(!0)
                                },
                                r = [];
                            if ("dom-content-loaded" === e)
                                if ("loading" !== document.readyState) a();
                                else {
                                    let e = () => a();
                                    document.addEventListener("DOMContentLoaded", e, {
                                        once: !0
                                    }), r.push(() => document.removeEventListener("DOMContentLoaded", e))
                                }
                            else if ("document-interactive" === e)
                                if ("loading" !== document.readyState) a();
                                else {
                                    let e = () => {
                                        ("interactive" === document.readyState || "complete" === document.readyState) && (document.removeEventListener("readystatechange", e), a())
                                    };
                                    document.addEventListener("readystatechange", e), r.push(() => document.removeEventListener("readystatechange", e))
                                }
                            else if ("window-load" === e)
                                if ("complete" === document.readyState) a();
                                else {
                                    let e = () => a();
                                    window.addEventListener("load", e, {
                                        once: !0
                                    }), r.push(() => window.removeEventListener("load", e))
                                }
                            else {
                                let e = () => {
                                    t = (0, c.requestIdleCallback)(() => a(), {
                                        timeout: 3e3
                                    })
                                };
                                if ("complete" === document.readyState) e();
                                else {
                                    let t = () => e();
                                    window.addEventListener("load", t, {
                                        once: !0
                                    }), r.push(() => window.removeEventListener("load", t))
                                }
                                r.push(() => {
                                    void 0 !== t && (0, c.cancelIdleCallback)(t)
                                })
                            }
                            return () => {
                                n = !0, r.forEach(u)
                            }
                        }, n = [e], a[0] = e, a[1] = t, a[2] = n) : (t = a[1], n = a[2]), (0, s.useEffect)(t, n), o
                    })(void 0 === E ? "window-load" : E);
                h[0] !== I || h[1] !== L ? (t = () => {
                    if (I) return L ? Math.ceil(I / 2) : Math.ceil(I)
                }, h[0] = I, h[1] = L, h[2] = t) : t = h[2];
                let k = t,
                    S = j && D().overlapInOrientationChange;
                if (h[3] !== A || h[4] !== S ? (n = (0, o.A)(D().instantGridContainer, D().largeGrid, S, A), h[3] = A, h[4] = S, h[5] = n) : n = h[5], h[6] !== b || h[7] !== y.length ? (m = 0 === y.length && (0, l.K)(b).map(W), h[6] = b, h[7] = y.length, h[8] = m) : m = h[8], h[9] !== M || h[10] !== x || h[11] !== w || h[12] !== p || h[13] !== y || h[14] !== k || h[15] !== L || h[16] !== f || h[17] !== C) {
                    let e;
                    h[19] !== M || h[20] !== x || h[21] !== w || h[22] !== p || h[23] !== k || h[24] !== L || h[25] !== f || h[26] !== C ? (e = (e, t) => e.loading ? (0, a.jsx)(P, {}, t) : (0, a.jsx)(d.x, {
                        newClickOrigin: w || "instantLarge",
                        children: (0, a.jsx)(T, {
                            game: e,
                            width: k(),
                            loading: f || e.loading,
                            enableInstantJoin: p,
                            autoplayOnlyCentered: !L && x,
                            removeThumbLabels: C,
                            allowVideo: M
                        })
                    }, e.slug), h[19] = M, h[20] = x, h[21] = w, h[22] = p, h[23] = k, h[24] = L, h[25] = f, h[26] = C, h[27] = e) : e = h[27], v = y.map(e), h[9] = M, h[10] = x, h[11] = w, h[12] = p, h[13] = y, h[14] = k, h[15] = L, h[16] = f, h[17] = C, h[18] = v
                } else v = h[18];
                return h[28] !== n || h[29] !== m || h[30] !== v ? (g = (0, a.jsxs)("div", {
                    className: n,
                    children: [m, v]
                }), h[28] = n, h[29] = m, h[30] = v, h[31] = g) : g = h[31], g
            };

            function W(e) {
                return (0, a.jsx)(P, {}, e)
            }
        },
        59958: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var a = n(6029),
                r = n(55729),
                s = n(47883),
                o = n(81930),
                l = n(84376);
            let d = r.forwardRef((e, t) => {
                    let {
                        game: n,
                        videoHeight: d,
                        videoWidth: i,
                        style: c,
                        onCanPlayThrough: u,
                        isPortrait: m,
                        className: v,
                        preload: g = "none"
                    } = e, {
                        game: h
                    } = (0, s.F)(n), y = (0, s.m)(), f = r.useMemo(() => d ? {
                        height: d
                    } : {
                        width: i
                    }, [d, i]), {
                        videoUrl: b,
                        poster: p
                    } = r.useMemo(() => {
                        let e = (0, l.A)(h, f, m);
                        if (!e) return {
                            videoUrl: null,
                            poster: void 0
                        };
                        let t = h.covers ? m ? h.covers["2x3"] : h.covers["16x9"] : h.cover;
                        return {
                            videoUrl: e,
                            poster: t ? (0, o.Ay)(t, f) : void 0
                        }
                    }, [h, m, f]);
                    return b && y ? (0, a.jsx)("video", {
                        ref: t,
                        loop: !0,
                        autoPlay: !0,
                        preload: g,
                        muted: !0,
                        playsInline: !0,
                        onCanPlayThrough: u,
                        style: c,
                        className: v,
                        disableRemotePlayback: !0,
                        disablePictureInPicture: !0,
                        poster: p,
                        draggable: !1,
                        children: (0, a.jsx)("source", {
                            src: b,
                            type: "video/mp4"
                        })
                    }) : null
                }),
                i = r.memo(d)
        }
    }
]);