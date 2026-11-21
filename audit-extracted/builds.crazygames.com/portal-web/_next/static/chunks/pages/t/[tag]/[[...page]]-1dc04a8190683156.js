! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var a in r) r.hasOwnProperty(a) && (e[a] = r[a])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d2362469-ed13-4fac-b554-5e32d8fd4d4e", e._sentryDebugIdIdentifier = "sentry-dbid-d2362469-ed13-4fac-b554-5e32d8fd4d4e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [90541], {
        6633: (e, t, r) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/t/[tag]/[[...page]]", function() {
                return r(74997)
            }])
        },
        37028: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => f
            });
            var a = r(81278),
                s = r.n(a),
                n = r(61411),
                i = r(57212),
                o = r(15583),
                l = r(87295);
            async function u(e, t, r) {
                let {
                    tag: a,
                    requestedSlug: s,
                    hasWrongPrefix: l,
                    locale: u,
                    page: f,
                    sorting: d
                } = r, g = o.A.createFromContext(e, await t.getLocaleRouteProviderData(u)), h = a.slug[n.Jh];
                if (a.isArchived) return {
                    href: g.homePageLink().href,
                    status: 301
                };
                if ("multiplayer" === h || "2-player" === h) return {
                    href: g.multiplayerPageLink("2-player" === h ? "2-player" : void 0).href,
                    status: 301
                };
                if ("with-friends" === h) return {
                    href: g.multiplayerPageLink().href,
                    status: 301
                };
                if ("climb-the-ranks" === h) return {
                    href: g.leaderboardsPageLink(f, d).href,
                    status: 301
                };
                if (e.res && (s !== h || l)) {
                    let r = o.A.createFromContext(e, await t.getLocaleRouteProviderData(n.Xn)),
                        s = a.isCategory ? r.categoryPageRelativeLink(a.slug, f, d).href : r.tagPageRelativeLink(a.slug, f, d).href,
                        {
                            pathLocale: l
                        } = i.Ec[u];
                    return {
                        href: l ? `/${l}${s}` : s,
                        status: 302
                    }
                }
                if (l) return {
                    href: g.tagOrCategoryPageLink(a.slug, a.isCategory, f, d).href,
                    status: 302
                }
            }
            async function f(e, t, r) {
                let a = await u(e, t, r);
                return !!a && (e.res ? (e.res.writeHead(a.status, {
                    Location: a.href
                }), e.res.end()) : s().pathname === l.bM ? await s().replace(a.href, a.href) : await s().push(a.href, a.href), !0)
            }
        },
        74997: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => v
            });
            var a = r(6029),
                s = r(55729),
                n = r(68168),
                i = r(33770),
                o = r(23033),
                l = r(30277),
                u = r(50293),
                f = r(87295),
                d = r(71543),
                g = r(47429),
                h = r(37028),
                c = r(12097),
                y = r(95816),
                p = r(69694),
                w = r(61411),
                m = r(39195),
                _ = r(20183),
                b = r(66670);
            class k extends s.Component {
                static async getInitialProps(e) {
                    let {
                        pageService: t,
                        routeDataService: r,
                        crawlerService: a,
                        modelService: s
                    } = (0, c.V)(e), p = (0, u.hz)(e), m = (0, w.JK)(e), _ = e.query && e.query[f.L2], b = e.query && e.query[f.po] || "default", k = e.query[f.Sh] || 1, v = (0, l.z)(k), P = (0, u.xl)(p) ? g.F_ : g.w9, C = {
                        page: v,
                        size: Number(e.query && e.query[f.Fb] || P)
                    }, A = (0, u.v1)(p) ? g.uo : g.iF, L = (0, u.xl)(p) ? g.r2 : A, M = e => t.tagPage(e, _, C, L, A, p, g.W$, g.F_, b), q = await M("tag").catch(e => {
                        if (e instanceof n.A && 404 === e.statusCode) return M("category");
                        throw e
                    }), E = q.tag.isCategory, {
                        tag: F,
                        games: G,
                        topGames: I,
                        topMobileGames: x,
                        linkBoostedGames: D,
                        fillerGames: N
                    } = q;
                    if (await (0, h.I)(e, r, {
                            tag: F,
                            requestedSlug: _,
                            hasWrongPrefix: E,
                            locale: m,
                            page: v,
                            sorting: b
                        })) return {};
                    let O = "true" === e.query[f.pr],
                        R = (0, y.Y)(G.items[0]),
                        {
                            games: z,
                            extraDesktopGames: T
                        } = await (0, d.fS)({
                            sorting: b,
                            isCrawler: O
                        }, {
                            deviceInfo: p,
                            page: v,
                            tag: F
                        }, a, s),
                        $ = !O,
                        H = $ ? void 0 : z;
                    if (H) {
                        if (v > Math.ceil(H.total / g.F_)) throw new n.A(404, "Incorrect pagination");
                        if (0 === H.items.length) throw new n.A(404, "No games found")
                    }
                    let S = await (0, o.$Y)(F, r, v);
                    return e.res && e.res.setHeader("Cache-Control", (0, i.H9)({
                        staleWhileRevalidate: 3600
                    })), {
                        crawlerGames: H,
                        tag: F,
                        topGames: I,
                        topMobileGames: x,
                        sorting: b,
                        page: v,
                        linkBoostedGames: D,
                        alternatives: S,
                        fillerGames: N,
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
                        topGames: r,
                        topMobileGames: s,
                        page: n,
                        sorting: i,
                        linkBoostedGames: o,
                        alternatives: l,
                        fillerGames: u,
                        isCrawler: f,
                        extraDesktopGames: d,
                        shouldFetchGamesOnClient: g,
                        featuredGame: h
                    } = this.props;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(p.A, {
                            tag: t,
                            topGames: r,
                            topMobileGames: s,
                            page: n,
                            alternatives: l,
                            linkBoostedGames: o,
                            fillerGames: u,
                            sorting: i,
                            featuredGame: h,
                            shouldFetchGamesOnClient: g,
                            crawlerGames: e,
                            extraDesktopGames: d,
                            isCrawler: f
                        }, t.name)
                    })
                }
            }
            let v = (0, m.A)((0, _.A)("tag", "carousels")((0, b.A)(k)))
        }
    },
    e => {
        e.O(0, [6847, 5869, 89247, 88823, 67088, 67473, 22694, 32627, 19954, 46593, 90636, 38792], () => e(e.s = 6633)), _N_E = e.O()
    }
]);