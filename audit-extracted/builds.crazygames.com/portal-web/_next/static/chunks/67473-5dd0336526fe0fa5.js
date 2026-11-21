! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "82c3f1e4-8a42-4dda-8568-e19cf15c750f", e._sentryDebugIdIdentifier = "sentry-dbid-82c3f1e4-8a42-4dda-8568-e19cf15c750f")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [67473], {
        952: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n(6029),
                a = n(75155);
            n(55729);
            var i = n(55654),
                o = n(95669),
                l = n.n(o),
                c = n(13246),
                s = n(61411);
            let u = e => {
                let t, n, i, o, s, u, _, h, y = (0, a.c)(21),
                    {
                        title: m,
                        metaDescription: p,
                        canonical: f,
                        alternatives: b,
                        children: w
                    } = e;
                y[0] !== b ? (t = void 0 === b ? [] : b, y[0] = b, y[1] = t) : t = y[1];
                let P = t;
                y[2] !== P ? (n = P.find(d), y[2] = P, y[3] = n) : n = y[3];
                let v = n,
                    z = "development" === c.A.Instance.environment,
                    B = `${z?"\uD83E\uDD99 - ":""}${m}`;
                return y[4] !== B ? (i = (0, r.jsx)("title", {
                    children: B
                }), y[4] = B, y[5] = i) : i = y[5], y[6] !== p ? (o = (0, r.jsx)("meta", {
                    name: "description",
                    content: p
                }), y[6] = p, y[7] = o) : o = y[7], y[8] !== f ? (s = f && (0, r.jsx)("link", {
                    rel: "canonical",
                    href: f
                }), y[8] = f, y[9] = s) : s = y[9], y[10] !== P ? (u = P.map(g), y[10] = P, y[11] = u) : u = y[11], y[12] !== v ? (_ = v && (0, r.jsx)("link", {
                    rel: "alternate",
                    href: v.href,
                    hrefLang: "x-default"
                }), y[12] = v, y[13] = _) : _ = y[13], y[14] !== w || y[15] !== i || y[16] !== o || y[17] !== s || y[18] !== u || y[19] !== _ ? (h = (0, r.jsxs)(l(), {
                    children: [i, o, s, u, _, w]
                }), y[14] = w, y[15] = i, y[16] = o, y[17] = s, y[18] = u, y[19] = _, y[20] = h) : h = y[20], h
            };

            function d(e) {
                let {
                    locale: t
                } = e;
                return t === s.Xn
            }

            function g(e) {
                let {
                    href: t,
                    locale: n
                } = e, a = (0, i.lR)((0, s.qz)(n));
                return (0, r.jsx)("link", {
                    rel: "alternate",
                    hrefLang: a,
                    href: t
                }, a)
            }
        },
        8420: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => h
            });
            var r = n(6029),
                a = n(75155),
                i = n(55729),
                o = n(50212),
                l = n(10204),
                c = n.n(l);
            let s = new Set;

            function u(e, t, n) {
                !t || s.has(e) || (s.add(e), t(e, n))
            }

            function d(e, t, n) {
                return (0, o.A)(c().link, c()[`link--${e}`], c()[`link--${t}`], n)
            }

            function g(e) {
                let t, n, o, l, c, s, g, _, h, y, m, p, f, b, w, P, v, z, B, k = (0, a.c)(43);
                k[0] !== e ? ({
                    href: o,
                    tone: y,
                    size: m,
                    onNavigate: s,
                    onPrefetch: g,
                    prefetch: p,
                    className: n,
                    onClick: l,
                    onMouseEnter: c,
                    onTouchStart: _,
                    children: t,
                    ...h
                } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = o, k[4] = l, k[5] = c, k[6] = s, k[7] = g, k[8] = _, k[9] = h, k[10] = y, k[11] = m, k[12] = p) : (t = k[1], n = k[2], o = k[3], l = k[4], c = k[5], s = k[6], g = k[7], _ = k[8], h = k[9], y = k[10], m = k[11], p = k[12]);
                let x = void 0 === y ? "neutral" : y,
                    T = void 0 === m ? "m" : m,
                    C = void 0 !== p && p;
                k[13] !== o || k[14] !== g || k[15] !== C ? (f = () => {
                    C && u(o, g, {
                        priority: !1
                    })
                }, b = [o, C, g], k[13] = o, k[14] = g, k[15] = C, k[16] = f, k[17] = b) : (f = k[16], b = k[17]), (0, i.useEffect)(f, b), k[18] !== o || k[19] !== l || k[20] !== s ? (w = e => {
                    let t;
                    l ? .(e), !s || e.defaultPrevented || (t = e.currentTarget.getAttribute("target")) && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || 1 === e.button || (e.preventDefault(), s(o))
                }, k[18] = o, k[19] = l, k[20] = s, k[21] = w) : w = k[21];
                let j = w;
                k[22] !== o || k[23] !== c || k[24] !== g ? (P = e => {
                    c ? .(e), u(o, g, {
                        priority: !0
                    })
                }, k[22] = o, k[23] = c, k[24] = g, k[25] = P) : P = k[25];
                let A = P;
                k[26] !== o || k[27] !== g || k[28] !== _ || k[29] !== C ? (v = e => {
                    _ ? .(e), C && u(o, g, {
                        priority: !0
                    })
                }, k[26] = o, k[27] = g, k[28] = _, k[29] = C, k[30] = v) : v = k[30];
                let I = v;
                return k[31] !== n || k[32] !== T || k[33] !== x ? (z = d(x, T, n), k[31] = n, k[32] = T, k[33] = x, k[34] = z) : z = k[34], k[35] !== t || k[36] !== j || k[37] !== A || k[38] !== I || k[39] !== o || k[40] !== h || k[41] !== z ? (B = (0, r.jsx)("a", { ...h,
                    href: o,
                    className: z,
                    onClick: j,
                    onMouseEnter: A,
                    onTouchStart: I,
                    children: t
                }), k[35] = t, k[36] = j, k[37] = A, k[38] = I, k[39] = o, k[40] = h, k[41] = z, k[42] = B) : B = k[42], B
            }

            function _(e) {
                let t, n, i, l, s, u, g, _, h = (0, a.c)(16);
                h[0] !== e ? ({
                    tone: l,
                    size: s,
                    type: u,
                    className: n,
                    children: t,
                    ...i
                } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = i, h[4] = l, h[5] = s, h[6] = u) : (t = h[1], n = h[2], i = h[3], l = h[4], s = h[5], u = h[6]);
                let y = void 0 === l ? "neutral" : l,
                    m = void 0 === s ? "m" : s,
                    p = void 0 === u ? "button" : u;
                return h[7] !== n || h[8] !== m || h[9] !== y ? (g = d(y, m, (0, o.A)(c()["link--button"], n)), h[7] = n, h[8] = m, h[9] = y, h[10] = g) : g = h[10], h[11] !== t || h[12] !== i || h[13] !== g || h[14] !== p ? (_ = (0, r.jsx)("button", { ...i,
                    type: p,
                    className: g,
                    children: t
                }), h[11] = t, h[12] = i, h[13] = g, h[14] = p, h[15] = _) : _ = h[15], _
            }

            function h(e) {
                let t, n = (0, a.c)(4);
                if (void 0 === e.href) {
                    let t;
                    return n[0] !== e ? (t = (0, r.jsx)(_, { ...e
                    }), n[0] = e, n[1] = t) : t = n[1], t
                }
                return n[2] !== e ? (t = (0, r.jsx)(g, { ...e
                }), n[2] = e, n[3] = t) : t = n[3], t
            }
        },
        10204: e => {
            e.exports = {
                link: "Link_link__KqNZP",
                "link--button": "Link_link--button__aXtjL",
                "link--s": "Link_link--s__2RNCq",
                "link--m": "Link_link--m__PYNMO",
                "link--l": "Link_link--l__erZKM",
                "link--neutral": "Link_link--neutral__xiSU_",
                "link--green": "Link_link--green__Xiofl"
            }
        },
        20060: e => {
            e.exports = {
                czyButton: "PageTitle_czyButton__ghDJ8",
                "czyButton--contained--purple": "PageTitle_czyButton--contained--purple__H3m3C",
                "czyButton--contained--white": "PageTitle_czyButton--contained--white___fgYd",
                "czyButton--contained--grey": "PageTitle_czyButton--contained--grey___dGUT",
                "czyButton--contained--warning": "PageTitle_czyButton--contained--warning__jjivJ",
                "czyButton--contained--alert": "PageTitle_czyButton--contained--alert__82Ynz",
                "czyButton--contained--success": "PageTitle_czyButton--contained--success__MH2Id",
                "czyButton--contained--black": "PageTitle_czyButton--contained--black__p9KTb",
                "czyButton--contained--green-gradient": "PageTitle_czyButton--contained--green-gradient__bMzpy",
                "czyButton--contained--animated-green-gradient": "PageTitle_czyButton--contained--animated-green-gradient__5CvF4",
                "scroll-gradient": "PageTitle_scroll-gradient__BKXvI",
                "czyButton--outlined--purple": "PageTitle_czyButton--outlined--purple__rDDlX",
                "czyButton--link--purple": "PageTitle_czyButton--link--purple__qYbHm",
                "czyButton--outlined--white": "PageTitle_czyButton--outlined--white__DVRy9",
                "czyButton--link--white": "PageTitle_czyButton--link--white__RRKDj",
                "czyButton--outlined--grey": "PageTitle_czyButton--outlined--grey__i1Oux",
                "czyButton--link--grey": "PageTitle_czyButton--link--grey__dbAtr",
                "czyButton--outlined--warning": "PageTitle_czyButton--outlined--warning__hd3sC",
                "czyButton--link--warning": "PageTitle_czyButton--link--warning__uXMiI",
                "czyButton--outlined--alert": "PageTitle_czyButton--outlined--alert__pbbaU",
                "czyButton--link--alert": "PageTitle_czyButton--link--alert__zWZ8N",
                "czyButton--outlined--success": "PageTitle_czyButton--outlined--success__Dw1Y6",
                "czyButton--link--success": "PageTitle_czyButton--link--success__SpJ1E",
                "czyButton--outlined": "PageTitle_czyButton--outlined__SxqX5",
                "czyButton--disabled": "PageTitle_czyButton--disabled__6CJ7H",
                "czyButton--height50": "PageTitle_czyButton--height50__gA_Pv",
                "czyButton--height34": "PageTitle_czyButton--height34__VYS5X",
                "czyButton--height28": "PageTitle_czyButton--height28__2Rw9e",
                "czyButton--fullWidth": "PageTitle_czyButton--fullWidth__HuQIt",
                "czyButton--headerIcon": "PageTitle_czyButton--headerIcon__Ew7yM",
                "czyButton--headerIcon--desktop": "PageTitle_czyButton--headerIcon--desktop__2eZnC",
                "czyButton--headerIcon--mobile": "PageTitle_czyButton--headerIcon--mobile__9CgYb",
                "czyButton--headerIcon--withLabel": "PageTitle_czyButton--headerIcon--withLabel__E93pN",
                pageTitle: "PageTitle_pageTitle__aFCPB",
                withRightSlogan: "PageTitle_withRightSlogan__tLJcI",
                titleContainer: "PageTitle_titleContainer__CI4hu",
                breadcrumbs: "PageTitle_breadcrumbs__R1Uym",
                content: "PageTitle_content__Td3Xg",
                title: "PageTitle_title__u2Vh8",
                metaContainer: "PageTitle_metaContainer__oW1L8",
                description: "PageTitle_description__YI0bb",
                sortingDropdown: "PageTitle_sortingDropdown__F_V3_"
            }
        },
        23033: (e, t, n) => {
            "use strict";
            n.d(t, {
                $Y: () => k,
                AJ: () => m,
                CZ: () => B,
                EJ: () => P,
                H_: () => p,
                Qe: () => v,
                Qh: () => _,
                Qq: () => g,
                SF: () => f,
                T5: () => y,
                a1: () => x,
                dq: () => d,
                hA: () => z,
                uA: () => b,
                wN: () => w,
                xV: () => T
            });
            var r = n(14278),
                a = n(4801),
                i = n(72224),
                o = n(13246),
                l = n(61411),
                c = n(57212),
                s = n(87295),
                u = n(79430);

            function d() {
                return o.A.Instance.data.domains.map(e => {
                    let t = "en-US" === (0, l.cy)(e.host),
                        n = { ...i.a
                        },
                        r = new a.A(n).generateHome();
                    if (!r) return null;
                    let o = (0, u.A)(e.host, r.href, {
                        isMainDomain: t,
                        locale: e.locale
                    }).toString();
                    return {
                        locale: e.locale,
                        href: o.toString(),
                        host: e.host
                    }
                }).filter(e => !!e)
            }

            function g(e) {
                return C(e => e.generateCompetitions(), {}, e, "competitions")
            }

            function _(e) {
                return C(e => e.generateScholarship(), {}, e, "scholarship")
            }

            function h(e) {
                return j(t => t.generatePaginatedUpdatedGames({
                    page: e
                }), {})
            }

            function y(e) {
                return C(e => e.generateRecent(), {}, e, "recent")
            }

            function m() {
                return j(e => e.generateOriginals(), {})
            }

            function p(e) {
                return C(e => e.generateTags(), {}, e, "tags")
            }

            function f(e, t) {
                return j((e, t) => e.generateLeaderboards(t), {
                    page: e,
                    sorting: t
                })
            }

            function b(e, t) {
                return C((e, t) => e.generateGame(t), {
                    slug: e
                }, t, "game")
            }

            function w(e) {
                return C(e => e.generatePrivacyPolicy(), {}, e, "privacyPolicy")
            }

            function P(e) {
                return C(e => e.generateTermsAndConditions(), {}, e, "termsAndConditions")
            }

            function v(e) {
                return C(e => e.generateSearch(), {}, e, "search")
            }

            function z(e) {
                return j(t => t.generateProfilePage(e), {})
            }
            async function B(e, t, n, r) {
                if (t && "hot" === t) return j(e => e.generatePaginatedHotGames({
                    page: 1
                }), {});
                switch (e) {
                    case s.QI:
                        return C(e => e.generatePaginatedNewGames({
                            page: r
                        }), {}, await n.getRouteProviderData("newGames"), "newGames");
                    case s.F3:
                        return h(r);
                    default:
                        return console.warn(`unexpected sorting in games ${e}`), h(r)
                }
            }
            async function k(e, t, n) {
                if (e.isCategory) {
                    let r = await t.getRouteProviderData("category");
                    return C((e, t) => e.generateCategory(t), {
                        slugTrl: e.slug,
                        page: n
                    }, r, "category")
                } {
                    let r = await t.getRouteProviderData("tag");
                    return C((e, t) => e.generateTag(t), {
                        slugTrl: e.slug,
                        page: n
                    }, r, "tag")
                }
            }

            function x(e, t, n) {
                return j((t, n) => t.generateMultiplayerWithTag(n, e.slug), {
                    page: t,
                    sorting: n
                })
            }

            function T(e) {
                return j(t => t.generateAllGames(e), {})
            }

            function C(e, t, n, r) {
                var c;
                let s;
                return (c = n, s = o.A.Instance.data.domains, c.map(e => ({
                    domain: s.find(t => (0, l.qz)(t.locale) === e.locale),
                    routeData: e
                }))).map(n => {
                    let o = n.domain,
                        c = "en-US" === (0, l.cy)(o.host),
                        s = o.locale,
                        d = { ...i.a,
                            [r]: n.routeData.route,
                            locale: n.routeData.locale
                        },
                        g = e(new a.A(d), t);
                    if (!g || !n.domain) return null;
                    let _ = (0, u.A)(n.domain.host, g.href, {
                        isMainDomain: c,
                        locale: s
                    }).toString();
                    return {
                        locale: n.domain.locale,
                        href: _.toString(),
                        host: n.domain.host
                    }
                }).filter(e => !!e)
            }

            function j(e, t) {
                let n = o.A.Instance.data.domains;
                return r.Y.map(r => {
                    let o = n.find(e => e.locale === r);
                    if (!o) return null;
                    let s = "en-US" === (0, l.cy)(o.host),
                        d = { ...i.a,
                            locale: c.Ec[r].serverLocale
                        },
                        g = e(new a.A(d), t);
                    if (!g) return null;
                    let _ = (0, u.A)(o.host, g.href, {
                        isMainDomain: s,
                        locale: r
                    }).toString();
                    return {
                        locale: o.locale,
                        href: _.toString(),
                        host: o.host
                    }
                }).filter(e => !!e)
            }
        },
        27932: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => s
            });
            var r = n(75155),
                a = n(55729),
                i = n(81278),
                o = n(61827),
                l = n(90930),
                c = n(40369);
            let s = () => {
                let e, t, n, s, d = (0, r.c)(10),
                    {
                        crazyRouterChange: g
                    } = a.useContext(o.Gl),
                    _ = a.useContext(l.o);
                d[0] !== _ ? (e = (0, c.Ay)(_), d[0] = _, d[1] = e) : e = d[1];
                let h = e,
                    y = (0, i.useRouter)();
                d[2] !== h || d[3] !== g ? (t = e => g(e, void 0, void 0, void 0, h), d[2] = h, d[3] = g, d[4] = t) : t = d[4];
                let m = t;
                d[5] !== y ? (n = (e, t) => {
                    let {
                        priority: n
                    } = t;
                    y ? .prefetch(e, void 0, {
                        priority: n
                    }).catch(u)
                }, d[5] = y, d[6] = n) : n = d[6];
                let p = n;
                return d[7] !== m || d[8] !== p ? (s = {
                    handleNavigate: m,
                    handlePrefetch: p
                }, d[7] = m, d[8] = p, d[9] = s) : s = d[9], s
            };

            function u() {}
        },
        49523: e => {
            e.exports = {
                shortDescriptionContainer: "Description_shortDescriptionContainer__5DHOy",
                shortDescription: "Description_shortDescription__DEeEd",
                expanded: "Description_expanded__lGLYL",
                needsShowMoreInSubtitle: "Description_needsShowMoreInSubtitle__YZ7__",
                showMoreLessContainer: "Description_showMoreLessContainer__KBhYX"
            }
        },
        63838: e => {
            e.exports = {
                dropdown: "SortingDropdown_dropdown__XUe5Z"
            }
        },
        72224: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => a,
                c: () => r
            });
            let r = ["newGames", "tags", "category", "tag", "game", "termsAndConditions", "informationForParents", "privacyPolicy", "recent", "search", "scholarship", "competitions"],
                a = {
                    newGames: {
                        old: "",
                        new: ""
                    },
                    tags: {
                        old: "",
                        new: ""
                    },
                    category: {
                        old: "",
                        new: ""
                    },
                    tag: {
                        old: "",
                        new: ""
                    },
                    game: {
                        old: "",
                        new: ""
                    },
                    termsAndConditions: {
                        old: "",
                        new: ""
                    },
                    privacyPolicy: {
                        old: "",
                        new: ""
                    },
                    recent: {
                        old: "",
                        new: ""
                    },
                    search: {
                        old: "",
                        new: ""
                    },
                    locale: {
                        old: "",
                        new: ""
                    }
                }
        },
        76318: e => {
            e.exports = {
                breadcrumbsList: "Breadcrumbs_breadcrumbsList__dpjjn",
                breadcrumbsItem: "Breadcrumbs_breadcrumbsItem__EDZD9",
                isCurrent: "Breadcrumbs_isCurrent__VuWK6",
                separator: "Breadcrumbs_separator__Ii92U"
            }
        },
        77515: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => z
            });
            var r = n(6029),
                a = n(75155),
                i = n(55729),
                o = n(50212),
                l = n(79942),
                c = n(87295),
                s = n(93389),
                u = n(61827),
                d = n(51196),
                g = n(67088),
                _ = n(63838),
                h = n.n(_);
            let y = e => {
                let t, n, o, _, y, m, p, f, b, w, P, v, z, B = (0, a.c)(33),
                    {
                        tag: k
                    } = e,
                    {
                        pageUrlHelper: x
                    } = i.useContext(d.e),
                    {
                        routeHelper: T
                    } = i.useContext(s.A),
                    {
                        crazyRouterChange: C
                    } = i.useContext(u.Gl);
                B[0] !== T || B[1] !== k.isCategory || B[2] !== k.slug ? (t = T.tagOrCategoryPageLink(k.slug, k.isCategory, 1, c.nn), B[0] = T, B[1] = k.isCategory, B[2] = k.slug, B[3] = t) : t = B[3];
                let j = t;
                B[4] !== T || B[5] !== k.isCategory || B[6] !== k.slug ? (n = T.tagOrCategoryPageLink(k.slug, k.isCategory, 1, c.QI), B[4] = T, B[5] = k.isCategory, B[6] = k.slug, B[7] = n) : n = B[7];
                let A = n;
                B[8] !== x ? (o = x.isNewGamesSorting(), B[8] = x, B[9] = o) : o = B[9];
                let I = o;
                B[10] !== I ? (_ = () => I ? c.QI : c.nn, B[10] = I, B[11] = _) : _ = B[11];
                let N = _;
                B[12] !== C || B[13] !== j || B[14] !== A ? (y = (e, t) => {
                    t === c.nn && j && C(j.href), t === c.QI && A && C(A.href)
                }, B[12] = C, B[13] = j, B[14] = A, B[15] = y) : y = B[15];
                let D = y;
                B[16] !== N ? (m = N(), B[16] = N, B[17] = m) : m = B[17], B[18] !== N ? (p = N(), B[18] = N, B[19] = p) : p = B[19];
                let S = p === c.nn;
                B[20] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsx)(l.x6, {
                    id: "common.links.top"
                }), B[20] = f) : f = B[20], B[21] !== S ? (b = (0, r.jsx)(g.c, {
                    value: c.nn,
                    disabled: S,
                    children: f
                }), B[21] = S, B[22] = b) : b = B[22], B[23] !== N ? (w = N(), B[23] = N, B[24] = w) : w = B[24];
                let L = w === c.QI;
                return B[25] === Symbol.for("react.memo_cache_sentinel") ? (P = (0, r.jsx)(l.x6, {
                    id: "common.links.new"
                }), B[25] = P) : P = B[25], B[26] !== L ? (v = (0, r.jsx)(g.c, {
                    value: c.QI,
                    disabled: L,
                    children: P
                }), B[26] = L, B[27] = v) : v = B[27], B[28] !== D || B[29] !== b || B[30] !== v || B[31] !== m ? (z = (0, r.jsxs)(g.A, {
                    value: m,
                    onChange: D,
                    selectClassName: h().dropdown,
                    height: 40,
                    dataTestId: "sorting-dropdown",
                    children: [b, v]
                }), B[28] = D, B[29] = b, B[30] = v, B[31] = m, B[32] = z) : z = B[32], z
            };
            var m = n(8420),
                p = n(49523),
                f = n.n(p);
            let b = e => {
                let t, n, c, s, u, d, g, _, h = (0, a.c)(20),
                    {
                        description: y,
                        className: p
                    } = e,
                    b = i.useRef(null),
                    w = i.useRef(null),
                    [P, v] = i.useState(!1),
                    [z, B] = i.useState(!1);
                h[0] !== y ? (t = () => {
                    let e = b.current,
                        t = w.current;
                    if (!y || !e || !t) return;
                    B(!1);
                    let n = -1,
                        r = () => {
                            let r = e.clientWidth;
                            if (!r || r === n) return;
                            n = r;
                            let {
                                style: a
                            } = t;
                            a.width = "100%", a.setProperty("line-clamp", "1"), a.setProperty("-webkit-line-clamp", "1");
                            let i = t.clientHeight;
                            a.setProperty("line-clamp", "none"), a.setProperty("-webkit-line-clamp", "none");
                            let o = t.clientHeight;
                            a.removeProperty("width"), a.removeProperty("line-clamp"), a.removeProperty("-webkit-line-clamp"), v(o > i)
                        };
                    r();
                    let a = new ResizeObserver(r);
                    a.observe(e);
                    let i = !1;
                    return document.fonts ? .ready.then(() => {
                        i || (n = -1, r())
                    }), () => {
                        i = !0, a.disconnect()
                    }
                }, n = [y], h[0] = y, h[1] = t, h[2] = n) : (t = h[1], n = h[2]), i.useEffect(t, n), h[3] !== p ? (c = (0, o.A)(f().shortDescriptionContainer, p), h[3] = p, h[4] = c) : c = h[4];
                let k = z && f().expanded,
                    x = P && f().needsShowMoreInSubtitle;
                return h[5] !== k || h[6] !== x ? (s = (0, o.A)(f().shortDescription, k, x), h[5] = k, h[6] = x, h[7] = s) : s = h[7], h[8] !== y ? (u = {
                    __html: y
                }, h[8] = y, h[9] = u) : u = h[9], h[10] !== s || h[11] !== u ? (d = (0, r.jsx)("div", {
                    className: s,
                    ref: w,
                    dangerouslySetInnerHTML: u
                }), h[10] = s, h[11] = u, h[12] = d) : d = h[12], h[13] !== P || h[14] !== z ? (g = P && (0, r.jsx)(m.N, {
                    tone: "neutral",
                    className: (0, o.A)(f().showMoreLessContainer, z && f().expanded),
                    "aria-expanded": z,
                    onClick: () => B(!z),
                    children: z ? (0, r.jsx)(l.x6, {
                        id: "common.showLess"
                    }) : (0, r.jsx)(l.x6, {
                        id: "common.showMore"
                    })
                }), h[13] = P, h[14] = z, h[15] = g) : g = h[15], h[16] !== c || h[17] !== d || h[18] !== g ? (_ = (0, r.jsxs)("div", {
                    className: c,
                    ref: b,
                    children: [d, g]
                }), h[16] = c, h[17] = d, h[18] = g, h[19] = _) : _ = h[19], _
            };
            var w = n(96991),
                P = n(20060),
                v = n.n(P);
            let z = e => {
                let t, n, i, l, c, s, u, d, g, _ = (0, a.c)(23),
                    {
                        tag: h,
                        title: m,
                        description: p,
                        titleRightSlogan: f
                    } = e,
                    P = f && v().withRightSlogan;
                return _[0] !== P ? (t = (0, o.A)(v().pageTitle, P), _[0] = P, _[1] = t) : t = _[1], _[2] !== h ? (n = h && (0, r.jsx)(w.A, {
                    hierarchy: h.hierarchy,
                    className: v().breadcrumbs,
                    dataTestId: "breadcrumbs"
                }), _[2] = h, _[3] = n) : n = _[3], _[4] !== m ? (i = (0, r.jsx)("h1", {
                    className: v().title,
                    children: m
                }), _[4] = m, _[5] = i) : i = _[5], _[6] !== i || _[7] !== f ? (l = (0, r.jsxs)("div", {
                    className: v().titleContainer,
                    children: [i, f]
                }), _[6] = i, _[7] = f, _[8] = l) : l = _[8], _[9] !== p ? (c = p && (0, r.jsx)(b, {
                    description: p,
                    className: v().description
                }), _[9] = p, _[10] = c) : c = _[10], _[11] !== h ? (s = h && (0, r.jsx)("div", {
                    className: v().sortingDropdown,
                    children: (0, r.jsx)(y, {
                        tag: h
                    })
                }), _[11] = h, _[12] = s) : s = _[12], _[13] !== c || _[14] !== s ? (u = (0, r.jsxs)("div", {
                    className: v().metaContainer,
                    children: [c, s]
                }), _[13] = c, _[14] = s, _[15] = u) : u = _[15], _[16] !== n || _[17] !== l || _[18] !== u ? (d = (0, r.jsxs)("div", {
                    className: v().content,
                    children: [n, l, u]
                }), _[16] = n, _[17] = l, _[18] = u, _[19] = d) : d = _[19], _[20] !== t || _[21] !== d ? (g = (0, r.jsx)("div", {
                    className: t,
                    children: d
                }), _[20] = t, _[21] = d, _[22] = g) : g = _[22], g
            }
        },
        85036: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => g,
                Ox: () => d,
                YA: () => u
            });
            var r = n(6029),
                a = n(75155),
                i = n(55729),
                o = n(8420),
                l = n(93389),
                c = n(27932),
                s = n(47004);
            let u = e => s.M5.includes(e) || "multiplayer" === e,
                d = (e, t, n) => s.M5.includes(t) ? e.multiplayerPageLink("2-player").href : "multiplayer" === t ? e.multiplayerPageLink("multiplayer").href : e.tagOrCategoryPageDirectLink(t, !!n, {}).href,
                g = e => {
                    let t, n, g, _, h = (0, a.c)(18),
                        {
                            slug: y,
                            isCategory: m,
                            children: p,
                            className: f,
                            tone: b,
                            onClick: w
                        } = e,
                        {
                            routeHelper: P
                        } = i.useContext(l.A),
                        {
                            handleNavigate: v,
                            handlePrefetch: z
                        } = (0, c.i)();
                    h[0] !== w ? (t = e => {
                        (0, s.on)(), w ? .(e)
                    }, h[0] = w, h[1] = t) : t = h[1];
                    let B = t;
                    return h[2] !== m || h[3] !== P || h[4] !== y ? (n = d(P, y, m), h[2] = m, h[3] = P, h[4] = y, h[5] = n) : n = h[5], h[6] !== B || h[7] !== w || h[8] !== y ? (g = u(y) ? B : w, h[6] = B, h[7] = w, h[8] = y, h[9] = g) : g = h[9], h[10] !== p || h[11] !== f || h[12] !== v || h[13] !== z || h[14] !== n || h[15] !== g || h[16] !== b ? (_ = (0, r.jsx)(o.N, {
                        href: n,
                        prefetch: !0,
                        tone: b,
                        className: f,
                        onClick: g,
                        onNavigate: v,
                        onPrefetch: z,
                        children: p
                    }), h[10] = p, h[11] = f, h[12] = v, h[13] = z, h[14] = n, h[15] = g, h[16] = b, h[17] = _) : _ = h[17], _
                }
        },
        96991: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var r = n(6029),
                a = n(75155),
                i = n(55729),
                o = n(32994),
                l = n(8420),
                c = n(50212),
                s = n(76318),
                u = n.n(s);

            function d(e) {
                let t, n, i, s, d, g, _, h, y, m, p, f = (0, a.c)(27);
                f[0] !== e ? ({
                    items: n,
                    onNavigate: i,
                    onPrefetch: s,
                    prefetch: g,
                    className: t,
                    "aria-label": _,
                    ...d
                } = e, f[0] = e, f[1] = t, f[2] = n, f[3] = i, f[4] = s, f[5] = d, f[6] = g, f[7] = _) : (t = f[1], n = f[2], i = f[3], s = f[4], d = f[5], g = f[6], _ = f[7]);
                let b = void 0 !== g && g,
                    w = void 0 === _ ? "Breadcrumb" : _;
                if (f[8] !== t ? (h = (0, c.A)(u().breadcrumbs, t), f[8] = t, f[9] = h) : h = f[9], f[10] !== n || f[11] !== i || f[12] !== s || f[13] !== b) {
                    let e;
                    f[15] !== n.length || f[16] !== i || f[17] !== s || f[18] !== b ? (e = (e, t) => {
                        let {
                            label: a,
                            href: c,
                            onClick: d,
                            prefetch: g
                        } = e, _ = void 0 === g ? b : g, h = t === n.length - 1;
                        return (0, r.jsxs)("li", {
                            className: u().breadcrumbsItem,
                            children: [h || void 0 === c ? (0, r.jsx)("span", {
                                className: u().isCurrent,
                                "aria-current": h ? "page" : void 0,
                                children: a
                            }) : (0, r.jsx)(l.N, {
                                href: c,
                                onClick: d,
                                onNavigate: i,
                                onPrefetch: s,
                                prefetch: _,
                                children: a
                            }), !h && (0, r.jsx)(o.I, {
                                className: u().separator,
                                name: "chevron_right",
                                size: "xsmall"
                            })]
                        }, t)
                    }, f[15] = n.length, f[16] = i, f[17] = s, f[18] = b, f[19] = e) : e = f[19], y = n.map(e), f[10] = n, f[11] = i, f[12] = s, f[13] = b, f[14] = y
                } else y = f[14];
                return f[20] !== y ? (m = (0, r.jsx)("ol", {
                    className: u().breadcrumbsList,
                    children: y
                }), f[20] = y, f[21] = m) : m = f[21], f[22] !== w || f[23] !== d || f[24] !== h || f[25] !== m ? (p = (0, r.jsx)("nav", { ...d,
                    "aria-label": w,
                    className: h,
                    children: m
                }), f[22] = w, f[23] = d, f[24] = h, f[25] = m, f[26] = p) : p = f[26], p
            }
            var g = n(79942),
                _ = n(93389),
                h = n(27932),
                y = n(47004),
                m = n(85036);
            let p = e => {
                let t, n, o, l, c, s = (0, a.c)(11),
                    {
                        hierarchy: u,
                        currentLabel: p,
                        className: f,
                        dataTestId: b
                    } = e,
                    {
                        routeHelper: w
                    } = i.useContext(_.A),
                    {
                        i18n: P
                    } = (0, g.uB)(),
                    {
                        handleNavigate: v,
                        handlePrefetch: z
                    } = (0, h.i)();
                s[0] !== P ? (t = P._("common.header.games"), s[0] = P, s[1] = t) : t = s[1], s[2] !== w ? (n = w.homePageLink(), s[2] = w, s[3] = n) : n = s[3], s[4] !== t || s[5] !== n.href ? (o = {
                    label: t,
                    href: n.href,
                    prefetch: !1
                }, s[4] = t, s[5] = n.href, s[6] = o) : o = s[6], s[7] !== w ? (l = e => {
                    let {
                        name: t,
                        enSlug: n,
                        isCategory: r
                    } = e;
                    return {
                        label: t,
                        href: (0, m.Ox)(w, n, r),
                        onClick: (0, m.YA)(n) ? y.on : void 0
                    }
                }, s[7] = w, s[8] = l) : l = s[8], s[9] !== p ? (c = void 0 === p ? [] : [{
                    label: p
                }], s[9] = p, s[10] = c) : c = s[10];
                let B = [o, ...(void 0 === u ? [] : u).map(l), ...c];
                return (0, r.jsx)(d, {
                    className: f,
                    "data-testid": b,
                    items: B,
                    onNavigate: v,
                    onPrefetch: z,
                    prefetch: !0
                })
            }
        }
    }
]);