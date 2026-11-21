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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ed8e341c-ddb0-4b75-b7a9-cea8fa4fcc51", e._sentryDebugIdIdentifier = "sentry-dbid-ed8e341c-ddb0-4b75-b7a9-cea8fa4fcc51")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31015, 53311, 93332], {
        845: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => c
            });
            var o = n(75155),
                a = n(55729),
                l = n(74532),
                r = n(81631),
                i = n(7377);

            function c() {
                let e, t = (0, o.c)(3),
                    n = (0, i.A)(),
                    {
                        countryCode: c
                    } = (0, a.useContext)(l.A),
                    s = "true" === n[r.Q2];
                return t[0] !== c || t[1] !== s ? (e = (0, r.D_)(c, s), t[0] = c, t[1] = s, t[2] = e) : e = t[2], e
            }
        },
        952: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var o = n(6029),
                a = n(75155);
            n(55729);
            var l = n(55654),
                r = n(95669),
                i = n.n(r),
                c = n(13246),
                s = n(61411);
            let u = e => {
                let t, n, l, r, s, u, m, g, y = (0, a.c)(21),
                    {
                        title: h,
                        metaDescription: B,
                        canonical: z,
                        alternatives: f,
                        children: C
                    } = e;
                y[0] !== f ? (t = void 0 === f ? [] : f, y[0] = f, y[1] = t) : t = y[1];
                let p = t;
                y[2] !== p ? (n = p.find(d), y[2] = p, y[3] = n) : n = y[3];
                let b = n,
                    x = "development" === c.A.Instance.environment,
                    w = `${x?"\uD83E\uDD99 - ":""}${h}`;
                return y[4] !== w ? (l = (0, o.jsx)("title", {
                    children: w
                }), y[4] = w, y[5] = l) : l = y[5], y[6] !== B ? (r = (0, o.jsx)("meta", {
                    name: "description",
                    content: B
                }), y[6] = B, y[7] = r) : r = y[7], y[8] !== z ? (s = z && (0, o.jsx)("link", {
                    rel: "canonical",
                    href: z
                }), y[8] = z, y[9] = s) : s = y[9], y[10] !== p ? (u = p.map(_), y[10] = p, y[11] = u) : u = y[11], y[12] !== b ? (m = b && (0, o.jsx)("link", {
                    rel: "alternate",
                    href: b.href,
                    hrefLang: "x-default"
                }), y[12] = b, y[13] = m) : m = y[13], y[14] !== C || y[15] !== l || y[16] !== r || y[17] !== s || y[18] !== u || y[19] !== m ? (g = (0, o.jsxs)(i(), {
                    children: [l, r, s, u, m, C]
                }), y[14] = C, y[15] = l, y[16] = r, y[17] = s, y[18] = u, y[19] = m, y[20] = g) : g = y[20], g
            };

            function d(e) {
                let {
                    locale: t
                } = e;
                return t === s.Xn
            }

            function _(e) {
                let {
                    href: t,
                    locale: n
                } = e, a = (0, l.lR)((0, s.qz)(n));
                return (0, o.jsx)("link", {
                    rel: "alternate",
                    hrefLang: a,
                    href: t
                }, a)
            }
        },
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
        7377: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var o = n(75155),
                a = n(81278);
            n(55729);
            let l = function() {
                let e = (0, o.c)(3);
                (0, a.useRouter)(); {
                    let t;
                    return e[2] === Symbol.for("react.memo_cache_sentinel") ? (t = { ...window.__NEXT_DATA__.props.queryParameters
                    }, e[2] = t) : t = e[2], t
                }
            }
        },
        10610: e => {
            e.exports = {
                czyButton: "HomePage_czyButton__5zk44",
                "czyButton--contained--purple": "HomePage_czyButton--contained--purple__eDU9H",
                "czyButton--contained--white": "HomePage_czyButton--contained--white__aCDi5",
                "czyButton--contained--grey": "HomePage_czyButton--contained--grey__qYzbJ",
                "czyButton--contained--warning": "HomePage_czyButton--contained--warning__0fxhA",
                "czyButton--contained--alert": "HomePage_czyButton--contained--alert__zo4vi",
                "czyButton--contained--success": "HomePage_czyButton--contained--success__0ORjv",
                "czyButton--contained--black": "HomePage_czyButton--contained--black__Mzpxv",
                "czyButton--contained--green-gradient": "HomePage_czyButton--contained--green-gradient__CEvK1",
                "czyButton--contained--animated-green-gradient": "HomePage_czyButton--contained--animated-green-gradient__k_QyM",
                "scroll-gradient": "HomePage_scroll-gradient__qcjHy",
                "czyButton--outlined--purple": "HomePage_czyButton--outlined--purple__VWJTa",
                "czyButton--link--purple": "HomePage_czyButton--link--purple__KbUSC",
                "czyButton--outlined--white": "HomePage_czyButton--outlined--white__OMTzp",
                "czyButton--link--white": "HomePage_czyButton--link--white__Ys9aL",
                "czyButton--outlined--grey": "HomePage_czyButton--outlined--grey__ifwIb",
                "czyButton--link--grey": "HomePage_czyButton--link--grey__bfx_P",
                "czyButton--outlined--warning": "HomePage_czyButton--outlined--warning__aef7r",
                "czyButton--link--warning": "HomePage_czyButton--link--warning__AnCxO",
                "czyButton--outlined--alert": "HomePage_czyButton--outlined--alert__tiYzx",
                "czyButton--link--alert": "HomePage_czyButton--link--alert__gIWz_",
                "czyButton--outlined--success": "HomePage_czyButton--outlined--success__1dWKG",
                "czyButton--link--success": "HomePage_czyButton--link--success__JHqh1",
                "czyButton--outlined": "HomePage_czyButton--outlined__tztkt",
                "czyButton--disabled": "HomePage_czyButton--disabled__fGUDT",
                "czyButton--height50": "HomePage_czyButton--height50__bUaIU",
                "czyButton--height34": "HomePage_czyButton--height34__CTH8C",
                "czyButton--height28": "HomePage_czyButton--height28__QcFTQ",
                "czyButton--fullWidth": "HomePage_czyButton--fullWidth__YB7zV",
                "czyButton--headerIcon": "HomePage_czyButton--headerIcon__Gwvxm",
                "czyButton--headerIcon--desktop": "HomePage_czyButton--headerIcon--desktop__OK6_Z",
                "czyButton--headerIcon--mobile": "HomePage_czyButton--headerIcon--mobile__WoMhW",
                "czyButton--headerIcon--withLabel": "HomePage_czyButton--headerIcon--withLabel__hAJqV",
                root: "HomePage_root__6VHY8",
                desktop: "HomePage_desktop__CDZV_",
                space: "HomePage_space__vobCm",
                homepageLayoutExp: "HomePage_homepageLayoutExp__sc4N1",
                offlineGamesBannerEmpty: "HomePage_offlineGamesBannerEmpty__SUC0X"
            }
        },
        15383: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => u
            });
            var o = n(75155),
                a = n(55729),
                l = n(98417),
                r = n(71684),
                i = n(4230),
                c = n(50293);
            let s = new Map;

            function u(e) {
                let t, n, u, _, m, g = (0, o.c)(11),
                    y = (0, a.useContext)(i.A),
                    {
                        api: h
                    } = (0, a.useContext)(r.A).services;
                g[0] !== y ? (t = (0, c.Dw)(y), g[0] = y, g[1] = t) : t = g[1];
                let B = t;
                g[2] === Symbol.for("react.memo_cache_sentinel") ? (n = [], g[2] = n) : n = g[2];
                let [z, f] = (0, a.useState)(n), [C, p] = (0, a.useState)(e), [b, x] = (0, a.useState)(e);
                return e !== b && (x(e), p(e)), g[3] !== h || g[4] !== B || g[5] !== e ? (u = () => {
                    if (!e) return;
                    let t = !1,
                        n = s.get(B),
                        o = (0, l.O)(n) && Date.now() - n.fetchedAt < 36e5 ? n.request : void 0;
                    return (0, l.O)(o) || (o = h.getBasicLaunchGames(B).then(d).catch(e => {
                        throw s.delete(B), e
                    }), s.set(B, {
                        fetchedAt: Date.now(),
                        request: o
                    })), o.then(e => {
                        t || (f(e), p(!1))
                    }).catch(() => {
                        t || (f([]), p(!1))
                    }), () => {
                        t = !0
                    }
                }, _ = [e, B, h], g[3] = h, g[4] = B, g[5] = e, g[6] = u, g[7] = _) : (u = g[6], _ = g[7]), (0, a.useEffect)(u, _), g[8] !== z || g[9] !== C ? (m = {
                    games: z,
                    isLoading: C
                }, g[8] = z, g[9] = C, g[10] = m) : m = g[10], m
            }

            function d(e) {
                return e.games.items
            }
        },
        17703: (e, t, n) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(35460)
            }])
        },
        17961: e => {
            e.exports = {
                becauseYouPlayedTitle: "BecauseYouPlayedCarousel_becauseYouPlayedTitle__SRxqw",
                becauseYouPlayedLink: "BecauseYouPlayedCarousel_becauseYouPlayedLink__O8R7w"
            }
        },
        23033: (e, t, n) => {
            "use strict";
            n.d(t, {
                $Y: () => k,
                AJ: () => h,
                CZ: () => w,
                EJ: () => p,
                H_: () => B,
                Qe: () => b,
                Qh: () => m,
                Qq: () => _,
                SF: () => z,
                T5: () => y,
                a1: () => T,
                dq: () => d,
                hA: () => x,
                uA: () => f,
                wN: () => C,
                xV: () => S
            });
            var o = n(14278),
                a = n(4801),
                l = n(72224),
                r = n(13246),
                i = n(61411),
                c = n(57212),
                s = n(87295),
                u = n(79430);

            function d() {
                return r.A.Instance.data.domains.map(e => {
                    let t = "en-US" === (0, i.cy)(e.host),
                        n = { ...l.a
                        },
                        o = new a.A(n).generateHome();
                    if (!o) return null;
                    let r = (0, u.A)(e.host, o.href, {
                        isMainDomain: t,
                        locale: e.locale
                    }).toString();
                    return {
                        locale: e.locale,
                        href: r.toString(),
                        host: e.host
                    }
                }).filter(e => !!e)
            }

            function _(e) {
                return j(e => e.generateCompetitions(), {}, e, "competitions")
            }

            function m(e) {
                return j(e => e.generateScholarship(), {}, e, "scholarship")
            }

            function g(e) {
                return v(t => t.generatePaginatedUpdatedGames({
                    page: e
                }), {})
            }

            function y(e) {
                return j(e => e.generateRecent(), {}, e, "recent")
            }

            function h() {
                return v(e => e.generateOriginals(), {})
            }

            function B(e) {
                return j(e => e.generateTags(), {}, e, "tags")
            }

            function z(e, t) {
                return v((e, t) => e.generateLeaderboards(t), {
                    page: e,
                    sorting: t
                })
            }

            function f(e, t) {
                return j((e, t) => e.generateGame(t), {
                    slug: e
                }, t, "game")
            }

            function C(e) {
                return j(e => e.generatePrivacyPolicy(), {}, e, "privacyPolicy")
            }

            function p(e) {
                return j(e => e.generateTermsAndConditions(), {}, e, "termsAndConditions")
            }

            function b(e) {
                return j(e => e.generateSearch(), {}, e, "search")
            }

            function x(e) {
                return v(t => t.generateProfilePage(e), {})
            }
            async function w(e, t, n, o) {
                if (t && "hot" === t) return v(e => e.generatePaginatedHotGames({
                    page: 1
                }), {});
                switch (e) {
                    case s.QI:
                        return j(e => e.generatePaginatedNewGames({
                            page: o
                        }), {}, await n.getRouteProviderData("newGames"), "newGames");
                    case s.F3:
                        return g(o);
                    default:
                        return console.warn(`unexpected sorting in games ${e}`), g(o)
                }
            }
            async function k(e, t, n) {
                if (e.isCategory) {
                    let o = await t.getRouteProviderData("category");
                    return j((e, t) => e.generateCategory(t), {
                        slugTrl: e.slug,
                        page: n
                    }, o, "category")
                } {
                    let o = await t.getRouteProviderData("tag");
                    return j((e, t) => e.generateTag(t), {
                        slugTrl: e.slug,
                        page: n
                    }, o, "tag")
                }
            }

            function T(e, t, n) {
                return v((t, n) => t.generateMultiplayerWithTag(n, e.slug), {
                    page: t,
                    sorting: n
                })
            }

            function S(e) {
                return v(t => t.generateAllGames(e), {})
            }

            function j(e, t, n, o) {
                var c;
                let s;
                return (c = n, s = r.A.Instance.data.domains, c.map(e => ({
                    domain: s.find(t => (0, i.qz)(t.locale) === e.locale),
                    routeData: e
                }))).map(n => {
                    let r = n.domain,
                        c = "en-US" === (0, i.cy)(r.host),
                        s = r.locale,
                        d = { ...l.a,
                            [o]: n.routeData.route,
                            locale: n.routeData.locale
                        },
                        _ = e(new a.A(d), t);
                    if (!_ || !n.domain) return null;
                    let m = (0, u.A)(n.domain.host, _.href, {
                        isMainDomain: c,
                        locale: s
                    }).toString();
                    return {
                        locale: n.domain.locale,
                        href: m.toString(),
                        host: n.domain.host
                    }
                }).filter(e => !!e)
            }

            function v(e, t) {
                let n = r.A.Instance.data.domains;
                return o.Y.map(o => {
                    let r = n.find(e => e.locale === o);
                    if (!r) return null;
                    let s = "en-US" === (0, i.cy)(r.host),
                        d = { ...l.a,
                            locale: c.Ec[o].serverLocale
                        },
                        _ = e(new a.A(d), t);
                    if (!_) return null;
                    let m = (0, u.A)(r.host, _.href, {
                        isMainDomain: s,
                        locale: o
                    }).toString();
                    return {
                        locale: r.locale,
                        href: m.toString(),
                        host: r.host
                    }
                }).filter(e => !!e)
            }
        },
        25312: (e, t, n) => {
            "use strict";
            n.d(t, {
                LW: () => u,
                WH: () => s,
                _5: () => l,
                aB: () => r,
                ec: () => a,
                qz: () => c,
                wx: () => i
            });
            var o = n(91828);
            let a = 864e5,
                l = 6048e5,
                r = e => parseFloat(((Date.now() - e) / 6e4).toFixed(2));

            function i(e) {
                let t = new Date(e),
                    n = new Date;
                if (!(0, o.vd)(t) || t < n) return null;
                let a = t.getTime() - n.getTime(),
                    {
                        days: l,
                        hours: r,
                        minutes: i
                    } = (0, o.Hf)(a),
                    c = [];
                return l > 0 && c.push(`${l}d`), r > 0 && c.push(`${r}h`), 0 === l && 0 === r && i > 0 && c.push(`${i}m`), `${c.join(" ")}`
            }

            function c(e, t) {
                let n = new Date(e);
                if (!(0, o.vd)(n) || n <= t) return null;
                let a = Math.floor((n.getTime() - t.getTime()) / 1e3),
                    l = Math.floor(a / 86400),
                    r = Math.floor(a % 86400 / 3600),
                    i = Math.floor(a % 3600 / 60);
                if (l > 0) {
                    let e = [`${l}d`];
                    return r > 0 && e.push(`${r}h`), e.join(" ")
                }
                if (r > 0) {
                    let e = [`${r}h`];
                    return i > 0 && e.push(`${i}m`), e.join(" ")
                }
                return `${i}m ${a%60}s`
            }

            function s(e, t) {
                if (!e) return !1;
                let n = new Date(e).getTime();
                return !isNaN(n) && Date.now() - n >= t
            }

            function u(e) {
                return new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !1
                }).format(e)
            }
        },
        28705: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => m
            });
            var o = n(6029),
                a = n(75155),
                l = n(55729),
                r = n(32994),
                i = n(50212),
                c = n(50293),
                s = n(4230),
                u = n(42251),
                d = n(44817),
                _ = n.n(d);
            let m = e => {
                let t, n, d, m, g = (0, a.c)(38),
                    {
                        linkData: y,
                        label: h,
                        customTitleElement: B,
                        onTitleClick: z,
                        className: f,
                        status: C,
                        prefetch: p
                    } = e,
                    b = l.useContext(s.A);
                if (!h && !B) return null;
                g[0] !== b ? (t = (0, c.xl)(b), g[0] = b, g[1] = t) : t = g[1];
                let x = !t;
                g[2] !== x ? (n = (0, i.A)(_().carouselTitleContainerDiv, "titleContainer", {
                    [_().isMobile]: x
                }), g[2] = x, g[3] = n) : n = g[3];
                let w = n;
                if (B) {
                    let e;
                    return g[4] !== w || g[5] !== B ? (e = (0, o.jsx)("div", {
                        className: w,
                        children: B
                    }), g[4] = w, g[5] = B, g[6] = e) : e = g[6], e
                }
                if (z) {
                    let e, t, n, a, l, c;
                    g[7] !== z ? (e = e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), z())
                    }, g[7] = z, g[8] = e) : e = g[8];
                    let s = e;
                    return g[9] !== f ? (t = (0, i.A)(_().carouselTitle, f), g[9] = f, g[10] = t) : t = g[10], g[11] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(r.I, {
                        name: "chevron_right",
                        size: "custom"
                    }), g[11] = n) : n = g[11], g[12] !== h || g[13] !== C || g[14] !== t ? (a = (0, o.jsxs)("div", {
                        className: t,
                        children: [h, n, C]
                    }), g[12] = h, g[13] = C, g[14] = t, g[15] = a) : a = g[15], g[16] !== s || g[17] !== z || g[18] !== a ? (l = (0, o.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        className: _().carouselTitleAction,
                        onClick: z,
                        onKeyDown: s,
                        children: a
                    }), g[16] = s, g[17] = z, g[18] = a, g[19] = l) : l = g[19], g[20] !== w || g[21] !== l ? (c = (0, o.jsx)("div", {
                        className: w,
                        children: l
                    }), g[20] = w, g[21] = l, g[22] = c) : c = g[22], c
                }
                if (h && !y) {
                    let e, t;
                    return g[23] !== f ? (e = (0, i.A)(_().carouselTitle, f), g[23] = f, g[24] = e) : e = g[24], g[25] !== h || g[26] !== C || g[27] !== e ? (t = (0, o.jsxs)("div", {
                        className: e,
                        children: [h, C]
                    }), g[25] = h, g[26] = C, g[27] = e, g[28] = t) : t = g[28], t
                }
                return g[29] !== f || g[30] !== h || g[31] !== y || g[32] !== p ? (d = (0, o.jsx)(u.A, {
                    linkData: y,
                    className: f,
                    prefetch: p,
                    children: h
                }), g[29] = f, g[30] = h, g[31] = y, g[32] = p, g[33] = d) : d = g[33], g[34] !== w || g[35] !== C || g[36] !== d ? (m = (0, o.jsxs)("div", {
                    className: w,
                    children: [d, C]
                }), g[34] = w, g[35] = C, g[36] = d, g[37] = m) : m = g[37], m
            }
        },
        29819: e => {
            e.exports = {
                czyButton: "SEOCategoriesBlock_czyButton__hWH1W",
                "czyButton--contained--purple": "SEOCategoriesBlock_czyButton--contained--purple__5I6FR",
                "czyButton--contained--white": "SEOCategoriesBlock_czyButton--contained--white__x6QYe",
                "czyButton--contained--grey": "SEOCategoriesBlock_czyButton--contained--grey__S9dpX",
                "czyButton--contained--warning": "SEOCategoriesBlock_czyButton--contained--warning__F964r",
                "czyButton--contained--alert": "SEOCategoriesBlock_czyButton--contained--alert__JA6m0",
                "czyButton--contained--success": "SEOCategoriesBlock_czyButton--contained--success__TiuC6",
                "czyButton--contained--black": "SEOCategoriesBlock_czyButton--contained--black__rpBj5",
                "czyButton--contained--green-gradient": "SEOCategoriesBlock_czyButton--contained--green-gradient__fn9H4",
                "czyButton--contained--animated-green-gradient": "SEOCategoriesBlock_czyButton--contained--animated-green-gradient__29YSg",
                "scroll-gradient": "SEOCategoriesBlock_scroll-gradient__Fxc4G",
                "czyButton--outlined--purple": "SEOCategoriesBlock_czyButton--outlined--purple__n02Rf",
                "czyButton--link--purple": "SEOCategoriesBlock_czyButton--link--purple__zUzXK",
                "czyButton--outlined--white": "SEOCategoriesBlock_czyButton--outlined--white__lbe4Y",
                "czyButton--link--white": "SEOCategoriesBlock_czyButton--link--white__mdlNA",
                "czyButton--outlined--grey": "SEOCategoriesBlock_czyButton--outlined--grey__6mukC",
                "czyButton--link--grey": "SEOCategoriesBlock_czyButton--link--grey__A_zyJ",
                "czyButton--outlined--warning": "SEOCategoriesBlock_czyButton--outlined--warning__4riRF",
                "czyButton--link--warning": "SEOCategoriesBlock_czyButton--link--warning__Hyldk",
                "czyButton--outlined--alert": "SEOCategoriesBlock_czyButton--outlined--alert__7CssK",
                "czyButton--link--alert": "SEOCategoriesBlock_czyButton--link--alert__6ebj6",
                "czyButton--outlined--success": "SEOCategoriesBlock_czyButton--outlined--success__lG3Ns",
                "czyButton--link--success": "SEOCategoriesBlock_czyButton--link--success__w5q5P",
                "czyButton--outlined": "SEOCategoriesBlock_czyButton--outlined__2QN9h",
                "czyButton--disabled": "SEOCategoriesBlock_czyButton--disabled__bsf8u",
                "czyButton--height50": "SEOCategoriesBlock_czyButton--height50__0VcGm",
                "czyButton--height34": "SEOCategoriesBlock_czyButton--height34__R_Iog",
                "czyButton--height28": "SEOCategoriesBlock_czyButton--height28___rCAQ",
                "czyButton--fullWidth": "SEOCategoriesBlock_czyButton--fullWidth__MW7Zf",
                "czyButton--headerIcon": "SEOCategoriesBlock_czyButton--headerIcon__FAjmI",
                "czyButton--headerIcon--desktop": "SEOCategoriesBlock_czyButton--headerIcon--desktop__kKE4i",
                "czyButton--headerIcon--mobile": "SEOCategoriesBlock_czyButton--headerIcon--mobile__B3hW4",
                "czyButton--headerIcon--withLabel": "SEOCategoriesBlock_czyButton--headerIcon--withLabel__vlFlu",
                root: "SEOCategoriesBlock_root__hScEg",
                seoContainer: "SEOCategoriesBlock_seoContainer__B8TQO",
                seoText: "SEOCategoriesBlock_seoText__iBESc",
                collapsed: "SEOCategoriesBlock_collapsed__KlqbD",
                expanded: "SEOCategoriesBlock_expanded__sx_eJ",
                carouselRoot: "SEOCategoriesBlock_carouselRoot__6mdmS",
                carouselItemRoot: "SEOCategoriesBlock_carouselItemRoot__xv9M_",
                withBottomMargin: "SEOCategoriesBlock_withBottomMargin__Yo0VD",
                placeholder: "SEOCategoriesBlock_placeholder__SEpgN",
                carouselItemLabel: "SEOCategoriesBlock_carouselItemLabel__Uqq1G",
                seoBlockLearnMoreButton: "SEOCategoriesBlock_seoBlockLearnMoreButton__Sqa_3"
            }
        },
        31015: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => x
            });
            var o = n(6029),
                a = n(75155),
                l = n(55729),
                r = n(77650),
                i = n(79942),
                c = n(39544),
                s = n(93800),
                u = n(71684),
                d = n(10040),
                _ = n(37434),
                m = n(65233),
                g = n(38910),
                y = n(66497),
                h = n(6810),
                B = n(8603),
                z = n(32662),
                f = n(76436),
                C = n(61820),
                p = n(84903),
                b = n.n(p);
            let x = e => {
                let t, n, p, x, O, L, G, R, N, E, D, M, H, F, W, U, q, Y, X, J, $, K, Z, V, Q, ee, et, en, eo, ea, el, er, ei, ec = (0, a.c)(100),
                    {
                        open: es,
                        onClose: eu
                    } = e,
                    {
                        entries: ed,
                        loading: e_
                    } = (0, C.g)(),
                    {
                        scheduleNewGames: em,
                        scheduledGameIds: eg
                    } = (0, h.m)(),
                    {
                        recent: ey,
                        loading: eh
                    } = l.useContext(m.oJ),
                    [eB, ez] = l.useState(null),
                    [ef, eC] = l.useState(null),
                    [ep, eb] = l.useState(!1),
                    ex = (0, f.G)(),
                    {
                        crazyAnalyticsService: ew
                    } = l.useContext(u.A).services,
                    ek = l.useRef(!1);
                ec[0] !== ew || ec[1] !== es ? (t = () => {
                    es && (ek.current = !1, ew.userAction("offline-gaming", "onboarding_sheet_shown"))
                }, n = [es, ew], ec[0] = ew, ec[1] = es, ec[2] = t, ec[3] = n) : (t = ec[2], n = ec[3]), l.useEffect(t, n), ec[4] !== ew || ec[5] !== eu ? (p = () => {
                    ek.current || ew.userAction("offline-gaming", "onboarding_dismissed"), eu()
                }, ec[4] = ew, ec[5] = eu, ec[6] = p) : p = ec[6];
                let eT = p;
                ec[7] !== eB || ec[8] !== es || ec[9] !== eg ? (x = () => {
                    if (!es || null !== eB) return;
                    let e = !1;
                    return (0, B.readDownloadedGames)().then(t => {
                        e || ez(new Set([...t.map(w), ...eg]))
                    }), () => {
                        e = !0
                    }
                }, O = [es, eB, eg], ec[7] = eB, ec[8] = es, ec[9] = eg, ec[10] = x, ec[11] = O) : (x = ec[10], O = ec[11]), l.useEffect(x, O), ec[12] !== ed || ec[13] !== eB ? (L = eB ? ed.filter(e => !eB.has(e.gameId)) : [], ec[12] = ed, ec[13] = eB, ec[14] = L) : L = ec[14];
                let eS = L;
                ec[15] !== eS || ec[16] !== ey || ec[17] !== eh || ec[18] !== ef ? (G = () => {
                    if (null !== ef || 0 === eS.length || eh) return;
                    let e = new Set(eS.map(k)),
                        t = [...ey].sort(T).map(S).filter(t => e.has(t)).slice(0, 3),
                        n = eS.map(j).filter(e => !t.includes(e));
                    for (; t.length < 3 && n.length > 0;) t.push(...n.splice(Math.floor(Math.random() * n.length), 1));
                    eC(t)
                }, R = [ef, eS, ey, eh], ec[15] = eS, ec[16] = ey, ec[17] = eh, ec[18] = ef, ec[19] = G, ec[20] = R) : (G = ec[19], R = ec[20]), l.useEffect(G, R), ec[21] !== ef ? (N = ef ? ? [], ec[21] = ef, ec[22] = N) : N = ec[22], ec[23] !== N ? (E = new Set(N), ec[23] = N, ec[24] = E) : E = ec[24];
                let ej = E;
                ec[25] !== eS ? (D = new Map(eS.map(v)), ec[25] = eS, ec[26] = D) : D = ec[26];
                let ev = D;
                if (ec[27] !== eS || ec[28] !== ew || ec[29] !== ev || ec[30] !== eT || ec[31] !== eB || ec[32] !== ex || ec[33] !== e_ || ec[34] !== eu || ec[35] !== es || ec[36] !== em || ec[37] !== ej || ec[38] !== ef || ec[39] !== ep) {
                    let e, t, n, a, l, u, m;
                    ec[57] !== ev ? (e = e => ev.get(e), ec[57] = ev, ec[58] = e) : e = ec[58];
                    let h = (ef ? ? []).map(e).filter(A);
                    ec[59] !== ej ? (t = e => !ej.has(e.gameId), ec[59] = ej, ec[60] = t) : t = ec[60];
                    let B = eS.filter(t);
                    ec[61] !== ex ? (n = e => {
                        ex.capture(), eb(!0), eC(t => t ? .includes(e) ? t.filter(t => t !== e) : [...t ? ? [], e])
                    }, ec[61] = ex, ec[62] = n) : n = ec[62];
                    let f = n,
                        C = h.reduce(I, 0),
                        p = (0, y.P)(C) ? .toUpperCase() ? ? "0MB",
                        x = () => {
                            ek.current = !0, ew.userAction("offline-gaming", "onboarding_download_cta", String(h.length)), eu(), em(ef ? ? [], "onboarding_sheet").catch(P)
                        };
                    ec[63] !== ex || ec[64] !== f ? (a = (e, t) => (0, o.jsx)("div", {
                        ref: ex.ref(e.gameId),
                        children: (0, o.jsx)(g.A, {
                            gameId: e.gameId,
                            name: e.gameName,
                            coverSrc: e.covers["1x1"] ? ? "",
                            size: (0, y.P)(e.zipSize),
                            selected: t,
                            onToggleSelect: () => f(e.gameId)
                        })
                    }, e.gameId), ec[63] = ex, ec[64] = f, ec[65] = a) : a = ec[65];
                    let w = a;
                    H = d.A, Z = es, V = eT, Q = b().sheet, ee = "bottom-sheet-offline-download", ec[66] === Symbol.for("react.memo_cache_sentinel") ? (et = r.Ru._({
                        id: "common.offline.onboarding.title"
                    }), ec[66] = et) : et = ec[66], ec[67] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, o.jsx)(s.A, {
                        name: "downloaded",
                        size: 86,
                        className: b().downloadedIcon
                    }), ec[67] = l) : l = ec[67], ec[68] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, o.jsx)("h2", {
                        className: b().title,
                        children: (0, o.jsx)(i.x6, {
                            id: "common.offline.onboarding.title"
                        })
                    }), ec[68] = u) : u = ec[68], ec[69] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsxs)("div", {
                        className: b().intro,
                        children: [l, u, (0, o.jsx)("p", {
                            className: b().subtitle,
                            children: (0, o.jsx)(i.x6, {
                                id: "common.offline.onboarding.subtitle"
                            })
                        })]
                    }), ec[69] = m) : m = ec[69];
                    let k = e_ || null === eB ? (0, o.jsx)(c.A, {}) : (0, o.jsxs)("div", {
                        className: b().list,
                        children: [h.length > 0 && (0, o.jsx)(z.A, {
                            title: r.Ru._({
                                id: ep ? "common.offline.onboarding.selected" : "common.offline.onboarding.recommended"
                            }),
                            className: b().sectionTitle
                        }), h.map(e => w(e, !0)), B.length > 0 && (0, o.jsx)(z.A, {
                            title: r.Ru._({
                                id: "common.offline.onboarding.moreGames"
                            }),
                            className: b().sectionTitle
                        }), B.map(e => w(e, !1))]
                    });
                    ec[70] !== k ? (en = (0, o.jsxs)("div", {
                        className: b().scroll,
                        children: [m, k]
                    }), ec[70] = k, ec[71] = en) : en = ec[71], K = b().footer, M = _.A, F = "contained", W = "purple", U = 50, q = !0, Y = b().cta, X = 0 === h.length, ec[72] !== x ? (J = () => void x(), ec[72] = x, ec[73] = J) : J = ec[73], $ = r.Ru._({
                        id: "common.offline.onboarding.downloadCta",
                        values: {
                            count: h.length,
                            size: p
                        }
                    }), ec[27] = eS, ec[28] = ew, ec[29] = ev, ec[30] = eT, ec[31] = eB, ec[32] = ex, ec[33] = e_, ec[34] = eu, ec[35] = es, ec[36] = em, ec[37] = ej, ec[38] = ef, ec[39] = ep, ec[40] = M, ec[41] = H, ec[42] = F, ec[43] = W, ec[44] = U, ec[45] = q, ec[46] = Y, ec[47] = X, ec[48] = J, ec[49] = $, ec[50] = K, ec[51] = Z, ec[52] = V, ec[53] = Q, ec[54] = ee, ec[55] = et, ec[56] = en
                } else M = ec[40], H = ec[41], F = ec[42], W = ec[43], U = ec[44], q = ec[45], Y = ec[46], X = ec[47], J = ec[48], $ = ec[49], K = ec[50], Z = ec[51], V = ec[52], Q = ec[53], ee = ec[54], et = ec[55], en = ec[56];
                return ec[74] !== M || ec[75] !== F || ec[76] !== W || ec[77] !== U || ec[78] !== q || ec[79] !== Y || ec[80] !== X || ec[81] !== J || ec[82] !== $ ? (eo = (0, o.jsx)(M, {
                    variant: F,
                    color: W,
                    height: U,
                    fullWidth: q,
                    className: Y,
                    disabled: X,
                    onClick: J,
                    children: $
                }), ec[74] = M, ec[75] = F, ec[76] = W, ec[77] = U, ec[78] = q, ec[79] = Y, ec[80] = X, ec[81] = J, ec[82] = $, ec[83] = eo) : eo = ec[83], ec[84] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, o.jsx)(i.x6, {
                    id: "common.offline.onboarding.notNow"
                }), ec[84] = ea) : ea = ec[84], ec[85] !== eT ? (el = (0, o.jsx)("button", {
                    type: "button",
                    className: b().dismiss,
                    onClick: eT,
                    children: ea
                }), ec[85] = eT, ec[86] = el) : el = ec[86], ec[87] !== K || ec[88] !== eo || ec[89] !== el ? (er = (0, o.jsxs)("div", {
                    className: K,
                    children: [eo, el]
                }), ec[87] = K, ec[88] = eo, ec[89] = el, ec[90] = er) : er = ec[90], ec[91] !== H || ec[92] !== Z || ec[93] !== V || ec[94] !== Q || ec[95] !== ee || ec[96] !== et || ec[97] !== en || ec[98] !== er ? (ei = (0, o.jsxs)(H, {
                    open: Z,
                    onClose: V,
                    className: Q,
                    dataTestId: ee,
                    "aria-label": et,
                    children: [en, er]
                }), ec[91] = H, ec[92] = Z, ec[93] = V, ec[94] = Q, ec[95] = ee, ec[96] = et, ec[97] = en, ec[98] = er, ec[99] = ei) : ei = ec[99], ei
            };

            function w(e) {
                return e.gameId
            }

            function k(e) {
                return e.gameId
            }

            function T(e, t) {
                return (t.playedTime ? ? 0) - (e.playedTime ? ? 0)
            }

            function S(e) {
                return e.id
            }

            function j(e) {
                return e.gameId
            }

            function v(e) {
                return [e.gameId, e]
            }

            function A(e) {
                return !!e
            }

            function I(e, t) {
                return e + (t.zipSize ? ? 0)
            }

            function P(e) {
                console.error("[OfflineGameDownloadSheet] scheduling failed:", e)
            }
        },
        31412: e => {
            e.exports = {
                container: "DrawerSpinner_container__zZOad"
            }
        },
        32532: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => v
            });
            var o = n(6029),
                a = n(55729),
                l = n(50212),
                r = n(50293),
                i = n(4230),
                c = n(75155),
                s = n(39890),
                u = n(89247),
                d = n(59126),
                _ = n(86907),
                m = n.n(_);
            let g = e => {
                let t, n, a, l, r = (0, c.c)(17),
                    {
                        games: i,
                        completeWithPlaceholder: d,
                        limit: _,
                        eagerLoading: g,
                        onClickAction: h,
                        removeThumbLabels: B
                    } = e,
                    z = void 0 !== _ ? _ : i ? i.length : 20;
                return r[0] !== i || r[1] !== _ ? (t = !i && _ ? (0, s.A)(_).map(y) : null, r[0] = i, r[1] = _, r[2] = t) : t = r[2], r[3] !== g || r[4] !== i || r[5] !== h || r[6] !== B || r[7] !== z ? (n = i && i.slice(0, z).map(e => (0, o.jsx)(u.A, {
                    game: e,
                    onClickAction: h,
                    eagerLoading: g,
                    removeThumbLabels: B
                }, e.slug)), r[3] = g, r[4] = i, r[5] = h, r[6] = B, r[7] = z, r[8] = n) : n = r[8], r[9] !== d || r[10] !== i || r[11] !== _ ? (a = d && i && void 0 !== _ && i.length < _ ? (0, s.A)(_ - i.length).map((e, t) => d(t)) : null, r[9] = d, r[10] = i, r[11] = _, r[12] = a) : a = r[12], r[13] !== t || r[14] !== n || r[15] !== a ? (l = (0, o.jsxs)("div", {
                    className: m().fixedGameGridContainer,
                    children: [t, n, a]
                }), r[13] = t, r[14] = n, r[15] = a, r[16] = l) : l = r[16], l
            };

            function y(e, t) {
                return (0, o.jsx)(d.A, {}, t)
            }
            var h = n(71684),
                B = n(44011),
                z = n(43711),
                f = n(93800),
                C = n(88498),
                p = n.n(C);
            let b = e => {
                let t, n, s, u, d, _, m = (0, c.c)(14),
                    {
                        label: g,
                        linkData: y,
                        target: h,
                        rel: B,
                        searchGrid: C
                    } = e,
                    b = a.useContext(i.A),
                    x = C ? (0, r.xl)(b) ? p().gameThumbAllLinkDesktopSearchGrid : p().gameThumbAllLinkMobileSearchGrid : null;
                return m[0] !== x ? (t = (0, l.A)(p().gameThumbAllLink, x), m[0] = x, m[1] = t) : t = m[1], m[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, l.A)(p().gameThumbAll), m[2] = n) : n = m[2], m[3] !== g ? (s = (0, o.jsx)("div", {
                    className: p().gameThumbAllLabel,
                    children: g
                }), m[3] = g, m[4] = s) : s = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, o.jsx)(f.A, {
                    name: "chevron-right"
                }), m[5] = u) : u = m[5], m[6] !== s ? (d = (0, o.jsxs)("span", {
                    className: n,
                    children: [s, u]
                }), m[6] = s, m[7] = d) : d = m[7], m[8] !== y || m[9] !== B || m[10] !== t || m[11] !== d || m[12] !== h ? (_ = (0, o.jsx)(z.A, { ...y,
                    className: t,
                    target: h,
                    rel: B,
                    prefetch: !0,
                    children: d
                }), m[8] = y, m[9] = B, m[10] = t, m[11] = d, m[12] = h, m[13] = _) : _ = m[13], _
            };
            var x = n(82288),
                w = n(28705),
                k = n(56732),
                T = n.n(k),
                S = n(80632),
                j = n.n(S);
            let v = a.memo(e => {
                let {
                    slug: t,
                    id: n,
                    title: s,
                    linkData: _,
                    slidesToLoadEagerly: m = 2,
                    isPortrait: y = !1,
                    renderFn: z,
                    forceShowSkeletons: f = !1,
                    className: C,
                    highlightedMode: p = !1,
                    requestDataFn: k,
                    requestDataThreshold: S,
                    isMobileSkeletonEnabled: v,
                    allGamesLabel: A,
                    allGamesLinkData: I,
                    dataTestId: P,
                    appendElement: O,
                    leadingElement: L,
                    removeThumbLabels: G,
                    replaceTitleWithElement: R,
                    prefetch: N
                } = e, E = (0, a.useContext)(i.A), {
                    crazyAnalyticsService: D
                } = (0, a.useContext)(h.A).services, M = (0, x.Fq)(t), H = (0, x.Lo)(t), F = 0 === M.length || f, W = e => {
                    D.sendClickOnGame(e)
                }, U = function(e) {
                    let t, n = (0, c.c)(7),
                        {
                            isDesktop: a,
                            allGamesLabel: l,
                            allGamesLinkData: r,
                            gamesLength: i,
                            highlightedMode: s,
                            maxItems: u,
                            totalItems: d
                        } = e,
                        _ = void 0 === d ? 0 : d;
                    e: {
                        let e;
                        if (!a || !l || !r || 0 === i || s) {
                            let e;
                            n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], n[0] = e) : e = n[0], t = e;
                            break e
                        }
                        if (!(void 0 !== u && i >= u || _ > 0 && i >= _)) {
                            let e;
                            n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = [], n[1] = e) : e = n[1], t = e;
                            break e
                        }
                        let c = r.href.includes("//kids"),
                            d = c ? "_blank" : void 0,
                            m = c ? "external nofollow" : void 0;n[2] !== l || n[3] !== r || n[4] !== m || n[5] !== d ? (e = [(0, o.jsx)(b, {
                            label: l,
                            linkData: r,
                            target: d,
                            rel: m
                        }, "all-content")], n[2] = l, n[3] = r, n[4] = m, n[5] = d, n[6] = e) : e = n[6],
                        t = e
                    }
                    return t
                }({
                    isDesktop: (0, r.xl)(E),
                    allGamesLabel: A,
                    allGamesLinkData: I,
                    gamesLength: M.length,
                    highlightedMode: p,
                    maxItems: H ? .config ? .maxItems,
                    totalItems: H ? .totalItems
                }), q = p ? (() => {
                    let e = f ? [] : M,
                        t = +!!L,
                        n = e.length + t,
                        l = Math.floor((e.length > 0 ? n - n % 5 : F ? 30 : 20) / 5),
                        r = [];
                    for (let n = 0; n < l; n++) {
                        let l = 5 * n - t,
                            i = e[l],
                            c = !!i;
                        0 === n && L ? r.push((0, o.jsx)(a.Fragment, {
                            children: L
                        }, "leading-element")) : c ? r.push((0, o.jsx)(u.A, {
                            game: i,
                            eagerLoading: !!(m && l < m),
                            onClickAction: W,
                            width: 675,
                            imgFetchPriority: 0 === l ? "high" : void 0,
                            removeThumbLabels: G
                        }, i.slug)) : F && r.push((0, o.jsx)(d.A, {
                            className: T().skeletonCarouselMargin
                        }, l));
                        let s = l + 1,
                            _ = e[l + 1] ? e[l + 1].slug : s;
                        r.push((0, o.jsx)(g, {
                            games: e.slice(s, l + 5),
                            eagerLoading: !!(m && l < m),
                            limit: F ? 4 : void 0,
                            onClickAction: W,
                            removeThumbLabels: G,
                            completeWithPlaceholder: F ? e => (0, o.jsx)(d.A, {}, e) : void 0
                        }, _))
                    }
                    return r
                })() : F ? Array.from({
                    length: 15
                }).map((e, t) => (0, o.jsx)(d.A, {}, `skeleton-${t}`)) : M.map((e, t) => z ? z(e, t) : (0, o.jsx)(u.A, {
                    game: e,
                    eagerLoading: t < m,
                    onClickAction: W,
                    removeThumbLabels: G
                }, e.slug)), Y = p ? q : (Array.isArray(q) ? q : [q]).concat(U), X = R || (null !== s ? (0, o.jsx)(w.A, {
                    label: "string" == typeof s ? (0, o.jsx)("span", {
                        children: s
                    }) : s,
                    linkData: _,
                    prefetch: N
                }) : null);
                return (0, o.jsxs)("div", {
                    id: n,
                    "data-testid": P ? ? `carousel-${t}`,
                    className: (0, l.A)(j().gamesCarouselSection, {
                        [j().isPortrait]: y,
                        [j().isMobile]: !(0, r.xl)(E),
                        [j().isHighlightedMode]: p
                    }, C),
                    children: [X, (0, o.jsx)(B.k, {
                        slug: t,
                        renderSkeleton: () => (0, o.jsx)(d.A, {}),
                        requestDataFn: k,
                        requestDataThreshold: S,
                        isMobileSkeletonEnabled: v,
                        children: Y
                    }), O]
                })
            })
        },
        34371: e => {
            e.exports = {
                czyButton: "TopPromotionalRecentBanner_czyButton__b18tw",
                "czyButton--contained--purple": "TopPromotionalRecentBanner_czyButton--contained--purple__9yCEL",
                "czyButton--contained--white": "TopPromotionalRecentBanner_czyButton--contained--white__9PJsO",
                "czyButton--contained--grey": "TopPromotionalRecentBanner_czyButton--contained--grey__KqlxO",
                "czyButton--contained--warning": "TopPromotionalRecentBanner_czyButton--contained--warning__03Fb0",
                "czyButton--contained--alert": "TopPromotionalRecentBanner_czyButton--contained--alert__vFvDm",
                "czyButton--contained--success": "TopPromotionalRecentBanner_czyButton--contained--success__plzPc",
                "czyButton--contained--black": "TopPromotionalRecentBanner_czyButton--contained--black__fm_h2",
                "czyButton--contained--green-gradient": "TopPromotionalRecentBanner_czyButton--contained--green-gradient__fUHU6",
                "czyButton--contained--animated-green-gradient": "TopPromotionalRecentBanner_czyButton--contained--animated-green-gradient__97Evo",
                "scroll-gradient": "TopPromotionalRecentBanner_scroll-gradient__Bbk_q",
                "czyButton--outlined--purple": "TopPromotionalRecentBanner_czyButton--outlined--purple__63ur6",
                "czyButton--link--purple": "TopPromotionalRecentBanner_czyButton--link--purple__poLVJ",
                "czyButton--outlined--white": "TopPromotionalRecentBanner_czyButton--outlined--white__TflG4",
                "czyButton--link--white": "TopPromotionalRecentBanner_czyButton--link--white__wn8r6",
                "czyButton--outlined--grey": "TopPromotionalRecentBanner_czyButton--outlined--grey__rYuIi",
                "czyButton--link--grey": "TopPromotionalRecentBanner_czyButton--link--grey__UhNaU",
                "czyButton--outlined--warning": "TopPromotionalRecentBanner_czyButton--outlined--warning__zMfc9",
                "czyButton--link--warning": "TopPromotionalRecentBanner_czyButton--link--warning__s6h1a",
                "czyButton--outlined--alert": "TopPromotionalRecentBanner_czyButton--outlined--alert__r2yAQ",
                "czyButton--link--alert": "TopPromotionalRecentBanner_czyButton--link--alert__MAlDr",
                "czyButton--outlined--success": "TopPromotionalRecentBanner_czyButton--outlined--success__zDccX",
                "czyButton--link--success": "TopPromotionalRecentBanner_czyButton--link--success__0_Z9v",
                "czyButton--outlined": "TopPromotionalRecentBanner_czyButton--outlined__wQXn6",
                "czyButton--disabled": "TopPromotionalRecentBanner_czyButton--disabled__TrNqB",
                "czyButton--height50": "TopPromotionalRecentBanner_czyButton--height50__tnLY5",
                "czyButton--height34": "TopPromotionalRecentBanner_czyButton--height34__4Jyuf",
                "czyButton--height28": "TopPromotionalRecentBanner_czyButton--height28__nxPQg",
                "czyButton--fullWidth": "TopPromotionalRecentBanner_czyButton--fullWidth__OeL55",
                "czyButton--headerIcon": "TopPromotionalRecentBanner_czyButton--headerIcon__W3V3H",
                "czyButton--headerIcon--desktop": "TopPromotionalRecentBanner_czyButton--headerIcon--desktop__O6tgl",
                "czyButton--headerIcon--mobile": "TopPromotionalRecentBanner_czyButton--headerIcon--mobile__IoImR",
                "czyButton--headerIcon--withLabel": "TopPromotionalRecentBanner_czyButton--headerIcon--withLabel__2Tu0x",
                loaderContainer: "TopPromotionalRecentBanner_loaderContainer__bxMTe",
                wrapper: "TopPromotionalRecentBanner_wrapper__jvvcH",
                isMobile: "TopPromotionalRecentBanner_isMobile__ZDkDg",
                forApp: "TopPromotionalRecentBanner_forApp__lzKDh",
                recentCarouselContainer: "TopPromotionalRecentBanner_recentCarouselContainer__EGjk_",
                recentCarouselRoot: "TopPromotionalRecentBanner_recentCarouselRoot__hyNr_",
                surpriseCarouselElement: "TopPromotionalRecentBanner_surpriseCarouselElement__y2KgM",
                surpriseElement: "TopPromotionalRecentBanner_surpriseElement__Xcc8n",
                relatedSkeleton: "TopPromotionalRecentBanner_relatedSkeleton__X5_gc",
                isSurpriseCarousel: "TopPromotionalRecentBanner_isSurpriseCarousel__70Bzl"
            }
        },
        35460: (e, t, n) => {
            "use strict";
            let o;
            n.r(t), n.d(t, {
                default: () => nv
            });
            var a = n(6029),
                l = n(75155),
                r = n(55729),
                i = n(98417),
                c = n(79942),
                s = n(33770),
                u = n(87543),
                d = n(23033),
                _ = n(52461),
                m = n(50293),
                g = n(87295),
                y = n(12097),
                h = n(952),
                B = n(50212),
                z = n(71024),
                f = n.n(z),
                C = n(60362);
            let p = r.createContext(!1),
                b = e => {
                    let t, n = (0, l.c)(3),
                        {
                            value: o,
                            children: r
                        } = e;
                    return n[0] !== r || n[1] !== o ? (t = (0, a.jsx)(p.Provider, {
                        value: o,
                        children: r
                    }), n[0] = r, n[1] = o, n[2] = t) : t = n[2], t
                };
            var x = n(48431),
                w = n(39481),
                k = n(4230),
                T = n(51196),
                S = n(33165),
                j = n(65233),
                v = n(22484),
                A = n(69649),
                I = n(58224),
                P = n(71237),
                O = n(71684),
                L = n(74532),
                G = n(62928);
            let R = () => {
                    let {
                        experimentService: e,
                        modelService: t
                    } = r.useContext(O.A).services, n = r.useContext(k.A), {
                        countryCode: o
                    } = r.useContext(L.A), {
                        clusterMap: a
                    } = P.lF(), l = r.useRef(a);
                    return r.useEffect(() => {
                        l.current = a
                    }, [a]), {
                        getModelGames: r.useCallback(async a => await (0, G.j)({
                            modelService: t,
                            experimentService: e
                        }, n, o, l.current, a), [n, e, t, o]),
                        getModelCountryCode: r.useCallback(async a => {
                            let r = e.getModelName(a);
                            return t.getModelLocation(r, n, o, l.current, a)
                        }, [n, e, t, o])
                    }
                },
                N = r.createContext({
                    originalsModelGames: [],
                    loadingModelGames: !0
                }),
                E = e => {
                    let t, n, i, c, s, u = (0, l.c)(12),
                        {
                            children: d
                        } = e,
                        _ = r.useContext(k.A),
                        {
                            getModelGames: m
                        } = R(),
                        [g, y] = r.useState(!0);
                    u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], u[0] = t) : t = u[0];
                    let [h, B] = r.useState(t);
                    u[1] !== m ? (n = () => {
                        (async () => {
                            let e = 5 * I.Ig,
                                t = await m({
                                    place: "homePage_originalsCarousel",
                                    page: 1,
                                    size: e,
                                    desktopPageSize: e,
                                    originalsOnly: !0,
                                    eligiblity: "eligible_only"
                                }),
                                n = t ? (0, A.y)(t.items, I.Ig, (void 0 === o && (o = (0, v.i)()), o)) : void 0;
                            r.startTransition(() => {
                                n && B(n), y(!1)
                            })
                        })()
                    }, u[1] = m, u[2] = n) : n = u[2], u[3] !== _ || u[4] !== m ? (i = [m, _], u[3] = _, u[4] = m, u[5] = i) : i = u[5], r.useEffect(n, i), u[6] !== g || u[7] !== h ? (c = {
                        loadingModelGames: g,
                        originalsModelGames: h
                    }, u[6] = g, u[7] = h, u[8] = c) : c = u[8];
                    let z = c;
                    return u[9] !== d || u[10] !== z ? (s = (0, a.jsx)(N.Provider, {
                        value: z,
                        children: d
                    }), u[9] = d, u[10] = z, u[11] = s) : s = u[11], s
                };
            var D = n(14886),
                M = n(85773),
                H = n(98089),
                F = n(34371),
                W = n.n(F);
            let U = f()(() => Promise.all([n.e(61019), n.e(70969), n.e(16733)]).then(n.bind(n, 16733)), {
                    loadableGenerated: {
                        webpack: () => [16733]
                    },
                    loading: () => null,
                    ssr: !1
                }),
                q = r.memo(e => {
                    let {
                        children: t,
                        isMobile: n
                    } = e;
                    return (0, a.jsx)("div", {
                        className: (0, B.A)(W().wrapper, n && W().isMobile, n && (0, x.JK)() && W().forApp),
                        children: t
                    })
                }),
                Y = r.memo(e => {
                    let {
                        isDesktopLayout: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: (0, B.A)(W().recentCarouselContainer, t && W().isDesktop),
                        children: (0, a.jsx)(_.x, {
                            newClickOrigin: "recent",
                            children: (0, a.jsx)(U, {})
                        })
                    })
                }),
                X = r.memo(() => {
                    let e = r.useContext(k.A),
                        {
                            loadingUser: t,
                            userTokenExists: n
                        } = r.useContext(D.R),
                        {
                            loading: o,
                            shouldDisplayRecent: l
                        } = r.useContext(j.oJ),
                        i = !(0, m.xl)(e);
                    return !(o && l) && (o || t && !n || null === l) ? (0, a.jsx)(q, {
                        isMobile: i,
                        children: (0, a.jsx)("div", {
                            className: W().loaderContainer,
                            children: (0, a.jsx)(H.A, {})
                        })
                    }) : (0, a.jsx)(q, {
                        isMobile: i,
                        children: l ? (0, a.jsx)(Y, {
                            isDesktopLayout: !i
                        }) : (0, a.jsx)(M.A, {
                            isScrolling: !0
                        })
                    })
                });
            var J = n(32532),
                $ = n(89846),
                K = n(27808),
                Z = n(74198),
                V = n(54629),
                Q = n(65889),
                ee = n(12295),
                et = n(84040);
            let en = [];

            function eo(e) {
                let t = ee.A.getInstance().getGameIds();
                return e ? .me ? .relevantGames.filter(e => !t.includes(e.id))
            }

            function ea(e) {
                return !en.includes(e.id)
            }
            var el = n(93389),
                er = n(43711),
                ei = n(89247),
                ec = n(44011),
                es = n(28705),
                eu = n(80632),
                ed = n.n(eu),
                e_ = n(17961),
                em = n.n(e_);
            let eg = e => {
                    let t, n, o = (0, l.c)(6),
                        {
                            sourceGameName: i,
                            sourceGameSlug: s
                        } = e,
                        {
                            routeHelper: u
                        } = r.useContext(el.A);
                    o[0] !== u || o[1] !== s ? (t = u.gamePageLink(s), o[0] = u, o[1] = s, o[2] = t) : t = o[2];
                    let d = t;
                    return o[3] !== d || o[4] !== i ? (n = (0, a.jsx)(_.x, {
                        newClickOrigin: "label",
                        children: (0, a.jsx)("span", {
                            children: (0, a.jsx)(c.x6, {
                                id: "games.becauseYouPlayed.title",
                                values: {
                                    gameName: (0, a.jsx)(er.A, { ...d,
                                        className: em().becauseYouPlayedLink,
                                        children: i
                                    })
                                }
                            })
                        })
                    }), o[3] = d, o[4] = i, o[5] = n) : n = o[5], n
                },
                ey = e => {
                    let t, n, o, i, c, s, u, d = (0, l.c)(20),
                        {
                            games: _,
                            sourceGameName: g,
                            sourceGameSlug: y
                        } = e,
                        {
                            crazyAnalyticsService: h
                        } = r.useContext(O.A).services,
                        z = r.useContext(k.A);
                    d[0] !== h ? (t = e => {
                        h.sendClickOnGame(e)
                    }, d[0] = h, d[1] = t) : t = d[1];
                    let f = t;
                    d[2] !== z ? (n = (0, m.xl)(z), d[2] = z, d[3] = n) : n = d[3];
                    let C = !n;
                    if (d[4] !== C ? (o = (0, B.A)(ed().gamesCarouselSection, {
                            [ed().isMobile]: C
                        }), d[4] = C, d[5] = o) : o = d[5], d[6] !== g || d[7] !== y ? (i = (0, a.jsx)(es.A, {
                            className: em().becauseYouPlayedTitle,
                            label: (0, a.jsx)(eg, {
                                sourceGameName: g,
                                sourceGameSlug: y
                            })
                        }), d[6] = g, d[7] = y, d[8] = i) : i = d[8], d[9] !== _ || d[10] !== f) {
                        let e;
                        d[12] !== f ? (e = e => (0, a.jsx)(ei.A, {
                            game: e,
                            onClickAction: f
                        }, e.slug), d[12] = f, d[13] = e) : e = d[13], c = _.map(e), d[9] = _, d[10] = f, d[11] = c
                    } else c = d[11];
                    return d[14] !== c ? (s = (0, a.jsx)(ec.k, {
                        clickOrigin: "becauseYouPlayed",
                        children: c
                    }), d[14] = c, d[15] = s) : s = d[15], d[16] !== o || d[17] !== i || d[18] !== s ? (u = (0, a.jsxs)("div", {
                        "data-testid": "becauseYouPlayed",
                        className: o,
                        children: [i, s]
                    }, "because-you-played"), d[16] = o, d[17] = i, d[18] = s, d[19] = u) : u = d[19], u
                };
            var eh = n(75651);

            function eB() {
                let {
                    isNewUser: e
                } = r.useContext(L.A), {
                    countryCode: t
                } = r.useContext(L.A), n = (0, eh.d7)(t);
                return 3 === n || 4 === n ? "top" : e ? "category" : "top"
            }
            var ez = n(82288),
                ef = n(77650),
                eC = n(37916),
                ep = n(53369),
                eb = n(79469);

            function ex(e) {
                let t, n, o = (0, l.c)(11),
                    {
                        slug: a,
                        categoryId: c,
                        isCategory: s,
                        pageSize: u
                    } = e,
                    d = (0, ez.TB)(),
                    _ = (0, r.useRef)(!1),
                    {
                        getModelGames: m
                    } = (0, V.A)(),
                    g = (0, ez.Ni)(),
                    y = (0, ez.eN)();
                o[0] !== c || o[1] !== m || o[2] !== s || o[3] !== u || o[4] !== g || o[5] !== y || o[6] !== a || o[7] !== d ? (t = async () => {
                    let e = d.getState().carousels.get(a);
                    if (!(0, i.O)(e)) return;
                    let {
                        maxItems: t
                    } = e.config, n = e.totalItems ? ? 0, o = e.displayedGames.length;
                    if (o >= t || n > 0 && o >= n || _.current) return;
                    _.current = !0, y(a, !0);
                    let l = async () => {
                        let e = Math.floor(o / u) + 1,
                            n = await m({
                                place: "homePage_categoryCarouselMore",
                                filters: [{
                                    category: s ? c : void 0,
                                    tag: s ? void 0 : c,
                                    pagination: {
                                        page: e,
                                        size: u
                                    },
                                    totalListSize: t
                                }]
                            }),
                            l = n ? .[c] ? .items ? ? [];
                        if (l.length > 0) {
                            let e = l.slice(0, Math.max(0, t - o));
                            e.length > 0 && g(a, e, !0)
                        }
                    };
                    await l().catch(e => {
                        console.error(`Failed to fetch more games for carousel ${a}:`, e)
                    }).finally(() => {
                        _.current = !1, y(a, !1)
                    })
                }, o[0] = c, o[1] = m, o[2] = s, o[3] = u, o[4] = g, o[5] = y, o[6] = a, o[7] = d, o[8] = t) : t = o[8];
                let h = t;
                return o[9] !== h ? (n = {
                    fetchMore: h
                }, o[9] = h, o[10] = n) : n = o[10], n
            }
            var ew = n(95116),
                ek = n.n(ew);
            let eT = r.memo(e => {
                    let {
                        tag: t,
                        loadingCarouselData: n
                    } = e, o = r.useContext(k.A), l = r.useContext(p), {
                        routeHelper: i
                    } = r.useContext(el.A), {
                        enSlug: c,
                        name: s,
                        id: u,
                        isCategory: d,
                        iconUrl: m,
                        excerpt: g
                    } = t, y = `intent-${c}`, h = (0, K.E)(o), B = (0, ep.E8)(t), {
                        fetchMore: z
                    } = ex({
                        slug: y,
                        categoryId: u,
                        isCategory: d,
                        pageSize: h
                    }), f = i.tagOrCategoryPageDirectLink(c, d), C = ef.Ru._("common.games.all", {
                        title: s
                    }), b = (0, ep.pA)(c, m), x = (0, a.jsx)(eb.A, {
                        style: B,
                        titleClassName: ek().title,
                        iconSrc: b,
                        title: s,
                        linkData: f,
                        subtitle: g ? (0, a.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: g
                            }
                        }) : void 0
                    }), w = (0, a.jsx)("div", {
                        className: ek().intentBackground,
                        style: B
                    });
                    return (0, a.jsx)(_.x, {
                        newClickOrigin: c,
                        children: (0, a.jsx)(J.s, {
                            id: `intent-carousel-${u}`,
                            dataTestId: `${eC.oL}intent-${c}`,
                            slug: y,
                            replaceTitleWithElement: x,
                            linkData: f,
                            allGamesLabel: C,
                            allGamesLinkData: f,
                            forceShowSkeletons: !l && n,
                            requestDataFn: z,
                            appendElement: w,
                            className: ek().intentCarousel
                        })
                    })
                }),
                eS = r.memo(() => {
                    let e = (0, ez.ok)(),
                        t = r.useContext(p),
                        {
                            locale: n
                        } = r.useContext(Z.A),
                        o = r.useContext(k.A),
                        {
                            loadingUser: l
                        } = r.useContext(D.R),
                        {
                            getModelGames: i
                        } = (0, V.A)(),
                        c = (0, ez.Ni)(),
                        s = (0, ez.Y7)(),
                        [u, d] = r.useState(!1),
                        _ = !u || l,
                        m = (0, K.E)(o),
                        g = r.useEffectEvent(() => t);
                    return (r.useEffect(() => {
                        (async () => {
                            if (!e ? .length) return;
                            if (g()) return d(!0);
                            let t = await i({
                                place: "homePage_categoryCarousel",
                                filters: e.map(e => ({
                                    category: e.isCategory ? e.id : void 0,
                                    tag: e.isCategory ? void 0 : e.id,
                                    pagination: {
                                        page: 1,
                                        size: m
                                    },
                                    totalListSize: I.eB
                                }))
                            });
                            t && e.forEach(e => {
                                let n = `intent-${e.enSlug}`,
                                    o = t[e.id],
                                    a = o ? .items || [];
                                s(n, o ? .total ? ? 0), a.length > 0 && c(n, a)
                            }), d(!0)
                        })()
                    }, [e, i, m, c, s, n]), e ? .length) ? (0, a.jsx)(a.Fragment, {
                        children: e.map(e => (0, a.jsx)(eT, {
                            tag: e,
                            loadingCarouselData: _
                        }, e.id))
                    }) : null
                });
            var ej = n(81631),
                ev = n(15383),
                eA = n(845),
                eI = n(81930),
                eP = n(34302),
                eO = n(47883),
                eL = n(90930),
                eG = n(82638),
                eR = n(40369),
                eN = n(47352),
                eE = n(52711),
                eD = n(98542),
                eM = n(83582),
                eH = n(99521),
                eF = n(59126),
                eW = n(80474),
                eU = n(65619),
                eq = n(90094),
                eY = n.n(eq);
            let eX = e => {
                let t, n, o, i, c, s, u, d, _ = (0, l.c)(40),
                    {
                        game: g,
                        aspectRatio: y,
                        displayLabelBelow: h,
                        showLabels: z,
                        removeThumbLabels: f
                    } = e,
                    C = void 0 === y ? "landscape" : y,
                    p = void 0 === z || z,
                    {
                        game: b,
                        artworkId: x,
                        artworkExperimentId: w
                    } = (0, eO.F)(g),
                    T = (0, eO.m)(),
                    [S, j] = r.useState(!1),
                    [v, A] = r.useState(!1),
                    [I, P] = r.useState(!1),
                    [L, G] = r.useState(0),
                    R = r.useRef(null),
                    {
                        gameService: N,
                        crazyAnalyticsService: E
                    } = r.useContext(O.A).services,
                    D = r.useRef(null),
                    M = r.useContext(k.A),
                    H = r.useContext(eG.g).addViewedGames,
                    F = r.useContext(eL.o);
                _[0] !== F ? (t = (0, eR.Ay)(F), _[0] = F, _[1] = t) : t = _[1];
                let W = t;
                _[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                    R.current && G(R.current.clientWidth)
                }, o = [], _[2] = n, _[3] = o) : (n = _[2], o = _[3]), r.useEffect(n, o), _[4] !== H || _[5] !== b.id || _[6] !== W ? (i = () => {
                    let e;
                    return R && R.current && (e = R.current, eE.A.get().observe(R.current, () => {
                        eE.A.get().unobserve(e), H(b.id, W), A(!0)
                    })), () => {
                        e && eE.A.get().unobserve(e)
                    }
                }, c = [b.id, H, W], _[4] = H, _[5] = b.id, _[6] = W, _[7] = i, _[8] = c) : (i = _[7], c = _[8]), r.useEffect(i, c), _[9] !== w || _[10] !== x || _[11] !== b.id || _[12] !== v ? (s = {
                    gameId: b.id,
                    artworkId: x,
                    artworkExperimentId: w,
                    enabled: v
                }, _[9] = w, _[10] = x, _[11] = b.id, _[12] = v, _[13] = s) : s = _[13], (0, eP.A)(s), _[14] !== M || _[15] !== b || _[16] !== N ? (u = () => {
                    b && N.prefetchGameData(b, M)
                }, _[14] = M, _[15] = b, _[16] = N, _[17] = u) : u = _[17];
                let U = u;
                if (_[18] !== C || _[19] !== E || _[20] !== M || _[21] !== h || _[22] !== L || _[23] !== b || _[24] !== S || _[25] !== T || _[26] !== I || _[27] !== U || _[28] !== f || _[29] !== p) {
                    let e, t, n, o;
                    _[31] !== I || _[32] !== U ? (e = () => {
                        !I && z && (P(!0), D.current = window.setTimeout(() => {
                            U()
                        }, 500))
                    }, _[31] = I, _[32] = U, _[33] = e) : e = _[33];
                    let l = e;
                    _[34] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                        z && (r.startTransition(() => {
                            P(!1)
                        }), D.current && (clearTimeout(D.current), D.current = null))
                    }, _[34] = t) : t = _[34];
                    let i = t;
                    _[35] !== C ? (n = e => {
                        switch (C) {
                            case "landscape":
                                return .5625 * e;
                            case "portrait":
                                return 1.5 * e;
                            case "square":
                                return e
                        }
                    }, _[35] = C, _[36] = n) : n = _[36];
                    let c = n,
                        s = b.covers ? b.covers[eD.H[C]] : b.cover;
                    s || "portrait" !== C || (s = b.covers ? .[eD.H.landscape] || null);
                    let u = {
                            quality: 85,
                            width: eW.Y,
                            height: c(eW.Y),
                            fit: "crop"
                        },
                        g = (0, eI.Wn)(s || "", u),
                        y = (0, m.Fr)(M),
                        z = !y && "portrait" === C;
                    _[37] !== b.gameThumbLabels || _[38] !== f ? (o = f ? b.gameThumbLabels ? .filter(e => !f.includes(e)) : b.gameThumbLabels, _[37] = b.gameThumbLabels, _[38] = f, _[39] = o) : o = _[39];
                    let x = o,
                        w = b.loading ? (0, a.jsx)(eF.A, {}) : (0, a.jsxs)(a.Fragment, {
                            children: [p && (0, a.jsx)(eM.default, {
                                videoPlaying: I,
                                gameThumbLabels: x
                            }), (0, a.jsx)(eN.A, {
                                className: (0, B.A)(eY().originalsGameLink, y && eY().isMobile, eY()[C], eY().isResponsive, z && eY().hasHoverOverlay, "game-thumb-test-class"),
                                slug: b.slug,
                                ref: R,
                                onMouseOver: l,
                                onMouseLeave: i,
                                onClick: () => E.sendClickOnGame(b.id),
                                children: (0, a.jsxs)("div", {
                                    className: eY().gameThumbMedia,
                                    children: [I && z && (0, a.jsx)(eU.A, {
                                        game: b,
                                        width: L || eW.Y,
                                        isPortrait: !0
                                    }), !I && (0, a.jsx)(eH.A, {
                                        game: b
                                    }), s && (T ? (0, a.jsx)("img", {
                                        className: (0, B.A)(!S && eY().imageSkeleton),
                                        src: (0, eI.Ay)(s, u),
                                        alt: b.name,
                                        srcSet: g,
                                        onLoad: () => j(!0),
                                        loading: y ? "lazy" : void 0,
                                        decoding: y ? "async" : void 0
                                    }) : (0, a.jsx)("div", {
                                        className: eY().imageSkeleton
                                    }))]
                                })
                            })]
                        });
                    d = h ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            style: {
                                position: "relative"
                            },
                            children: [w, (0, a.jsx)("div", {
                                className: (0, B.A)(eY().gameName, y && eY().isMobile, eY()[C], eY().isResponsive),
                                children: b.name
                            }), b.categoryName && (0, a.jsx)("div", {
                                className: (0, B.A)(eY().gameCategory, y && eY().isMobile, eY()[C], eY().isResponsive),
                                children: b.categoryName
                            })]
                        })
                    }) : w, _[18] = C, _[19] = E, _[20] = M, _[21] = h, _[22] = L, _[23] = b, _[24] = S, _[25] = T, _[26] = I, _[27] = U, _[28] = f, _[29] = p, _[30] = d
                } else d = _[30];
                return d
            };

            function eJ(e) {
                return e.slug
            }
            let e$ = ["new"],
                eK = () => {
                    let e, t, n, o, i, s, u, d, g, y = (0, l.c)(26),
                        {
                            routeHelper: h
                        } = r.useContext(el.A),
                        B = r.useContext(k.A),
                        {
                            api: z
                        } = r.useContext(O.A).services;
                    y[0] !== B ? (e = (0, m.Dw)(B), y[0] = B, y[1] = e) : e = y[1];
                    let f = e,
                        C = r.useContext(p),
                        b = (0, ez.eL)("new-games");
                    y[2] !== z || y[3] !== f ? (t = async (e, t) => (await z.getNewCarouselGames(f, {
                        page: e,
                        size: t
                    })).games.items, y[2] = z, y[3] = f, y[4] = t) : t = y[4], y[5] !== b || y[6] !== t ? (n = {
                        slug: "new-games",
                        fetchFn: t,
                        pageSize: I.rK,
                        initialGames: b
                    }, y[5] = b, y[6] = t, y[7] = n) : n = y[7];
                    let {
                        forceShowSkeletons: x,
                        fetchMore: w
                    } = function(e) {
                        let t, n, o, a, i, c, s, u = (0, l.c)(24),
                            {
                                slug: d,
                                fetchFn: _,
                                pageSize: m,
                                initialGames: g
                            } = e;
                        u[0] !== g ? (t = void 0 === g ? [] : g, u[0] = g, u[1] = t) : t = u[1];
                        let y = t,
                            h = (0, ez.uS)(d),
                            [B, z] = (0, r.useState)(y),
                            [f, C] = (0, r.useState)(!1),
                            [p, b] = (0, r.useState)(+(y.length > 0)),
                            x = (0, ez.Ni)(),
                            w = (0, ez.eN)(),
                            [k, T] = (0, r.useState)(y);
                        y !== k && (T(y), y.length > 0 && 0 === B.length && (z(y), b(1))), u[2] !== B || u[3] !== x || u[4] !== d ? (n = () => {
                            B.length > 0 && x(d, B)
                        }, o = [B, d, x], u[2] = B, u[3] = x, u[4] = d, u[5] = n, u[6] = o) : (n = u[5], o = u[6]), (0, r.useEffect)(n, o), u[7] !== f || u[8] !== w || u[9] !== d ? (a = () => {
                            w(d, f)
                        }, i = [f, d, w], u[7] = f, u[8] = w, u[9] = d, u[10] = a, u[11] = i) : (a = u[10], i = u[11]), (0, r.useEffect)(a, i), u[12] !== p || u[13] !== _ || u[14] !== B.length || u[15] !== f || u[16] !== h || u[17] !== m || u[18] !== d ? (c = async () => {
                            if (h && B.length >= h || f) return;
                            C(!0);
                            let e = p + 1,
                                t = async () => {
                                    let t = await _(e, m);
                                    t && t.length > 0 && (z(e => {
                                        let n = new Set(e.map(eJ)),
                                            o = [...e, ...t.filter(e => !n.has(e.slug))];
                                        return h ? o.slice(0, h) : o
                                    }), b(e))
                                };
                            await t().catch(e => {
                                console.error(`Failed to fetch more games for carousel ${d}:`, e)
                            }).finally(() => {
                                C(!1)
                            })
                        }, u[12] = p, u[13] = _, u[14] = B.length, u[15] = f, u[16] = h, u[17] = m, u[18] = d, u[19] = c) : c = u[19];
                        let S = c,
                            j = f && 0 === B.length;
                        return u[20] !== S || u[21] !== f || u[22] !== j ? (s = {
                            loading: f,
                            forceShowSkeletons: j,
                            fetchMore: S
                        }, u[20] = S, u[21] = f, u[22] = j, u[23] = s) : s = u[23], s
                    }(n);
                    y[8] !== C ? (o = {
                        carouselSlug: "new-games",
                        isCrawler: C
                    }, y[8] = C, y[9] = o) : o = y[9];
                    let {
                        isInjecting: T
                    } = function(e) {
                        let {
                            carouselSlug: t,
                            isCrawler: n = !1
                        } = e, o = (0, ez.eL)(t), a = (0, ez.rE)(), l = (0, ez.Nn)(), i = (0, eA.U)(), {
                            games: c,
                            isLoading: s
                        } = (0, ev.k)(!n && i), u = (0, r.useRef)(!1), d = (0, r.useRef)([]), _ = (0, r.useRef)(null), [m, g] = (0, r.useState)(!n);
                        return null === _.current && o.length > 0 && (_.current = o), (0, r.useEffect)(() => {
                            n || !i || u.current || g(!0)
                        }, [n, i]), (0, r.useEffect)(() => {
                            if (n || !i) return void g(!1);
                            if (u.current || !_.current || 0 === _.current.length || s) return;
                            if (0 === c.length) return void g(!1);
                            let e = (0, ej.Ji)();
                            return a(t, c, ej.Ud, e), d.current = ej.Ud.slice(0, Math.min(c.length, ej.Ud.length)), u.current = !0, g(!1), () => {
                                d.current.forEach(e => {
                                    l(t, e)
                                }), d.current = [], u.current = !1
                            }
                        }, [t, n, i, c, s, a, l]), {
                            isInjecting: m
                        }
                    }(o), S = x || T, j = (0, m.xl)(B) ? 6 : 2;
                    y[10] !== h ? (i = h.newPageLink(), y[10] = h, y[11] = i) : i = y[11];
                    let v = i;
                    y[12] === Symbol.for("react.memo_cache_sentinel") ? (s = ef.Ru._("common.games.all", {
                        title: ef.Ru._({
                            id: "games.new.title"
                        })
                    }), y[12] = s) : s = y[12];
                    let A = s;
                    y[13] !== B ? (u = (0, m.xl)(B), y[13] = B, y[14] = u) : u = y[14];
                    let P = !u;
                    y[15] !== P ? (d = P ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("img", {
                            src: (0, eI.Ay)("crazygames/Stars.svg"),
                            alt: ""
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(c.x6, {
                                id: "games.new.title"
                            })
                        })]
                    }) : (0, a.jsx)(c.x6, {
                        id: "games.new.title"
                    }), y[15] = P, y[16] = d) : d = y[16];
                    let L = d,
                        G = P ? eZ : void 0,
                        R = P ? ed().mobileNewGamesCarousel : void 0;
                    return y[17] !== w || y[18] !== S || y[19] !== P || y[20] !== v || y[21] !== j || y[22] !== G || y[23] !== R || y[24] !== L ? (g = (0, a.jsx)(_.x, {
                        newClickOrigin: "new",
                        children: (0, a.jsx)(J.s, {
                            dataTestId: eC.hv,
                            slug: "new-games",
                            title: L,
                            linkData: v,
                            allGamesLabel: A,
                            allGamesLinkData: v,
                            slidesToLoadEagerly: j,
                            forceShowSkeletons: S,
                            requestDataFn: w,
                            renderFn: G,
                            isPortrait: P,
                            className: R,
                            removeThumbLabels: e$
                        })
                    }), y[17] = w, y[18] = S, y[19] = P, y[20] = v, y[21] = j, y[22] = G, y[23] = R, y[24] = L, y[25] = g) : g = y[25], g
                };

            function eZ(e) {
                return (0, a.jsx)(eX, {
                    game: e,
                    aspectRatio: "portrait",
                    removeThumbLabels: e$
                }, e.slug)
            }
            var eV = n(50113),
                eQ = n(66182),
                e0 = n(60510),
                e1 = n(46571),
                e2 = n(93800),
                e3 = n(15325),
                e5 = n(43975),
                e4 = n.n(e5);
            let e7 = e => {
                    let t, n, o, i, s, u, d, _, m, g, y, h, z, f, C, b, x, w = (0, l.c)(43),
                        {
                            category: T,
                            loadingCarouselData: S
                        } = e,
                        j = r.useContext(k.A),
                        v = r.useContext(p),
                        {
                            routeHelper: A
                        } = r.useContext(el.A),
                        I = T.tag.slug_en_US,
                        P = `category-${I}`;
                    w[0] !== j ? (t = (0, K.E)(j), w[0] = j, w[1] = t) : t = w[1];
                    let O = t;
                    w[2] !== T.id || w[3] !== T.tag.isCategory || w[4] !== O || w[5] !== P ? (n = {
                        slug: P,
                        categoryId: T.id,
                        isCategory: T.tag.isCategory,
                        pageSize: O
                    }, w[2] = T.id, w[3] = T.tag.isCategory, w[4] = O, w[5] = P, w[6] = n) : n = w[6];
                    let {
                        fetchMore: L
                    } = ex(n), {
                        data: G
                    } = (0, eV.IT)(e3.R1), [R, N] = r.useState(!1);
                    w[7] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
                        N((0, eQ.DH)())
                    }, i = [], w[7] = o, w[8] = i) : (o = w[7], i = w[8]), r.useEffect(o, i);
                    let E = G ? .leaderboardStats ? .totalParticipants || 0;
                    w[9] !== E ? (s = (0, e1.A)(ef.Ru, E, {
                        notation: "compact"
                    }), w[9] = E, w[10] = s) : s = w[10];
                    let D = s,
                        M = G ? .leaderboardStats ? .seasonEndTime || "",
                        H = !v && S,
                        F = T.tag.isCategory;
                    w[11] !== F || w[12] !== A || w[13] !== I ? (u = A.tagOrCategoryPageDirectLink(I, F), w[11] = F, w[12] = A, w[13] = I, w[14] = u) : u = w[14];
                    let W = u;
                    w[15] !== T.tag.title ? (d = ef.Ru._("common.games.all", {
                        title: T.tag.title
                    }), w[15] = T.tag.title, w[16] = d) : d = w[16];
                    let U = d;
                    w[17] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
                        className: e4().leaderboardsBackground,
                        children: (0, a.jsx)("img", {
                            className: e4().backgroundImage,
                            src: (0, eI.Ay)("assets/PNG/leaderboards-page-back.png", {
                                width: 730
                            }),
                            srcSet: (0, eI.Wn)("assets/PNG/leaderboards-page-back.png", {
                                width: 730
                            })
                        })
                    }), w[17] = _) : _ = w[17];
                    let q = _,
                        Y = T.tag.title;
                    w[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, B.A)(e4().pillContainer, e4().participants), g = (0, a.jsx)(e2.A, {
                        name: "3users"
                    }), w[18] = m, w[19] = g) : (m = w[18], g = w[19]), w[20] !== R || w[21] !== D ? (y = (0, a.jsxs)("div", {
                        className: m,
                        children: [g, R ? (0, a.jsx)(c.x6, {
                            id: "common.carousel.leaderboards.newSeason"
                        }) : (0, a.jsx)(c.x6, {
                            id: "common.carousel.leaderboards.numberRanked",
                            values: {
                                number: D
                            }
                        })]
                    }), w[20] = R, w[21] = D, w[22] = y) : y = w[22], w[23] !== M ? (h = (0, a.jsx)(e0.A, {
                        endDate: M,
                        addLabel: !0
                    }), w[23] = M, w[24] = h) : h = w[24], w[25] !== y || w[26] !== h ? (z = (0, a.jsxs)("div", {
                        className: e4().pillsContainer,
                        children: [y, h]
                    }), w[25] = y, w[26] = h, w[27] = z) : z = w[27], w[28] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("div", {
                        className: e4().subtitle,
                        children: (0, a.jsx)(c.x6, {
                            id: "common.carousel.leaderboards.subtitle"
                        })
                    }), w[28] = f) : f = w[28], w[29] !== z ? (C = (0, a.jsxs)("div", {
                        className: e4().leaderboardsSubtitle,
                        children: [z, f]
                    }), w[29] = z, w[30] = C) : C = w[30], w[31] !== T.tag.title || w[32] !== W || w[33] !== C ? (b = (0, a.jsx)(eb.A, {
                        iconSrc: "assets/PNG/intent-cta/square-icons/3x/be-the-best.png",
                        title: Y,
                        linkData: W,
                        prefetch: !1,
                        subtitle: C
                    }), w[31] = T.tag.title, w[32] = W, w[33] = C, w[34] = b) : b = w[34];
                    let X = b,
                        $ = `${eC.oL}${I}`;
                    return w[35] !== U || w[36] !== L || w[37] !== W || w[38] !== H || w[39] !== P || w[40] !== $ || w[41] !== X ? (x = (0, a.jsx)(J.s, {
                        dataTestId: $,
                        slug: P,
                        replaceTitleWithElement: X,
                        linkData: W,
                        allGamesLabel: U,
                        allGamesLinkData: W,
                        forceShowSkeletons: H,
                        requestDataFn: L,
                        appendElement: q,
                        className: e4().leaderboardsContainer
                    }), w[35] = U, w[36] = L, w[37] = W, w[38] = H, w[39] = P, w[40] = $, w[41] = X, w[42] = x) : x = w[42], x
                },
                e6 = e => {
                    let t, n, o, i, c, s = (0, l.c)(21),
                        {
                            category: u,
                            loadingCarouselData: d
                        } = e,
                        _ = r.useContext(k.A),
                        m = r.useContext(p),
                        {
                            routeHelper: g
                        } = r.useContext(el.A),
                        y = u.tag.slug_en_US,
                        h = `category-${y}`;
                    s[0] !== _ ? (t = (0, K.E)(_), s[0] = _, s[1] = t) : t = s[1];
                    let B = t;
                    s[2] !== u.id || s[3] !== u.tag.isCategory || s[4] !== B || s[5] !== h ? (n = {
                        slug: h,
                        categoryId: u.id,
                        isCategory: u.tag.isCategory,
                        pageSize: B
                    }, s[2] = u.id, s[3] = u.tag.isCategory, s[4] = B, s[5] = h, s[6] = n) : n = s[6];
                    let {
                        fetchMore: z
                    } = ex(n), f = !m && d;
                    s[7] !== u.tag.isCategory || s[8] !== g || s[9] !== y ? (o = g.tagOrCategoryPageDirectLink(y, u.tag.isCategory), s[7] = u.tag.isCategory, s[8] = g, s[9] = y, s[10] = o) : o = s[10];
                    let C = o;
                    s[11] !== u.tag.title ? (i = ef.Ru._("common.games.all", {
                        title: u.tag.title
                    }), s[11] = u.tag.title, s[12] = i) : i = s[12];
                    let b = i,
                        x = `${eC.oL}${y}`;
                    return s[13] !== b || s[14] !== u.tag.title || s[15] !== z || s[16] !== C || s[17] !== f || s[18] !== h || s[19] !== x ? (c = (0, a.jsx)(J.s, {
                        dataTestId: x,
                        slug: h,
                        title: u.tag.title,
                        linkData: C,
                        allGamesLabel: b,
                        allGamesLinkData: C,
                        forceShowSkeletons: f,
                        requestDataFn: z
                    }), s[13] = b, s[14] = u.tag.title, s[15] = z, s[16] = C, s[17] = f, s[18] = h, s[19] = x, s[20] = c) : c = s[20], c
                },
                e9 = r.memo(e => {
                    let t, n, o = (0, l.c)(7),
                        {
                            category: r,
                            loadingCarouselData: i
                        } = e,
                        c = "climb-the-ranks" === r.tag.slug_en_US;
                    return o[0] !== r || o[1] !== c || o[2] !== i ? (t = c ? (0, a.jsx)(e7, {
                        category: r,
                        loadingCarouselData: i
                    }) : (0, a.jsx)(e6, {
                        category: r,
                        loadingCarouselData: i
                    }), o[0] = r, o[1] = c, o[2] = i, o[3] = t) : t = o[3], o[4] !== r.tag.slug_en_US || o[5] !== t ? (n = (0, a.jsx)(_.x, {
                        newClickOrigin: r.tag.slug_en_US,
                        children: t
                    }), o[4] = r.tag.slug_en_US, o[5] = t, o[6] = n) : n = o[6], n
                }),
                e8 = "b5d51a54-a663-4945-ad7f-c8ef16448263",
                te = "713bfa03-88e7-4927-b130-41511b8a335d",
                tt = "46bc6664-8026-498d-a958-3370bd5049d9",
                tn = r.memo(() => {
                    let e = (0, ez.kt)(),
                        t = r.useContext(p),
                        n = eB(),
                        {
                            locale: o
                        } = r.useContext(Z.A),
                        c = r.useContext(k.A),
                        {
                            loadingUser: s
                        } = r.useContext(D.R),
                        {
                            getBecauseYouPlayedGames: u,
                            shouldUseBecauseYouPlayed: d
                        } = (() => {
                            let e, t, n, o, a, c, s, u, d, _ = (0, l.c)(14);
                            _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                                skip: !0
                            }, _[0] = e) : e = _[0];
                            let {
                                refetch: g
                            } = P.Xf(e), {
                                getModelGames: y
                            } = (0, et.A)(), {
                                loadingUser: h
                            } = r.useContext(D.R), B = r.useContext(k.A), z = (0, m.Fr)(B) ? Q.fU : Q.TS;
                            if (_[1] === Symbol.for("react.memo_cache_sentinel")) {
                                let e;
                                (e = {
                                    resolve: e => {},
                                    reject: e => {},
                                    promise: null
                                }).promise = new Promise((t, n) => {
                                    e.resolve = t, e.reject = n
                                }), t = e, _[1] = t
                            } else t = _[1];
                            let f = r.useRef(t);
                            _[2] !== h ? (n = () => {
                                h || f.current.resolve()
                            }, o = [h], _[2] = h, _[3] = n, _[4] = o) : (n = _[3], o = _[4]), r.useEffect(n, o);
                            let C = r.useRef(g);
                            _[5] !== g ? (a = () => {
                                C.current = g
                            }, c = [g], _[5] = g, _[6] = a, _[7] = c) : (a = _[6], c = _[7]), r.useEffect(a, c), _[8] === Symbol.for("react.memo_cache_sentinel") ? (s = async () => {
                                await f.current.promise;
                                let e = await C.current(),
                                    t = eo(e.data);
                                return {
                                    shouldUse: (0, i.O)(t) && t.length > 0,
                                    queryResult: e.data
                                }
                            }, _[8] = s) : s = _[8];
                            let p = s;
                            _[9] !== y || _[10] !== z ? (u = async e => {
                                let t = eo(e);
                                if (!(0, i.O)(t) || 0 === t.length) return null;
                                let n = t.filter(ea);
                                0 === n.length && (en = [], n = t);
                                let o = n[Math.floor(Math.random() * n.length)],
                                    a = await y({
                                        gameId: o.id,
                                        numGames: z,
                                        place: "homePage_gamePage"
                                    });
                                return en.push(o.id), (0, i.O)(a) && (a.items = a.items.slice(0, I.eB)), {
                                    suggestedGames: a,
                                    sourceGame: {
                                        name: o.name,
                                        slug: o.slug
                                    }
                                }
                            }, _[9] = y, _[10] = z, _[11] = u) : u = _[11];
                            let b = u;
                            return _[12] !== b ? (d = {
                                getBecauseYouPlayedGames: b,
                                shouldUseBecauseYouPlayed: p
                            }, _[12] = b, _[13] = d) : d = _[13], d
                        })(),
                        {
                            getModelGames: _
                        } = (0, V.A)(),
                        g = (0, ez.Ni)(),
                        y = (0, ez.Y7)(),
                        [h, B] = r.useState({
                            state: "loading"
                        }),
                        [z, f] = r.useState(!1),
                        C = (0, K.E)(c),
                        b = r.useEffectEvent(() => t);
                    if (r.useEffect(() => {
                            (async () => {
                                if (!e ? .length) return;
                                if (b()) return f(!0);
                                let {
                                    shouldUse: t,
                                    queryResult: n
                                } = await d(), o = _({
                                    place: "homePage_categoryCarousel",
                                    filters: e.map(e => ({
                                        category: e.tag.isCategory ? e.id : void 0,
                                        tag: e.tag.isCategory ? void 0 : e.id,
                                        pagination: {
                                            page: 1,
                                            size: C
                                        },
                                        totalListSize: I.eB
                                    }))
                                });
                                if (t && n) {
                                    let t = u(n),
                                        [a, l] = await Promise.all([o, t]);
                                    if ((0, i.O)(l) && (0, i.O)(l.suggestedGames)) {
                                        let {
                                            sourceGame: e,
                                            suggestedGames: t
                                        } = l;
                                        r.startTransition(() => B({
                                            state: "enabled",
                                            sourceGame: e,
                                            games: t
                                        }))
                                    } else r.startTransition(() => B({
                                        state: "disabled"
                                    }));
                                    a && e.forEach(e => {
                                        let t = e.tag.slug_en_US,
                                            n = `category-${t}`,
                                            o = a[e.id],
                                            l = o ? .items || [];
                                        y(n, o ? .total ? ? 0), l.length > 0 && g(n, l)
                                    })
                                } else {
                                    let t = await o;
                                    r.startTransition(() => B({
                                        state: "disabled"
                                    })), t && e.forEach(e => {
                                        let n = e.tag.slug_en_US,
                                            o = `category-${n}`,
                                            a = t[e.id],
                                            l = a ? .items || [];
                                        y(o, a ? .total ? ? 0), l.length > 0 && g(o, l)
                                    })
                                }
                                f(!0)
                            })()
                        }, [e, _, C, u, d, g, y, o]), !e ? .length) return null;
                    let x = e.filter(e => !["7a08b313-2b2f-4042-9135-821d47ad8668", e8, te, tt, $.lC, $.ti].includes(e.id)),
                        w = e.find(e => e.id === e8),
                        T = e.find(e => e.id === te),
                        S = e.find(e => e.id === tt),
                        j = "enabled" === h.state && (0, i.O)(h.games) && h.games.items.length > 0,
                        v = {
                            loadingCarouselData: !z || s
                        };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [j ? (0, a.jsx)(ey, {
                            games: h.games.items,
                            sourceGameName: h.sourceGame.name,
                            sourceGameSlug: h.sourceGame.slug
                        }) : w && (0, a.jsx)(e9, {
                            category: w,
                            ...v
                        }, `category-${w.tag.slug_en_US}`), "category" === n && (0, a.jsx)(eK, {}), T && (0, a.jsx)(e9, {
                            category: T,
                            ...v
                        }, `category-${T.tag.slug_en_US}`), S && (0, a.jsx)(e9, {
                            category: S,
                            ...v
                        }, `category-${S.tag.slug_en_US}`), (0, a.jsx)(eS, {}), x.map(e => (0, a.jsx)(e9, {
                            category: e,
                            ...v
                        }, `category-${e.tag.slug_en_US}`))]
                    })
                });
            var to = n(7842),
                ta = n(39890);
            let tl = e => {
                let t, n, o, i, c, s = (0, l.c)(11),
                    {
                        pageSize: u
                    } = e,
                    d = (0, r.useContext)(k.A);
                s[0] !== d ? (t = (0, m.xl)(d), s[0] = d, s[1] = t) : t = s[1];
                let _ = !t && ed().isMobile;
                return s[2] !== _ ? (n = (0, B.A)(ed().gamesCarouselSection, _), s[2] = _, s[3] = n) : n = s[3], s[4] !== u ? (o = (0, ta.A)(u).map(tr), s[4] = u, s[5] = o) : o = s[5], s[6] !== o ? (i = (0, a.jsx)("div", {
                    className: ed().crazyCarouselRoot,
                    children: (0, a.jsx)("ul", {
                        className: ed().crazyCarouselContainer,
                        children: o
                    })
                }), s[6] = o, s[7] = i) : i = s[7], s[8] !== n || s[9] !== i ? (c = (0, a.jsx)("div", {
                    className: n,
                    children: i
                }), s[8] = n, s[9] = i, s[10] = c) : c = s[10], c
            };

            function tr(e) {
                return (0, a.jsx)("li", {
                    children: (0, a.jsx)(eF.A, {})
                }, `skeleton-${e}`)
            }

            function ti(e) {
                return e.isIntersecting
            }

            function tc(e) {
                return e.carousels.items.filter(ts)
            }

            function ts(e) {
                return "tag" === e.type
            }
            let tu = e => {
                let t, n, o, i, c, s, u, d, m = (0, l.c)(30),
                    {
                        categoryData: g,
                        modelGames: y,
                        totalGames: h
                    } = e,
                    B = r.useContext(k.A),
                    {
                        routeHelper: z
                    } = r.useContext(el.A);
                m[0] !== B ? (t = (0, K.E)(B), m[0] = B, m[1] = t) : t = m[1];
                let f = t,
                    {
                        tag: C
                    } = g,
                    p = C.slug_en_US,
                    b = `lazy-category-${p}`,
                    x = Math.min(I.eB, h),
                    w = (0, ez.u_)(),
                    T = (0, r.useRef)(!1);
                m[2] !== w || m[3] !== x || m[4] !== y || m[5] !== f || m[6] !== b ? (n = () => {
                    y.length > 0 && !T.current && (T.current = !0, w({
                        slug: b,
                        pageSize: f,
                        maxItems: x
                    }, y))
                }, o = [y, b, f, x, w], m[2] = w, m[3] = x, m[4] = y, m[5] = f, m[6] = b, m[7] = n, m[8] = o) : (n = m[7], o = m[8]), (0, r.useEffect)(n, o), m[9] !== g.id || m[10] !== f || m[11] !== b || m[12] !== C.isCategory ? (i = {
                    slug: b,
                    categoryId: g.id,
                    isCategory: C.isCategory,
                    pageSize: f
                }, m[9] = g.id, m[10] = f, m[11] = b, m[12] = C.isCategory, m[13] = i) : i = m[13];
                let {
                    fetchMore: S
                } = ex(i);
                m[14] !== z || m[15] !== p || m[16] !== C.isCategory ? (c = z.tagOrCategoryPageDirectLink(p, C.isCategory), m[14] = z, m[15] = p, m[16] = C.isCategory, m[17] = c) : c = m[17];
                let j = c;
                m[18] !== C.title ? (s = ef.Ru._("common.games.all", {
                    title: C.title
                }), m[18] = C.title, m[19] = s) : s = m[19];
                let v = s,
                    A = 0 === y.length;
                return m[20] !== v || m[21] !== S || m[22] !== A || m[23] !== j || m[24] !== b || m[25] !== C.title ? (u = (0, a.jsx)(J.s, {
                    slug: b,
                    title: C.title,
                    linkData: j,
                    allGamesLabel: v,
                    allGamesLinkData: j,
                    forceShowSkeletons: A,
                    requestDataFn: S
                }), m[20] = v, m[21] = S, m[22] = A, m[23] = j, m[24] = b, m[25] = C.title, m[26] = u) : u = m[26], m[27] !== u || m[28] !== C.slug_en_US ? (d = (0, a.jsx)(_.x, {
                    newClickOrigin: C.slug_en_US,
                    children: u
                }), m[27] = u, m[28] = C.slug_en_US, m[29] = d) : d = m[29], d
            };
            var td = n(77455),
                t_ = n.n(td);
            let tm = f()(() => Promise.all([n.e(61006), n.e(79382)]).then(n.bind(n, 79382)), {
                    loadableGenerated: {
                        webpack: () => [79382]
                    },
                    loading: () => null,
                    ssr: !1
                }),
                tg = () => {
                    let e, t, n, o, i, c, s, u, d, _ = (0, l.c)(27),
                        g = r.useContext(k.A),
                        {
                            getModelGames: y
                        } = (0, V.A)(),
                        {
                            carouselBatches: h,
                            isLoading: B,
                            isComplete: z,
                            observerRef: f,
                            pageSize: C
                        } = function() {
                            let e, t, n, o, a, i = (0, l.c)(14),
                                {
                                    api: c
                                } = (0, r.useContext)(O.A).services,
                                s = (0, r.useContext)(k.A),
                                u = (0, r.useRef)(null),
                                [d, _] = (0, r.useState)(!1),
                                [g, y] = (0, r.useState)(!1);
                            i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], i[0] = e) : e = i[0];
                            let [h, B] = (0, r.useState)(e);
                            i[1] !== s ? (t = (0, K.E)(s), i[1] = s, i[2] = t) : t = i[2];
                            let z = t;
                            return i[3] !== c || i[4] !== s || i[5] !== d || i[6] !== z ? (n = () => {
                                let e, t, n = [],
                                    o = !1,
                                    a = !1,
                                    l = e => {
                                        console.error("Failed to fetch lazy carousels:", e), _(!0), o = !1, y(!1)
                                    },
                                    i = async () => {
                                        if (d || o) return;
                                        o = !0, y(!0);
                                        let e = n[n.length - 1] ? .carousels.pagination.page || 0,
                                            u = await c.getLazyCarousels(z, {
                                                page: e + 1,
                                                size: 6
                                            }, (0, m.Dw)(s)),
                                            g = (n = n.concat(u)).map(tc),
                                            h = u.carousels.total <= u.carousels.pagination.page * u.carousels.pagination.size;
                                        o = !1, (0, r.startTransition)(() => {
                                            B(g), y(!1), h && _(!0)
                                        }), h || (t = window.setTimeout(() => {
                                            a && i().catch(l)
                                        }, 400))
                                    };
                                return u.current && !d && (e = new window.IntersectionObserver(e => {
                                    e.some(ti) ? (a = !0, i().catch(l), y(!0)) : (a = !1, y(!1))
                                }, {
                                    root: null,
                                    threshold: .1,
                                    rootMargin: (0, m.xl)(s) ? "500px 0px" : "300px 0px"
                                })).observe(u.current), () => {
                                    e && e.disconnect(), t && window.clearTimeout(t)
                                }
                            }, o = [u, s, z, d, c], i[3] = c, i[4] = s, i[5] = d, i[6] = z, i[7] = n, i[8] = o) : (n = i[7], o = i[8]), (0, r.useEffect)(n, o), i[9] !== h || i[10] !== d || i[11] !== g || i[12] !== z ? (a = {
                                carouselBatches: h,
                                isLoading: g,
                                isComplete: d,
                                observerRef: u,
                                pageSize: z
                            }, i[9] = h, i[10] = d, i[11] = g, i[12] = z, i[13] = a) : a = i[13], a
                        }();
                    _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {}, _[0] = e) : e = _[0];
                    let [p, b] = (0, r.useState)(e);
                    _[1] !== h ? (t = h.flat(), _[1] = h, _[2] = t) : t = _[2];
                    let x = t;
                    _[3] !== x ? (n = x.filter(ty).map(th).sort(tB), _[3] = x, _[4] = n) : n = _[4];
                    let w = n;
                    if (_[5] !== y || _[6] !== C || _[7] !== w ? (o = () => {
                            (async () => {
                                if (0 === w.length) return;
                                let e = await y({
                                    place: "homePage_categoryCarousel",
                                    filters: w.map(e => ({
                                        category: e.isCategory ? e.id : void 0,
                                        tag: e.isCategory ? void 0 : e.id,
                                        pagination: {
                                            page: 1,
                                            size: C
                                        },
                                        totalListSize: I.eB
                                    }))
                                });
                                e && (0, r.startTransition)(() => b(e))
                            })()
                        }, i = [y, C, w], _[5] = y, _[6] = C, _[7] = w, _[8] = o, _[9] = i) : (o = _[8], i = _[9]), (0, r.useEffect)(o, i), _[10] !== x || _[11] !== p) {
                        let e;
                        _[13] !== p ? (e = (e, t) => {
                            let {
                                id: n,
                                tag: o
                            } = e.data, l = o.slug_en_US, r = `${l}_${t}`, i = p[n];
                            return (0, a.jsx)(tu, {
                                categoryData: e.data,
                                modelGames: i ? .items || [],
                                totalGames: i ? .total || 0
                            }, r)
                        }, _[13] = p, _[14] = e) : e = _[14], c = x.map(e), _[10] = x, _[11] = p, _[12] = c
                    } else c = _[12];
                    return _[15] !== f ? (s = (0, a.jsx)("div", {
                        className: t_().observer,
                        ref: f
                    }, "observer"), _[15] = f, _[16] = s) : s = _[16], _[17] !== h.length || _[18] !== g || _[19] !== z || _[20] !== B || _[21] !== C ? (u = z ? (0, a.jsx)("div", {
                        className: (0, m.Fr)(g) ? t_().footerSpacerMobile : t_().footerSpacerDesktop,
                        children: (0, a.jsx)(tm, {})
                    }) : (0, a.jsxs)("div", {
                        children: [(0, ta.A)(2).map(e => (0, a.jsx)(tl, {
                            pageSize: C
                        }, `skeleton-carousel-${e}`)), (0, a.jsx)("div", {
                            className: t_().loadingContainer,
                            children: B && (0, a.jsx)(to.y, {
                                tone: "neutral"
                            })
                        })]
                    }, `progress-${h.length+1}`), _[17] = h.length, _[18] = g, _[19] = z, _[20] = B, _[21] = C, _[22] = u) : u = _[22], _[23] !== c || _[24] !== s || _[25] !== u ? (d = (0, a.jsxs)(a.Fragment, {
                        children: [c, s, u]
                    }), _[23] = c, _[24] = s, _[25] = u, _[26] = d) : d = _[26], d
                };

            function ty(e) {
                return "tag" === e.type && e.data ? .tag ? .id !== null
            }

            function th(e) {
                return {
                    id: e.data.id,
                    isCategory: e.data.tag.isCategory,
                    slug: e.data.tag.slug_en_US
                }
            }

            function tB(e, t) {
                return e.id.localeCompare(t.id)
            }
            let tz = () => {
                let e, t, n, o = (0, l.c)(9),
                    i = (0, r.useContext)(k.A);
                o[0] !== i ? (e = (0, m.xl)(i), o[0] = i, o[1] = e) : e = o[1];
                let s = !e;
                o[2] !== s ? (t = s ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        src: (0, eI.Ay)("crazygames/Star.svg"),
                        alt: ""
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(c.x6, {
                            id: "games.featured.title"
                        })
                    })]
                }) : (0, a.jsx)(c.x6, {
                    id: "games.featured.title"
                }), o[2] = s, o[3] = t) : t = o[3];
                let u = t,
                    d = s ? ed().mobileFeaturedCarousel : void 0,
                    g = s ? tf : void 0;
                return o[4] !== s || o[5] !== d || o[6] !== g || o[7] !== u ? (n = (0, a.jsx)(_.x, {
                    newClickOrigin: "featured",
                    children: (0, a.jsx)(J.s, {
                        dataTestId: eC.Th,
                        slug: "featured",
                        title: u,
                        isPortrait: s,
                        className: d,
                        isMobileSkeletonEnabled: !0,
                        renderFn: g
                    })
                }), o[4] = s, o[5] = d, o[6] = g, o[7] = u, o[8] = n) : n = o[8], n
            };

            function tf(e) {
                return (0, a.jsx)(eX, {
                    game: e,
                    aspectRatio: "portrait"
                }, e.slug)
            }
            var tC = n(68406);
            let tp = () => {
                let e, t, n = (0, l.c)(4),
                    o = (0, ez.kt)();
                n[0] !== o ? (e = o.find(tb), n[0] = o, n[1] = e) : e = n[1];
                let r = e;
                return (0, tC.E)() && r ? (n[2] !== r ? (t = (0, a.jsx)(e9, {
                    category: r,
                    loadingCarouselData: !1
                }), n[2] = r, n[3] = t) : t = n[3], t) : null
            };

            function tb(e) {
                return e.id === $.ti
            }
            let tx = "homepage_topCarousels",
                tw = () => {
                    let e, t, n, o, a, i, c = (0, l.c)(19),
                        {
                            modelService: s,
                            experimentService: u
                        } = (0, r.useContext)(O.A).services;
                    c[0] !== u ? (e = u.getModelName(tx), c[0] = u, c[1] = e) : e = c[1];
                    let d = e;
                    c[2] !== u ? (t = u.getModelName("homePage_gamePage"), c[2] = u, c[3] = t) : t = c[3];
                    let _ = t,
                        m = (0, ez.Ni)(),
                        g = (0, ez.eN)(),
                        y = (0, ez.uS)("recommended") ? ? 0,
                        h = (0, ez.uS)("featured") ? ? 0,
                        B = (0, r.useContext)(k.A),
                        {
                            countryCode: z
                        } = (0, r.useContext)(L.A),
                        {
                            loading: f
                        } = (0, r.useContext)(j.oJ),
                        {
                            clusterMap: C
                        } = P.lF(),
                        p = (0, r.useRef)(C);
                    return c[4] !== C ? (n = () => {
                        p.current = C
                    }, o = [C], c[4] = C, c[5] = n, c[6] = o) : (n = c[5], o = c[6]), (0, r.useEffect)(n, o), c[7] !== z || c[8] !== B || c[9] !== d || c[10] !== h || c[11] !== f || c[12] !== s || c[13] !== _ || c[14] !== m || c[15] !== g || c[16] !== y ? (a = () => {
                        if (f) return;
                        let e = ee.A.getInstance().getGameIds();
                        (async () => {
                            let t = await s.getTopCarouselsRecommendations(d, _, B, z, p.current, {
                                place: tx,
                                filters: {
                                    topPicks: {
                                        baseGames: e,
                                        size: y
                                    },
                                    featured: {
                                        size: h
                                    }
                                }
                            });
                            t ? (m("recommended", t.topPicks.items), g("recommended", !1), m("featured", t.featured.items), g("featured", !1)) : console.error("Failed to fetch top carousels recommendations")
                        })()
                    }, i = [f, y, h, s, m, g, d, _, B, z], c[7] = z, c[8] = B, c[9] = d, c[10] = h, c[11] = f, c[12] = s, c[13] = _, c[14] = m, c[15] = g, c[16] = y, c[17] = a, c[18] = i) : (a = c[17], i = c[18]), (0, r.useEffect)(a, i), null
                },
                tk = "CrazyGames Originals",
                tT = ["originals"],
                tS = () => {
                    let e, t, n, o, i = (0, l.c)(11),
                        {
                            routeHelper: c
                        } = r.useContext(el.A),
                        s = r.useContext(k.A);
                    i[0] !== c ? (e = c.originalsPageLink(1), i[0] = c, i[1] = e) : e = i[1];
                    let u = e;
                    i[2] !== s ? (t = (0, m.xl)(s), i[2] = s, i[3] = t) : t = i[3];
                    let d = !t,
                        {
                            forceShowSkeletons: g
                        } = (() => {
                            let e, t, n, o, a, i, c, s = (0, l.c)(15),
                                {
                                    originalsModelGames: u,
                                    loadingModelGames: d
                                } = (0, r.useContext)(N),
                                _ = (0, ez.eL)("originals"),
                                m = (0, ez.Ni)(),
                                g = (0, ez.eN)(),
                                y = u.length > 0 && !d,
                                h = 0 === _.length && !y;
                            s[0] !== y || s[1] !== u || s[2] !== m ? (e = () => {
                                y && m("originals", u)
                            }, t = [y, u, m], s[0] = y, s[1] = u, s[2] = m, s[3] = e, s[4] = t) : (e = s[3], t = s[4]), (0, r.useEffect)(e, t), s[5] !== h || s[6] !== g ? (n = () => {
                                g("originals", h)
                            }, o = [h, g], s[5] = h, s[6] = g, s[7] = n, s[8] = o) : (n = s[7], o = s[8]), (0, r.useEffect)(n, o);
                            let [B, z] = (0, r.useState)(!h);
                            s[9] !== h || s[10] !== B ? (a = () => {
                                B || h || (0, r.startTransition)(() => z(!0))
                            }, i = [B, h], s[9] = h, s[10] = B, s[11] = a, s[12] = i) : (a = s[11], i = s[12]), (0, r.useEffect)(a, i);
                            let f = !B;
                            return s[13] !== f ? (c = {
                                forceShowSkeletons: f
                            }, s[13] = f, s[14] = c) : c = s[14], c
                        })();
                    i[4] !== d ? (n = d ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("img", {
                            src: (0, eI.Ay)("crazygames/ziggy_animated.svg"),
                            alt: ""
                        }), (0, a.jsx)("div", {
                            children: tk
                        })]
                    }) : tk, i[4] = d, i[5] = n) : n = i[5];
                    let y = n,
                        h = d ? ed().mobileOriginalsCarousel : ed().originalsCarousel;
                    return i[6] !== g || i[7] !== u || i[8] !== h || i[9] !== y ? (o = (0, a.jsx)(_.x, {
                        newClickOrigin: "originals",
                        children: (0, a.jsx)(J.s, {
                            slug: "originals",
                            title: y,
                            linkData: u,
                            isPortrait: !0,
                            forceShowSkeletons: g,
                            className: h,
                            renderFn: tj,
                            dataTestId: eC.rv,
                            removeThumbLabels: tT,
                            prefetch: !1
                        })
                    }), i[6] = g, i[7] = u, i[8] = h, i[9] = y, i[10] = o) : o = i[10], o
                };

            function tj(e) {
                return (0, a.jsx)(eX, {
                    game: e,
                    aspectRatio: "portrait",
                    removeThumbLabels: tT
                }, e.slug)
            }
            var tv = n(27190),
                tA = n(80769),
                tI = n.n(tA);
            let tP = () => Promise.all([n.e(22821), n.e(67592), n.e(61019), n.e(57148), n.e(76592)]).then(n.bind(n, 76592)),
                tO = f()(tP, {
                    ssr: !1,
                    loading: () => (0, a.jsx)("div", {
                        className: (0, B.A)(tI().placeholder, tI().desktopPlaceholder)
                    })
                }),
                tL = f()(tP, {
                    ssr: !1,
                    loading: () => (0, a.jsx)("div", {
                        className: (0, B.A)(tI().placeholder, tI().mobilePlaceholder)
                    })
                }),
                tG = () => {
                    let e, t = (0, l.c)(1);
                    return (0, tv.T)() ? (t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                        className: tI().mobileSlot,
                        children: (0, a.jsx)(tL, {
                            variant: "mobile"
                        })
                    }), t[0] = e) : e = t[0], e) : null
                };
            var tR = n(17277),
                tN = n(96912),
                tE = n(50190),
                tD = n(79361),
                tM = n(83509),
                tH = n.n(tM);
            let tF = () => {
                let e, t, n, o, i = (0, l.c)(12),
                    [s, u] = r.useState(void 0),
                    [d, _] = r.useState(!0),
                    {
                        getModelCountryCode: m
                    } = R();
                i[0] !== m ? (e = () => {
                    m("homePage_recommendedCarousel").then(e => {
                        u(e)
                    }).catch(tW).finally(() => {
                        _(!1)
                    })
                }, t = [m], i[0] = m, i[1] = e, i[2] = t) : (e = i[1], t = i[2]), r.useEffect(e, t);
                let {
                    countryCode: g
                } = r.useContext(L.A), y = (0, tE.A)(), {
                    loading: h
                } = r.useContext(j.oJ), B = y ? (0, tD.of)(h) : "pending", z = "personalized" === B;
                if ("pending" === B || !z && d) {
                    let e;
                    i[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                        className: tH().loaderWrapper,
                        children: (0, a.jsx)(H.A, {})
                    }), i[3] = e) : e = i[3], n = e
                } else if (z) {
                    let e;
                    i[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(c.x6, {
                        id: "games.recommendedForYou.title"
                    }), i[4] = e) : e = i[4], n = e
                } else {
                    let e, t;
                    i[5] !== g || i[6] !== s ? (e = (0, tR.wC)(s, g), i[5] = g, i[6] = s, i[7] = e) : e = i[7];
                    let o = e;
                    i[8] !== o ? (t = o ? (0, a.jsx)(c.x6, {
                        id: "games.recommendedForYou.titleFirstSession",
                        values: {
                            countryFlag: (0, a.jsx)("span", {
                                className: tH().flag,
                                children: (0, a.jsx)(tN.A, {
                                    code: o
                                })
                            })
                        }
                    }) : (0, a.jsx)(c.x6, {
                        id: "games.recommendedForYou.titleFirstSessionNoCountry"
                    }), i[8] = o, i[9] = t) : t = i[9], n = t
                }
                return i[10] !== n ? (o = (0, a.jsx)(es.A, {
                    label: (0, a.jsx)("span", {
                        children: n
                    }),
                    className: tH().recommendedTitle
                }), i[10] = n, i[11] = o) : o = i[11], o
            };

            function tW(e) {
                console.error(e)
            }
            let tU = e => {
                let t, n, o, r, i, c = (0, l.c)(4),
                    {
                        useOnboarding: s
                    } = e,
                    u = (r = (0, l.c)(2), i = (0, tv.T)(), r[0] !== i ? (o = i ? (0, a.jsx)(tO, {
                        variant: "desktop"
                    }) : void 0, r[0] = i, r[1] = o) : o = r[1], o);
                c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(tF, {}), c[0] = t) : t = c[0];
                let d = !s;
                return c[1] !== u || c[2] !== d ? (n = (0, a.jsx)(_.x, {
                    newClickOrigin: "recommended",
                    children: (0, a.jsx)(J.s, {
                        slug: "recommended",
                        replaceTitleWithElement: t,
                        highlightedMode: d,
                        leadingElement: u,
                        requestDataThreshold: 2,
                        dataTestId: eC.GE
                    })
                }), c[1] = u, c[2] = d, c[3] = n) : n = c[3], n
            };
            var tq = n(9314);

            function tY() {
                return (0, r.useContext)(tq.f)
            }
            let tX = () => {
                let e, t, n = (0, l.c)(4),
                    o = (0, ez.kt)();
                n[0] !== o ? (e = o.find(tJ), n[0] = o, n[1] = e) : e = n[1];
                let r = e,
                    {
                        isWorldCupSeason: i
                    } = tY();
                return i && r ? (n[2] !== r ? (t = (0, a.jsx)(e9, {
                    category: r,
                    loadingCarouselData: !1
                }), n[2] = r, n[3] = t) : t = n[3], t) : null
            };

            function tJ(e) {
                return e.id === $.lC
            }
            let t$ = e => {
                let t, n = (0, l.c)(1),
                    {
                        slot: o
                    } = e;
                return function() {
                    let {
                        isWorldCupKeyMatch: e
                    } = tY();
                    return e ? "elevated" : "default"
                }() !== o ? null : (n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(tX, {}), n[0] = t) : t = n[0], t)
            };
            var tK = n(10610),
                tZ = n.n(tK);
            let tV = e => {
                let t, n, o, r, i, c, s, u, d, _, m = (0, l.c)(14),
                    {
                        useOnboarding: g
                    } = e,
                    y = eB();
                return m[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                    className: tZ().space
                }), n = (0, a.jsx)(tw, {}), m[0] = t, m[1] = n) : (t = m[0], n = m[1]), m[2] !== g ? (o = (0, a.jsx)(tU, {
                    useOnboarding: g
                }), m[2] = g, m[3] = o) : o = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(tz, {}), i = (0, a.jsx)(tp, {}), c = (0, a.jsx)(t$, {
                    slot: "elevated"
                }), m[4] = r, m[5] = i, m[6] = c) : (r = m[4], i = m[5], c = m[6]), m[7] !== y ? (s = "top" === y && (0, a.jsx)(eK, {}), m[7] = y, m[8] = s) : s = m[8], m[9] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(tS, {}), d = (0, a.jsx)(t$, {
                    slot: "default"
                }), m[9] = u, m[10] = d) : (u = m[9], d = m[10]), m[11] !== o || m[12] !== s ? (_ = (0, a.jsxs)(a.Fragment, {
                    children: [t, n, o, r, i, c, s, u, d]
                }), m[11] = o, m[12] = s, m[13] = _) : _ = m[13], _
            };
            var tQ = n(71543);
            let t0 = r.memo(e => {
                    let {
                        games: t
                    } = e, {
                        i18n: n
                    } = (0, c.uB)(), {
                        routeHelper: o
                    } = r.useContext(el.A), l = t ? {
                        mainEntity: (0, tQ.Vb)(t, o)
                    } : {}, i = n._({
                        id: "common.organization.name"
                    }), s = o.homePageLink().href, u = [{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${s}#WebPage`,
                        url: s,
                        name: i,
                        description: "Play free online games at CrazyGames, the best place to play high-quality browser games. We add new games every day. Have fun!",
                        ...l,
                        isPartOf: (0, tQ.Xr)(n, o)
                    }];
                    return (0, a.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(u)
                        }
                    })
                }),
                t1 = null,
                t2 = f()(() => Promise.all([n.e(28333), n.e(97929), n.e(19389)]).then(n.bind(n, 19389)), {
                    loadableGenerated: {
                        webpack: () => [19389]
                    },
                    ssr: !1
                }),
                t3 = e => {
                    let t, n = (0, l.c)(1),
                        {
                            slot: o
                        } = e,
                        {
                            user: i
                        } = r.useContext(D.R),
                        c = function() {
                            let {
                                user: e,
                                loadingUser: t
                            } = r.useContext(D.R), [n, o] = r.useState(t1 ? ? "default"), a = !(0, x.JK)() || !t, l = (0, x.JK)() && !!e;
                            return r.useEffect(() => {
                                if (null !== t1 || !a || !l) return;
                                let e = !1,
                                    t = Date.now();
                                return w.AX.markPromotedIfNeeded(t).then(n => {
                                    e || o(t1 = t - n < w._j ? "promoted" : "default")
                                }), () => {
                                    e = !0
                                }
                            }, [a, l]), n
                        }();
                    return (0, x.JK)() && i && c === o ? (n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(t2, {}), n[0] = t) : t = n[0], t) : null
                };
            var t5 = n(32627),
                t4 = n(6847),
                t7 = n(79875),
                t6 = n.n(t7);
            let t9 = e => {
                    let t, n, o, r, i, c, s = (0, l.c)(14),
                        {
                            games: u,
                            videoDeferStrategy: d,
                            hasPaddingTop: _
                        } = e;
                    s[0] !== u ? (t = u.slice(0, 2), s[0] = u, s[1] = t) : t = s[1];
                    let m = t;
                    s[2] !== u ? (n = u.slice(1, 7), s[2] = u, s[3] = n) : n = s[3];
                    let g = n,
                        y = _ ? t6().mobileRecommendedModulePaddingTop : "";
                    return s[4] !== m || s[5] !== d ? (o = (0, a.jsx)(t5.A, {
                        games: m,
                        expectedSize: 2,
                        className: t6().adjustPadding,
                        overlapInOrientationChange: !0,
                        videoDeferStrategy: d
                    }), s[4] = m, s[5] = d, s[6] = o) : o = s[6], s[7] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, B.A)(t6().adjustPadding), s[7] = r) : r = s[7], s[8] !== g ? (i = (0, a.jsx)(t4.A, {
                        games: g,
                        expectedSize: 6,
                        customOrigin: "homepageRecommendedInstantSmall",
                        className: r,
                        overlapInOrientationChange: !0
                    }), s[8] = g, s[9] = i) : i = s[9], s[10] !== y || s[11] !== o || s[12] !== i ? (c = (0, a.jsxs)("div", {
                        "data-testid": eC.ZZ,
                        className: y,
                        children: [o, i]
                    }), s[10] = y, s[11] = o, s[12] = i, s[13] = c) : c = s[13], c
                },
                t8 = r.memo(() => {
                    let e = eB(),
                        t = (0, ez.Fq)("recommended");
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(tw, {}), (0, a.jsx)(tG, {}), (0, a.jsx)(t3, {
                            slot: "promoted"
                        }), (0, a.jsx)("div", {
                            className: (0, B.A)(t6().mobileInstantRecommendedTitle, t6().removeTopPadding),
                            children: (0, a.jsx)(tF, {})
                        }), (0, a.jsxs)(_.x, {
                            newClickOrigin: "recommended",
                            children: [(0, a.jsx)(t9, {
                                games: t.slice(0, 7),
                                videoDeferStrategy: "document-interactive"
                            }), (0, a.jsx)(t9, {
                                games: t.slice(7, 14),
                                videoDeferStrategy: "document-interactive"
                            })]
                        }), (0, a.jsx)(t3, {
                            slot: "default"
                        }), (0, a.jsx)(tz, {}), (0, a.jsxs)(_.x, {
                            newClickOrigin: "recommended",
                            children: [(0, a.jsx)(t9, {
                                games: t.slice(14, 21),
                                videoDeferStrategy: "document-interactive",
                                hasPaddingTop: !0
                            }), (0, a.jsx)(t9, {
                                games: t.slice(21, 28),
                                videoDeferStrategy: "document-interactive"
                            })]
                        }), (0, a.jsx)(tp, {}), (0, a.jsx)(t$, {
                            slot: "elevated"
                        }), "top" === e && (0, a.jsx)(eK, {}), (0, a.jsx)(_.x, {
                            newClickOrigin: "recommended",
                            children: (0, a.jsx)(t9, {
                                games: t.slice(28, 35),
                                videoDeferStrategy: "document-interactive",
                                hasPaddingTop: !0
                            })
                        }), (0, a.jsx)(tS, {}), (0, a.jsx)(t$, {
                            slot: "default"
                        })]
                    })
                });
            var ne = n(81278),
                nt = n(31015),
                nn = n(81664),
                no = n(99939),
                na = n.n(no);
            let nl = r.memo(e => {
                let {
                    onDismiss: t
                } = e, n = (0, ne.useRouter)(), {
                    user: o
                } = r.useContext(D.R), l = r.useRef(null), [i, s] = r.useState(null), [u, d] = r.useState(!1), [_, m] = r.useState(!1), {
                    crazyAnalyticsService: y
                } = r.useContext(O.A).services, h = async () => {
                    await w.VG.set("promotional_offline_content_card_dismissed", "true"), s(l.current ? .getBoundingClientRect().height ? ? 0), requestAnimationFrame(() => requestAnimationFrame(() => d(!0)))
                }, z = async () => {
                    if ((0, eR.DW)("offline_content_card"), o && !await w.yf.hasSeen()) {
                        y.userAction("offline-gaming", "promo_card_clicked", "onboarding_sheet"), m(!0);
                        return
                    }
                    y.userAction("offline-gaming", "promo_card_clicked", "mygames_offline_tab"), await n.push({
                        pathname: g.Fm,
                        query: {
                            tab: "downloaded"
                        }
                    })
                }, f = async () => {
                    await w.yf.markSeen(), m(!1)
                };
                return (0, a.jsxs)("div", {
                    ref: l,
                    "data-testid": eC.RV,
                    className: (0, B.A)(na().root, u && na().dismissing),
                    style: null !== i ? {
                        height: u ? 0 : i
                    } : void 0,
                    onTransitionEnd: e => {
                        e.target === l.current && "opacity" === e.propertyName && t()
                    },
                    children: [(0, a.jsxs)("button", {
                        type: "button",
                        className: na().cardButton,
                        onClick: z,
                        children: [(0, a.jsx)("img", {
                            className: na().backgroundImage,
                            src: (0, eI.Ay)("promotional-offline-content-card/promotional_offline_content_card_background.webp", {}, !1),
                            alt: ""
                        }), (0, a.jsxs)("span", {
                            className: na().mainContent,
                            children: [(0, a.jsxs)("span", {
                                className: na().infoTextSection,
                                children: [(0, a.jsx)("span", {
                                    className: na().infoTextHeader,
                                    children: (0, a.jsx)(c.x6, {
                                        id: "games.offlineContentCard.header"
                                    })
                                }), (0, a.jsx)("span", {
                                    className: na().infoTextSubHeader,
                                    children: (0, a.jsx)(c.x6, {
                                        id: "games.offlineContentCard.subHeader"
                                    })
                                })]
                            }), (0, a.jsxs)("span", {
                                className: na().downloadSection,
                                children: [(0, a.jsx)(e2.A, {
                                    className: na().downloadIcon,
                                    name: "download2",
                                    size: 16
                                }), (0, a.jsx)("span", {
                                    className: na().downloadLabel,
                                    children: (0, a.jsx)(c.x6, {
                                        id: "games.offlineContentCard.downloadButton"
                                    })
                                })]
                            })]
                        })]
                    }), (0, a.jsx)(nn.A, {
                        className: na().dismissIcon,
                        onClick: h,
                        "aria-label": ef.Ru._({
                            id: "games.offlineContentCard.dismissButton"
                        }),
                        children: (0, a.jsx)(e2.A, {
                            name: "cross",
                            size: 16
                        })
                    }), (0, a.jsx)(nt.default, {
                        open: _,
                        onClose: f
                    })]
                })
            });
            var nr = n(71855),
                ni = n(70068),
                nc = n(37880),
                ns = n(5351),
                nu = n(90874),
                nd = n(37434),
                n_ = n(87776),
                nm = n(47429),
                ng = n(97683),
                ny = n(29819),
                nh = n.n(ny);
            let nB = e => {
                    let t, n, o, i, c, s, u, d, g, y, h, z, f, C = (0, l.c)(34),
                        {
                            withBottomMargin: p,
                            icon: b,
                            name: x,
                            enSlug: w,
                            isCategory: T
                        } = e,
                        {
                            routeHelper: S
                        } = r.useContext(el.A),
                        {
                            pageService: j
                        } = r.useContext(O.A).services,
                        v = r.useContext(k.A),
                        A = r.useContext(eL.o);
                    C[0] !== A ? (t = (0, eR.Ay)(A), C[0] = A, C[1] = t) : t = C[1];
                    let I = t,
                        [P, L] = r.useState(!1);
                    C[2] !== v || C[3] !== w || C[4] !== T || C[5] !== j ? (n = () => {
                        let e = {
                                page: 1,
                                size: nm.F_
                            },
                            t = (0, m.v1)(v) ? nm.uo : nm.iF,
                            n = T ? "category" : "tag";
                        j.prefetchTagPage(n, w, e, nm.r2, t, v, nm.W$, nm.F_, "default")
                    }, C[2] = v, C[3] = w, C[4] = T, C[5] = j, C[6] = n) : n = C[6];
                    let G = n;
                    C[7] !== P || C[8] !== G ? (o = () => {
                        let e;
                        return P && (e = window.setTimeout(() => {
                                G()
                            }, 150)),
                            function() {
                                e && window.clearTimeout(e)
                            }
                    }, i = [P, G], C[7] = P, C[8] = G, C[9] = o, C[10] = i) : (o = C[9], i = C[10]), r.useEffect(o, i), C[11] !== w || C[12] !== T || C[13] !== S ? (c = T ? S.categoryPageDirectLink(w, {}).href : S.tagPageDirectLink(w, {}).href, C[11] = w, C[12] = T, C[13] = S, C[14] = c) : c = C[14];
                    let R = c;
                    return C[15] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
                        L(!0)
                    }, u = () => {
                        L(!1)
                    }, C[15] = s, C[16] = u) : (s = C[15], u = C[16]), C[17] !== p ? (d = (0, B.A)(nh().carouselItemRoot, {
                        [nh().withBottomMargin]: p
                    }), C[17] = p, C[18] = d) : d = C[18], C[19] !== b ? (g = (0, a.jsx)(ng.A, {
                        icon: b
                    }), C[19] = b, C[20] = g) : g = C[20], C[21] !== x ? (y = (0, a.jsx)("div", {
                        className: nh().carouselItemLabel,
                        children: x
                    }), C[21] = x, C[22] = y) : y = C[22], C[23] !== y || C[24] !== d || C[25] !== g ? (h = (0, a.jsxs)("div", {
                        className: d,
                        children: [g, y]
                    }), C[23] = y, C[24] = d, C[25] = g, C[26] = h) : h = C[26], C[27] !== R || C[28] !== x || C[29] !== h ? (z = (0, a.jsx)(er.A, {
                        href: R,
                        "aria-label": x,
                        onMouseEnter: s,
                        onMouseLeave: u,
                        prefetch: !0,
                        children: h
                    }), C[27] = R, C[28] = x, C[29] = h, C[30] = z) : z = C[30], C[31] !== I || C[32] !== z ? (f = (0, a.jsx)(_.x, {
                        newClickOrigin: I,
                        children: z
                    }), C[31] = I, C[32] = z, C[33] = f) : f = C[33], f
                },
                nz = e => {
                    let t, n, o = (0, l.c)(5),
                        {
                            seoTags: i
                        } = e,
                        {
                            sidebarTags: c
                        } = r.useContext(n_.A);
                    if (o[0] !== i || o[1] !== c) {
                        t = [];
                        let e = i || c;
                        for (let n = 0; n < e.length; n += 2) {
                            let o = e[n],
                                l = e[n + 1];
                            void 0 !== o && t.push((0, a.jsxs)("div", {
                                children: [(0, a.jsx)(nB, {
                                    name: o.name,
                                    enSlug: o.enSlug,
                                    icon: o.enSlug,
                                    isCategory: o.isCategory,
                                    withBottomMargin: !0
                                }), l ? (0, a.jsx)(nB, {
                                    name: l.name,
                                    enSlug: l.enSlug,
                                    icon: l.enSlug,
                                    isCategory: l.isCategory
                                }) : (0, a.jsx)("div", {
                                    className: (0, B.A)(nh().carouselItemRoot, nh().placeholder)
                                })]
                            }, `seoset${n}`))
                        }
                        o[0] = i, o[1] = c, o[2] = t
                    } else t = o[2];
                    return o[3] !== t ? (n = (0, a.jsx)("div", {
                        className: nh().carouselRoot,
                        children: (0, a.jsx)(_.x, {
                            newClickOrigin: "seo",
                            children: (0, a.jsx)(ec.k, {
                                hoverAssistVariant: "edgeRail",
                                children: t
                            })
                        })
                    }), o[3] = t, o[4] = n) : n = o[4], n
                },
                nf = f()(() => Promise.all([n.e(85370), n.e(53290)]).then(n.bind(n, 53290)), {
                    loadableGenerated: {
                        webpack: () => [53290]
                    },
                    loading: () => null,
                    ssr: !0
                }),
                nC = e => {
                    let t, n, o, i, s, u, d, _ = (0, l.c)(15),
                        {
                            text: m,
                            seoTags: g
                        } = e,
                        [y, h] = r.useState(!1);
                    return m ? (_[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, B.A)(nh().root), _[0] = t) : t = _[0], _[1] !== m ? (n = (0, a.jsxs)("div", {
                        className: nh().seoContainer,
                        children: [(0, a.jsx)("div", {
                            className: (0, B.A)(nh().seoText, nh().collapsed),
                            dangerouslySetInnerHTML: {
                                __html: m
                            }
                        }), (0, a.jsx)(nd.A, {
                            variant: "link",
                            color: "purple",
                            className: nh().seoBlockLearnMoreButton,
                            onClick: () => h(!0),
                            children: (0, a.jsx)(c.x6, {
                                id: "games.seo.learnmore"
                            })
                        })]
                    }), _[1] = m, _[2] = n) : n = _[2], _[3] !== g ? (o = (0, a.jsx)(nz, {
                        seoTags: g
                    }), _[3] = g, _[4] = o) : o = _[4], _[5] !== n || _[6] !== o ? (i = (0, a.jsxs)("div", {
                        className: t,
                        children: [n, o]
                    }), _[5] = n, _[6] = o, _[7] = i) : i = _[7], _[8] === Symbol.for("react.memo_cache_sentinel") ? (s = () => h(!1), _[8] = s) : s = _[8], _[9] !== y || _[10] !== m ? (u = (0, a.jsx)(nf, {
                        open: y,
                        onClose: s,
                        text: m
                    }), _[9] = y, _[10] = m, _[11] = u) : u = _[11], _[12] !== i || _[13] !== u ? (d = (0, a.jsxs)(a.Fragment, {
                        children: [i, u]
                    }), _[12] = i, _[13] = u, _[14] = d) : d = _[14], d) : null
                },
                np = f()(() => Promise.all([n.e(97275), n.e(48031)]).then(n.bind(n, 48031)), {
                    loadableGenerated: {
                        webpack: () => [48031]
                    },
                    loading: () => (0, a.jsx)("div", {
                        className: tZ().offlineGamesBannerEmpty
                    })
                }),
                nb = f()(() => Promise.all([n.e(61019), n.e(5357), n.e(22057)]).then(n.bind(n, 22057)), {
                    loadableGenerated: {
                        webpack: () => [22057]
                    },
                    loading: () => null,
                    ssr: !1
                }),
                nx = e => {
                    let t, n, o, i, s, u, d, _, g, y, h, z, f, p, v, A, I = (0, l.c)(43),
                        {
                            isCrawler: P,
                            homepageText: O,
                            shouldDisplayDesktopOnly: L,
                            prefetchedRecommendedGames: G,
                            seoTags: R
                        } = e,
                        N = void 0 !== P && P,
                        {
                            recent: D
                        } = r.useContext(j.oJ),
                        {
                            czyExpOfflineGamesBanner_CZY_20827: M
                        } = r.useContext(C.H),
                        H = (0, r.useContext)(k.A),
                        F = (0, m.xl)(H),
                        [W, U] = (0, r.useState)(!1),
                        q = (0, ez.N1)();
                    (() => {
                        let {
                            pageUrlHelper: e
                        } = r.useContext(T.e), {
                            openDrawer: t
                        } = r.useContext(S.lv), n = e.isOnContact(), o = e.isOnDeleteAccount();
                        r.useEffect(() => {
                            n && t("mainFeedback")
                        }, [n, t]), r.useEffect(() => {
                            o && t("deleteAccount")
                        }, [o, t])
                    })();
                    let Y = function(e) {
                            let t, n, o, a, i = (0, l.c)(14),
                                c = (0, nr.U)(nc.$i),
                                s = r.useContext(k.A),
                                {
                                    recent: u,
                                    loading: d
                                } = r.useContext(j.oJ),
                                {
                                    variant: _,
                                    isForced: g
                                } = (0, ns.c)(),
                                y = _ ? ? c;
                            i[0] !== s || i[1] !== e || i[2] !== g || i[3] !== y ? (t = !e && null !== (0, nc.QT)(y) && (g || (0, m.PS)(s)), i[0] = s, i[1] = e, i[2] = g, i[3] = y, i[4] = t) : t = i[4];
                            let h = t,
                                B = r.useSyncExternalStore(ni.Vt, ni.Y2, ni.Hp);
                            i[5] !== h || i[6] !== B ? (n = h && B ? .outcome === "completed" && (0, ni.IO)(B).length > 0 ? B : null, i[5] = h, i[6] = B, i[7] = n) : n = i[7];
                            let z = n;
                            i[8] !== z ? (o = z ? (0, nu.fY)((0, ni.IO)(z)) : "", i[8] = z, i[9] = o) : o = i[9];
                            let f = o,
                                C = h && null !== z && (g || !d && u.length <= 5);
                            return i[10] !== C || i[11] !== f || i[12] !== z ? (a = {
                                isVisible: C,
                                record: z,
                                picksHash: f
                            }, i[10] = C, i[11] = f, i[12] = z, i[13] = a) : a = i[13], a
                        }(N),
                        $ = Y.isVisible && null !== Y.record;
                    I[0] !== D ? (t = () => {
                        D.slice(0, 3).map(nw).length
                    }, I[0] = D, I[1] = t) : t = I[1], I[2] !== q || I[3] !== D ? (n = [q, D], I[2] = q, I[3] = D, I[4] = n) : n = I[4], (0, r.useEffect)(t, n), I[5] !== U ? (o = () => {
                        (0, x.JK)() && w.VG.get("promotional_offline_content_card_dismissed").then(e => {
                            U("true" !== e)
                        })
                    }, I[5] = U, I[6] = o) : o = I[6], I[7] === Symbol.for("react.memo_cache_sentinel") ? (i = [], I[7] = i) : i = I[7], (0, r.useEffect)(o, i);
                    let K = (0, B.A)(tZ().root, {
                        [tZ().desktop]: F
                    });
                    return I[8] !== G ? (s = (0, a.jsx)(t0, {
                        games: G
                    }), I[8] = G, I[9] = s) : s = I[9], I[10] !== Y.picksHash || I[11] !== Y.record || I[12] !== $ ? (u = $ ? (0, a.jsx)(nb, {
                        record: Y.record,
                        picksHash: Y.picksHash
                    }) : (0, a.jsx)(X, {}), I[10] = Y.picksHash, I[11] = Y.record, I[12] = $, I[13] = u) : u = I[13], I[14] !== W || I[15] !== U ? (d = W && (0, a.jsx)(nl, {
                        onDismiss: () => U(!1)
                    }), I[14] = W, I[15] = U, I[16] = d) : d = I[16], I[17] !== M ? (_ = "enabled" === M && (0, a.jsx)(np, {}), I[17] = M, I[18] = _) : _ = I[18], I[19] !== F || I[20] !== $ ? (g = F ? (0, a.jsx)(tV, {
                        useOnboarding: $
                    }) : (0, a.jsx)(t8, {}), I[19] = F, I[20] = $, I[21] = g) : g = I[21], I[22] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(tn, {}), I[22] = y) : y = I[22], I[23] !== L ? (h = L && (0, a.jsx)(J.s, {
                        slug: "desktop-only",
                        title: (0, a.jsx)(c.x6, {
                            id: "carousels.desktopOnly.title"
                        })
                    }), I[23] = L, I[24] = h) : h = I[24], I[25] !== g || I[26] !== h ? (z = (0, a.jsxs)(E, {
                        children: [g, y, h]
                    }), I[25] = g, I[26] = h, I[27] = z) : z = I[27], I[28] !== N || I[29] !== z ? (f = (0, a.jsx)(b, {
                        value: N,
                        children: z
                    }), I[28] = N, I[29] = z, I[30] = f) : f = I[30], I[31] !== O || I[32] !== R ? (p = (0, a.jsx)(r.Suspense, {
                        children: (0, a.jsx)(nC, {
                            text: O,
                            seoTags: R
                        })
                    }), I[31] = O, I[32] = R, I[33] = p) : p = I[33], I[34] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(r.Suspense, {
                        children: (0, a.jsx)(tg, {})
                    }), I[34] = v) : v = I[34], I[35] !== _ || I[36] !== f || I[37] !== p || I[38] !== K || I[39] !== s || I[40] !== u || I[41] !== d ? (A = (0, a.jsxs)("div", {
                        className: K,
                        children: [s, u, d, _, f, p, v]
                    }), I[35] = _, I[36] = f, I[37] = p, I[38] = K, I[39] = s, I[40] = u, I[41] = d, I[42] = A) : A = I[42], A
                };

            function nw(e) {
                return e.slug
            }
            var nk = n(91831),
                nT = n(20183),
                nS = n(66670);
            let nj = e => {
                let t, n, o, s, d, m, g, y, B, z, f = (0, l.c)(40),
                    {
                        featuredGames: C,
                        newGames: p,
                        homepageCat: b,
                        intentGames: x,
                        alternatives: w,
                        homepageText: k,
                        desktopOnlyCarouselGames: T,
                        originalsSSRGames: S,
                        prefetchedRecommendedGames: j,
                        isCrawler: v,
                        seoTags: A
                    } = e,
                    {
                        routeHelper: I
                    } = r.useContext(el.A),
                    P = (0, c.uB)();
                f[0] !== P ? (t = P._("common.head.title", {
                    pageNumber: 1
                }), f[0] = P, f[1] = t) : t = f[1];
                let O = t;
                f[2] !== P ? (n = P._("common.head.metaDescription"), f[2] = P, f[3] = n) : n = f[3];
                let L = n;
                f[4] !== I ? (o = I.homePageCanonical(), f[4] = I, f[5] = o) : o = f[5];
                let G = o;
                f[6] !== w || f[7] !== G || f[8] !== L || f[9] !== O ? (s = (0, a.jsx)(h.A, {
                    title: O,
                    metaDescription: L,
                    canonical: G,
                    alternatives: w
                }), f[6] = w, f[7] = G, f[8] = L, f[9] = O, f[10] = s) : s = f[10], f[11] !== G || f[12] !== L || f[13] !== O ? (d = (0, a.jsx)(nk.A, {
                    canonical: G,
                    title: O,
                    description: L
                }), f[11] = G, f[12] = L, f[13] = O, f[14] = d) : d = f[14], f[15] !== p ? .items ? (m = p ? .items || [], f[15] = p ? .items, f[16] = m) : m = f[16];
                let R = p ? .total;
                return f[17] !== T ? (g = (0, i.O)(T), f[17] = T, f[18] = g) : g = f[18], f[19] !== k || f[20] !== v || f[21] !== j || f[22] !== A || f[23] !== g ? (y = (0, a.jsx)(nx, {
                    isCrawler: v,
                    homepageText: k,
                    prefetchedRecommendedGames: j,
                    shouldDisplayDesktopOnly: g,
                    seoTags: A
                }), f[19] = k, f[20] = v, f[21] = j, f[22] = A, f[23] = g, f[24] = y) : y = f[24], f[25] !== T || f[26] !== C || f[27] !== b || f[28] !== x || f[29] !== v || f[30] !== S || f[31] !== j || f[32] !== m || f[33] !== R || f[34] !== y ? (B = (0, a.jsx)(_.x, {
                    newClickOrigin: void 0,
                    children: (0, a.jsx)(u.g, {
                        newGames: m,
                        newGamesTotal: R,
                        prefetchedRecommendedGames: j,
                        featuredGames: C,
                        originalsSSRGames: S,
                        categoryGames: b,
                        intentGames: x,
                        isCrawler: v,
                        desktopOnlyCarouselGames: T,
                        children: y
                    })
                }), f[25] = T, f[26] = C, f[27] = b, f[28] = x, f[29] = v, f[30] = S, f[31] = j, f[32] = m, f[33] = R, f[34] = y, f[35] = B) : B = f[35], f[36] !== B || f[37] !== s || f[38] !== d ? (z = (0, a.jsxs)(a.Fragment, {
                    children: [s, d, B]
                }), f[36] = B, f[37] = s, f[38] = d, f[39] = z) : z = f[39], z
            };
            nj.getInitialProps = async e => {
                let {
                    pageService: t,
                    crawlerService: n
                } = (0, y.V)(e), o = (0, m.hz)(e), a = "true" === e.query[g.pr], l = (0, d.dq)(), r = await t.homePage(o);
                a && await n.replaceHomePageForCrawler(r, o);
                let {
                    intents: i,
                    ...c
                } = r;
                return e.res && e.res.setHeader("Cache-Control", (0, s.H9)({
                    maxAge: 1800
                })), { ...c,
                    alternatives: l,
                    isCrawler: a
                }
            };
            let nv = (0, nT.A)("games", "carousels")((0, nS.A)(nj))
        },
        36745: e => {
            e.exports = {
                czyButton: "CarouselRichHeader_czyButton__tVC5L",
                "czyButton--contained--purple": "CarouselRichHeader_czyButton--contained--purple__N4yUP",
                "czyButton--contained--white": "CarouselRichHeader_czyButton--contained--white__e8XsC",
                "czyButton--contained--grey": "CarouselRichHeader_czyButton--contained--grey__ZRenD",
                "czyButton--contained--warning": "CarouselRichHeader_czyButton--contained--warning__wSXHn",
                "czyButton--contained--alert": "CarouselRichHeader_czyButton--contained--alert__JZHQb",
                "czyButton--contained--success": "CarouselRichHeader_czyButton--contained--success__aMJ3j",
                "czyButton--contained--black": "CarouselRichHeader_czyButton--contained--black__0WzKi",
                "czyButton--contained--green-gradient": "CarouselRichHeader_czyButton--contained--green-gradient__0xZoe",
                "czyButton--contained--animated-green-gradient": "CarouselRichHeader_czyButton--contained--animated-green-gradient__ILL3h",
                "scroll-gradient": "CarouselRichHeader_scroll-gradient___2xki",
                "czyButton--outlined--purple": "CarouselRichHeader_czyButton--outlined--purple__pR3Ub",
                "czyButton--link--purple": "CarouselRichHeader_czyButton--link--purple__FyTM_",
                "czyButton--outlined--white": "CarouselRichHeader_czyButton--outlined--white__tbCZM",
                "czyButton--link--white": "CarouselRichHeader_czyButton--link--white__XvCa7",
                "czyButton--outlined--grey": "CarouselRichHeader_czyButton--outlined--grey__NCxPp",
                "czyButton--link--grey": "CarouselRichHeader_czyButton--link--grey__KAcKG",
                "czyButton--outlined--warning": "CarouselRichHeader_czyButton--outlined--warning__9mbY0",
                "czyButton--link--warning": "CarouselRichHeader_czyButton--link--warning__x8tFt",
                "czyButton--outlined--alert": "CarouselRichHeader_czyButton--outlined--alert__0xsHn",
                "czyButton--link--alert": "CarouselRichHeader_czyButton--link--alert__klJlC",
                "czyButton--outlined--success": "CarouselRichHeader_czyButton--outlined--success__Gr1BG",
                "czyButton--link--success": "CarouselRichHeader_czyButton--link--success__PAc6o",
                "czyButton--outlined": "CarouselRichHeader_czyButton--outlined___ZcP8",
                "czyButton--disabled": "CarouselRichHeader_czyButton--disabled__G_cDb",
                "czyButton--height50": "CarouselRichHeader_czyButton--height50__O3lmx",
                "czyButton--height34": "CarouselRichHeader_czyButton--height34__X6OU_",
                "czyButton--height28": "CarouselRichHeader_czyButton--height28__nmkR5",
                "czyButton--fullWidth": "CarouselRichHeader_czyButton--fullWidth__fkTsR",
                "czyButton--headerIcon": "CarouselRichHeader_czyButton--headerIcon__cvTJZ",
                "czyButton--headerIcon--desktop": "CarouselRichHeader_czyButton--headerIcon--desktop__hl8MI",
                "czyButton--headerIcon--mobile": "CarouselRichHeader_czyButton--headerIcon--mobile__5ZGAh",
                "czyButton--headerIcon--withLabel": "CarouselRichHeader_czyButton--headerIcon--withLabel__yYjyM",
                header: "CarouselRichHeader_header__RX_gw",
                richTitle: "CarouselRichHeader_richTitle___ge2h",
                leading: "CarouselRichHeader_leading__Pr4I9",
                leadingIcon: "CarouselRichHeader_leadingIcon__Q0q7q",
                content: "CarouselRichHeader_content__33LHJ",
                subtitle: "CarouselRichHeader_subtitle__Aufpa"
            }
        },
        39544: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o.A
            });
            var o = n(91984)
        },
        39890: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            let o = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return Array.from(Array(e), (e, n) => n + t)
            }
        },
        42251: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var o = n(6029),
                a = n(75155);
            n(55729);
            var l = n(32994),
                r = n(50212),
                i = n(52461),
                c = n(43711),
                s = n(44817),
                u = n.n(s);
            let d = e => {
                let t, n, s, d, _, m = (0, a.c)(12),
                    {
                        linkData: g,
                        children: y,
                        titleRowExtra: h,
                        className: B,
                        prefetch: z
                    } = e,
                    f = void 0 === z || z;
                return m[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.A)(u().carouselTitleLink), m[0] = t) : t = m[0], m[1] !== B ? (n = (0, r.A)(u().carouselTitle, B), m[1] = B, m[2] = n) : n = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, o.jsx)(l.I, {
                    name: "chevron_right",
                    size: "custom"
                }), m[3] = s) : s = m[3], m[4] !== y || m[5] !== n || m[6] !== h ? (d = (0, o.jsxs)("div", {
                    className: n,
                    children: [y, h, s]
                }), m[4] = y, m[5] = n, m[6] = h, m[7] = d) : d = m[7], m[8] !== g || m[9] !== f || m[10] !== d ? (_ = (0, o.jsx)(i.x, {
                    newClickOrigin: "viewmore",
                    children: (0, o.jsx)(c.A, { ...g,
                        prefetch: f,
                        className: t,
                        children: d
                    })
                }), m[8] = g, m[9] = f, m[10] = d, m[11] = _) : _ = m[11], _
            }
        },
        43975: e => {
            e.exports = {
                czyButton: "LeaderboardsCarousel_czyButton__Qto9x",
                "czyButton--contained--purple": "LeaderboardsCarousel_czyButton--contained--purple__euDhs",
                "czyButton--contained--white": "LeaderboardsCarousel_czyButton--contained--white__jP_te",
                "czyButton--contained--grey": "LeaderboardsCarousel_czyButton--contained--grey__0J0r_",
                "czyButton--contained--warning": "LeaderboardsCarousel_czyButton--contained--warning__E_Vp4",
                "czyButton--contained--alert": "LeaderboardsCarousel_czyButton--contained--alert__c3MVr",
                "czyButton--contained--success": "LeaderboardsCarousel_czyButton--contained--success__omRFW",
                "czyButton--contained--black": "LeaderboardsCarousel_czyButton--contained--black__pagoO",
                "czyButton--contained--green-gradient": "LeaderboardsCarousel_czyButton--contained--green-gradient__SgDAj",
                "czyButton--contained--animated-green-gradient": "LeaderboardsCarousel_czyButton--contained--animated-green-gradient__tTqYH",
                "scroll-gradient": "LeaderboardsCarousel_scroll-gradient__qVgbb",
                "czyButton--outlined--purple": "LeaderboardsCarousel_czyButton--outlined--purple__Hn32c",
                "czyButton--link--purple": "LeaderboardsCarousel_czyButton--link--purple__gxAVY",
                "czyButton--outlined--white": "LeaderboardsCarousel_czyButton--outlined--white__PQNnU",
                "czyButton--link--white": "LeaderboardsCarousel_czyButton--link--white__4Bbx_",
                "czyButton--outlined--grey": "LeaderboardsCarousel_czyButton--outlined--grey__dcHLI",
                "czyButton--link--grey": "LeaderboardsCarousel_czyButton--link--grey__YFfV7",
                "czyButton--outlined--warning": "LeaderboardsCarousel_czyButton--outlined--warning__QE9xG",
                "czyButton--link--warning": "LeaderboardsCarousel_czyButton--link--warning__DANC7",
                "czyButton--outlined--alert": "LeaderboardsCarousel_czyButton--outlined--alert__Vf7jB",
                "czyButton--link--alert": "LeaderboardsCarousel_czyButton--link--alert__8iLtd",
                "czyButton--outlined--success": "LeaderboardsCarousel_czyButton--outlined--success___cY0T",
                "czyButton--link--success": "LeaderboardsCarousel_czyButton--link--success__f3yvR",
                "czyButton--outlined": "LeaderboardsCarousel_czyButton--outlined__9hjPG",
                "czyButton--disabled": "LeaderboardsCarousel_czyButton--disabled__2i4BW",
                "czyButton--height50": "LeaderboardsCarousel_czyButton--height50__rfXy_",
                "czyButton--height34": "LeaderboardsCarousel_czyButton--height34__3c66a",
                "czyButton--height28": "LeaderboardsCarousel_czyButton--height28__GcxL5",
                "czyButton--fullWidth": "LeaderboardsCarousel_czyButton--fullWidth__kto8j",
                "czyButton--headerIcon": "LeaderboardsCarousel_czyButton--headerIcon__hG8Pn",
                "czyButton--headerIcon--desktop": "LeaderboardsCarousel_czyButton--headerIcon--desktop__7rFTu",
                "czyButton--headerIcon--mobile": "LeaderboardsCarousel_czyButton--headerIcon--mobile__ROv7V",
                "czyButton--headerIcon--withLabel": "LeaderboardsCarousel_czyButton--headerIcon--withLabel__p85CO",
                leaderboardsContainer: "LeaderboardsCarousel_leaderboardsContainer__nrGgl",
                leaderboardsBackground: "LeaderboardsCarousel_leaderboardsBackground__oMQA0",
                carouselHeader: "LeaderboardsCarousel_carouselHeader__fDX7w",
                trophyContainer: "LeaderboardsCarousel_trophyContainer__OZWki",
                trophyImg: "LeaderboardsCarousel_trophyImg__f0LHC",
                titleSubtitleContainer: "LeaderboardsCarousel_titleSubtitleContainer__Xn5LY",
                titleRowContainer: "LeaderboardsCarousel_titleRowContainer__4OvyX",
                leaderboardsSubtitle: "LeaderboardsCarousel_leaderboardsSubtitle__OMDIX",
                pillsContainer: "LeaderboardsCarousel_pillsContainer__vS4hP",
                participants: "LeaderboardsCarousel_participants__BxNce",
                seasonCountdown: "LeaderboardsCarousel_seasonCountdown__QDbWq",
                subtitle: "LeaderboardsCarousel_subtitle__0nWH7"
            }
        },
        44817: e => {
            e.exports = {
                czyButton: "CarouselSectionTitle_czyButton___OSJq",
                "czyButton--contained--purple": "CarouselSectionTitle_czyButton--contained--purple__OHM1w",
                "czyButton--contained--white": "CarouselSectionTitle_czyButton--contained--white__GiYUZ",
                "czyButton--contained--grey": "CarouselSectionTitle_czyButton--contained--grey__Grew2",
                "czyButton--contained--warning": "CarouselSectionTitle_czyButton--contained--warning__uTKKA",
                "czyButton--contained--alert": "CarouselSectionTitle_czyButton--contained--alert__I765P",
                "czyButton--contained--success": "CarouselSectionTitle_czyButton--contained--success__MEO3z",
                "czyButton--contained--black": "CarouselSectionTitle_czyButton--contained--black__D63B0",
                "czyButton--contained--green-gradient": "CarouselSectionTitle_czyButton--contained--green-gradient__PVk_b",
                "czyButton--contained--animated-green-gradient": "CarouselSectionTitle_czyButton--contained--animated-green-gradient__0tXqh",
                "scroll-gradient": "CarouselSectionTitle_scroll-gradient__9mEfw",
                "czyButton--outlined--purple": "CarouselSectionTitle_czyButton--outlined--purple__JFJnT",
                "czyButton--link--purple": "CarouselSectionTitle_czyButton--link--purple__whugO",
                "czyButton--outlined--white": "CarouselSectionTitle_czyButton--outlined--white__hXCMA",
                "czyButton--link--white": "CarouselSectionTitle_czyButton--link--white__chInN",
                "czyButton--outlined--grey": "CarouselSectionTitle_czyButton--outlined--grey__8VKW9",
                "czyButton--link--grey": "CarouselSectionTitle_czyButton--link--grey__XPruj",
                "czyButton--outlined--warning": "CarouselSectionTitle_czyButton--outlined--warning__RA_JQ",
                "czyButton--link--warning": "CarouselSectionTitle_czyButton--link--warning__NrTod",
                "czyButton--outlined--alert": "CarouselSectionTitle_czyButton--outlined--alert__wr7uP",
                "czyButton--link--alert": "CarouselSectionTitle_czyButton--link--alert__BL_3F",
                "czyButton--outlined--success": "CarouselSectionTitle_czyButton--outlined--success__ySuRZ",
                "czyButton--link--success": "CarouselSectionTitle_czyButton--link--success__86y1_",
                "czyButton--outlined": "CarouselSectionTitle_czyButton--outlined__4zf4E",
                "czyButton--disabled": "CarouselSectionTitle_czyButton--disabled__cZ8wO",
                "czyButton--height50": "CarouselSectionTitle_czyButton--height50__lz6fC",
                "czyButton--height34": "CarouselSectionTitle_czyButton--height34__5O3VP",
                "czyButton--height28": "CarouselSectionTitle_czyButton--height28__TNhld",
                "czyButton--fullWidth": "CarouselSectionTitle_czyButton--fullWidth__9b_r_",
                "czyButton--headerIcon": "CarouselSectionTitle_czyButton--headerIcon__qp0av",
                "czyButton--headerIcon--desktop": "CarouselSectionTitle_czyButton--headerIcon--desktop__5t1au",
                "czyButton--headerIcon--mobile": "CarouselSectionTitle_czyButton--headerIcon--mobile__nk_1x",
                "czyButton--headerIcon--withLabel": "CarouselSectionTitle_czyButton--headerIcon--withLabel__VF7F_",
                carouselTitle: "CarouselSectionTitle_carouselTitle__tDEqL",
                carouselTitleContainerDiv: "CarouselSectionTitle_carouselTitleContainerDiv__FW07Z",
                isMobile: "CarouselSectionTitle_isMobile__VXdis",
                carouselTitleLink: "CarouselSectionTitle_carouselTitleLink__fnqYm",
                carouselTitleAction: "CarouselSectionTitle_carouselTitleAction__43VAX"
            }
        },
        54629: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(55729),
                a = n(71237),
                l = n(4230),
                r = n(71684),
                i = n(74532);
            let c = () => {
                let {
                    modelService: e,
                    experimentService: t
                } = o.useContext(r.A).services, n = o.useContext(l.A), {
                    countryCode: c
                } = o.useContext(i.A), {
                    clusterMap: s
                } = a.lF(), u = o.useRef(s);
                return o.useEffect(() => {
                    u.current = s
                }, [s]), {
                    getModelGames: o.useCallback(async o => {
                        let a = async () => {
                            let a = o.forceModelName ? ? t.getModelName(o.place);
                            return e.getBatchTagModelGames(a, n, c, u.current, {
                                place: o.place,
                                filters: o.filters
                            })
                        };
                        return await a()
                    }, [n, t, e, c])
                }
            }
        },
        56797: () => {},
        60510: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var o = n(6029),
                a = n(75155);
            n(55729);
            var l = n(79942),
                r = n(93800),
                i = n(99703),
                c = n(6500),
                s = n.n(c);
            let u = e => {
                let t, n, c, u = (0, a.c)(6),
                    {
                        endDate: d,
                        addLabel: _
                    } = e,
                    m = (0, i.s)(d);
                u[0] !== _ || u[1] !== m ? (t = null === m ? _ ? (0, o.jsx)(l.x6, {
                    id: "common.carousel.leaderboards.endsIn",
                    values: {
                        time: "…"
                    }
                }) : "…" : _ ? (0, o.jsx)(l.x6, {
                    id: "common.carousel.leaderboards.endsIn",
                    values: {
                        time: m
                    }
                }, m) : m, u[0] = _, u[1] = m, u[2] = t) : t = u[2];
                let g = t;
                return u[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(r.A, {
                    name: "clock"
                }), u[3] = n) : n = u[3], u[4] !== g ? (c = (0, o.jsxs)("div", {
                    className: s().endSeasonContainer,
                    children: [n, " ", g]
                }), u[4] = g, u[5] = c) : c = u[5], c
            }
        },
        66182: (e, t) => {
            "use strict";
            t.$r = void 0, t.DH = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                return 1 === e.getUTCDay() && e.getUTCHours() >= t.$r
            }, t.$r = 9
        },
        72224: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => a,
                c: () => o
            });
            let o = ["newGames", "tags", "category", "tag", "game", "termsAndConditions", "informationForParents", "privacyPolicy", "recent", "search", "scholarship", "competitions"],
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
        76436: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => a
            });
            var o = n(55729);

            function a() {
                let e = o.useRef(new Map),
                    t = o.useRef(null),
                    n = o.useCallback(() => {
                        t.current = new Map([...e.current].map(e => {
                            let [t, n] = e;
                            return [t, n.getBoundingClientRect().top]
                        }))
                    }, []);
                return o.useLayoutEffect(() => {
                    if (!t.current) return;
                    let n = t.current;
                    t.current = null, e.current.forEach((e, t) => {
                        let o = n.get(t);
                        if (void 0 === o) return;
                        let a = o - e.getBoundingClientRect().top;
                        0 !== a && e.animate([{
                            transform: `translateY(${a}px)`
                        }, {
                            transform: "none"
                        }], {
                            duration: 250,
                            easing: "cubic-bezier(0.16, 1, 0.3, 1)"
                        })
                    })
                }), {
                    capture: n,
                    ref: t => n => {
                        n ? e.current.set(t, n) : e.current.delete(t)
                    }
                }
            }
        },
        77455: e => {
            e.exports = {
                observer: "LazyCarouselsSection_observer__1wA_M",
                loadingContainer: "LazyCarouselsSection_loadingContainer__DDG01",
                footerSpacerDesktop: "LazyCarouselsSection_footerSpacerDesktop__rlpff",
                footerSpacerMobile: "LazyCarouselsSection_footerSpacerMobile__gZGe5"
            }
        },
        79469: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => y
            });
            var o = n(6029),
                a = n(75155),
                l = n(55729),
                r = n(50212),
                i = n(50293),
                c = n(4230),
                s = n(81930),
                u = n(42251),
                d = n(36745),
                _ = n.n(d),
                m = n(44817),
                g = n.n(m);
            let y = e => {
                let t, n, d, m, y, h, B, z, f, C = (0, a.c)(28),
                    {
                        iconSrc: p,
                        leading: b,
                        title: x,
                        linkData: w,
                        titleRowExtra: k,
                        subtitle: T,
                        className: S,
                        titleClassName: j,
                        style: v,
                        prefetch: A
                    } = e,
                    I = l.useContext(c.A);
                C[0] !== p || C[1] !== b ? (t = b ? ? (p ? (0, o.jsx)("img", {
                    className: _().leadingIcon,
                    src: p.startsWith("http://") || p.startsWith("https://") ? p : (0, s.Ay)(p, {
                        width: 60
                    }),
                    srcSet: p.startsWith("http://") || p.startsWith("https://") ? void 0 : (0, s.Wn)(p, {
                        width: 60
                    }),
                    alt: "",
                    "aria-hidden": "true"
                }) : null), C[0] = p, C[1] = b, C[2] = t) : t = C[2];
                let P = t;
                C[3] !== I ? (n = (0, i.xl)(I), C[3] = I, C[4] = n) : n = C[4];
                let O = !n;
                return C[5] !== S || C[6] !== O ? (d = (0, r.A)(g().carouselTitleContainerDiv, _().header, S, {
                    [g().isMobile]: O
                }), C[5] = S, C[6] = O, C[7] = d) : d = C[7], C[8] !== P ? (m = P && (0, o.jsx)("div", {
                    className: _().leading,
                    children: P
                }), C[8] = P, C[9] = m) : m = C[9], C[10] !== j ? (y = (0, r.A)(_().richTitle, j), C[10] = j, C[11] = y) : y = C[11], C[12] !== w || C[13] !== A || C[14] !== y || C[15] !== x || C[16] !== k ? (h = (0, o.jsx)(u.A, {
                    linkData: w,
                    titleRowExtra: k,
                    prefetch: A,
                    className: y,
                    children: x
                }), C[12] = w, C[13] = A, C[14] = y, C[15] = x, C[16] = k, C[17] = h) : h = C[17], C[18] !== T ? (B = T && (0, o.jsx)("div", {
                    className: _().subtitle,
                    children: T
                }), C[18] = T, C[19] = B) : B = C[19], C[20] !== h || C[21] !== B ? (z = (0, o.jsxs)("div", {
                    className: _().content,
                    children: [h, B]
                }), C[20] = h, C[21] = B, C[22] = z) : z = C[22], C[23] !== v || C[24] !== d || C[25] !== m || C[26] !== z ? (f = (0, o.jsxs)("div", {
                    className: d,
                    style: v,
                    children: [m, z]
                }), C[23] = v, C[24] = d, C[25] = m, C[26] = z, C[27] = f) : f = C[27], f
            }
        },
        79875: e => {
            e.exports = {
                czyButton: "MobileTopContent_czyButton__DPbng",
                "czyButton--contained--purple": "MobileTopContent_czyButton--contained--purple__ESZdr",
                "czyButton--contained--white": "MobileTopContent_czyButton--contained--white__gwwMp",
                "czyButton--contained--grey": "MobileTopContent_czyButton--contained--grey__5XmDp",
                "czyButton--contained--warning": "MobileTopContent_czyButton--contained--warning__5tG7v",
                "czyButton--contained--alert": "MobileTopContent_czyButton--contained--alert__cZHjw",
                "czyButton--contained--success": "MobileTopContent_czyButton--contained--success__9D7ia",
                "czyButton--contained--black": "MobileTopContent_czyButton--contained--black__JEulT",
                "czyButton--contained--green-gradient": "MobileTopContent_czyButton--contained--green-gradient__iFlcp",
                "czyButton--contained--animated-green-gradient": "MobileTopContent_czyButton--contained--animated-green-gradient__Ujyj6",
                "scroll-gradient": "MobileTopContent_scroll-gradient__97sOE",
                "czyButton--outlined--purple": "MobileTopContent_czyButton--outlined--purple__hVUij",
                "czyButton--link--purple": "MobileTopContent_czyButton--link--purple__1rXO9",
                "czyButton--outlined--white": "MobileTopContent_czyButton--outlined--white__MbsMO",
                "czyButton--link--white": "MobileTopContent_czyButton--link--white__0RbQR",
                "czyButton--outlined--grey": "MobileTopContent_czyButton--outlined--grey__3AZ85",
                "czyButton--link--grey": "MobileTopContent_czyButton--link--grey__S9kE7",
                "czyButton--outlined--warning": "MobileTopContent_czyButton--outlined--warning__8dGPf",
                "czyButton--link--warning": "MobileTopContent_czyButton--link--warning__7tMDs",
                "czyButton--outlined--alert": "MobileTopContent_czyButton--outlined--alert__7fV0F",
                "czyButton--link--alert": "MobileTopContent_czyButton--link--alert__a7iJk",
                "czyButton--outlined--success": "MobileTopContent_czyButton--outlined--success__vTXbx",
                "czyButton--link--success": "MobileTopContent_czyButton--link--success__Hc4aT",
                "czyButton--outlined": "MobileTopContent_czyButton--outlined__xdLU_",
                "czyButton--disabled": "MobileTopContent_czyButton--disabled__pzLE4",
                "czyButton--height50": "MobileTopContent_czyButton--height50__ccHEp",
                "czyButton--height34": "MobileTopContent_czyButton--height34__vKKbS",
                "czyButton--height28": "MobileTopContent_czyButton--height28__eum_K",
                "czyButton--fullWidth": "MobileTopContent_czyButton--fullWidth__E_a7J",
                "czyButton--headerIcon": "MobileTopContent_czyButton--headerIcon__Gxbvm",
                "czyButton--headerIcon--desktop": "MobileTopContent_czyButton--headerIcon--desktop__jDBF4",
                "czyButton--headerIcon--mobile": "MobileTopContent_czyButton--headerIcon--mobile__ZE8l4",
                "czyButton--headerIcon--withLabel": "MobileTopContent_czyButton--headerIcon--withLabel__oTLSz",
                mobileInstantRecommendedTitle: "MobileTopContent_mobileInstantRecommendedTitle__rukNE",
                removeTopPadding: "MobileTopContent_removeTopPadding__Nb4J1",
                adjustPadding: "MobileTopContent_adjustPadding__5JbsS",
                mobileRecommendedModulePaddingTop: "MobileTopContent_mobileRecommendedModulePaddingTop__3P6yn"
            }
        },
        80769: e => {
            e.exports = {
                mobileSlot: "DailyGamesHomeSlot_mobileSlot__BaQbp",
                placeholder: "DailyGamesHomeSlot_placeholder__h3XJr",
                desktopPlaceholder: "DailyGamesHomeSlot_desktopPlaceholder__iLGl_",
                mobilePlaceholder: "DailyGamesHomeSlot_mobilePlaceholder__6ZAnf"
            }
        },
        83509: e => {
            e.exports = {
                czyButton: "RecommendedCarouselTitle_czyButton__yDkiR",
                "czyButton--contained--purple": "RecommendedCarouselTitle_czyButton--contained--purple__CDJ3r",
                "czyButton--contained--white": "RecommendedCarouselTitle_czyButton--contained--white__3XcoI",
                "czyButton--contained--grey": "RecommendedCarouselTitle_czyButton--contained--grey__ILHs0",
                "czyButton--contained--warning": "RecommendedCarouselTitle_czyButton--contained--warning__gWH8E",
                "czyButton--contained--alert": "RecommendedCarouselTitle_czyButton--contained--alert__r6RwD",
                "czyButton--contained--success": "RecommendedCarouselTitle_czyButton--contained--success__PHdy_",
                "czyButton--contained--black": "RecommendedCarouselTitle_czyButton--contained--black__YGoo5",
                "czyButton--contained--green-gradient": "RecommendedCarouselTitle_czyButton--contained--green-gradient___ZGty",
                "czyButton--contained--animated-green-gradient": "RecommendedCarouselTitle_czyButton--contained--animated-green-gradient__qorc1",
                "scroll-gradient": "RecommendedCarouselTitle_scroll-gradient__RiY0y",
                "czyButton--outlined--purple": "RecommendedCarouselTitle_czyButton--outlined--purple__T3DBc",
                "czyButton--link--purple": "RecommendedCarouselTitle_czyButton--link--purple__Y2FbH",
                "czyButton--outlined--white": "RecommendedCarouselTitle_czyButton--outlined--white__Awbu_",
                "czyButton--link--white": "RecommendedCarouselTitle_czyButton--link--white__WirFe",
                "czyButton--outlined--grey": "RecommendedCarouselTitle_czyButton--outlined--grey__uFn0x",
                "czyButton--link--grey": "RecommendedCarouselTitle_czyButton--link--grey__nrD1l",
                "czyButton--outlined--warning": "RecommendedCarouselTitle_czyButton--outlined--warning__FmWod",
                "czyButton--link--warning": "RecommendedCarouselTitle_czyButton--link--warning__GpkDC",
                "czyButton--outlined--alert": "RecommendedCarouselTitle_czyButton--outlined--alert__jThmG",
                "czyButton--link--alert": "RecommendedCarouselTitle_czyButton--link--alert__JKNX2",
                "czyButton--outlined--success": "RecommendedCarouselTitle_czyButton--outlined--success__WLZG8",
                "czyButton--link--success": "RecommendedCarouselTitle_czyButton--link--success__JGEGU",
                "czyButton--outlined": "RecommendedCarouselTitle_czyButton--outlined__LS_T_",
                "czyButton--disabled": "RecommendedCarouselTitle_czyButton--disabled___z9Y5",
                "czyButton--height50": "RecommendedCarouselTitle_czyButton--height50__ZAG2U",
                "czyButton--height34": "RecommendedCarouselTitle_czyButton--height34__Z_UdL",
                "czyButton--height28": "RecommendedCarouselTitle_czyButton--height28__mTl2X",
                "czyButton--fullWidth": "RecommendedCarouselTitle_czyButton--fullWidth__fNC8o",
                "czyButton--headerIcon": "RecommendedCarouselTitle_czyButton--headerIcon__p7Qh5",
                "czyButton--headerIcon--desktop": "RecommendedCarouselTitle_czyButton--headerIcon--desktop__wGHZS",
                "czyButton--headerIcon--mobile": "RecommendedCarouselTitle_czyButton--headerIcon--mobile__ulwIk",
                "czyButton--headerIcon--withLabel": "RecommendedCarouselTitle_czyButton--headerIcon--withLabel__ZEoU6",
                recommendedTitle: "RecommendedCarouselTitle_recommendedTitle__M_lew",
                loaderWrapper: "RecommendedCarouselTitle_loaderWrapper__Aatge",
                flag: "RecommendedCarouselTitle_flag__Lfxoa"
            }
        },
        84040: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(55729),
                a = n(71237),
                l = n(4230),
                r = n(71684),
                i = n(74532);
            let c = () => {
                let {
                    modelService: e,
                    experimentService: t
                } = o.useContext(r.A).services, n = o.useContext(l.A), {
                    countryCode: c
                } = o.useContext(i.A), {
                    clusterMap: s
                } = a.lF(), u = o.useRef(s);
                return o.useEffect(() => {
                    u.current = s
                }, [s]), {
                    getModelGames: o.useCallback(async o => {
                        let {
                            numGames: a,
                            gameId: l,
                            place: r
                        } = o, i = o.forceModelName ? ? t.getModelName(r);
                        return e.getRelatedModelGames(i, n, c, u.current, {
                            place: r,
                            gameId: l,
                            page: 1,
                            size: a
                        })
                    }, [n, c, t, e])
                }
            }
        },
        84903: e => {
            e.exports = {
                sheet: "OfflineGameDownloadSheet_sheet__J_BCd",
                scroll: "OfflineGameDownloadSheet_scroll__YYPfG",
                intro: "OfflineGameDownloadSheet_intro__hTDj2",
                downloadedIcon: "OfflineGameDownloadSheet_downloadedIcon__G6c5i",
                title: "OfflineGameDownloadSheet_title__bueku",
                subtitle: "OfflineGameDownloadSheet_subtitle__bmy1N",
                list: "OfflineGameDownloadSheet_list__e3TrS",
                sectionTitle: "OfflineGameDownloadSheet_sectionTitle__F9MWl",
                footer: "OfflineGameDownloadSheet_footer__qb2u8",
                cta: "OfflineGameDownloadSheet_cta__hNwyb",
                dismiss: "OfflineGameDownloadSheet_dismiss__3ESQn"
            }
        },
        88498: e => {
            e.exports = {
                czyButton: "GameThumbAll_czyButton__XO3sZ",
                "czyButton--contained--purple": "GameThumbAll_czyButton--contained--purple__3sbOu",
                "czyButton--contained--white": "GameThumbAll_czyButton--contained--white__YgRj7",
                "czyButton--contained--grey": "GameThumbAll_czyButton--contained--grey__UBU__",
                "czyButton--contained--warning": "GameThumbAll_czyButton--contained--warning__oN5Yg",
                "czyButton--contained--alert": "GameThumbAll_czyButton--contained--alert__SFmVY",
                "czyButton--contained--success": "GameThumbAll_czyButton--contained--success__SgKpE",
                "czyButton--contained--black": "GameThumbAll_czyButton--contained--black__48Sii",
                "czyButton--contained--green-gradient": "GameThumbAll_czyButton--contained--green-gradient__0NM3O",
                "czyButton--contained--animated-green-gradient": "GameThumbAll_czyButton--contained--animated-green-gradient__FBt49",
                "scroll-gradient": "GameThumbAll_scroll-gradient__4dV7l",
                "czyButton--outlined--purple": "GameThumbAll_czyButton--outlined--purple__b4eTp",
                "czyButton--link--purple": "GameThumbAll_czyButton--link--purple__o5mEm",
                "czyButton--outlined--white": "GameThumbAll_czyButton--outlined--white__XKogZ",
                "czyButton--link--white": "GameThumbAll_czyButton--link--white___C1HH",
                "czyButton--outlined--grey": "GameThumbAll_czyButton--outlined--grey__KZMS_",
                "czyButton--link--grey": "GameThumbAll_czyButton--link--grey__meCGO",
                "czyButton--outlined--warning": "GameThumbAll_czyButton--outlined--warning__hOySg",
                "czyButton--link--warning": "GameThumbAll_czyButton--link--warning__y9qrZ",
                "czyButton--outlined--alert": "GameThumbAll_czyButton--outlined--alert__YMjAS",
                "czyButton--link--alert": "GameThumbAll_czyButton--link--alert__6lRh1",
                "czyButton--outlined--success": "GameThumbAll_czyButton--outlined--success__UifAt",
                "czyButton--link--success": "GameThumbAll_czyButton--link--success__4ii66",
                "czyButton--outlined": "GameThumbAll_czyButton--outlined__Skc1o",
                "czyButton--disabled": "GameThumbAll_czyButton--disabled__KlRZ0",
                "czyButton--height50": "GameThumbAll_czyButton--height50__LMF0m",
                "czyButton--height34": "GameThumbAll_czyButton--height34__DG3X2",
                "czyButton--height28": "GameThumbAll_czyButton--height28__0PLDH",
                "czyButton--fullWidth": "GameThumbAll_czyButton--fullWidth__9dVtI",
                "czyButton--headerIcon": "GameThumbAll_czyButton--headerIcon__nakYU",
                "czyButton--headerIcon--desktop": "GameThumbAll_czyButton--headerIcon--desktop__CUk_0",
                "czyButton--headerIcon--mobile": "GameThumbAll_czyButton--headerIcon--mobile__k7_VK",
                "czyButton--headerIcon--withLabel": "GameThumbAll_czyButton--headerIcon--withLabel__nZroN",
                gameThumbAllLink: "GameThumbAll_gameThumbAllLink__N9UeT",
                gameThumbAllLinkDesktopSearchGrid: "GameThumbAll_gameThumbAllLinkDesktopSearchGrid__IJAdp",
                gameThumbAllLinkMobileSearchGrid: "GameThumbAll_gameThumbAllLinkMobileSearchGrid__HFxsZ",
                gameThumbAll: "GameThumbAll_gameThumbAll__EixYL",
                gameThumbAllLabel: "GameThumbAll_gameThumbAllLabel__v_00l"
            }
        },
        90094: e => {
            e.exports = {
                czyButton: "OriginalsGameThumb_czyButton__dhK5S",
                "czyButton--contained--purple": "OriginalsGameThumb_czyButton--contained--purple__QrMgd",
                "czyButton--contained--white": "OriginalsGameThumb_czyButton--contained--white__mAIub",
                "czyButton--contained--grey": "OriginalsGameThumb_czyButton--contained--grey__ntk9T",
                "czyButton--contained--warning": "OriginalsGameThumb_czyButton--contained--warning__Hvi5r",
                "czyButton--contained--alert": "OriginalsGameThumb_czyButton--contained--alert__KEMH7",
                "czyButton--contained--success": "OriginalsGameThumb_czyButton--contained--success___IdBp",
                "czyButton--contained--black": "OriginalsGameThumb_czyButton--contained--black__n2CWz",
                "czyButton--contained--green-gradient": "OriginalsGameThumb_czyButton--contained--green-gradient__FDf_q",
                "czyButton--contained--animated-green-gradient": "OriginalsGameThumb_czyButton--contained--animated-green-gradient__O1fW9",
                "scroll-gradient": "OriginalsGameThumb_scroll-gradient__XDA_z",
                "czyButton--outlined--purple": "OriginalsGameThumb_czyButton--outlined--purple__eILN1",
                "czyButton--link--purple": "OriginalsGameThumb_czyButton--link--purple__3LTFH",
                "czyButton--outlined--white": "OriginalsGameThumb_czyButton--outlined--white__3JLZK",
                "czyButton--link--white": "OriginalsGameThumb_czyButton--link--white__QGMos",
                "czyButton--outlined--grey": "OriginalsGameThumb_czyButton--outlined--grey___bffy",
                "czyButton--link--grey": "OriginalsGameThumb_czyButton--link--grey__zRKfQ",
                "czyButton--outlined--warning": "OriginalsGameThumb_czyButton--outlined--warning__BCuwT",
                "czyButton--link--warning": "OriginalsGameThumb_czyButton--link--warning__FzBOK",
                "czyButton--outlined--alert": "OriginalsGameThumb_czyButton--outlined--alert__62c3I",
                "czyButton--link--alert": "OriginalsGameThumb_czyButton--link--alert__YMGKU",
                "czyButton--outlined--success": "OriginalsGameThumb_czyButton--outlined--success__HRlzp",
                "czyButton--link--success": "OriginalsGameThumb_czyButton--link--success__bGf2e",
                "czyButton--outlined": "OriginalsGameThumb_czyButton--outlined__XIDtT",
                "czyButton--disabled": "OriginalsGameThumb_czyButton--disabled__9N2Jw",
                "czyButton--height50": "OriginalsGameThumb_czyButton--height50__Fh4Ed",
                "czyButton--height34": "OriginalsGameThumb_czyButton--height34__gkvdU",
                "czyButton--height28": "OriginalsGameThumb_czyButton--height28__jid2S",
                "czyButton--fullWidth": "OriginalsGameThumb_czyButton--fullWidth__4a5nQ",
                "czyButton--headerIcon": "OriginalsGameThumb_czyButton--headerIcon__7TO_5",
                "czyButton--headerIcon--desktop": "OriginalsGameThumb_czyButton--headerIcon--desktop__54CXO",
                "czyButton--headerIcon--mobile": "OriginalsGameThumb_czyButton--headerIcon--mobile___ZPhQ",
                "czyButton--headerIcon--withLabel": "OriginalsGameThumb_czyButton--headerIcon--withLabel__yl_hA",
                imageSkeleton: "OriginalsGameThumb_imageSkeleton__8zm_y",
                originalsGameLink: "OriginalsGameThumb_originalsGameLink__XH7NN",
                portrait: "OriginalsGameThumb_portrait__BB_uz",
                isMobile: "OriginalsGameThumb_isMobile__Roy7_",
                square: "OriginalsGameThumb_square__HDuqf",
                landscape: "OriginalsGameThumb_landscape__RmPbK",
                isResponsive: "OriginalsGameThumb_isResponsive__pDvtH",
                gameThumbMedia: "OriginalsGameThumb_gameThumbMedia__iklFc",
                hasHoverOverlay: "OriginalsGameThumb_hasHoverOverlay__p0KlY",
                gameName: "OriginalsGameThumb_gameName__h3BGl",
                gameCategory: "OriginalsGameThumb_gameCategory__X8s43"
            }
        },
        90874: (e, t, n) => {
            "use strict";
            n.d(t, {
                UT: () => d,
                fY: () => s,
                v7: () => u,
                xm: () => _
            });
            var o = n(28478),
                a = n(36552),
                l = n(94409);
            let r = o.A.LocalStorage,
                i = "czy_onboarding_results",
                c = (0, a.Vb)(() => r.removeItem(i));

            function s(e) {
                return e.join("|")
            }

            function u(e) {
                c();
                let t = r.getItem(i);
                if (!t) return null;
                try {
                    let n = JSON.parse(t);
                    if (n ? .version !== 3 || n.picksHash !== e) return null;
                    return n
                } catch {
                    return null
                }
            }

            function d(e) {
                return e.tabs.map(t => ({
                    id: t.id,
                    label: t.label,
                    games: t.gameIds.map(t => e.games[t]).filter(e => void 0 !== e)
                })).filter(e => e.id === l.EB || e.games.length > 0)
            }

            function _(e, t) {
                let n = {};
                t.forEach(e => e.games.forEach(e => n[e.id] = e));
                let o = JSON.stringify({
                    version: 3,
                    picksHash: e,
                    tabs: t.map(e => ({
                        id: e.id,
                        label: e.label,
                        gameIds: e.games.map(e => e.id)
                    })),
                    games: n,
                    createdAt: Date.now()
                });
                return r.setItem(i, o), r.getItem(i) === o
            }
        },
        91831: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var o = n(6029),
                a = n(75155),
                l = n(55729),
                r = n(95669),
                i = n.n(r),
                c = n(61411),
                s = n(81930),
                u = n(74198);
            let d = e => {
                let t, n, r, d, _, m, g, y, h, B, z, f, C, p, b, x, w, k, T = (0, a.c)(49),
                    {
                        canonical: S,
                        title: j,
                        description: v,
                        imageUrl: A,
                        imageWidth: I,
                        imageHeight: P,
                        imageQuality: O,
                        type: L
                    } = e,
                    G = void 0 === A ? "crazygames/share.png" : A,
                    R = void 0 === I ? 1200 : I,
                    N = void 0 === P ? 630 : P,
                    {
                        locale: E
                    } = l.useContext(u.A);
                T[0] !== N || T[1] !== O || T[2] !== G || T[3] !== R ? (t = (0, s.Ay)(G, {
                    width: R,
                    height: N,
                    fit: "crop",
                    quality: O
                }), T[0] = N, T[1] = O, T[2] = G, T[3] = R, T[4] = t) : t = T[4];
                let D = t;
                return T[5] !== S ? (n = (0, o.jsx)("meta", {
                    property: "og:url",
                    content: S
                }), T[5] = S, T[6] = n) : n = T[6], T[7] !== j ? (r = (0, o.jsx)("meta", {
                    property: "og:title",
                    content: j
                }), T[7] = j, T[8] = r) : r = T[8], T[9] !== v ? (d = (0, o.jsx)("meta", {
                    property: "og:description",
                    content: v
                }), T[9] = v, T[10] = d) : d = T[10], T[11] !== E ? (_ = (0, c.qz)(E), T[11] = E, T[12] = _) : _ = T[12], T[13] !== _ ? (m = (0, o.jsx)("meta", {
                    property: "og:locale",
                    content: _
                }), T[13] = _, T[14] = m) : m = T[14], T[15] !== D ? (g = (0, o.jsx)("meta", {
                    property: "og:image",
                    content: D
                }), T[15] = D, T[16] = g) : g = T[16], T[17] !== R ? (y = R.toString(), T[17] = R, T[18] = y) : y = T[18], T[19] !== y ? (h = (0, o.jsx)("meta", {
                    property: "og:image:width",
                    content: y
                }), T[19] = y, T[20] = h) : h = T[20], T[21] !== N ? (B = N.toString(), T[21] = N, T[22] = B) : B = T[22], T[23] !== B ? (z = (0, o.jsx)("meta", {
                    property: "og:image:height",
                    content: B
                }), T[23] = B, T[24] = z) : z = T[24], T[25] !== L ? (f = L && (0, o.jsx)("meta", {
                    property: "og:type",
                    content: L
                }), T[25] = L, T[26] = f) : f = T[26], T[27] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, o.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), T[27] = C) : C = T[27], T[28] !== S ? (p = (0, o.jsx)("meta", {
                    property: "twitter:url",
                    content: S
                }), T[28] = S, T[29] = p) : p = T[29], T[30] !== j ? (b = (0, o.jsx)("meta", {
                    property: "twitter:title",
                    content: j
                }), T[30] = j, T[31] = b) : b = T[31], T[32] !== v ? (x = (0, o.jsx)("meta", {
                    property: "twitter:description",
                    content: v
                }), T[32] = v, T[33] = x) : x = T[33], T[34] !== D ? (w = (0, o.jsx)("meta", {
                    property: "twitter:image",
                    content: D
                }), T[34] = D, T[35] = w) : w = T[35], T[36] !== g || T[37] !== h || T[38] !== z || T[39] !== f || T[40] !== p || T[41] !== b || T[42] !== x || T[43] !== w || T[44] !== n || T[45] !== r || T[46] !== d || T[47] !== m ? (k = (0, o.jsxs)(i(), {
                    children: [n, r, d, m, g, h, z, f, C, p, b, x, w]
                }), T[36] = g, T[37] = h, T[38] = z, T[39] = f, T[40] = p, T[41] = b, T[42] = x, T[43] = w, T[44] = n, T[45] = r, T[46] = d, T[47] = m, T[48] = k) : k = T[48], k
            }
        },
        91984: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(6029),
                a = n(75155);
            n(55729);
            var l = n(7842),
                r = n(31412),
                i = n.n(r);
            let c = () => {
                let e, t = (0, a.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)("div", {
                    className: i().container,
                    children: (0, o.jsx)(l.y, {
                        size: "large",
                        tone: "brand"
                    })
                }), t[0] = e) : e = t[0], e
            }
        },
        94409: (e, t, n) => {
            "use strict";
            n.d(t, {
                EB: () => r,
                Sg: () => u,
                cF: () => l,
                fX: () => a,
                fk: () => d,
                g0: () => i
            });
            var o = n(37880);
            let a = 30,
                l = o.QG,
                r = "all";

            function i(e, t, n) {
                let o = [],
                    a = Math.max(0, ...e.map(e => e.length));
                for (let l = 0; l < a && o.length < n; l++)
                    for (let a of e) {
                        let e = a[l];
                        if (!(!e || t.has(e.slug)) && (t.add(e.slug), o.push(e), o.length >= n)) break
                    }
                return o
            }

            function c(e) {
                return e.slice(0, e.length - e.length % 5)
            }

            function s(e) {
                let t = new Set;
                return e.filter(e => !t.has(e.slug) && (t.add(e.slug), !0))
            }

            function u(e) {
                let t = e.slice(0, l),
                    n = i(t.map(e => e.games), new Set, a),
                    o = t.map(e => ({
                        id: e.id,
                        label: e.label,
                        games: c(s(e.games).slice(0, a))
                    })).filter(e => e.games.length >= 5);
                return o.length <= 1 ? [{
                    id: r,
                    games: n
                }] : [{
                    id: r,
                    games: n
                }, ...o]
            }

            function d(e, t) {
                let n = e.find(e => e.id === r);
                if (!n) return [];
                let o = s(t),
                    l = new Set(o.map(e => e.slug)),
                    i = c([...o, ...n.games.filter(e => !l.has(e.slug))].slice(0, a));
                return i.length < 5 ? [] : e.map(e => e.id === r ? { ...e,
                    games: i
                } : e)
            }
        },
        95116: e => {
            e.exports = {
                czyButton: "IntentCarousel_czyButton__p9uPl",
                "czyButton--contained--purple": "IntentCarousel_czyButton--contained--purple__EKFtK",
                "czyButton--contained--white": "IntentCarousel_czyButton--contained--white__YkY4g",
                "czyButton--contained--grey": "IntentCarousel_czyButton--contained--grey__hwzYU",
                "czyButton--contained--warning": "IntentCarousel_czyButton--contained--warning__U7ipY",
                "czyButton--contained--alert": "IntentCarousel_czyButton--contained--alert__26BiC",
                "czyButton--contained--success": "IntentCarousel_czyButton--contained--success__D9On0",
                "czyButton--contained--black": "IntentCarousel_czyButton--contained--black__iwF4M",
                "czyButton--contained--green-gradient": "IntentCarousel_czyButton--contained--green-gradient__pDQrR",
                "czyButton--contained--animated-green-gradient": "IntentCarousel_czyButton--contained--animated-green-gradient__v1avQ",
                "scroll-gradient": "IntentCarousel_scroll-gradient__Oev7x",
                "czyButton--outlined--purple": "IntentCarousel_czyButton--outlined--purple__vyaCM",
                "czyButton--link--purple": "IntentCarousel_czyButton--link--purple__7D9Vy",
                "czyButton--outlined--white": "IntentCarousel_czyButton--outlined--white__EUuwx",
                "czyButton--link--white": "IntentCarousel_czyButton--link--white__EUHrq",
                "czyButton--outlined--grey": "IntentCarousel_czyButton--outlined--grey__ydOBF",
                "czyButton--link--grey": "IntentCarousel_czyButton--link--grey__QOabz",
                "czyButton--outlined--warning": "IntentCarousel_czyButton--outlined--warning__4nCRi",
                "czyButton--link--warning": "IntentCarousel_czyButton--link--warning__J0xFn",
                "czyButton--outlined--alert": "IntentCarousel_czyButton--outlined--alert__LNW94",
                "czyButton--link--alert": "IntentCarousel_czyButton--link--alert__GyHiW",
                "czyButton--outlined--success": "IntentCarousel_czyButton--outlined--success__znHaD",
                "czyButton--link--success": "IntentCarousel_czyButton--link--success__m_If4",
                "czyButton--outlined": "IntentCarousel_czyButton--outlined__7K1D_",
                "czyButton--disabled": "IntentCarousel_czyButton--disabled__OSG4I",
                "czyButton--height50": "IntentCarousel_czyButton--height50__eeiH5",
                "czyButton--height34": "IntentCarousel_czyButton--height34__linya",
                "czyButton--height28": "IntentCarousel_czyButton--height28__qbKWS",
                "czyButton--fullWidth": "IntentCarousel_czyButton--fullWidth__unt1L",
                "czyButton--headerIcon": "IntentCarousel_czyButton--headerIcon__7j8N1",
                "czyButton--headerIcon--desktop": "IntentCarousel_czyButton--headerIcon--desktop__9UTt2",
                "czyButton--headerIcon--mobile": "IntentCarousel_czyButton--headerIcon--mobile__ePgr_",
                "czyButton--headerIcon--withLabel": "IntentCarousel_czyButton--headerIcon--withLabel__C1l0f",
                intentCarousel: "IntentCarousel_intentCarousel__Y8kFl",
                title: "IntentCarousel_title__FoQk3",
                intentBackground: "IntentCarousel_intentBackground__Fgbt5"
            }
        },
        96912: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var o = n(6029),
                a = n(75155);
            n(56797);
            let l = e => {
                let t, n, l, r = (0, a.c)(7),
                    {
                        code: i
                    } = e;
                r[0] !== i ? (t = i.toLowerCase(), r[0] = i, r[1] = t) : t = r[1];
                let c = t,
                    s = `fi fi-${c}`;
                return r[2] !== i ? (n = i.toUpperCase(), r[2] = i, r[3] = n) : n = r[3], r[4] !== s || r[5] !== n ? (l = (0, o.jsx)("span", {
                    className: s,
                    "aria-label": n
                }), r[4] = s, r[5] = n, r[6] = l) : l = r[6], l
            }
        },
        99703: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => l
            });
            var o = n(55729),
                a = n(25312);
            let l = e => {
                let [t, n] = o.useState(null), l = o.useRef(e);
                e && (l.current = e);
                let r = e || l.current;
                return o.useEffect(() => {
                    let e = null,
                        t = !1,
                        o = () => {
                            t || n(new Date)
                        };
                    o();
                    let a = () => {
                        let t = new Date(r).getTime();
                        if (!Number.isFinite(t)) return;
                        let n = t - Date.now();
                        !(n <= 0) && (e = window.setTimeout(() => {
                            o(), a()
                        }, n > 864e5 ? n % 36e5 || 36e5 : n > 36e5 ? n % 6e4 || 6e4 : n % 1e3 || 1e3))
                    };
                    return a(), () => {
                        t = !0, null !== e && window.clearTimeout(e)
                    }
                }, [r]), null === t ? null : (0, a.qz)(r, t)
            }
        },
        99939: e => {
            e.exports = {
                czyButton: "PromotionalOfflineContentCard_czyButton__Cg__d",
                "czyButton--contained--purple": "PromotionalOfflineContentCard_czyButton--contained--purple__DkTJl",
                "czyButton--contained--white": "PromotionalOfflineContentCard_czyButton--contained--white__CiX0s",
                "czyButton--contained--grey": "PromotionalOfflineContentCard_czyButton--contained--grey__MuTo9",
                "czyButton--contained--warning": "PromotionalOfflineContentCard_czyButton--contained--warning__y7XTh",
                "czyButton--contained--alert": "PromotionalOfflineContentCard_czyButton--contained--alert__YrrBX",
                "czyButton--contained--success": "PromotionalOfflineContentCard_czyButton--contained--success__XC_r_",
                "czyButton--contained--black": "PromotionalOfflineContentCard_czyButton--contained--black__J_96j",
                "czyButton--contained--green-gradient": "PromotionalOfflineContentCard_czyButton--contained--green-gradient__j_Olh",
                "czyButton--contained--animated-green-gradient": "PromotionalOfflineContentCard_czyButton--contained--animated-green-gradient__4z_eZ",
                "scroll-gradient": "PromotionalOfflineContentCard_scroll-gradient__2CZNh",
                "czyButton--outlined--purple": "PromotionalOfflineContentCard_czyButton--outlined--purple__8GVua",
                "czyButton--link--purple": "PromotionalOfflineContentCard_czyButton--link--purple__5vecg",
                "czyButton--outlined--white": "PromotionalOfflineContentCard_czyButton--outlined--white__cGdHx",
                "czyButton--link--white": "PromotionalOfflineContentCard_czyButton--link--white__e_lKE",
                "czyButton--outlined--grey": "PromotionalOfflineContentCard_czyButton--outlined--grey__FyBkN",
                "czyButton--link--grey": "PromotionalOfflineContentCard_czyButton--link--grey__Opyst",
                "czyButton--outlined--warning": "PromotionalOfflineContentCard_czyButton--outlined--warning__pqFsd",
                "czyButton--link--warning": "PromotionalOfflineContentCard_czyButton--link--warning__KR_aE",
                "czyButton--outlined--alert": "PromotionalOfflineContentCard_czyButton--outlined--alert__rflcd",
                "czyButton--link--alert": "PromotionalOfflineContentCard_czyButton--link--alert__XvegG",
                "czyButton--outlined--success": "PromotionalOfflineContentCard_czyButton--outlined--success__waz1I",
                "czyButton--link--success": "PromotionalOfflineContentCard_czyButton--link--success__8d4_X",
                "czyButton--outlined": "PromotionalOfflineContentCard_czyButton--outlined__zH8lj",
                "czyButton--disabled": "PromotionalOfflineContentCard_czyButton--disabled__e3rw8",
                "czyButton--height50": "PromotionalOfflineContentCard_czyButton--height50__rgZ3C",
                "czyButton--height34": "PromotionalOfflineContentCard_czyButton--height34__SvFcQ",
                "czyButton--height28": "PromotionalOfflineContentCard_czyButton--height28__vHopD",
                "czyButton--fullWidth": "PromotionalOfflineContentCard_czyButton--fullWidth__ZbjVm",
                "czyButton--headerIcon": "PromotionalOfflineContentCard_czyButton--headerIcon__98Scn",
                "czyButton--headerIcon--desktop": "PromotionalOfflineContentCard_czyButton--headerIcon--desktop__clquH",
                "czyButton--headerIcon--mobile": "PromotionalOfflineContentCard_czyButton--headerIcon--mobile__CIzQ8",
                "czyButton--headerIcon--withLabel": "PromotionalOfflineContentCard_czyButton--headerIcon--withLabel__s25We",
                root: "PromotionalOfflineContentCard_root__m3v6x",
                dismissing: "PromotionalOfflineContentCard_dismissing__bX9PR",
                cardButton: "PromotionalOfflineContentCard_cardButton__7fFq6",
                dismissIcon: "PromotionalOfflineContentCard_dismissIcon__3fr6F",
                backgroundImage: "PromotionalOfflineContentCard_backgroundImage__qXYeD",
                mainContent: "PromotionalOfflineContentCard_mainContent__4FoNA",
                infoTextSection: "PromotionalOfflineContentCard_infoTextSection__teHrK",
                infoTextHeader: "PromotionalOfflineContentCard_infoTextHeader__eJLIY",
                infoTextSubHeader: "PromotionalOfflineContentCard_infoTextSubHeader__IOGWh",
                downloadSection: "PromotionalOfflineContentCard_downloadSection__hyDX4",
                downloadIcon: "PromotionalOfflineContentCard_downloadIcon__crlkg",
                downloadLabel: "PromotionalOfflineContentCard_downloadLabel__O2Lae"
            }
        }
    },
    e => {
        e.O(0, [110, 6847, 5869, 89247, 88823, 8603, 81259, 32627, 46593, 90636, 38792], () => e(e.s = 17703)), _N_E = e.O()
    }
]);