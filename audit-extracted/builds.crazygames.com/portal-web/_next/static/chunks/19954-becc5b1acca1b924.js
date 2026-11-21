! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6e54b7c2-392e-4720-9edd-0527b794f3e7", e._sentryDebugIdIdentifier = "sentry-dbid-6e54b7c2-392e-4720-9edd-0527b794f3e7")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19954], {
        6500: e => {
            e.exports = {
                endSeasonContainer: "LeaderboardCountdown_endSeasonContainer__hU5ky",
                czyButton: "LeaderboardCountdown_czyButton__S8jcM",
                "czyButton--contained--purple": "LeaderboardCountdown_czyButton--contained--purple__pGMFc",
                "czyButton--contained--white": "LeaderboardCountdown_czyButton--contained--white__WTxtl",
                "czyButton--contained--grey": "LeaderboardCountdown_czyButton--contained--grey__dWbvq",
                "czyButton--contained--warning": "LeaderboardCountdown_czyButton--contained--warning__cR9f8",
                "czyButton--contained--alert": "LeaderboardCountdown_czyButton--contained--alert__p6Q2U",
                "czyButton--contained--success": "LeaderboardCountdown_czyButton--contained--success__ANZsq",
                "czyButton--contained--black": "LeaderboardCountdown_czyButton--contained--black__R0GmX",
                "czyButton--contained--green-gradient": "LeaderboardCountdown_czyButton--contained--green-gradient__ARAli",
                "czyButton--contained--animated-green-gradient": "LeaderboardCountdown_czyButton--contained--animated-green-gradient__s4T2V",
                "scroll-gradient": "LeaderboardCountdown_scroll-gradient__fIC4B",
                "czyButton--outlined--purple": "LeaderboardCountdown_czyButton--outlined--purple__5XtaV",
                "czyButton--link--purple": "LeaderboardCountdown_czyButton--link--purple__qJl6N",
                "czyButton--outlined--white": "LeaderboardCountdown_czyButton--outlined--white__AzE1k",
                "czyButton--link--white": "LeaderboardCountdown_czyButton--link--white__g1XSj",
                "czyButton--outlined--grey": "LeaderboardCountdown_czyButton--outlined--grey__T2orp",
                "czyButton--link--grey": "LeaderboardCountdown_czyButton--link--grey__SdaXU",
                "czyButton--outlined--warning": "LeaderboardCountdown_czyButton--outlined--warning__GyJ_m",
                "czyButton--link--warning": "LeaderboardCountdown_czyButton--link--warning__g11wd",
                "czyButton--outlined--alert": "LeaderboardCountdown_czyButton--outlined--alert__d4JPg",
                "czyButton--link--alert": "LeaderboardCountdown_czyButton--link--alert__5DoR8",
                "czyButton--outlined--success": "LeaderboardCountdown_czyButton--outlined--success__BSp_p",
                "czyButton--link--success": "LeaderboardCountdown_czyButton--link--success__Syx4B",
                "czyButton--outlined": "LeaderboardCountdown_czyButton--outlined__n0pa6",
                "czyButton--disabled": "LeaderboardCountdown_czyButton--disabled__2Cjjd",
                "czyButton--height50": "LeaderboardCountdown_czyButton--height50__RX9rt",
                "czyButton--height34": "LeaderboardCountdown_czyButton--height34__0eZtp",
                "czyButton--height28": "LeaderboardCountdown_czyButton--height28__di8j4",
                "czyButton--fullWidth": "LeaderboardCountdown_czyButton--fullWidth__ocsPU",
                "czyButton--headerIcon": "LeaderboardCountdown_czyButton--headerIcon__5J8hd",
                "czyButton--headerIcon--desktop": "LeaderboardCountdown_czyButton--headerIcon--desktop___O0Bc",
                "czyButton--headerIcon--mobile": "LeaderboardCountdown_czyButton--headerIcon--mobile__4c_V6",
                "czyButton--headerIcon--withLabel": "LeaderboardCountdown_czyButton--headerIcon--withLabel__jHa0h"
            }
        },
        25312: (e, t, n) => {
            "use strict";
            n.d(t, {
                LW: () => d,
                WH: () => c,
                _5: () => r,
                aB: () => i,
                ec: () => a,
                qz: () => s,
                wx: () => l
            });
            var o = n(91828);
            let a = 864e5,
                r = 6048e5,
                i = e => parseFloat(((Date.now() - e) / 6e4).toFixed(2));

            function l(e) {
                let t = new Date(e),
                    n = new Date;
                if (!(0, o.vd)(t) || t < n) return null;
                let a = t.getTime() - n.getTime(),
                    {
                        days: r,
                        hours: i,
                        minutes: l
                    } = (0, o.Hf)(a),
                    s = [];
                return r > 0 && s.push(`${r}d`), i > 0 && s.push(`${i}h`), 0 === r && 0 === i && l > 0 && s.push(`${l}m`), `${s.join(" ")}`
            }

            function s(e, t) {
                let n = new Date(e);
                if (!(0, o.vd)(n) || n <= t) return null;
                let a = Math.floor((n.getTime() - t.getTime()) / 1e3),
                    r = Math.floor(a / 86400),
                    i = Math.floor(a % 86400 / 3600),
                    l = Math.floor(a % 3600 / 60);
                if (r > 0) {
                    let e = [`${r}d`];
                    return i > 0 && e.push(`${i}h`), e.join(" ")
                }
                if (i > 0) {
                    let e = [`${i}h`];
                    return l > 0 && e.push(`${l}m`), e.join(" ")
                }
                return `${l}m ${a%60}s`
            }

            function c(e, t) {
                if (!e) return !1;
                let n = new Date(e).getTime();
                return !isNaN(n) && Date.now() - n >= t
            }

            function d(e) {
                return new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !1
                }).format(e)
            }
        },
        39195: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var o = n(6029),
                a = n(55729),
                r = n(93389);
            let i = function(e) {
                return class extends a.Component {
                    static async getInitialProps(t) {
                        return e.getInitialProps ? await e.getInitialProps(t) : {}
                    }
                    render() {
                        return (0, o.jsx)(r.A.Consumer, {
                            children: t => {
                                let {
                                    routeHelper: n
                                } = t;
                                return (0, o.jsx)(e, {
                                    routeHelper: n,
                                    ...this.props
                                })
                            }
                        })
                    }
                }
            }
        },
        49785: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(6029),
                a = n(55729),
                r = n(79942),
                i = n(93389);

            function l(e, t) {
                return {
                    "@type": "Question",
                    name: e,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: t
                    }
                }
            }

            function s(e, t) {
                let n = e.map(e => {
                    let n = t.gamePageLink(e.slug).href;
                    return `<li><a href="${n}">${e.name}</a></li>`
                });
                return `<ol>${n.join("")}</ol>`
            }
            let c = a.memo(e => {
                let t, n, c, d, u, _, g, y, m, h, B, p, x, {
                        tag: z,
                        mobileGames: w,
                        topGames: b,
                        linkBoostedGames: j
                    } = e,
                    {
                        i18n: k
                    } = (0, r.uB)(),
                    {
                        routeHelper: f
                    } = a.useContext(i.A),
                    C = JSON.stringify((t = k._("tag.faq.popular", {
                        title: z.title
                    }), n = k._("tag.faq.mobile", {
                        title: z.title
                    }), c = k._("tag.faq.whatAre", {
                        title: z.title
                    }), d = k._("tag.faq.whatAreSomeUnderrated", {
                        title: z.title
                    }), u = s(b, f), _ = s(w, f), g = j.length > 0 ? s(j, f) : null, y = z.intro, m = l(t, u), h = l(n, _), B = y ? l(c, y) : null, p = g ? l(d, g) : null, x = [m, h], p && x.push(p), B && x.push(B), {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: x
                    }));
                return (0, o.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: C
                    }
                })
            })
        },
        60510: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var o = n(6029),
                a = n(75155);
            n(55729);
            var r = n(79942),
                i = n(93800),
                l = n(99703),
                s = n(6500),
                c = n.n(s);
            let d = e => {
                let t, n, s, d = (0, a.c)(6),
                    {
                        endDate: u,
                        addLabel: _
                    } = e,
                    g = (0, l.s)(u);
                d[0] !== _ || d[1] !== g ? (t = null === g ? _ ? (0, o.jsx)(r.x6, {
                    id: "common.carousel.leaderboards.endsIn",
                    values: {
                        time: "…"
                    }
                }) : "…" : _ ? (0, o.jsx)(r.x6, {
                    id: "common.carousel.leaderboards.endsIn",
                    values: {
                        time: g
                    }
                }, g) : g, d[0] = _, d[1] = g, d[2] = t) : t = d[2];
                let y = t;
                return d[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(i.A, {
                    name: "clock"
                }), d[3] = n) : n = d[3], d[4] !== y ? (s = (0, o.jsxs)("div", {
                    className: c().endSeasonContainer,
                    children: [n, " ", y]
                }), d[4] = y, d[5] = s) : s = d[5], s
            }
        },
        69694: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => J
            });
            var o = n(6029),
                a = n(75155),
                r = n(55729),
                i = n(50113),
                l = n(79942),
                s = n(50212),
                c = n(29403),
                d = n(60510),
                u = n(52722),
                _ = n(15325),
                g = n(81930),
                y = n(52461),
                m = n(50293),
                h = n(58224),
                B = n(87295),
                p = n(93389),
                x = n(47429),
                z = n(4230),
                w = n(47270),
                b = n(70930),
                j = n(32627),
                k = n(6847),
                f = n(77515),
                C = n(51196),
                S = n(85829),
                v = n(91328),
                A = n(49785),
                L = n(85116),
                I = n(77650),
                N = n(952),
                T = n(91831),
                M = n(98084),
                F = n(95816);
            let D = e => {
                let t, n, i, l, s, c, d, u = (0, a.c)(31),
                    {
                        alternatives: _,
                        tag: g,
                        games: y,
                        loading: m,
                        featuredGame: h,
                        page: B
                    } = e,
                    {
                        routeHelper: x
                    } = r.useContext(p.A),
                    {
                        pageUrlHelper: z
                    } = r.useContext(C.e);
                u[0] !== B || u[1] !== z || u[2] !== x || u[3] !== g.isCategory || u[4] !== g.slug ? (t = z.isOnLeaderboards() ? x.leaderboardsPageCanonical(B) : x.tagOrCategoryPageCanonical(g.slug, g.isCategory, B), u[0] = B, u[1] = z, u[2] = x, u[3] = g.isCategory, u[4] = g.slug, u[5] = t) : t = u[5];
                let w = t;
                u[6] !== h || u[7] !== g ? (n = (0, F.e)(g, h), u[6] = h, u[7] = g, u[8] = n) : n = u[8];
                let b = n;
                u[9] !== B || u[10] !== g.metaTitle || u[11] !== g.title ? (i = g.metaTitle ? function(e, t) {
                    return 1 === t ? e : `${e} - Page ${t}`
                }(g.metaTitle, B) : I.Ru._("tag.head.title", {
                    title: g.title,
                    pageNumber: B
                }), u[9] = B, u[10] = g.metaTitle, u[11] = g.title, u[12] = i) : i = u[12];
                let j = i,
                    k = h ? .cover;
                u[13] !== _ || u[14] !== w || u[15] !== j || u[16] !== b ? (l = (0, o.jsx)(N.A, {
                    canonical: w,
                    title: j,
                    metaDescription: b,
                    alternatives: _
                }), u[13] = _, u[14] = w, u[15] = j, u[16] = b, u[17] = l) : l = u[17], u[18] !== w || u[19] !== k || u[20] !== j || u[21] !== b ? (s = k && (0, o.jsx)(T.A, {
                    canonical: w,
                    title: j,
                    description: b,
                    imageUrl: k
                }), u[18] = w, u[19] = k, u[20] = j, u[21] = b, u[22] = s) : s = u[22];
                let f = m ? void 0 : y.items;
                return u[23] !== b || u[24] !== f || u[25] !== g ? (c = (0, o.jsx)(M.A, {
                    tag: g,
                    description: b,
                    games: f
                }), u[23] = b, u[24] = f, u[25] = g, u[26] = c) : c = u[26], u[27] !== l || u[28] !== s || u[29] !== c ? (d = (0, o.jsxs)(o.Fragment, {
                    children: [l, s, c]
                }), u[27] = l, u[28] = s, u[29] = c, u[30] = d) : d = u[30], d
            };
            var P = n(96940),
                G = n.n(P);
            let O = "713bfa03-88e7-4927-b130-41511b8a335d",
                q = [O],
                $ = e => {
                    let t, n, r, i, l, s, c, d, u = (0, a.c)(22),
                        {
                            tag: _,
                            topGames: g,
                            topMobileGames: y,
                            linkBoostedGames: m
                        } = e;
                    if (!_.showFaq || !g || !y) return null;
                    u[0] !== y ? (t = y.slice(0, 5), u[0] = y, u[1] = t) : t = u[1];
                    let h = t;
                    u[2] !== g ? (n = g.slice(0, 10), u[2] = g, u[3] = n) : n = u[3];
                    let B = n;
                    return u[4] !== m ? (r = m || [], u[4] = m, u[5] = r) : r = u[5], u[6] !== h || u[7] !== B || u[8] !== r || u[9] !== _ ? (i = (0, o.jsx)(A.A, {
                        tag: _,
                        mobileGames: h,
                        topGames: B,
                        linkBoostedGames: r
                    }), u[6] = h, u[7] = B, u[8] = r, u[9] = _, u[10] = i) : i = u[10], u[11] !== m ? (l = m || [], u[11] = m, u[12] = l) : l = u[12], u[13] !== h || u[14] !== B || u[15] !== l || u[16] !== _ ? (s = (0, o.jsx)(v.A, {
                        tag: _,
                        mobileGames: h,
                        topGames: B,
                        linkBoostedGames: l
                    }), u[13] = h, u[14] = B, u[15] = l, u[16] = _, u[17] = s) : s = u[17], u[18] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)("div", {
                        className: G().divider,
                        role: "separator"
                    }), u[18] = c) : c = u[18], u[19] !== i || u[20] !== s ? (d = (0, o.jsxs)(o.Fragment, {
                        children: [i, s, c]
                    }), u[19] = i, u[20] = s, u[21] = d) : d = u[21], d
                },
                W = e => {
                    let t, n, r, i, s = (0, a.c)(10),
                        {
                            tag: c
                        } = e,
                        {
                            description: d,
                            showFaq: u,
                            intro: _,
                            title: g
                        } = c;
                    return d ? (s[0] !== d ? (t = (0, o.jsx)("div", {
                        className: G().noPStyles,
                        dangerouslySetInnerHTML: {
                            __html: d
                        }
                    }), s[0] = d, s[1] = t) : t = s[1], s[2] !== _ || s[3] !== u || s[4] !== g ? (n = !u && _ && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("h3", {
                            children: (0, o.jsx)(l.x6, {
                                id: "tag.faq.whatAre",
                                values: {
                                    title: g
                                }
                            })
                        }), (0, o.jsx)("div", {
                            className: G().noPStyles,
                            dangerouslySetInnerHTML: {
                                __html: _
                            }
                        })]
                    }), s[2] = _, s[3] = u, s[4] = g, s[5] = n) : n = s[5], s[6] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, o.jsx)("div", {
                        className: G().divider,
                        role: "separator"
                    }), s[6] = r) : r = s[6], s[7] !== t || s[8] !== n ? (i = (0, o.jsxs)(o.Fragment, {
                        children: [t, n, r]
                    }), s[7] = t, s[8] = n, s[9] = i) : i = s[9], i) : null
                },
                E = e => {
                    let t, n, r, i, l = (0, a.c)(15),
                        {
                            tag: c,
                            isLeaderboardsTag: d,
                            isFirstPage: _,
                            modelGames: g,
                            loading: m,
                            urlGenerator: B,
                            newClickOrigin: p,
                            isDeviceDesktopWeb: z
                        } = e;
                    return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.A)(G().gridContainer), l[0] = t) : t = l[0], l[1] !== z || l[2] !== _ || l[3] !== d || l[4] !== g.items || l[5] !== c ? (n = (0, o.jsx)("div", {
                        className: t,
                        children: z ? (0, o.jsx)(b.A, {
                            games: g.items,
                            justifyContent: "center",
                            slidesToLoadEagerly: h.CJ,
                            className: G().gameGridFullWidth
                        }) : d ? (0, o.jsx)(k.A, {
                            games: g.items,
                            expectedSize: x.w9,
                            customOrigin: "leaderboardPage"
                        }) : (0, o.jsx)(L.A, {
                            isFirstPage: _,
                            games: g.items,
                            enableInstantJoin: "7a08b313-2b2f-4042-9135-821d47ad8668" === c.id
                        })
                    }), l[1] = z, l[2] = _, l[3] = d, l[4] = g.items, l[5] = c, l[6] = n) : n = l[6], l[7] !== m || l[8] !== g || l[9] !== B ? (r = (0, o.jsx)(u.A, {
                        loading: m,
                        games: g,
                        urlGenerator: B
                    }), l[7] = m, l[8] = g, l[9] = B, l[10] = r) : r = l[10], l[11] !== p || l[12] !== n || l[13] !== r ? (i = (0, o.jsxs)(y.x, {
                        newClickOrigin: p,
                        children: [n, r]
                    }), l[11] = p, l[12] = n, l[13] = r, l[14] = i) : i = l[14], i
                },
                H = e => {
                    let t, n, r = (0, a.c)(4),
                        {
                            fillerGames: i,
                            isDeviceDesktopWeb: c
                        } = e;
                    return i && 0 !== i.length ? (r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)("h2", {
                        children: (0, o.jsx)(l.x6, {
                            id: "tag.fillergrid.title"
                        })
                    }), r[0] = t) : t = r[0], r[1] !== i || r[2] !== c ? (n = (0, o.jsxs)("div", {
                        className: G().fillerGrid,
                        children: [t, (0, o.jsx)("div", {
                            className: G().fillerGridContent,
                            children: c ? (0, o.jsx)(b.A, {
                                games: i,
                                justifyContent: "center",
                                slidesToLoadEagerly: h.CJ,
                                className: G().gameGridFullWidth
                            }) : (0, o.jsx)(j.A, {
                                games: i.slice(0, 6),
                                expectedSize: 6,
                                enableInstantJoin: !1,
                                customOrigin: "tagPageInstantLarge",
                                autoplayOnlyCentered: !0,
                                className: (0, s.A)(G().experimentInstantGrid, G().addMarginBottom)
                            })
                        })]
                    }), r[1] = i, r[2] = c, r[3] = n) : n = r[3], n) : null
                },
                J = e => {
                    let {
                        shouldFetchGamesOnClient: t,
                        sorting: n,
                        featuredGame: a,
                        tag: l,
                        page: u,
                        topGames: h,
                        topMobileGames: x,
                        linkBoostedGames: b,
                        fillerGames: j,
                        crawlerGames: k,
                        extraDesktopGames: v,
                        alternatives: A,
                        isCrawler: L
                    } = e, I = (0, r.useMemo)(() => ({
                        id: l.id,
                        isCategory: l.isCategory
                    }), [l.id, l.isCategory]), {
                        modelGames: N,
                        loading: T,
                        notFound: M
                    } = (0, w.A)({
                        tag: I,
                        page: u,
                        sorting: n,
                        shouldFetchGamesOnClient: t,
                        crawlerGames: k,
                        extraDesktopGames: v,
                        isCrawler: L
                    }), {
                        routeHelper: P
                    } = r.useContext(p.A), J = r.useContext(z.A), R = (0, m.xl)(J), U = (0, m.PS)(J), {
                        pageUrlHelper: X
                    } = r.useContext(C.e), Z = l.id === O, {
                        data: K
                    } = (0, i.IT)(_.R1, {
                        skip: !Z
                    }), Q = (0, r.useRef)(l.id), Y = (0, r.useRef)(l.pageBackground);
                    l.id !== Q.current ? (Q.current = l.id, Y.current = l.pageBackground) : l.pageBackground && (Y.current = l.pageBackground);
                    let V = Y.current,
                        ee = K ? .leaderboardStats ? .seasonEndTime ? ? "",
                        et = Z ? (0, o.jsxs)("div", {
                            className: G().titleContainer,
                            children: [l.title, (0, o.jsx)("div", {
                                className: G().leaderboardCountdownContainer,
                                children: (0, o.jsx)(d.A, {
                                    endDate: ee
                                })
                            })]
                        }) : l.title,
                        en = (0, F.e)(l, a),
                        eo = 1 === u,
                        ea = N.items.length,
                        er = (0, r.useCallback)((e, t) => X.isOnLeaderboards() ? P.leaderboardsPageLink(e, t || void 0) : P.tagOrCategoryPageLink(l.slug, l.isCategory, e, t || void 0), [P, l.slug, l.isCategory, X]),
                        ei = !T && ea <= 12 && l.id && !q.includes(l.id);
                    return M && !l.isArchived ? (0, o.jsx)(c.A, {}) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(D, {
                            alternatives: A,
                            tag: l,
                            games: N,
                            loading: T,
                            featuredGame: a,
                            page: u
                        }), (0, o.jsx)(y.x, {
                            newClickOrigin: Z ? "leaderboardsPage" : `tagPage_${l.slug.en_US}`,
                            children: (0, o.jsxs)("div", {
                                className: G().pageWrapper,
                                children: [(0, o.jsxs)("div", {
                                    className: (0, s.A)(G().root, {
                                        [G().isDesktop]: R
                                    }),
                                    children: [(0, o.jsx)(f.A, {
                                        tag: l,
                                        title: et,
                                        description: l.shortDescription ? l.shortDescription : void 0
                                    }), (0, o.jsx)(E, {
                                        tag: l,
                                        isLeaderboardsTag: Z,
                                        isFirstPage: eo,
                                        modelGames: N,
                                        loading: T,
                                        urlGenerator: er,
                                        newClickOrigin: `grid_${B.po}_${X.getSorting()}`,
                                        isDeviceDesktopWeb: U
                                    }), (0, o.jsx)("div", {
                                        children: ei && (0, o.jsx)(H, {
                                            fillerGames: j,
                                            isDeviceDesktopWeb: U
                                        })
                                    }), eo && (en || l.description || l.showFaq || l.shortDescription) && (0, o.jsx)(S.A, {
                                        children: (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)(W, {
                                                tag: l
                                            }), (0, o.jsx)($, {
                                                tag: l,
                                                topGames: h,
                                                topMobileGames: x,
                                                linkBoostedGames: b
                                            }), en]
                                        })
                                    })]
                                }), V && (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)("div", {
                                        className: G().backgroundImageOverlay
                                    }), (0, o.jsx)("img", {
                                        className: G().backgroundImage,
                                        src: (0, g.Ay)(V),
                                        alt: ""
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        78703: e => {
            e.exports = {
                czyButton: "SeoBlock_czyButton__6M777",
                "czyButton--contained--purple": "SeoBlock_czyButton--contained--purple__3a2LA",
                "czyButton--contained--white": "SeoBlock_czyButton--contained--white__C72dF",
                "czyButton--contained--grey": "SeoBlock_czyButton--contained--grey__TSFTy",
                "czyButton--contained--warning": "SeoBlock_czyButton--contained--warning__z1X4Z",
                "czyButton--contained--alert": "SeoBlock_czyButton--contained--alert__QOh4F",
                "czyButton--contained--success": "SeoBlock_czyButton--contained--success__Z4id5",
                "czyButton--contained--black": "SeoBlock_czyButton--contained--black__dTMI_",
                "czyButton--contained--green-gradient": "SeoBlock_czyButton--contained--green-gradient__KWAGS",
                "czyButton--contained--animated-green-gradient": "SeoBlock_czyButton--contained--animated-green-gradient__0lscg",
                "scroll-gradient": "SeoBlock_scroll-gradient__m7gOK",
                "czyButton--outlined--purple": "SeoBlock_czyButton--outlined--purple__N67cz",
                "czyButton--link--purple": "SeoBlock_czyButton--link--purple__uElOk",
                "czyButton--outlined--white": "SeoBlock_czyButton--outlined--white___9LNO",
                "czyButton--link--white": "SeoBlock_czyButton--link--white___jPci",
                "czyButton--outlined--grey": "SeoBlock_czyButton--outlined--grey__FyHsJ",
                "czyButton--link--grey": "SeoBlock_czyButton--link--grey__13MhY",
                "czyButton--outlined--warning": "SeoBlock_czyButton--outlined--warning__xwA0M",
                "czyButton--link--warning": "SeoBlock_czyButton--link--warning__IBxHe",
                "czyButton--outlined--alert": "SeoBlock_czyButton--outlined--alert__OwRv2",
                "czyButton--link--alert": "SeoBlock_czyButton--link--alert__lWpqz",
                "czyButton--outlined--success": "SeoBlock_czyButton--outlined--success___BXNp",
                "czyButton--link--success": "SeoBlock_czyButton--link--success__9_xwk",
                "czyButton--outlined": "SeoBlock_czyButton--outlined__2021G",
                "czyButton--disabled": "SeoBlock_czyButton--disabled__RhI1f",
                "czyButton--height50": "SeoBlock_czyButton--height50__pN4CH",
                "czyButton--height34": "SeoBlock_czyButton--height34__abZEY",
                "czyButton--height28": "SeoBlock_czyButton--height28__mhF6y",
                "czyButton--fullWidth": "SeoBlock_czyButton--fullWidth__bewAj",
                "czyButton--headerIcon": "SeoBlock_czyButton--headerIcon__dTSUi",
                "czyButton--headerIcon--desktop": "SeoBlock_czyButton--headerIcon--desktop__vfoZL",
                "czyButton--headerIcon--mobile": "SeoBlock_czyButton--headerIcon--mobile__MoGKa",
                "czyButton--headerIcon--withLabel": "SeoBlock_czyButton--headerIcon--withLabel__OfchY",
                container: "SeoBlock_container__MQQnX",
                collapsed: "SeoBlock_collapsed__kntrK",
                content: "SeoBlock_content__E60vH",
                showMoreContainer: "SeoBlock_showMoreContainer__0ZiLe",
                showLessContainer: "SeoBlock_showLessContainer__8bYKc",
                label: "SeoBlock_label__AAgs1"
            }
        },
        85116: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var o = n(6029),
                a = n(55729),
                r = n(50212),
                i = n(47429),
                l = n(32627),
                s = n(6847),
                c = n(96940),
                d = n.n(c);
            let u = a.memo(e => {
                let {
                    games: t,
                    enableInstantJoin: n,
                    isFirstPage: a,
                    removeThumbLabels: c
                } = e;
                return a ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l.A, {
                        games: t.slice(0, 6),
                        expectedSize: 4,
                        enableInstantJoin: n,
                        customOrigin: "tagPageInstantLarge",
                        autoplayOnlyCentered: !0,
                        className: (0, r.A)(d().experimentInstantGrid, d().addMarginBottom),
                        removeThumbLabels: c
                    }), t.length > 6 && (0, o.jsx)(s.A, {
                        games: t.slice(6),
                        expectedSize: 24,
                        enableInstantJoin: n,
                        customOrigin: "tagPageInstantSmall",
                        className: d().experimentInstantGrid,
                        removeThumbLabels: c
                    })]
                }) : (0, o.jsx)(s.A, {
                    games: t,
                    expectedSize: i.w9,
                    enableInstantJoin: n,
                    customOrigin: "tagPageInstantSmall",
                    removeThumbLabels: c
                })
            })
        },
        85829: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var o = n(6029),
                a = n(75155),
                r = n(55729),
                i = n(79942),
                l = n(50212),
                s = n(78703),
                c = n.n(s);
            let d = e => {
                let t, n, s, d, u, _, g = (0, a.c)(16),
                    {
                        children: y
                    } = e,
                    [m, h] = (0, r.useState)(!0),
                    B = !m;
                g[0] !== B ? (t = (0, l.A)(c().container, {
                    [c().collapsed]: B
                }), g[0] = B, g[1] = t) : t = g[1];
                let p = !m;
                return g[2] !== p ? (n = (0, l.A)(c().content, {
                    [c().collapsed]: p
                }), g[2] = p, g[3] = n) : n = g[3], g[4] !== y || g[5] !== n ? (s = (0, o.jsx)("div", {
                    className: n,
                    children: y
                }), g[4] = y, g[5] = n, g[6] = s) : s = g[6], g[7] !== m ? (d = !m && (0, o.jsx)("div", {
                    className: c().showMoreContainer,
                    children: (0, o.jsx)("span", {
                        className: c().label,
                        onClick: () => h(!0),
                        children: (0, o.jsx)(i.x6, {
                            id: "common.showMore"
                        })
                    })
                }), g[7] = m, g[8] = d) : d = g[8], g[9] !== m ? (u = m && (0, o.jsx)("div", {
                    className: c().showLessContainer,
                    children: (0, o.jsx)("span", {
                        className: c().label,
                        onClick: () => h(!1),
                        children: (0, o.jsx)(i.x6, {
                            id: "common.showLess"
                        })
                    })
                }), g[9] = m, g[10] = u) : u = g[10], g[11] !== t || g[12] !== s || g[13] !== d || g[14] !== u ? (_ = (0, o.jsxs)("div", {
                    className: t,
                    children: [s, d, u]
                }), g[11] = t, g[12] = s, g[13] = d, g[14] = u, g[15] = _) : _ = g[15], _
            }
        },
        91328: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var o = n(6029),
                a = n(75155);
            n(55729);
            var r = n(79942),
                i = n(47352);
            let l = e => {
                let t, n, i, l, s, d, u, _, g = (0, a.c)(22),
                    {
                        tag: y,
                        topGames: m,
                        mobileGames: h,
                        linkBoostedGames: B
                    } = e,
                    p = c;
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)("h2", {
                    children: (0, o.jsx)(r.x6, {
                        id: "tag.faq.faq"
                    })
                }), g[0] = t) : t = g[0], g[1] !== y.title ? (n = (0, o.jsx)("h3", {
                    children: (0, o.jsx)(r.x6, {
                        id: "tag.faq.popular",
                        values: {
                            title: y.title
                        }
                    })
                }), g[1] = y.title, g[2] = n) : n = g[2], g[3] !== m ? (i = p(m), g[3] = m, g[4] = i) : i = g[4], g[5] !== y.title ? (l = (0, o.jsx)("h3", {
                    children: (0, o.jsx)(r.x6, {
                        id: "tag.faq.mobile",
                        values: {
                            title: y.title
                        }
                    })
                }), g[5] = y.title, g[6] = l) : l = g[6], g[7] !== h ? (s = p(h), g[7] = h, g[8] = s) : s = g[8], g[9] !== B || g[10] !== y.title ? (d = B.length > 0 && (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h3", {
                        children: (0, o.jsx)(r.x6, {
                            id: "tag.faq.whatAreSomeUnderrated",
                            values: {
                                title: y.title
                            }
                        })
                    }), p(B)]
                }), g[9] = B, g[10] = y.title, g[11] = d) : d = g[11], g[12] !== y.intro || g[13] !== y.title ? (u = y.intro && (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h3", {
                        children: (0, o.jsx)(r.x6, {
                            id: "tag.faq.whatAre",
                            values: {
                                title: y.title
                            }
                        })
                    }), (0, o.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: y.intro
                        }
                    })]
                }), g[12] = y.intro, g[13] = y.title, g[14] = u) : u = g[14], g[15] !== n || g[16] !== i || g[17] !== l || g[18] !== s || g[19] !== d || g[20] !== u ? (_ = (0, o.jsxs)(o.Fragment, {
                    children: [t, n, i, l, s, d, u]
                }), g[15] = n, g[16] = i, g[17] = l, g[18] = s, g[19] = d, g[20] = u, g[21] = _) : _ = g[21], _
            };

            function s(e) {
                return (0, o.jsx)("li", {
                    children: (0, o.jsx)(i.A, {
                        slug: e.slug,
                        children: (0, o.jsx)(o.Fragment, {
                            children: e.name
                        })
                    })
                }, e.slug)
            }

            function c(e) {
                return (0, o.jsx)("ol", {
                    children: e.map(s)
                })
            }
        },
        91831: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var o = n(6029),
                a = n(75155),
                r = n(55729),
                i = n(95669),
                l = n.n(i),
                s = n(61411),
                c = n(81930),
                d = n(74198);
            let u = e => {
                let t, n, i, u, _, g, y, m, h, B, p, x, z, w, b, j, k, f, C = (0, a.c)(49),
                    {
                        canonical: S,
                        title: v,
                        description: A,
                        imageUrl: L,
                        imageWidth: I,
                        imageHeight: N,
                        imageQuality: T,
                        type: M
                    } = e,
                    F = void 0 === L ? "crazygames/share.png" : L,
                    D = void 0 === I ? 1200 : I,
                    P = void 0 === N ? 630 : N,
                    {
                        locale: G
                    } = r.useContext(d.A);
                C[0] !== P || C[1] !== T || C[2] !== F || C[3] !== D ? (t = (0, c.Ay)(F, {
                    width: D,
                    height: P,
                    fit: "crop",
                    quality: T
                }), C[0] = P, C[1] = T, C[2] = F, C[3] = D, C[4] = t) : t = C[4];
                let O = t;
                return C[5] !== S ? (n = (0, o.jsx)("meta", {
                    property: "og:url",
                    content: S
                }), C[5] = S, C[6] = n) : n = C[6], C[7] !== v ? (i = (0, o.jsx)("meta", {
                    property: "og:title",
                    content: v
                }), C[7] = v, C[8] = i) : i = C[8], C[9] !== A ? (u = (0, o.jsx)("meta", {
                    property: "og:description",
                    content: A
                }), C[9] = A, C[10] = u) : u = C[10], C[11] !== G ? (_ = (0, s.qz)(G), C[11] = G, C[12] = _) : _ = C[12], C[13] !== _ ? (g = (0, o.jsx)("meta", {
                    property: "og:locale",
                    content: _
                }), C[13] = _, C[14] = g) : g = C[14], C[15] !== O ? (y = (0, o.jsx)("meta", {
                    property: "og:image",
                    content: O
                }), C[15] = O, C[16] = y) : y = C[16], C[17] !== D ? (m = D.toString(), C[17] = D, C[18] = m) : m = C[18], C[19] !== m ? (h = (0, o.jsx)("meta", {
                    property: "og:image:width",
                    content: m
                }), C[19] = m, C[20] = h) : h = C[20], C[21] !== P ? (B = P.toString(), C[21] = P, C[22] = B) : B = C[22], C[23] !== B ? (p = (0, o.jsx)("meta", {
                    property: "og:image:height",
                    content: B
                }), C[23] = B, C[24] = p) : p = C[24], C[25] !== M ? (x = M && (0, o.jsx)("meta", {
                    property: "og:type",
                    content: M
                }), C[25] = M, C[26] = x) : x = C[26], C[27] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, o.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), C[27] = z) : z = C[27], C[28] !== S ? (w = (0, o.jsx)("meta", {
                    property: "twitter:url",
                    content: S
                }), C[28] = S, C[29] = w) : w = C[29], C[30] !== v ? (b = (0, o.jsx)("meta", {
                    property: "twitter:title",
                    content: v
                }), C[30] = v, C[31] = b) : b = C[31], C[32] !== A ? (j = (0, o.jsx)("meta", {
                    property: "twitter:description",
                    content: A
                }), C[32] = A, C[33] = j) : j = C[33], C[34] !== O ? (k = (0, o.jsx)("meta", {
                    property: "twitter:image",
                    content: O
                }), C[34] = O, C[35] = k) : k = C[35], C[36] !== y || C[37] !== h || C[38] !== p || C[39] !== x || C[40] !== w || C[41] !== b || C[42] !== j || C[43] !== k || C[44] !== n || C[45] !== i || C[46] !== u || C[47] !== g ? (f = (0, o.jsxs)(l(), {
                    children: [n, i, u, g, y, h, p, x, z, w, b, j, k]
                }), C[36] = y, C[37] = h, C[38] = p, C[39] = x, C[40] = w, C[41] = b, C[42] = j, C[43] = k, C[44] = n, C[45] = i, C[46] = u, C[47] = g, C[48] = f) : f = C[48], f
            }
        },
        95816: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => a,
                e: () => r
            });
            var o = n(77650);

            function a(e) {
                if (e) return {
                    name: e.name,
                    cover: e.cover
                }
            }

            function r(e, t) {
                return e.metaDescription ? e.metaDescription : o.Ru._("tag.head.metaDescription", {
                    game: t ? .name ? ? "",
                    title: e.title
                })
            }
        },
        98084: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var o = n(6029),
                a = n(55729),
                r = n(79942),
                i = n(93389),
                l = n(71543);
            let s = a.memo(e => {
                let {
                    tag: t,
                    description: n,
                    games: s
                } = e, {
                    i18n: c
                } = (0, r.uB)(), {
                    routeHelper: d
                } = a.useContext(i.A), {
                    structuredData: u
                } = t;
                if (!u) return null;
                let _ = s ? {
                        mainEntity: (0, l.Vb)(s, d)
                    } : {},
                    g = [{ ...u,
                        description: n,
                        ..._,
                        isPartOf: (0, l.Xr)(c, d)
                    }];
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: `<script type="application/ld+json">${JSON.stringify(g)}</script>`
                        }
                    })
                })
            })
        },
        99703: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => r
            });
            var o = n(55729),
                a = n(25312);
            let r = e => {
                let [t, n] = o.useState(null), r = o.useRef(e);
                e && (r.current = e);
                let i = e || r.current;
                return o.useEffect(() => {
                    let e = null,
                        t = !1,
                        o = () => {
                            t || n(new Date)
                        };
                    o();
                    let a = () => {
                        let t = new Date(i).getTime();
                        if (!Number.isFinite(t)) return;
                        let n = t - Date.now();
                        !(n <= 0) && (e = window.setTimeout(() => {
                            o(), a()
                        }, n > 864e5 ? n % 36e5 || 36e5 : n > 36e5 ? n % 6e4 || 6e4 : n % 1e3 || 1e3))
                    };
                    return a(), () => {
                        t = !0, null !== e && window.clearTimeout(e)
                    }
                }, [i]), null === t ? null : (0, a.qz)(i, t)
            }
        }
    }
]);