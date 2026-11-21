! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                if (null != a)
                    for (var r in a) a.hasOwnProperty(r) && (e[r] = a[r])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e4003ad-6385-4f81-9fbd-14887b235e41", e._sentryDebugIdIdentifier = "sentry-dbid-4e4003ad-6385-4f81-9fbd-14887b235e41")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [70050], {
        37028: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => f
            });
            var r = a(81278),
                s = a.n(r),
                n = a(61411),
                i = a(57212),
                o = a(15583),
                l = a(87295);
            async function u(e, t, a) {
                let {
                    tag: r,
                    requestedSlug: s,
                    hasWrongPrefix: l,
                    locale: u,
                    page: f,
                    sorting: g
                } = a, d = o.A.createFromContext(e, await t.getLocaleRouteProviderData(u)), h = r.slug[n.Jh];
                if (r.isArchived) return {
                    href: d.homePageLink().href,
                    status: 301
                };
                if ("multiplayer" === h || "2-player" === h) return {
                    href: d.multiplayerPageLink("2-player" === h ? "2-player" : void 0).href,
                    status: 301
                };
                if ("with-friends" === h) return {
                    href: d.multiplayerPageLink().href,
                    status: 301
                };
                if ("climb-the-ranks" === h) return {
                    href: d.leaderboardsPageLink(f, g).href,
                    status: 301
                };
                if (e.res && (s !== h || l)) {
                    let a = o.A.createFromContext(e, await t.getLocaleRouteProviderData(n.Xn)),
                        s = r.isCategory ? a.categoryPageRelativeLink(r.slug, f, g).href : a.tagPageRelativeLink(r.slug, f, g).href,
                        {
                            pathLocale: l
                        } = i.Ec[u];
                    return {
                        href: l ? `/${l}${s}` : s,
                        status: 302
                    }
                }
                if (l) return {
                    href: d.tagOrCategoryPageLink(r.slug, r.isCategory, f, g).href,
                    status: 302
                }
            }
            async function f(e, t, a) {
                let r = await u(e, t, a);
                return !!r && (e.res ? (e.res.writeHead(r.status, {
                    Location: r.href
                }), e.res.end()) : s().pathname === l.bM ? await s().replace(r.href, r.href) : await s().push(r.href, r.href), !0)
            }
        },
        56073: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/c/[tag]/[[...page]]", function() {
                return a(71138)
            }])
        },
        71138: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => v
            });
            var r = a(6029),
                s = a(55729),
                n = a(68168),
                i = a(33770),
                o = a(95816),
                l = a(69694),
                u = a(61411),
                f = a(39195),
                g = a(20183),
                d = a(66670),
                h = a(23033),
                c = a(30277),
                y = a(50293),
                p = a(87295),
                w = a(71543),
                m = a(47429),
                _ = a(37028),
                b = a(12097);
            class k extends s.Component {
                static async getInitialProps(e) {
                    let {
                        pageService: t,
                        routeDataService: a,
                        crawlerService: r,
                        modelService: s
                    } = (0, b.V)(e), l = (0, y.hz)(e), f = (0, u.JK)(e), g = e.query[p.L2], d = e.query[p.po] || "default", k = e.query[p.Sh] || 1, v = (0, c.z)(k), P = (0, y.xl)(l) ? m.F_ : m.w9, C = {
                        page: v,
                        size: Number(e.query[p.Fb] || P)
                    }, A = (0, y.v1)(l) ? m.uo : m.iF, L = (0, y.xl)(l) ? m.r2 : A, M = e => t.tagPage(e, g, C, L, A, l, m.W$, m.F_, d), E = await M("category").catch(e => {
                        if (e instanceof n.A && 404 === e.statusCode) return M("tag");
                        throw e
                    }), F = !E.tag.isCategory, {
                        tag: G,
                        games: I,
                        topGames: x,
                        topMobileGames: D,
                        linkBoostedGames: N,
                        fillerGames: q
                    } = E;
                    if (await (0, _.I)(e, a, {
                            tag: G,
                            requestedSlug: g,
                            hasWrongPrefix: F,
                            locale: f,
                            page: v,
                            sorting: d
                        })) return {};
                    let O = "true" === e.query[p.pr],
                        R = (0, o.Y)(I.items[0]),
                        {
                            games: z,
                            extraDesktopGames: T
                        } = await (0, w.fS)({
                            sorting: d,
                            isCrawler: O
                        }, {
                            deviceInfo: l,
                            page: v,
                            tag: G
                        }, r, s),
                        $ = !O,
                        H = $ ? void 0 : z;
                    if (H) {
                        if (v > Math.ceil(H.total / m.F_)) throw new n.A(404, "Incorrect pagination");
                        if (0 === H.items.length) throw new n.A(404, "No games found")
                    }
                    let S = await (0, h.$Y)(G, a, v);
                    return e.res && e.res.setHeader("Cache-Control", (0, i.H9)({
                        staleWhileRevalidate: 3600
                    })), {
                        crawlerGames: H,
                        tag: G,
                        topGames: x,
                        topMobileGames: D,
                        sorting: d,
                        page: v,
                        linkBoostedGames: N,
                        alternatives: S,
                        fillerGames: q,
                        isCrawler: O,
                        extraDesktopGames: T,
                        shouldFetchGamesOnClient: $,
                        featuredGame: R
                    }
                }
                render() {
                    let {
                        crawlerGames: e,
                        tag: t,
                        topGames: a,
                        topMobileGames: s,
                        page: n,
                        sorting: i,
                        linkBoostedGames: o,
                        alternatives: u,
                        fillerGames: f,
                        isCrawler: g,
                        extraDesktopGames: d,
                        shouldFetchGamesOnClient: h,
                        featuredGame: c
                    } = this.props;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(l.A, {
                            tag: t,
                            topGames: a,
                            topMobileGames: s,
                            page: n,
                            alternatives: u,
                            linkBoostedGames: o,
                            fillerGames: f,
                            sorting: i,
                            featuredGame: c,
                            shouldFetchGamesOnClient: h,
                            crawlerGames: e,
                            extraDesktopGames: d,
                            isCrawler: g
                        }, t.name)
                    })
                }
            }
            let v = (0, f.A)((0, g.A)("tag", "carousels")((0, d.A)(k)))
        }
    },
    e => {
        e.O(0, [6847, 5869, 89247, 88823, 67088, 67473, 22694, 32627, 19954, 46593, 90636, 38792], () => e(e.s = 56073)), _N_E = e.O()
    }
]);