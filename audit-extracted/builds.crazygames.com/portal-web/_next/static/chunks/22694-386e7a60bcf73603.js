! function() {
    try {
        var t = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (null != n)
                    for (var a in n) n.hasOwnProperty(a) && (t[a] = n[a])
            }
            return t
        }({}, t._sentryModuleMetadata[(new t.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "bc79006a-e2c9-4d2e-94a9-525643d9484b", t._sentryDebugIdIdentifier = "sentry-dbid-bc79006a-e2c9-4d2e-94a9-525643d9484b")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22694], {
        845: (t, e, n) => {
            "use strict";
            n.d(e, {
                U: () => r
            });
            var a = n(75155),
                i = n(55729),
                o = n(74532),
                c = n(81631),
                _ = n(7377);

            function r() {
                let t, e = (0, a.c)(3),
                    n = (0, _.A)(),
                    {
                        countryCode: r
                    } = (0, i.useContext)(o.A),
                    u = "true" === n[c.Q2];
                return e[0] !== r || e[1] !== u ? (t = (0, c.D_)(r, u), e[0] = r, e[1] = u, e[2] = t) : t = e[2], t
            }
        },
        7377: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => o
            });
            var a = n(75155),
                i = n(81278);
            n(55729);
            let o = function() {
                let t = (0, a.c)(3);
                (0, i.useRouter)(); {
                    let e;
                    return t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = { ...window.__NEXT_DATA__.props.queryParameters
                    }, t[2] = e) : e = t[2], e
                }
            }
        },
        15383: (t, e, n) => {
            "use strict";
            n.d(e, {
                k: () => g
            });
            var a = n(75155),
                i = n(55729),
                o = n(98417),
                c = n(71684),
                _ = n(4230),
                r = n(50293);
            let u = new Map;

            function g(t) {
                let e, n, g, d, s, y = (0, a.c)(11),
                    z = (0, i.useContext)(_.A),
                    {
                        api: B
                    } = (0, i.useContext)(c.A).services;
                y[0] !== z ? (e = (0, r.Dw)(z), y[0] = z, y[1] = e) : e = y[1];
                let P = e;
                y[2] === Symbol.for("react.memo_cache_sentinel") ? (n = [], y[2] = n) : n = y[2];
                let [h, m] = (0, i.useState)(n), [p, b] = (0, i.useState)(t), [T, f] = (0, i.useState)(t);
                return t !== T && (f(t), b(t)), y[3] !== B || y[4] !== P || y[5] !== t ? (g = () => {
                    if (!t) return;
                    let e = !1,
                        n = u.get(P),
                        a = (0, o.O)(n) && Date.now() - n.fetchedAt < 36e5 ? n.request : void 0;
                    return (0, o.O)(a) || (a = B.getBasicLaunchGames(P).then(l).catch(t => {
                        throw u.delete(P), t
                    }), u.set(P, {
                        fetchedAt: Date.now(),
                        request: a
                    })), a.then(t => {
                        e || (m(t), b(!1))
                    }).catch(() => {
                        e || (m([]), b(!1))
                    }), () => {
                        e = !0
                    }
                }, d = [t, P, B], y[3] = B, y[4] = P, y[5] = t, y[6] = g, y[7] = d) : (g = y[6], d = y[7]), (0, i.useEffect)(g, d), y[8] !== h || y[9] !== p ? (s = {
                    games: h,
                    isLoading: p
                }, y[8] = h, y[9] = p, y[10] = s) : s = y[10], s
            }

            function l(t) {
                return t.games.items
            }
        },
        18239: t => {
            t.exports = {
                czyButton: "Pagination_czyButton__sx09H",
                "czyButton--contained--purple": "Pagination_czyButton--contained--purple__Zy2I4",
                "czyButton--contained--white": "Pagination_czyButton--contained--white__kynud",
                "czyButton--contained--grey": "Pagination_czyButton--contained--grey__9FP5I",
                "czyButton--contained--warning": "Pagination_czyButton--contained--warning__zMM2c",
                "czyButton--contained--alert": "Pagination_czyButton--contained--alert__pmmID",
                "czyButton--contained--success": "Pagination_czyButton--contained--success__UKyr5",
                "czyButton--contained--black": "Pagination_czyButton--contained--black__IgS6N",
                "czyButton--contained--green-gradient": "Pagination_czyButton--contained--green-gradient__53nJa",
                "czyButton--contained--animated-green-gradient": "Pagination_czyButton--contained--animated-green-gradient__f1u8e",
                "scroll-gradient": "Pagination_scroll-gradient__ECs6S",
                "czyButton--outlined--purple": "Pagination_czyButton--outlined--purple__lfPhJ",
                "czyButton--link--purple": "Pagination_czyButton--link--purple__1Icrp",
                "czyButton--outlined--white": "Pagination_czyButton--outlined--white__KRsiU",
                "czyButton--link--white": "Pagination_czyButton--link--white__gnaPK",
                "czyButton--outlined--grey": "Pagination_czyButton--outlined--grey__p2Sjb",
                "czyButton--link--grey": "Pagination_czyButton--link--grey__7Or4R",
                "czyButton--outlined--warning": "Pagination_czyButton--outlined--warning__A2QZN",
                "czyButton--link--warning": "Pagination_czyButton--link--warning__pbdLA",
                "czyButton--outlined--alert": "Pagination_czyButton--outlined--alert__u3j0N",
                "czyButton--link--alert": "Pagination_czyButton--link--alert___b8ET",
                "czyButton--outlined--success": "Pagination_czyButton--outlined--success__2dIJc",
                "czyButton--link--success": "Pagination_czyButton--link--success__KQLTE",
                "czyButton--outlined": "Pagination_czyButton--outlined__58TXC",
                "czyButton--disabled": "Pagination_czyButton--disabled__wyPNU",
                "czyButton--height50": "Pagination_czyButton--height50__9znTI",
                "czyButton--height34": "Pagination_czyButton--height34__GXhNQ",
                "czyButton--height28": "Pagination_czyButton--height28__55e6v",
                "czyButton--fullWidth": "Pagination_czyButton--fullWidth__IMxpC",
                "czyButton--headerIcon": "Pagination_czyButton--headerIcon__eXUd_",
                "czyButton--headerIcon--desktop": "Pagination_czyButton--headerIcon--desktop__w53MU",
                "czyButton--headerIcon--mobile": "Pagination_czyButton--headerIcon--mobile__mRyIU",
                "czyButton--headerIcon--withLabel": "Pagination_czyButton--headerIcon--withLabel__3VWGd",
                paginationContainer: "Pagination_paginationContainer__hoPjL",
                ellipsis: "Pagination_ellipsis__JebGV",
                gamePageLink: "Pagination_gamePageLink__Q4NQK",
                number: "Pagination_number__UPaE8",
                current: "Pagination_current__2Voa_",
                disabled: "Pagination_disabled__9RqME",
                dynamicPaginationContainer: "Pagination_dynamicPaginationContainer___mST6"
            }
        },
        30277: (t, e, n) => {
            "use strict";
            n.d(e, {
                z: () => i
            });
            var a = n(68168);

            function i(t) {
                let e = Array.isArray(t) ? t[0] : t;
                if ("number" == typeof e) return e;
                if ("string" != typeof e || !/^\d+$/.test(e)) throw new a.A(404, "Incorrect pagination");
                return Number(e)
            }
        },
        47270: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => h
            });
            var a = n(75155),
                i = n(55729),
                o = n(98417),
                c = n(36541),
                _ = n(71237),
                r = n(4230),
                u = n(71684),
                g = n(74532);
            async function l(t, e, n, a, i, o) {
                let c = o.experimentService.getModelName(t.place);
                return i.model.getModelGames(c, e, n, a, t)
            }
            var d = n(50190),
                s = n(15383),
                y = n(845),
                z = n(81631),
                B = n(63811),
                P = n(47429);
            let h = t => {
                let e, n, h, m, p, b, T, f, w, k, I, v = (0, a.c)(74),
                    {
                        tag: C,
                        isOriginalsPage: G,
                        page: A,
                        sorting: E,
                        shouldFetchGamesOnClient: M,
                        crawlerGames: O,
                        extraDesktopGames: S,
                        isCrawler: x
                    } = t,
                    {
                        getModelGames: D
                    } = (() => {
                        let {
                            modelService: t,
                            experimentService: e
                        } = i.useContext(u.A).services, n = i.useContext(r.A), {
                            countryCode: a
                        } = i.useContext(g.A), {
                            clusterMap: c
                        } = _.lF(), d = i.useRef(c);
                        return i.useEffect(() => {
                            d.current = c
                        }, [c]), {
                            getModelGames: i.useCallback(async i => {
                                let {
                                    pageNumber: c = 1,
                                    pageSize: _,
                                    id: r,
                                    isCategory: u,
                                    isOriginalsPage: g,
                                    desktopPageSize: s,
                                    sorting: y
                                } = i;
                                if (c < 0 || !isFinite(c) || _ && _ < 0) return;
                                let z = await l({
                                    place: g ? "originals_tagPage" : "tagPage",
                                    tag: g || u ? void 0 : r,
                                    category: g ? void 0 : u ? r : void 0,
                                    originalsOnly: g || void 0,
                                    sorting: y,
                                    page: c,
                                    size: _,
                                    desktopPageSize: s
                                }, n, a, d.current, {
                                    model: t
                                }, {
                                    experimentService: e
                                });
                                if ((0, o.O)(z)) return {
                                    items: z.items,
                                    includesIneligibleGames: z.includesIneligibleGames,
                                    total: z.total
                                }
                            }, [n, e, t, a])
                        }
                    })(),
                    N = (0, i.useContext)(r.A),
                    F = (0, y.U)(),
                    {
                        games: L,
                        isLoading: U
                    } = (0, s.k)(F);
                v[0] !== O ? .items || v[1] !== S ? .items || v[2] !== M ? (e = M ? void 0 : [...O ? .items ? ? [], ...S ? .items ? ? []], v[0] = O ? .items, v[1] = S ? .items, v[2] = M, v[3] = e) : e = v[3];
                let [X, Q] = (0, i.useState)(e), [j, R] = (0, i.useState)(M ? void 0 : O ? .total), [W, K] = (0, i.useState)(void 0), [J, q] = (0, i.useState)(!M), Z = (0, d.A)(), H = "desktop" === N.deviceType ? P.F_ : P.w9;
                v[4] !== O || v[5] !== A || v[6] !== M ? (n = {
                    shouldFetchGamesOnClient: M,
                    crawlerGames: O,
                    page: A
                }, v[4] = O, v[5] = A, v[6] = M, v[7] = n) : n = v[7];
                let [V, Y] = (0, i.useState)(n);
                if ((V.shouldFetchGamesOnClient !== M || V.crawlerGames !== O || V.page !== A) && (Y({
                        shouldFetchGamesOnClient: M,
                        crawlerGames: O,
                        page: A
                    }), M || (Q(O ? .items), R(O ? .total))), v[8] !== D || v[9] !== G || v[10] !== A || v[11] !== H || v[12] !== M || v[13] !== E || v[14] !== C ? .id || v[15] !== C ? .isCategory ? (h = () => {
                        M && (Q(void 0), R(void 0), q(!1), (async () => {
                            let t = await D({
                                id: G ? "originals" : C ? .id || "",
                                isCategory: !G && (C ? .isCategory || !1),
                                pageNumber: A,
                                pageSize: H,
                                desktopPageSize: P.F_,
                                isOriginalsPage: G,
                                sorting: E
                            });
                            t && (Q(t.items), R(t.total), K(t.includesIneligibleGames), q(!0))
                        })())
                    }, v[8] = D, v[9] = G, v[10] = A, v[11] = H, v[12] = M, v[13] = E, v[14] = C ? .id, v[15] = C ? .isCategory, v[16] = h) : h = v[16], v[17] !== D || v[18] !== G || v[19] !== A || v[20] !== H || v[21] !== M || v[22] !== E || v[23] !== C ? (m = [D, H, C, A, M, G, E], v[17] = D, v[18] = G, v[19] = A, v[20] = H, v[21] = M, v[22] = E, v[23] = C, v[24] = m) : m = v[24], (0, i.useEffect)(h, m), v[25] !== L || v[26] !== U || v[27] !== S || v[28] !== Z || v[29] !== W || v[30] !== x || v[31] !== X || v[32] !== A || v[33] !== M || v[34] !== F || v[35] !== E || v[36] !== C ? .id) {
                    let t, e, n, a;
                    T = X, (0, o.O)(X) && !1 === W && (0, o.O)(S) && (T = X.concat(S.items));
                    let i = C ? .id;
                    v[40] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, z.Ji)(), v[40] = t) : t = v[40];
                    let _ = t;
                    v[41] !== x || v[42] !== A || v[43] !== F || v[44] !== i ? (e = F && !x && 1 === A && (0, o.O)(i), v[41] = x, v[42] = A, v[43] = F, v[44] = i, v[45] = e) : e = v[45];
                    let r = e;
                    v[46] !== L || v[47] !== U || v[48] !== r || v[49] !== i ? (n = r && (0, o.O)(i) && !U ? (0, z.i7)((0, z.EQ)(L, i), _, z.FX.length) : [], v[46] = L, v[47] = U, v[48] = r, v[49] = i, v[50] = n) : n = v[50];
                    let u = n,
                        g = r && !U ? u.length : 0,
                        l = P.F_ + g;
                    if (v[51] !== U || v[52] !== Z || v[53] !== r || v[54] !== x || v[55] !== A || v[56] !== M || v[57] !== i ? (a = (0, z.XQ)({
                            hasMountedOnClient: Z,
                            holdsUntilMounted: !M && !x && 1 === A && (0, o.O)(i),
                            injectBasicLaunch: r,
                            basicLaunchLoading: U
                        }), v[51] = U, v[52] = Z, v[53] = r, v[54] = x, v[55] = A, v[56] = M, v[57] = i, v[58] = a) : a = v[58], p = a, !(0, o.O)(T) || p) {
                        let t;
                        v[59] !== l ? (t = Array.from({
                            length: l
                        }, (t, e) => ({
                            id: `${e}`,
                            name: `loading-${e}`,
                            slug: `loading-${e}`,
                            cover: void 0,
                            videos: (0, B.R)(),
                            covers: void 0,
                            loading: !0,
                            iosFriendly: !1,
                            androidFriendly: !1,
                            status: "PUBLISHED",
                            gameThumbLabels: []
                        })), v[59] = l, v[60] = t) : t = v[60], b = t
                    } else if (u.length > 0) {
                        let t = (0, o.O)(E) && E !== c.nn ? [0, 1, 2] : z.FX;
                        b = (0, z.cY)(T, u, t)
                    } else b = T;
                    v[25] = L, v[26] = U, v[27] = S, v[28] = Z, v[29] = W, v[30] = x, v[31] = X, v[32] = A, v[33] = M, v[34] = F, v[35] = E, v[36] = C ? .id, v[37] = p, v[38] = b, v[39] = T
                } else p = v[37], b = v[38], T = v[39];
                v[61] !== T || v[62] !== j ? (f = (0, o.O)(T) && (0, o.O)(j), v[61] = T, v[62] = j, v[63] = f) : f = v[63];
                let $ = f,
                    tt = Math.ceil((j ? ? 0) / P.F_),
                    te = $ && (0 === T.length || A > tt);
                v[64] !== A ? (w = {
                    page: A,
                    size: P.F_
                }, v[64] = A, v[65] = w) : w = v[65];
                let tn = j || 0;
                v[66] !== b || v[67] !== w || v[68] !== tn ? (k = {
                    items: b,
                    pagination: w,
                    total: tn
                }, v[66] = b, v[67] = w, v[68] = tn, v[69] = k) : k = v[69];
                let ta = !J || p;
                return v[70] !== te || v[71] !== k || v[72] !== ta ? (I = {
                    modelGames: k,
                    loading: ta,
                    notFound: te
                }, v[70] = te, v[71] = k, v[72] = ta, v[73] = I) : I = v[73], I
            }
        },
        52722: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => l
            });
            var a = n(6029),
                i = n(75155);
            n(55729);
            var o = n(7842),
                c = n(71024),
                _ = n.n(c),
                r = n(18239),
                u = n.n(r);
            let g = _()(() => n.e(23963).then(n.bind(n, 23963)), {
                    loadableGenerated: {
                        webpack: () => [23963]
                    },
                    loading: () => null,
                    ssr: !1
                }),
                l = t => {
                    let e, n = (0, i.c)(4),
                        {
                            loading: c,
                            games: _,
                            urlGenerator: r
                        } = t;
                    return n[0] !== _ || n[1] !== c || n[2] !== r ? (e = (0, a.jsx)("div", {
                        className: u().dynamicPaginationContainer,
                        children: c ? (0, a.jsx)(o.y, {
                            size: "large",
                            tone: "brand"
                        }) : (0, a.jsx)(g, {
                            games: _,
                            urlGenerator: r
                        })
                    }), n[0] = _, n[1] = c, n[2] = r, n[3] = e) : e = n[3], e
                }
        },
        63811: (t, e, n) => {
            "use strict";

            function a() {
                return {
                    blurredVideo: null,
                    original: null,
                    portraitOriginal: null,
                    portraitSizes: [],
                    sizes: []
                }
            }
            n.d(e, {
                R: () => a
            })
        },
        96940: t => {
            t.exports = {
                czyButton: "TagPage_czyButton__XdB4L",
                "czyButton--contained--purple": "TagPage_czyButton--contained--purple__pP4cC",
                "czyButton--contained--white": "TagPage_czyButton--contained--white__2DF4z",
                "czyButton--contained--grey": "TagPage_czyButton--contained--grey__xhjmY",
                "czyButton--contained--warning": "TagPage_czyButton--contained--warning__ihhPg",
                "czyButton--contained--alert": "TagPage_czyButton--contained--alert__znaLQ",
                "czyButton--contained--success": "TagPage_czyButton--contained--success__ijOm6",
                "czyButton--contained--black": "TagPage_czyButton--contained--black__ni9CD",
                "czyButton--contained--green-gradient": "TagPage_czyButton--contained--green-gradient__ChJ5p",
                "czyButton--contained--animated-green-gradient": "TagPage_czyButton--contained--animated-green-gradient__H0guK",
                "scroll-gradient": "TagPage_scroll-gradient__dmTrD",
                "czyButton--outlined--purple": "TagPage_czyButton--outlined--purple__8ONT5",
                "czyButton--link--purple": "TagPage_czyButton--link--purple___RTdG",
                "czyButton--outlined--white": "TagPage_czyButton--outlined--white__98268",
                "czyButton--link--white": "TagPage_czyButton--link--white__Fz0Ci",
                "czyButton--outlined--grey": "TagPage_czyButton--outlined--grey__BE_L4",
                "czyButton--link--grey": "TagPage_czyButton--link--grey__imlH4",
                "czyButton--outlined--warning": "TagPage_czyButton--outlined--warning__N6iip",
                "czyButton--link--warning": "TagPage_czyButton--link--warning__aE_mG",
                "czyButton--outlined--alert": "TagPage_czyButton--outlined--alert__DylPM",
                "czyButton--link--alert": "TagPage_czyButton--link--alert__dfN1T",
                "czyButton--outlined--success": "TagPage_czyButton--outlined--success__rv1Ym",
                "czyButton--link--success": "TagPage_czyButton--link--success__XTct8",
                "czyButton--outlined": "TagPage_czyButton--outlined__irEzd",
                "czyButton--disabled": "TagPage_czyButton--disabled__Cgxc4",
                "czyButton--height50": "TagPage_czyButton--height50__f3S5B",
                "czyButton--height34": "TagPage_czyButton--height34__E3jNQ",
                "czyButton--height28": "TagPage_czyButton--height28__6q_CD",
                "czyButton--fullWidth": "TagPage_czyButton--fullWidth___S5Gz",
                "czyButton--headerIcon": "TagPage_czyButton--headerIcon__61zX0",
                "czyButton--headerIcon--desktop": "TagPage_czyButton--headerIcon--desktop__PeXBb",
                "czyButton--headerIcon--mobile": "TagPage_czyButton--headerIcon--mobile__sPdYw",
                "czyButton--headerIcon--withLabel": "TagPage_czyButton--headerIcon--withLabel__RdBXE",
                noPStyles: "TagPage_noPStyles__iAJL4",
                gridContainer: "TagPage_gridContainer__cOmpI",
                gameGridFullWidth: "TagPage_gameGridFullWidth__jvOmG",
                fillerGrid: "TagPage_fillerGrid__gvhlT",
                fillerGridContent: "TagPage_fillerGridContent__b60AQ",
                divider: "TagPage_divider__uc8Dq",
                experimentInstantGrid: "TagPage_experimentInstantGrid__CE_Zr",
                addMarginBottom: "TagPage_addMarginBottom__yKqWq",
                root: "TagPage_root__ME8XN",
                isDesktop: "TagPage_isDesktop__UxyBZ",
                pageWrapper: "TagPage_pageWrapper__mhOEZ",
                backgroundImageOverlay: "TagPage_backgroundImageOverlay__JMIed",
                backgroundImage: "TagPage_backgroundImage__kbUef",
                titleContainer: "TagPage_titleContainer__EQNoZ",
                leaderboardCountdownContainer: "TagPage_leaderboardCountdownContainer__KdDyH"
            }
        }
    }
]);