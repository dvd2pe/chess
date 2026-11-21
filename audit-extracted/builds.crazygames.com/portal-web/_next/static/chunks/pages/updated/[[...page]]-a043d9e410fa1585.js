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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb486df0-25b0-4644-8a0b-82c55e1cb526", e._sentryDebugIdIdentifier = "sentry-dbid-eb486df0-25b0-4644-8a0b-82c55e1cb526")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [64987], {
        82171: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => C
            });
            var r = a(6029),
                n = a(55729),
                i = a(98417),
                s = a(68168),
                o = a(23033),
                l = a(30277),
                g = a(52461),
                d = a(50293),
                c = a(58224),
                u = a(87295),
                p = a(12097),
                h = a(952),
                m = a(31331),
                _ = a(91831),
                w = a(39195),
                y = a(20183),
                f = a(66670);
            class b extends n.Component {
                static async getInitialProps(e) {
                    let {
                        pageService: t,
                        routeDataService: a
                    } = (0, p.V)(e), r = (0, d.hz)(e), n = (0, d.Fr)(r), g = u.F3, h = (0, i.O)(e.query[u.Fb]), m = e.query[u.Sh] || 1, _ = (0, l.z)(m), w = n ? c.Qk : c.lY, y = {
                        page: _,
                        size: h ? Number(e.query[u.Fb]) : w
                    }, f = e.query[u.hy] || void 0, b = (0, o.CZ)(g, f, a, _), [C, P] = await Promise.all([t.gamesPageGamesOnly(g, y, (0, d.Dw)(r), f), b]);
                    if (1 !== y.page && 0 === C.games.items.length) throw new s.A(404, "No games found");
                    return {
                        games: C.games,
                        label: f,
                        sorting: g,
                        page: _,
                        alternatives: P
                    }
                }
                render() {
                    let {
                        games: e,
                        sorting: t,
                        alternatives: a,
                        label: n
                    } = this.props, i = this.getTitle(), s = this.getDescription(), o = this.getGamePageHeading(), l = this.getGamePageDescription(), d = this.getCanonical(), c = this.getClickOrigin();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.A, {
                            title: i,
                            metaDescription: s,
                            canonical: d,
                            alternatives: a
                        }), (0, r.jsx)(_.A, {
                            canonical: d,
                            title: i,
                            description: s
                        }), (0, r.jsx)(g.x, {
                            newClickOrigin: c,
                            children: (0, r.jsx)(m.A, {
                                games: e,
                                sorting: t,
                                pageHeading: o,
                                pageDescription: l,
                                label: n
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
                    if (a && a === u.HG) return t._({
                        id: "games.hot.metaTitle"
                    });
                    switch (e) {
                        case u.QI:
                            return `${t._({id:"games.new.title"})} - CrazyGames${r>1?` - ${t._({id:"games.title.page"})} ${r}`:""}`;
                        case u.F3:
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
                    return t && t === u.HG ? e._({
                        id: "games.hot.metaDescription"
                    }) : e._("common.head.metaDescription")
                }
                getGamePageHeading() {
                    let {
                        sorting: e,
                        i18n: t,
                        label: a
                    } = this.props;
                    return a && a === u.HG ? t._({
                        id: "games.hot.title"
                    }) : e === u.QI ? t._({
                        id: "games.new.title"
                    }) : e === u.F3 ? t._({
                        id: "games.updated.title"
                    }) : void 0
                }
                getGamePageDescription() {
                    let {
                        label: e,
                        i18n: t
                    } = this.props;
                    if (e && e === u.HG) return t._({
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
                    if (r === u.HG) return e.hotPageCanonical(a);
                    switch (t) {
                        case u.QI:
                            return e.newPageCanonical(a);
                        case u.F3:
                            return e.updatedPageCanonical(a);
                        case u.nn:
                        default:
                            return console.warn(`unexpected sorting ${t}`), e.newPageCanonical(a)
                    }
                }
                getClickOrigin() {
                    let {
                        sorting: e,
                        label: t
                    } = this.props;
                    if (t && t === u.HG) return "trending";
                    switch (e) {
                        case u.QI:
                            return "new";
                        case u.F3:
                            return "updated"
                    }
                }
            }
            let C = (0, w.A)((0, y.A)("games", "carousels")((0, f.A)(b)))
        },
        84289: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/updated/[[...page]]", function() {
                return a(82171)
            }])
        }
    },
    e => {
        e.O(0, [6847, 5869, 89247, 88823, 67088, 67473, 96671, 46593, 90636, 38792], () => e(e.s = 84289)), _N_E = e.O()
    }
]);