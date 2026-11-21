! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9508899e-ac4b-4a6e-9346-ffe499c51c90", e._sentryDebugIdIdentifier = "sentry-dbid-9508899e-ac4b-4a6e-9346-ffe499c51c90")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31534, 48200], {
        952: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var i = n(6029),
                o = n(75155);
            n(55729);
            var l = n(55654),
                a = n(95669),
                r = n.n(a),
                c = n(13246),
                u = n(61411);
            let s = e => {
                let t, n, l, a, u, s, y, p, h = (0, o.c)(21),
                    {
                        title: g,
                        metaDescription: m,
                        canonical: B,
                        alternatives: z,
                        children: v
                    } = e;
                h[0] !== z ? (t = void 0 === z ? [] : z, h[0] = z, h[1] = t) : t = h[1];
                let M = t;
                h[2] !== M ? (n = M.find(d), h[2] = M, h[3] = n) : n = h[3];
                let x = n,
                    S = "development" === c.A.Instance.environment,
                    w = `${S?"\uD83E\uDD99 - ":""}${g}`;
                return h[4] !== w ? (l = (0, i.jsx)("title", {
                    children: w
                }), h[4] = w, h[5] = l) : l = h[5], h[6] !== m ? (a = (0, i.jsx)("meta", {
                    name: "description",
                    content: m
                }), h[6] = m, h[7] = a) : a = h[7], h[8] !== B ? (u = B && (0, i.jsx)("link", {
                    rel: "canonical",
                    href: B
                }), h[8] = B, h[9] = u) : u = h[9], h[10] !== M ? (s = M.map(_), h[10] = M, h[11] = s) : s = h[11], h[12] !== x ? (y = x && (0, i.jsx)("link", {
                    rel: "alternate",
                    href: x.href,
                    hrefLang: "x-default"
                }), h[12] = x, h[13] = y) : y = h[13], h[14] !== v || h[15] !== l || h[16] !== a || h[17] !== u || h[18] !== s || h[19] !== y ? (p = (0, i.jsxs)(r(), {
                    children: [l, a, u, s, y, v]
                }), h[14] = v, h[15] = l, h[16] = a, h[17] = u, h[18] = s, h[19] = y, h[20] = p) : p = h[20], p
            };

            function d(e) {
                let {
                    locale: t
                } = e;
                return t === u.Xn
            }

            function _(e) {
                let {
                    href: t,
                    locale: n
                } = e, o = (0, l.lR)((0, u.qz)(n));
                return (0, i.jsx)("link", {
                    rel: "alternate",
                    hrefLang: o,
                    href: t
                }, o)
            }
        },
        3016: e => {
            e.exports = {
                divider: "Divider_divider__rv5PT",
                horizontal: "Divider_horizontal__YEZTp",
                vertical: "Divider_vertical__PF74_",
                my1: "Divider_my1__qn2V_",
                borderBlack50: "Divider_borderBlack50__1TBhI",
                marginTopSpacing: "Divider_marginTopSpacing__G3HQA"
            }
        },
        14465: (e, t, n) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/multiplayer/[[...page]]", function() {
                return n(85650)
            }])
        },
        22032: e => {
            e.exports = {
                czyButton: "MultiplayerHeader_czyButton__3stxp",
                "czyButton--contained--purple": "MultiplayerHeader_czyButton--contained--purple__1uw1M",
                "czyButton--contained--white": "MultiplayerHeader_czyButton--contained--white__d4zJh",
                "czyButton--contained--grey": "MultiplayerHeader_czyButton--contained--grey__Vo3uB",
                "czyButton--contained--warning": "MultiplayerHeader_czyButton--contained--warning__NShpg",
                "czyButton--contained--alert": "MultiplayerHeader_czyButton--contained--alert__etFnm",
                "czyButton--contained--success": "MultiplayerHeader_czyButton--contained--success__nPgTV",
                "czyButton--contained--black": "MultiplayerHeader_czyButton--contained--black__zJqR3",
                "czyButton--contained--green-gradient": "MultiplayerHeader_czyButton--contained--green-gradient__qoYHq",
                "czyButton--contained--animated-green-gradient": "MultiplayerHeader_czyButton--contained--animated-green-gradient__F_kuD",
                "scroll-gradient": "MultiplayerHeader_scroll-gradient__ZiJIK",
                "czyButton--outlined--purple": "MultiplayerHeader_czyButton--outlined--purple__jhTt_",
                "czyButton--link--purple": "MultiplayerHeader_czyButton--link--purple__7vYNV",
                "czyButton--outlined--white": "MultiplayerHeader_czyButton--outlined--white__n9o1R",
                "czyButton--link--white": "MultiplayerHeader_czyButton--link--white___rkc0",
                "czyButton--outlined--grey": "MultiplayerHeader_czyButton--outlined--grey__tF6_s",
                "czyButton--link--grey": "MultiplayerHeader_czyButton--link--grey__Kl_vb",
                "czyButton--outlined--warning": "MultiplayerHeader_czyButton--outlined--warning__J_YP9",
                "czyButton--link--warning": "MultiplayerHeader_czyButton--link--warning__H2fFC",
                "czyButton--outlined--alert": "MultiplayerHeader_czyButton--outlined--alert__kBGnq",
                "czyButton--link--alert": "MultiplayerHeader_czyButton--link--alert__mX8PH",
                "czyButton--outlined--success": "MultiplayerHeader_czyButton--outlined--success__N2ro9",
                "czyButton--link--success": "MultiplayerHeader_czyButton--link--success__n2nfA",
                "czyButton--outlined": "MultiplayerHeader_czyButton--outlined__dSB84",
                "czyButton--disabled": "MultiplayerHeader_czyButton--disabled__Ytoxb",
                "czyButton--height50": "MultiplayerHeader_czyButton--height50__VHhnv",
                "czyButton--height34": "MultiplayerHeader_czyButton--height34__DQCnE",
                "czyButton--height28": "MultiplayerHeader_czyButton--height28__mfgmb",
                "czyButton--fullWidth": "MultiplayerHeader_czyButton--fullWidth__o_4bj",
                "czyButton--headerIcon": "MultiplayerHeader_czyButton--headerIcon__XIjNF",
                "czyButton--headerIcon--desktop": "MultiplayerHeader_czyButton--headerIcon--desktop__YQsxy",
                "czyButton--headerIcon--mobile": "MultiplayerHeader_czyButton--headerIcon--mobile__extWT",
                "czyButton--headerIcon--withLabel": "MultiplayerHeader_czyButton--headerIcon--withLabel__HYS8o",
                root: "MultiplayerHeader_root__FsVVF",
                gradientOnline: "MultiplayerHeader_gradientOnline__ZkP9d",
                gradientOnlineWithFriends: "MultiplayerHeader_gradientOnlineWithFriends__YhTsC",
                gradientLocal: "MultiplayerHeader_gradientLocal__z9zFq",
                titleWrapper: "MultiplayerHeader_titleWrapper__J5Bxe",
                subTags: "MultiplayerHeader_subTags__dEh9s",
                subTag: "MultiplayerHeader_subTag__e9cDO",
                hoverLocal: "MultiplayerHeader_hoverLocal__MR39c",
                hoverFriends: "MultiplayerHeader_hoverFriends__p_Nhc",
                hoverOnline: "MultiplayerHeader_hoverOnline__MGLBY",
                activeLocal: "MultiplayerHeader_activeLocal__Ui_ov",
                activeFriends: "MultiplayerHeader_activeFriends__BVA26",
                activeOnline: "MultiplayerHeader_activeOnline__WAeDx",
                tabIcon: "MultiplayerHeader_tabIcon__PlV7d",
                iconOnline: "MultiplayerHeader_iconOnline__qj5cG",
                iconFriends: "MultiplayerHeader_iconFriends__hxcgT",
                iconLocal: "MultiplayerHeader_iconLocal__m6mXt",
                infoRow: "MultiplayerHeader_infoRow__qJLMP",
                howToPlayButton: "MultiplayerHeader_howToPlayButton___Kv7G",
                helpIcon: "MultiplayerHeader_helpIcon__IiIIe",
                shortDescription: "MultiplayerHeader_shortDescription__vrG0I",
                sortingWrapper: "MultiplayerHeader_sortingWrapper__al6MT",
                isMobile: "MultiplayerHeader_isMobile__p6D8q"
            }
        },
        23033: (e, t, n) => {
            "use strict";
            n.d(t, {
                $Y: () => f,
                AJ: () => g,
                CZ: () => w,
                EJ: () => M,
                H_: () => m,
                Qe: () => x,
                Qh: () => y,
                Qq: () => _,
                SF: () => B,
                T5: () => h,
                a1: () => k,
                dq: () => d,
                hA: () => S,
                uA: () => z,
                wN: () => v,
                xV: () => j
            });
            var i = n(14278),
                o = n(4801),
                l = n(72224),
                a = n(13246),
                r = n(61411),
                c = n(57212),
                u = n(87295),
                s = n(79430);

            function d() {
                return a.A.Instance.data.domains.map(e => {
                    let t = "en-US" === (0, r.cy)(e.host),
                        n = { ...l.a
                        },
                        i = new o.A(n).generateHome();
                    if (!i) return null;
                    let a = (0, s.A)(e.host, i.href, {
                        isMainDomain: t,
                        locale: e.locale
                    }).toString();
                    return {
                        locale: e.locale,
                        href: a.toString(),
                        host: e.host
                    }
                }).filter(e => !!e)
            }

            function _(e) {
                return b(e => e.generateCompetitions(), {}, e, "competitions")
            }

            function y(e) {
                return b(e => e.generateScholarship(), {}, e, "scholarship")
            }

            function p(e) {
                return I(t => t.generatePaginatedUpdatedGames({
                    page: e
                }), {})
            }

            function h(e) {
                return b(e => e.generateRecent(), {}, e, "recent")
            }

            function g() {
                return I(e => e.generateOriginals(), {})
            }

            function m(e) {
                return b(e => e.generateTags(), {}, e, "tags")
            }

            function B(e, t) {
                return I((e, t) => e.generateLeaderboards(t), {
                    page: e,
                    sorting: t
                })
            }

            function z(e, t) {
                return b((e, t) => e.generateGame(t), {
                    slug: e
                }, t, "game")
            }

            function v(e) {
                return b(e => e.generatePrivacyPolicy(), {}, e, "privacyPolicy")
            }

            function M(e) {
                return b(e => e.generateTermsAndConditions(), {}, e, "termsAndConditions")
            }

            function x(e) {
                return b(e => e.generateSearch(), {}, e, "search")
            }

            function S(e) {
                return I(t => t.generateProfilePage(e), {})
            }
            async function w(e, t, n, i) {
                if (t && "hot" === t) return I(e => e.generatePaginatedHotGames({
                    page: 1
                }), {});
                switch (e) {
                    case u.QI:
                        return b(e => e.generatePaginatedNewGames({
                            page: i
                        }), {}, await n.getRouteProviderData("newGames"), "newGames");
                    case u.F3:
                        return p(i);
                    default:
                        return console.warn(`unexpected sorting in games ${e}`), p(i)
                }
            }
            async function f(e, t, n) {
                if (e.isCategory) {
                    let i = await t.getRouteProviderData("category");
                    return b((e, t) => e.generateCategory(t), {
                        slugTrl: e.slug,
                        page: n
                    }, i, "category")
                } {
                    let i = await t.getRouteProviderData("tag");
                    return b((e, t) => e.generateTag(t), {
                        slugTrl: e.slug,
                        page: n
                    }, i, "tag")
                }
            }

            function k(e, t, n) {
                return I((t, n) => t.generateMultiplayerWithTag(n, e.slug), {
                    page: t,
                    sorting: n
                })
            }

            function j(e) {
                return I(t => t.generateAllGames(e), {})
            }

            function b(e, t, n, i) {
                var c;
                let u;
                return (c = n, u = a.A.Instance.data.domains, c.map(e => ({
                    domain: u.find(t => (0, r.qz)(t.locale) === e.locale),
                    routeData: e
                }))).map(n => {
                    let a = n.domain,
                        c = "en-US" === (0, r.cy)(a.host),
                        u = a.locale,
                        d = { ...l.a,
                            [i]: n.routeData.route,
                            locale: n.routeData.locale
                        },
                        _ = e(new o.A(d), t);
                    if (!_ || !n.domain) return null;
                    let y = (0, s.A)(n.domain.host, _.href, {
                        isMainDomain: c,
                        locale: u
                    }).toString();
                    return {
                        locale: n.domain.locale,
                        href: y.toString(),
                        host: n.domain.host
                    }
                }).filter(e => !!e)
            }

            function I(e, t) {
                let n = a.A.Instance.data.domains;
                return i.Y.map(i => {
                    let a = n.find(e => e.locale === i);
                    if (!a) return null;
                    let u = "en-US" === (0, r.cy)(a.host),
                        d = { ...l.a,
                            locale: c.Ec[i].serverLocale
                        },
                        _ = e(new o.A(d), t);
                    if (!_) return null;
                    let y = (0, s.A)(a.host, _.href, {
                        isMainDomain: u,
                        locale: i
                    }).toString();
                    return {
                        locale: a.locale,
                        href: y.toString(),
                        host: a.host
                    }
                }).filter(e => !!e)
            }
        },
        45312: e => {
            e.exports = {
                czyButton: "MultiplayerGrid_czyButton__dIQ32",
                "czyButton--contained--purple": "MultiplayerGrid_czyButton--contained--purple__3OboJ",
                "czyButton--contained--white": "MultiplayerGrid_czyButton--contained--white__Lb6lX",
                "czyButton--contained--grey": "MultiplayerGrid_czyButton--contained--grey__57ngy",
                "czyButton--contained--warning": "MultiplayerGrid_czyButton--contained--warning__TzOU3",
                "czyButton--contained--alert": "MultiplayerGrid_czyButton--contained--alert__baHEN",
                "czyButton--contained--success": "MultiplayerGrid_czyButton--contained--success__Hodbx",
                "czyButton--contained--black": "MultiplayerGrid_czyButton--contained--black__na3nG",
                "czyButton--contained--green-gradient": "MultiplayerGrid_czyButton--contained--green-gradient__qpD_A",
                "czyButton--contained--animated-green-gradient": "MultiplayerGrid_czyButton--contained--animated-green-gradient__LptOX",
                "scroll-gradient": "MultiplayerGrid_scroll-gradient__R_Ir8",
                "czyButton--outlined--purple": "MultiplayerGrid_czyButton--outlined--purple__sdk1G",
                "czyButton--link--purple": "MultiplayerGrid_czyButton--link--purple__bAk_G",
                "czyButton--outlined--white": "MultiplayerGrid_czyButton--outlined--white__XhNjG",
                "czyButton--link--white": "MultiplayerGrid_czyButton--link--white__7pbm_",
                "czyButton--outlined--grey": "MultiplayerGrid_czyButton--outlined--grey__o_U8U",
                "czyButton--link--grey": "MultiplayerGrid_czyButton--link--grey__k559_",
                "czyButton--outlined--warning": "MultiplayerGrid_czyButton--outlined--warning__iy8Pa",
                "czyButton--link--warning": "MultiplayerGrid_czyButton--link--warning__EWPy2",
                "czyButton--outlined--alert": "MultiplayerGrid_czyButton--outlined--alert__d49nC",
                "czyButton--link--alert": "MultiplayerGrid_czyButton--link--alert__TY39P",
                "czyButton--outlined--success": "MultiplayerGrid_czyButton--outlined--success__9md7p",
                "czyButton--link--success": "MultiplayerGrid_czyButton--link--success__39ys1",
                "czyButton--outlined": "MultiplayerGrid_czyButton--outlined__hh9Hk",
                "czyButton--disabled": "MultiplayerGrid_czyButton--disabled__4udr0",
                "czyButton--height50": "MultiplayerGrid_czyButton--height50__TCja_",
                "czyButton--height34": "MultiplayerGrid_czyButton--height34__oJZWw",
                "czyButton--height28": "MultiplayerGrid_czyButton--height28__02Aou",
                "czyButton--fullWidth": "MultiplayerGrid_czyButton--fullWidth__yoS3g",
                "czyButton--headerIcon": "MultiplayerGrid_czyButton--headerIcon__NKNha",
                "czyButton--headerIcon--desktop": "MultiplayerGrid_czyButton--headerIcon--desktop__bPv1w",
                "czyButton--headerIcon--mobile": "MultiplayerGrid_czyButton--headerIcon--mobile__iAXtj",
                "czyButton--headerIcon--withLabel": "MultiplayerGrid_czyButton--headerIcon--withLabel__hxyTW",
                root: "MultiplayerGrid_root___wUaU",
                item: "MultiplayerGrid_item__KqPL5",
                title: "MultiplayerGrid_title__XRu_3",
                name: "MultiplayerGrid_name__MFVxe",
                category: "MultiplayerGrid_category__f4tKA",
                media: "MultiplayerGrid_media__TeRLJ",
                thumb: "MultiplayerGrid_thumb__DqcNw"
            }
        },
        48200: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var i = n(6029),
                o = n(75155);
            n(55729);
            var l = n(50212),
                a = n(3016),
                r = n.n(a);
            let c = {
                    default: void 0,
                    black50: r().borderBlack50,
                    spacing: r().marginTopSpacing,
                    my1: r().my1
                },
                u = e => {
                    let t, n, a = (0, o.c)(6),
                        {
                            orientation: u,
                            className: s,
                            variant: d
                        } = e,
                        _ = "vertical" === (void 0 === u ? "horizontal" : u) ? r().vertical : r().horizontal,
                        y = c[void 0 === d ? "default" : d];
                    return a[0] !== s || a[1] !== _ || a[2] !== y ? (t = (0, l.A)(r().divider, _, y, s), a[0] = s, a[1] = _, a[2] = y, a[3] = t) : t = a[3], a[4] !== t ? (n = (0, i.jsx)("div", {
                        role: "separator",
                        className: t
                    }), a[4] = t, a[5] = n) : n = a[5], n
                }
        },
        49785: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var i = n(6029),
                o = n(55729),
                l = n(79942),
                a = n(93389);

            function r(e, t) {
                return {
                    "@type": "Question",
                    name: e,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: t
                    }
                }
            }

            function c(e, t) {
                let n = e.map(e => {
                    let n = t.gamePageLink(e.slug).href;
                    return `<li><a href="${n}">${e.name}</a></li>`
                });
                return `<ol>${n.join("")}</ol>`
            }
            let u = o.memo(e => {
                let t, n, u, s, d, _, y, p, h, g, m, B, z, {
                        tag: v,
                        mobileGames: M,
                        topGames: x,
                        linkBoostedGames: S
                    } = e,
                    {
                        i18n: w
                    } = (0, l.uB)(),
                    {
                        routeHelper: f
                    } = o.useContext(a.A),
                    k = JSON.stringify((t = w._("tag.faq.popular", {
                        title: v.title
                    }), n = w._("tag.faq.mobile", {
                        title: v.title
                    }), u = w._("tag.faq.whatAre", {
                        title: v.title
                    }), s = w._("tag.faq.whatAreSomeUnderrated", {
                        title: v.title
                    }), d = c(x, f), _ = c(M, f), y = S.length > 0 ? c(S, f) : null, p = v.intro, h = r(t, d), g = r(n, _), m = p ? r(u, p) : null, B = y ? r(s, y) : null, z = [h, g], B && z.push(B), m && z.push(m), {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: z
                    }));
                return (0, i.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: k
                    }
                })
            })
        },
        72224: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => o,
                c: () => i
            });
            let i = ["newGames", "tags", "category", "tag", "game", "termsAndConditions", "informationForParents", "privacyPolicy", "recent", "search", "scholarship", "competitions"],
                o = {
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
        85650: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => eb
            });
            var i = n(6029),
                o = n(75155),
                l = n(68168),
                a = n(23033),
                r = n(30277),
                c = n(50293),
                u = n(87295),
                s = n(71543),
                d = n(47429),
                _ = n(12097),
                y = n(47270),
                p = n(29403),
                h = n(55729),
                g = n(77650),
                m = n(93389),
                B = n(952),
                z = n(98084),
                v = n(91831);
            let M = {
                    multiplayer: "multiplayer.title",
                    "2-player": "multiplayer.2player.title",
                    "with-friends": "multiplayer.onlinewithfriends.title"
                },
                x = e => {
                    let t, n, l, a, r, c, u, s, d = (0, o.c)(30),
                        {
                            games: _,
                            tag: y,
                            page: p,
                            alternatives: x,
                            loading: w,
                            featuredGame: f
                        } = e,
                        {
                            routeHelper: k
                        } = (0, h.useContext)(m.A);
                    d[0] !== p || d[1] !== k || d[2] !== y.slug ? (t = k.multiplayerPageCanonicalWithTag(y.slug, p), d[0] = p, d[1] = k, d[2] = y.slug, d[3] = t) : t = d[3];
                    let j = t,
                        b = f ? .name ? ? "";
                    if (d[4] !== p || d[5] !== b || d[6] !== y.slug.en_US || d[7] !== y.title) {
                        let e = {
                                game: b,
                                title: y.title
                            },
                            t = g.Ru._(M[y.slug.en_US]);
                        n = g.Ru._("multiplayer.head.metaDescription", e), l = g.Ru._("multiplayer.head.title", {
                            title: t,
                            pageNumber: p
                        }), d[4] = p, d[5] = b, d[6] = y.slug.en_US, d[7] = y.title, d[8] = n, d[9] = l
                    } else n = d[8], l = d[9];
                    let I = l,
                        A = f ? .cover;
                    d[10] !== x ? (a = x.map(S), d[10] = x, d[11] = a) : a = d[11], d[12] !== j || d[13] !== I || d[14] !== n || d[15] !== a ? (r = (0, i.jsx)(B.A, {
                        alternatives: a,
                        canonical: j,
                        title: I,
                        metaDescription: n
                    }), d[12] = j, d[13] = I, d[14] = n, d[15] = a, d[16] = r) : r = d[16], d[17] !== j || d[18] !== A || d[19] !== I || d[20] !== n ? (c = A && (0, i.jsx)(v.A, {
                        canonical: j,
                        title: I,
                        description: n,
                        imageUrl: A
                    }), d[17] = j, d[18] = A, d[19] = I, d[20] = n, d[21] = c) : c = d[21];
                    let N = w ? void 0 : _.items;
                    return d[22] !== n || d[23] !== N || d[24] !== y ? (u = (0, i.jsx)(z.A, {
                        tag: y,
                        description: n,
                        games: N
                    }), d[22] = n, d[23] = N, d[24] = y, d[25] = u) : u = d[25], d[26] !== r || d[27] !== c || d[28] !== u ? (s = (0, i.jsxs)(i.Fragment, {
                        children: [r, c, u]
                    }), d[26] = r, d[27] = c, d[28] = u, d[29] = s) : s = d[29], s
                };

            function S(e) {
                let t = new URL(e.href),
                    n = t.searchParams.get(u.dL);
                return n ? { ...e,
                    href: `${t.origin}${t.pathname}?${u.dL}=${n}`
                } : e
            }
            var w = n(12496),
                f = n(50212),
                k = n(52722),
                j = n(79942),
                b = n(81278),
                I = n(93800),
                A = n(61827),
                N = n(47004),
                O = n(91428),
                C = n.n(O);
            let H = [{
                    id: "multiplayer",
                    labelId: "multiplayer.online",
                    descriptionId: "multiplayer.modeSelection.onlineDesc",
                    iconName: "globe",
                    iconColorClass: "iconOnline"
                }, {
                    id: "with-friends",
                    labelId: "multiplayer.onlineWithFriends",
                    descriptionId: "multiplayer.modeSelection.onlineWithFriendsDesc",
                    iconName: "users-icon",
                    iconColorClass: "iconFriends"
                }, {
                    id: "2-player",
                    labelId: "multiplayer.localWithFriends",
                    descriptionId: "multiplayer.modeSelection.localWithFriendsDesc",
                    iconName: "laptop",
                    iconColorClass: "iconLocal"
                }],
                L = () => () => {},
                G = () => null !== localStorage.getItem(N.rV),
                F = () => !1,
                T = e => {
                    let t, n, l, a, r = (0, o.c)(9),
                        {
                            onModeSelected: c
                        } = e,
                        {
                            routeHelper: u
                        } = h.useContext(m.A),
                        {
                            crazyRouterChange: s
                        } = h.useContext(A.Gl);
                    r[0] !== s || r[1] !== c || r[2] !== u ? (t = e => {
                        localStorage.setItem(N.rV, "true");
                        let t = "with-friends" === e ? void 0 : e;
                        s(u.multiplayerPageLink(t).href, !1, !0, !0, "mode-selection"), c(e)
                    }, r[0] = s, r[1] = c, r[2] = u, r[3] = t) : t = r[3];
                    let d = t;
                    return r[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsx)("h2", {
                        className: C().title,
                        children: (0, i.jsx)(j.x6, {
                            id: "multiplayer.modeSelection.title"
                        })
                    }), r[4] = n) : n = r[4], r[5] !== d ? (l = H.map(e => (0, i.jsxs)("button", {
                        className: C().optionCard,
                        onClick: () => d(e.id),
                        "data-testid": `mode-option-${e.id}`,
                        children: [(0, i.jsx)(I.A, {
                            name: e.iconName,
                            size: 60,
                            className: (0, f.A)(C().iconWrapper, C()[e.iconColorClass])
                        }), (0, i.jsxs)("div", {
                            className: C().optionText,
                            children: [(0, i.jsx)("span", {
                                className: C().optionLabel,
                                children: (0, i.jsx)(j.x6, {
                                    id: e.labelId
                                })
                            }), (0, i.jsx)("span", {
                                className: C().optionDescription,
                                children: (0, i.jsx)(j.x6, {
                                    id: e.descriptionId
                                })
                            })]
                        }), (0, i.jsx)(I.A, {
                            name: "chevron-right",
                            size: 20,
                            className: C().chevron
                        })]
                    }, e.id)), r[5] = d, r[6] = l) : l = r[6], r[7] !== l ? (a = (0, i.jsx)("div", {
                        className: C().overlay,
                        "data-testid": "overlay-multiplayer-mode",
                        children: (0, i.jsxs)("div", {
                            className: C().content,
                            children: [n, (0, i.jsx)("div", {
                                className: C().options,
                                children: l
                            })]
                        })
                    }), r[7] = l, r[8] = a) : a = r[8], a
                };

            function P() {
                return (0, N.UW)()
            }
            var W = n(48200),
                D = n(91328),
                E = n(49785),
                q = n(95816),
                R = n(85829),
                U = n(96940),
                Y = n.n(U);
            let J = (0, h.memo)(e => {
                let {
                    tag: t,
                    isFirstPage: n,
                    topGames: o,
                    topMobileGames: l,
                    linkBoostedGames: a = [],
                    featuredGame: r
                } = e, c = h.useCallback(() => {
                    let {
                        description: e,
                        showFaq: n,
                        intro: o,
                        title: l
                    } = t;
                    return e ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: Y().noPStyles,
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        }), !n && o && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("h3", {
                                children: (0, i.jsx)(j.x6, {
                                    id: "tag.faq.whatAre",
                                    values: {
                                        title: l
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                className: Y().noPStyles,
                                dangerouslySetInnerHTML: {
                                    __html: o
                                }
                            })]
                        }), (0, i.jsx)(W.A, {
                            variant: "my1"
                        })]
                    }) : null
                }, [t]), u = h.useCallback(() => {
                    if (!t.showFaq || !o || !l) return null;
                    let e = l.slice(0, 5),
                        n = o.slice(0, 10),
                        r = a || [];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(E.A, {
                            tag: t,
                            mobileGames: e,
                            topGames: n,
                            linkBoostedGames: r
                        }), (0, i.jsx)(D.A, {
                            tag: t,
                            mobileGames: e,
                            topGames: n,
                            linkBoostedGames: r
                        }), (0, i.jsx)(W.A, {
                            variant: "my1"
                        })]
                    })
                }, [t, o, l, a]), s = (0, q.e)(t, r), d = s || t.description || t.showFaq || t.shortDescription;
                return n && d ? (0, i.jsx)(h.Suspense, {
                    children: (0, i.jsx)(R.A, {
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [c(), u(), s]
                        })
                    })
                }) : null
            });
            var Q = n(52461),
                K = n(89247),
                V = n(59126),
                X = n(74914),
                $ = n(71684),
                Z = n(45312),
                ee = n.n(Z);
            let et = h.memo(e => {
                    let {
                        name: t,
                        categoryName: n,
                        maxLobbySize: o
                    } = e, l = (0, j.uB)(), a = o ? o > 100 ? l._("multiplayer.players", {
                        playersStr: "100+"
                    }) : l._("multiplayer.upTo", {
                        playersStr: o.toString()
                    }) : "";
                    return (0, i.jsxs)("div", {
                        className: ee().title,
                        children: [(0, i.jsx)("div", {
                            className: ee().name,
                            children: t
                        }), n && (0, i.jsxs)("div", {
                            className: ee().category,
                            children: [a, !!a && " • ", n]
                        })]
                    })
                }),
                en = (0, h.memo)(e => {
                    let {
                        games: t,
                        enableInstantJoin: n,
                        activeTag: o
                    } = e, {
                        services: l
                    } = h.useContext($.A), {
                        innerWidth: a
                    } = h.useContext(X.w), [r, c] = h.useState(!1);
                    h.useEffect(() => {
                        a && a <= 1024 ? c(!0) : c(!1)
                    }, [a]);
                    let u = e => {
                        l.crazyAnalyticsService.sendClickOnGame(e)
                    };
                    return (0, i.jsx)("div", {
                        className: ee().root,
                        children: t.map(e => e.loading ? (0, i.jsx)(V.A, {}, e.id) : (0, i.jsx)(Q.x, {
                            newClickOrigin: `multiplayer_grid_${o.slug.en_US}`,
                            children: (0, i.jsx)(K.A, {
                                hideTitle: !0,
                                disableHoverScale: !0,
                                className: ee().item,
                                thumbClassName: ee().thumb,
                                mediaClassName: ee().media,
                                game: e,
                                enableInstantJoin: n,
                                onClickAction: u,
                                forceAspectRatio: r ? "square" : void 0,
                                children: (0, i.jsx)(et, {
                                    name: e.name,
                                    categoryName: e.categoryName,
                                    minLobbySize: e.multiplayerOptions ? .minLobbySize ? ? void 0,
                                    maxLobbySize: e.multiplayerOptions ? .maxLobbySize ? ? void 0
                                })
                            })
                        }, e.id))
                    })
                });
            var ei = n(4230),
                eo = n(43711),
                el = n(33165),
                ea = n(94012),
                er = n(61411),
                ec = n(74198),
                eu = n(67088);
            let es = e => new URLSearchParams(e.slice(e.indexOf("?"))).get(u.po) || u.nn,
                ed = e => {
                    let t, n, l, a, r, c = (0, o.c)(14),
                        {
                            tag: u
                        } = e,
                        {
                            routeHelper: s
                        } = h.useContext(m.A),
                        {
                            locale: d
                        } = h.useContext(ec.A),
                        {
                            crazyRouterChange: _
                        } = h.useContext(A.Gl),
                        y = (0, b.useRouter)();
                    c[0] !== y.asPath ? (t = () => es(y.asPath), c[0] = y.asPath, c[1] = t) : t = c[1];
                    let [p, g] = h.useState(t), [B, z] = h.useState(y.asPath);
                    y.asPath !== B && (z(y.asPath), g(es(y.asPath))), c[2] !== _ || c[3] !== d || c[4] !== s || c[5] !== u.slug ? (n = (e, t) => {
                        g(t), _(s.multiplayerPageLink(u.slug[(0, er.qz)(d)], 1, t).href)
                    }, c[2] = _, c[3] = d, c[4] = s, c[5] = u.slug, c[6] = n) : n = c[6];
                    let v = n;
                    return c[7] === Symbol.for("react.memo_cache_sentinel") ? (l = [{
                        val: "default",
                        trKey: "common.links.top"
                    }, {
                        val: "new",
                        trKey: "common.links.new"
                    }], c[7] = l) : l = c[7], c[8] !== p ? (a = l.map((e, t) => {
                        let {
                            val: n,
                            trKey: o
                        } = e;
                        return (0, i.jsx)(eu.c, {
                            value: n,
                            disabled: p === n,
                            children: (0, i.jsx)(j.x6, {
                                id: o
                            })
                        }, t)
                    }), c[8] = p, c[9] = a) : a = c[9], c[10] !== v || c[11] !== p || c[12] !== a ? (r = (0, i.jsx)(eu.A, {
                        value: p,
                        onChange: v,
                        height: 40,
                        width: 150,
                        dataTestId: "multiplayer-sorting-dropdown",
                        children: a
                    }), c[10] = v, c[11] = p, c[12] = a, c[13] = r) : r = c[13], r
                };
            var e_ = n(22032),
                ey = n.n(e_);
            let ep = {
                    [N.ts.ONLINE_WITH_FRIENDS]: "multiplayer.onlineWithFriends",
                    [N.ts.ONLINE]: "multiplayer.online",
                    [N.ts.LOCAL_WITH_FRIENDS]: "multiplayer.localWithFriends"
                },
                eh = {
                    [N.ts.ONLINE]: {
                        iconName: "globe",
                        iconColorClass: "iconOnline",
                        activeClass: "activeOnline",
                        hoverClass: "hoverOnline"
                    },
                    [N.ts.ONLINE_WITH_FRIENDS]: {
                        iconName: "users-icon",
                        iconColorClass: "iconFriends",
                        activeClass: "activeFriends",
                        hoverClass: "hoverFriends"
                    },
                    [N.ts.LOCAL_WITH_FRIENDS]: {
                        iconName: "laptop",
                        iconColorClass: "iconLocal",
                        activeClass: "activeLocal",
                        hoverClass: "hoverLocal"
                    }
                },
                eg = {
                    [N.ts.ONLINE]: "gradientOnline",
                    [N.ts.ONLINE_WITH_FRIENDS]: "gradientOnlineWithFriends",
                    [N.ts.LOCAL_WITH_FRIENDS]: "gradientLocal"
                },
                em = {
                    [N.ts.ONLINE_WITH_FRIENDS]: "multiplayer.description.onlineWithFriends",
                    [N.ts.ONLINE]: "multiplayer.description.online",
                    [N.ts.LOCAL_WITH_FRIENDS]: "multiplayer.description.local"
                },
                eB = {
                    [N.ts.ONLINE]: 0,
                    [N.ts.ONLINE_WITH_FRIENDS]: 1,
                    [N.ts.LOCAL_WITH_FRIENDS]: 2
                },
                ez = h.memo(e => {
                    let {
                        tags: t,
                        activeTag: n
                    } = e, {
                        routeHelper: o
                    } = h.useContext(m.A), l = [...t].sort((e, t) => (eB[e.id] ? ? 99) - (eB[t.id] ? ? 99));
                    return (0, i.jsx)("div", {
                        className: ey().subTags,
                        children: l.map((e, t) => {
                            let l = e.slug === u.fN ? void 0 : e.enSlug,
                                a = o.multiplayerPageLink(l),
                                r = ep[e.id] ? g.Ru._(ep[e.id]) : e.title,
                                c = eh[e.id],
                                s = n ? .id === e.id;
                            return (0, i.jsxs)(eo.A, {
                                href: a.href,
                                onClick: s ? void 0 : () => (0, N.on)(),
                                className: (0, f.A)(ey().subTag, c && ey()[c.hoverClass], s && ey().activeSubTag, s && c && ey()[c.activeClass]),
                                shallow: s,
                                children: [c && (0, i.jsx)(I.A, {
                                    name: c.iconName,
                                    size: 24,
                                    className: (0, f.A)(ey().tabIcon, ey()[c.iconColorClass])
                                }), r]
                            }, t)
                        })
                    })
                }),
                ev = h.memo(e => {
                    let {
                        tags: t,
                        activeTag: n,
                        showWithFriendsPill: o
                    } = e, {
                        openDrawer: l
                    } = h.useContext(el.lv), a = h.useContext(ei.A), r = (0, ea.A)(), u = (0, c.Fr)(a), s = (0, h.useCallback)(() => {
                        r("open"), l("playWithFriends")
                    }, [l, r]), d = n.id ? em[n.id] : void 0, _ = d ? g.Ru._(d) : n.shortDescription || "", y = n.id ? eg[n.id] : void 0;
                    return (0, i.jsx)("div", {
                        className: (0, f.A)(ey().root, y && ey()[y], u && ey().isMobile),
                        children: (0, i.jsxs)("div", {
                            className: ey().titleWrapper,
                            children: [(0, i.jsx)("h1", {
                                children: (0, i.jsx)(j.x6, {
                                    id: "multiplayer.title"
                                })
                            }), (0, i.jsx)(ez, {
                                tags: t,
                                activeTag: n
                            }), (0, i.jsx)("div", {
                                className: ey().infoRow,
                                children: (0, i.jsx)("p", {
                                    className: ey().shortDescription,
                                    children: _
                                })
                            }), o && (0, i.jsxs)("div", {
                                onClick: s,
                                className: ey().howToPlayButton,
                                children: [(0, i.jsx)(I.A, {
                                    name: "question-circle",
                                    size: 20,
                                    className: ey().helpIcon
                                }), (0, i.jsx)(j.x6, {
                                    id: "multiplayer.howToPlay"
                                })]
                            }), (0, i.jsx)("div", {
                                className: ey().sortingWrapper,
                                children: (0, i.jsx)(ed, {
                                    tag: n
                                })
                            })]
                        })
                    })
                });
            var eM = n(87613),
                ex = n.n(eM);
            let eS = (0, h.memo)(e => {
                    let {
                        activeTag: t,
                        multiplayerTags: n,
                        page: o,
                        topGames: l,
                        topMobileGames: a,
                        linkBoostedGames: r,
                        modelGames: c,
                        loading: u,
                        featuredGame: s
                    } = e, {
                        routeHelper: d
                    } = h.useContext(m.A), _ = (() => {
                        let e = (0, b.useRouter)(),
                            t = (0, h.useSyncExternalStore)(L, G, F),
                            [n] = (0, h.useState)(P);
                        return "1" === e.query.forceOverlay || !n && !t
                    })(), [y, p] = (0, h.useState)(!1), g = (0, h.useCallback)(() => {
                        p(!0)
                    }, []), B = t.id === N.ts.ONLINE_WITH_FRIENDS, z = c ? .total, v = _ && !y, M = (0, h.useCallback)((e, n) => d.multiplayerPageLink(t.slug[w.X], e, n || void 0), [d, t.slug]);
                    return (0, i.jsxs)("div", {
                        className: (0, f.A)(ex().root, v && ex().hasOverlay),
                        children: [v && (0, i.jsx)(T, {
                            onModeSelected: g
                        }), (0, i.jsx)(ev, {
                            tags: n,
                            activeTag: t,
                            gameCount: z,
                            showWithFriendsPill: B
                        }), (0, i.jsx)(en, {
                            games: c.items,
                            enableInstantJoin: B,
                            activeTag: t
                        }), (0, i.jsx)(k.A, {
                            loading: u,
                            games: c,
                            urlGenerator: M
                        }), (0, i.jsx)(J, {
                            tag: t,
                            isFirstPage: 1 === o,
                            topGames: l,
                            topMobileGames: a,
                            linkBoostedGames: r,
                            featuredGame: s
                        })]
                    })
                }),
                ew = e => {
                    let t, n, l, a, r, c = (0, o.c)(28),
                        {
                            activeTag: u,
                            multiplayerTags: s,
                            page: d,
                            sorting: _,
                            shouldFetchGamesOnClient: h,
                            crawlerGames: g,
                            extraDesktopGames: m,
                            isCrawler: B,
                            alternatives: z,
                            featuredGame: v
                        } = e;
                    if (c[0] !== u || c[1] !== s) {
                        let e;
                        c[3] !== u ? (e = e => e.id === u.id, c[3] = u, c[4] = e) : e = c[4], t = s.find(e), c[0] = u, c[1] = s, c[2] = t
                    } else t = c[2];
                    c[5] !== g || c[6] !== m || c[7] !== B || c[8] !== d || c[9] !== h || c[10] !== _ || c[11] !== t ? (n = {
                        tag: t,
                        page: d,
                        sorting: _,
                        shouldFetchGamesOnClient: h,
                        crawlerGames: g,
                        extraDesktopGames: m,
                        isCrawler: B
                    }, c[5] = g, c[6] = m, c[7] = B, c[8] = d, c[9] = h, c[10] = _, c[11] = t, c[12] = n) : n = c[12];
                    let {
                        modelGames: M,
                        loading: S,
                        notFound: w
                    } = (0, y.A)(n);
                    if (w && !u.isArchived) {
                        let e;
                        return c[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(p.A, {}), c[13] = e) : e = c[13], e
                    }
                    return c[14] !== u || c[15] !== z || c[16] !== v || c[17] !== S || c[18] !== M || c[19] !== d ? (l = (0, i.jsx)(x, {
                        tag: u,
                        alternatives: z,
                        page: d,
                        games: M,
                        loading: S,
                        featuredGame: v
                    }), c[14] = u, c[15] = z, c[16] = v, c[17] = S, c[18] = M, c[19] = d, c[20] = l) : l = c[20], c[21] !== S || c[22] !== M || c[23] !== e ? (a = (0, i.jsx)(eS, { ...e,
                        modelGames: M,
                        loading: S
                    }), c[21] = S, c[22] = M, c[23] = e, c[24] = a) : a = c[24], c[25] !== l || c[26] !== a ? (r = (0, i.jsxs)(i.Fragment, {
                        children: [l, a]
                    }), c[25] = l, c[26] = a, c[27] = r) : r = c[27], r
                };
            var ef = n(20183),
                ek = n(66670);
            let ej = e => {
                let t, n = (0, o.c)(2);
                return n[0] !== e ? (t = (0, i.jsx)(ew, { ...e
                }), n[0] = e, n[1] = t) : t = n[1], t
            };
            ej.getInitialProps = async e => {
                let {
                    pageService: t,
                    crawlerService: n,
                    modelService: i
                } = (0, _.V)(e), o = (0, c.hz)(e), y = e.query && e.query[u.dL] || u.fN, p = e.query && e.query[u.po] || "default", h = e.query[u.Sh] || 1, g = (0, r.z)(h), m = (0, c.Fr)(o) ? d.w9 : d.F_, B = Number(e.query && e.query[u.Fb] || m), z = (0, c.v1)(o) ? d.uo : d.iF, v = (0, c.xl)(o) ? d.r2 : z, M = await t.tagPage("tag", y, {
                    page: g,
                    size: B
                }, v, z, o, d.W$, d.F_, p), x = "true" === e.query[u.pr], {
                    tag: S,
                    games: w,
                    topGames: f,
                    topMobileGames: k,
                    linkBoostedGames: j
                } = M, b = (0, q.Y)(w.items[0]), I = !x, A = async () => {
                    let {
                        games: e,
                        extraDesktopGames: t
                    } = await (0, s.fS)({
                        sorting: p,
                        isCrawler: x
                    }, {
                        deviceInfo: o,
                        page: g,
                        tag: S
                    }, n, i);
                    return {
                        games: I ? void 0 : e,
                        extraDesktopGames: t
                    }
                }, N = async () => (await t.multiplayerTags()).tags, [{
                    games: O,
                    extraDesktopGames: C
                }, H] = await Promise.all([A(), N()]), L = (0, a.a1)(S, g, p);
                if (O && !S.isArchived) {
                    if (g > Math.ceil(O.total / d.F_)) throw new l.A(404, "Incorrect pagination");
                    if (0 === O.items.length) throw new l.A(404, "No games found")
                }
                return {
                    alternatives: L,
                    crawlerGames: O,
                    activeTag: S,
                    topGames: f,
                    topMobileGames: k,
                    page: g,
                    linkBoostedGames: j,
                    multiplayerTags: H,
                    sorting: p,
                    shouldFetchGamesOnClient: I,
                    extraDesktopGames: C,
                    isCrawler: x,
                    featuredGame: b
                }
            };
            let eb = (0, ef.A)("multiplayer", "tag")((0, ek.A)(ej))
        },
        85829: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var i = n(6029),
                o = n(75155),
                l = n(55729),
                a = n(79942),
                r = n(50212),
                c = n(78703),
                u = n.n(c);
            let s = e => {
                let t, n, c, s, d, _, y = (0, o.c)(16),
                    {
                        children: p
                    } = e,
                    [h, g] = (0, l.useState)(!0),
                    m = !h;
                y[0] !== m ? (t = (0, r.A)(u().container, {
                    [u().collapsed]: m
                }), y[0] = m, y[1] = t) : t = y[1];
                let B = !h;
                return y[2] !== B ? (n = (0, r.A)(u().content, {
                    [u().collapsed]: B
                }), y[2] = B, y[3] = n) : n = y[3], y[4] !== p || y[5] !== n ? (c = (0, i.jsx)("div", {
                    className: n,
                    children: p
                }), y[4] = p, y[5] = n, y[6] = c) : c = y[6], y[7] !== h ? (s = !h && (0, i.jsx)("div", {
                    className: u().showMoreContainer,
                    children: (0, i.jsx)("span", {
                        className: u().label,
                        onClick: () => g(!0),
                        children: (0, i.jsx)(a.x6, {
                            id: "common.showMore"
                        })
                    })
                }), y[7] = h, y[8] = s) : s = y[8], y[9] !== h ? (d = h && (0, i.jsx)("div", {
                    className: u().showLessContainer,
                    children: (0, i.jsx)("span", {
                        className: u().label,
                        onClick: () => g(!1),
                        children: (0, i.jsx)(a.x6, {
                            id: "common.showLess"
                        })
                    })
                }), y[9] = h, y[10] = d) : d = y[10], y[11] !== t || y[12] !== c || y[13] !== s || y[14] !== d ? (_ = (0, i.jsxs)("div", {
                    className: t,
                    children: [c, s, d]
                }), y[11] = t, y[12] = c, y[13] = s, y[14] = d, y[15] = _) : _ = y[15], _
            }
        },
        87613: e => {
            e.exports = {
                root: "Multiplayer_root__gAKgD",
                hasOverlay: "Multiplayer_hasOverlay__EFOQQ",
                paginationContainer: "Multiplayer_paginationContainer__ihH_Y"
            }
        },
        91328: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            var i = n(6029),
                o = n(75155);
            n(55729);
            var l = n(79942),
                a = n(47352);
            let r = e => {
                let t, n, a, r, c, s, d, _, y = (0, o.c)(22),
                    {
                        tag: p,
                        topGames: h,
                        mobileGames: g,
                        linkBoostedGames: m
                    } = e,
                    B = u;
                return y[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)("h2", {
                    children: (0, i.jsx)(l.x6, {
                        id: "tag.faq.faq"
                    })
                }), y[0] = t) : t = y[0], y[1] !== p.title ? (n = (0, i.jsx)("h3", {
                    children: (0, i.jsx)(l.x6, {
                        id: "tag.faq.popular",
                        values: {
                            title: p.title
                        }
                    })
                }), y[1] = p.title, y[2] = n) : n = y[2], y[3] !== h ? (a = B(h), y[3] = h, y[4] = a) : a = y[4], y[5] !== p.title ? (r = (0, i.jsx)("h3", {
                    children: (0, i.jsx)(l.x6, {
                        id: "tag.faq.mobile",
                        values: {
                            title: p.title
                        }
                    })
                }), y[5] = p.title, y[6] = r) : r = y[6], y[7] !== g ? (c = B(g), y[7] = g, y[8] = c) : c = y[8], y[9] !== m || y[10] !== p.title ? (s = m.length > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("h3", {
                        children: (0, i.jsx)(l.x6, {
                            id: "tag.faq.whatAreSomeUnderrated",
                            values: {
                                title: p.title
                            }
                        })
                    }), B(m)]
                }), y[9] = m, y[10] = p.title, y[11] = s) : s = y[11], y[12] !== p.intro || y[13] !== p.title ? (d = p.intro && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("h3", {
                        children: (0, i.jsx)(l.x6, {
                            id: "tag.faq.whatAre",
                            values: {
                                title: p.title
                            }
                        })
                    }), (0, i.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: p.intro
                        }
                    })]
                }), y[12] = p.intro, y[13] = p.title, y[14] = d) : d = y[14], y[15] !== n || y[16] !== a || y[17] !== r || y[18] !== c || y[19] !== s || y[20] !== d ? (_ = (0, i.jsxs)(i.Fragment, {
                    children: [t, n, a, r, c, s, d]
                }), y[15] = n, y[16] = a, y[17] = r, y[18] = c, y[19] = s, y[20] = d, y[21] = _) : _ = y[21], _
            };

            function c(e) {
                return (0, i.jsx)("li", {
                    children: (0, i.jsx)(a.A, {
                        slug: e.slug,
                        children: (0, i.jsx)(i.Fragment, {
                            children: e.name
                        })
                    })
                }, e.slug)
            }

            function u(e) {
                return (0, i.jsx)("ol", {
                    children: e.map(c)
                })
            }
        },
        91428: e => {
            e.exports = {
                czyButton: "ModeSelectionOverlay_czyButton____5Ju",
                "czyButton--contained--purple": "ModeSelectionOverlay_czyButton--contained--purple__xZQLu",
                "czyButton--contained--white": "ModeSelectionOverlay_czyButton--contained--white__PMKGG",
                "czyButton--contained--grey": "ModeSelectionOverlay_czyButton--contained--grey__8whEr",
                "czyButton--contained--warning": "ModeSelectionOverlay_czyButton--contained--warning__FtZsU",
                "czyButton--contained--alert": "ModeSelectionOverlay_czyButton--contained--alert__D4JBL",
                "czyButton--contained--success": "ModeSelectionOverlay_czyButton--contained--success__aUEab",
                "czyButton--contained--black": "ModeSelectionOverlay_czyButton--contained--black__aqJq3",
                "czyButton--contained--green-gradient": "ModeSelectionOverlay_czyButton--contained--green-gradient__It8hl",
                "czyButton--contained--animated-green-gradient": "ModeSelectionOverlay_czyButton--contained--animated-green-gradient__5lIl0",
                "scroll-gradient": "ModeSelectionOverlay_scroll-gradient__2GRqM",
                "czyButton--outlined--purple": "ModeSelectionOverlay_czyButton--outlined--purple__OWaSW",
                "czyButton--link--purple": "ModeSelectionOverlay_czyButton--link--purple__ZHttD",
                "czyButton--outlined--white": "ModeSelectionOverlay_czyButton--outlined--white__C9noS",
                "czyButton--link--white": "ModeSelectionOverlay_czyButton--link--white__a3A8q",
                "czyButton--outlined--grey": "ModeSelectionOverlay_czyButton--outlined--grey__Vqflh",
                "czyButton--link--grey": "ModeSelectionOverlay_czyButton--link--grey__8f1mr",
                "czyButton--outlined--warning": "ModeSelectionOverlay_czyButton--outlined--warning__Ft0wa",
                "czyButton--link--warning": "ModeSelectionOverlay_czyButton--link--warning__5uFtV",
                "czyButton--outlined--alert": "ModeSelectionOverlay_czyButton--outlined--alert__bYgFW",
                "czyButton--link--alert": "ModeSelectionOverlay_czyButton--link--alert__PoFhi",
                "czyButton--outlined--success": "ModeSelectionOverlay_czyButton--outlined--success__B3LUP",
                "czyButton--link--success": "ModeSelectionOverlay_czyButton--link--success__vHDMh",
                "czyButton--outlined": "ModeSelectionOverlay_czyButton--outlined__pj408",
                "czyButton--disabled": "ModeSelectionOverlay_czyButton--disabled__Bwbzx",
                "czyButton--height50": "ModeSelectionOverlay_czyButton--height50__oLHKk",
                "czyButton--height34": "ModeSelectionOverlay_czyButton--height34__MwKdJ",
                "czyButton--height28": "ModeSelectionOverlay_czyButton--height28__j6PzS",
                "czyButton--fullWidth": "ModeSelectionOverlay_czyButton--fullWidth__fp4Vj",
                "czyButton--headerIcon": "ModeSelectionOverlay_czyButton--headerIcon__s08tA",
                "czyButton--headerIcon--desktop": "ModeSelectionOverlay_czyButton--headerIcon--desktop__MoQWu",
                "czyButton--headerIcon--mobile": "ModeSelectionOverlay_czyButton--headerIcon--mobile__2wmYa",
                "czyButton--headerIcon--withLabel": "ModeSelectionOverlay_czyButton--headerIcon--withLabel__E3U1r",
                overlay: "ModeSelectionOverlay_overlay__jz4XO",
                content: "ModeSelectionOverlay_content__RpRrE",
                title: "ModeSelectionOverlay_title__ETYMJ",
                options: "ModeSelectionOverlay_options__B_Rkf",
                optionCard: "ModeSelectionOverlay_optionCard__mdA0Q",
                iconWrapper: "ModeSelectionOverlay_iconWrapper__Q_UfY",
                iconOnline: "ModeSelectionOverlay_iconOnline__TcYqM",
                iconFriends: "ModeSelectionOverlay_iconFriends__IWBLR",
                iconLocal: "ModeSelectionOverlay_iconLocal__rQXFj",
                optionText: "ModeSelectionOverlay_optionText__bDSfE",
                optionLabel: "ModeSelectionOverlay_optionLabel__ah5aA",
                optionDescription: "ModeSelectionOverlay_optionDescription__NThRe",
                chevron: "ModeSelectionOverlay_chevron__xATE_"
            }
        },
        91831: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var i = n(6029),
                o = n(75155),
                l = n(55729),
                a = n(95669),
                r = n.n(a),
                c = n(61411),
                u = n(81930),
                s = n(74198);
            let d = e => {
                let t, n, a, d, _, y, p, h, g, m, B, z, v, M, x, S, w, f, k = (0, o.c)(49),
                    {
                        canonical: j,
                        title: b,
                        description: I,
                        imageUrl: A,
                        imageWidth: N,
                        imageHeight: O,
                        imageQuality: C,
                        type: H
                    } = e,
                    L = void 0 === A ? "crazygames/share.png" : A,
                    G = void 0 === N ? 1200 : N,
                    F = void 0 === O ? 630 : O,
                    {
                        locale: T
                    } = l.useContext(s.A);
                k[0] !== F || k[1] !== C || k[2] !== L || k[3] !== G ? (t = (0, u.Ay)(L, {
                    width: G,
                    height: F,
                    fit: "crop",
                    quality: C
                }), k[0] = F, k[1] = C, k[2] = L, k[3] = G, k[4] = t) : t = k[4];
                let P = t;
                return k[5] !== j ? (n = (0, i.jsx)("meta", {
                    property: "og:url",
                    content: j
                }), k[5] = j, k[6] = n) : n = k[6], k[7] !== b ? (a = (0, i.jsx)("meta", {
                    property: "og:title",
                    content: b
                }), k[7] = b, k[8] = a) : a = k[8], k[9] !== I ? (d = (0, i.jsx)("meta", {
                    property: "og:description",
                    content: I
                }), k[9] = I, k[10] = d) : d = k[10], k[11] !== T ? (_ = (0, c.qz)(T), k[11] = T, k[12] = _) : _ = k[12], k[13] !== _ ? (y = (0, i.jsx)("meta", {
                    property: "og:locale",
                    content: _
                }), k[13] = _, k[14] = y) : y = k[14], k[15] !== P ? (p = (0, i.jsx)("meta", {
                    property: "og:image",
                    content: P
                }), k[15] = P, k[16] = p) : p = k[16], k[17] !== G ? (h = G.toString(), k[17] = G, k[18] = h) : h = k[18], k[19] !== h ? (g = (0, i.jsx)("meta", {
                    property: "og:image:width",
                    content: h
                }), k[19] = h, k[20] = g) : g = k[20], k[21] !== F ? (m = F.toString(), k[21] = F, k[22] = m) : m = k[22], k[23] !== m ? (B = (0, i.jsx)("meta", {
                    property: "og:image:height",
                    content: m
                }), k[23] = m, k[24] = B) : B = k[24], k[25] !== H ? (z = H && (0, i.jsx)("meta", {
                    property: "og:type",
                    content: H
                }), k[25] = H, k[26] = z) : z = k[26], k[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, i.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), k[27] = v) : v = k[27], k[28] !== j ? (M = (0, i.jsx)("meta", {
                    property: "twitter:url",
                    content: j
                }), k[28] = j, k[29] = M) : M = k[29], k[30] !== b ? (x = (0, i.jsx)("meta", {
                    property: "twitter:title",
                    content: b
                }), k[30] = b, k[31] = x) : x = k[31], k[32] !== I ? (S = (0, i.jsx)("meta", {
                    property: "twitter:description",
                    content: I
                }), k[32] = I, k[33] = S) : S = k[33], k[34] !== P ? (w = (0, i.jsx)("meta", {
                    property: "twitter:image",
                    content: P
                }), k[34] = P, k[35] = w) : w = k[35], k[36] !== p || k[37] !== g || k[38] !== B || k[39] !== z || k[40] !== M || k[41] !== x || k[42] !== S || k[43] !== w || k[44] !== n || k[45] !== a || k[46] !== d || k[47] !== y ? (f = (0, i.jsxs)(r(), {
                    children: [n, a, d, y, p, g, B, z, v, M, x, S, w]
                }), k[36] = p, k[37] = g, k[38] = B, k[39] = z, k[40] = M, k[41] = x, k[42] = S, k[43] = w, k[44] = n, k[45] = a, k[46] = d, k[47] = y, k[48] = f) : f = k[48], f
            }
        },
        94012: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var i = n(75155),
                o = n(55729),
                l = n(90930),
                a = n(40369),
                r = n(71684);
            let c = () => {
                let e, t, n = (0, i.c)(5),
                    {
                        crazyAnalyticsService: c
                    } = (0, o.useContext)(r.A).services,
                    u = (0, o.useContext)(l.o);
                n[0] !== u ? (e = (0, a.Ay)(u), n[0] = u, n[1] = e) : e = n[1];
                let s = e;
                return n[2] !== s || n[3] !== c ? (t = e => {
                    c.sendModalEvent("with_friends_learn_more", e, "learn_more", s)
                }, n[2] = s, n[3] = c, n[4] = t) : t = n[4], t
            }
        },
        95816: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => o,
                e: () => l
            });
            var i = n(77650);

            function o(e) {
                if (e) return {
                    name: e.name,
                    cover: e.cover
                }
            }

            function l(e, t) {
                return e.metaDescription ? e.metaDescription : i.Ru._("tag.head.metaDescription", {
                    game: t ? .name ? ? "",
                    title: e.title
                })
            }
        },
        98084: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var i = n(6029),
                o = n(55729),
                l = n(79942),
                a = n(93389),
                r = n(71543);
            let c = o.memo(e => {
                let {
                    tag: t,
                    description: n,
                    games: c
                } = e, {
                    i18n: u
                } = (0, l.uB)(), {
                    routeHelper: s
                } = o.useContext(a.A), {
                    structuredData: d
                } = t;
                if (!d) return null;
                let _ = c ? {
                        mainEntity: (0, r.Vb)(c, s)
                    } : {},
                    y = [{ ...d,
                        description: n,
                        ..._,
                        isPartOf: (0, r.Xr)(u, s)
                    }];
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: `<script type="application/ld+json">${JSON.stringify(y)}</script>`
                        }
                    })
                })
            })
        }
    },
    e => {
        e.O(0, [6847, 5869, 89247, 88823, 67088, 22694, 46593, 90636, 38792], () => e(e.s = 14465)), _N_E = e.O()
    }
]);