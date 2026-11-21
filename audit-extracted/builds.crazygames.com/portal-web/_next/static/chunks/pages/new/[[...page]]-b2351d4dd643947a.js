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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1df2d818-f17b-4c7c-963e-46ca0c65a4b7", e._sentryDebugIdIdentifier = "sentry-dbid-1df2d818-f17b-4c7c-963e-46ca0c65a4b7")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47396], {
        22077: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/new/[[...page]]", function() {
                return a(55040)
            }])
        },
        55040: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var r = a(6029),
                i = a(55729),
                n = a(68168),
                s = a(23033),
                l = a(30277),
                o = a(52461),
                g = a(50293),
                c = a(58224),
                d = a(87295),
                u = a(12097),
                p = a(952),
                h = a(31331),
                m = a(91831),
                w = a(39195),
                _ = a(20183),
                f = a(66670);
            class y extends i.Component {
                static async getInitialProps(e) {
                    let {
                        pageService: t,
                        routeDataService: a
                    } = (0, u.V)(e), r = (0, g.hz)(e), i = (0, g.Fr)(r), o = d.QI, p = e.query[d.Sh] || 1, h = (0, l.z)(p), m = i ? c.Qk : c.lY, w = {
                        page: h,
                        size: Number(e.query && e.query[d.Fb] || m)
                    }, _ = e.query && e.query[d.hy] || void 0, f = (0, s.CZ)(o, _, a, h);
                    if (o === d.QI && h > c.sy) throw new n.A(404, "Incorrect pagination");
                    let [y, b] = await Promise.all([t.gamesPageGamesOnly(o, w, (0, g.Dw)(r), _), f]);
                    if (1 !== w.page && 0 === y.games.items.length) throw new n.A(404, "No games found");
                    return o === d.QI && e.res && e.res.setHeader("Cache-Control", "public, max-age=120, stale-if-error=1800, stale-while-revalidate=300"), {
                        games: y.games,
                        label: _,
                        sorting: o,
                        page: h,
                        alternatives: b
                    }
                }
                render() {
                    let {
                        games: e,
                        sorting: t,
                        alternatives: a,
                        label: i
                    } = this.props, n = this.getTitle(), s = this.getDescription(), l = this.getGamePageHeading(), g = this.getGamePageDescription(), c = this.getCanonical(), d = this.getClickOrigin();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(p.A, {
                            title: n,
                            metaDescription: s,
                            canonical: c,
                            alternatives: a
                        }), (0, r.jsx)(m.A, {
                            canonical: c,
                            title: n,
                            description: s
                        }), (0, r.jsx)(o.x, {
                            newClickOrigin: d,
                            children: (0, r.jsx)(h.A, {
                                games: e,
                                sorting: t,
                                pageHeading: l,
                                pageDescription: g,
                                label: i
                            })
                        })]
                    })
                }
                getTitle() {
                    let {
                        sorting: e,
                        i18n: t,
                        label: a,
                        page: r
                    } = this.props;
                    if (a && a === d.HG) return `${t._({id:"games.hot.metaTitle"})} ${r>1?` - ${t._({id:"games.title.page"})} ${r}`:""}`;
                    switch (e) {
                        case d.QI:
                            return `${t._({id:"games.new.title"})} - CrazyGames${r>1?` - ${t._({id:"games.title.page"})} ${r}`:""}`;
                        case d.F3:
                            return `${t._({id:"games.updated.title"})} - CrazyGames${r>1?` - ${t._({id:"games.title.page"})} ${r}`:""}`;
                        default:
                            return console.warn(`unexpected sorting ${e}`), "CrazyGames"
                    }
                }
                getDescription() {
                    let {
                        i18n: e,
                        label: t
                    } = this.props;
                    return t && t === d.HG ? e._({
                        id: "games.hot.metaDescription"
                    }) : e._("common.head.metaDescription")
                }
                getGamePageHeading() {
                    let {
                        sorting: e,
                        i18n: t,
                        label: a
                    } = this.props;
                    return a && a === d.HG ? t._({
                        id: "games.hot.title"
                    }) : e === d.QI ? t._({
                        id: "games.new.title"
                    }) : e === d.F3 ? t._({
                        id: "games.updated.title"
                    }) : void 0
                }
                getGamePageDescription() {
                    let {
                        label: e,
                        i18n: t
                    } = this.props;
                    if (e && e === d.HG) return t._({
                        id: "games.hot.description"
                    })
                }
                getCanonical() {
                    let {
                        routeHelper: e,
                        sorting: t,
                        page: a,
                        label: r
                    } = this.props;
                    if (r === d.HG) return e.hotPageCanonical(a);
                    switch (t) {
                        case d.QI:
                            return e.newPageCanonical(a);
                        case d.F3:
                            return e.updatedPageCanonical(a);
                        case d.nn:
                        default:
                            return console.warn(`unexpected sorting ${t}`), e.newPageCanonical(a)
                    }
                }
                getClickOrigin() {
                    let {
                        sorting: e,
                        label: t
                    } = this.props;
                    if (t && t === d.HG) return "trending";
                    switch (e) {
                        case d.QI:
                            return "new";
                        case d.F3:
                            return "updated"
                    }
                }
            }
            let b = (0, w.A)((0, _.A)("games", "carousels")((0, f.A)(y)))
        }
    },
    e => {
        e.O(0, [6847, 5869, 89247, 88823, 67088, 67473, 96671, 46593, 90636, 38792], () => e(e.s = 22077)), _N_E = e.O()
    }
]);