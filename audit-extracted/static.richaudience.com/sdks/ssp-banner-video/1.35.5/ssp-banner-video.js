(() => {
    "use strict";
    var t = {
            d: (e, i) => {
                for (var n in i) t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: i[n]
                })
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
        },
        e = {};
    t.r(e), t.d(e, {
        device: () => Jt,
        isAndroid: () => Gt,
        isAndroidPhone: () => Wt,
        isAndroidTablet: () => zt,
        isDesktop: () => Zt,
        isFacebookApp: () => te,
        isIOs: () => ne,
        isIPad: () => qt,
        isIPhone: () => Kt,
        isInstagramApp: () => ee,
        isMobile: () => Xt,
        isPinterestApp: () => ie,
        isTablet: () => Qt,
        isWindows: () => Ht,
        isWindowsPhone: () => jt,
        isWindowsTablet: () => Yt
    });
    let {
        toString: i
    } = Object.prototype;

    function n(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i.call(t)
    }

    function s(t) {
        return "[object Array]" === n(t)
    }

    function r(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]), s(t))
                for (let i = 0, n = t.length; i < n; i++) e.call(null, t[i], i, t);
            else
                for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
    }

    function a(t) {
        return "function" == typeof t
    }

    function o(t) {
        return a(t) ? (...e) => !t(...e) : !t
    }

    function d(t) {
        const e = typeof t;
        return "string" === e || "object" === e && null != t && !Array.isArray(t) && "[object String]" === n(t)
    }

    function c(t, e = "") {
        if (o(d(t))) throw new Error(`${e||t} should be a string!`)
    }

    function l(t, e = "") {
        if (o(a(t))) throw new Error(`${e||t} should be a function!`)
    }

    function h() {}

    function u(t) {
        return () => t
    }

    function p(t, e = u(null)) {
        return (...i) => {
            try {
                return t(...i)
            } catch (t) {
                return e(t, ...i)
            }
        }
    }

    function m(t) {
        return void 0 === t
    }
    const A = t => {
            c(t, "Event name")
        },
        g = t => {
            l(t, "Handler")
        };
    class f {
        constructor(t = h) {
            this.debugLog = p(t), this.listeners = {}
        }
        on(t, e) {
            A(t), g(e), this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(e)
        }
        once(t, e) {
            g(e);
            const i = n => {
                this.off(t, i), e.call(this, n)
            };
            this.on(t, i)
        }
        off(t, e) {
            A(t), g(e);
            const i = this.listeners[t];
            if (m(i)) return;
            const n = i.indexOf(e);
            i.splice(n, 1), 0 === i.length && delete this.listeners[t]
        }
        offAll(t) {
            m(t) ? this.listeners = {} : (A(t), this.listeners[t] = [], delete this.listeners[t])
        }
        emit(t, e) {
            A(t);
            const i = this.listeners[t];
            m(i) || i.forEach(t => {
                try {
                    t.call(this, e)
                } catch (t) {
                    this.debugLog({
                        message: "Calling event listener",
                        error: t
                    })
                }
            })
        }
        hasListeners(t) {
            return A(t), Boolean(this.listeners[t] ? .length)
        }
    }
    const E = {
            AD_LOADED: "AdLoaded",
            AD_STARTED: "AdStarted",
            AD_STOPPED: "AdStopped",
            AD_SKIPPED: "AdSkipped",
            AD_SKIPPABLE_STATE_CHANGE: "AdSkippableStateChange",
            AD_SIZE_CHANGE: "AdSizeChange",
            AD_LINEAR_CHANGE: "AdLinearChange",
            AD_DURATION_CHANGE: "AdDurationChange",
            AD_EXPANDED_CHANGE: "AdExpandedChange",
            AD_VOLUME_CHANGE: "AdVolumeChange",
            AD_IMPRESSION: "AdImpression",
            AD_VIDEO_START: "AdVideoStart",
            AD_VIDEO_FIRST_QUARTILE: "AdVideoFirstQuartile",
            AD_VIDEO_MIDPOINT: "AdVideoMidpoint",
            AD_VIDEO_THIRD_QUARTILE: "AdVideoThirdQuartile",
            AD_VIDEO_COMPLETE: "AdVideoComplete",
            AD_CLICK_THRU: "AdClickThru",
            AD_INTERACTION: "AdInteraction",
            AD_USER_ACCEPT_INVITATION: "AdUserAcceptInvitation",
            AD_USER_MINIMIZE: "AdUserMinimize",
            AD_USER_CLOSE: "AdUserClose",
            AD_PAUSED: "AdPaused",
            AD_PLAYING: "AdPlaying",
            AD_LOG: "AdLog",
            AD_ERROR: "AdError"
        },
        b = "impression",
        v = "clickTracking",
        y = "error",
        T = "viewable",
        C = "notViewable",
        I = "viewabilityUndetermined",
        S = "userInteract";

    function D(t, e) {
        return function i(n) {
            return function(...s) {
                const r = [...n, ...s];
                return r.length >= t ? e(...r) : i(r)
            }
        }([])
    }

    function w(t) {
        return null !== t && ("object" == typeof t || a(t))
    }

    function P(t) {
        return w(t) && !a(t) && !s(t)
    }
    const R = D(3, (t, e, i) => {
            if (s(i)) return i.reduce(t, e);
            if (P(i)) return Object.entries(i).reduce((e, [i, n]) => t(e, n, i), e);
            throw new Error(`Cannot apply reduce to ${i}`)
        }),
        k = D(2, (t, e) => {
            if (s(e)) return e.filter(t);
            if (P(e)) return Object.entries(e).reduce((e, [i, n]) => ({ ...e,
                ...t(n, i) && {
                    [i]: n
                }
            }), {});
            throw new Error(`Cannot apply filter to ${e}`)
        }),
        M = {
            SUBSCRIBE: "subscribe",
            UNSUBSCRIBE: "unsubscribe"
        },
        O = {
            SUBSCRIBE: "on",
            UNSUBSCRIBE: "off"
        },
        _ = t => a(t[M.SUBSCRIBE]) && a(t[M.UNSUBSCRIBE]);

    function N(t) {
        if (!w(t)) throw new Error("The context needs to be provided");
        return function(e, i = {}) {
            if (!w(e)) throw new Error("No emitter provided");
            const n = {},
                {
                    subscribeFn: s,
                    unsubscribeFn: o
                } = (t => {
                    const {
                        SUBSCRIBE: e,
                        UNSUBSCRIBE: i
                    } = _(t) ? M : O;
                    return {
                        subscribeFn: t[e].bind(t),
                        unsubscribeFn: t[i].bind(t)
                    }
                })(e),
                d = function(t, e, i, n) {
                    const s = p(e.debugLog);
                    return function(o) {
                        return function(d, c) {
                            if (!w(d)) throw new Error("No listeners provided");
                            const l = a(c),
                                h = _(n);
                            r(d, (n, r) => {
                                const a = (...a) => {
                                    h && l && !i[r] || (l && (h ? delete i[r] : c(r)), s(r, ...a), e.emitHooks && t.hooksManager && t.hooksManager.emit(`before${r}`, ...a), n.apply(t, a), e.emitHooks && t.hooksManager && t.hooksManager.emit(`after${r}`, ...a), e.propagate && t.emit && t.emit(r, ...a))
                                };
                                o(r, a, t), i[r] = a
                            })
                        }
                    }
                }(t, i, n, e),
                c = d(s),
                l = t => {
                    o(t, n[t]), delete n[t]
                };
            return {
                subscribe: c,
                subscribeOnce: t => c(t, l),
                unsubscribe: l,
                unsubscribeAll: () => Object.keys(n).forEach(l),
                emitEvent: (t, ...e) => n[t] ? n[t](...e) : void 0
            }
        }
    }

    function L() {
        return (new Date).getTime().toString()
    }
    const U = "__sm__",
        x = {
            TYPES: {
                VIDEO: "Video",
                SOCIAL: "SocialAd",
                SCROLLER: "Scroller",
                IMAGE: "AdImage",
                DISPLAY: "Display",
                PROGRAMMATIC_DISPLAY: "SSP",
                SURVEY: "Survey"
            },
            TAG_PARAMS: {
                SIZE: "s"
            }
        },
        V = "Brandlift",
        $ = "NativeFake",
        F = "InStories",
        B = "NativeDriver",
        H = "format-init",
        G = "format-programmatic-display-ad-size",
        W = "sm",
        z = {
            EUROPE: "EU",
            LATIN_AMERICA: "LM",
            NORTH_AMERICA: "AN"
        };
    const q = new class {
        constructor() {
            this.debug = !1
        }
        setMode(t) {
            this.debug = Boolean(t)
        }
        log({
            type: t = "log",
            style: e = "font-weight: bold",
            args: i = []
        } = {}) {
            if (this.debug) {
                const n = `${W}-${t}:`.toUpperCase();
                (console[t] || console.log) ? .apply(console, [`%c${n}`, e, ...i])
            }
        }
        info(...t) {
            this.log({
                type: "info",
                style: "color: blue; font-weight: bold",
                args: t
            })
        }
        warning(...t) {
            this.log({
                type: "warn",
                args: t
            })
        }
        warnDeprecation(...t) {
            this.log({
                type: "warn",
                style: "font-weight: bold; color: #ff0000;",
                args: ["Calling deprecated function \n*\n", ...t, "\n*\n"]
            })
        }
        error(...t) {
            this.log({
                type: "error",
                args: t
            })
        }
    };
    q.wrapWithName = t => {
        c(t, "loggerName");
        const e = t.toUpperCase();
        return {
            info: (...t) => q.info(`[${e}]`, ...t),
            error: (...t) => q.error(`[${e}]`, ...t),
            warning: (...t) => q.warning(`[${e}]`, ...t),
            warnDeprecation: (...t) => q.warnDeprecation(`[${e}]`, ...t)
        }
    };
    const j = q;

    function Y(...t) {
        const e = {};

        function i(t, i) {
            P(t) ? "object" == typeof e[i] && "object" == typeof t ? e[i] = Y(e[i], t) : "object" == typeof t && (e[i] = Y({}, t)) : e[i] = t
        }
        return t.forEach(t => {
            r(t, i)
        }), e
    }

    function Q(t) {
        return "number" == typeof t
    }

    function K(t) {
        return Q(t ? .nodeType) && d(t.nodeName)
    }

    function X(t) {
        return 1 === t ? .nodeType && d(t.nodeName)
    }

    function Z(t) {
        o(X(t)) || t.parentNode ? .removeChild(t)
    }
    const J = D(2, (t, e) => {
        if (s(e)) return e.map(t);
        if (P(e)) return Object.entries(e).reduce((e, [i, n]) => Object.assign(e, {
            [i]: t(n, i)
        }), {});
        throw new Error(`Cannot apply map to ${e}`)
    });

    function tt(t) {
        return Q(t) && !Number.isNaN(t)
    }

    function et(t, e = {}, i = !1) {
        if (o(X(t))) return;
        i && t.removeAttribute("style");
        const n = function(t) {
            return J((t, e) => (t => ["line-height"].every(e => o(t.includes(e))))(e) && (t => ["top", "left", "right", "bottom", "width", "height", "margin", "padding", "border"].some(e => t.includes(e)))(e) && tt(t) ? `${t}px` : t, t)
        }(e);
        Object.assign(t.style, n)
    }

    function it(t) {
        return d(t) && "" !== t
    }

    function nt(t) {
        if (!a(t)) throw new Error("reverseArgs argument must be a function");
        return (...e) => t(...e.reverse())
    }

    function st(t, ...e) {
        if (!a(t)) throw new Error("pipe requires at least one function argument");
        return (...i) => {
            const n = t(...i);
            return e.reduce((t, e) => e(t), n)
        }
    }

    function rt(...t) {
        if (!t.length) throw new Error("compose requires at least one argument");
        return nt(st)(...t)
    }

    function at(t) {
        return t.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\r?\n|\r/g, "").replace(/\s\s+/g, " ").trim()
    }
    let ot = window;
    const dt = rt(o, it);

    function ct(t = {}) {
        const {
            type: e = "div",
            name: i = null,
            prefix: n = W,
            id: s = null,
            style: a = null,
            content: o = null,
            isHtmlContent: d = !0,
            events: c = null,
            children: l
        } = t;
        let h = { ...t.attributes
        };
        const u = document.createElement(e),
            p = n ? `${n}-` : "";
        if (i) {
            const t = `${p}${i}${h.class?` ${h.class}`:""}`;
            delete h.class, h = {
                class: t,
                ...h
            }
        }
        return s && (h = {
            id: `${p}${i?`${i}-`:""}${s}`,
            ...h
        }), r(h, (t, e) => {
            "data" === e && w(t) ? r(t, (t, e) => {
                u.setAttribute(`data-${e}`, t)
            }) : u.setAttribute(e, t)
        }), o && (d ? u.innerHTML = o : u.textContent = o), a && et(u, a), c && r(c, (t, e) => {
            var i;
            "click" === e ? (i = t, u.addEventListener("click", i)) : u.addEventListener(e, t)
        }), l && lt(u, l), u
    }

    function lt(t, e) {
        o(K(t)) || o(e) || rt(e => r(e, e => {
            var i;
            X(e) || (i = e, 11 === i ? .nodeType && d(i.nodeName)) ? t.appendChild(e) : w(e) && t.appendChild(ct(e))
        }), t => s(t) ? t : [t])(e)
    }

    function ht(t, e, {
        overwrite: i = !1,
        concat: n = !1,
        $refContainer: s,
        $container: r,
        wind: a = ot
    } = {}) {
        if (dt(t) || dt(e)) return;
        const d = s && function(t) {
                const e = t.getRootNode();
                return e !== document && !o("host" in e) && ("[object ShadowRoot]" === Object.prototype.toString.call(e) || "ShadowRoot" === e.constructor.name)
            }(s) ? s.getRootNode() : null,
            c = r ? function(t, e = !1) {
                if (K(t)) {
                    const i = t.ownerDocument,
                        n = i.defaultView || i.parentWindow;
                    return e && (ot = n), n
                }
                return null
            }(r).document : a.document,
            l = `${W}-${t}`,
            h = r || d && (d.querySelector("head") || s) || c.head,
            u = h.querySelector(`#${l}`),
            p = at(e),
            m = t => {
                if (t.styleSheet) t.styleSheet.cssText += p;
                else {
                    const e = c.createTextNode(p);
                    t.appendChild(e)
                }
                return t
            };
        if (u && o(i)) return void(n && o(at(u.textContent).includes(p)) && m(u));
        var A;
        i && Z(u);
        const g = {
            type: "style",
            attributes: {
                id: l,
                type: "text/css"
            }
        };
        rt(D((A = lt).length, A)(h), m, ct)(g)
    }

    function ut(t) {
        if (X(t)) {
            const e = ot.getComputedStyle(t);
            let i = t.clientWidth,
                n = t.clientHeight;
            return n -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), i -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), {
                height: n,
                width: i
            }
        }
        return null
    }

    function pt(t = ot) {
        return function(t, e) {
            const i = `inner${e}`,
                n = `client${e}`;
            let s;
            return t[i] ? s = t[i] : t.document && t.document.documentElement && t.document.documentElement[n] && (s = t.document.documentElement[n]), s
        }(t, "Height")
    }

    function mt(t) {
        return tt(t) && t > 0
    }

    function At(t) {
        return d(t) ? parseInt(t, 10) : t
    }

    function gt(t) {
        return /^\d+\:\d+$/gm.test(t)
    }
    const ft = {
            width: function(t, e) {
                const i = At(t);
                if (!tt(i) || !gt(e)) return null;
                const [n, s] = e.split(":");
                return i * n / s
            },
            height: function(t, e) {
                const i = At(t);
                if (!tt(i) || !gt(e)) return null;
                const [n, s] = e.split(":");
                return i * s / n
            },
            ratio: function(t, e) {
                let i = At(t),
                    n = At(e);
                if (!tt(i) || !tt(n)) return null;
                const s = t => At(t.toFixed(3)),
                    r = t => 1e3 * t;
                if (i = r(s(i)), n = r(s(n)), o(mt(i)) || o(mt(n))) return null;
                const a = function t(e, i) {
                    return 0 === i ? e : t(i, e % i)
                }(i, n);
                return `${i/a}:${n/a}`
            }
        },
        Et = t => ft[t] || u(null),
        bt = D(3, (t, e, i) => t(i) ? e(i) : i),
        vt = () => 0,
        yt = rt(o, mt),
        Tt = {
            MAIN: "main",
            AVA: "ava",
            REMEMBER: "remember"
        },
        Ct = {
            desktop: {
                width: 600,
                height: 450
            },
            mobile: {
                width: 110,
                height: 110
            }
        },
        It = {
            AD_CONTAINER: `\n    .${W}-ad-container {\n      position: absolute;\n      visibility: hidden;\n    }`
        },
        St = "RestartClick",
        Dt = "RestartClose",
        wt = "initialPosition",
        Pt = "mainPosition",
        Rt = "styles",
        kt = {
            mimes: ["video/mp4", "application/javascript"],
            protocols: [2, 3, 5, 6, 7, 8],
            maxduration: 500,
            placement: 1,
            playbackmethod: [2, 6]
        },
        Mt = {
            context: "instream",
            ...kt,
            plcmt: 1,
            startdelay: 0
        },
        Ot = {
            context: "outstream",
            ...kt,
            plcmt: 4,
            minduration: 1,
            renderer: {},
            linearity: 1
        },
        _t = {
            LARGE: [
                [640, 480]
            ],
            MEDIUM: [
                [640, 360]
            ]
        },
        Nt = (z.LATIN_AMERICA, z.NORTH_AMERICA, z.LATIN_AMERICA, z.NORTH_AMERICA, 1),
        Lt = "IAB9-7",
        Ut = "IAB9-9",
        xt = {
            CATTAX: 1,
            RULES: [{
                countries: ["AR", "BO", "BR", "CL", "CO", "EC", "PY", "PE", "UY", "VE", "CR", "SV", "GT", "HN", "MX", "NI", "PA", "CU", "HT", "DO"],
                bcat: [Lt, Ut]
            }, {
                countries: ["PT"],
                bcat: [Lt, Ut]
            }]
        },
        Vt = D(2, (t, e) => k(o(t), e)),
        $t = {
            get: (t, e, i) => Reflect.has(t, e) ? Reflect.get(t, e, i) : (...i) => t.emit(e, ...i)
        };
    class Ft extends f {
        constructor(t, e) {
            if (!t) throw new Error("A hookable instance is required!");
            const {
                debugLog: i,
                hooks: n,
                modules: s
            } = e || {};
            return super(i), this.modules = s || {}, this.hookableInstance = t, this.addMany(n), new Proxy(this, $t)
        }
        addMany(t) {
            s(t) ? t.forEach(t => {
                const [e, i] = Object.entries(t)[0];
                this.add(e, i)
            }) : r(t, (t, e) => {
                this.add(e, t)
            })
        }
        add(t, e) {
            this.on(t, e)
        }
        emit(t, ...e) {
            const i = this.listeners[t];
            i && (this.debugLog(`Hook "${t}" was called`), i.forEach(t => {
                t.call(null, this.hookableInstance, this.modules, ...e)
            }))
        }
        static async beforeSetup(t, e, i) {
            return this.#t(t, e, i, "beforeSetup")
        }
        static async beforeCreate(t, e, i) {
            return this.#t(t, e, i, "beforeCreate")
        }
        static async# t(t, e, i, n) {
            const s = t => a(t[n]),
                r = (t || []).filter(s);
            for (const t of r) await t[n](e, i);
            return Vt(s, t)
        }
    }
    const Bt = t => window.navigator.userAgent.toLowerCase().includes(t);

    function Ht() {
        return Bt("windows")
    }

    function Gt() {
        return o(Ht()) && Bt("android")
    }

    function Wt() {
        return Gt() && Bt("mobile")
    }

    function zt() {
        return Gt() && o(Bt("mobile"))
    }

    function qt() {
        return Bt("ipad")
    }

    function jt() {
        return Ht() && Bt("phone")
    }

    function Yt() {
        return Ht() && (Bt("touch") || Bt("tablet")) && o(jt())
    }

    function Qt() {
        return zt() || qt() || Yt()
    }

    function Kt() {
        return o(Ht()) && Bt("iphone")
    }

    function Xt() {
        return Wt() || Kt() || jt()
    }

    function Zt() {
        return o(Xt()) && o(Qt())
    }
    const Jt = Zt() ? "desktop" : "mobile";

    function te() {
        return Bt("fbav") || Bt("fban")
    }

    function ee() {
        return Bt("instagram")
    }

    function ie() {
        return Bt("pinterest") || window.document.referrer.includes("app://com.pinterest")
    }

    function ne() {
        return Kt() || qt()
    }
    const se = "SMAdPreload",
        re = "SMResizeProgrammaticDisplay",
        ae = "SMProgrammaticDisplayAdImpression",
        oe = "SMNoMoreTags",
        de = "SMRequest",
        ce = "SMRequestError",
        le = "SMMaxRequestsReached",
        he = "SMUpdateOptions",
        ue = "SMAdMuted",
        pe = "SMAdUnmuted",
        me = "SMVastError";

    function Ae(t, e) {
        return Object.entries(t).every(([t, i]) => e[t] === i)
    }
    const ge = D(2, (t, e) => P(t) && P(e) && Ae(t, e) && Ae(e, t));

    function fe(t) {
        return m(t) || null === t
    }

    function Ee(t) {
        return o(m(t))
    }
    const be = Ee,
        ve = t => function(t, e = "") {
            if (o(Q(t))) throw new Error(`${e||t} should be a number!`)
        }(t, "instanceIndex"),
        ye = t => function(t, e = "") {
            if (fe(t)) throw new Error(`${e||t} is required!`)
        }(t, "instance"),
        Te = t => {
            if (!tt(t) && !it(t)) throw new Error('"api" should be a valid number or string!')
        };
    const Ce = new class {
        constructor() {
            this.wind = function() {
                let t = window;
                try {
                    for (; t.parent && t !== t.parent && t.parent.location.href;) t = t.parent
                } catch {}
                return t
            }(), this.wind[U] = this.wind[U] || {}, this.wind[U].instances = this.wind[U].instances || [], this.wind[U].exteInstances = this.wind[U].exteInstances || [], this.wind[U].store = this.wind[U].store || {}
        }
        register(t) {
            ye(t);
            const {
                instanceIndex: e,
                config: {
                    it: i
                }
            } = t;
            if (be(i), ve(e), this.wind[U].instances.some(t => t.instanceIndex === e && t.config.it === i)) throw new Error("Integration already exists");
            this.wind[U].instances.push(t)
        }
        registerExteInstance(t) {
            ye(t), this.wind[U].exteInstances.push(t)
        }
        removeByApi(t) {
            Te(t);
            const e = e => e.api === t;
            this.wind[U].instances = Vt(e, this.wind[U].instances), this.wind[U].exteInstances = Vt(e, this.wind[U].exteInstances)
        }
        fetchInstancesOfPlugin(t) {
            return (t => {
                c(t, "sdkType")
            })(t), this.wind[U].instances.filter(({
                config: e
            }) => e ? .sdkType === t)
        }
        fetchInstancesOfIntegration(t) {
            return be(t), this.wind[U].instances.filter(e => e.config.it === t)
        }
        fetchAllInstances() {
            const {
                instances: t,
                exteInstances: e
            } = this.wind[U];
            return [...t, ...e]
        }
        fetchInstance(t, e) {
            return be(t), ve(e), this.wind[U].instances.find(i => i.config.it === t && i.instanceIndex === e)
        }
        fetchInstanceByApi(t) {
            return Te(t), this.wind[U].instances.find(e => e.api === t)
        }
        nextInstanceIndex(t) {
            const e = this.fetchInstancesOfIntegration(t);
            let i = 0;
            return e.forEach(t => {
                i = Math.max(t.instanceIndex + 1, i)
            }), i
        }
        getState(t) {
            const {
                store: e
            } = this.wind[U];
            return e[t] ? { ...e[t]
            } : void 0
        }
        setState(t, e) {
            const {
                store: i
            } = this.wind[U];
            i[t] = { ...e
            }
        }
    };
    async function Ie(t) {
        return new Promise(e => {
            setTimeout(e, t)
        })
    }
    async function Se(t, {
        args: e = [],
        attempts: i = 5,
        delay: n = 500
    } = {}) {
        try {
            return await t(...e)
        } catch (s) {
            if (i - 1) return await Ie(n), Se(t, {
                args: e,
                attempts: i - 1,
                delay: n
            });
            throw new Error(`Max attempts reached. ${s}`)
        }
    }

    function De(t) {
        return !0 === t || !1 === t || "[object Boolean]" === n(t)
    }

    function we(t) {
        if (fe(t) || Q(t) || De(t)) return !1;
        try {
            return 0 === Object.keys(t).length
        } catch {
            return !0
        }
    }

    function Pe(t, e = !1) {
        let i;
        try {
            i = new URL(t)
        } catch {
            return !1
        }
        return "blob:" === i.protocol ? Pe(i.pathname, e) : e ? "https:" === i.protocol : "https:" === i.protocol || "http:" === i.protocol
    }

    function Re(t, e = "") {
        if (o(Pe(t, !0))) throw new Error(`${e||t} should be a secure URL!`)
    }

    function ke(t, e = 1e3) {
        let i;
        const n = new Promise((t, n) => {
            i = setTimeout(() => {
                n(new Error(`Promise timed out in ${e} ms`))
            }, e)
        });
        return Promise.race([t, n]).then(t => (clearTimeout(i), t)).catch(t => {
            throw clearTimeout(i), t
        })
    }
    const Me = "__tcfapi",
        Oe = {
            JUST_COMPLETED: "useractioncomplete",
            PREVIOUSLY_COMPLETED: "tcloaded"
        },
        _e = {
            CMP_NOT_IMPLEMENTED: new Error("No consent data function found"),
            NO_USER_CONSENT: new Error("No user consent")
        },
        Ne = {
            gdprApplies: !1,
            tcString: "",
            purpose: void 0,
            vendor: void 0,
            cmpId: void 0,
            disclosedVendors: void 0
        },
        Le = j.wrapWithName("CMP");

    function Ue(t = "") {
        const e = t.split(".")[0].replace(/_/g, "/").replace(/-/g, "+"),
            i = atob(e);
        let n = "";
        for (let t = 0; t < i.length; t += 1) {
            const e = i.charCodeAt(t).toString(2);
            n += "00000000".slice(0, 8 - e.length) + e
        }
        const s = n.substring(42, 78);
        return 100 * parseInt(s, 2)
    }

    function xe(t = window) {
        try {
            const e = t ? .[Me];
            if (a(e)) return e
        } catch {
            return null
        }
        return t === t.top ? null : xe(t.parent)
    }
    async function Ve(t, {
        gdpr: e,
        consentString: i,
        timeToFindCmpFunction: n
    }) {
        if (De(t) && o(t)) return Le.info("GDPR does not apply based on geolocation. Continue with empty tcString."), Ne;
        const s = Boolean(e || t),
            r = i;
        if (it(r)) {
            Le.info("No need to find user consent, one was given via macroValues or AMP initialConsentValue");
            const {
                tcString: t = Ne.tcString,
                purpose: e,
                vendor: i,
                cmpId: n,
                tcfPolicyVersion: a,
                lastUpdated: d,
                outOfBand: c
            } = await async function(t) {
                if (o(t)) return null;
                try {
                    const {
                        TCStringParse: i
                    } = await (e = "https://static.sunmedia.tv/sdks/3p/tc-string-parser/1.0.6/tc-string-parser.js", p(Re, Promise.reject)(e), ke(
                        import (e), 7e3));
                    return i(t)
                } catch {
                    return null
                }
                var e
            }(r) || {};
            return o(it(t)) && Le.warning("Unable to parse consent string. Continue with empty tcString."), {
                gdprApplies: s,
                tcString: t,
                purpose: e,
                ...i && {
                    vendor: { ...i,
                        disclosedVendors: c ? .disclosedVendors
                    }
                },
                cmpId: n,
                tcfPolicyVersion: a,
                lastUpdated: d
            }
        }
        let a;
        try {
            a = await async function(t, e) {
                return o(t) || o(e) ? xe() : Se(() => new Promise((t, e) => {
                    const i = xe();
                    i ? t(i) : e(_e.CMP_NOT_IMPLEMENTED)
                }), { ...e
                })
            }(s, n)
        } catch (t) {
            const {
                attempts: e,
                delay: i
            } = n, s = (e - 1) * i / 1e3;
            Le.info(`${Me} max waiting time of ${s} second(s) has been reached.`)
        }
        if (fe(a)) return Le.info(`${Me} implementation not found. Continue with empty tcString.`), { ...Ne,
            gdprApplies: s
        };
        Le.info(`${Me} implementation found`);
        try {
            Le.info("Waiting for the user to give consent");
            const {
                gdprApplies: t,
                tcString: e,
                purpose: i,
                vendor: n,
                cmpId: r,
                tcfPolicyVersion: d,
                outOfBand: c
            } = await
            function(t, e) {
                return new Promise((i, n) => {
                    t("addEventListener", 2, (t, s) => {
                        if (!o(s && t)) return o(e || t.gdprApplies) ? (Le.info("GDPR definitely does not apply, continue as it is."), void i(t)) : void([Oe.JUST_COMPLETED, Oe.PREVIOUSLY_COMPLETED].includes(t.eventStatus) && (Le.info("User consent granted!"), i(t)));
                        n(_e.NO_USER_CONSENT)
                    })
                })
            }(a, s), l = [n ? .disclosedVendors, n ? .vendorsDisclosed, c ? .disclosedVendors].find(t => t && o(we(t)));
            return {
                gdprApplies: t || s,
                tcString: e,
                purpose: i,
                vendor: { ...n,
                    disclosedVendors: l
                },
                cmpId: r,
                tcfPolicyVersion: d,
                lastUpdated: Ue(e)
            }
        } catch (t) {
            return Le.warning(`${t}. Continue with empty tcString.`), { ...Ne,
                gdprApplies: s
            }
        }
    }
    const $e = ["517", "52", "438", "45", "755", "493", "108"],
        Fe = [1, 2, 7],
        Be = [2, 3, 5, 6, 7, 9, 10, 14, 18, 21, 25, 27, 28, 31, 35, 38, 44, 46, 47, 50, 54, 58, 59, 61, 63, 68, 69, 72, 76, 77, 79, 84, 90, 92, 96, 104, 105, 112, 113, 123, 125, 129, 134, 141, 162, 165, 167, 168, 171, 181, 183, 185, 193, 198, 212, 218, 221, 222, 224, 225, 227, 229, 231, 235, 236, 237, 242, 246, 247, 258, 259, 260, 264, 273, 277, 279, 280, 282, 284, 287, 291, 292, 294, 297, 299, 300, 302, 303, 304, 305, 306, 308, 309, 310, 311, 312, 316, 318, 319, 321, 323, 327, 329, 330, 332, 335, 339, 340, 341, 343, 345, 348, 350, 351, 352, 353, 354, 355, 361, 363, 364, 367, 369, 371, 374, 376, 379, 380, 382, 383, 384, 385, 386, 387, 388, 390, 391, 392, 393, 396, 397, 399, 401, 403, 404, 405, 406, 407, 408, 410, 411, 412, 413];
    class He extends Error {
        constructor(t) {
            super(), this.name = "ConsentError", this.message = `[CMP]: ${t}`
        }
    }

    function Ge(t, e, i, n = u(!0)) {
        l(i, "listener"), c(e, "event");
        const s = () => {
            n() && (t.removeEventListener(e, s), i())
        };
        return t.addEventListener(e, s), s
    }
    const We = {
            ADV_DOMAIN: "advDomain",
            APP_BUNDLE: "appBundle",
            APP_NAME: "appName",
            APP_STORE_URL: "appStoreUrl",
            AUCTION_ID: "auctionId",
            BIDDER_NAME: "bidderName",
            CAMPAIGN_TYPE: "campaignType",
            CATEGORY: "category",
            CATEGORY_ENCODE: "categoryEncode",
            CHANNEL_NAME: "channelName",
            CONSENT_STRING: "consentString",
            CONTENT_GENRE: "contentGenre",
            CONTENT_TITLE: "contentTitle",
            CREATIVE_ID: "creativeId",
            CURRENCY: "currency",
            DEAL_ID: "dealId",
            DEMAND_INTEGRATION: "demandIntegration",
            DEMAND_TYPE: "demandType",
            DID: "did",
            DOMAIN: "domain",
            ERROR_CODE: "errorCode",
            EXTERNAL_CLICK: "xclk",
            GDPR_APPLIES: "gdprApplies",
            GFK_CATEGORY: "gfkCategory",
            HEIGHT: "height",
            IC: "ic",
            IP: "ip",
            INV_PARTNER_DOMAIN: "invPartnerDomain",
            REVENUE: "revenue",
            ROUND: "round",
            SITE_ID: "siteId",
            SLIDE: "slide",
            SUBDOMAIN: "subdomain",
            SUBTYPE_ID: "subtypeId",
            RANDOM: "random",
            REFERRER_URL: "referrerUrl",
            REFM: "refm",
            POD_MAX_DUR: "podMaxDur",
            POD_AD_SLOTS: "podAdSlots",
            SPONSOR_POSITION: "sponsorPosition",
            SUPPLY_CHAIN: "supplyChain",
            TARGETING: "targeting",
            UA: "ua",
            WIDTH: "width"
        },
        ze = {
            app_bundle: We.APP_BUNDLE,
            app_name: We.APP_NAME,
            app_store_url: We.APP_STORE_URL,
            category: We.CATEGORY,
            categoryEncode: We.CATEGORY_ENCODE,
            channel_name: We.CHANNEL_NAME,
            content_genre: We.CONTENT_GENRE,
            content_title: We.CONTENT_TITLE,
            did: We.DID,
            domain: We.DOMAIN,
            gdpr: We.GDPR_APPLIES,
            gdpr_consent: We.CONSENT_STRING,
            gfk_category: We.GFK_CATEGORY,
            ic: We.IC,
            ip: We.IP,
            inv_partner_domain: We.INV_PARTNER_DOMAIN,
            pod_ad_slots: We.POD_AD_SLOTS,
            pod_max_dur: We.POD_MAX_DUR,
            referrerurl: We.REFERRER_URL,
            rh: We.HEIGHT,
            rnd: We.RANDOM,
            rw: We.WIDTH,
            schain: We.SUPPLY_CHAIN,
            siteId: We.SITE_ID,
            subdomain: We.SUBDOMAIN,
            sponsorPosition: We.SPONSOR_POSITION,
            t: We.TARGETING,
            ua: We.UA,
            xclk: We.EXTERNAL_CLICK
        },
        qe = {
            [We.APP_BUNDLE]: /\${APP_BUNDLE}/g,
            [We.APP_NAME]: /\${APP_NAME}/g,
            [We.APP_STORE_URL]: /\${APP_STORE_URL}/g,
            [We.CATEGORY]: /\${page_category}/g,
            [We.CATEGORY_ENCODE]: /\${page_category.encode}/g,
            [We.CHANNEL_NAME]: /\${CHANNEL_NAME}/g,
            [We.CONSENT_STRING]: /\${gdpr_consent}/g,
            [We.CONTENT_GENRE]: /\${CONTENT_GENRE}/g,
            [We.CONTENT_TITLE]: /\${CONTENT_TITLE}/g,
            [We.DID]: /\${DID}/g,
            [We.DOMAIN]: /\${domain}/g,
            [We.EXTERNAL_CLICK]: /\${xclk}/g,
            [We.GDPR_APPLIES]: /\${gdpr}/g,
            [We.GFK_CATEGORY]: /\${gfk_category}/g,
            [We.HEIGHT]: /\${request.height}/g,
            [We.IC]: /\${IC}/g,
            [We.IP]: /\${IP}/g,
            [We.INV_PARTNER_DOMAIN]: /\${INV_PARTNER_DOMAIN}/g,
            [We.POD_AD_SLOTS]: /\${POD_AD_SLOTS}/g,
            [We.POD_MAX_DUR]: /\${POD_MAX_DUR}/g,
            [We.RANDOM]: /\${random}/g,
            [We.REFERRER_URL]: /\${request.referrerurl}/g,
            [We.REFM]: /\${refm}/g,
            [We.SITE_ID]: /\${siteId}/g,
            [We.SPONSOR_POSITION]: /\${sponsorPosition}/g,
            [We.SUBDOMAIN]: /\${subdomain}/g,
            [We.SUPPLY_CHAIN]: /\${supply_chain}/g,
            [We.TARGETING]: /\${VALUE}/g,
            [We.UA]: /\${UA}/g,
            [We.WIDTH]: /\${request.width}/g
        },
        je = (We.ADV_DOMAIN, We.AUCTION_ID, We.BIDDER_NAME, We.CAMPAIGN_TYPE, We.CREATIVE_ID, We.CURRENCY, We.DEAL_ID, We.DEMAND_INTEGRATION, We.DEMAND_TYPE, We.ERROR_CODE, We.GDPR_APPLIES, We.CONSENT_STRING, We.REVENUE, We.ROUND, We.SLIDE, We.SUBTYPE_ID, We.RANDOM, /(\${)([\w.]+)(})/g);

    function Ye(t, e = 0) {
        const i = Math.pow(10, e);
        return Math.round(t * i) / i
    }

    function Qe(t) {
        if (!w(t)) return t;
        let e;
        return e = s(t) ? t.map(t => Qe(t)) : a(t) ? function(t) {
            const e = t.__isClone ? t.__clonedFrom : t,
                i = e.bind({});
            return r(e, (t, e) => {
                i[e] = t
            }), i.__isClone = !0, i.__clonedFrom = e, i
        }(t) : w(t) ? function(t) {
            const e = t.constructor ? new t.constructor : {};
            return r(t, (t, i) => {
                e[i] = Qe(t)
            }), e
        }(t) : JSON.parse(JSON.stringify(t)), e
    }
    const Ke = {
        ADD: "add",
        REMOVE: "remove",
        REPLACE: "replace",
        TOGGLE: "toggle"
    };

    function Xe(t, e, i, n = !1) {
        if (o(X(t) && (t => Object.values(Ke).includes(t))(e) && (i || n))) return;
        if (n && (e === Ke.ADD || e === Ke.REMOVE) && (t.removeAttribute("class"), e === Ke.REMOVE)) return;
        const r = s(i) ? i : [i];
        t.classList[e](...r)
    }

    function Ze(t) {
        return X(t) && "VIDEO" === t.nodeName
    }
    class Je {
        constructor(t, e) {
            this.target = t, this.options = e
        }
        getTarget() {
            return this.target
        }
        hasNativeSupport() {
            return !1
        }
        createObserver() {
            throw new Error("Not implemented!")
        }
        createInterval(t, e = 100) {
            return setInterval(t, e)
        }
        subscribe(t) {
            let e;
            var i, n;
            return l(t, "callback"), this.hasNativeSupport() ? e = this.createObserver(t) : (i = this.createInterval(t), e = {
                disconnect() {
                    clearInterval(i)
                }
            }), n = e, {
                unsubscribe() {
                    n.disconnect()
                }
            }
        }
        subscribeOnce(t) {
            l(t, "callback");
            const e = this.subscribe(() => {
                e.unsubscribe(), t()
            });
            return e
        }
    }
    class ti extends Je {
        hasNativeSupport() {
            return !0
        }
        createObserver(t) {
            const e = this.getTarget(),
                i = new MutationObserver(e => {
                    e.some(({
                        attributeName: e,
                        oldValue: i,
                        type: n,
                        target: s
                    }) => "attributes" === n && i !== s[e] && (t(), !0))
                });
            return i.observe(e, {
                attributes: !0,
                childList: !1,
                subtree: !1,
                attributeFilter: ["src"],
                attributeOldValue: !0
            }), i
        }
        static createObservable(...t) {
            return new ti(...t)
        }
    }
    const ei = D(2, (t, e) => {
            if (o(P(e))) throw new Error(`Cannot apply renameKeys to ${e}`);
            return R((e, i, n) => ({ ...e,
                [t(n)]: i
            }), {}, e)
        }),
        ii = D(2, (t, e) => fe(e) ? void 0 : e[t]),
        ni = ["true", "1", "yes"],
        si = ["false", "0", "no"];

    function ri(t) {
        if (!d(t)) throw new Error("stringToBoolean expects one argument of type string");
        const e = t.toLowerCase().trim();
        return !!ni.includes(e) || !si.includes(e) && null
    }
    const ai = {
            NUMBER: "number",
            BOOLEAN: "boolean"
        },
        oi = ei(t => ai[t], ai),
        di = D(2, nt(r));

    function ci(t, e) {
        return t === ai.NUMBER ? o(we(e)) && (null === e || tt(Number(e))) : t !== ai.BOOLEAN || null === e || we(e) || De(ri(e))
    }

    function li(t) {
        let e = null;
        const {
            attributes: i = []
        } = t, n = k(t => a(t.onConnect), i), s = k(t => a(t.onChange), i), d = {};
        if (o(P(t))) throw new Error("Element definition must be an object");
        if (o(it(c = t.tag) && /(\w+)-(\w)([\w-]*)/.test(c) && o(c.includes("_")))) throw new Error("Element tag not valid. Must be a kebab-case string");
        var c;

        function l(t, e) {
            const {
                type: n
            } = i[t];
            return n === ai.BOOLEAN ? function(t) {
                return null === t ? t : "" === t || ri(t)
            }(e) : n === ai.NUMBER ? function(t) {
                return null === t ? t : Number(t)
            }(e) : e
        }
        class h extends HTMLElement {
            constructor() {
                super(), e = this.constructor.prototype, this.attachShadow({
                    mode: t.mode || "open"
                }), this.sunEventManager = function() {
                    const t = {},
                        e = {};
                    return {
                        addDispatched(i) {
                            const n = i.type;
                            e[n] || (t[n] = t[n] || [], t[n].push(i))
                        },
                        addListener(i, n) {
                            e[i] = !0, t[i] && (r(t[i], n), t[i] = [])
                        },
                        removeListener(t) {
                            e[t] = !1
                        }
                    }
                }(), this.connectedAttributes = J(t => ({ ...t,
                    onConnect: t.onConnect.bind(this)
                }), n), this.attributesToObserve = J(t => ({ ...t,
                    onChange: t.onChange.bind(this)
                }), s), r(t.methods, t => {
                    this[t.name] = this[t.name].bind(this)
                }), a(t.setup) && t.setup.call(this), this.mounted = !1
            }
            static get observedAttributes() {
                return Object.keys(s)
            }
            discardInvalidValues() {
                r(k(ii("type"), i), ({
                    type: t
                }, e) => {
                    if (o(oi[t])) throw new Error(`the type ${t} indicated for the attribute ${e} is invalid`);
                    o(this.attributes[e]) || o(ci(t, this.attributes[e].value)) && this.removeAttribute(e)
                })
            }
            updateConnectedAttributes() {
                rt(di(({
                    name: t,
                    value: e
                }) => {
                    this.connectedAttributes[t].onConnect(l(t, e))
                }), k(({
                    name: t
                }) => n[t]))(this.attributes)
            }
            updateObservedAttributes() {
                rt(di(this.onAttributeChange.bind(this)), k(({
                    name: t
                }) => s[t]))(this.attributes)
            }
            onAttributeChange({
                name: t,
                value: e,
                oldValue: n = null
            }) {
                const {
                    type: s
                } = i[t], r = ci(s, e), a = r ? l(t, e) : e, c = ci(s, n) ? l(t, n) : n;
                if (a !== c) {
                    if (e !== d[t]) return o(r) ? (d[t] = n, null === n ? void this.removeAttribute(t) : void this.setAttribute(t, n)) : void this.attributesToObserve[t].onChange(a, c);
                    delete d[t]
                }
            }
            connectedCallback() {
                if (!o(this.isConnected)) try {
                    this.mounted && (this.mounted = !1, this.shadowRoot.innerHTML = ""), this.discardInvalidValues(),
                        function(t, e) {
                            const i = Array.from(e || []).reduce((t, e) => ({ ...t,
                                [e.name]: e.value
                            }), {});
                            r(t || {}, ({
                                required: t
                            }, e) => {
                                if (t && fe(i[e])) throw new Error(`the attribute ${e} is required`)
                            }), r(t || {}, ({
                                validator: t
                            }, e) => {
                                if (a(t) && o(fe(i[e]) || t(i[e]))) throw new Error(`the ${e} value ${i[e]} is not valid`)
                            })
                        }(t.attributes, this.attributes);
                    const s = (e = t.style, i = t.template, n = `\n    ${it(e)?`<style>${at(e)}</style>`:""}\n    ${i||""}\n  `, document.createRange().createContextualFragment(n));
                    a(t.beforeMount) && t.beforeMount.call(this, s), this.updateConnectedAttributes(), this.updateObservedAttributes(), this.shadowRoot.appendChild(s), this.mounted = !0, a(t.mounted) && t.mounted.call(this)
                } catch {}
                var e, i, n
            }
            disconnectedCallback() {
                a(t.unmounted) && t.unmounted.call(this)
            }
            adoptedCallback() {
                e && this.constructor.prototype !== e && Object.setPrototypeOf(this, e), a(t.documentChanged) && t.documentChanged.call(this)
            }
            attributeChangedCallback(t, e, i) {
                o(this.isConnected && this.mounted) || this.onAttributeChange({
                    name: t,
                    value: i,
                    oldValue: e
                })
            }
            addEventListener(t, e, i) {
                super.addEventListener(t, e, i), this.sunEventManager.addListener(t, t => super.dispatchEvent(t))
            }
            removeEventListener(t, e) {
                super.removeEventListener(t, e), this.sunEventManager.removeListener(t)
            }
            dispatchEvent(t) {
                this.sunEventManager.addDispatched(t), super.dispatchEvent(t)
            }
        }
        return Object.defineProperty(h, "name", {
            value: t.tag
        }), r(t.methods, t => {
            h.prototype[t.name] = t
        }), r(t.attributes, (t, e) => {
            Object.defineProperty(h.prototype, e, {
                get() {
                    const t = this.getAttribute(e);
                    return l(e, t)
                },
                set(t) {
                    this.setAttribute(e, t)
                }
            })
        }), h
    }
    const hi = "default",
        ui = {
            default: '\n    <svg viewBox="0 0 6 6" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg">\n      <line x1="0.5" y1="0.5" x2="5.5" y2="5.5" stroke="currentColor" stroke-width="0.6"/>\n      <line x1="5.5" y1="0.5" x2="0.5" y2="5.5" stroke="currentColor" stroke-width="0.6"/>\n    </svg>\n  ',
            contrast: '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135">\n      <defs>\n        <path id="x-shape" \n          d="M67.24 78.65 Q57.95 87.73 48.85 97.01 Q45.75 100.17 43.76 100.97 C36.2 104.03 30.3 94.37 36.2 88.46\n          Q46.42 78.22 56.61 67.98 Q56.98 67.61 56.61 67.24 Q47.2 57.78 37.78 48.37 Q34.47 45.07 33.93 42.75\n          C32.08 34.9 41.76 30.96 47.24 36.52 Q57.17 46.59 67.18 56.58 Q67.57 56.97 67.96 56.59 Q77.46 47.28 86.75 37.84\n          Q89.35 35.2 90.92 34.46 C98.68 30.79 105.06 40.87 98.93 46.93 Q88.72 57.02 78.64 67.23\n          Q78.27 67.61 78.64 67.99 Q87.92 77.39 97.25 86.61 Q100.2 89.52 100.97 91.47\n          C102.83 96.14 99.53 100.99 94.7 101.4 Q91.07 101.71 87.94 98.56 Q78.01 88.58 68.03 78.65\n          Q67.64 78.27 67.24 78.65 Z" />\n      </defs>\n      <path fill="currentColor" fill-rule="evenodd" \n        d="M65.05 0 h5 C105.86 2.15 133.17 29.15 135 65.08 v4.99 C132.83 105.87 105.86 133.15 69.95 135\n        h-5.06 C29.09 132.81 1.82 105.82 0 69.9 v-4.96 C1.91 29.02 29.24 2.1 65.05 0 Z" />\n          <use href="#x-shape" fill="#ffffff" />\n          <use href="#x-shape" fill="none" stroke="#808080" stroke-width="2" vector-effect="non-scaling-stroke" />\n      </svg>\n  '
        },
        pi = li({
            tag: "sun-close",
            style: `\n   :host(.${W}-controls) #closeButton {\n    display:none;\n  }\n\n  :host(.${W}-controls.${W}-skip-cross) #closeButton, #closeButton {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    border-radius: 2px;\n    align-items: center;\n    justify-content: center;\n  }\n\n  :host([type="${hi}"]) #closeButton {\n    color: #141414;\n    background-color: rgba(0, 0, 0, 0.06);\n  }\n\n  :host([type="${hi}"]) #closeButton:hover {\n    color: #FFFFFF;\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n\n  :host([type="contrast"]) #closeButton {\n    color: #000000;\n  }\n`,
            template: '\n  <div id="closeButton" part="closeButton"></div>\n',
            attributes: {
                type: {
                    onConnect(t) {
                        this.renderIcon(t)
                    },
                    onChange(t) {
                        this.renderIcon(t)
                    }
                }
            },
            beforeMount(t) {
                this.$closeButton = t.querySelector("#closeButton"), o(this.getAttribute("type")) && this.setAttribute("type", hi)
            },
            methods: {
                renderIcon(t) {
                    this.$closeButton.innerHTML = ui[t]
                }
            }
        });

    function mi(t) {
        customElements.get(t.name) || customElements.define(t.name, t)
    }

    function Ai(t) {
        r(s(t) ? t : [t], mi)
    }
    const gi = "UIPlayClicked",
        fi = "UISkipClicked",
        Ei = "UIVolumeChanged",
        bi = {
            FLASH: /\/x-shockwave-flash/i,
            IMAGE: /^image\/(gif|jpeg|jpg|png)$/i,
            HTTPS: /^https:?\/\//i,
            VPAID: /vpaid/i,
            JS: /javascript/i
        },
        vi = "videoplaza.tv",
        yi = "Reached maximum number of requests allowed (5000)",
        Ti = "sm-skip-cross",
        Ci = "creatives.sunmedia.tv",
        Ii = "data-sm-slot-id",
        Si = "sm-counter-number",
        Di = `\n@import url('https://fonts.googleapis.com/css?family=Lato');\n\n.sm-ui-container {\n    position: relative;\n    overflow: hidden;\n    min-height: 0;\n    height: 100%;\n    width: 100%;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.sm-ui-container .sm-media {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    display: none;\n}\n.sm-ui-container .sm-media.sm-visible {\n    display: block;\n}\n\n.sm-ui-container .sm-controls {\n    float: none;\n    cursor: pointer;\n    display: none;\n    z-index: 8;\n    position: absolute;\n    background-size: contain;\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n}\n.sm-ui-container .sm-controls.sm-visible {\n    display: block;\n}\n.sm-ui-container .sm-controls.sm-play {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAABCFBMVEUAAAD///////4AAAD+/v4yMjIAAAAAAAAAAAAAAAAAAAD5+fnw8PD+/fz9/fxoaGhbW1v7+/re3t7Q0NC8vLz8/Pz8+/v39/fy8vLt7e3s7Ozk5OTb29vJycmnp6eXl5d8fHxKSkoWFhb19fXh4eHW1tbAwMC6urqtra2fn5+MjIz4+Pj39/f19fXx8fHp6eno6Ojb29vU1NSvr6/0mDH//v7///7//////fz1oUL++PH97t73sGH0mzb96tX2pk31nTv//Pj+9u36zJj5w4X4vHn2q1X++vT+8eP848X73bv60aL5yZL3tWr1pEn+9Oj84cP727b72bL61Kn3uHD2rVr85sz85MlUJu7kAAAANHRSTlMm/f0A/C4kIRMKAuG9+PM6NumSe2bt7NTHuLKejnNXTEEyKdSZhGpjWlFH29XPwqynjYJcGlQq3QAAAipJREFUaN7t2mdu20AQhuHhiqpUtVpiy3Isl8ROT7apU122inty/5tk/WuQA3wEEvC9wANQs1pRGEokErlMmlClMzknOCWbImSp7KuSJXTZBOVShC6VowzBc0aa4DkjLi4uLu4fK5+nCDImXyJ4nhGfTwidp3qiXiNQrOympnhMmFiRy74SR6cEiRU5/q1EPkkcQnFtlHeGmgFWhrOJCN4Th1Bcz2vj8wygFLmc6sI5zwBIkfsbJd7yDIAUGT5Zr3lNLoTCzaz42CYOo8jnO+1XicCKHExNsZVEK7L7OgNllMLMgxXNEkrhtlYHH+CKXPREsQpX5KBvxAVckd2R8g9LKIWZWyW+lNGKHG5XptFGKdzc6splB6bwDCj/AK7I8UiLr2W0IoduBvLv0IoMNyvdOEEp3MLNQA2uyN1aFQ46aEUu3QwcwRX50jMBWhnOe+6RgZXwUZmgRiCFz794UwKfytnEPa0kQZX9vfL4bgYpu74Wh0mCKuHGisYPRiDKeKTE2RX4Flvc8YFHKd1HKyrHHazysnaH5JoIovBXivYv0L+Tb60IaoRVBlPt8yWMUcJZj1+TUMr4RolmmwiqLFa68K1EHEDpPk108ZI4hLL85Q4Jf+wYZW518bxMHEDZP0xMHf1vz2D094sxRNlaXf9+ShxAGd9bL/hJkFjpK753UXlGVKpohHzz6YrgtVoUFxcXF/e/FMluTzR7StHsXEWyPxbRLlw0e31/AII+8glq6EtVAAAAAElFTkSuQmCC');\n    transform: translateX(-50%);\n    z-index: 9;\n    left: 50%;\n    bottom: 1%;\n    height: 11%;\n    width: 0;\n    padding-right: 8%;\n    min-width: 30px;\n    min-height: 30px;\n    max-width: 45px;\n    max-height: 45px;\n\n}\n.sm-ui-container .sm-controls.sm-skip {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAABlCAMAAAAGY+3HAAAAWlBMVEUAAADf39/9/f2cnJytra1NTU36+vqoqKgAAAD4+Pj09PTr6+v5+fnOzs5/f3+ysrKjo6P8/Pz7+/vv7+/BwcH+/v7m5ubY2Nh2dnYAAAAAAAAAAABOTk7///9dlaOYAAAAHXRSTlMmk/NPWTTlVwDZya7heUFcUu3nvGr6oYU+IhMKNDuKZ8kAAAO3SURBVHja7ZzrjqsgEIAHEF1vaNVetlve/zWPlVqkI243h81pOfP9aBpsjF9mGAabAB8j50+Ihs/z1WjU+oLI+Bq14rMavUYtiJAPOEOEnCGianEnTimCIAiCIAiCIAiCIAjCIOsy1Vd4wRREgmRcLygaWMLGIQYWdOlFEal+4BCBluAaUb69lrxNqrJuRtgtcuzdtdik0Uu4UZvgqXd49g34ZAWW2qThe2s1c2ws5TQkX0wrYcn2NZyDuVtDJq3hxbTYvspgnazaszWtAhymssFeTCupNM/Wrbiukie0ir/QqnM9wvsaQpNxnWdr47nxxVpcAgZr2ZnHxfKS/SpyPZMOEBj8/H7bwda9bS1shbUER71KQHC2+XPzYp6kV99oYSusdbBWv+RV6S5xrTq9XkmYNpTD91oyt1ZYy1DUTTOUeqKBUFiLXbb03BlPzMVMBzPPlU8LWXm0+AATavppCqFJdrpqYaat9A5b3UNgyZnwaWErrMWFe9dfqIeV3gswiL3NQIzs9ZL0qLAWtsJabtZJbpqy0LT7uW4ko2ELGzSFdmASP7uxyiVsaJVo0kJ4xJh57dVvzEcB26hD6kQMZZq12tAanFs64Qs7v3bJ7fN7xNFOMlQXBJ9sJWxq4b3BEUJj4pTWqYnZM6i6v3s5HXzPzajY0sI9mLkanuSaWmnyo3dQ6cO+n2lL/hpaUP+8ysrSKFwetPjUOLyEluB6b+fJs5hMHFyt0hSN5gW0kk7zmqP+Au9LXKTzlobNOSlM1fjnWqLTnTCfW1q4xylMvj2uSEcz7NVKcSWsITjZFCcTs8w/90Yk1nKj1S/GG3+BV+jdgYDQtNU8qwRf9ocr7y3qTS37XXGbhkjrcZU6oPiF2nNltj/0xStdyUKJSsasaNMQa7nGoLj9adAViy86eI5WL6cgHN0xVOCZE8fBp6XLh32BCm+VOvut1ON14SgNBV6OmRMDLn1auriJiNy1DNYNpsmDp6czPGpjoe4DRlQhLVtjeq+W5uXQNHWpbU6Go81HB2yar9aNQhvwfwtYa16rh1Utrh24CGy113mCI5ijXdc8CzAl+LTknIZYi5WezU2wfXHr2VdmvibQhYFXC4Y5DbHWsi0+BM7AU6er1reSdacndseFAKz1kIb1qhaokk93OCoIzGnfed/Bd9xoIdSx/5v/xLF8eE6nH13CvKbWM5AWaUF0kNY7QVrvRKRaBEEQBEEQBEEQBEEQ/w1RHmD1GesZapGeeBfr+YTxeX19fER69ucfzEOOkuTWtYUAAAAASUVORK5CYII=');\n    top: 2%;\n    left: 0.7%;\n    width: 16%;\n    height: 10%;\n    min-width: 56px;\n    min-height: 26px;\n    max-width: 85px;\n    max-height: 40px;\n}\n.sm-ui-container .sm-controls.sm-skip-cross {\n    background: none !important;\n    top: 10px;\n    left: inherit;\n    right: 10px;\n    background-color: rgba(0, 0, 0, 0.06);\n    background-repeat: no-repeat;\n    background-position: 50%;       \n    background-size: 10px 10px;\n    border-radius: 2px;\n    width: 20px;\n    height: 20px;\n    min-width: 20px;\n    min-height: 20px;\n    z-index: 10;\n}\n.sm-ui-container .sm-controls.sm-label {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAAAPFBMVEUAAADf398AAACysrL9/f35+fnr6+v39/fNzc1/f39NTU3BwcH09PTl5eWcnJzY2Njv7+8AAAAAAAD///+0QK99AAAAE3RSTlMmkwBc8uWu13hBNGrJoU+FvBMKsepXMwAAAd9JREFUaN7tmuuOwiAQRkGgFEpbdd7/XZdLKlBaV1BMdjPnj5eaHKYfHTCBXCw30o+bE1jLnfTlbi39JFFjLaQ71nEj3bEOBEEQBEEQBPlvMOpg5AWopdEiwSHJC4ClTbJAYOlqGSAwdLVwCPCelhEsvp6xo8W4MnxBpp9F+VJCOKqbZfbTK0y0uZtFAICIr6dP7bq8YZl8DVtNEynQM4eAYc2Wq89jy+dazkAOkbXRomJvkUf5j5BB2yyrH2L6NmMCDzfGRFVb9qBiWSLPhPtSWbx3TRbmw0gjYsUsHx5O2Wh5NJbYavalmOSzaLJocOjs/uhd9KyIqa1RFpWln2UZY9MiOeVDlfllWrajlkWS71eaJWtarCy+JXtJI7624YmFNVg4HME/axnhmPGjFnNiMZ+0KHDQHHCoxDK9aZmPtnoyXTJlsXzSaovYMiiyEskcFOUgqhdJ0Ic9Z0p+woqbXL1IXp9/zV0xer+hrs5+OilRJTHITaMH8NQukvzsUV3T7PgY/AICtdkPZ21H7P4OGGO4F9ZZGDjY8ytlf5gqLHHEv1e5iKz3VFk0nG9Y53yKa7p5zELqLIo61IvX2PrYwVILQRAEQRAEQZC/z3fOKV1If75zfuxLZ+G+c67vB3fdN7CN6+nmAAAAAElFTkSuQmCC');\n    top: 2%;\n    right: 1.5%;\n    height: 10%;\n    width: 0;\n    padding-right: 8%;\n    min-width: 25px;\n    min-height: 25px;\n    max-width: 40px;\n    max-height: 40px;\n}\n.sm-ui-container .sm-controls.sm-volume {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAAAvVBMVEUAAAD9/f38/Pz+/v7s7OwaGhr+/v739/cAAAD39/f9/f0wMDD8/Pz9/f37+/vNzc3Q0ND7+/vV1dX8/Pz5+fnw8PC9vb3Ly8uMjIxnZ2ff39/4+Pju7u7S0tL5+fnCwsL39/f19fXy8vLz8/NVVVVFRUX////v7+/Y2Njr6+usrKybm5t9fX0AAAAAAAAAAAD8/Pz19fXx8fHIyMg7Ozvn5+dycnLp6enb29u3t7elpaXi4uKxsbGXl5fk5ORvx7c5AAAAP3RSTlMm9uz4sir61gDY8i7t9Od4e+mC8eS+ZnRGOZPctn7ga9rTxso1Mf27hq1YTkAhEwrvzcFxL6I9p4thU5pcS5yLjhx7AAAEGElEQVRo3u2aaXPaMBCGtV5LrmXZxhcYbMx9kzaQkLPt//9ZNR3S8dE41MiZ6QzvJ5gxPKxWu6zeEfmS6usNaUo3X4+AlPKNNKtvKaUMkY9JKaRxpYyvpHGljBvSuFLGVVddddVV0kUHgzZpWtR1vNHpdWi/Hnr9dZdKp3S0+Vw5vW5PFM49YWnxcmNIZBh9Hedz7w9FcG4Cgun5C/tBGqWlITL2FkvYf1yMR77jpSRTGT115eTEHiLqAEo+vo0b6w5HFCN3KgFyjETvKCmlqO4gTkyGlrq+eCfYGqDukhOlqBfVB+TacnZZ4t0hotYy3qMQ2l44iP6qe1kkiHqLkAylqG5PA+aswvqRtHTEoWvkKGWtJx5T4vCSxGsdQj6gkE0smIi3Nbewjqi79GMKCVXBnMN93eXSbErOoJBt7LGkX7Pi9fSDZ1FIOAYcrf85EvsYSd84l0IGQ8bj6i7Q7qkFBT6ibhNSooRqZEWT3rqYBNpTmNWqpAQCoSBEzaV/owQcATw/aBUKcboHGFe2aJ/NixQ+6pwgxVgS4XFAcPYDI78gCTpuFUVBUAvqtclR5bzQWdg+7BwTQevRXCpVDpNSpyl/x/lPTAcLC5n/mkv3s4/OnURKqpmtAUty0RgBmLFEyumvGXA4yPVWgclWMoWsdwj7bCK6EXq2bAqxfSZ6uYoAUKVT7leAo2wwS46adApZW0xkd9XmllmGdAoJTDO7RIbDxEY+peXhMLuZI/Q68imhgk62MifAe/Ip1MfcEgXAH+VTSAS3z5m3MZirBigJeFnKohEKtfD2R27FzAZWLBTozBrPfssDPZ8m70465X5h8mxVzhwUP6RT2j5a2d/+0kSHmcUmjLPd8qmBbkmXTn6eoAGYK9mUtoYQZEN5SKraGFEYlEaYjyj0eQJMH+R2nMBoWzWPsepxrEyZLnXAaJl96H4PXK2eLatGyzLF6IwVxKhHiztu8C9zcpCcxuQyhXZf7JWmIOOjp2mueGITJtNaI3+ZshwJjyNDK/5emPp9dPo1jy9ligUA3AruCuX3cJzGu3WOYnqHlij9caIHTy+0+PxPwfxOPWdEc+mZFXUXMa7O6phiv72R8yg/xoC7F1JDtPP7kGycQQkDziKb1FP/ZF18fBJPm/FPo7Z5cbJhqinfF4Ip6sOlllI15XnHmbXaXm6P0fcpD68RMuewlWD1ueIdCr3bK4jJYSrDttT43ynrhXVsaO69FAsWGZYpXXtvAQP/cSPJTsb5XBTc0eViqJiIyq4zk2WN6/O59WYf9R+D3dAS3AQwnZ1bn1HuApE1fiuOsTBNQATzNlEHMyJT7Xb7D0Xh3q2wNLUVUtKUtvbr4WkQGuSqq6666qr/6t7NzSfdU/pCmtfn3B/7pLtwn3Ov7xeYwU213Se1GAAAAABJRU5ErkJggg==');\n    right: 1.5%;\n    bottom: 1.5%;\n    height: 10%;\n    width: 0;\n    padding-right: 8%;\n    min-width: 30px;\n    min-height: 30px;\n    max-width: 40px;\n    max-height: 40px;\n}\n.sm-ui-container.sm-volume-off .sm-controls.sm-volume {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAAAXVBMVEUAAAD8/Pz+/v7+/v6KioqFhYX7+/vu7u5/f3/r6+sAAADv7+/s7Oz////p6enw8PDx8fH9/f10dHT39/fs7OwAAAAAAAAAAAAAAAC8vLz5+fn09PTt7e3o6Oi8vLw06Bc/AAAAH3RSTlMm7vz4RUTqtkGsALqx/qi9wfE+2bAkIRMKZeDNsqVm/TFS9QAAAgJJREFUaN7tmttu4jAURbft40tKEgIJ12n7/585ONLoTIG0qsiOFMnrkZcl42PvDTLebpyOYHE8ZcHNcj6AyeGcLWewOd8sB7A5vOEEPiccweeIQqFQKKwU6boINim65goyEk3T7MBlXwVLt6TO2OCcARNfGWuqHdciMVjT7Q3VItHYUCVQLak21kQPqsVvskRAtaS88bWAZdGVbBKoFhnyCHtQLVKHcSVUi2yMDYMH1ZLaMG78c4tcLoJf89GbO3bOho1gwnL501f+eUTEdtLS28beE1rBpKV3ZvtEI21w02lnGnu/lmtMmLRIPkitf9zLYMM3FmswiVoUvzX2YTVSGxva9LpFNW0+TPLloyGPvmAei64mRIFufB79WjCrBb4K+br+EnaDYFaLRo+uxGw8ZrZojP7beJONM1u0EkgOO13JrBatNzGNEVEnkCxjVTPbUSJgWHQEnNOI4FiQOtc0Lnqs3/L/N7bu3b+f5PWeymc3zDpvy6mbf30p9kIis9tFY78rSq83JW19j6Vv5tb30U8V2Ncb7M9lfMoin59C+GGhFsKPpK0nWyCDzhHLomeCatHzTbXoXUW16L1LtWiGUC2ah1SLZjvToj1lR7Ro53KWZ9ER4P/TixQD06LZ6OwVdPbv7y0KhUKhsG4WeduzzDulRd5cLfN+bKG3cMu86/sLjm0XKsolsPgAAAAASUVORK5CYII=');\n}\n.sm-ui-container .sm-controls.sm-counter {\n    border-radius: 100%;\n    z-index: 5;\n    bottom: 1%;\n    left: 2%;\n    width: 10%;\n    height: auto;\n    min-width: 32px;\n    min-height: 32px;\n    max-width: 40px;\n    max-height: 40px;\n}\n.sm-ui-container .sm-controls.sm-counter .${Si} {\n    font-family: 'Lato', sans-serif;\n    font-size: 10px;\n    fill: #ffffff;\n}\n`,
        wi = `\n  <svg viewport="0 0 100 100" viewBox="0 0 34 34">\n    <defs>\n      <linearGradient id="gradient_bg" x1="0%" x2="100%" y1="100%" y2="0%">\n        <stop offset="0%" stop-color="#333" stop-opacity="0.3"></stop>\n        <stop offset="100%" stop-color="#333" stop-opacity="0"></stop>\n      </linearGradient>\n    </defs>\n    <circle r="12" cx="17" cy="17" stroke="url(#gradient_bg)" fill="#333" fill-opacity="0.2"></circle>\n    <circle r="12" cx="17" cy="17" stroke="#F49831" fill-opacity="0"></circle>\n    <text class="${Si}" style="" text-anchor="middle" y="21" x="17"> </text>\n  </svg>`,
        Pi = {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            margin: "auto",
            backgroundColor: "#000",
            objectFit: "contain",
            visibility: "hidden",
            cursor: "pointer"
        },
        Ri = D(3, (t, e, i) => i.replace(t, e)),
        ki = "sm-visible",
        Mi = t => {
            Xe(t, "add", ki)
        },
        Oi = t => {
            Xe(t, "remove", ki)
        };
    class _i extends f {
        constructor({
            $adContainer: t,
            $videoSlot: e
        }) {
            super(), this.$videoSlot = e, this.$adContainer = t, this.device = this.$adContainer.getAttribute("data-device"), this.updateVideoPlayer = this.updateVideoPlayer.bind(this), ht("ui-styles", Di, {
                $refContainer: t
            }), Ai([pi]), this.$uiContainer = null, this.$mediaLayer = null, this.$video = null, this.controlElems = {}, this.isMuted = null, this.videoSlotSubscription = null, this.createUIElements()
        }
        getSlot() {
            return this.$mediaLayer
        }
        getVideoSlot() {
            return Ze(this.$videoSlot) ? this.$videoSlot : this.$video
        }
        init() {
            this.isMuted = !0, this.$video.muted = this.isMuted, this.createVideoControls(), this.isMuted && Xe(this.$uiContainer, "add", "sm-volume-off"), lt(this.$uiContainer, [this.$mediaLayer, ...Object.values(this.controlElems)]), lt(this.$adContainer, this.$uiContainer), this.$counterNumber = this.$uiContainer.querySelector(`.${Si}`)
        }
        createUIElements() {
            this.$uiContainer = ct({
                name: "ui-container"
            });
            const t = {
                type: "video",
                name: "video",
                attributes: {
                    width: "100%",
                    playsinline: "",
                    "webkit-playsinline": "",
                    preload: "auto"
                },
                style: Pi
            };
            this.$video = ct(t), this.videoSlotSubscription = ti.createObservable(this.$video).subscribe(() => {
                const t = this.$video.getAttribute("src");
                if (t) {
                    if (t === window ? .location ? .href) return;
                    this.displayVideo()
                } else this.hideVideo()
            });
            const e = {
                name: "media",
                children: [this.$video]
            };
            this.$mediaLayer = ct(e)
        }
        createVideoControls() {
            const t = {
                    class: "sm-controls"
                },
                e = {
                    name: "play",
                    attributes: t,
                    events: {
                        click: () => {
                            this.hidePlayControl(), this.emit(gi)
                        }
                    }
                };
            this.controlElems.$play = ct(e);
            const i = {
                type: "sun-close",
                name: "skip",
                attributes: t,
                events: {
                    click: () => this.emit(fi)
                }
            };
            this.controlElems.$skip = ct(i);
            const n = {
                name: "label",
                attributes: t
            };
            this.controlElems.$label = ct(n);
            const s = {
                name: "volume",
                attributes: t,
                events: {
                    click: () => this.onVolumeChange()
                }
            };
            this.controlElems.$volume = ct(s);
            const r = {
                name: "counter",
                attributes: t,
                content: wi
            };
            this.controlElems.$counter = ct(r)
        }
        onStateChange(t, e) {
            return Xe(this.$uiContainer, t ? "remove" : "add", e), !t
        }
        onVolumeChange() {
            this.isMuted = this.onStateChange(this.isMuted, "sm-volume-off"), this.$video.muted = this.isMuted, this.emit(Ei, {
                muted: this.isMuted
            })
        }
        updateVideoPlayer(t = {}) {
            const e = { ...ei(Ri("$", ""), this.controlElems),
                    videoPlayer: this.$video
                },
                i = e => {
                    const i = {
                        enable: !0,
                        disable: !1
                    };
                    return n => t[n] === i[e] || t[n] ? .enabled === i[e]
                };
            r(e, (e, n) => {
                var s, r;
                i("disable")(n) ? et(e, {
                    display: "none"
                }) : i("enable")(n) && e.style.removeProperty("display"), t[n] ? .style && et(e, t[n] ? .style), t[n] ? .class && Xe(e, "add", t[n] ? .class), t[n] ? .attributes && (s = e, r = t[n].attributes, Object.entries(r).forEach(([t, e]) => {
                    s.setAttribute(t, e)
                }))
            })
        }
        resetVideoPlayer(t) {
            et(this.$video, Pi, !0), r(this.controlElems, t => {
                t.removeAttribute("style")
            }), Xe(this.controlElems.$skip, "remove", Ti), t && this.updateVideoPlayer(t)
        }
        displayVideo() {
            et(this.$video, {
                visibility: "visible"
            })
        }
        resetVideoElement() {
            this.$video.parentElement !== this.$mediaLayer && this.$mediaLayer.prepend(this.$video), this.$video.setAttribute("src", ""), this.$video.muted = !0, this.$video.volume = 0
        }
        displayInitialControls() {
            const t = ["$play", "$skip"];
            r(this.controlElems, (e, i) => {
                t.includes(i) || Mi(e)
            })
        }
        hideControls() {
            r(this.controlElems, t => {
                Oi(t)
            })
        }
        displaySkipControl() {
            Mi(this.controlElems.$skip)
        }
        hideSkipControl() {
            Oi(this.controlElems.$skip)
        }
        hideVideo() {
            et(this.$video, {
                visibility: "hidden"
            })
        }
        displayPlayControl() {
            Mi(this.controlElems.$play)
        }
        hidePlayControl() {
            Oi(this.controlElems.$play)
        }
        displayMediaLayer() {
            Mi(this.$mediaLayer)
        }
        hideMediaLayer() {
            Oi(this.$mediaLayer)
        }
        updateRemainingTime(t) {
            if (t <= 0) return clearTimeout(this.counterLastSecondTimeout), Oi(this.controlElems.$counter), void(this.$counterNumber.textContent = "");
            Number(this.$counterNumber.textContent) !== t && (this.$counterNumber.textContent = tt(t) ? t : 0, 1 === t && (this.counterLastSecondTimeout = setTimeout(() => {
                this.updateRemainingTime(0)
            }, 1e3)))
        }
        destroy() {
            clearTimeout(this.counterLastSecondTimeout), this.videoSlotSubscription.unsubscribe ? .(), this.$adContainer = null, this.$uiContainer = null, this.$mediaLayer = null, this.$video = null, this.controlElems = null, this.$counterNumber = null
        }
        static create(t) {
            return new _i(t)
        }
    }
    const Ni = t => _i.create(t),
        Li = D(2, (t, e) => {
            if (!a(t)) throw new Error("flatMap argument must be a function");
            return e.flatMap(t)
        });

    function Ui(t) {
        const e = rt(Li(ii("bcat")), k(({
            countries: e
        }) => e.includes(t ? .country)))(xt.RULES);
        return we(e) ? null : {
            bcat: [...new Set(e)],
            cattax: xt.CATTAX
        }
    }
    const xi = "adpone.com";

    function Vi(t, e) {
        return `${t},${e},1,,,`
    }

    function $i(...t) {
        return `1.0,1!${t.join("!")}`
    }

    function Fi(t, e) {
        return t.includes(xi) && e ? function(t, e) {
            if (t.adpone) return $i(Vi(xi, t.adpone));
            const [, i] = e.split("!");
            return $i(Vi("sunmedia.tv", t.sunmedia), i)
        }(e, t) : t
    }

    function Bi(t) {
        const {
            children: e,
            attributes: i
        } = t, n = R((t, e) => {
            const {
                tagName: i
            } = e;
            return { ...t,
                [i]: [...t[i] || [], Bi(e)]
            }
        }, {});
        return {
            $: R((t, {
                name: e,
                value: i
            }) => ({ ...t,
                [e]: i
            }), {}, i),
            ...e.length ? n(e) : {
                _: t.textContent.trim()
            }
        }
    }

    function Hi(t) {
        const e = (new DOMParser).parseFromString(t, "text/xml"),
            i = e.querySelector("parsererror");
        if (i) throw new Error(i.textContent);
        const {
            firstChild: n
        } = e;
        return {
            [n.tagName]: Bi(n)
        }
    }

    function Gi(t) {
        new Image(1, 1).src = t
    }

    function Wi({
        images: t,
        scripts: e,
        $scriptContainer: i = document.body
    } = {}) {
        var n;
        o(s(n = t)) || r(n, Gi),
            function(t, e) {
                o(X(t)) || o(t.isConnected) || o(s(e)) || r(e, e => {
                    lt(t, {
                        type: "script",
                        attributes: {
                            src: e,
                            async: !0
                        }
                    })
                })
            }(i, e)
    }

    function zi(t) {
        return t
    }
    const qi = (t, e) => i => i.replace(t, e);

    function ji(t, e) {
        const i = {
                [We.RANDOM]: L(),
                ...e
            },
            n = rt(R((e, i, n) => [...e, qi(t[n], i)], []), Vt(fe))(i);
        return rt(zi, ...n)
    }
    const Yi = D(2, (t, e) => {
            if (o(P(e))) throw new Error(`Cannot apply omit to ${e}`);
            const i = s(t) ? t : [t];
            return Vt((t, e) => i.includes(e), e)
        }),
        Qi = D(2, (t, e) => {
            if (o(s(e))) throw new Error(`Cannot apply sortBy to ${e}`);
            const i = s(t) ? t : [t];
            return [...e].sort((t, e) => R((i, n) => {
                if (i) return i;
                const {
                    prop: s,
                    setOrder: r
                } = w(n) ? n : function(t) {
                    return {
                        prop: t,
                        setOrder: zi
                    }
                }(n);
                if (o(d(s))) throw new Error(`Cannot sort the collection by ${s}`);
                const [a, c] = [t[s], e[s]];
                if (m(a) || m(c)) throw Error(`The property ${s} does not exist in the object to sort by`);
                if (typeof a != typeof c) throw Error("Cannot sort values of different type");
                return r(d(a) ? a.localeCompare(c) : a - c)
            }, 0, i))
        }),
        Ki = t => {
            try {
                return decodeURIComponent(t)
            } catch {
                return t
            }
        },
        Xi = function(t, e = !1) {
            return o(e) && (t => "string" == typeof t && Ki(t) !== t)(t) ? t : encodeURIComponent(t)
        },
        Zi = Ki,
        Ji = "adf",
        tn = "adx2.adform.net",
        en = "acuityads",
        nn = "improvedigital",
        sn = "smartadserver",
        rn = {
            ATTRIBUTE_SEPARATOR: ",",
            NODE_SEPARATOR: "!",
            REGEX: /(\d+\.\d+,[0-1])(!([^[,!]+),([^[,!]+),([0-1]),([^[,!]+)?,([^[,!]+)?,([^[,!]+)?)+/
        };

    function an(t) {
        return e => R((t, e) => t ? .[e], e, t.split("."))
    }

    function on(t, e = !1) {
        return i => Vt(n => {
            const {
                type: s,
                list: r
            } = t(n) || {};
            if (o(i && s && r) || we(r)) return !1;
            const a = e ? r.some(t => i.includes(t)) : r.includes(i);
            return "allow" === s && o(a) || "block" === s && a
        })
    }
    const dn = on(an("segmentation.geo.continents")),
        cn = on(an("segmentation.domain")),
        ln = on(an("segmentation.userAgent"), !0);

    function hn(t) {
        return X(t) && "IFRAME" === t ? .tagName
    }

    function un(t, e, i = "<html><head></head><body></body></html>", {
        removeMargin: n = !0
    } = {}) {
        return new Promise(s => {
            if (o(e.isConnected)) throw new Error("Cannot append iframe if the container is not connected to the DOM");
            if (o(hn(t))) throw new Error("Cannot append iframe if it is not an iframe element");
            lt(e, t), Ge(t, "load", () => s(t.contentWindow)), t.contentWindow.document.open().write(i), t.contentWindow.document.close(), n && et(t.contentDocument.body, {
                margin: 0
            })
        })
    }

    function pn(t, e, {
        async: i
    } = {}) {
        return new Promise((n, s) => {
            const r = ct({
                type: "script",
                attributes: {
                    src: e,
                    ...i && {
                        async: i
                    }
                },
                events: {
                    load: n,
                    error: s
                }
            });
            lt(t, r)
        })
    }
    const mn = t => J(e => ({ ...e,
        bids: t(e.bids)
    }));

    function An(t, e) {
        return e.some(({
            bids: e
        }) => e.some(e => e.bidder === t))
    }
    const gn = [{
        key: "asi",
        transformFn: t => t
    }, {
        key: "sid",
        transformFn: t => Zi(t)
    }, {
        key: "hp",
        transformFn: t => Number(t)
    }, {
        key: "rid",
        transformFn: t => Zi(t)
    }, {
        key: "name",
        transformFn: t => Zi(t)
    }, {
        key: "domain",
        transformFn: t => Zi(t)
    }];

    function fn(t = {}) {
        const {
            gdprApplies: e,
            tcString: i
        } = t;
        return {
            gdpr: { ...e && o(i) ? {
                    cmpApi: "iab",
                    defaultGdprScope: !0
                } : {
                    cmpApi: "static",
                    consentData: {
                        getTCData: t
                    }
                },
                timeout: 1e3,
                rules: [{
                    purpose: "storage",
                    enforcePurpose: !0,
                    enforceVendor: !0,
                    vendorExceptions: ["utiqId"]
                }]
            }
        }
    }

    function En(t) {
        if (o(function(t) {
                return rn.REGEX.test(t)
            }(t))) return null;
        const e = J(t => t.split(rn.ATTRIBUTE_SEPARATOR), t.split(rn.NODE_SEPARATOR)),
            i = e.shift();
        return {
            ver: i[0],
            complete: Number(i[1]),
            nodes: J(t => R((e, i, n) => ({ ...e,
                ...t[n] && {
                    [i.key]: i.transformFn(t[n])
                }
            }), {}, gn), e)
        }
    }
    const bn = J(t => ({ ...t,
            bidder: t.alias ? ? t.bidder
        })),
        vn = rt((yn = "alias", k((t, e, i) => i.findIndex(e => e[yn] === t[yn]) === e)), k(ii("alias")), Li(ii("bids")));
    var yn;

    function Tn({
        bidders: t,
        aliases: e,
        settings: i
    }) {
        return R((t, {
            bidder: e,
            alias: n
        }) => (t[e] && (t[n] = i), t), R((t, e) => ({ ...t,
            [e]: i
        }), {}, t))(e)
    }

    function Cn(t) {
        return [z.LATIN_AMERICA, z.NORTH_AMERICA].includes(t ? .continent)
    }

    function In({
        config: t,
        availableFormats: e,
        environmentVars: i,
        prebidUrl: n
    }) {
        if (o(t) || we(t.adUnits || [])) return null;
        const {
            blockedCategories: s,
            domain: a,
            geolocation: d,
            gpid: c,
            id: l,
            referrer: h,
            supplyChain: u,
            targeting: p,
            tcData: A
        } = i, g = rt(function(t, e) {
            if (e) return zi;
            const i = J(ii("size"), t.banner.sizes);
            return rt(Vt(t => t.mediaTypes.banner && we(t.mediaTypes.banner.sizes)), (n = ([t, e]) => i.includes(`${t}x${e}`), J(t => ({ ...t,
                ...t.mediaTypes.banner && {
                    mediaTypes: { ...t.mediaTypes,
                        banner: {
                            sizes: k(n)(t.mediaTypes.banner.sizes)
                        }
                    }
                }
            }))), Vt(e => e.mediaTypes.video && o(t.video.enabled)));
            var n
        }(e, t.allFormatsAllowed), function({
            domain: t,
            geolocation: e
        } = {}) {
            return rt(Vt(t => we(t.bids)), mn(rt(J(Yi("segmentation")), cn(t), dn(e ? .continent), ln(window.navigator.userAgent))))
        }({
            domain: a,
            geolocation: d
        }))(t.adUnits);
        if (we(g)) return null;
        const f = rt(J(({
            priority: t,
            ...e
        }, i) => ({ ...e,
            code: `adu${i+1}${t?`-${t}`:""}`,
            ...c && {
                ortb2Imp: {
                    ext: {
                        gpid: c,
                        data: {
                            pbadslot: c
                        }
                    }
                }
            }
        })), mn(rt(J(Yi(["alias", "gvlid", "extraParams"])), bn, function(t) {
            return J(e => {
                if (e.bidder !== en || m(e.extraParams)) return e;
                let {
                    placementId: i
                } = e.params;
                return t ? .continent === z.EUROPE && e.extraParams.euEId && (i = e.extraParams.euEId), "US" !== t ? .country && t ? .continent !== z.LATIN_AMERICA || !e.extraParams.usLatamEId || (i = e.extraParams.usLatamEId), { ...e,
                    params: { ...e.params || {},
                        placementId: i
                    }
                }
            })
        }(d))), (E = { ...Cn(d) && {
                [Ji]: {
                    adxDomain: tn
                }
            },
            ...it(p) && {
                [sn]: {
                    target: p.replaceAll(",", ";")
                }
            }
        }, mn(J(t => ({ ...t,
            params: { ...t.params,
                ...E[t.bidder]
            }
        })))))(g);
        var E;
        const b = `pbjs-${l}`,
            v = async function(t, e) {
                const i = ct({
                    type: "iframe",
                    id: t,
                    prefix: null,
                    style: {
                        display: "none"
                    }
                });
                return await un(i, window.document.body), await pn(i.contentWindow.document.head, e), i.contentWindow.pbjs
            }(b, n);
        let y = null;
        return {
            request: async () => {
                y = await (async () => {
                    const e = await v,
                        i = vn(g);
                    return e.bidderSettings = Y(e.bidderSettings, {
                        standard: {
                            storageAllowed: !0
                        },
                        ...Tn({
                            bidders: ["pubmatic"],
                            aliases: i,
                            settings: {
                                allowAlternateBidderCodes: !0,
                                allowedAlternateBidderCodes: ["groupm"]
                            }
                        })
                    }), e.setConfig({
                        enableTIDs: !0,
                        consentManagement: fn(A),
                        ...(u || s) && {
                            ortb2: { ...u && {
                                    source: {
                                        ext: {
                                            schain: En(u)
                                        }
                                    }
                                },
                                ...s
                            }
                        },
                        ...t.pageUrl && h && {
                            pageUrl: Zi(h)
                        },
                        ...t.floors && {
                            floors: t.floors
                        },
                        userSync: {
                            filterSettings: {
                                iframeEnabled: !0,
                                iframe: {
                                    bidders: "*",
                                    filter: "include"
                                }
                            },
                            userIds: t.userIds || []
                        },
                        ...An(nn, f) && {
                            [nn]: {
                                usePrebidSizes: !0
                            }
                        },
                        cache: {
                            useLocal: !0
                        }
                    }), r(t.schains, t => {
                        e.setBidderConfig({
                            bidders: t.bidders,
                            config: {
                                ortb2: {
                                    source: {
                                        ext: {
                                            schain: {
                                                ver: "1.0",
                                                complete: 1,
                                                nodes: t.nodes
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }), i.forEach(({
                        bidder: t,
                        alias: i,
                        gvlid: n
                    }) => {
                        e.aliasBidder(t, i, {
                            gvlid: n
                        })
                    }), e.addAdUnits(f), e
                })();
                const e = await (i = t.timeout ? ? 2e3, t => new Promise(e => {
                    t.requestBids({
                        bidsBackHandler: t => {
                            e(t)
                        },
                        timeout: i
                    })
                }))(y);
                var i;
                return rt(Qi({
                    prop: "cpm",
                    setOrder: t => -1 * t
                }), k(ii("cpm")), R((t, e) => [...t, ...e.bids], []))(e)
            },
            renderAd: (t, e) => {
                e.ad = `<body style="margin: 0px; padding: 0px;">${e.ad}</body>`, y.renderAd(t, e.adId)
            },
            close() {
                Z(document.querySelector(`iframe#${b}`))
            }
        }
    }
    const Sn = {
        adapter: async function(t) {
            const {
                url: e,
                method: i,
                timeout: n,
                withCredentials: s,
                headers: r
            } = t, a = new AbortController;
            let d = !1;
            const c = mt(n) && setTimeout(() => {
                a.abort(), d = !0
            }, n);
            let l;
            try {
                l = await fetch(e, {
                    method: i.toUpperCase(),
                    signal: a.signal,
                    headers: { ...r
                    },
                    ...s && {
                        credentials: "include"
                    },
                    ...t.data && {
                        body: JSON.stringify(t.data)
                    }
                })
            } catch (t) {
                if (d) throw new Error(`timeout of ${n}ms exceeded`);
                if ("AbortError" === t.name) throw new Error("The operation was aborted.");
                if ("TypeError" === t.name) throw t;
                throw new Error("Network Error")
            }
            if (bt(tt, clearTimeout)(c), o(p(t.validateStatus)(l.status) ? ? !0)) throw new Error(`Request failed with status code ${l.status}`);
            return {
                data: await l.text(),
                status: l.status,
                statusText: l.statusText,
                headers: l.headers,
                config: t
            }
        },
        transformRequest: h,
        transformResponse: t => ({ ...t,
            data: JSON.parse(t.data)
        }),
        timeout: 0,
        maxContentLength: -1,
        validateStatus: t => t >= 200 && t < 300
    };

    function Dn(t, e) {
        return p(t, nt(zi))(e) ? ? e
    }

    function wn(t) {
        const e = Y(Sn, t),
            i = (a = new URL(e.url, e.baseURL).toString(), d = e.params, function(t, e = "") {
                if (o(Pe(t))) throw new Error(`${e||t} should be a valid HTTP(s) URL!`)
            }(a, "url"), fe(d) ? a : `${a}?${new URLSearchParams(d).toString()}`),
            n = e.method || "GET",
            {
                data: s,
                headers: r
            } = Dn(e.transformRequest, e);
        var a, d;
        return e.adapter({ ...e,
            url: i,
            method: n,
            headers: r,
            data: s
        }).then(t => Dn(e.transformResponse, t), t => {
            if (o(t ? .response)) return Promise.reject(t);
            const i = Object.assign(t, {
                response: Dn(e.transformResponse, t.response)
            });
            return Promise.reject(i)
        })
    }

    function Pn(t = {}) {
        return {
            dispatch: (e, i, n) => wn({ ...Y(t, n),
                method: i,
                url: e
            }),
            get(t, e) {
                return this.dispatch(t, "GET", e)
            },
            post(t, e) {
                return this.dispatch(t, "POST", e)
            }
        }
    }

    function Rn(t) {
        try {
            return (t._ ? ? t).trim()
        } catch {
            return null
        }
    }
    const kn = (t, e = []) => rt(k(({
        url: t
    }) => Pe(t, !0)), J(e => ({
        event: t,
        url: Rn(e)
    })))(e);

    function Mn(t = []) {
        return rt(k(({
            event: t,
            url: e
        }) => it(t) && Pe(e, !0)), J(t => ({
            event: t ? .$ ? .event,
            url: Rn(t)
        })))(t)
    }

    function On(t) {
        const e = rt(Pe, ii("url"));
        return rt(R((t, {
            event: e,
            url: i
        }) => {
            const n = t[e] ? .images || [],
                s = t[e] ? .scripts || [];
            return (i.includes(".js") ? s : n).push(i), { ...t,
                [e]: {
                    images: n,
                    scripts: s
                }
            }
        }, {}), k(e))(t)
    }
    const _n = {
        errorCode: /\[ERRORCODE\]/g
    };
    class Nn extends Error {
        constructor() {
            super(), this.name = "EmptyVastError", this.message = "Empty VAST response."
        }
    }
    Error;
    class Ln extends Error {
        constructor({
            code: t,
            message: e
        }) {
            super(), this.name = "VastError", this.code = t, this.message = e
        }
        toString() {
            return `[${this.code}] ${this.message}`
        }
    }
    class Un extends Error {
        constructor() {
            super(), this.name = "WaterfallError", this.message = "Waterfall error."
        }
    }
    const xn = {
            code: 100,
            message: "XML parsing error."
        },
        Vn = {
            code: 101,
            message: "VAST schema validation error."
        },
        $n = {
            code: 200,
            message: "Trafficking error. Video player received an Ad type that it was not expecting and/or cannot display."
        },
        Fn = {
            code: 300,
            message: "General Wrapper error."
        },
        Bn = {
            code: 403,
            message: "Couldn't find MediaFile that is supported by this video player, based on the attributes of the MediaFile element."
        },
        Hn = {
            code: 901,
            message: "General VPAID error."
        },
        Gn = j.wrapWithName("VIDEOPLAZA MANAGER"),
        Wn = t => {
            if (d(t)) {
                const e = t.indexOf("&amp;") > -1 ? t.replace(/&amp;/g, "&") : t;
                return e.indexOf("videoplaza") > -1 && e.indexOf("s=") > -1 ? e.replace(/%2F/g, "/") : e
            }
            return null
        },
        zn = ({
            event: t,
            fromList: e,
            adTrackingEvents: i
        }) => {
            e.length > 0 && r(e, e => {
                const n = Wn(e ? .value || e);
                d(n) && i.push({
                    event: t,
                    url: n
                })
            })
        },
        qn = (t, e) => {
            const i = JSON.parse(t),
                {
                    slot: n = []
                } = i.insertionPoint.shift(),
                {
                    vast: a
                } = n.shift(),
                {
                    inLine: o
                } = a.ad.shift(),
                {
                    linear: c
                } = o.creatives.creative.shift(),
                {
                    value: l
                } = c.adParameters,
                h = JSON.parse(l),
                {
                    ad: u
                } = h;
            return ((t, {
                isSunmedia: e,
                trafficType: i
            }) => {
                const n = [];
                let a = [];
                return r(t, t => {
                    const {
                        wrapper: o,
                        inLine: c
                    } = t;
                    if (m(c) && m(o)) throw new Ln(Vn);
                    let l, h = !1;
                    if (Ee(o)) h = !0, l = o;
                    else {
                        l = c;
                        const {
                            creatives: t,
                            impression: e
                        } = l;
                        !t && e && (l.error = e, delete l.impression)
                    }
                    const {
                        adTrackingEvents: u,
                        videoplazaErrors: p,
                        clickThrough: A,
                        mediaFiles: g,
                        adParameters: f,
                        campaignId: E
                    } = (t => {
                        const e = [],
                            i = [];
                        let n = [],
                            a = [],
                            o = {},
                            c = null;
                        const {
                            error: l,
                            impression: h,
                            creatives: u,
                            extensions: p
                        } = t;
                        if (Ee(l) && r(s(l) ? l : [l], t => {
                                const n = Wn(t ? .value || t);
                                n.includes(vi) ? i.push(n) : e.push({
                                    event: y,
                                    url: n
                                })
                            }), Ee(h)) {
                            const t = s(h) ? h : [h];
                            zn({
                                event: b,
                                fromList: t,
                                adTrackingEvents: e
                            })
                        }
                        if (Ee(u)) {
                            const {
                                creative: t = []
                            } = u, {
                                linear: i
                            } = t.shift();
                            if (Ee(i)) {
                                const {
                                    trackingEvents: t = {},
                                    videoClicks: s = {}
                                } = i;
                                ({
                                    mediaFiles: n,
                                    adParameters: a
                                } = i), ((t, e) => {
                                    t.tracking.length > 0 && r(t.tracking, ({
                                        event: t,
                                        value: i
                                    }) => {
                                        const n = Wn(i);
                                        d(n) && e.push({
                                            event: t,
                                            url: n
                                        })
                                    })
                                })(t, e);
                                const {
                                    clickTracking: c = [],
                                    customClick: l = []
                                } = s;
                                ({
                                    clickThrough: o
                                } = s), zn({
                                    event: v,
                                    fromList: [...J(({
                                        value: t
                                    }) => t, c), ...J(({
                                        value: t
                                    }) => t, l)],
                                    adTrackingEvents: e
                                });
                                const h = new RegExp("\\be=20\\b", "g");
                                zn({
                                    event: S,
                                    fromList: c.filter(({
                                        value: t
                                    }) => t.includes(vi) && !!t.match(h)).map(({
                                        value: t
                                    }) => t.replace(h, "e=10")),
                                    adTrackingEvents: e
                                })
                            }
                        }
                        try {
                            r(p ? .extension, ({
                                viewableImpression: t
                            } = {}) => {
                                if (fe(t)) return;
                                const {
                                    viewable: i,
                                    notViewable: n,
                                    viewUndetermined: s
                                } = t;
                                zn({
                                    event: T,
                                    fromList: i,
                                    adTrackingEvents: e
                                }), zn({
                                    event: C,
                                    fromList: n,
                                    adTrackingEvents: e
                                }), zn({
                                    event: I,
                                    fromList: s,
                                    adTrackingEvents: e
                                })
                            })
                        } catch (t) {
                            Gn.error("STORE viewableImpression trackers", t)
                        }
                        try {
                            const {
                                adInfo: t
                            } = p ? .extension ? .find(t => t ? .adInfo) || {};
                            c = t ? .cid
                        } catch (t) {
                            Gn.error("Obtain campaign Id from videoplaza item", t)
                        }
                        return {
                            adTrackingEvents: e,
                            videoplazaErrors: i,
                            mediaFiles: n,
                            adParameters: a,
                            clickThrough: o,
                            campaignId: c
                        }
                    })(l);
                    if (a = [...a, ...p], h) {
                        const {
                            vastadTagURI: t
                        } = l;
                        if (d(t)) {
                            const s = {
                                url: t.replace(/&amp;/g, "&"),
                                isSunmedia: e,
                                trafficType: i
                            };
                            n.push({
                                isWrapper: h,
                                campaignId: E,
                                ad: {
                                    tag: s,
                                    trackingEvents: u
                                }
                            })
                        }
                    } else try {
                        let t = [];
                        g ? .mediaFile ? .length && (t = g.mediaFile.map(t => {
                            const e = {
                                $: {},
                                _: null
                            };
                            return Object.entries(t).forEach(([t, i]) => {
                                "value" === t ? e._ = i : e.$[t] = i
                            }), e
                        }), n.push({
                            isWrapper: h,
                            campaignId: E,
                            ad: {
                                mediaFile: t,
                                parameters: f,
                                trackingEvents: u,
                                clickThroughUrl: A ? .value || A
                            }
                        }))
                    } catch (t) {
                        j.error("Adding a videoplaza inline to the adPod", t)
                    }
                }), a = a.filter((t, e, i) => i.indexOf(t) === e), {
                    adPod: n,
                    podErrors: a
                }
            })(u, e)
        },
        jn = t => {
            Wi(On(k(t => t.event === y, t))[y])
        };
    class Yn {
        constructor({
            adData: t,
            platformData: e,
            fromAdTag: i,
            adParametersData: n,
            vastManager: s,
            options: r,
            contextArgs: a
        }) {
            const {
                adPod: o,
                podErrors: d
            } = qn(n, i);
            this.adPod = o, this.podErrors = d, this.vastManager = s, this.currentIndex = 0, this.videoplazaTag = i, this.adData = t, this.platformData = e, this.options = r, this.contextArgs = a, this.emptyWaterfallErrorFired = !1
        }
        hasNext() {
            return this.currentIndex < this.adPod.length
        }
        nextAdFromPod() {
            try {
                const t = this.adPod[this.currentIndex];
                return this.currentIndex += 1, t
            } catch (t) {
                return !1
            }
        }
        async loadAds() {
            for (; this.hasNext();) {
                let t = null;
                const {
                    ad: e,
                    campaignId: i,
                    isWrapper: n
                } = this.nextAdFromPod();
                try {
                    if (n) {
                        const {
                            tag: i,
                            trackingEvents: n
                        } = e;
                        this.vastManager.init([i], this.options, this.contextArgs), t = await this.vastManager.loadAds(), t.adTrackingEvents = [...t.adTrackingEvents, ...n]
                    } else {
                        const {
                            mediaFile: i,
                            parameters: n,
                            trackingEvents: s,
                            clickThroughUrl: r
                        } = e;
                        t = await this.vastManager.setLinearMediaFile({
                            linear: {
                                MediaFiles: [{
                                    MediaFile: i
                                }],
                                AdParameters: n
                            },
                            companionAds: [],
                            trackingEvents: s,
                            clickThroughUrl: r,
                            adData: this.adData,
                            platformData: this.platformData,
                            requestHistory: []
                        })
                    }
                } catch (t) {}
                if (t) return t.initialAdTag = this.videoplazaTag, t.videoplazaWaterfall = {
                    campaignId: i
                }, t;
                jn(e.trackingEvents)
            }
            return this.fireEmptyWaterfallError(), null
        }
        fireEmptyWaterfallError() {
            if (!this.emptyWaterfallErrorFired) {
                this.emptyWaterfallErrorFired = !0, Gn.info("FIRE WATERFALL VAST_ERRORS", this.podErrors);
                const t = [];
                r(this.podErrors, e => {
                    t.push({
                        event: y,
                        url: e
                    })
                }), jn(t)
            }
        }
    }
    const Qn = {
        CONCURRENT: "concurrent",
        ENDCARD: "end-card"
    };

    function Kn(t) {
        const {
            $: e
        } = t, {
            adSlotId: i = (e.id ? .toLowerCase() === Tt.REMEMBER ? Tt.AVA : Tt.MAIN),
            renderingMode: n = Qn.ENDCARD
        } = e, s = parseInt(e.width, 10), r = parseInt(e.height, 10), a = ri(e.scalable || "") ? ? ["720x720", "640x480"].includes(`${s}x${r}`);
        return { ...t,
            width: s,
            height: r,
            adSlotId: i,
            renderingMode: n,
            scalable: a
        }
    }
    class Xn extends f {
        constructor({
            url: t
        }) {
            super(), this.adMediaUrl = t, this.quartiles = null, this.firstQuartileEventFired = !1, this.midpointEventFired = !1, this.thirdQuartileEventFired = !1, this.videoCompleteEventFired = !1, this.slot = null, this.videoSlot = null, this.adLinear = !0, this.adWidth = null, this.adHeight = null, this.adExpanded = null, this.adSkippableState = null, this.adRemainingTime = null, this.adCurrentTime = 0, this.adDuration = null, this.adVolume = null, this.adCompanions = null, this.adIcons = null
        }
        getAdQuartiles() {
            if (null == this.quartiles) {
                const t = Math.round(this.adDuration / 4);
                this.quartiles = [t, 2 * t, 3 * t]
            }
            return this.quartiles
        }
        getAdLinear() {
            return this.adLinear
        }
        getAdWidth() {
            return this.adWidth
        }
        getAdHeight() {
            return this.adHeight
        }
        getAdExpanded() {
            return this.adExpanded
        }
        getAdSkippableState() {
            return this.adSkippableState
        }
        getAdRemainingTime() {
            return this.adRemainingTime = this.adDuration - this.adCurrentTime, this.adRemainingTime
        }
        getAdCurrentTime() {
            return this.adCurrentTime
        }
        getAdDuration() {
            return this.adDuration
        }
        getAdCompanions() {
            return this.adCompanions
        }
        getAdIcons() {
            return this.adIcons
        }
        getAdVolume() {
            return this.adVolume
        }
        setAdVolume(t) {
            this.adVolume !== t && (this.adVolume = t, this.emit(E.AD_VOLUME_CHANGE))
        }
        handshakeVersion() {
            this.emit(E.AD_LOG, {
                method: "handshakeVersion",
                crea: this
            })
        }
        initAd(t, e, i, n, s, r) {
            const {
                slot: a,
                videoSlot: o
            } = r;
            this.slot = a, this.videoSlot = o, this.emit(E.AD_LOADED)
        }
        startAd() {
            this.emit(E.AD_STARTED)
        }
        stopAd() {
            this.emit(E.AD_STOPPED)
        }
        resizeAd(t, e, i) {
            this.emit(E.AD_LOG, {
                method: "resizeAd",
                args: [t, e, i],
                crea: this
            })
        }
        pauseAd() {
            this.emit(E.AD_PAUSED)
        }
        resumeAd() {
            this.emit(E.AD_PLAYING)
        }
        expandAd() {
            this.emit(E.AD_LOG, {
                method: "expandAd",
                crea: this
            })
        }
        collapseAd() {
            this.emit(E.AD_LOG, {
                method: "collapseAd",
                crea: this
            })
        }
        skipAd() {
            this.emit(E.AD_SKIPPED)
        }
        subscribe(t, e, i) {
            this.on(e, t.bind(i))
        }
        unsubscribe(t, e) {
            this.off(e, t)
        }
        emitAdVideoComplete() {
            this.videoCompleteEventFired = !0, this.emit(E.AD_VIDEO_COMPLETE)
        }
        tick(t) {
            if (t > 0 && this.adDuration > 0 && t <= this.adDuration) {
                const e = Math.round(t);
                e > this.adCurrentTime && (this.adCurrentTime = e);
                const [i, n, s] = this.getAdQuartiles();
                this.adCurrentTime >= i && !this.firstQuartileEventFired ? (this.firstQuartileEventFired = !0, this.emit(E.AD_VIDEO_FIRST_QUARTILE)) : this.adCurrentTime >= n && !this.midpointEventFired ? (this.midpointEventFired = !0, this.emit(E.AD_VIDEO_MIDPOINT)) : this.adCurrentTime >= s && !this.thirdQuartileEventFired ? (this.thirdQuartileEventFired = !0, this.emit(E.AD_VIDEO_THIRD_QUARTILE)) : this.adCurrentTime >= this.adDuration && !this.videoCompleteEventFired && this.emitAdVideoComplete()
            }
        }
    }

    function Zn(t) {
        return new Promise((e, i) => {
            const {
                getIMASdk: n
            } = t.contentWindow;
            a(n) ? e(n) : i()
        })
    }

    function Jn(t) {
        return t ? async function() {
            const t = `${W}-ima-iframe`;
            let e = document.getElementById(t);
            if (o(e)) {
                const i = '\n      <!doctype html>\n      <html style="height:100%;">\n      <head>\n        <meta charset=utf-8></meta>\n        <meta content="width=device-width,minimum-scale=1,initial-scale=1" name=viewport>\n      </head>\n      <body style="height:100%;">\n        <script>var inDapIF = true;<\/script>\n        <script async \n          src="//imasdk.googleapis.com/js/sdkloader/ima3.js" \n          onload="(function(e){ window.getIMASdk = () => google.ima;})(this)"><\/script>\n      </body>\n      </html>';
                e = function(t) {
                    return ct({
                        id: t,
                        prefix: null,
                        type: "iframe",
                        style: {
                            position: "absolute",
                            left: "0",
                            bottom: "0",
                            width: "0",
                            height: "0",
                            border: "0"
                        },
                        attributes: {
                            scrolling: "no",
                            title: "ima-iframe"
                        }
                    })
                }(t), await un(e, document.body, i)
            }
            return (await Se(Zn, {
                args: [e],
                attemps: 5,
                delay: 200
            }))()
        }() : new Promise((t, e) => {
            const i = `${W}-imasdk`;
            if (document.getElementById(i)) return void t(google.ima);
            const n = ct({
                id: i,
                prefix: null,
                type: "script",
                attributes: {
                    type: "text/javascript",
                    src: "//imasdk.googleapis.com/js/sdkloader/ima3.js",
                    async: !0
                },
                events: {
                    load: () => t(google.ima),
                    error: e
                }
            });
            lt(document.body, n)
        })
    }
    const ts = (() => {
        const t = J(t => e => e ? .includes(t) || e ? .includes(Xi(t)), ["https://ad.doubleclick.net/ddm"]);
        return e => t.some(t => t(e))
    })();
    class es extends Xn {
        constructor({
            url: t,
            adTagUrl: e,
            encapsulateIMA: i
        }) {
            super({
                url: t
            }), this.adTagUrl = e, this.encapsulateIMA = i, this.$imaAdContainer = null, this.googleIMA = null, this.adDisplayContainer = null, this.adsLoader = null, this.adsManager = null, this.onAdsManagerLoaded = this.onAdsManagerLoaded.bind(this), this.onAdLoaded = this.onAdLoaded.bind(this), this.onAdProgress = this.onAdProgress.bind(this), this.onAdError = this.onAdError.bind(this)
        }
        async initAd(t, e, i, n, s, r) {
            this.adWidth = t, this.adHeight = e, this.googleIMA = await Jn(this.encapsulateIMA), super.initAd(t, e, i, n, s, r)
        }
        async startAd() {
            const {
                AdDisplayContainer: t,
                AdsLoader: e,
                AdsManagerLoadedEvent: i,
                AdErrorEvent: n
            } = this.googleIMA;
            this.$imaAdContainer = ct({
                name: `ima-ad-container-${L()}`,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }
            }), lt(this.slot, this.$imaAdContainer), this.adDisplayContainer = new t(this.$imaAdContainer, this.videoSlot), this.adsLoader = new e(this.adDisplayContainer), this.adsLoader.addEventListener(i.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1), this.adsLoader.addEventListener(n.Type.AD_ERROR, this.onAdError, !1);
            const {
                AdsRequest: s
            } = this.googleIMA, r = new s;
            Pe(this.adTagUrl) ? r.adTagUrl = this.adTagUrl : r.adsResponse = this.adTagUrl, r.linearAdSlotWidth = this.adWidth, r.linearAdSlotHeight = this.adHeight, r.setAdWillAutoPlay(!0), r.setAdWillPlayMuted(!0), this.adsLoader.requestAds(r)
        }
        onAdsManagerLoaded(t) {
            const {
                AdsRenderingSettings: e
            } = this.googleIMA, i = new e;
            this.adsManager = t.getAdsManager(this.videoSlot, i), this.adsManager.setVolume(0), this.subscribeToAdsManagerEvents(), this.playAds()
        }
        subscribeToAdsManagerEvents() {
            const {
                AdErrorEvent: t,
                AdEvent: e
            } = this.googleIMA, i = {
                [e.Type.ALL_ADS_COMPLETED]: E.AD_STOPPED,
                [e.Type.LOADED]: E.AD_STARTED,
                [e.Type.STARTED]: E.AD_VIDEO_START,
                [e.Type.IMPRESSION]: E.AD_IMPRESSION,
                [e.Type.FIRST_QUARTILE]: E.AD_VIDEO_FIRST_QUARTILE,
                [e.Type.MIDPOINT]: E.AD_VIDEO_MIDPOINT,
                [e.Type.THIRD_QUARTILE]: E.AD_VIDEO_THIRD_QUARTILE,
                [e.Type.COMPLETE]: E.AD_VIDEO_COMPLETE,
                [e.Type.SKIPPED]: E.AD_SKIPPED,
                [e.Type.PAUSED]: E.AD_PAUSED,
                [e.Type.RESUMED]: E.AD_PLAYING,
                [e.Type.VOLUME_CHANGED]: E.AD_VOLUME_CHANGE,
                [e.Type.VOLUME_MUTED]: E.AD_VOLUME_CHANGE,
                [e.Type.CLICK]: E.AD_CLICK_THRU,
                [e.Type.LOG]: E.AD_LOG
            };
            this.adsManager.addEventListener(t.Type.AD_ERROR, this.onAdError), this.adsManager.addEventListener(e.Type.ALL_ADS_COMPLETED, h), this.adsManager.addEventListener(e.Type.LOADED, this.onAdLoaded), this.adsManager.addEventListener(e.Type.AD_PROGRESS, this.onAdProgress), Object.entries(i).forEach(([t, e]) => {
                this.adsManager.addEventListener(t, () => this.emit(e))
            })
        }
        onAdLoaded(t) {
            const e = t.getAd();
            this.adMediaUrl = e ? .getMediaUrl(), this.adDuration = e ? .getDuration()
        }
        onAdProgress(t) {
            const e = t.getAdData();
            this.adCurrentTime = e ? .currentTime
        }
        onAdError(t) {
            const e = t.getError() ? .data ? .errorMessage || "unknown ima error";
            this.destroy(), this.emit(E.AD_ERROR, e)
        }
        playAds() {
            const {
                ViewMode: t
            } = this.googleIMA;
            try {
                this.adDisplayContainer.initialize(), this.adsManager.init(this.adWidth, this.adHeight, t.NORMAL), this.adsManager.start()
            } catch (t) {
                this.onAdError(t)
            }
        }
        destroy() {
            try {
                this.adsManager ? .destroy(), this.adsLoader.destroy(), this.adDisplayContainer.destroy()
            } catch (t) {}
            Z(this.$imaAdContainer)
        }
        getAdSkippableState() {
            return this.adsManager ? .getAdSkippableState()
        }
        getAdRemainingTime() {
            return this.adsManager ? .getRemainingTime()
        }
        getAdVolume() {
            return this.adsManager ? .getVolume()
        }
        setAdVolume(t) {
            this.adsManager ? .setVolume(t)
        }
        skipAd() {
            this.adsManager ? .skip()
        }
        stopAd() {
            this.adsManager ? .stop()
        }
        resizeAd(t, e, i) {
            this.adWidth = t, this.adHeight = e, this.adsManager ? .resize(t, e, i)
        }
        pauseAd() {
            this.adsManager.pause()
        }
        resumeAd() {
            this.adsManager ? .resume()
        }
        expandAd() {
            this.adsManager ? .expand()
        }
        collapseAd() {
            this.adsManager ? .collapse()
        }
    }

    function is(t, e) {
        et(t, {
            transform: `scale(${e})`,
            "transform-origin": "top left"
        })
    }

    function ns(t, {
        period: e = 1e3,
        context: i,
        args: n = [],
        wind: s = window
    } = {}) {
        if (o(a(t))) return null;
        let d = null,
            c = null,
            l = 0,
            u = null,
            p = e,
            m = h;

        function A() {
            u = Date.now(), t.apply(i, n)
        }

        function g() {
            l += e, A()
        }

        function f() {
            s.clearInterval(d), s.clearTimeout(c), m()
        }
        return {
            state: 0,
            getCurrentTime: () => l,
            set() {
                1 !== this.state && (d = s.setInterval(g, e), p = e, u = Date.now(), this.state = 1)
            },
            start() {
                1 !== this.state && (A(), this.set())
            },
            pause() {
                1 !== this.state && 3 !== this.state || (p -= Date.now() - u, f(), this.state = 2)
            },
            async resume() {
                if (2 === this.state) {
                    this.state = 3, u = Date.now();
                    try {
                        await (t = p, new Promise((e, i) => {
                            c = s.setTimeout(e, t), m = i
                        })), g(), this.set()
                    } catch {}
                    var t
                }
            },
            reset() {
                f(), this.state = 0, l = 0, this.set()
            },
            restart() {
                f(), this.state = 0, l = 0, this.start()
            },
            cancel() {
                f(), this.state = -1, r(this, (t, e) => {
                    a(this[e]) && (this[e] = h)
                })
            }
        }
    }

    function ss({
        width: t,
        height: e
    }, {
        width: i,
        height: n
    }, {
        allowScaleUp: s,
        fillSlot: r
    } = {}) {
        const a = Number(t) && Number(e) && i && n,
            d = t <= i && e <= n;
        if (o(a) || d && o(s || r)) return {
            width: Math.min(Number(t) || 0, i || 0),
            height: Math.min(Number(e) || 0, n || 0),
            scale: 1
        };
        const c = i / n,
            l = t / e,
            h = s => Ye(s ? n / e : i / t, 5);
        if (r) return {
            width: i,
            height: n,
            scale: h(c < l)
        };
        const u = h(c > l);
        return {
            width: Ye(t * u, 2),
            height: Ye(e * u, 2),
            scale: u
        }
    }

    function rs(t, e) {
        if (o(it(t) && X(e))) throw new Error("Channel id must be a string and $target an HTMLElement");
        let i = [];
        return {
            sendMessage(i, n) {
                const s = new CustomEvent(i, {
                    detail: {
                        channelId: t,
                        message: n
                    }
                });
                e.dispatchEvent(s)
            },
            addListener(n, s = h, {
                once: r = !1
            } = {}) {
                const a = i => {
                    i.detail ? .channelId === t && (r && e.removeEventListener(n, a), s(i.detail.message))
                };
                return e.addEventListener(n, a), i.push({
                    messageType: n,
                    handler: a
                }), () => {
                    e.removeEventListener(n, a), i.splice(i.indexOf({
                        messageType: n,
                        handler: a
                    }, 1))
                }
            },
            close() {
                r(i, ({
                    messageType: t,
                    handler: i
                }) => {
                    e.removeEventListener(t, i)
                }), i = [], this.sendMessage = h, this.addListener = h
            }
        }
    }
    class as extends f {
        constructor(t, e, i, n) {
            super(), this.displayBids = e, this.prebid = t, this.storiesConfig = n || {};
            const {
                slideDuration: s
            } = this.storiesConfig, r = i, a = this.displayBids.length > 1;
            this.slideDuration = a ? s : r, this.adDuration = a ? this.displayBids.length * this.slideDuration : r, this.adRemainingTime = this.adDuration, this.adSkippableState = !0, this.$adUnit = null, this.$adUnitSlide = null, this.$storySlides = null, this.storiesTimer = null, this.adTimeCounter = null
        }#
        e() {
            this.adRemainingTime -= 1, 0 === this.adRemainingTime && (this.emit(E.AD_VIDEO_COMPLETE), this.stopAd())
        }
        getAdDuration() {
            return this.adDuration
        }
        getAdRemainingTime() {
            return this.adRemainingTime
        }
        getAdSkippableState() {
            return this.adSkippableState
        }
        handshakeVersion(t = "") {
            return t || "2.0"
        }
        initAd(t, e, i, n, s, a = {}) {
            const {
                slot: d,
                slotId: c
            } = a;
            this.$adUnit = ct({
                    id: "stories",
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }
                }),
                function(t, e) {
                    const i = t.style;
                    Object.defineProperty(t, "style", {
                        get: () => new Proxy(i, {
                            set: (t, i, n) => !!e.includes(i) || Reflect.set(t, i, n)
                        })
                    })
                }(this.$adUnit, ["overflow"]), c && this.$adUnit.setAttribute(Ii, c), this.$storiesContainer = ct({
                    style: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                    }
                }), lt(this.$adUnit, this.$storiesContainer), this.$storySlides = J(t => {
                    const {
                        width: e,
                        height: i,
                        bidder: n
                    } = t;
                    return ct({
                        type: "iframe",
                        name: "story",
                        style: {
                            border: "none",
                            maxWidth: "initial",
                            flexShrink: 0
                        },
                        attributes: {
                            allow: "autoplay",
                            scrolling: "no",
                            data: {
                                htmlAd: n
                            },
                            width: e,
                            height: i,
                            ...c && {
                                [Ii]: c
                            }
                        }
                    })
                })(this.displayBids), lt(d, this.$adUnit), r(this.$storySlides, t => function(t, e, i = !0) {
                    if (o(t.isConnected)) throw new Error("Cannot append iframe if the container is not connected to the DOM");
                    if (o(hn(e)) && "SUN-IFRAME" !== e.tagName) throw new Error("Cannot append iframe if it is not an iframe element");
                    lt(t, e), e.contentDocument.open(), e.contentDocument.close(), i && et(e.contentDocument.body, {
                        margin: 0
                    })
                }(this.$storiesContainer, t)), [this.$adUnitSlide] = this.$storySlides, this.adTimeCounter = ns(this.#e, {
                    context: this
                }), this.emit(E.AD_LOADED);
            const [l] = this.displayBids, h = l.bidder.includes("richaudience");
            if (c && h) {
                const t = rs(c, this.$adUnitSlide);
                t.addListener("ssp-mad-duration-change", t => {
                    const {
                        duration: e
                    } = t;
                    this.#i(e)
                }, {
                    once: !1
                }), t.addListener("ssp-mad-ad-ready", ({
                    width: t,
                    height: e
                }) => {
                    this.$adUnitSlide.width = t, this.$adUnitSlide.height = e, this.emit(ae, {
                        width: t,
                        height: e
                    })
                }, {
                    once: !1
                })
            }
        }
        startAd() {
            try {
                const t = new Set,
                    e = e => {
                        if (e < 0 || e >= this.$storySlides.length) return;
                        this.$adUnitSlide = this.$storySlides[e];
                        const i = this.displayBids[e];
                        o(t.has(e)) && this.$adUnitSlide && i && (this.prebid.renderAd(this.$adUnitSlide.contentWindow.document, i), t.add(e))
                    },
                    i = () => {
                        for (let t = 0; t < this.$storySlides.length; t += 1) e(t)
                    };
                let n = -1,
                    s = 0;
                const r = t => {
                        const i = this.$storySlides.length;
                        if (n = (t + i) % i, e(n), this.$storySlides[n - 1]) {
                            const {
                                height: t
                            } = this.$storySlides[n - 1];
                            s += Number(t), this.$storiesContainer.style.transform = `translateY(-${s}px)`
                        } else s = 0, this.$storiesContainer.style.transform = `translateY(-${s}px)`;
                        const {
                            width: r,
                            height: a
                        } = this.displayBids[n];
                        this.emit(ae, {
                            width: r,
                            height: a
                        })
                    },
                    a = () => {
                        r(n + 1)
                    };
                this.$storySlides.length > 1 ? (this.storiesConfig.renderStrategy === Nt && i(), this.storiesTimer = ns(a, {
                    period: 1e3 * this.slideDuration,
                    context: this
                })) : a(), this.adTimeCounter.set(), this.storiesTimer ? .start()
            } catch (t) {
                return void this.emit(E.AD_ERROR, t)
            }
            this.emit(E.AD_STARTED), this.emit(E.AD_IMPRESSION)
        }#
        i(t) {
            this.adDuration = t, this.adRemainingTime = t
        }
        stopAd() {
            this.adTimeCounter.cancel(), this.storiesTimer ? .cancel(), this.emit(E.AD_STOPPED)
        }
        pauseAd() {
            this.adTimeCounter.pause(), this.storiesTimer ? .pause(), this.emit(E.AD_PAUSED)
        }
        resumeAd() {
            this.adTimeCounter.resume(), this.storiesTimer ? .resume(), this.emit(E.AD_PLAYING)
        }
        skipAd() {
            this.adTimeCounter.cancel(), this.storiesTimer ? .cancel(), this.emit(E.AD_SKIPPED)
        }
        resizeAd(t, e) {
            if (this.$adUnitSlide) {
                const {
                    width: i,
                    height: n
                } = this.$adUnitSlide, {
                    scale: s
                } = ss({
                    width: Number(i),
                    height: Number(n)
                }, {
                    width: t,
                    height: e
                });
                is((this.$adUnitSlide.contentDocument || this.$adUnitSlide.contentWindow.document).body, s)
            }
            this.emit(E.AD_SIZE_CHANGE)
        }
        expandAd() {}
        collapseAd() {}
        subscribe(t, e, i) {
            this.on(e, t.bind(i))
        }
        unsubscribe(t, e) {
            this.off(e, t)
        }
    }
    const os = ["https://s1.adform.net/banners/scripts/video/VPAIDWrapper.min.js"];

    function ds(t) {
        return new Promise((e, i) => {
            const {
                getVPAIDAd: n
            } = t.contentWindow;
            a(n) ? e(n) : i()
        })
    }
    async function cs({
        inDapIF: t,
        adMediaUrl: e,
        slot: i
    }) {
        const n = `\n    <!doctype html>\n    <html style="height:100%;">\n      <head>\n        <meta charset=utf-8></meta>\n        <meta content="width=device-width,minimum-scale=1,initial-scale=1" name=viewport>\n      </head>\n      <body style="height:100%;">\n        <script>var inDapIF = ${t};<\/script>\n        ${e?`<script src="${e}"><\/script>`:""}\n      </body>\n    </html>\n  `,
            s = ct({
                type: "iframe",
                name: "vpaid-iframe",
                style: {
                    display: "block",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: "100%",
                    height: "100%",
                    border: "0px"
                },
                attributes: {
                    scrolling: "no",
                    width: "100%",
                    title: "vpaid-iframe"
                }
            });
        return {
            contentWindow: await un(s, i, n),
            iframeElem: s
        }
    }
    const ls = function({
            apiFramework: t
        }) {
            return t && bi.VPAID.test(t)
        },
        hs = function({
            type: t
        }) {
            return bi.JS.test(t)
        },
        us = function({
            type: t
        }) {
            return bi.FLASH.test(t)
        },
        ps = function({
            url: t
        }) {
            return t.indexOf("passback_vpaid/passback_vpaid") > -1
        },
        ms = "error",
        As = "durationchange",
        gs = "pause",
        fs = "play",
        Es = "playing",
        bs = "ended",
        vs = "volumechange",
        ys = "timeupdate";
    class Ts extends Xn {
        constructor(t) {
            super({
                url: t.url
            }), this.adMedia = t, this.adSkippableState = !0, this.onClick = this.onClick.bind(this), this.callbacks = {}, this.callbacks[ms] = this.onPlaybackError.bind(this), this.callbacks[As] = this.onDurationChange.bind(this), this.callbacks[gs] = this.onPause.bind(this), this.callbacks[fs] = this.onPlay.bind(this), this.callbacks[Es] = this.onPlaying.bind(this), this.callbacks[bs] = this.onEnded.bind(this), this.callbacks[vs] = this.onVolumeChange.bind(this), this.callbacks[ys] = this.onTimeupdate.bind(this)
        }
        setAdVolume(t) {
            this.adVolume !== t && (fe(this.adVolume) && (this.adVolume = t), this.videoSlot.muted = 0 === t, this.videoSlot.volume = t)
        }
        destroyAd() {
            this.slot.removeEventListener("click", this.onClick, !1), r(this.callbacks, (t, e) => {
                this.videoSlot.removeEventListener(e, t)
            }), this.videoSlot.removeAttribute("src"), this.videoSlot.load()
        }
        initAd(t, e, i, n, s, a) {
            const {
                slot: d,
                videoSlot: c
            } = a;
            o(function(t, e) {
                const {
                    url: i,
                    type: n
                } = t;
                if (n && n.includes("video") && "" !== e.canPlayType(n)) return !0;
                let s = i.split(".").pop();
                const r = s.indexOf("?");
                return s = r > -1 ? s.substr(0, r) : s, !e.canPlayType || "" !== e.canPlayType(`video/${s}`)
            }(this.adMedia, c)) ? this.emit(E.AD_ERROR, {
                message: "Video can not play"
            }) : (d.addEventListener("click", this.onClick, !1), r(this.callbacks, (t, e) => {
                c.addEventListener(e, t, !1)
            }), c.src = this.adMedia.url, super.initAd(t, e, i, n, s, a))
        }
        startAd() {
            this.resumeAd()
        }
        stopAd() {
            this.destroyAd(), super.stopAd()
        }
        skipAd() {
            this.destroyAd(), super.skipAd()
        }
        pauseAd() {
            this.videoSlot.pause()
        }
        async resumeAd() {
            try {
                await this.videoSlot.play(), this.emit(E.AD_LOG, {
                    method: "resumeAd",
                    message: "Automatic playback started!",
                    crea: this
                })
            } catch (t) {
                this.emit(E.AD_LOG, {
                    method: "resumeAd",
                    message: `Automatic playback with volume (${this.adVolume}) failed!`,
                    error: t,
                    crea: this
                }), mt(this.adVolume) && (this.setAdVolume(0), this.resumeAd())
            }
        }
        onClick() {
            this.emit(E.AD_CLICK_THRU), this.pauseAd()
        }
        removeEventListener(t) {
            this.videoSlot.removeEventListener(t, this.callbacks[t])
        }
        onPlaybackError(t) {
            this.emit(E.AD_ERROR, {
                DOMEvent: t
            }), this.stopAd()
        }
        onDurationChange() {
            this.removeEventListener(As), this.adDuration = Math.round(this.videoSlot.duration)
        }
        onPause() {
            this.vastPlayerPaused || (this.vastPlayerPaused = !0, super.pauseAd())
        }
        onPlay() {
            this.vastPlayerPaused && (this.vastPlayerPaused = !1, super.resumeAd())
        }
        onPlaying() {
            this.removeEventListener(Es), super.startAd(), this.emit(E.AD_IMPRESSION), this.emit(E.AD_VIDEO_START)
        }
        onEnded() {
            this.emitAdVideoComplete(), this.stopAd()
        }
        onVolumeChange() {
            super.setAdVolume(this.videoSlot.volume)
        }
        onTimeupdate() {
            const t = this.videoSlot.currentTime;
            this.tick(t)
        }
    }
    class Cs {
        constructor(t, e, i) {
            (t => {
                if (null != t && !(a((e = t).handshakeVersion) && a(e.initAd) && a(e.startAd) && a(e.stopAd) && a(e.skipAd) && a(e.resizeAd) && a(e.pauseAd) && a(e.resumeAd) && a(e.expandAd) && a(e.collapseAd) && a(e.subscribe) && a(e.unsubscribe))) throw new Ln(Hn);
                var e
            })(t), this._creative = t, this.vpaidSlot = e, this.adMedia = i
        }
        getAdLinear() {
            return this._creative.getAdLinear()
        }
        getAdWidth() {
            return this._creative.getAdWidth()
        }
        getAdHeight() {
            return this._creative.getAdHeight()
        }
        getAdExpanded() {
            return this._creative.getAdExpanded()
        }
        getAdSkippableState() {
            return this._creative.getAdSkippableState()
        }
        getAdRemainingTime() {
            let t = this._creative.getAdRemainingTime();
            return t = t !== 1 / 0 ? parseInt(t, 10) : 0, t > 0 && (this.remainingTime = Math.round(t)), this.remainingTime
        }
        getAdDuration() {
            let t = this._creative.getAdDuration();
            return t = t !== 1 / 0 ? parseInt(t, 10) : 0, t > 0 && (this.duration = Math.round(t)), this.duration
        }
        getAdCurrentTime() {
            return this.getAdDuration() - this.getAdRemainingTime()
        }
        getAdCompanions() {
            return this._creative.getAdCompanions ? .()
        }
        getAdIcons() {
            return this._creative.getAdIcons()
        }
        getAdVolume() {
            return this._creative.getAdVolume()
        }
        setAdVolume(t) {
            this._creative.setAdVolume ? .(t)
        }
        handshakeVersion() {
            return this._creative.handshakeVersion()
        }
        initAd(t, e, i, n, s, r) {
            this._creative.initAd(t, e, i, n, s, r)
        }
        startAd() {
            this._creative.startAd()
        }
        stopAd() {
            this._creative.stopAd()
        }
        resizeAd(t, e, i) {
            this._creative.resizeAd(t, e, i)
        }
        pauseAd() {
            this._creative.pauseAd()
        }
        resumeAd() {
            this._creative.resumeAd()
        }
        expandAd() {
            this._creative.expandAd()
        }
        collapseAd() {
            this._creative.collapseAd()
        }
        skipAd() {
            this._creative.skipAd()
        }
        subscribe(t, e, i) {
            this._creative.subscribe(e, t, i)
        }
        unsubscribe(t, e) {
            this._creative.unsubscribe(e, t)
        }
        adFactoryInitialize(t) {
            try {
                this._creative.SMInitialize(t)
            } catch (t) {}
        }
        static async create({
            adMedia: t,
            slot: e,
            adParameters: i,
            loadingModuleTime: n = 3e4
        }) {
            let s = null,
                r = null;
            if (ls(t)) {
                if (!hs(t)) throw us(t), new Ln(Bn);
                try {
                    ({
                        creative: s,
                        vpaidSlot: r
                    } = await ke(async function({
                        slot: t,
                        adParameters: e,
                        adMediaUrl: i
                    }) {
                        const n = function({
                                adMediaUrl: t,
                                adParameters: e
                            }) {
                                const i = t ? .toLowerCase(),
                                    n = e ? .toLowerCase();
                                return o(os.some(t => {
                                    const e = t.toLowerCase();
                                    return i ? .includes(e) || n ? .includes(e)
                                }))
                            }({
                                adMediaUrl: i,
                                adParameters: e
                            }),
                            {
                                contentWindow: s,
                                iframeElem: r
                            } = await cs({
                                inDapIF: n,
                                adMediaUrl: i,
                                slot: t
                            });
                        return {
                            creative: (await Se(ds, {
                                args: [r],
                                attemps: 5,
                                delay: 200
                            }))(),
                            vpaidSlot: s.document.body
                        }
                    }({
                        adMediaUrl: t.url,
                        adParameters: i,
                        slot: e
                    }), n))
                } catch (t) {
                    throw new Ln(Hn)
                }
            } else s = new Ts(t);
            return new Cs(s, r, t)
        }
    }

    function Is(t, e) {
        if (o(qe[t])) return !1;
        const i = it(e) && o(e.match(je) || "undefined" === e || "null" === e);
        return !o(i) && (t !== We.GDPR_APPLIES || !o(De(ri(e))))
    }
    const Ss = {
        display: "inline-flex"
    };

    function Ds(t) {
        return e => {
            try {
                if (o(Pe(e))) return;
                pn(t, e)
            } catch {}
        }
    }
    class ws extends f {
        constructor({
            formatId: t,
            siteId: e,
            pageId: i
        }) {
            super(), this.siteId = e, this.pageId = i, this.formatId = t, this.adDuration = 7, this.adRemainingTime = this.adDuration, this.adTimeCounter = null, this.tagId = `sas_${this.formatId}`, this.$slot = null, this.adSkippableState = !0, this.validMacros = {}
        }#
        e() {
            this.adRemainingTime -= 1, 0 === this.adRemainingTime && (this.emit(E.AD_VIDEO_COMPLETE), this.stopAd())
        }
        getAdDuration() {
            return this.adDuration
        }
        getAdRemainingTime() {
            return this.adRemainingTime
        }
        getAdSkippableState() {
            return this.adSkippableState
        }
        handshakeVersion(t = "") {
            return t || "2.0"
        }
        async initAd(t, e, i, n, s = {}, r = {}) {
            try {
                const {
                    contentWindow: t
                } = await cs({
                    inDapIF: !1,
                    slot: r.slot
                });
                this.vpaidIframeWind = t, this.$slot = t.document.body, this.adTimeCounter = ns(this.#e, {
                    context: this
                }), this.validMacros = rt(k(nt(Is)), ei(t => ze[t]))(s.macros || {}), this.bannedSizes = r.bannedSizes || [], this.emit(E.AD_LOADED)
            } catch (t) {
                this.emit(E.AD_ERROR, t)
            }
        }
        async startAd() {
            try {
                this.$smartContainer = ct({
                    id: this.tagId,
                    prefix: !1,
                    style: Ss
                }), lt(this.$slot, this.$smartContainer), await pn(this.$slot, "https://ced.sascdn.com/tag/1999/smart.js", {
                    async: !0
                }), await ke(this.requestSmartAd(), 7e3)
            } catch (t) {
                this.emit(E.AD_ERROR, t)
            }
        }
        requestSmartAd() {
            return new Promise((t, e) => {
                const {
                    [We.SUPPLY_CHAIN]: i, [We.TARGETING]: n, [We.REFERRER_URL]: s, [We.CONSENT_STRING]: r
                } = this.validMacros, a = {
                    networkId: 1999,
                    domain: "//www8.smartadserver.com"
                }, o = {
                    siteId: this.siteId,
                    pageId: this.pageId,
                    formatId: this.formatId,
                    tagId: this.tagId,
                    ...n && {
                        target: n.replace(/,/g, ";")
                    },
                    ...i && {
                        schain: i
                    },
                    ...s && {
                        pageUrl: Zi(s)
                    }
                }, d = {
                    async: !0,
                    onNoad: () => {
                        e(new Error("No ad returned by smart ad server"))
                    },
                    onAd: () => {
                        t(), this.onAd()
                    }
                }, {
                    sas: c
                } = this.vpaidIframeWind;
                c.cmd = c.cmd || [], c.cmd.push(() => {
                    c.setup(a), c.setGdprConsentData(r), c.call("std", o, d)
                })
            })
        }
        async onAd() {
            const t = this.vpaidIframeWind.frameElement.parentElement;
            this.vpaidIframeWind.SMAdController = {
                setIAS: Ds(t)
            };
            try {
                const t = await this.obtainAdDimensions({
                        timeout: 1500,
                        attempts: 15
                    }),
                    e = `${t.width}x${t.height}`;
                if (this.bannedSizes.includes(e)) return void this.onError(`smart ad size ${e} not allowed`);
                this.onAdMounted(t)
            } catch (t) {
                this.onError("smart ad dimensions not obtained in 1500ms")
            }
        }
        async obtainAdDimensions({
            timeout: t,
            attempts: e
        }) {
            return Se(() => new Promise((t, e) => {
                const i = this.$smartContainer.querySelector("iframe");
                if (i) {
                    const e = parseInt(i.width, 10) || null,
                        n = parseInt(i.height, 10) || null;
                    if (e && n) return void t({
                        width: e,
                        height: n
                    })
                }
                const n = this.$smartContainer.querySelector("img");
                if (n) {
                    const e = parseInt(n.width || n.naturalWidth, 10) || null,
                        i = parseInt(n.height || n.naturalHeight, 10) || null;
                    if (e && i) return void t({
                        width: e,
                        height: i
                    })
                }
                e()
            }), {
                attempts: e,
                delay: t / e
            })
        }
        onError(t) {
            Z(this.$smartContainer), this.emit(E.AD_ERROR, new Error(t))
        }
        onAdMounted(t) {
            this.emit(re, {
                width: t.width,
                height: t.height,
                bid: {
                    bidderName: "smartadserver"
                }
            }), this.adTimeCounter.set(), this.emit(E.AD_STARTED), this.emit(E.AD_IMPRESSION)
        }
        stopAd() {
            this.adTimeCounter.cancel(), this.emit(E.AD_STOPPED)
        }
        pauseAd() {
            this.adTimeCounter.pause(), this.emit(E.AD_PAUSED)
        }
        resumeAd() {
            this.adTimeCounter.resume(), this.emit(E.AD_PLAYING)
        }
        skipAd() {
            o(this.adSkippableState) || (this.adTimeCounter.cancel(), this.emit(E.AD_SKIPPED))
        }
        resizeAd(t, e) {
            try {
                const {
                    scale: i
                } = ss(ut(this.$smartContainer), {
                    width: t,
                    height: e
                });
                is(this.$slot, i), this.emit(E.AD_SIZE_CHANGE)
            } catch {}
        }
        expandAd() {}
        collapseAd() {}
        subscribe(t, e, i) {
            this.on(e, t.bind(i))
        }
        unsubscribe(t, e) {
            this.off(e, t)
        }
    }
    class Ps extends f {
        constructor({
            adm: t,
            h: e,
            w: i
        }) {
            super(), this.adm = t, this.heigth = e, this.width = i, this.adDuration = 4, this.adRemainingTime = 4, this.adTimeCounter = null, this.$slot = null, this.adSkippableState = !0
        }#
        e() {
            this.adRemainingTime -= 1, 0 === this.adRemainingTime && (this.emit(E.AD_VIDEO_COMPLETE), this.stopAd())
        }
        getAdDuration() {
            return this.adDuration
        }
        getAdRemainingTime() {
            return this.adRemainingTime
        }
        getAdSkippableState() {
            return this.adSkippableState
        }
        handshakeVersion(t = "") {
            return t || "2.0"
        }
        initAd(t, e, i, n, s, r = {}) {
            this.$slot = r.slot, this.adTimeCounter = ns(this.#e, {
                context: this
            }), this.emit(E.AD_LOADED)
        }
        startAd() {
            try {
                const t = ct({
                    type: "iframe",
                    name: "story",
                    style: {
                        border: "none",
                        maxWidth: "initial",
                        flexShrink: 0
                    },
                    attributes: {
                        allow: "autoplay",
                        scrolling: "no",
                        width: this.width,
                        height: this.heigth
                    }
                });
                this.$slot.appendChild(t), t.contentDocument.open(), t.contentDocument.write(this.adm), t.contentDocument.close(), this.adTimeCounter.set(), this.emit(E.AD_STARTED), this.emit(E.AD_IMPRESSION)
            } catch (t) {
                this.emit(E.AD_ERROR, t)
            }
        }
        stopAd() {
            this.adTimeCounter.cancel(), this.emit(E.AD_STOPPED)
        }
        pauseAd() {
            this.adTimeCounter.pause(), this.emit(E.AD_PAUSED)
        }
        resumeAd() {
            this.adTimeCounter.resume(), this.emit(E.AD_PLAYING)
        }
        skipAd() {
            o(this.adSkippableState) || (this.adTimeCounter.cancel(), this.emit(E.AD_SKIPPED))
        }
        resizeAd() {}
        expandAd() {}
        collapseAd() {}
        subscribe(t, e, i) {
            this.on(e, t.bind(i))
        }
        unsubscribe(t, e) {
            this.off(e, t)
        }
    }
    const Rs = {
        vpaidWrapperFactory: t => Cs.create(t),
        htmlAdWrapperFactory(...t) {
            const e = function(...t) {
                return new as(...t)
            }(...t);
            return new Cs(e)
        },
        htmlIndisplayWrapperFactory(t) {
            const e = function(t) {
                return new ws(t)
            }(t);
            return new Cs(e)
        },
        imaWrapperFactory(t, e) {
            const i = new es({
                adTagUrl: t,
                encapsulateIMA: e
            });
            return new Cs(i)
        },
        richaudienceDisplayWrapperFactory(t) {
            const e = function(t) {
                return new Ps(t)
            }(t);
            return new Cs(e)
        }
    };

    function ks(t) {
        return Array.from(new URL(t).searchParams.entries()).reduce((t, e) => ({ ...t,
            [e[0]]: e[1]
        }), {})
    }
    const Ms = {
            "wrapper-cpcv": "cpcv-redirect",
            gvos: "gvos-redirect"
        },
        {
            CATEGORY: Os,
            CONSENT_STRING: _s
        } = We;

    function Ns({
        adTagUrl: t,
        macroValues: e = {}
    }) {
        let i = t;
        const n = e[Os] ? { ...e,
            [Os]: Xi(e[Os])
        } : e;
        if (t.includes("vast.sunmedia.tv/creatives")) try {
            i = function(t) {
                let e = t;
                return Object.entries(Ms).forEach(([t, i]) => {
                    e = e.replace(`/${t}/`, `/${i}/`)
                }), e
            }(t);
            const {
                url: e,
                params: s
            } = function(t) {
                const [, e, i, n, s] = t.match(/^(http|https):\/\/vast.sunmedia.tv\/creatives\/(ss\/)?([a-zA-Z0-9_.-]+\/)?([a-zA-Z0-9_.-]+)/) || [];
                return o(e && function(t, e = "all") {
                    if (!d(t)) return !1;
                    const i = {
                        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                    }[e];
                    return i && i.test(t)
                }(s)) || i && o(n) ? {
                    url: t
                } : {
                    url: `${e}://${Ci}/${i?`ss/sunstudio/${n}${s}/vast`:`${s}/${s}`}.xml`,
                    params: {
                        rnd: L(),
                        ...ks(t)
                    }
                }
            }(i);
            return {
                url: e,
                tagMacros: J(ji(qe, n), s)
            }
        } catch (t) {
            j.error(`replacing ${i} with direct xml VAST`, t)
        }
        const s = ji(qe, n)(i);
        let r = i.includes("spotxchange") && o(i.includes("&ad_volume")) ? `${s}&ad_volume=0` : s;
        return i.includes("ads.tremorhub.com/ad/chnl") && (r = r.replace(qe[_s], "")), {
            url: r
        }
    }

    function Ls({
        extension: t,
        type: e
    }, i) {
        return i.some(i => t.includes(i) || e.includes(i))
    }
    const Us = {
        equativ: {
            userAgent: {
                type: "block",
                list: ["Googlebot", "AmazonAdBot"]
            }
        }
    };

    function xs(t) {
        return t.replace(/\.xml$/, ".json")
    }

    function Vs({
        adUnits: t,
        ...e
    }) {
        return { ...e,
            adUnits: J(({
                bids: t,
                ...e
            }) => ({ ...e,
                bids: J(t => ({ ...t,
                    ...Us[t.bidder] && {
                        segmentation: { ...Us[t.bidder]
                        }
                    }
                }), t)
            }), t)
        }
    }

    function $s(t) {
        return Boolean(t.vastUrl || t.vastXml)
    }
    const Fs = Pn({
            transformResponse: t => ({ ...t,
                data: Hi(t.data)
            })
        }),
        Bs = "VAST MANAGER",
        Hs = "https://s.richaudience.com/bid/",
        Gs = j.wrapWithName(Bs);
    let Ws = 0;
    const zs = (t, e, i) => {
            const n = Rs.imaWrapperFactory(t, e),
                {
                    trackingEvents: s,
                    clickThroughUrl: r,
                    companionAds: a,
                    initialAdTag: o,
                    requestHistory: d = []
                } = i;
            return {
                adCompanions: a,
                adClickThroughUrl: r,
                adData: {
                    fromTag: t
                },
                initialAdTag: o,
                linearCreative: n,
                adTrackingEvents: s || [],
                requestHistory: Pe(t) ? [...d, t] : d
            }
        },
        qs = (t, e) => parseInt(t.$.sequence, 10) - parseInt(e.$.sequence, 10);

    function js(t, e = []) {
        throw Wi(On(rt(J(({
            event: e,
            url: i
        }) => ({
            event: e,
            url: ji(_n, Q(t ? .code) ? {
                errorCode: t.code
            } : {})(i)
        })), k(({
            event: t
        }) => t === y))(e))[y]), t
    }
    class Ys extends f {
        constructor({
            macroValues: t = {},
            multiAdUnitsPrebidTag: e = {},
            prebidUrl: i,
            slot: n,
            tcData: s = {}
        }) {
            super(), this.macroValues = t, this.multiAdUnitsPrebidTag = e, this.prebidUrl = i, this.slot = n, this.tcData = s, this.shouldStopExecution = !1
        }
        init(t = [], e = {}, i = {}) {
            this.adTagFeed = t, this.options = e, this.contextArgs = i, this.currentIndex = 0, this.videoplazaWaterfallManager = null;
            const {
                requestTimeout: n,
                googleIMA: s
            } = e;
            this.googleIMA = s, this.requestTimeout = t => {
                const e = a(n) ? n(t) : n;
                return mt(e) ? e : 0
            }
        }
        stopExecution() {
            this.shouldStopExecution = !0
        }
        validateExecution() {
            if (this.shouldStopExecution) throw new Error("Load ads canceled")
        }
        nextAdTag() {
            try {
                const t = this.adTagFeed[this.currentIndex],
                    {
                        url: e,
                        VAST: i,
                        prebidConfig: n,
                        richaudienceBid: s
                    } = t;
                return this.currentIndex += 1, e ? .startsWith("https") || it(i) || n || s ? t : this.nextAdTag()
            } catch (t) {
                return !1
            }
        }
        async loadAds() {
            if (this.validateExecution(), t = this.slot, r(Array.from(t.children).filter(t => o(Ze(t)) && o(t.dataset.deleting)), t => {
                    o(t.className.includes(`${W}-vpaid-iframe`)) ? Z(t) : (et(t, {
                        height: 0,
                        margin: 0,
                        visibility: "hidden"
                    }), t.setAttribute("data-deleting", !0), function(t) {
                        setTimeout(() => {
                            Z(t)
                        }, 5e3)
                    }(t))
                }), null != this.videoplazaWaterfallManager)
                if (this.videoplazaWaterfallManager.hasNext()) {
                    const t = await this.videoplazaWaterfallManager.loadAds();
                    if (t) return t.requestHistory = [this.videoplazaWaterfallManager.adData.fromTag, ...t.requestHistory], t;
                    this.videoplazaWaterfallManager = null
                } else this.videoplazaWaterfallManager.fireEmptyWaterfallError();
            var t;
            const e = this.nextAdTag();
            return !1 === e ? (this.emit(oe), null) : (this.adTag = e, this.emit(de, this.adTag), this.adTag.richaudienceBid ? this.requestRichaudienceBid(this.adTag) : this.adTag.prebidConfig ? this.requestBids(this.adTag) : this.adTag.VAST ? this.processAdVastResponse(this.adTag) : this.fetchAds(this.adTag.url))
        }
        processAdVastResponse(t) {
            const {
                VAST: e,
                useIMA: i
            } = t;
            try {
                if (i) return zs(e, this.googleIMA ? .encapsulateIMA, {
                    initialAdTag: t
                });
                const n = p(Hi, () => js(new Ln(xn)))(e);
                return this.setVast(e, n)
            } catch (t) {
                return Gs.error(t), this.emit(me, t), this.loadAds()
            }
        }
        async fetchAds(t, e = {}) {
            const {
                propagateError: i = !1
            } = e;
            if (this.validateExecution(), Ws += 1, Ws > 5e3) throw new Error(yi);
            const {
                url: n,
                tagMacros: s
            } = Ns({
                macroValues: this.macroValues,
                adTagUrl: t
            });
            if (function(t) {
                    return Boolean(t ? .endsWith(".xml") && t.includes("47945a78-5cd1-44a2-91b7-b4884f9aed7f"))
                }(n)) return this.requestBids({ ...this.adTag,
                ...this.multiAdUnitsPrebidTag
            }, s);
            if (this.options.blockDisplayAds && o(function(t) {
                    if (o(t.includes(Ci))) return !0;
                    if (o(t.includes("/ss/sunstudio/"))) return !1;
                    const [, e] = t.match(/\/ss\/sunstudio\/([^/]+)\//) || [];
                    return m(e) || "video" === e
                }(n))) return Gs.warning(`blockDisplayAds: ${n}`), this.loadAds();
            if (function(t) {
                    return Boolean(t ? .match(/creatives.sunmedia.tv\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+\.xml/))
                }(n)) {
                const t = await async function(t) {
                    try {
                        const {
                            data: e
                        } = await wn({
                            url: xs(t)
                        });
                        return e
                    } catch {
                        return null
                    }
                }(n);
                if (t ? .indisplay) {
                    const i = Rs.htmlIndisplayWrapperFactory(t),
                        {
                            trackingEvents: r = [],
                            clickThroughUrl: a,
                            companionAds: o = {},
                            initialAdTag: d,
                            requestHistory: c = []
                        } = e;
                    return {
                        adCompanions: o,
                        adClickThroughUrl: a,
                        adData: {
                            fromTag: n
                        },
                        initialAdTag: d || this.adTag,
                        linearCreative: i,
                        adTrackingEvents: r,
                        requestHistory: [...c, n],
                        isIndisplay: !0,
                        tagMacros: s
                    }
                }
                let i = [];
                this.multiAdUnitsPrebidTag.prebidConfig && (i = this.multiAdUnitsPrebidTag.prebidConfig.adUnits.filter(({
                    mediaTypes: t
                }) => t.video));
                let {
                    userIds: r
                } = t || {};
                return this.multiAdUnitsPrebidTag.prebidConfig && (r = this.multiAdUnitsPrebidTag.prebidConfig.userIds), this.requestBids({ ...this.adTag,
                    storiesConfig: this.multiAdUnitsPrebidTag.storiesConfig,
                    prebidConfig: { ...t,
                        ...t ? .adUnits && {
                            adUnits: [...t.adUnits, ...i]
                        },
                        userIds : r,
                        duration: 7
                    }
                }, s)
            }
            if (this.adTag.useIMA || this.googleIMA ? .enabled && ts(n)) return Gs.info("Using google IMA", n), zs(n, this.googleIMA ? .encapsulateIMA, { ...e,
                initialAdTag: this.adTag
            });
            let r;
            try {
                const t = this.requestTimeout(n);
                try {
                    r = await Fs.get(n, {
                        withCredentials: !0,
                        timeout: t
                    })
                } catch (e) {
                    Gs.error(ce, e), r = await Fs.get(n, {
                        withCredentials: !1,
                        timeout: t
                    })
                }
            } catch (t) {
                if (this.emit(ce, this.adTag), Gs.error(ce, t), i) throw t;
                return this.loadAds()
            }
            this.validateExecution();
            try {
                const t = await this.setVast(n, r.data, e);
                return P(t) && s && Object.assign(t, {
                    tagMacros: s
                }), t
            } catch (t) {
                if (Gs.warning(t.message, t), this.emit(me, t), i) throw t;
                return this.loadAds()
            }
        }
        async requestRichaudienceBid(t) {
            const {
                pid: e
            } = t.richaudienceBid, {
                availableFormats: i,
                geolocation: n
            } = this.contextArgs, s = {
                imp: [{
                    tagid: e,
                    banner: {
                        format: J(({
                            size: t
                        }) => {
                            const [e, i] = t.split("x");
                            return {
                                w: Number(e),
                                h: Number(i)
                            }
                        })(i.banner.sizes)
                    }
                }],
                user: {
                    consent: this.macroValues[We.CONSENT_STRING]
                },
                regs: {
                    gdpr: Number(this.macroValues[We.GDPR_APPLIES])
                },
                device: {
                    h: window.screen.height,
                    w: window.screen.width,
                    language: navigator.language ? .split("-")[0]
                },
                site: {
                    page: Zi(this.macroValues[We.REFERRER_URL]),
                    ref: document.referrer
                },
                ...Ui(n)
            };
            try {
                const e = Pn({
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: !0,
                        timeout: 1e3
                    }),
                    i = await e.post(Hs, {
                        data: s
                    });
                if (Gs.info("[RICHAUDIENCE]", i), 200 === i.status && it(i ? .data ? .adm)) {
                    const {
                        w: e,
                        h: n
                    } = i.data, s = Rs.richaudienceDisplayWrapperFactory(i.data), r = Et("ratio")(e, n);
                    return {
                        linearCreative: s,
                        initialAdTag: t,
                        adClickThroughUrl: null,
                        adCompanions: {},
                        adData: {
                            fromTag: JSON.stringify(t),
                            adTitle: "richaudience-display"
                        },
                        dimensions: {
                            width: e,
                            height: n,
                            ratio: r
                        },
                        adParametersData: "",
                        adTrackingEvents: [],
                        isPrebidDisplay: !0,
                        requestHistory: [Hs]
                    }
                }
            } catch (t) {
                Gs.error("[RICHAUDIENCE]", t)
            }
            return this.loadAds()
        }
        async requestBids(t, e) {
            const {
                prebidConfig: i
            } = t;
            if (o(this.prebidUrl)) return Gs.error("[PREBID] No prebid url to make a request", t), this.loadAds();
            if (o(i)) return Gs.error("[PREBID] No prebid config to make a request", t), this.loadAds();
            const n = p(Vs)(i);
            if (o(n)) return Gs.error("[PREBID] Malformed bidders in prebid config to make a request", t), this.loadAds();
            let s = null;
            try {
                const {
                    availableFormats: i = {},
                    geolocation: r,
                    instance: a = {},
                    sellerIds: d
                } = this.contextArgs, c = Ui(r), l = {
                    config: n,
                    availableFormats: i,
                    environmentVars: { ...c && {
                            blockedCategories: c
                        },
                        domain: this.macroValues[We.DOMAIN],
                        geolocation: r,
                        id: `${a.it}-${a.index}-${L()}`,
                        gpid: this.contextArgs.prebidGpid,
                        referrer: this.macroValues[We.REFERRER_URL],
                        supplyChain: e ? .schain ? Fi(e.schain, d) : this.macroValues[We.SUPPLY_CHAIN],
                        targeting: this.macroValues[We.TARGETING],
                        tcData: { ...this.tcData
                        }
                    },
                    prebidUrl: this.prebidUrl
                };
                if (Gs.info("[PREBID] Create prebid", l), s = In(l), o(s)) throw new Error("[PREBID] No prebid ad units to request");
                const h = await ke(s.request(), 7e3) || [];
                if (h.length) return await this.manageBids({
                    prebid: s,
                    bids: h,
                    adTag: t
                });
                throw new Error("No bid responses obtained")
            } catch (t) {
                return s ? .close(), Gs.error("[PREBID]", t), this.loadAds()
            }
        }
        async manageBids({
            prebid: t,
            bids: e,
            adTag: i
        }) {
            const {
                prebidConfig: n,
                storiesConfig: s
            } = i;
            let r = null,
                a = null;
            if (({
                    videoBid: r,
                    displayBids: a
                } = function({
                    bids: t,
                    storiesConfig: e = {}
                }) {
                    const {
                        enabled: i,
                        slides: n
                    } = e;
                    if (i) {
                        const {
                            highestVideoBid: i,
                            highestAloneDisplayBid: s,
                            displayBids: r
                        } = function(t, e) {
                            const {
                                standAloneDisplayBidders: i = []
                            } = e, n = t => {
                                const e = t.bidderName || t.bidder;
                                return i.some(t => e ? .includes(t))
                            }, [s] = t;
                            return {
                                highestVideoBid: $s(s) ? s : null,
                                highestAloneDisplayBid: n(s) && o($s(s)) ? s : null,
                                displayBids: Vt(t => $s(t) || n(t), t)
                            }
                        }(t, e), a = n ? function(t, e) {
                            return t.slice(0, e)
                        }(r, n) : [...r], d = [i, s, {
                            cpm: a.reduce((t, e) => t + e.cpm, 0)
                        }].filter(Boolean).reduce((t, e) => e.cpm > (t ? .cpm || 0) ? e : t, null);
                        return d === i ? {
                            videoBid: i
                        } : d === s ? {
                            displayBids: [s]
                        } : {
                            displayBids: a
                        }
                    }
                    const [s] = t;
                    return $s(s) ? {
                        videoBid: s
                    } : {
                        displayBids: [s]
                    }
                }({
                    bids: e,
                    storiesConfig: s
                })), r) {
                const n = {
                    bid: r,
                    isPrebidVideo: !0,
                    requestHistory: []
                };
                Gs.info("[PREBID] Obtained video bid", r);
                try {
                    if (r.vastXml) {
                        const e = Hi(r.vastXml);
                        return { ...await this.setVast(r.vastXml, e, {
                                propagateError: !0
                            }),
                            ...n,
                            cleanPrebid: t.close
                        }
                    }
                    if (r.vastUrl) {
                        const e = await this.fetchAds(r.vastUrl, {
                                propagateError: !0
                            }),
                            {
                                adTrackingEvents: i
                            } = e;
                        return r.vastImpUrl && i.push({
                            event: b,
                            url: r.vastImpUrl
                        }), { ...e,
                            ...n,
                            adTrackingEvents: i,
                            cleanPrebid: t.close
                        }
                    }
                } catch (n) {
                    Gs.error(`[PREBID] ${n}`);
                    const s = Vt(t => r.adId === t.adId, e);
                    return s.length ? this.manageBids({
                        prebid: t,
                        bids: s,
                        adTag: i
                    }) : (t.close(), this.loadAds())
                }
            }
            Gs.info("[PREBID] Obtained display bid", a);
            const {
                duration: d
            } = n, c = Rs.htmlAdWrapperFactory(t, a, d, s), [l] = a, {
                width: h,
                height: u
            } = l, p = Et("ratio")(h, u);
            return {
                linearCreative: c,
                initialAdTag: i,
                adClickThroughUrl: null,
                adCompanions: {},
                adData: {
                    fromTag: JSON.stringify(i),
                    adTitle: "inline-prebid"
                },
                adParametersData: "",
                adTrackingEvents: [],
                bid: l,
                dimensions: {
                    width: h,
                    height: u,
                    ratio: p
                },
                isPrebidDisplay: !0,
                cleanPrebid: t.close,
                requestHistory: []
            }
        }
        setVast(t, e, i = {}) {
            Gs.info("VAST tag", t), Gs.info("VAST response", e);
            const {
                companionAds: n = {},
                trackingEvents: s = [],
                clickThroughUrl: r,
                platformData: a,
                requestHistory: o,
                propagateError: d
            } = i, {
                VAST: c
            } = e;
            m(c) && js(new Ln(Vn), s);
            const {
                Ad: l,
                Error: h = []
            } = c, u = [...s, ...kn(y, h)];
            return m(l) && js(new Nn, u), this.filterAdPod(t, l, {
                trackingEvents: u,
                clickThroughUrl: r,
                companionAds: n,
                platformData: a,
                requestHistory: o,
                propagateError: d
            })
        }
        filterAdPod(t, e, i) {
            const n = [],
                s = [];
            let a = null;
            return r(e, t => {
                const {
                    sequence: e = ""
                } = t.$;
                "" === e ? s.push(t) : n.push(t)
            }), 0 === n.length && s.length > 0 ? [a] = s : n.length > 0 && (n.sort(qs), [a] = n), fe(a) && js(new Ln($n), i.trackingEvents), this.setAd(t, a, i)
        }
        setAd(t, e, i = {}) {
            const {
                companionAds: n = {},
                clickThroughUrl: s,
                trackingEvents: r,
                platformData: a = {},
                requestHistory: d = [],
                propagateError: c = !1
            } = i, {
                InLine: l,
                Wrapper: h,
                $: u = {}
            } = e, p = Boolean(h ? .length), [A] = h || l;
            m(A) && js(new Ln(Vn), r);
            const [g] = A.AdSystem || [], [f] = A.AdTitle || [], [E] = A.AdServingId || [], [v] = A.Advertiser || [], [S] = A.Category || [], [D] = A.Description || [], [w] = A.Expires || [], [P] = A.Pricing || [], [R] = A.VASTAdTagURI || [], [k] = A.ViewableImpression || [], [M] = A.Extensions || [], {
                id: O
            } = u, _ = {
                fromTag: t,
                adId: O,
                ...g && {
                    adSystem: Rn(g)
                },
                ...f && {
                    adTitle: Rn(f)
                },
                ...E && {
                    adServingId: Rn(E)
                },
                ...S && {
                    category: Rn(S)
                },
                ...D && {
                    description: Rn(D)
                },
                ...v && {
                    advertiser: Rn(v)
                },
                ...P && {
                    pricing: Rn(P)
                },
                ...w && {
                    expires: Rn(w)
                },
                ...R && {
                    vastAdTagURI: Rn(R)
                },
                raw: { ...e
                }
            };
            _.adSystem && o(a.adSystem) && (a.adSystem = _.adSystem), r.push(...kn(y, A.Error), ...kn(b, A.Impression)), [k, ...(M ? .Extension || []).filter(t => "Videoplaza" === t.$ ? .name).flatMap(t => t.ViewableImpression ? .[0])].forEach(t => {
                o(t) || r.push(...kn(T, t.Viewable), ...kn(C, t.NotViewable), ...kn(I, t.ViewUndetermined))
            }), p && o(_.vastAdTagURI) && js(new Ln(Fn), r);
            const [N] = A.Creatives || [], L = N ? .Creative || [];
            return o(p) && 0 === L.length && js(new Ln(Vn), r), this.setCreatives({
                parentWrapper: {
                    companionAds: n,
                    trackingEvents: r,
                    clickThroughUrl: s,
                    platformData: a,
                    requestHistory: d,
                    propagateError: c
                },
                creativeList: L,
                isWrapper: p,
                adData: _,
                tagUrl: t
            })
        }
        async setCreatives({
            tagUrl: t,
            creativeList: e,
            parentWrapper: i = {},
            isWrapper: n,
            adData: a
        }) {
            const {
                platformData: d
            } = i;
            let {
                companionAds: c = {},
                clickThroughUrl: l,
                trackingEvents: h
            } = i;
            const {
                propagateError: u
            } = i;
            let p = null;
            const A = ({
                ClickThrough: t,
                ClickTracking: e = []
            }) => {
                if (s(t)) {
                    const [e] = t;
                    l = Rn(e)
                }
                const i = new RegExp("\\be=20\\b", "g"),
                    n = e.filter(t => t._.includes(vi) && !!t._.match(i)).map(t => ({ ...t,
                        _: t._.replace(i, "e=10")
                    }));
                h = [...h, ...kn(v, e), ...kn(S, n)]
            };
            r(e, t => {
                const [e] = t.CompanionAds || [], i = (({
                    Companion: t = []
                } = {}) => {
                    const e = t => ({
                        $: t.$,
                        content: Rn(t)
                    });
                    return rt(Vt(({
                        htmlResource: t,
                        staticResource: e,
                        iframeResource: i
                    }) => o(it(t ? .content)) && o(Pe(e ? .content, !0)) && o(Pe(i ? .content, !0))), J(t => {
                        const [i] = t.AltText || [], [n] = t.CompanionClickThrough || [], [s] = t.HTMLResource || [], [r] = t.StaticResource || [], [a] = t.IFrameResource || [], [o] = t.TrackingEvents || [], d = [...kn(v, t.CompanionClickTracking), ...Mn(o ? .Tracking)];
                        return {
                            $: t.$,
                            trackingEvents: d,
                            adTrackingEventStore: On(d),
                            ...i && {
                                altText: Rn(i)
                            },
                            ...n && {
                                clickThroughUrl: Rn(n)
                            },
                            ...s && {
                                htmlResource: e(s)
                            },
                            ...r && {
                                staticResource: e(r)
                            },
                            ...a && {
                                iframeResource: e(a)
                            }
                        }
                    }))(t)
                })(e);
                if (o(we(i)) && (c = function({
                        companionList: t = []
                    }) {
                        const e = ({
                                renderingMode: t
                            }) => t === Qn.ENDCARD,
                            i = ({
                                renderingMode: t
                            }) => t === Qn.CONCURRENT;
                        return { ...rt(R((t, n) => ({ ...t,
                                ...i(n) && {
                                    concurrent: { ...n,
                                        isConcurrent: !0
                                    }
                                },
                                ...e(n) && {
                                    endcards: { ...t.endcards || {},
                                        [n.adSlotId]: n
                                    }
                                }
                            }), {}), J(Kn))(t)
                        }
                    }({
                        companionList: i
                    })), m(t.Linear)) return;
                [p] = t.Linear;
                const [n] = p.TrackingEvents || [];
                h = [...h, ...Mn(n ? .Tracking)], r(p.VideoClicks, A)
            });
            const g = [...i.requestHistory, t];
            if (n) {
                const {
                    vastAdTagURI: t
                } = a;
                if (null !== t) {
                    const e = {
                            clickThroughUrl: l,
                            trackingEvents: h,
                            companionAds: c,
                            platformData: d,
                            requestHistory: g,
                            propagateError: u
                        },
                        i = this.fetchAds(t, e);
                    return i.initialAdTag = this.adTag, i
                }
                js(new Ln(Fn), h)
            }
            return this.setLinearMediaFile({
                linear: p,
                companionAds: c,
                trackingEvents: h,
                clickThroughUrl: l,
                adData: a,
                platformData: d,
                requestHistory: g
            })
        }
        async setLinearMediaFile({
            linear: t,
            companionAds: e,
            trackingEvents: i,
            clickThroughUrl: n,
            adData: s,
            platformData: a,
            requestHistory: d
        }) {
            this.validateExecution();
            const [c] = t.AdParameters || [], l = Rn(c);
            let u, p;
            try {
                const [e] = t.MediaFiles || [], [i] = e ? .InteractiveCreativeFile || [];
                if (u = i ? (t => {
                        const {
                            apiFramework: e,
                            type: i
                        } = t.$;
                        return {
                            apiFramework: e,
                            type: i,
                            url: Rn(t)
                        }
                    })(i) : function(t) {
                        const {
                            vpaidMediaFile: e,
                            mediaFileItems: i
                        } = function(t) {
                            const e = [];
                            let i = null,
                                n = null;
                            try {
                                r(t, t => {
                                    const s = {},
                                        r = Rn(t);
                                    if (o(Pe(r))) return;
                                    const {
                                        width: a,
                                        height: d,
                                        scalable: c,
                                        type: l = "",
                                        codec: h = "",
                                        bitrate: u = "",
                                        apiFramework: p = ""
                                    } = t.$;
                                    if ("" === l) return;
                                    const m = r.split(".").pop().toLowerCase();
                                    if (s.url = r, s.type = l, "" !== h && (s.codec = h), s.width = a ? parseInt(a, 10) : null, s.height = d ? parseInt(d, 10) : null, s.scalable = ri(c || ""), s.apiFramework = p, ls(s)) return hs(s) ? void(i = s) : us(s) ? void(n = s) : void 0;
                                    s.bitrate = "" === u || u < 10 ? 0 : parseInt(u, 10);
                                    const A = ["mp4", "ogg", "webm"];
                                    ne() && A.push("mov"), Zt() ? Ls({
                                        type: l,
                                        extension: m
                                    }, ["mp4"]) && e.push(s) : Ls({
                                        type: l,
                                        extension: m
                                    }, A) && e.push(s)
                                })
                            } catch {}
                            return {
                                vpaidMediaFile: i || n,
                                mediaFileItems: e
                            }
                        }(t);
                        let n = null;
                        if (null != e) n = e;
                        else if (i.length > 0) {
                            i.sort((t, e) => t.bitrate - e.bitrate);
                            const [t, e, ...s] = i;
                            n = t, Qt() && Ee(e) ? n = e : r(i, t => {
                                t.bitrate >= 512 && t.bitrate < 720 && t.width > 400 && t.width < 800 && n.bitrate < t.bitrate && (n = t)
                            })
                        }
                        return n
                    }(e ? .MediaFile), fe(u)) throw new Error
            } catch (t) {
                js(new Ln(Bn), i)
            }
            if (Gs.info("mediafile", u), ps(u)) {
                Gs.info("DETECTED Videoplaza Waterfall");
                const t = Ys.create({
                        macroValues: this.macroValues,
                        prebidUrl: this.prebidUrl,
                        slot: this.slot,
                        tcData: this.tcData
                    }),
                    r = {
                        [ce]: h
                    };
                N(this)(t, {
                    logWrapper: Bs,
                    propagate: !0
                }).subscribe(r), this.videoplazaWaterfallManager = new Yn({
                    adData: s,
                    platformData: a,
                    fromAdTag: this.adTag,
                    options: this.options,
                    adParametersData: l,
                    vastManager: t,
                    contextArgs: this.contextArgs
                }), p = await this.videoplazaWaterfallManager.loadAds(), this.validateExecution(), t.offAll(), p || js(new Un, i), p = ((t, e) => {
                    const {
                        clickThroughUrl: i,
                        companionAds: n,
                        adData: s,
                        trackingEvents: r,
                        requestHistory: a
                    } = e, o = t;
                    return o.adClickThroughUrl = !t.adClickThroughUrl && i ? i : t.adClickThroughUrl, o.adCompanions = 0 === t.adCompanions.length && n ? n : t.adCompanions, o.adData = !t.adData && s ? s : t.adData, o.adTrackingEvents = [...t.adTrackingEvents, ...r], o.requestHistory = [...a, ...t.requestHistory], o
                })(p, {
                    clickThroughUrl: n,
                    companionAds: e,
                    adData: s,
                    trackingEvents: i,
                    requestHistory: d
                })
            } else {
                let t;
                try {
                    t = await Rs.vpaidWrapperFactory({
                        adMedia: u,
                        adParameters: l,
                        slot: this.slot
                    })
                } catch (t) {
                    js(t || new Ln(Vn), i)
                }
                this.validateExecution(), p = {
                    linearCreative: t,
                    adClickThroughUrl: n,
                    adTrackingEvents: i,
                    adCompanions: e,
                    adData: s,
                    platformData: a,
                    initialAdTag: this.adTag,
                    ...l && {
                        adParametersData: l
                    },
                    requestHistory: d
                }
            }
            return p
        }
        static create(t) {
            return new Ys(t)
        }
    }
    const Qs = t => Ys.create(t),
        Ks = [{
            hiddenProperty: "hidden",
            visibilityEvent: "visibilitychange"
        }, {
            hiddenProperty: "msHidden",
            visibilityEvent: "msvisibilitychange"
        }, {
            hiddenProperty: "mozHidden",
            visibilityEvent: "mozvisibilitychange"
        }, {
            hiddenProperty: "webkitHidden",
            visibilityEvent: "webkitvisibilitychange"
        }],
        Xs = ["onfocusin", "onfocusout", "onpageshow", "onpagehide", "onfocus", "onblur"],
        Zs = () => "visible" === document.visibilityState;
    class Js extends Je {
        hasNativeSupport() {
            return !0
        }
        createObserver(t) {
            const {
                timeRequirement: e,
                area: i = .5
            } = this.options, n = this.getTarget(), s = new IntersectionObserver(i => {
                i.forEach(i => {
                    o(i.isIntersecting) ? clearTimeout(this.timer) : this.timer = setTimeout(t, e)
                })
            }, {
                threshold: [i]
            });
            return s.observe(n), s
        }
        static createObservable(...t) {
            return new Js(...t)
        }
    }
    class tr extends Error {
        constructor(t) {
            super(), this.name = "AdTypeError", this.message = `The ad type is not allowed. ${t}`
        }
    }
    class er extends Error {
        constructor(t) {
            super(), this.name = "AdSizeError", this.message = `The ad dimensions are not allowed. ${t}`
        }
    }
    const ir = [x.TYPES.SCROLLER, x.TYPES.IMAGE, x.TYPES.DISPLAY],
        nr = [x.TYPES.SOCIAL, x.TYPES.SCROLLER, x.TYPES.DISPLAY, x.TYPES.SURVEY, V, F, $, B],
        sr = ["counter", "label", "play", "skip", "volume"];

    function rr({
        type: t,
        ava: e,
        transparentBackground: i,
        controls: n = {},
        isIndisplay: s,
        isPrebidDisplay: r
    }) {
        const a = {},
            o = e => e.includes(t);
        De(e) && (a.ava = e), (i || o(ir)) && (a.referenceBackground = "transparent");
        const d = t === x.TYPES.VIDEO;
        return sr.forEach(t => {
            a[t] = d
        }), d && (a.skip = {
            enabled: !0,
            style: {
                left: "8.5%"
            }
        }, a.label = {
            enabled: !0,
            style: {
                left: "1.5%"
            }
        }), (s || r || o(nr)) && (a.skip = {
            enabled: !0,
            class: Ti
        }), { ...a,
            ...n
        }
    }
    const ar = j.wrapWithName("CONTROLLER"),
        or = j.wrapWithName("AD"),
        dr = j.wrapWithName("UI"),
        cr = "data-position";
    class lr extends f {#
        n;#
        s;
        constructor({
            slotId: t,
            externalClickTracker: e,
            macroValues: i,
            tcData: n,
            vastManager: s,
            playerUI: r
        }) {
            super(), this.slotId = t, this.#n = e, this.macroValues = i, this.tcData = n, this.vastManager = s, this.playerUI = r, this.options = {}, this.bannedSizes = [], this.onVideoElemPlaying = this.onVideoElmPlaying.bind(this), this.updateOptions = this.updateOptions.bind(this), this.applyAdConfig = rt(this.updateOptions, rr), this.eventSubscriberFactory = N(this), this.currentAdSubscriber = null, this.viewabilitySubscription = null
        }
        resetAdState(t) {
            this.options = t || this.options, this.adRatio = this.options.defaultAdRatio, this.currentAd = null, this.adStarted = !1, this.adImpression = !1, this.adViewableImpression = !1, this.videoStarted = !1, this.firstQuartileFired = !1, this.midpointFired = !1, this.thirdQuartileFired = !1, this.videoCompleted = !1, this.adStopped = !1, this.skipBtnDisplayed = !1, this.adTimeCounter = ns(this.setRemainingTime, {
                period: 1e3,
                context: this
            }), this.emitStartAdTimeout = null, this.emitAdSkippedTimeout = null, this.emitVideoCompleteTimeout = null, this.emitAdStoppedTimeout = null
        }
        start({
            adTagFeed: t,
            options: e = {},
            availableFormats: i,
            bannedSizes: n = [],
            geoTarget: s,
            instance: r = {},
            sellerIds: a
        }) {
            this.resetAdState(e), this.bannedSizes = n, this.geo = {
                country: s.city ? .country,
                continent: s.city ? .geoGroup
            }, this.geoGroup = s.city ? .geoGroup, this.sellerIds = a;
            const o = e.gpid || `${r.it}/${this.macroValues[We.DOMAIN]}/sm-ad-container-${r.index}`;
            return this.playerUI.init(), this.subscribeToUIEvents(), this.subscribeToVastManagerEvents(), this.vastManager.init(t, this.options, {
                availableFormats: i,
                geolocation: this.geo,
                instance: r,
                sellerIds: a,
                prebidGpid: o
            }), this.loadAds()
        }
        continueLoadingAds() {
            return this.clearAd(), this.resetAdState(), this.loadAds()
        }
        loadAds() {
            return this.playerUI.resetVideoPlayer(this.options), this.playerUI.displayMediaLayer(), this.vastManager.loadAds().then(t => {
                if (this.currentAd = t, null != this.currentAd) {
                    this.subscribeToCurrentAdEvents();
                    const {
                        isIndisplay: t,
                        isPrebidDisplay: e
                    } = this.currentAd;
                    (t || e) && this.applyAdConfig({
                        isIndisplay: t,
                        isPrebidDisplay: e
                    }), this.currentAd.adTrackingEventStore = On(this.currentAd.adTrackingEvents);
                    const i = {
                            AdParameters: this.currentAd.adParametersData,
                            macros: { ...this.currentAd.tagMacros,
                                schain: this.currentAd.tagMacros ? .schain ? Fi(this.currentAd.tagMacros.schain, this.sellerIds) : this.macroValues[We.SUPPLY_CHAIN]
                            },
                            ...this.tcData ? .vendor && this.tcData.purpose && {
                                tcData: { ...this.tcData
                                }
                            }
                        },
                        n = {
                            slot: this.currentAd.linearCreative.vpaidSlot || this.playerUI.getSlot(),
                            videoSlot: this.playerUI.getVideoSlot(),
                            slotId: this.slotId,
                            bannedSizes: this.bannedSizes,
                            extraData: {
                                geo: this.geo,
                                geoGroup: this.geoGroup
                            }
                        };
                    this.slotId && this.currentAd.linearCreative.vpaidSlot && (n.slot.setAttribute(Ii, this.slotId), this.currentAd.channel = rs(this.slotId, n.slot), this.listenToCurrentAdMessages());
                    try {
                        const {
                            width: t,
                            height: e
                        } = this.macroValues;
                        this.currentAd.linearCreative.vpaidSlot ? .setAttribute(cr, "normal"), this.currentAd.linearCreative.initAd(t, e, "normal", 500, i, n)
                    } catch (t) {
                        return ar.warning(t.message, t), this.continueLoadingAds()
                    }
                }
                return t
            }).catch(t => {
                ar.error("Loading ads", t), t ? .message === yi && this.emit(le)
            })
        }
        subscribeToUIEvents() {
            const t = {
                    debugLog: dr.info.bind(dr),
                    propagate: !0
                },
                e = this.eventSubscriberFactory(this.playerUI, t),
                i = {
                    [gi]: this.onUIPlayClicked,
                    [Ei]: this.onUIVolumeChanged
                };
            e.subscribe(i);
            const n = {
                [fi]: this.onUISkipClicked
            };
            e.subscribeOnce(n)
        }
        subscribeToVastManagerEvents() {
            const t = this.eventSubscriberFactory(this.vastManager, {
                    propagate: !0
                }),
                e = {
                    [de]: h,
                    [ce]: h,
                    [oe]: h,
                    [me]: h
                };
            t.subscribe(e)
        }
        subscribeToCurrentAdEvents() {
            const t = {
                debugLog: or.info.bind(or),
                propagate: !0
            };
            this.currentAdSubscriber = this.eventSubscriberFactory(this.currentAd.linearCreative, t);
            const e = {
                [E.AD_PAUSED]: this.onAdPaused,
                [E.AD_PLAYING]: this.onAdPlaying,
                [E.AD_VOLUME_CHANGE]: this.onAdVolumeChange,
                [E.AD_SKIPPABLE_STATE_CHANGE]: this.onAdSkippableStateChange,
                [E.AD_DURATION_CHANGE]: this.onAdDurationChange,
                [E.AD_CLICK_THRU]: this.onAdClickThru,
                [E.AD_EXPANDED_CHANGE]: this.onAdExpandedChange,
                [E.AD_INTERACTION]: this.onAdInteraction,
                [E.AD_LINEAR_CHANGE]: h,
                [E.AD_SIZE_CHANGE]: h,
                [E.AD_USER_ACCEPT_INVITATION]: this.onAdUserAcceptInvitation,
                [E.AD_USER_MINIMIZE]: this.onAdUserMinimize,
                [E.AD_USER_CLOSE]: this.onAdUserClose,
                [E.AD_LOG]: this.onAdLog,
                [ae]: h
            };
            this.currentAdSubscriber.subscribe(e);
            const i = {
                [E.AD_ERROR]: this.onAdError,
                [E.AD_LOADED]: this.onAdLoaded,
                [E.AD_STARTED]: this.onAdStarted,
                [E.AD_IMPRESSION]: this.onAdImpression,
                [E.AD_VIDEO_START]: this.onAdVideoStart,
                [E.AD_STOPPED]: this.onAdStopped,
                [E.AD_SKIPPED]: this.onAdSkipped,
                [E.AD_VIDEO_FIRST_QUARTILE]: this.onAdVideoFirstQuartile,
                [E.AD_VIDEO_MIDPOINT]: this.onAdVideoMidpoint,
                [E.AD_VIDEO_THIRD_QUARTILE]: this.onAdVideoThirdQuartile,
                [E.AD_VIDEO_COMPLETE]: this.onAdVideoComplete,
                [re]: this.onResizeProgrammaticDisplay
            };
            this.currentAdSubscriber.subscribeOnce(i)
        }
        listenToCurrentAdMessages() {
            this.currentAd.channel.addListener(H, t => {
                or.info(H, t), this.onSunmediaAd(t)
            }, {
                once: !0
            }), this.currentAd.channel.addListener(G, t => {
                or.info(G, t), this.onProgrammaticDisplay(t)
            }, {
                once: !0
            })
        }
        hasActuallyStarted() {
            return this.adStarted && (this.adImpression || this.videoStarted)
        }
        startAd() {
            if (this.adStarted || o(this.currentAd ? .linearCreative)) return;
            this.adStarted = !0;
            const {
                isAdFactory: t,
                isIndisplay: e
            } = this.currentAd;
            if (o(t) && o(e)) {
                const t = () => "visible" === document.visibilityState;
                this.emitStartAdTimeout = ns(() => {
                    this.currentAdSubscriber.unsubscribe(E.AD_STOPPED), this.currentAd.linearCreative.stopAd(), this.currentAdSubscriber.emitEvent(E.AD_ERROR, "AdStarted event not received")
                }, {
                    period: 1e4,
                    context: this
                }), this.#s = () => {
                    t() ? this.emitStartAdTimeout.resume() : this.emitStartAdTimeout.pause()
                }, document.addEventListener("visibilitychange", this.#s), t() ? this.emitStartAdTimeout.set() : (this.emitStartAdTimeout.set(), this.emitStartAdTimeout.pause())
            }
            this.currentAd.linearCreative.startAd()
        }
        resizeAd(t, e, i = "normal") {
            Q(t) && Q(e) && this.currentAd && this.currentAd.linearCreative && (this.currentAd.linearCreative.vpaidSlot ? .setAttribute(cr, i), this.currentAd.linearCreative.resizeAd(t, e, i))
        }
        trySetAdDuration() {
            o(this.currentAd ? .linearCreative) || this.currentAd.duration || (this.currentAd.duration = this.currentAd.linearCreative.getAdDuration() || this.currentAd.linearCreative.getAdRemainingTime() || null)
        }
        itShouldDisplaySkipBtn(t) {
            const e = this.currentAd.duration - this.options.skipTime;
            return this.options.skip && !this.skipBtnDisplayed && tt(t) && tt(e) && t <= e
        }
        setRemainingTime() {
            if (this.trySetAdDuration(), o(this.currentAd ? .linearCreative) || !this.currentAd.duration) return;
            const t = this.currentAd.linearCreative.getAdRemainingTime();
            this.playerUI.updateRemainingTime(t), this.itShouldDisplaySkipBtn(t) && (this.playerUI.displaySkipControl(), this.skipBtnDisplayed = !0), t <= 1 && !this.emitVideoCompleteTimeout && (this.emitVideoCompleteTimeout = setTimeout(() => {
                this.currentAdSubscriber.emitEvent(E.AD_VIDEO_COMPLETE)
            }, 3500))
        }
        fireTrackingEvent(t) {
            const e = this.currentAd ? .adTrackingEventStore ? .[t];
            o(e) || Wi({ ...e,
                $scriptContainer: this.playerUI.$adContainer
            })
        }
        fireErrorTrackingEvent(t) {
            const e = this.currentAd ? .adTrackingEventStore ? .[y];
            o(e) || Wi({ ...{ ...e,
                    images: J(e => {
                        const i = t ? .message || t,
                            n = d(i) ? i.replace(/\n/g, "") : "unknown",
                            s = Xi(n);
                        return e.replace("ev=sdk-errormsg", `ev=sdk-${s}`).replace("event-value=sdk-errormsg", `event-value=sdk-${s}`)
                    }, e.images)
                },
                $scriptContainer: this.playerUI.$adContainer
            })
        }
        fireNotViewableTrackingEvent() {
            this.viewabilitySubscription ? .unsubscribe(), this.adViewableImpression || this.fireTrackingEvent(C)
        }
        onVideoElmPlaying() {
            this.currentAd && null != this.currentAd.linearCreative && !this.adStarted && this.currentAd.linearCreative.pauseAd()
        }
        onUIPlayClicked() {
            this.currentAd && null != this.currentAd.linearCreative && this.currentAd.linearCreative.resumeAd()
        }
        onUISkipClicked() {
            this.skipAd()
        }
        onUIVolumeChanged({
            muted: t
        }) {
            this.currentAd && this.currentAd.linearCreative && (this.lastVolume = this.currentAd.linearCreative.getAdVolume(), this.currentAd.linearCreative.setAdVolume(t ? 0 : 1))
        }
        onSunmediaAd(t) {
            try {
                if (o(t)) throw new Error("Wrong payload received on sunmediaAd");
                this.currentAd.isAdFactory = !0, this.currentAd.linearCreative.isAdFactory = !0, this.currentAd.adFactory = t, o(t.width && t.height) && o([x.TYPES.VIDEO].includes(t.type)) && ({
                    width: this.currentAd.adFactory.width,
                    height: this.currentAd.adFactory.height
                } = this.currentAd.linearCreative.adMedia || {}), this.validateAdFactory(), this.currentAd.scalable = Boolean(this.currentAd.linearCreative.adMedia ? .scalable), this.currentAd.linearCreative.adFactoryInitialize({
                    SMContainer: this.playerUI.$mediaLayer,
                    plugin: !0
                }), this.applyAdConfig(this.currentAd.adFactory)
            } catch (t) {
                this.currentAdSubscriber.emitEvent(E.AD_ERROR, t)
            }
        }
        onResizeProgrammaticDisplay({
            width: t,
            height: e,
            bid: i
        }) {
            const n = Et("ratio")(t, e) || this.options.programmaticDisplayRatio;
            this.currentAd.dimensions = {
                width: t,
                height: e,
                ratio: n
            }, this.currentAd.bid = i
        }
        validateAdFactory() {
            const {
                adFactory: t = {}
            } = this.currentAd;
            if (this.options.blockFakeNativeFormat && t.type === $) throw new tr(t.type);
            if (t.type !== x.TYPES.VIDEO && (({
                    width: t,
                    height: e
                }) => t && e && this.bannedSizes ? .includes(`${t}x${e}`))(t)) throw new er(`${t.width}x${t.height}`)
        }
        setAdDimensions() {
            let t, e;
            ({
                width: t,
                height: e
            } = this.currentAd.isAdFactory ? this.currentAd.adFactory : this.currentAd.linearCreative.adMedia || {}), t && e && (this.currentAd.isAdFactory || e > t) ? this.adRatio = Et("ratio")(t, e) : (t = null, e = null), this.currentAd.dimensions = {
                width: t,
                height: e,
                ratio: this.adRatio
            }
        }
        onAdLoaded() {
            or.info("currentAd", this.currentAd);
            const {
                isPrebidDisplay: t,
                isIndisplay: e
            } = this.currentAd;
            o(t || e) && this.setAdDimensions(), this.emit(se), this.playerUI.$video.addEventListener("playing", this.onVideoElemPlaying)
        }
        onAdStarted() {
            this.#r(), this.adStarted = !0, this.fireTrackingEvent("creativeView");
            const {
                $adContainer: t
            } = this.playerUI;
            this.viewabilitySubscription = Js.createObservable(t, {
                timeRequirement: 2e3
            }).subscribeOnce(() => {
                this.fireTrackingEvent(T), this.adViewableImpression = !0
            }), this.adTimeCounter.start(), this.playerUI.displayInitialControls()
        }
        onAdStopped() {
            this.adStopped || (o(this.videoCompleted) && this.currentAdSubscriber.emitEvent(E.AD_VIDEO_COMPLETE, {
                close: !1
            }), this.clearAd(), this.adStopped = !0)
        }
        onAdSkipped() {
            this.fireTrackingEvent("skip"), this.fireNotViewableTrackingEvent(), this.clearAd()
        }
        onAdVolumeChange() {
            const t = this.currentAd.linearCreative.getAdVolume();
            let e = null;
            0 === t && this.lastVolume > 0 && (e = "mute", this.emit(ue, {
                adVolume: t
            })), t > 0 && 0 === this.lastVolume && (e = "unmute", this.emit(pe, {
                adVolume: t
            })), e && this.fireTrackingEvent(e)
        }
        onAdSkippableStateChange() {
            or.warning("listening to AdSkippableStateChange")
        }
        onAdDurationChange() {
            this.adTimeCounter.restart(), this.currentAd.duration = this.currentAd.linearCreative.getAdDuration()
        }
        onAdImpression() {
            this.adImpression || (this.fireTrackingEvent(b), this.adImpression = !0)
        }
        async onAdClickThru(t) {
            if (bt(Pe, Gi)(this.#n), this.fireTrackingEvent(v), this.adPausedByClick = !0, this.currentAd.linearCreative.pauseAd(), !1 !== t ? .playerHandles) {
                const e = m(t) || P(t) ? t ? .url || this.currentAd.adClickThroughUrl : t;
                bt(Pe, window.open)(e)
            }
            await new Promise(t => {
                const e = () => t(),
                    {
                        visibilityEvent: i
                    } = Ks.find(t => t.hiddenProperty in document) || {};
                i ? Ge(document, i, e, Zs) : function(t) {
                    const e = () => {
                        Zs() && (Xs.forEach(t => {
                            document[t] = null
                        }), t())
                    };
                    Xs.forEach(t => {
                        document[t] = e
                    })
                }(e)
            }), this.onUIPlayClicked()
        }
        onAdExpandedChange() {
            this.currentAd.isAdFactory && (this.currentAd.expanded = this.currentAd.linearCreative.getAdExpanded())
        }
        onAdInteraction() {
            this.fireTrackingEvent(S)
        }
        onAdUserAcceptInvitation() {
            this.fireTrackingEvent("acceptInvitation")
        }
        onAdUserMinimize() {
            this.fireTrackingEvent("collapse")
        }
        onAdUserClose() {
            this.fireTrackingEvent("close")
        }
        onAdVideoStart() {
            this.videoStarted || (this.fireTrackingEvent("start"), this.videoStarted = !0)
        }
        onAdVideoFirstQuartile() {
            this.firstQuartileFired || (this.onAdVideoStart(), this.fireTrackingEvent("firstQuartile"), this.firstQuartileFired = !0)
        }
        onAdVideoMidpoint() {
            this.midpointFired || (this.onAdVideoFirstQuartile(), this.fireTrackingEvent("midpoint"), this.midpointFired = !0)
        }
        onAdVideoThirdQuartile() {
            this.thirdQuartileFired || (this.onAdVideoMidpoint(), this.fireTrackingEvent("thirdQuartile"), this.thirdQuartileFired = !0)
        }
        onAdVideoComplete(t) {
            this.videoCompleted || (clearTimeout(this.emitVideoCompleteTimeout), this.adTimeCounter.pause(), this.currentAdSubscriber.unsubscribe(E.AD_PAUSED), this.onAdVideoThirdQuartile(), this.fireTrackingEvent("complete"), this.videoCompleted = !0, !1 !== t ? .close && (this.fireNotViewableTrackingEvent(), this.emitAdStoppedTimeout = setTimeout(() => {
                this.currentAdSubscriber.emitEvent(E.AD_STOPPED)
            }, 1e3)))
        }
        onAdPaused() {
            this.fireTrackingEvent("pause"), this.adPausedByClick && this.playerUI.displayPlayControl(), this.adTimeCounter.pause()
        }
        onAdPlaying() {
            this.fireTrackingEvent("resume"), this.playerUI.hidePlayControl(), this.adPausedByClick = null, this.adTimeCounter.resume()
        }
        onAdError(t) {
            if (this.fireErrorTrackingEvent(t), this.hasActuallyStarted()) return this.fireNotViewableTrackingEvent(), void this.clearAd();
            this.playerUI.resetVideoElement(), this.playerUI.$video.removeEventListener("playing", this.onVideoElemPlaying)
        }
        onAdLog(...t) {
            ar.info(...t, this)
        }
        updateOptions(t) {
            o(Object.keys(t || {}).length) || (this.playerUI.updateVideoPlayer(t), this.emit(he, t))
        }
        skipAd() {
            this.emitAdSkippedTimeout = setTimeout(() => {
                or.warning("AdSkipped event is sent from timeout instead of creative"), this.currentAdSubscriber.emitEvent(E.AD_SKIPPED)
            }, 1e3), this.currentAd.linearCreative.skipAd()
        }#
        r() {
            this.#s && (document.removeEventListener("visibilitychange", this.#s), this.#s = null), this.emitStartAdTimeout && (this.emitStartAdTimeout.cancel(), this.emitStartAdTimeout = null)
        }
        clearAd() {
            this.adTimeCounter.cancel(), this.#r(), clearTimeout(this.emitAdStoppedTimeout), clearTimeout(this.emitAdSkippedTimeout), clearTimeout(this.emitVideoCompleteTimeout), this.playerUI.hideControls(), this.playerUI.hideMediaLayer(), this.playerUI.resetVideoElement(), this.playerUI.getSlot() ? .removeAttribute(Ii), this.currentAd ? .channel ? .close(), this.playerUI.$video.removeEventListener("playing", this.onVideoElemPlaying), this.viewabilitySubscription ? .unsubscribe(), this.currentAdSubscriber ? .unsubscribeAll(), this.currentAd ? .cleanPrebid ? .()
        }
        destroy() {
            this.vastManager.stopExecution(), this.clearAd(), this.currentAd = null, this.playerUI.destroy()
        }
    }
    class hr {#
        n;
        constructor(t, i, n) {
            ({
                api: this.api,
                macroValues: this.macroValues,
                integrationScript: this.integrationScript,
                instanceIndex: this.instanceIndex,
                config: this.config,
                geoTarget: this.geoTarget,
                externalClickTracker: this.#n
            } = t), this.hooksManager = new Ft(this, {
                modules: {
                    deviceDetector: e,
                    globalObject: Ce
                }
            }), this.plugin = i()(this), this.multiAdUnitsPrebidTag = n, this.tcData = null, this.environmentVars = null, this.freezedOriginalConfig = null, this.state = 1, this.wind = window, this.device = Jt, this.adPosition = null, this.adControllerInstance = null, this.adCtrlSubscriber = null, this.eventSubscriberFactory = N(this), this.$adContainer = null, this.adContainerCurrentStyles = null, this.sunmediaRequestCount = 0, this.clientRequestCount = 0, this.sunmediaAdCount = 0, this.clientAdCount = 0, this.adEnded = !1, this.loopIntents = 1, this.start = this.start.bind(this), this.restart = this.restart.bind(this), this.windowHeight = pt(), Ce.register(this)
        }
        updateGdprMacroValues(t = {}) {
            const e = t[We.GDPR_APPLIES],
                i = t[We.CONSENT_STRING];
            Ee(e) && (this.macroValues[We.GDPR_APPLIES] = De(e) ? Number(e) : 0), Ee(i) && (this.macroValues[We.CONSENT_STRING] = it(i) ? i : 1)
        }
        setDefaultDimensionMacroValues() {
            const {
                [We.WIDTH]: t, [We.HEIGHT]: e
            } = this.macroValues, {
                defaultAdRatio: i
            } = this.config.options, n = Ct[this.device], {
                width: s,
                height: r
            } = function(t, {
                macroWidth: e,
                macroHeight: i,
                defaultAdRatio: n,
                minDimensions: s
            }) {
                if (e && i) return {
                    width: Math.max(e, s.width),
                    height: Math.max(i, s.height)
                };
                const r = ut(t) ? .width,
                    a = Math.max(bt(yt, vt)(r), s.width);
                return {
                    width: a,
                    height: Math.max(Et("height")(a, n), s.height)
                }
            }(this.$adContainer, {
                macroWidth: t,
                macroHeight: e,
                defaultAdRatio: i,
                minDimensions: n
            });
            this.macroValues = { ...this.macroValues,
                [We.WIDTH]: Ye(s),
                [We.HEIGHT]: Ye(r)
            }
        }
        reset() {
            this.config = Qe(this.freezedOriginalConfig), this.adEnded = !1, this.adPosition = null, this.plugin.reset()
        }
        async init(t) {
            try {
                this.environmentVars = t, this.hooksManager.beforeInit(), await this.build(), await this.start()
            } catch (t) {
                t.extra ? j.info("Plugin stopped by extra") : j.error("Initializing outstream plugin", t), this.close({
                    err: t
                })
            }
        }
        async build() {
            this.hooksManager.beforeBuild();
            const {
                eu_country: t
            } = this.geoTarget;
            this.tcData = await Ve(t, {
                gdpr: this.macroValues[We.GDPR_APPLIES],
                consentString: this.macroValues[We.CONSENT_STRING],
                timeToFindCmpFunction: this.config.timeToFindCmpFunction
            }), o(this.config.isExteEnvironment) && this.tcData.gdprApplies && this.plugin.shouldValidateConsent() && function(t, {
                mandatoryVendors: e = $e,
                genericPurposes: i = Fe,
                validCmpId: n = Be
            } = {}) {
                ! function({
                    cmpId: t
                }, e) {
                    if (o(e.includes(t))) throw new He(`cmp id ${t} is not valid`)
                }(t, n),
                function({
                    purpose: t
                }, e) {
                    const i = e.filter(e => !0 !== t ? .consents ? .[e]);
                    if (i.length > 0) throw new He(`missing purpose consent for the following purposes (${i.join(", ")})`)
                }(t, i),
                function({
                    vendor: t
                }, e) {
                    const i = e.filter(e => !0 !== t ? .consents ? .[e]);
                    if (i.length > 0) throw new He(`missing vendor consent for the following vendors: ${i.join(", ")}`)
                }(t, e),
                function(t, e) {
                    const {
                        vendor: i,
                        lastUpdated: n
                    } = t, {
                        disclosedVendors: s = {}
                    } = i, r = new Date("2026-03-01T00:00:00").getTime(), a = new Date(n).getTime();
                    if (o(tt(a)) || a < r) return;
                    const d = e.filter(t => !0 !== s[t]);
                    if (d.length > 0) throw new He(`mandatory vendors not disclosed for: ${d.join(", ")}`)
                }(t, e)
            }(this.tcData), this.updateGdprMacroValues({
                [We.GDPR_APPLIES]: this.tcData.gdprApplies,
                [We.CONSENT_STRING]: this.tcData.tcString
            }), await this.plugin.build(), this.hooksManager.beforeMount(), this.mountComponent(), this.hooksManager.mounted()
        }
        async start() {
            try {
                this.setDefaultDimensionMacroValues(), this.initAdController(), this.state = 2, this.plugin.createObservables(), this.freezedOriginalConfig = Object.freeze(Qe(this.config)), this.startAdController()
            } catch (t) {
                j.error("Starting outstream plugin", t), this.close({
                    err: t
                })
            }
        }
        async restart() {
            try {
                this.loopIntents += 1, this.mountAdContainer(), this.initAdController(), this.state = 2, this.startAdController()
            } catch (t) {
                j.error("Start outstream plugin", t), this.close({
                    err: t
                })
            }
        }
        mountComponent() {
            const {
                it: t,
                options: e
            } = this.config, i = this.plugin.getAdContainerParent();
            ht(`styles-${t}`, e.css, {
                $refContainer: i
            }), ht(Rt, It.AD_CONTAINER, {
                $refContainer: i
            }), this.plugin.mount(), this.mountAdContainer()
        }
        mountAdContainer() {
            this.$adContainer = this.createAdContainer(), this.insertAdContainer(), this.plugin.adContainerMounted()
        }
        unmountAdContainer(t = !1) {
            if (o(fe(this.$adContainer))) {
                let e = this.$adContainer;
                this.$adContainer = null, this.adContainerCurrentStyles = null, et(e, {
                    height: 0,
                    margin: 0,
                    visibility: "hidden"
                }), Ie(t ? 0 : this.config.options.removeMs).then(() => {
                    Z(e), e = null
                })
            }
        }
        createAdContainer() {
            return ct({
                name: "ad-container",
                id: `${this.api}-${this.loopIntents}`,
                attributes: {
                    data: {
                        it: this.config.it,
                        index: this.instanceIndex,
                        device: this.device
                    }
                }
            })
        }
        insertAdContainer() {
            lt(this.plugin.getAdContainerParent(), this.$adContainer), this.plugin.updateAdPosition(wt)
        }
        batchMoveAdChanges(t, e, i) {
            const {
                isPrebidDisplay: n
            } = this.adControllerInstance ? .currentAd || {};
            if (this.adPosition !== t || !ge(this.adContainerCurrentStyles, e) || !o(n)) {
                try {
                    i()
                } catch (t) {
                    j.warning(t)
                }
                this.adContainerCurrentStyles = e
            }
        }
        getPlayedAdCount() {
            return this.sunmediaAdCount + this.clientAdCount
        }
        disableAva() {
            this.config.ava.enabled = !1, this.config.ava.forceStart = !1
        }
        restoreAva() {
            this.config.ava = Qe(this.freezedOriginalConfig.ava)
        }
        stopLoop() {
            this.loopIntents = this.config.loop.times
        }
        itShouldLoop(t) {
            const {
                enabled: e,
                times: i,
                onlyOneVideo: n
            } = this.config.loop;
            return e && (0 === i || this.loopIntents < i) && o(t && n)
        }
        initAdController() {
            this.adControllerInstance = (({
                $adContainer: t,
                $videoSlot: e,
                externalClickTracker: i,
                macroValues: n = {},
                multiAdUnitsPrebidTag: s,
                prebidUrl: r,
                slotId: a,
                tcData: o = {}
            }) => {
                const d = Ni({
                        $adContainer: t,
                        $videoSlot: e
                    }),
                    c = d.getSlot(),
                    l = Qs({
                        macroValues: n,
                        multiAdUnitsPrebidTag: s,
                        prebidUrl: r,
                        slot: c,
                        tcData: o
                    });
                return new lr({
                    slotId: a,
                    playerUI: d,
                    vastManager: l,
                    externalClickTracker: i,
                    macroValues: n,
                    tcData: o
                })
            })({
                slotId: `${this.api}-${this.loopIntents}`,
                $adContainer: this.$adContainer,
                externalClickTracker: this.#n,
                macroValues: this.macroValues,
                multiAdUnitsPrebidTag: this.multiAdUnitsPrebidTag,
                prebidUrl: "https://static.sunmedia.tv/sdks/3p/prebid-js/0.15.0/sm-prebid.js",
                tcData: this.tcData,
                $videoSlot: this.environmentVars ? .videoSlot
            }), this.subscribeToAdControllerEvents(), this.plugin.initAdController()
        }
        async startAdController() {
            const {
                adTags: t,
                availableFormats: e,
                bannedSizes: i,
                it: n,
                options: s,
                publisher: r,
                adpone_sid: a
            } = this.config;
            await this.adControllerInstance.start({
                adTagFeed: t,
                options: s,
                availableFormats: e,
                bannedSizes: i,
                geoTarget: this.geoTarget,
                sellerIds: {
                    sunmedia: r,
                    adpone: a
                },
                instance: {
                    it: n,
                    index: this.instanceIndex
                }
            })
        }
        subscribeToAdControllerEvents() {
            this.adCtrlSubscriber ? .unsubscribeAll(), this.adCtrlSubscriber = this.eventSubscriberFactory(this.adControllerInstance, {
                emitHooks: !0
            });
            const t = {
                [de]: this.onAdRequest,
                [ce]: h,
                [oe]: this.onSDKNoMoreTags,
                [he]: this.onSDKUpdateOptions,
                [se]: this.onAdPreload,
                [ae]: this.onRenderPrebidDisplay,
                [re]: this.onResizeProgrammaticDisplay,
                [ue]: h,
                [pe]: h,
                [me]: h,
                [E.AD_LOADED]: this.onAdLoaded,
                [E.AD_STARTED]: this.onAdStarted,
                [E.AD_PAUSED]: this.onAdPaused,
                [E.AD_PLAYING]: this.onAdPlaying,
                [E.AD_CLICK_THRU]: h,
                [E.AD_IMPRESSION]: h,
                [E.AD_VIDEO_START]: h,
                [E.AD_VIDEO_FIRST_QUARTILE]: h,
                [E.AD_VIDEO_MIDPOINT]: h,
                [E.AD_VIDEO_THIRD_QUARTILE]: h,
                [E.AD_VIDEO_COMPLETE]: this.onAdVideoComplete,
                [E.AD_SKIPPED]: this.onAdSkipped,
                [E.AD_STOPPED]: this.onAdStopped,
                [E.AD_ERROR]: this.onAdError,
                [E.AD_EXPANDED_CHANGE]: this.onAdExpandedChange
            };
            this.adCtrlSubscriber.subscribe(t);
            const e = {
                [le]: this.onSMMaxRequestsReached
            };
            this.adCtrlSubscriber.subscribeOnce(e)
        }
        onAdRequest(t) {
            fe(t ? .isSunmedia) || (t.isSunmedia ? this.sunmediaRequestCount += 1 : this.clientRequestCount += 1)
        }
        onSMMaxRequestsReached() {
            this.stopLoop(), this.endAd()
        }
        onSDKNoMoreTags() {
            this.adControllerInstance.currentAd = null, this.endAd()
        }
        onSDKUpdateOptions(t) {
            this.plugin.updateConfigOptions(t)
        }
        onAdPreload() {
            this.plugin.adPreload()
        }
        onAdLoaded() {
            this.state = 3;
            const {
                currentAd: t
            } = this.adControllerInstance;
            if (!t.isIndisplay) return t.isPrebidDisplay ? (this.plugin.programmaticDisplayLoaded(), void this.startAd()) : void this.plugin.startAd();
            this.startAd()
        }
        startAd() {
            this.state >= 4 || (this.state = 4, this.adControllerInstance.startAd())
        }
        onAdStarted() {
            this.state = 5, this.adControllerInstance.currentAd.initialAdTag.isSunmedia ? this.sunmediaAdCount += 1 : this.clientAdCount += 1, this.plugin.adStarted()
        }
        onAdPaused() {
            this.state = 7
        }
        onAdPlaying() {
            this.state = 6
        }
        onAdVideoComplete() {
            this.state = 8
        }
        onAdSkipped() {
            this.plugin.adSkipped(), this.endAdByUserInteraction()
        }
        endAdByUserInteraction() {
            this.stopLoop(), this.endAd({
                userInteraction: !0
            })
        }
        onAdStopped() {
            this.plugin.manageAdStopped() ? this.unmountAdContainer() : this.endAd()
        }
        onAdError() {
            const t = this.adControllerInstance.hasActuallyStarted();
            this.plugin.adError(t), t ? this.endAd() : (this.reset(), this.adControllerInstance.continueLoadingAds())
        }
        onAdExpandedChange() {
            this.plugin.adExpandedChange()
        }
        onRenderPrebidDisplay({
            width: t,
            height: e
        }) {
            if (this.adControllerInstance.currentAd && t && e) {
                const i = Et("ratio")(t, e);
                this.adControllerInstance.currentAd.dimensions = {
                    width: t,
                    height: e,
                    ratio: i
                }, this.plugin.prebidDisplayRendered()
            }
        }
        onResizeProgrammaticDisplay() {
            this.plugin.programmaticDisplayLoaded()
        }
        endAd({
            userInteraction: t = !1
        } = {}) {
            if (this.adEnded) return;
            this.hooksManager.beforeEndAd({
                userInteraction: t
            }), this.adEnded = !0;
            const {
                currentAd: e
            } = this.adControllerInstance || {}, i = o(fe(e));
            if (this.itShouldLoop(i)) return this.reset(), this.unmountAdContainer(), void(!i || this.config.loop.autoStart ? this.restart() : Ge(this.wind, "scroll", this.restart));
            this.plugin.manageAdEnded() || this.close({
                adHasBeenPlayed: i,
                userInteraction: t
            })
        }
        close({
            adHasBeenPlayed: t,
            userInteraction: e,
            err: i
        } = {}) {
            9 !== this.state && (this.hooksManager.beforeClose({
                adHasBeenPlayed: t,
                err: i
            }), this.state = 9, this.adControllerInstance ? .destroy(), this.unmountAdContainer(), this.removeElements(e), this.unregister(), this.hooksManager.afterClose())
        }
        removeElements(t) {
            this.plugin.removeElements(t), this.plugin.noMoreContentAvailable() && Ie(this.config.options.removeMs).then(() => {
                this.hooksManager.noMoreContentAvailable()
            })
        }
        unregister() {
            try {
                Ce.removeByApi(this.api), j.info("Instance closed", this)
            } catch (t) {
                j.error("On instance close", t)
            }
        }
    }
    class ur extends Je {
        hasNativeSupport() {
            return !0
        }
        createObserver(t) {
            const e = this.getTarget(),
                i = this.options || {
                    threshold: [0, 1]
                },
                n = new IntersectionObserver(e => {
                    const [i, ...n] = e;
                    t(i)
                }, i);
            return n.observe(e), n
        }
        static createObservable(...t) {
            return new ur(...t)
        }
    }
    const pr = {
        DEBUG: !1,
        placement: {
            width: 300,
            height: 250
        },
        it: function() {
            let t = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                const i = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" === e ? i : 3 & i | 8).toString(16)
            })
        }(),
        timeToFindCmpFunction: {
            attempts: 11,
            delay: 200
        },
        trackers: null,
        options: {
            skip: !0,
            skipTime: 5,
            audio: !1,
            margin: 0,
            css: "",
            lastMessage: !0,
            restart: !1,
            slotRatio: "6:5",
            defaultAdRatio: "6:5",
            programmaticDisplayRatio: "16:9",
            mainContainer: {
                backgroundColor: "transparent"
            },
            googleIMA: {
                enabled: !1,
                encapsulateIMA: !1
            },
            videoplazaWaterfall: !1,
            blockDisplayAds: !1,
            lazyStart: {
                enabled: !0,
                threshold: 0,
                rootMargin: "150px"
            },
            hidePlayerCounter: !0
        },
        loop: {
            enabled: !1
        },
        tags: []
    };

    function mr(t, {
        maxWidth: e,
        maxHeight: i
    }, {
        scalable: n
    } = {}) {
        const s = { ...t
        };
        (o(s.width && s.height) || n) && (s.width = e, s.height = Et("height")(e, s.ratio));
        const r = function({
            dimensions: t = {},
            maxWidth: e,
            maxHeight: i
        }) {
            const {
                ratio: n
            } = t, s = { ...t
            };
            return o(n) || (mt(e) && s.width > e && (s.width = e, s.height = Et("height")(e, n)), mt(i) && s.height > i && (s.width = Et("width")(i, n), s.height = i)), s
        }({
            dimensions: s,
            maxWidth: e,
            maxHeight: i
        });
        return {
            width: Ye(r.width, 2),
            height: Ye(r.height, 2),
            ratio: r.ratio
        }
    }

    function Ar(t) {
        const e = Math.ceil(t / 1e3),
            i = [];
        for (let n = 0; n <= t; n += e) i.push(n / t);
        return i
    }
    const gr = D(2, (t, e) => {
        if (fe(t)) throw new Error("object argument");
        if (!a(e)) throw new Error("function argument");
        return e.bind(t)
    });

    function fr(t) {
        return w(t) ? Object.entries(t).map(([t, e]) => ({
            [t]: e
        })) : []
    }

    function Er(t, e) {
        const i = a(n = e) && a(n.compose) ? e.compose : e;
        var n;
        return o((t => P(t) || a(t))(i)) || (t.props = Y(t.props, i.props), t.methods = Object.assign(t.methods || {}, i.methods), t.init = (t.init || []).concat(i.init || [])), t
    }

    function br(...t) {
        return w(this) && t.unshift(this),
            function(t) {
                const e = function(t) {
                    return function(...e) {
                        const i = Object.create(t.methods || null);
                        return Object.assign(i, t.props), (t.init || []).forEach(t => {
                            t.call(i, ...e)
                        }), i
                    }
                }(t);
                return e.compose = function(...t) {
                    return br.apply(this, t)
                }, Object.assign(e.compose, t), e
            }(t.reduce(Er, {}))
    }
    const vr = br,
        yr = {
            build: h,
            mount: h,
            adContainerMounted: h,
            initAdController: h,
            createObservables: h,
            getContainerWidth: () => 0,
            getAdContainerParent: h,
            updateAdPosition: h,
            adPreload: h,
            startAd: h,
            prebidDisplayRendered: h,
            programmaticDisplayLoaded: h,
            adStarted: h,
            adSkipped: h,
            manageAdStopped: () => !1,
            manageAdEnded: () => !1,
            adError: h,
            updateConfigOptions: h,
            adExpandedChange: h,
            getAvailablePositions: h,
            reset: h,
            removeElements: h,
            noMoreContentAvailable: () => !0,
            shouldValidateConsent: () => !0
        },
        Tr = {
            init() {
                this.emitter = new f
            },
            props: {
                emitter: null
            },
            methods: {
                emit(t, e) {
                    this.emitter.emit(t, e)
                },
                on(t, e) {
                    this.emitter.on(t, e)
                },
                off(t, e) {
                    this.emitter.off(t, e)
                }
            }
        },
        Cr = `\n  .${W}-it-main-container {\n    margin: auto;\n    position: relative;\n  }\n`,
        Ir = {
            props: {
                $mainContainer: null
            },
            methods: {
                mountFixedPosition(t) {
                    const {
                        backgroundColor: e
                    } = this.outstreamInstance.config.options.mainContainer, i = this.calculateMainContainerWidth(), n = function(t, {
                        $fixedPositionParent: e,
                        width: i
                    }) {
                        const {
                            config: {
                                options: n
                            },
                            wind: s
                        } = t, r = pt(s), a = Et("height")(i, n.slotRatio);
                        let o = Math.min(r, a);
                        const d = window.getComputedStyle(e).maxHeight,
                            c = parseFloat(d);
                        return d && mt(c) && (o = Math.min(o, c)), o
                    }(this.outstreamInstance, {
                        $fixedPositionParent: t,
                        width: i
                    }), {
                        style: s,
                        mainContainer: r
                    } = function({
                        api: t,
                        config: e,
                        device: i,
                        instanceIndex: n
                    }, s) {
                        const r = {
                            name: "it-main-container",
                            id: t,
                            attributes: {
                                data: {
                                    it: e.it,
                                    device: i,
                                    index: n
                                }
                            },
                            style: s
                        };
                        return {
                            style: Cr,
                            mainContainer: r
                        }
                    }(this.outstreamInstance, {
                        width: i,
                        height: n,
                        overflow: "hidden",
                        "background-color": e
                    });
                    ht(Rt, s, {
                        concat: !0,
                        $refContainer: t
                    }), this.$mainContainer = ct(r), lt(t, this.$mainContainer)
                },
                calculateMainContainerWidth() {
                    const {
                        margin: t
                    } = this.outstreamInstance.config.options;
                    return this.getContainerWidth() - t
                },
                getMainContainerDimensions() {
                    if (o(this.$mainContainer)) return {};
                    const t = parseFloat(this.$mainContainer.style.width),
                        e = parseFloat(this.$mainContainer.style.height);
                    return {
                        width: t,
                        height: e,
                        ratio: Et("ratio")(t, e)
                    }
                },
                getFixedPosition() {
                    return function(t) {
                        if (!X(t)) return {};
                        const {
                            top: e,
                            left: i,
                            width: n,
                            height: s
                        } = t.getBoundingClientRect(), {
                            x: r,
                            y: a
                        } = function() {
                            let {
                                x: t,
                                y: e
                            } = {};
                            if (void 0 !== ot.pageXOffset) {
                                const i = "CSS1Compat" === (ot.document.compatMode || "") ? ot.document.documentElement : ot.document.body;
                                t = i.scrollLeft, e = i.scrollTop
                            } else t = ot.pageXOffset, e = ot.pageYOffset;
                            return {
                                x: t,
                                y: e
                            }
                        }();
                        return {
                            top: a + e,
                            left: r + i,
                            width: n,
                            height: s
                        }
                    }(this.$mainContainer)
                },
                obtainAdFixedPosition() {
                    const {
                        width: t,
                        height: e
                    } = this.calculateAdDimensions();
                    return {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "margin-top": -e / 2,
                        "margin-left": -t / 2,
                        width: t,
                        height: e,
                        visibility: "visible"
                    }
                },
                calculateAdDimensions() {
                    const {
                        adControllerInstance: t,
                        wind: e
                    } = this.outstreamInstance, {
                        currentAd: i
                    } = t || {};
                    if (o(i ? .dimensions)) return {
                        width: 0,
                        height: 0
                    };
                    const {
                        width: n,
                        height: s
                    } = this.getMainContainerDimensions(), r = pt(e), a = Math.min(r, s);
                    return mr(i ? .dimensions, {
                        maxWidth: n,
                        maxHeight: a
                    }, {
                        scalable: i ? .scalable
                    })
                },
                obtainReminderFixedDimensions(t) {
                    const {
                        width: e,
                        height: i,
                        scalable: n
                    } = t, {
                        config: s
                    } = this.outstreamInstance;
                    let r;
                    const {
                        width: a,
                        height: d
                    } = ut(this.$mainContainer);
                    if (o(mt(e) && mt(i))) {
                        const {
                            mainRatio: t
                        } = s.options.reminder;
                        r = {
                            ratio: t,
                            width: a,
                            height: Et("height")(a, t)
                        }
                    } else r = {
                        width: e,
                        height: i,
                        ratio: Et("ratio")(e, i)
                    };
                    const c = mr(r, {
                        maxWidth: Math.min(a),
                        maxHeight: Math.min(d)
                    }, {
                        scalable: n
                    });
                    return {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: c.width,
                        height: c.height
                    }
                },
                showFixedPositionBackground() {
                    const {
                        config: t
                    } = this.outstreamInstance, {
                        backgroundColor: e
                    } = t.options.mainContainer;
                    et(this.$mainContainer, {
                        "background-color": e
                    })
                },
                hideFixedPositionBackground() {
                    et(this.$mainContainer, {
                        "background-color": "transparent"
                    })
                },
                removeMainContainer() {
                    Z(this.$mainContainer), this.$mainContainer = null
                }
            },
            hooks: {
                beforeAlternativeMounted() {
                    this.hideFixedPositionBackground()
                }
            }
        },
        Sr = li({
            tag: "sun-restart",
            style: "\n  :host {\n    background: #000 no-repeat 50% 50%;\n    background-color: rgb(245, 245, 245);\n  }\n\n  :host div {\n    position: absolute;\n    background-size: contain;\n    background-repeat: no-repeat;\n    cursor: pointer;\n  }\n  \n  :host .restart {\n    top: 50%;\n    left: 50%;\n    width: 23%;\n    height: 15%;\n    min-width: 100px;\n    min-height: 49px;\n    transform: translateY(-50%) translateX(-50%);\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAACDCAMAAAAJdXayAAAAwFBMVEUAAAD9/f38/PwAAAAHBwf7+/v4+PiIiIgZGRkiIiISEhL6+vr5+fnp6elLS0sqKirn5+fW1taAgID39/f19fXv7+/Dw8M9PT3y8vLu7u7f39+np6deXl7c3Ny/v7+tra3k5OTQ0NCUlJT29vbr6+sAAAAAAAAAAAAAAAAAAADw8PDi4uLMzMzIyMi6urp4eHgzMzMODg7FxcWbm5uOjo5vb2/Y2Nizs7NRUVFERESioqKfn59VVVVkZGT+/v7///8ErcY9AAAAPnRSTlOA/v0AhPz5roiKh/v66paN6Nuq+PXwzpL07+K+neDMwefXtPfseHBAIAjx5dTSyaePhtC3sKPdxZiUu7man5f3stsAAARKSURBVHja7dxZW9pQEAbgmUACgYQdZJdN2VTEglptv/n//6pA+6itymJOb07mveaG75lMhrNAiURiOr4k9anL8XQT0iaoyQWpvS4m26AmpA6aJGiq9XSEiymNSR1hTNrHj6ExKaWUUkoppZRSSimllEmZ9rdasTnv9ebF7uAxQ+q99LpbKDPe4nLYXWtab2VSnTLjIzzsL5akdh5rLymxO6wWer1CWB26/JJV9zspeuy72GIvrC18epUv1cKAAQiyVzmKudyVBwG43F+k6T0/1QmwVb6LdVX5rRlDwGFquad/NRgAz87TFFfrngPA6ZVor2SqsPtcs03xNPAAOIVNNR2SWYUMQSVFMZS/c0VQOfeP+/RDBYKg5lPc+PfutpxydKx2gUXcqyTFS24EIFtLn1KCNReC5hnFSW7Op7ec5LMHcYq3FB/+iAXlEp3qKYBwMz5jwm0HgrBNp1tUIdyPTVLXjqDcpq9IBRD3huJhkBVUSl8fviT4RnHQ9oBsir7qaROz90j28+cQ7ibpq5Y1FnRi0KZajmAU5XtmRoBr/8OXqwKVHEXxowJUrZ87r1icB4rmhsHXZLfHACjkKZr8CChbXlJFwElRVCtHcEU2y2UFvSVFtQyBrNUl1YVwiaJbMWDzfJ6pAyGZ0ABmFu+NlhhsZgJ6YvCCrFUEhj6ZcOvB4naeKQNFMqMD1K1dFv7JQInMWAGOtdvHN0A2TWbkHaBFlioAIZlSBZpkKQ/okil9oE52SjOwIFMGgGtpN/8BsE+mnIHZ0l8xAyBLxiQd5hJZ6QYYkjke8zlZyXD7rbOtq3f3wIjMaTDfk5WKZiefkNmuQcoR/CYb+MOjyArMc7IJyweyWlHvpPiDnBZGfsMUySbJO8g/UKPoKoBlb71lKP/o+RRdANg2R7U9+Qu3jUzmwJoscw55w0wh5AC27pRipiOvcE8mfAOy9q0e5OvyopojE4p2rkeVWP7gFBkxAzpkoZcZoZYkE25d+156O35DdhpkxhPg/iAb/fRkY7gmM3pA1b5evvMMU5PBRj4L1MhOyaJIJ0NmtAC29vre2ajhmwq9AplZ+uQZtYKl7zzD0gUgG787jqd7dsB3pA7JN4B6rK/3n3DOvEvqkHUQh5sL0eULEMf+uzCRJfssaFp8ItiUlgtUrT2UaDInkcDSUyymvNwpfiC1X3JVh/BVDK5/RtQKII5d28P/Q/rBgzh96/aoTPNrLoSLeVJ7tWcscO90gNrvrFuGYPigfXyvzHODAZRj+Y9kJ0jtYnI7urKyz21rBhHwaKCP3efyg2aALa+r6yqfSH4f9KsOdoJrHQreyd00C2Gj7jn4gxstfeg+UKowXnH9uq37dweCciqdVk5T+sxZqzif31+fl840I6WUUkoppZRSSimllIruktRRMY1JHWFM0wtSB11MKTEhddAkQYnERGvqgItJYhtUYjrWjr7H5Xi6CekXgBywZ8giZv8AAAAASUVORK5CYII=);\n  }\n",
            template: '\n    <div class="restart"></div>\n    <sun-close part="close-button" style="position: absolute; top: 10px; right: 10px; width: 26px; height: 26px;">\n    </sun-close>\n  ',
            setup() {
                Ai([pi])
            },
            mounted() {
                this.shadowRoot.querySelector("sun-close").addEventListener("click", this.closeButtonListener), this.shadowRoot.querySelector(".restart").addEventListener("click", this.restartButtonListener)
            },
            methods: {
                closeButtonListener() {
                    this.dispatchEvent(new CustomEvent(Dt))
                },
                restartButtonListener() {
                    this.dispatchEvent(new CustomEvent(St))
                }
            }
        }),
        Dr = {
            init() {
                const {
                    config: t
                } = this.outstreamInstance;
                this.restartEnabled = Boolean(t.options.restart)
            },
            props: {
                restartEnabled: !1
            },
            methods: {
                itShouldDisplayRestart() {
                    return this.restartEnabled && this.outstreamInstance.getPlayedAdCount()
                },
                displayRestart(t, e = h) {
                    this.outstreamInstance.reset(), this.outstreamInstance.unmountAdContainer();
                    const i = (Ai([Sr]), ct({
                        type: "sun-restart",
                        name: "restart",
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }
                    }));
                    i.addEventListener(Dt, () => {
                        Z(i), this.restartEnabled = !1, this.outstreamInstance.close({
                            adHasBeenPlayed: !1,
                            userInteraction: !0
                        })
                    }, {
                        once: !0
                    }), i.addEventListener(St, () => {
                        Z(i), p(e)(), this.outstreamInstance.restart()
                    }, {
                        once: !0
                    }), lt(t, i)
                }
            },
            hooks: {
                beforeSMMaxRequestsReached() {
                    this.restartEnabled = !1
                }
            }
        },
        wr = {
            OPPORTUNITY: {
                key: "opportunity",
                val: "op"
            },
            REQUEST: {
                key: "request",
                val: "req"
            },
            REQUEST_ERROR: {
                key: "requestError",
                val: "reqe"
            },
            VAST_DROP: {
                key: "vastDrop",
                val: "vd"
            },
            MAX_REQUESTS_REACHED: {
                key: "maxRequestsReached",
                val: "maxreq"
            },
            EFFECTIVE: {
                key: "effective",
                val: "ef"
            },
            INVENTORY: {
                key: "inventory",
                val: "inv"
            },
            UNFILLED: {
                key: "unfilled",
                val: "unf"
            },
            START: {
                key: "start",
                val: "st"
            },
            IMPRESSION: {
                key: "impression",
                val: "imp"
            },
            FIRST_QUARTILE: {
                key: "firstQuartile",
                val: "fq"
            },
            MIDPOINT: {
                key: "midpoint",
                val: "mp"
            },
            THIRD_QUARTILE: {
                key: "thirdQuartile",
                val: "tq"
            },
            COMPLETE: {
                key: "complete",
                val: "co"
            },
            SKIP: {
                key: "skip",
                val: "sk"
            },
            CLICK: {
                key: "click",
                val: "clk"
            },
            MUTE: {
                key: "mute",
                val: "mu"
            },
            UNMUTE: {
                key: "unmute",
                val: "um"
            },
            PAUSE: {
                key: "pause",
                val: "pa"
            },
            REWIND: {
                key: "rewind",
                val: "rw"
            },
            PLAYER_EXPAND: {
                key: "playerExpand",
                val: "pe"
            },
            PLAYER_COLLAPSE: {
                key: "playerCollapse",
                val: "pc"
            },
            ACCEPT_INVITATION_LINEAR: {
                key: "acceptInvitationLinear",
                val: "ai"
            },
            TIME_SPENT_VIEWING: {
                key: "timeSpentViewing",
                val: "ts"
            },
            OTHER_AD_INTERACTION: {
                key: "otherAdInteraction",
                val: "oa"
            },
            PROGRESS: {
                key: "progress",
                val: "pr"
            },
            CREATIVE_VIEW: {
                key: "creativeView",
                val: "cv"
            },
            ACCEPT_INVITATION: {
                key: "acceptInvitation",
                val: "ac"
            },
            MINIMIZE: {
                key: "minimize",
                val: "mi"
            },
            CLOSE: {
                key: "close",
                val: "cl"
            },
            OVERLAY_VIEW_DURATION: {
                key: "overlayViewDuration",
                val: "ov"
            },
            VIEWABILITY: {
                key: "viewability",
                val: "vw"
            },
            ERROR: {
                key: "error",
                val: "err"
            },
            RESUMED: {
                key: "resumed",
                val: "rs"
            },
            CLOSE_MODE: {
                key: "closeMode",
                val: "mc"
            },
            NOVIEWABILITY: {
                key: "noviewability",
                val: "nvw"
            },
            AD_LOADED: {
                key: "adLoaded",
                val: "adl"
            },
            AD_STARTED: {
                key: "AdStarted",
                val: "adt"
            },
            AD_RESUMED: {
                key: "adResumed",
                val: "adr"
            },
            AD_STOPPED: {
                key: "adStopped",
                val: "ads"
            },
            AD_PLAYING: {
                key: "adPlaying",
                val: "adp"
            },
            AD_EXPAND: {
                key: "adExpand",
                val: "ad"
            },
            AD_COLLAPSE: {
                key: "adCollapse",
                val: "ao"
            },
            AD_SIZE_CHANGE: {
                key: "adSizeChange",
                val: "asz"
            },
            AD_EXPANDED_CHANGE: {
                key: "adExpandedChange",
                val: "aec"
            },
            AD_VIDEO_START: {
                key: "adVideoStart",
                val: "avs"
            },
            AD_VIDEO_COMPLETE: {
                key: "adVideoComplete",
                val: "avc"
            },
            AD_VOLUME_CHANGE: {
                key: "adVolumeChange",
                val: "avh"
            },
            AD_SECOND_CREATIVE_OPENED: {
                key: "AdSecondCreativeOpened",
                val: "asco"
            },
            AD_ELAPSED_TIME: {
                key: "AdElapsedTime",
                val: "aet"
            },
            NATIVE_REQUEST: {
                key: "nativeRequest",
                val: "nreq"
            },
            NATIVE_IMPRESSION: {
                key: "nativeImpression",
                val: "nimp"
            },
            NATIVE_UNFILLED: {
                key: "nativeUnfilled",
                val: "nunf"
            },
            NATIVE_CREATIVE_IMPRESSION: {
                key: "nativeCreativeImpression",
                val: "ncimp"
            },
            NATIVE_CREATIVE_UNFILLED: {
                key: "nativeCreativeUnfilled",
                val: "ncunf"
            },
            NATIVE_CREATIVE_CLICK: {
                key: "nativeCreativeClick",
                val: "ncclk"
            },
            PLAYER_IMPRESSION: {
                key: "playerImpression",
                val: "vimp"
            },
            CONTAINER_SIZE_ERROR: {
                key: "sizerr",
                val: "sizerr"
            },
            ALTERNATIVE: {
                key: "alternative",
                val: "alt"
            },
            REMINDER: {
                key: "reminder",
                val: "rem"
            }
        },
        Pr = {},
        Rr = {};
    Object.keys(wr).forEach(t => {
        const e = wr[t],
            {
                key: i,
                val: n
            } = e;
        Pr[t] = i, Rr[i] = n
    });
    const kr = Object.assign({}, Pr);

    function Mr(t, e) {
        fe(t) || r(rt(J(ii("url")), k(t => t ? .event === e))(t), function(t) {
            if (o(a(t))) throw new Error("unary argument must be a function");
            return e => t(e)
        }(Gi))
    }
    const Or = {
            hooks: {
                beforeAdImpression(t) {
                    Mr(t.config.trackers, kr.IMPRESSION)
                },
                beforeAdVideoStart(t) {
                    Mr(t.config.trackers, kr.START)
                },
                beforeAdVideoFirstQuartile(t) {
                    Mr(t.config.trackers, kr.FIRST_QUARTILE)
                },
                beforeAdVideoMidpoint(t) {
                    Mr(t.config.trackers, kr.MIDPOINT)
                },
                beforeAdVideoThirdQuartile(t) {
                    Mr(t.config.trackers, kr.THIRD_QUARTILE)
                },
                beforeAdVideoComplete(t) {
                    Mr(t.config.trackers, kr.COMPLETE)
                },
                beforeAdClickThru(t) {
                    Mr(t.config.trackers, kr.CLICK)
                },
                beforeAdSkipped(t) {
                    Mr(t.config.trackers, kr.SKIP)
                },
                beforeAdPlaying(t) {
                    Mr(t.config.trackers, kr.RESUMED)
                },
                beforeAdPaused(t) {
                    Mr(t.config.trackers, kr.PAUSE)
                },
                beforeSMAdMuted(t) {
                    Mr(t.config.trackers, kr.MUTE)
                },
                beforeSMAdUnmuted(t) {
                    Mr(t.config.trackers, kr.UNMUTE)
                },
                beforeSMVastError(t, e, i) {
                    i instanceof Nn && Mr(t.config.trackers, kr.VAST_DROP)
                }
            }
        },
        _r = li({
            tag: "sun-last-message",
            style: "\n  :host {\n    background: black;\n    position: relative;\n    display: block;\n  }\n\n  @keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n\n  :host span {\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    color: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -ms-transform: translateY(-50%) translateX(-50%);\n    transform: translateY(-50%) translateX(-50%);\n    animation: fadeIn 2s;\n  }\n",
            template: "\n   <span> Thanks for watching </span>\n  "
        }),
        Nr = t => E.AD_ERROR === t,
        Lr = () => function(t = {}) {
            const e = [t, ...t.mixins || []];
            return vr({
                init(i) {
                    this.outstreamInstance = i, this.name = i ? .config ? .sdkType, this.pluginDefinition = t;
                    const n = function(t, e) {
                        const i = fe(e) ? zi : function(t) {
                            return J(gr(t))
                        }(e);
                        return rt(J(i), Li(fr), J(({
                            hooks: t
                        }) => t), k(P))(t)
                    }(e, this);
                    i.hooksManager.addMany(n)
                },
                methods: { ...yr
                }
            }).compose(...e)
        }({
            mixins: [Tr, Ir, Dr, Or],
            init() {
                this.eventSubscriberFactory = N(this)
            },
            props: {
                eventSubscriberFactory: null,
                adCtrlPropagator: null,
                adErrorOccurred: !1,
                _slotDimensions: null,
                _stickySubscription: null
            },
            methods: {
                mount() {
                    const {
                        environmentVars: {
                            slot: t
                        },
                        integrationScript: e
                    } = this.outstreamInstance;
                    this.mountFixedPosition(e.$container), this._slotDimensions = this.getMainContainerDimensions(), Array.from(t.children).forEach(t => {
                        t !== this.$mainContainer && (t.style.display = "none")
                    });
                    const {
                        $container: i
                    } = e;
                    et(i, {
                        "min-height": this._slotDimensions.height
                    })
                },
                _obtainAdSlotPosition() {
                    const {
                        adControllerInstance: t,
                        wind: e
                    } = this.outstreamInstance, {
                        currentAd: i
                    } = t, {
                        width: n,
                        height: s
                    } = this._slotDimensions, {
                        width: r,
                        height: a
                    } = mr(function({
                        dimensions: t,
                        linearCreative: e
                    }) {
                        const {
                            width: i,
                            height: n
                        } = e ? .adMedia || {};
                        return t.width && t.height || o(i && n) ? t : {
                            width: i,
                            height: n,
                            ratio: Et("ratio")(i, n)
                        }
                    }(i), {
                        maxWidth: n,
                        maxHeight: Math.min(pt(e), s)
                    }, {
                        scalable: i.scalable
                    });
                    return {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: r,
                        height: a,
                        visibility: "visible"
                    }
                },
                _applySticky() {
                    this._stickySubscription ? .unsubscribe(), et(this.$mainContainer, {
                        transform: ""
                    });
                    const {
                        $container: t
                    } = this.outstreamInstance.integrationScript;
                    this._stickySubscription = function(t, e) {
                        if (o(t) || o(e)) return null;
                        const {
                            top: i,
                            height: n
                        } = t.getBoundingClientRect(), {
                            top: s,
                            height: r
                        } = e.getBoundingClientRect(), a = s - i, d = Math.min(n, pt() - i) - r;
                        return d <= 0 ? null : (et(e, {
                            "will-change": "transform"
                        }), ur.createObservable(t, {
                            threshold: Ar(n)
                        }).subscribe(t => {
                            if (o(t.isIntersecting)) return;
                            const i = t.intersectionRect.top - t.boundingClientRect.top,
                                n = Math.min(d, Math.max(0, i));
                            et(e, {
                                transform: `translate3d(0, ${(n-a).toFixed(2)}px, 0)`
                            })
                        }))
                    }(t, this.$mainContainer)
                },
                getContainerWidth() {
                    const {
                        integrationScript: t
                    } = this.outstreamInstance;
                    return ut(t.$container) ? .width
                },
                getAdContainerParent() {
                    return this.$mainContainer
                },
                createObservables() {},
                shouldValidateConsent: () => !1,
                updateAdPosition(t, e = !1) {
                    const {
                        state: i,
                        adControllerInstance: n,
                        adPosition: s,
                        $adContainer: r
                    } = this.outstreamInstance;
                    if (!(o(r) || o(n ? .currentAd ? .dimensions && i > 2 && i < 9) && t !== wt)) switch (t) {
                        case wt:
                            {
                                if (s === wt && o(e)) break;
                                const t = this.getFixedPosition();et(r, t, !0),
                                this.outstreamInstance.adPosition = wt;
                                break
                            }
                        case Pt:
                            {
                                if (s === Pt && o(e)) break;
                                const t = this._obtainAdSlotPosition();this.outstreamInstance.batchMoveAdChanges(Pt, t, () => {
                                    this.hideFixedPositionBackground(), et(this.$mainContainer, {
                                        width: t.width,
                                        height: t.height
                                    }), et(r, t, !0), n.resizeAd(t.width, t.height), this._applySticky()
                                }),
                                this.outstreamInstance.adPosition = Pt;
                                break
                            }
                    }
                },
                unsubscribeAll() {},
                removeElements() {
                    this._stickySubscription ? .unsubscribe(), this._stickySubscription = null, this.removeMainContainer();
                    const {
                        environmentVars: {
                            slot: t
                        }
                    } = this.outstreamInstance;
                    Array.from(t.children).forEach(t => {
                        t.style.display = ""
                    })
                },
                initAdController() {
                    this.subscribeToPropagateVPAIDEvents()
                },
                subscribeToPropagateVPAIDEvents() {
                    this.adCtrlPropagator ? .unsubscribeAll(), this.adCtrlPropagator = this.eventSubscriberFactory(this.outstreamInstance.adControllerInstance, {
                        propagate: !0
                    });
                    const t = { ...rt(R((t, e) => ({ ...t,
                            [e]: h
                        }), {}), Vt(Nr))(E)
                    };
                    this.adCtrlPropagator.subscribe(t)
                },
                programmaticDisplayLoaded() {
                    this.updateAdPosition(Pt)
                },
                startAd() {
                    this.updateAdPosition(Pt)
                },
                getAvailablePositions() {
                    return {
                        mainPosition: {
                            $container: this.$mainContainer
                        }
                    }
                },
                manageAdEnded() {
                    if (this.outstreamInstance.config.options.lastMessage) {
                        const t = (Ai([_r]), ct({
                            type: "sun-last-message",
                            name: "last-message",
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }));
                        return this.$mainContainer.appendChild(t), !0
                    }
                    return !!this.itShouldDisplayRestart() && (this.displayRestart(this.$mainContainer), !0)
                }
            },
            hooks: {
                beforeAdImpression() {
                    this.adErrorOccurred = !1
                },
                beforeAdError() {
                    this.unsubscribeAll(), this.adErrorOccurred = !0
                },
                beforeEndAd() {
                    this.unsubscribeAll()
                },
                beforeClose(t, e, i = {}) {
                    this.unsubscribeAll();
                    const {
                        adHasBeenPlayed: n = !1,
                        err: s
                    } = i, r = s || this.adErrorOccurred;
                    (o(n) || r) && Ie(200).then(() => {
                        this.emitter.emit(E.AD_ERROR)
                    })
                }
            }
        });
    class Ur extends f {
        constructor(t = {}) {
            super(), ({
                currentScript: this.currentScript
            } = t), this.eventSubscriberFactory = N(this), this.inbannerInstance = null, this.pluginSubscriber = null, this.playerSkipped = !1, this.adVolume = 0
        }
        subscribeToPluginEvents() {
            this.pluginSubscriber ? .unsubscribeAll(), this.pluginSubscriber = this.eventSubscriberFactory(this.inbannerInstance.plugin);
            const t = { ...R((t, e) => ({ ...t,
                    [e]: () => {
                        this.emit(e)
                    }
                }), {}, E),
                [E.AD_LOADED]: this.onAdLoaded,
                [E.AD_SKIPPED]: this.onAdSkipped
            };
            this.pluginSubscriber.subscribe(t)
        }
        onAdLoaded() {
            this.startAd(), this.emit(E.AD_LOADED)
        }
        onAdSkipped() {
            this.emit(E.AD_SKIPPED), o(this.playerSkipped) && this.emit(E.AD_STOPPED)
        }
        getCreative() {
            return this.inbannerInstance ? .adControllerInstance ? .currentAd ? .linearCreative
        }
        handshakeVersion(t) {
            return this.emit(E.AD_LOG, {
                method: "handshakeVersion",
                crea: this
            }), t || "2.0"
        }
        async initAd({
            width: t,
            height: e,
            viewMode: i,
            desiredBitrate: n,
            creativeData: s,
            environmentVars: r,
            config: a
        }) {
            try {
                j.setMode(a.DEBUG), j.info("initAd", a, {
                    width: t,
                    height: e,
                    viewMode: i,
                    desiredBitrate: n,
                    creativeData: s,
                    environmentVars: r
                });
                const c = function(t) {
                        const e = { ...t
                        };
                        t.vastXML && (e.adTags = [{
                            VAST: t.vastXML
                        }]);
                        const {
                            width: i,
                            height: n
                        } = t.placement, s = Et("ratio")(i, n);
                        return s && (e.options.slotRatio = s, e.options.defaultAdRatio = s), e
                    }(Y(pr, a)),
                    l = {
                        $element: this.currentScript,
                        $container: this.currentScript.parentElement
                    };
                this.inbannerInstance = (o = Lr, {
                    create: t => new hr(t, o, d)
                }).create({
                    api: L(),
                    config: c,
                    geoTarget: {},
                    instanceIndex: 0,
                    macroValues: {},
                    integrationScript: l
                });
                const {
                    audio: h
                } = this.inbannerInstance.config.options;
                this.adVolume = h ? 1 : 0, this.subscribeToPluginEvents(), await this.inbannerInstance.init({
                    slot: this.currentScript.parentElement
                }), this.inbannerInstance.config.options.hidePlayerCounter && (this.inbannerInstance.adControllerInstance.playerUI.controlElems.$counter.style.visibility = "hidden")
            } catch (t) {
                j.error("[initAd] Initializing outstream plugin", t), this.inbannerInstance ? .close(), this.emit(E.AD_ERROR, t)
            }
            var o, d
        }
        startAd() {
            const {
                options: t
            } = this.inbannerInstance.config, {
                lazyStart: e
            } = t, i = () => {
                this.getCreative() ? .setAdVolume(this.adVolume), this.inbannerInstance.startAd()
            };
            if (e.enabled) {
                const t = ur.createObservable(this.inbannerInstance.plugin.$mainContainer, e).subscribe(({
                    isIntersecting: e
                }) => {
                    e && (i(), t.unsubscribe())
                })
            } else i()
        }
        stopAd() {
            this.getCreative() ? .stopAd()
        }
        skipAd() {
            this.playerSkipped = !0, this.getCreative() ? .skipAd()
        }
        resizeAd(t, e, i) {
            this.getCreative() ? .resizeAd(t, e, i)
        }
        pauseAd() {
            this.getCreative() ? .pauseAd()
        }
        resumeAd() {
            this.getCreative() ? .resumeAd()
        }
        expandAd() {
            this.getCreative() ? .expandAd()
        }
        collapseAd() {
            this.getCreative() ? .collapseAd()
        }
        subscribe(t, e, i) {
            j.info(">>>>", t, e, i), this.on(e, t.bind(i))
        }
        unsubscribe(t, e) {
            this.off(e, t)
        }
        getAdLinear() {
            return this.getCreative() ? .getAdLinear()
        }
        getAdWidth() {
            return this.getCreative() ? .getAdWidth()
        }
        getAdHeight() {
            return this.getCreative() ? .getAdHeight()
        }
        getAdExpanded() {
            return this.getCreative() ? .getAdExpanded()
        }
        getAdSkippableState() {
            return this.getCreative() ? .getAdSkippableState()
        }
        getAdRemainingTime() {
            return this.getCreative() ? .getAdRemainingTime()
        }
        getAdCurrentTime() {
            return this.getCreative() ? .getAdCurrentTime()
        }
        getAdDuration() {
            return this.getCreative() ? .getAdDuration()
        }
        getAdCompanions() {
            return this.getCreative() ? .getAdCompanions()
        }
        getAdIcons() {
            return this.getCreative() ? .getAdIcons()
        }
        getAdVolume() {
            return this.getCreative() ? .getAdVolume()
        }
        setAdVolume(t) {
            this.adVolume !== t && (this.adVolume = t, this.getCreative() ? .setAdVolume(t))
        }
        getClickURL() {
            const {
                currentAd: t
            } = this.inbannerInstance ? .adControllerInstance || {}, e = k(({
                event: t
            }) => t === v, t ? .adTrackingEvents);
            return {
                clickThrough: t ? .adClickThroughUrl,
                clickTrackings: e
            }
        }
        getTrackings() {
            return this.inbannerInstance ? .adControllerInstance ? .currentAd ? .adTrackingEvents
        }
        getVASTInfo() {
            return this.inbannerInstance ? .adControllerInstance ? .currentAd
        }
    }
    const {
        currentScript: xr
    } = document;
    var Vr;
    Vr = {
        initSdk: t => function({
            currentScript: t,
            config: e
        }) {
            const i = new Ur({
                currentScript: t
            });
            return i.initAd({
                config: e
            }), i
        }({
            currentScript: xr,
            config: t
        })
    }, r(Vr, (t, e) => {
        window[e] = t
    })
})();