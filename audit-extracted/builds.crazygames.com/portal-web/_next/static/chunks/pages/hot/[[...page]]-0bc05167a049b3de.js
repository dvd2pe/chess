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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "88dd5b9d-e098-41ac-924d-fbbb2972ded7", e._sentryDebugIdIdentifier = "sentry-dbid-88dd5b9d-e098-41ac-924d-fbbb2972ded7")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [59511], {
        33537: (e, t, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/hot/[[...page]]", function() {
                return a(89787)
            }])
        },
        89787: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var r = a(6029),
                n = a(55729),
                i = a(68168),
                s = a(23033),
                o = a(30277),
                l = a(52461),
                g = a(50293),
                d = a(58224),
                c = a(87295),
                u = a(12097),
                p = a(952),
                h = a(31331),
                m = a(91831),
                w = a(39195),
                _ = a(20183),
                f = a(66670);
            class y extends n.Component {
                static async getInitialProps(e) {
                    let {
                        pageService: t,
                        routeDataService: a
                    } = (0, u.V)(e), r = (0, g.hz)(e), n = (0, g.Fr)(r), l = e.query && e.query[c.po] || c.nn, p = e.query[c.Sh] || 1, h = (0, o.z)(p), m = n ? d.Qk : d.lY, w = {
                        page: h,
                        size: Number(e.query && e.query[c.Fb] || m)
                    }, _ = c.HG;
                    if (l === c.nn && !_) throw new i.A(404, "Page not found");
                    let f = (0, s.CZ)(l, _, a, h);
                    if (l === c.QI && h > d.sy) throw new i.A(404, "Incorrect pagination");
                    let [y, b] = await Promise.all([t.gamesPageGamesOnly(l, w, (0, g.Dw)(r), _), f]);
                    if (1 !== w.page && 0 === y.games.items.length) throw new i.A(404, "No games found");
                    return l === c.QI && e.res && e.res.setHeader("Cache-Control", "public, max-age=120, stale-if-error=1800, stale-while-revalidate=300"), {
                        games: y.games,
                        label: _,
                        sorting: l,
                        page: h,
                        alternatives: b
                    }
                }
                render() {
                    let {
                        games: e,
                        sorting: t,
                        alternatives: a,
                        label: n
                    } = this.props, i = this.getTitle(), s = this.getDescription(), o = this.getGamePageHeading(), g = this.getGamePageDescription(), d = this.getCanonical(), c = this.getClickOrigin();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(p.A, {
                            title: i,
                            metaDescription: s,
                            canonical: d,
                            alternatives: a
                        }), (0, r.jsx)(m.A, {
                            canonical: d,
                            title: i,
                            description: s
                        }), (0, r.jsx)(l.x, {
                            newClickOrigin: c,
                            children: (0, r.jsx)(h.A, {
                                games: e,
                                sorting: t,
                                pageHeading: o,
                                pageDescription: g,
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
                    if (a && a === c.HG) return `${t._({id:"games.hot.metaTitle"})} ${r>1?` - ${t._({id:"games.title.page"})} ${r}`:""}`;
                    switch (e) {
                        case c.QI:
                            return `${t._({id:"games.new.title"})} - CrazyGames${r>1?` - ${t._({id:"games.title.page"})} ${r}`:""}`;
                        case c.F3:
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
                    return t && t === c.HG ? e._({
                        id: "games.hot.metaDescription"
                    }) : e._("common.head.metaDescription")
                }
                getGamePageHeading() {
                    let {
                        sorting: e,
                        i18n: t,
                        label: a
                    } = this.props;
                    return a && a === c.HG ? t._({
                        id: "games.hot.title"
                    }) : e === c.QI ? t._({
                        id: "games.new.title"
                    }) : e === c.F3 ? t._({
                        id: "games.updated.title"
                    }) : void 0
                }
                getGamePageDescription() {
                    let {
                        label: e,
                        i18n: t
                    } = this.props;
                    if (e && e === c.HG) return t._({
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
                    if (r === c.HG) return e.hotPageCanonical(a);
                    switch (t) {
                        case c.QI:
                            return e.newPageCanonical(a);
                        case c.F3:
                            return e.updatedPageCanonical(a);
                        case c.nn:
                        default:
                            return console.warn(`unexpected sorting ${t}`), e.newPageCanonical(a)
                    }
                }
                getClickOrigin() {
                    let {
                        sorting: e,
                        label: t
                    } = this.props;
                    if (t && t === c.HG) return "trending";
                    switch (e) {
                        case c.QI:
                            return "new";
                        case c.F3:
                            return "updated"
                    }
                }
            }
            let b = (0, w.A)((0, _.A)("games", "carousels")((0, f.A)(y)))
        }
    },
    e => {
        e.O(0, [6847, 5869, 89247, 88823, 67088, 67473, 96671, 46593, 90636, 38792], () => e(e.s = 33537)), _N_E = e.O()
    }
]);