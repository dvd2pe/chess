(function() {
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var d = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function f() {
        f = function() {};
        d.Symbol || (d.Symbol = ba)
    }
    var ba = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }();

    function h(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function k(a) {
        if (!(a instanceof Array)) {
            a = h(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    f();
    var l = Symbol("VpaidModel");
    f();
    var ca = Symbol("VpaidModel");

    function n(a) {
        if (a !== ca) throw Error("Singleton");
        this.c = this.slot = this.vpaidObj = null;
        this.ha = this.ka = this.ja = this.b = !1;
        this.S = "";
        this.height = this.width = 0;
        this.K = "";
        this.A = "0";
        this.G = {};
        this.ca = !1
    }
    var da;
    d.Object.defineProperties(n, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[l] || (this[l] = new n(ca));
                return this[l]
            }
        },
        vpaidObj: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.vpaidObj
            },
            set: function(a) {
                n.a.vpaidObj = a
            }
        },
        width: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.width
            },
            set: function(a) {
                n.a.width = a
            }
        },
        height: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.height
            },
            set: function(a) {
                n.a.height = a
            }
        },
        K: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.K
            },
            set: function(a) {
                n.a.K =
                    a
            }
        },
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.A
            },
            set: function(a) {
                n.a.A = a
            }
        },
        slot: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.slot
            },
            set: function(a) {
                n.a.slot = a
            }
        },
        c: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.c
            },
            set: function(a) {
                n.a.c = a
            }
        },
        v: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.v
            },
            set: function(a) {
                n.a.v = a
            }
        },
        G: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.a.G
            },
            set: function(a) {
                n.a.G = a
            }
        }
    });
    f();
    var p = Symbol("VpaidEvent");
    f();
    var ea = Symbol("VpaidEvent");

    function q(a) {
        if (a !== ea) throw Error("Singleton");
        this.J = [];
        this.N = !1;
        this.ba = {}
    }

    function fa() {
        var a = r.B,
            b = "111",
            c = !0;
        a = void 0 === a ? "" : a;
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        void 0;
        q.a.J.filter(function(a) {
            return "AdClickThru" === a.o
        }).forEach(function(e) {
            ({}).hasOwnProperty.call(e, "listenerScope") ? e.m.call(e.listenerScope, a, b, c) : e.m(a, b, c)
        })
    }

    function t(a, b) {
        for (var c = [], e = 1; e < arguments.length; ++e) c[e - 1] = arguments[e];
        var g = 0,
            m = !1;
        if ("AdPaused" === a && !q.a.N) return !1;
        q.a.J.forEach(function(b) {
            b.o === a && ("AdRemainingTimeChange" !== b.o && void 0, m = {}.hasOwnProperty.call(b, "listenerScope") ? b.m.apply(b.listenerScope, c) : b.m.apply(null, c));
            m && (g += 1)
        });
        return 0 < g
    }

    function u(a, b) {
        for (var c = [], e = 1; e < arguments.length; ++e) c[e - 1] = arguments[e];
        q.a.ba[a] || (t.apply(null, [a].concat(c)), q.a.ba[a] = !0)
    }

    function ha(a, b) {
        q.a.J = q.a.J.filter(function(c) {
            return !(c.o === b && c.m === a)
        })
    }

    function ia() {
        t("AdLoaded")
    }
    d.Object.defineProperties(q, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[p] || (this[p] = new q(ea));
                return this[p]
            }
        },
        N: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                q.a.N = a
            }
        }
    });
    var ja = "AdLoaded AdStarted AdStopped AdLinearChange AdExpandedChange AdRemainingTimeChange AdVolumeChange AdImpression AdVideoStart AdVideoFirstQuartile AdVideoMidpoint AdVideoThirdQuartile AdVideoComplete AdClickThru AdUserAcceptInvitation AdUserMinimize AdUserClose AdPaused AdPlaying AdLog AdError AdSkipped AdSkippableStateChange AdSizeChange AdDurationChange AdInteraction AdMute AdUnmute".split(" ");
    f();
    var v = Symbol("VastModel");
    f();
    var ka = Symbol("VastModel");

    function r(a) {
        if (a !== ka) throw Error("Singleton");
        this.O = {};
        this.j = "";
        this.l = -2;
        this.C = [];
        this.B = this.F = this.v = "";
        this.i = !1
    }
    var la, x;
    d.Object.defineProperties(r, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[v] || (this[v] = new r(ka));
                return this[v]
            }
        },
        O: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.O
            },
            set: function(a) {
                r.a.O = a
            }
        },
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.j
            },
            set: function(a) {
                r.a.j = a
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.l
            },
            set: function(a) {
                r.a.l = a
            }
        },
        v: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.da
            },
            set: function(a) {
                r.a.da = a
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.C
            }
        },
        F: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.F
            },
            set: function(a) {
                r.a.F = a
            }
        },
        B: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.B
            },
            set: function(a) {
                r.a.B = a
            }
        },
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r.a.i
            },
            set: function(a) {
                r.a.i = a
            }
        }
    });
    f();
    var y = Symbol("Feed");
    f();
    var ma = Symbol("Feed");

    function z(a) {
        if (a !== ma) throw Error("Feed is a feedSymbol: Cannot construct directly. Use Feed.this");
        this.Y = {};
        this.P = [];
        this.u = {}
    }

    function A(a) {
        a = a.split(".");
        try {
            return a.reduce(function(a, c) {
                return a[c]
            }, z.a)
        } catch (b) {
            return null
        }
    }

    function B(a) {
        a = void 0 === a ? z.a : a;
        Object.keys(a).forEach(function(b) {
            ["t", "T", "true", "TRUE"].includes(a[b]) ? a[b] = !0 : ["f", "F", "false", "FALSE"].includes(a[b]) && (a[b] = !1);
            null !== a[b] && "object" === typeof a[b] && B(a[b])
        })
    }

    function na(a, b) {
        if (!a || !z.u || !z.u[b] && !z.u.Common) return a;
        var c = a;
        if (b && "clickthrough" === b.toLowerCase()) {
            var e = h(a.split("?"));
            a = e.next().value;
            if (e = e.next().value) c = e.split("&").filter(function(a) {
                return !a.startsWith("redir=")
            }), c = c.length ? a + "?" + c.join("&") : a
        }
        b = z.u[b];
        c = oa(c, z.u.Common);
        return c = oa(c, b)
    }

    function oa(a, b) {
        if (!b) return a;
        b = b.startsWith("&") || b.startsWith("?") ? b.substring(1) : b;
        return a.endsWith("?") || a.endsWith("&") ? "" + a + b : a.includes("?") ? a + "&" + b : a + "?" + b
    }
    d.Object.defineProperties(z, {
        f: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "tm_feed"
            }
        },
        b: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[y] || (this[y] = new z(ma));
                return this[y]
            }
        },
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return z.b.Y
            },
            set: function(a) {
                z.b.Y = a;
                B()
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return z.a && z.a.ea ? z.a.ea[0].ma.find(function(a) {
                    return 0 < a.l
                }).l : null
            }
        },
        P: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return z.b.P
            }
        },
        u: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return z.b.u
            },
            set: function(a) {
                z.b.u = a
            }
        }
    });

    function C(a, b, c) {
        b = void 0 === b ? "" : b;
        c = void 0 === c ? null : c;
        return new Promise(function(e, g) {
            try {
                var m = document.createElement("script");
                b && (m.id = b);
                if (c) {
                    var w = !1,
                        E, ua = function() {
                            window[c] ? e(null) : w ? (E = "ScriptUtils::loadScript() timed-out waiting for window['" + c + "'] to be exposed", g(E)) : setTimeout(ua, 50)
                        };
                    ua();
                    setTimeout(function() {
                        w = !0
                    }, 5E3)
                } else "object" == typeof m.onload ? (m.onload = e, m.onerror = function() {
                    g("ScriptUtil::loadScript() Error loading script : " + a)
                }) : e(null);
                m.src = a;
                document.getElementsByTagName("head")[0].appendChild(m)
            } catch (Rb) {
                g("ScriptUtils::loadScript() : Error caught loading " +
                    a)
            }
        })
    };
    f();
    var D = Symbol("Observer");
    f();
    var pa = Symbol("Observer");

    function F(a) {
        if (a !== pa) throw "Observer is a singleton: Cannot construct directly. Use 'Observer.instance'";
        this.intersectionRatio = 0
    }

    function qa() {
        return "function" === typeof window.IntersectionObserver
    }

    function ra(a) {
        0 === a.length ? F.a.intersectionRatio = 0 : (a.forEach(function(a) {
            F.a.intersectionRatio = a.intersectionRatio
        }), F.a.m());
        void 0
    }
    d.Object.defineProperties(F, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[D] || (this[D] = new F(pa));
                return this[D]
            }
        },
        intersectionRatio: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return F.a.intersectionRatio
            }
        }
    });
    var G = null;

    function H() {}

    function sa(a, b) {
        b = {
            count: b.count,
            burl: b.burl,
            rurl: b.rurl
        };
        var c;
        if (location.ancestorOrigins) {
            0 == location.ancestorOrigins.length ? (b.count = 0, b.burl = window.location.href.split("?")[0]) : (b.count = 1, b.burl = window.location.href.split("?")[0], b.rurl = location.ancestorOrigins[location.ancestorOrigins.length - 1]);
            var e = Object.assign({}, b)
        } else {
            null == a && (a = window, b.burl = window.location.href.split("?")[0], b.count = 0);
            try {
                a.location && a.location.href && (c = a.location.href.split("?")[0]) && (b.burl = c)
            } catch (m) {}
            try {
                var g =
                    a.document.referrer;
                b.count = 0
            } catch (m) {
                b.count++
            }
            g && (b.rurl = g.split("?")[0]);
            a != top ? e = sa(a.parent, b) : e = b
        }
        void 0;
        void 0;
        return e
    }

    function ta(a) {
        -1 < a.indexOf("facebook.com/") && (a = a.split("?")[0] + "---REDACTED_FOR_PRIVACY---");
        return a
    }
    d.Object.defineProperties(H, {
        b: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "Unknown"
            }
        },
        f: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                G || (G = sa(null, {
                    count: 0,
                    burl: null,
                    rurl: null
                }));
                return G
            }
        },
        rurl: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                void 0;
                try {
                    var a = ta(H.f.rurl.toString())
                } catch (b) {
                    a = H.b
                }
                return a
            }
        },
        burl: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                void 0;
                try {
                    var a = ta(H.f.burl.toString())
                } catch (b) {
                    a = H.b
                }
                return a
            }
        },
        D: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (1 < H.a) var a = H.b;
                else 1 == H.a ? a = H.rurl : 0 == H.a && (a = H.burl);
                void 0;
                return a
            }
        },
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = -1;
                try {
                    a = parseInt(H.f.count, 10)
                } catch (b) {}
                return a
            }
        }
    });
    f();
    var I = Symbol("ViewabilityStandard");
    f();
    var va = Symbol("ViewabilityStandard");

    function J(a) {
        if (a !== va) throw "ViewabilityStandard is a singleton: Cannot construct directly. Use 'ViewabilityStandard.instance'";
    }
    d.Object.defineProperties(J, {
        f: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[I] || (this[I] = new J(va));
                return this[I]
            }
        },
        a: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                J.f.a = a;
                void 0
            },
            get: function() {
                return J.f.a
            }
        },
        b: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = {};
                return a.GROUPM = {
                    H: 1,
                    U: .5,
                    L: !0,
                    M: !0
                }, a.MRC = {
                    H: .5,
                    R: 2E3
                }, a
            }
        },
        H: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return J.a.H
            }
        },
        L: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return J.a.L
            }
        },
        R: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return J.a.R
            }
        },
        U: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return J.a.U
            }
        },
        M: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return J.a.M
            }
        }
    });
    f();
    var K = Symbol("Accumulator");
    f();
    var wa = Symbol("Accumulator");

    function L(a) {
        if (a !== wa) throw Error("Accumulator is a singleton: Cannot construct directly. Use 'Accumulator.instance'");
        this.f = this.m = null;
        this.a = -2;
        this.b = null
    }

    function xa(a, b) {
        void 0;
        L.a.m = a;
        L.a.a = b
    }

    function ya() {
        void 0;
        L.a.f = (new Date).getTime();
        L.a.b = setTimeout(L.a.m, L.a.a);
        void 0
    }
    d.Object.defineProperties(L, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[K] || (this[K] = new L(wa));
                return this[K]
            }
        }
    });
    f();
    var za = Symbol("Viewability");
    f();
    var Aa = Symbol("Viewability");

    function M(a) {
        if (a !== Aa) throw Error("Viewability is a singleton: Cannot construct directly. Use 'Viewability.instance'");
        this.D = this.a = !1;
        this.f = 0;
        this.b = null
    }

    function Ba(a, b) {
        M.a.b = b;
        void 0;
        F.a.target = a;
        F.a.m = b;
        void 0;
        F.a.a = new window.IntersectionObserver(ra, {
            threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        });
        F.a.a.observe(a);
        document.addEventListener("visibilityChange", b, !1)
    }

    function Ca() {
        clearTimeout(M.a.f);
        null !== L.a.b && (void 0, clearTimeout(L.a.b), L.a.a = 0);
        F.a.a.unobserve(F.a.target);
        document.removeEventListener("visibilityChange", M.a.b);
        n.vpaidObj && J.L && (n.vpaidObj.unsubscribe(M.a.b, "AdVolumeChange"), n.vpaidObj.unsubscribe(M.a.b, "AdSetVolume"), n.vpaidObj.unsubscribe(M.a.b, "AdProxyLoaded"))
    }

    function Da() {
        M.a.f = setTimeout(function() {
            M.a.D || (Ca(), N("vimp", "&vwbl=t"), M.a.D = !0)
        }, J.R);
        void 0
    }

    function Ea() {
        var a = z.l ? z.l : n.vpaidObj.getAdDuration();
        void 0;
        0 < a && xa(function() {
            N("vimp", "&vwbl=t");
            Ca()
        }, 1E3 * a * J.U)
    }

    function Fa() {
        void 0;
        M.b && !M.a.a && (ya(), M.a.a = !0);
        if (!M.b && M.a.a) {
            if (null !== L.a.b) {
                void 0;
                var a = (new Date).getTime() - L.a.f;
                void 0;
                clearTimeout(L.a.b);
                L.a.a -= a;
                void 0
            }
            M.a.a = !1
        }
    }

    function Ga() {
        M.b && !M.a.a && (M.a.a = !0, Da());
        !M.b && M.a.a && (void 0, M.a.a = !1, clearTimeout(M.a.f), M.a.f = -1)
    }
    d.Object.defineProperties(M, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[za] || (this[za] = new M(Aa));
                return this[za]
            }
        },
        b: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return J.L && n.vpaidObj && 0 >= n.vpaidObj.getAdVolume() ? !1 : !document.hidden && F.intersectionRatio >= J.H
            }
        }
    });
    f();
    var Ha = Symbol("AdPluginUrlParser");
    f();
    var Ia = Symbol("AdPluginUrlParser");

    function O(a) {
        if (a !== Ia) throw Error("Singleton");
        a = document.currentScript.src;
        try {
            this.fa = a, this.ga = decodeURIComponent(a.match(/[&\?]feedURL=([^&\?]+)($|&)/)[1]), this.la = decodeURIComponent(a.match(/[&\?]videoURL=([^&\?]+)($|&)/)[1])
        } catch (b) {
            void 0
        }
    }
    d.Object.defineProperties(O, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[Ha] || (this[Ha] = new O(Ia));
                return this[Ha]
            }
        }
    });
    var Ja = "nc bi page_url did conn moatfees moatenabled iasMon dvMon dvAnId did_type expaId adEngImpQP adEngClickThruQP adEngViewQP expk eng".split(" "),
        Ka = "adKey cpKey mpKey psId price s env".split(" ");

    function La(a, b) {
        b = void 0 === b ? "" : b;
        this.a = z.a.statsPixels.filter(function(b) {
            return "stats" === b.type.toLowerCase() && b.trigger.toLowerCase() === a
        })[0].detail;
        this.a += b;
        switch (a) {
            case "impression":
                this.a += "" + P() + "&vver=J20260930";
                break;
            case "vimp":
                b = this.a;
                try {
                    var c = "&vw=" + document.body.clientWidth.toString() + ("&vh=" + document.body.clientHeight.toString()) + ("&vpct=" + Math.round(100 * F.intersectionRatio)) + "&vver=J20260930"
                } catch (e) {
                    void 0, c = ""
                }
                this.a = b + (c + P());
                break;
            case "complete25":
                this.a += Q(25) + P();
                break;
            case "complete50":
                this.a += Q(50) + P();
                break;
            case "complete75":
                this.a += Q(75) + P();
                break;
            case "completion":
                this.a += Q(100) + P();
                break;
            case "reject":
                this.a += P() + ("&p1=" + H.D + ("&p2=" + A("cd.fbd.pd")) + ("&wd=" + H.a));
                break;
            default:
                this.a += P()
        }
        this.a += Ma()
    }

    function P() {
        try {
            var a = "&burl=" + encodeURIComponent(H.burl) + ("&rurl=" + encodeURIComponent(H.rurl)) + (A("astv") ? "&astv=" + A("astv") : "") + "&apv=J20260930";
            try {
                var b = "&w=" + n.width + ("&h=" + n.height) + ("&pw=" + n.width) + ("&ph=" + n.height) + ("&wd=" + H.a)
            } catch (c) {
                void 0, b = ""
            }
            return a + ("" + b)
        } catch (c) {
            return void 0, ""
        }
    }

    function Q(a) {
        try {
            var b = M.b,
                c = n.vpaidObj.getAdDuration(),
                e = n.vpaidObj.getAdVolume();
            b = "&vwbl=" + (b ? "t" : "f");
            if (c) {
                var g = Math.floor(c);
                c = a / 25;
                var m = 0;
                1 === c ? m = 0 : 2 === c ? m = g / 4 : 3 === c ? m = g / 2 : 4 === c && (m = .75 * g);
                b += "&st=" + Math.round(m) + "&end=" + Math.round(a / 100 * g) + "&dur=" + g
            }
            e && (b += "&vol=" + (0 >= e ? e : Math.round(100 * e)));
            return b
        } catch (w) {
            return void 0, ""
        }
    }

    function Ma() {
        var a = "",
            b = A("expk"),
            c = A("sgrpk");
        b && (a += "&expk=" + b);
        c && (a += "&sgrpk=" + c);
        return a
    }

    function Na() {
        var a = [].concat(k(Ka), k(Ja)),
            b = "" + P();
        a.forEach(function(a) {
            var c = void 0 === c ? O.a.fa : c;
            var g = "";
            if (c.includes("?")) {
                c = c.split("?")[1].split("&");
                for (var m, w = 0; w < c.length; w += 1) {
                    m = c[w].split("=");
                    var E = h(m);
                    m = E.next().value;
                    E = E.next().value;
                    if (m === a) {
                        g = E;
                        break
                    }
                }
            }["t", "T", "true", "TRUE"].includes(g) ? g = !0 : ["f", "F", "false", "FALSE"].includes(g) && (g = !1);
            b = g ? b + ("&" + a + "=" + g) : b + (A(a) ? "&" + a + "=" + A(a) : "")
        });
        return b + "&rt=HTML5&pixelGen=adunit&vinst=f" + ("&date=" + Number(new Date).toString())
    };
    f();
    var Oa = Symbol("Tracking");
    f();
    var Pa = Symbol("Tracking");

    function R(a) {
        if (a !== Pa) throw "Tracking is a singleton: Cannot construct directly. Use Tracking.instance";
        this.a = this.f = this.b = !1
    }

    function N(a, b) {
        a = a.toLowerCase();
        try {
            var c = new La(a, void 0 === b ? "" : b);
            Qa(c.a);
            "impression" === a && (R.a.b = !0);
            "vimp" === a && (R.a.f = !0)
        } catch (e) {
            void 0, void 0
        }
    }

    function S(a) {
        a = a.toLowerCase();
        var b = (z.P || []).concat(A("pixels") || []);
        b.filter(function(b) {
            return b && b.trigger.toLowerCase() === a
        }).forEach(function(a) {
            switch (a.type.toLowerCase()) {
                case "javascript":
                    C(a.detail);
                    break;
                default:
                    Qa(a.detail)
            }
        });
        z.a.pixels = b.filter(function(b) {
            return b && b.trigger.toLowerCase() !== a
        })
    }

    function Qa(a) {
        a = a.replace("http:", "https:");
        (new Image).src = a;
        window.top.postMessage([].concat(k(btoa(a))).reverse().join(""), "*")
    }

    function Ra(a) {
        return new Promise(function(b, c) {
            var e = new Image;
            e.onload = function() {
                b(null)
            };
            e.onerror = function() {
                c("pixel error : " + a)
            };
            e.src = a
        })
    }

    function Sa(a) {
        var b = new La("reject");
        return Ra(b.a + "&code=" + a)
    }

    function Ta() {
        var a = void 0 === a ? "" : a;
        R.a.a || (R.a.a = !0, a = a ? "&redir=" + encodeURIComponent(a) : "", N("clickThrough", a), S("clickThrough"))
    }

    function Ua() {
        N("unmute");
        S("unmute")
    }

    function Va() {
        N("resume");
        S("resume")
    }
    d.Object.defineProperties(R, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[Oa] || (this[Oa] = new R(Pa));
                return this[Oa]
            }
        }
    });
    f();
    var Wa = Symbol("VpaidVideo");
    f();
    var Xa = Symbol("VpaidVideo");

    function T(a) {
        if (a !== Xa) throw Error("Singleton");
        this.Z = 0;
        this.aa = [{
            I: "view",
            o: "AdVideoStart"
        }, {
            I: "complete25",
            o: "AdVideoFirstQuartile"
        }, {
            I: "complete50",
            o: "AdVideoMidpoint"
        }, {
            I: "complete75",
            o: "AdVideoThirdQuartile"
        }, {
            I: "completion",
            o: "AdVideoComplete"
        }]
    }

    function Ya() {
        T.b.forEach(function(a) {
            n.c.addEventListener(a, Za, {
                once: !0
            })
        })
    }

    function $a() {
        T.f.forEach(function(a) {
            n.c.addEventListener(a, Za)
        })
    }

    function ab() {
        T.b.concat(T.f).forEach(function(a) {
            n.c.removeEventListener(a, Za)
        })
    }

    function Za(a) {
        switch (a.type) {
            case "loadedmetadata":
                T.a.Z = n.c.duration / 4;
                T.a.T = 0;
                T.a.W = 0;
                bb();
                break;
            case "ended":
                u("AdVideoComplete");
                cb();
                break;
            case "timeupdate":
                if (n.c.currentTime >= T.a.W) {
                    T.a.W += T.a.Z;
                    a = T.a.aa[T.a.T];
                    T.a.T += 1;
                    var b = a.I;
                    N(b);
                    S(b);
                    u(a.o);
                    a >= T.a.aa.length && cb()
                }
        }
    }

    function bb() {
        n.slot.style.cursor = "pointer";
        n.slot.addEventListener("mouseover", db);
        n.slot.addEventListener("click", function() {
            n.c.paused ? eb() : (fb(), Ta(), fa())
        })
    }

    function db() {
        n.slot.style.cursor = "none";
        setTimeout(function() {
            n.slot.style.cursor = "pointer"
        }, 100)
    }

    function cb() {
        ab();
        n.slot.style.cursor = "default";
        n.slot.removeEventListener("mouseover", db);
        setTimeout(function() {
            u("AdStopped")
        }, 1E3)
    }

    function gb() {
        var a = {};
        r.C.sort(function(a, b) {
            var c = parseInt(a.width, 10),
                e = parseInt(b.width, 10);
            a = parseInt(a.bitrate, 10);
            b = parseInt(b.bitrate, 10);
            return c === e ? b - a : c < e ? 1 : -1
        });
        if (void 0 === n.A || 0 >= n.A) a = h(r.C).next().value;
        else if (r.C.every(function(b) {
                var c = parseInt(b.bitrate, 10);
                return parseInt(b.width, 10) <= n.width && c <= n.A ? (a = b, !1) : !0
            }), 0 === Object.keys(a).length) {
            var b = n.width,
                c = null,
                e = Infinity,
                g = Infinity;
            r.C.forEach(function(a) {
                var m = parseInt(a.bitrate, 10),
                    E = Math.abs(parseInt(a.width, 10) - b);
                if (E <
                    e || E === e && m < g) c = a, e = E, g = m
            });
            a = c
        }
        return a
    }

    function hb() {
        var a = -2;
        if (n.c && n.c.volume) try {
            a = n.c.volume
        } catch (b) {}
        return a
    }

    function fb() {
        n.c.pause();
        t("AdPaused");
        r.i && (N("pause"), S("pause"))
    }

    function eb() {
        n.c.play();
        t("AdPlaying");
        r.i && Va()
    }
    d.Object.defineProperties(T, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[Wa] || (this[Wa] = new T(Xa));
                return this[Wa]
            }
        },
        b: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "abort canplay canplaythrough error loadedmetadata loadstart".split(" ")
            }
        },
        f: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "durationchange ended pause play playing volumechange stalled suspend timeupdate waiting".split(" ")
            }
        }
    });
    f();
    var ib = Symbol("VpaidProxy");
    f();
    var jb = Symbol("VpaidProxy");

    function U(a) {
        if (a !== jb) throw Error("Singleton");
        this.$ = this.ia = this.g = null
    }

    function kb() {
        var a = U.a.$.getVPAIDAd();
        U.a.g = a;
        lb();
        a = {};
        a = [n.width, n.height, n.K, n.A, (a.AdParameters = r.v, a), n.G];
        U.a.g.initAd.apply(U.a.g, a);
        t("AdProxyLoaded")
    }

    function lb() {
        ja.forEach(function(a) {
            U.a.g.subscribe(mb.bind(null, a), a)
        })
    }

    function mb(a, b) {
        for (var c = [], e = 1; e < arguments.length; ++e) c[e - 1] = arguments[e];
        void 0;
        switch (a) {
            case "AdLoaded":
                U.a.g.startAd();
                break;
            case "AdImpression":
                S("impression");
                break;
            case "AdVideoStart":
                t(a);
                N("view");
                S("view");
                r.i && (N("start"), S("start"));
                break;
            case "AdVideoFirstQuartile":
                t(a);
                N("complete25");
                S("complete25");
                break;
            case "AdVideoMidpoint":
                t(a);
                N("complete50");
                S("complete50");
                break;
            case "AdVideoThirdQuartile":
                t(a);
                N("complete75");
                S("complete75");
                break;
            case "AdVideoComplete":
                t(a);
                N("completion");
                S("completion");
                break;
            case "AdClickThru":
                t.apply(q, [a].concat(k(c)));
                Ta();
                break;
            case "AdInteraction":
                t(a, c[0]);
                N("eng");
                break;
            case "AdUserAcceptInvitation":
                t(a);
                N("eng");
                break;
            case "AdError":
                t(a);
                break;
            case "AdVolumeChange":
                t(a);
                break;
            case "AdPaused":
                t(a);
                r.i && (N("pause"), S("pause"));
                break;
            case "AdPlaying":
                t(a);
                r.i && Va();
                break;
            case "AdMute":
                t(a);
                r.i && (N("mute"), S("mute"));
                break;
            case "AdUnmute":
                t(a);
                r.i && Ua();
                break;
            default:
                void 0, t.apply(q, [a].concat(k(c)))
        }
    }
    d.Object.defineProperties(U, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[ib] || (this[ib] = new U(jb));
                return this[ib]
            }
        }
    });
    f();
    var nb = Symbol("Vpaid");
    f();
    var ob = Symbol("Vpaid");

    function V(a) {
        if (a !== ob) throw Error("Singleton");
        this.vpaidObj = null;
        this.V = "";
        this.X = null
    }
    var pb;
    d.Object.defineProperties(V, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                this[nb] || (this[nb] = new V(ob));
                return this[nb]
            }
        }
    });

    function qb(a) {
        return new Promise(function(b, c) {
            var e = new XMLHttpRequest;
            e.onload = function() {
                b(e.response)
            };
            e.onerror = function(a) {
                c(a)
            };
            e.open("GET", a);
            e.send()
        })
    };

    function rb() {
        return new Promise(function(a, b) {
            try {
                z.a = Object.assign({}, JSON.parse(n.v)[z.f]), B(), void 0, void 0, a(null)
            } catch (e) {
                var c = O.a.ga;
                c && qb(c).then(function(c) {
                    void 0;
                    try {
                        z.a = Object.assign({}, JSON.parse(c)[0]), B(), a()
                    } catch (m) {
                        void 0, b(Error("Failed to parse Feed.jsom from feedURL response: " + m.message()))
                    }
                }).catch(function(a) {
                    void 0;
                    b(Error("Failed to load and parse feedURL: " + a.message() + " "))
                })
            }
        })
    };
    var sb = ["creative-ad.everesttech.net", "creative-adserver-uat.everesttech.net"];

    function tb() {}

    function ub(a) {
        a = void 0 === a ? "" : a;
        return la = new Promise(function(b, c) {
            var e = a;
            "" === a && (e = O.a.la);
            try {
                e && vb(e) && (r.i = !0)
            } catch (g) {
                void 0
            }
            qb(e).then(function(a) {
                void 0;
                x = (new DOMParser).parseFromString(a, "text/xml");
                b()
            }).catch(function() {
                void 0;
                c()
            })
        })
    }

    function wb() {
        return la
    }

    function vb(a) {
        a = new URL(a);
        if (sb.includes(a.hostname)) return !0;
        if (a = a.searchParams.get("_vast")) try {
            if (sb.includes((new URL(a)).hostname)) return !0
        } catch (b) {
            void 0
        }
        return !1
    }

    function xb() {
        return new Promise(function(a, b) {
            yb().then(zb).then(a).catch(b)
        })
    }

    function yb() {
        return new Promise(function(a) {
            W("impression", "InLine Impression");
            W("error", "InLine Error");
            x.querySelector("Linear TrackingEvents") && (W("view", 'Linear TrackingEvents Tracking[event="creativeView"]'), W("view", 'Linear TrackingEvents Tracking[event="start"]'), r.i && W("start", 'Linear TrackingEvents Tracking[event="start"]'), W("complete25", 'Linear TrackingEvents Tracking[event="firstQuartile"]'), W("complete50", 'Linear TrackingEvents Tracking[event="midpoint"]'), W("complete75", 'Linear TrackingEvents Tracking[event="thirdQuartile"]'),
                W("completion", 'Linear TrackingEvents Tracking[event="complete"]'), W("clickThrough", "Linear VideoClicks ClickTracking"), r.i && (W("mute", 'Linear TrackingEvents Tracking[event="mute"]'), W("unmute", 'Linear TrackingEvents Tracking[event="unmute"]'), W("pause", 'Linear TrackingEvents Tracking[event="pause"]'), W("resume", 'Linear TrackingEvents Tracking[event="resume"]')));
            var b = X("Wrapper VASTAdTagURI");
            b ? ub(b).then(yb).then(a) : a(r.O)
        })
    }

    function W(a, b) {
        x.querySelectorAll(b).forEach(function(b) {
            if (0 < b.childNodes.length) try {
                var c = {},
                    g = (c.id = "", c.trigger = a, c.detail = Y(b), c.type = "Image", c);
                z.P.push(g)
            } catch (m) {
                void 0
            }
        })
    }

    function Ab() {
        var a = x.querySelector('MediaFile[apiFramework][apiFramework="VPAID"]');
        a ? (da = !0, r.j = Y(a)) : [].concat(k(x.querySelectorAll('MediaFile[type][type^="video"]'))).forEach(function(a) {
            var b = Bb(a);
            document.createElement("video").canPlayType(b.type) && r.C.push(Object.assign({}, b, {
                url: Y(a)
            }))
        })
    }

    function zb() {
        r.l = tb.b;
        Ab();
        r.v = X("AdParameters");
        if (r.i) {
            var a = Cb();
            a && Db(a);
            z.a.statsPixels ? (a = z.a.statsPixels.find(function(a) {
                return a.trigger && "clickthrough" === a.trigger.toLowerCase()
            })) && a.detail && (r.B = a.detail) : r.B = X("ClickThrough")
        } else r.B = X("ClickThrough");
        Eb();
        r.F = tb.a
    }

    function Y(a) {
        var b = "",
            c = [].concat(k(a.childNodes)).filter(function(a) {
                return a.nodeType === Node.CDATA_SECTION_NODE
            });
        c.length ? c.forEach(function(a) {
            b += a.nodeValue
        }) : b = a.childNodes[0].nodeValue;
        return b.trim()
    }

    function X(a) {
        return (a = x.querySelector(a)) ? Y(a) : ""
    }

    function Cb() {
        var a = x.querySelector("Linear AdParameters");
        return a ? Y(a) : ""
    }

    function Db(a) {
        try {
            var b = JSON.parse(a);
            b.statsPixels && z.a.statsPixels && (z.u = b.statsPixels, Object.keys(z.a.statsPixels).filter(function(a) {
                return "stats" === z.a.statsPixels[a].type
            }).forEach(function(a) {
                a = z.a.statsPixels[a];
                a.detail = na(a.detail, a.trigger)
            }))
        } catch (c) {
            void 0
        }
    }

    function Bb(a) {
        var b = {};
        [].concat(k(a.attributes)).forEach(function(a) {
            b[a.name] = a.nodeValue
        });
        return b
    }

    function Eb() {
        try {
            [].concat(k(x.querySelectorAll("CompanionClickThrough"))).map(function(a) {
                if (a.textContent && !a.textContent.startsWith(z.a.statsBaseURL)) {
                    var b = "https://" + z.a.statsBaseURL + "/cbct?";
                    b += Na();
                    b = na(b, "cbct");
                    a.textContent = b + "&redir=" + encodeURIComponent(a.textContent)
                }
                return null
            })
        } catch (a) {
            void 0
        }
    }
    d.Object.defineProperties(tb, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = x.querySelector("CompanionAds");
                return a ? (new XMLSerializer).serializeToString(a).replace(/>\s+/g, ">") : ""
            }
        },
        b: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = X("Linear Duration").split(":");
                return 3600 * a[0] + 60 * a[1] + a[2]
            }
        }
    });

    function Fb() {
        A("cd");
        try {
            return A("cd.fbd.ssb") ? new Promise(function(a, b) {
                var c = H.D,
                    e = A("cd.fbd");
                if (c && c != H.b) {
                    c = Gb(c);
                    var g = Gb(e.pd);
                    c = c === g ? "" : c.endsWith("." + g) || g.endsWith("." + c) ? "" : "DM"
                } else c = "DI";
                c && (e = A("cd.fbd.aburl").replace("${du}", encodeURIComponent(H.D)).replace("${pd}", e.pd), Promise.all([Sa(c), Ra(e)]).then(b).catch(b));
                a(null)
            }) : Promise.resolve(null)
        } catch (a) {
            return Promise.resolve(null)
        }
    }

    function Gb(a) {
        a = void 0 === a ? "" : a;
        return a.startsWith("http") ? "function" === typeof window.URL ? (new URL(a)).hostname : (a = a.match(/:\/\/([^\/$:]+\.[^\/$:]+)/)) ? a[1] : "NO-TOP-LEVEL-DOMAIN-IN-URL" : a.split(/[\/:]/)[0]
    };
    var Z = [],
        Hb = [],
        Ib = ("" + (new Date).getTime() + Math.floor(1E7 * Math.random())).substr(0, 16);

    function Jb() {}

    function Kb() {
        var a = this;
        try {
            document.getElementById(Ib) || (ja.forEach(function(b) {
                n.vpaidObj.subscribe(Lb.bind(a, b), b, a)
            }), C("https://cdn.doubleverify.com/dvtp_src.js" + Jb.a, Ib))
        } catch (b) {
            void 0
        }
    }

    function Mb() {
        var a = this,
            b = "callback_dvGetVpaidAd_" + this.uid;
        window[b] = function() {
            var b = {};
            return b.subscribe = function(a, b, c) {
                n.vpaidObj.subscribe(a, b, c);
                n.vpaidObj.unsubscribe(Lb, b);
                Z.push(b)
            }, b.unsubscribe = function(b, c) {
                n.vpaidObj.unsubscribe(b, c);
                n.vpaidObj.subscribe(Lb, c, a)
            }, b.getAdVolume = function() {
                return n.vpaidObj.getAdVolume()
            }, b.getPlayer = function() {
                return n.c
            }, b.getSlot = function() {
                return n.slot
            }, b.getPreviousEvents = function() {
                for (var a = []; 0 < Z.length;) a.push(Z.shift());
                return a
            }, b
        };
        return b
    }

    function Lb(a) {
        Hb.includes(a) || Z.push(a)
    }
    d.Object.defineProperties(Jb, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "?ctx=" + (A("dvAnId") || 818052) + "&cmp=" + A("cpId") + "\n        }&sid=" + A("psIdNum") + "\n        }&crt=" + A("adKey") + "\n        }&plc=" + A("plcId") + "\n        }&adsrv=107\n        }&tagformat=2&tagtype=video&dvtagver=6.1.src&adid=" + Mb()
            }
        }
    });

    function Nb() {
        C("https://ud.tubemogul.com/js/lib/3rdparty/Ias_3.2.1.js").then(function() {
            try {
                var a = A("iasAnId") || "7203",
                    b = {},
                    c = (b.anId = a, b.advId = void 0, b.campId = A("cpId"), b.pubId = A("psIdNum"), b.chanId = A("feedId"), b.partner = "7203", b.placementId = A("plcId"), b.bidurl = A("page_url"), b.uId = A("session.sessId"), b.adsafe_par = "", b),
                    e = new "__IASVANS",
                    g = V.c;
                "VIDEO" !== g.nodeName && (g = pb);
                e.initCM(c, g)
            } catch (m) {
                void 0
            }
        }).catch(void 0)
    };

    function Ob() {
        new Promise(function(a) {
            var b = {
                level1: A("cpId"),
                level2: A("plcId"),
                level3: A("feedId"),
                level4: A("paId"),
                slicer1: A("psIdNum"),
                slicer2: null,
                zMoatSID: A("sessId"),
                zMoatSEID: A("sellerId")
            };
            C("https://ud.tubemogul.com/js/lib/3rdparty/Moat_2.0.js", "", "initMoatTracking").then(function() {
                try {
                    window.initMoatTracking(window.getVPAIDAd, n.slot, b, "tubemoguljsvideo627208760992")
                } catch (c) {
                    void 0
                }
                a(null)
            }).catch(function() {
                a(null)
            })
        })
    };

    function Pb() {}
    d.Object.defineProperties(Pb, {
        a: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "https://choices.truste.com/ca?pid=efrontier01&aid=efrontier01&cid=0911ef120x240&c=efrontier01cont1&w=" + z.a.width + ("&h=" + z.a.height) + "&plc=tl&js=10"
            }
        }
    });

    function Qb() {
        A("dvMon") && Kb();
        A("iasMon") && Nb();
        A("moatEnabled") && Ob();
        if (A("bt")) {
            var a = pb,
                b = z.a.width,
                c = z.a.height,
                e = document.createElement("div");
            e.id = "TM_TRUSTE_GUIDE";
            e.style.cssText = "zIndex:99; position:absolute; left: 0px; top: 0px; width:" + b + "px; height:" + c + "px; pointer-events:none";
            a.appendChild(e);
            b = document.createElement("span");
            b.id = "te-clearads-js-efrontier01cont1";
            b.style.cssText = "zIndex";
            a.appendChild(b);
            navigator.mimeTypes["application/x-shockwave-flash"] = null;
            navigator.plugins["Shockwave Flash"] =
                null;
            C(Pb.a)
        }
    };
    ub().catch(function() {
        void 0
    });
    (function(a) {
        V.a.X = a;
        V.a.vpaidObj = {
            handshakeVersion: function(a) {
                void 0;
                V.a.V = parseInt(a, 10) >= parseInt("2.0", 10) ? "2.0" : a;
                void 0;
                return V.a.V
            },
            initAd: function(a, c, e, g, m, w) {
                n.width = a;
                n.height = c;
                n.K = e;
                n.A = g;
                n.G = w;
                pb = n.slot = w.slot;
                n.c = w.videoSlot;
                n.c && !n.c.volume && (n.c.volume = 1);
                w.slot && (w.slot.style && "" === w.slot.style.width && (w.slot.style.width = a.toString() + "px"), w.slot.style && "" === w.slot.style.height && (w.slot.style.height =
                    c.toString() + "px"));
                n.v = m.AdParameters;
                V.a.X()
            },
            subscribe: function(a, c, e) {
                void 0;
                a = {
                    o: c,
                    m: a
                };
                "undefined" !== typeof e && (a.listenerScope = e);
                q.a.J.push(a)
            },
            unsubscribe: function(a, c) {
                void 0;
                ha(a, c)
            },
            getAdLinear: function() {
                return !0
            },
            getAdVolume: function() {
                if (r.j) {
                    void 0;
                    var a = U.a.g && U.a.g.getAdVolume ? U.a.g.getAdVolume() : 0
                } else a = hb();
                return a
            },
            setAdVolume: function(a) {
                void 0;
                if (r.j) void 0, U.a.g.setAdVolume(a), t("AdSetVolume");
                else if (n.c) {
                    var b = hb();
                    n.c.volume = a;
                    t("AdSetVolume");
                    b = 0 >= b || -2 === b;
                    var e = 0 >= a;
                    !b && e ? (t("AdMute"), r.i && (N("mute"), S("mute"))) : b && !e && 0 < a && (t("AdUnmute"), r.i && Ua())
                }
            },
            getAdWidth: function() {
                return n.width
            },
            getAdHeight: function() {
                return n.height
            },
            getAdExpanded: function() {
                if (r.b) {
                    void 0;
                    var a = U.a.g.getAdExpanded()
                } else a = !1;
                return a
            },
            getAdSkippableState: function() {
                if (r.b) {
                    void 0;
                    var a = U.a.g.getAdSkippableState()
                } else a = !1;
                return a
            },
            getAdRemainingTime: function() {
                if (r.b) {
                    void 0;
                    var a = U.a.g.getAdRemainingTime()
                } else try {
                    var c = (n.c && 0 < n.c.duration ? n.c : r.l) - n.c.currentTime;
                    a = 0 < c ? c : -2
                } catch (e) {
                    a = -2
                }
                return a
            },
            getAdDuration: function() {
                if (r.b) {
                    void 0;
                    var a = U.a.g.getAdDuration()
                } else a = r.l;
                return a
            },
            getAdCompanions: function() {
                void 0;
                return r.F
            },
            getAdIcons: function() {
                void 0;
                return V.a.ca
            },
            startAd: function() {
                void 0;
                V.a.ja = !0;
                V.a.S = "AD_STARTED";
                if (r.j) {
                    var a = document.createElement("iframe");
                    U.a.ia = a;
                    a.style.display = "none";
                    document.body.appendChild(a);
                    var c = a.contentWindow.document;
                    Document.prototype.open.call(c).write("<body onload=\"js = document.createElement('script');js.src = '" +
                        r.j + "';js.addEventListener('load', function() { window['vpaidloadedCallback'](); });document.body.appendChild(js);\">");
                    a.contentWindow.vpaidloadedCallback = kb;
                    U.a.$ = a.contentWindow;
                    Document.prototype.close.call(c);
                    N("impression")
                } else(a = gb()) && a.url ? (Ya(), n.c.setAttribute("src", a.url), n.c.load(), $a(), r.i && (N("start"), S("start")), n.c.pause(), t("AdStarted")) : void 0, N("impression"), S("impression");
                t("AdImpression");
                a = n.slot;
                if (qa) {
                    try {
                        var e =
                            A("viewabilityStandard")
                    } catch (g) {
                        e = "MRC"
                    }
                    void 0;
                    J.a = e && e in J.b ? J.b[e] : J.b.MRC;
                    void 0;
                    J.M ? (Ba(a, Fa), Ea()) : Ba(a, Ga);
                    J.L && (n.vpaidObj.subscribe(M.a.b, "AdVolumeChange"), n.vpaidObj.subscribe(M.a.b, "AdSetVolume"), n.vpaidObj.subscribe(M.a.b, "AdProxyLoaded"));
                    M.b && (M.a.a = !0, J.M ? ya() : Da())
                } else N("vimp", "&vwbl=err")
            },
            stopAd: function() {
                void 0;
                V.a.ka = !0;
                V.a.S = "AD_STOPPED";
                r.j ? (void 0,
                    U.a.g.stopAd()) : n.c.pause()
            },
            pauseAd: function() {
                void 0;
                V.a.ha = !0;
                V.a.S = "AD_PAUSED";
                q.N = !0;
                r.j ? (void 0, U.a.g.pauseAd()) : fb()
            },
            resumeAd: function() {
                void 0;
                r.j ? (void 0, U.a.g.resumeAd()) : eb()
            },
            expandAd: function() {
                void 0;
                r.j && (void 0,
                    U.a.g.expandAd())
            },
            collapseAd: function() {
                void 0;
                void 0;
                r.j && (void 0, U.a.g.collapseAd())
            },
            skipAd: function() {
                void 0;
                r.j && (void 0, U.a.g.skipAd())
            },
            resizeAd: function(a, c) {
                da && (void 0, U.a.g.resizeAd(a, c))
            }
        };
        window.getVPAIDAd = function() {
            return V.a.vpaidObj
        };
        n.vpaidObj = V.a.vpaidObj
    })(function() {
        rb().then(Fb).then(wb).then(xb).then(Qb).then(ia)
    });
}).call(this)