window.gamera = window.gamera || {};
window.gamera.fastlane = window.gamera.fastlane || [];
window.gamera.fastlane.push(function() {
    window.gamera.setConfig({
        "curationRules": [{
            "id": "gamera_22",
            "inverted": false,
            "placementIds": ["MS01LTE", "MS0xLTI", "MS00LTE", "MS0xLTE", "MS0yLTE", "MS00LTI", "MS0zLTE", "MS0xLTM", "Mi0yLTE", "MS0zLTI", "Mi0zLTE", "Mi00LTE", "MS0yLTI", "MS01LTM", "NC0zLTE", "MS0zLTM", "MS00LTM", "NS0xLTE"],
            "maxRenderSequence": 3,
            "maxViewportAdDensity": 3,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }, {
            "id": "gamera_24",
            "inverted": false,
            "placementIds": ["MS01LTE", "MS0xLTI", "MS00LTE", "MS0xLTE", "MS0yLTE", "MS00LTI", "MS0zLTE", "MS0xLTM", "MS0zLTI", "Mi0zLTE", "MS0yLTI", "MS01LTM", "NC0zLTE", "MS00LTM"],
            "maxRenderSequence": 50,
            "maxViewportAdDensity": 15,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }, {
            "id": "gamera_17",
            "inverted": false,
            "placementIds": ["MS01LTE", "MS0xLTI", "MS00LTE", "MS0xLTE", "MS0yLTE", "MS00LTI", "MS0zLTE", "MS0xLTM", "Mi0yLTE", "MS0zLTI", "Mi0zLTE", "Mi00LTE", "MS0yLTI", "MS01LTM", "NC0zLTE", "MS0zLTM", "MS00LTM", "NS0xLTE"],
            "maxRenderSequence": 5,
            "maxViewportAdDensity": 3,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }, {
            "id": "gamera_11",
            "inverted": false,
            "placementIds": ["MS01LTE", "MS0xLTI", "MS01LTI", "MS00LTE", "MS0xLTE", "MS0yLTE", "MS00LTI", "MS0zLTE", "MS0xLTM", "MS0zLTI", "Mi0zLTE", "MS0yLTI", "MS01LTM", "NC0zLTE", "MS0zLTM", "MS00LTM", "OC0yLTE"],
            "maxRenderSequence": 50,
            "maxViewportAdDensity": 15,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }, {
            "id": "gamera_25",
            "inverted": false,
            "placementIds": ["MS01LTE", "MS0xLTI", "MS01LTI", "MS00LTE", "MS0xLTE", "MS0yLTE", "MS00LTI", "MS0zLTE", "MS0xLTM", "Mi0yLTE", "MS0zLTI", "Mi0zLTE", "MS0yLTI", "MS01LTM", "NC0zLTE", "MS00LTM"],
            "maxRenderSequence": 5,
            "maxViewportAdDensity": 6,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }, {
            "id": "gamera_18",
            "inverted": true,
            "placementIds": [],
            "maxRenderSequence": 2,
            "maxViewportAdDensity": 5,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }, {
            "id": "gamera_14",
            "inverted": false,
            "placementIds": ["MS01LTE", "MS0xLTI", "MS01LTI", "MS00LTE", "MS0xLTE", "MS0yLTE", "MS00LTI", "MS0zLTE", "MS0xLTM", "MS0zLTI", "Mi0zLTE", "MS0yLTI", "MS01LTM", "NC0zLTE", "MS0zLTM", "MS00LTM", "OC0yLTE"],
            "maxRenderSequence": 50,
            "maxViewportAdDensity": 3,
            "maxTimeOnPage": 300,
            "segmentsInclusion": [],
            "segmentsExclusion": [],
            "target": ["pbjs"]
        }],
        "placementStats": "pid,fr,vr,ctr,att,cpm2,cpm4,cpm6,cpm8,sov\nMS01LTE,94.2,92.74,0.09,2.3,0,0.73,1.15,1.78,44.72\nMS0xLTI,93.51,93.66,0.11,2.23,0,0.56,1.02,1.76,46.74\nMS01LTI,92.85,92.45,0.08,1.58,0,0.51,0.92,1.65,28.85\nMS00LTE,94.34,93.04,0.08,2.53,0,0.78,1.24,1.8,53.15\nMS0xLTE,53.75,87.42,0.06,2.02,0,0.0,0.0,0.0,52.76\nMS0yLTE,94.08,93.05,0.11,2.58,0,0.64,1.12,1.84,45.54\nMi0xLTE,91.15,31.31,0.11,1.08,0,0.62,1.03,1.78,50.51\nMS00LTI,93.17,93.91,0.09,2.24,0,0.55,0.94,1.66,33.34\nMS0zLTE,94.05,91.25,0.15,3.54,0,0.74,1.35,2.01,59.93\nMS0xLTM,79.74,85.03,0.07,0.96,0,0.0,0.0,0.87,49.23\nMi0yLTE,91.42,65.77,0.08,0.85,0,0.54,1.0,1.79,39.41\nMS0zLTI,90.33,92.04,0.06,1.72,0,0.43,0.81,1.54,41.89\nMi0zLTE,91.34,75.87,0.07,0.91,0,0.48,0.95,1.78,40.4\nMi01LTE,91.69,50.97,0.06,0.96,0,0.53,0.99,1.82,40.17\nMi00LTE,89.64,65.85,0.07,1.25,0,0.38,0.87,1.76,45.12\nMy0xLTE,73.65,32.83,0.06,0.9,0,0.0,0.77,1.69,43.77\nMy0yLTE,90.86,43.33,0.07,0.8,0,0.63,1.11,1.92,38.96\nMy0zLTE,89.48,34.55,0.04,0.99,0,0.62,1.11,1.95,45.94\nMS0yLTI,86.02,89.29,0.2,2.34,0,0.0,0.67,1.63,45.65\nMy00LTE,88.24,39.11,0.07,0.99,0,0.57,1.07,1.87,41.13\nMS01LTM,89.07,88.35,0.26,1.69,0,0.0,0.78,1.44,31.08\nMy01LTE,91.09,33.98,0.04,0.67,0,0.65,1.19,1.99,41.62\nMi0xLTI,70.54,39.85,0.18,1.38,0,0.0,0.59,1.29,50.6\nMS0xLTQ,63.61,4.78,0.03,1.5,0,0.0,0.0,0.49,57.0\nNC0xLTE,92.21,54.54,0.03,1.21,0,0.67,1.12,1.89,31.98\nNi0yLTE,93.3,20.03,0.0,1.06,0,0.37,0.83,1.77,29.67\nNC00LTE,30.99,31.88,0.03,6.8,0,0.0,0.0,0.2,48.71\nNC01LTE,65.18,29.44,0.07,0.43,0,0.0,0.0,0.59,33.8\nNC0yLTE,68.75,44.15,0.04,0.84,0,0.0,0.68,1.64,39.41\nNC0zLTE,84.31,75.5,0.05,1.0,0,0.0,0.77,1.67,37.17\nMS00LTM,87.24,94.47,0.11,1.77,0,0.0,0.54,1.3,37.52\nMS0zLTM,85.19,96.48,0.0,0.44,0,0.0,0.0,0.52,81.22\nNS0xLTE,79.07,42.83,0.09,1.2,0,0.0,0.83,1.79,40.92\n",
        "gamNetwork": "1004887",
        "litems": {
            "362331987": "adx",
            "362332107": "adx",
            "4454728522": "adx",
            "4470987986": "adx",
            "4802075443": "adx",
            "4802302269": "adx",
            "4802306532": "adx",
            "4939832524": "adx",
            "5206200477": "adx",
            "5206203771": "adx",
            "5206573654": "adx",
            "5206575808": "adx",
            "5206596415": "adx",
            "5206596844": "adx",
            "5206969856": "adx",
            "5206970282": "adx",
            "5206976384": "adx",
            "5206976387": "adx",
            "5206978697": "adx",
            "5468043578": "adx",
            "5659849866": "adx",
            "5659855863": "adx",
            "5659856541": "adx",
            "5659857837": "adx",
            "5659860177": "adx",
            "5659861161": "adx",
            "5659862124": "adx",
            "5660758249": "adx",
            "5660796613": "adx",
            "5660802364": "adx",
            "5660802868": "adx",
            "5660804314": "adx",
            "5661517637": "adx",
            "5661521501": "adx",
            "5661526715": "adx",
            "6005912083": "adx",
            "6296361748": "adx",
            "6296966582": "adx",
            "6372889155": "adx",
            "6375063310": "adx",
            "6375071683": "adx",
            "6375089701": "adx",
            "6375758789": "adx",
            "6375772034": "adx",
            "6780097102": "adx",
            "6372879087": "adx",
            "5468037242": "adx"
        }
    });
});

(() => {
    "use strict";
    const e = "__gameraDebug__",
        t = "__gameraDiagnostics__",
        n = 1e3,
        i = "gamera.consentProceed",
        r = "gamera.adRendered",
        o = {
            AD_RENDERED: "adRendered",
            PAGE_SCROLL: "pageScroll",
            NEW_PAGE: "newPage",
            CUSTOM: "custom",
            ADD_DIMENSIONS: "addDimensions",
            ADD_METRICS: "addMetrics",
            PAGE_REVENUE: "pageRevenue",
            BID_WON: "bidWon"
        },
        a = {
            AD_PLACEMENT_FOUND: "adPlacementFound",
            AD_PLACEMENT_GTAG_RENDERED: "adPlacementGtagRendered",
            AD_PLACEMENT_PBJS_RENDERED: "adPlacementPbjsRendered",
            AD_PLACEMENT_ADSENSE_RENDERED: "adPlacementAdSenseRendered",
            AD_PLACEMENT_DCM_RENDERED: "adPlacementDcmRendered",
            AD_PLACEMENT_BOUNCEX_RENDERED: "adPlacementBouncexRendered",
            AD_PLACEMENT_CUSTOM_RENDERED: "adPlacementCustomRendered",
            AD_PLACEMENT_RENDERED: "adPlacementRendered",
            AD_PLACEMENT_REQUESTED: "adPlacementRequested",
            AD_PLACEMENT_GTAG_RENDERED_EMPTY: "adPlacementGtagRenderedEmpty",
            AD_PLACEMENT_VIEWABLE: "adPlacementViewable",
            AD_PLACEMENT_CLICKED: "adPlacementClicked",
            AD_PLACEMENT_PBJS_AUCTION_INIT: "adPlacementPbjsAuctionInit",
            AD_PLACEMENT_PBJS_GPID_SEEN: "adPlacementPbjsGpidSeen",
            HEAVY_AD_INTERVENTION: "heavyAdIntervention",
            WEB_VITALS_CHANGED: "webVitalsChanged",
            SESSION_RESET: "sessionReset",
            SESSION_NEW_PAGE: "sessionNewPage",
            SESSION_PAGE_REVENUE_ADDED: "sessionPageRevenueAdded",
            SESSION_AD_PLACEMENTS_VISIBLE: "sessionAdPlacementsVisible",
            GAM_AD_REQUESTED: "gamAdRequested",
            GPT_SLOT_REGISTERED: "gptSlotRegistered",
            ADSENSE_SLOTS_FOUND: "adSenseSlotsFound",
            ADSENSE_SLOT_FILLED: "adSenseSlotFilled",
            ADSENSE_SLOT_UNFILLED: "adSenseSlotUnfilled",
            DCM_SLOTS_FOUND: "dcmSlotsFound",
            DCM_SLOT_FILLED: "dcmSlotFilled",
            BOUNCEX_SLOTS_FOUND: "bouncexSlotsFound",
            BOUNCEX_SLOT_RENDERED: "bouncexSlotRendered",
            VIDEO_PLAYER_DISCOVERED: "videoPlayerDiscovered",
            VIDEO_PLAYER_CONTAINER_FOUND: "videoPlayerContainerFound",
            VIDEO_PLAYER_STICKY_RESOLVED: "videoPlayerStickyResolved",
            VIDEO_PLAYER_AD_EVENT: "videoPlayerAdEvent",
            WIDGET_CONTAINER_FOUND: "widgetContainerFound"
        },
        s = {
            fr: "fill_rate",
            vr: "viewability",
            ctr: "ctr",
            att: "att",
            sov: "sov",
            cpm2: "cpm2",
            cpm4: "cpm4",
            cpm6: "cpm6",
            cpm8: "cpm8"
        },
        d = ["hb_pb", "fs_pb", "oa_pb"],
        c = ["hb_adid", "fs_adid", "oa_adid"],
        l = "_adid",
        u = 5,
        p = 10,
        g = "https://assets.rapidedge.io/gamera/tracker/production/diagnostics.js",
        m = 5,
        f = 1e3,
        h = {
            debug: ["background: black; color: orange", "background: #373837; color: #ffffff"],
            info: ["background: black; color: orange", "background: blue; color: #ffffff"],
            warn: ["background: black; color: orange", "background: black; color: orange"],
            error: ["background: black; color: orange", "background: red; color: #ffffff"]
        },
        v = {
            debug: ["debug"],
            info: ["debug", "info"],
            warn: ["debug", "info", "warn"],
            error: ["debug", "info", "warn", "error"]
        },
        y = new class {
            constructor(t) {
                t || (t = "warn"), window.location.search.indexOf(e) > -1 && (t = "debug"), this.level = t, this._emittedAt = Object.create(null)
            }
            debug(e, t) {
                this._emit("debug", e, t)
            }
            info(e, t) {
                this._emit("info", e, t)
            }
            warn(e, t) {
                this._emit("warn", e, t)
            }
            error(e, t) {
                this._emit("error", e, t)
            }
            _emit(e, t, n) {
                if (!v[e].includes(this.level)) return;
                if (n && (n.once || n.throttleMs)) {
                    const e = this._emittedAt[t];
                    if (void 0 !== e) {
                        if (n.once) return;
                        if (n.throttleMs && Date.now() - e < n.throttleMs) return
                    }
                    this._emittedAt[t] = Date.now()
                }
                const [i, r] = h[e];
                console.log(`%c Gamera [${e}]: %c ${t}`, i, r)
            }
            setLogLevel(e) {
                this.level = e
            }
        }("none"),
        w = function() {
            let e = [];
            try {
                e = document.getElementsByTagName("main")
            } catch (e) {}
            return e
        }();

    function b() {
        return function() {
            if (void 0 !== window.scrollY) return Math.max(0, Math.round(window.scrollY));
            if (void 0 !== window.pageYOffset) return Math.max(0, Math.round(window.pageYOffset));
            const e = document.documentElement,
                t = document.body;
            return Math.max(0, Math.round(e && e.scrollTop || t && t.scrollTop || 0))
        }() || (1 === w.length ? w[0].scrollTop : 0)
    }

    function E() {
        return window.document.documentElement && window.document.documentElement.clientWidth || window.innerWidth || 0
    }

    function _() {
        return window.document.documentElement && window.document.documentElement.clientHeight || window.innerHeight || 0
    }

    function S(e, t) {
        const n = e.getBoundingClientRect(),
            i = Math.max(0, n.top + b()),
            r = _();
        if (!r) return null;
        const o = r / t,
            a = Math.floor(i / o) % t + 1;
        return {
            viewport: Math.floor(i / r) + 1,
            row: a
        }
    }

    function A() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
    }

    function I(e) {
        let t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
        return t ? decodeURIComponent(t[2]) : null
    }

    function P(e, t, n, i, r) {
        let o = "";
        if (n) {
            let e = new Date;
            e.setTime(e.getTime() + 60 * n * 60 * 1e3), o = e.toUTCString()
        }
        const a = r && "" !== r ? ` ;domain=${encodeURIComponent(r)}` : "",
            s = o && "" !== o ? ` ;expires=${o}` : "",
            d = null != i && "none" == i.toLowerCase() ? "; Secure" : "";
        document.cookie = `${e}=${encodeURIComponent(t)}${s}; path=/${a}${i?`; SameSite=${i}`:""}${d}`
    }

    function D() {
        return Math.floor(Date.now() / 1e3)
    }

    function R() {
        try {
            return performance.now()
        } catch (e) {
            return Date.now()
        }
    }

    function k(e, t) {
        return e === t || JSON.stringify(e) === JSON.stringify(t)
    }

    function C(e) {
        try {
            return e()
        } catch (e) {}
        return null
    }

    function T(e) {
        try {
            return JSON.parse(JSON.stringify(e))
        } catch (t) {
            return e
        }
    }

    function N(e, t) {
        if (!e) return;
        let n = String(t).split(".");
        for (let t = 0; t < n.length; t++)
            if (!(e = e[n[t]])) return e;
        return e
    }

    function O(e, t) {
        return toString.call(e) === `[object ${t}]`
    }

    function x(e) {
        return O(e, "Object")
    }

    function L(e) {
        return O(e, "Function")
    }

    function M(e, ...t) {
        if (!t.length) return e;
        const n = t.shift();
        if (x(e) && x(n))
            for (const t in n) x(n[t]) ? (e[t] || Object.assign(e, {
                [t]: {}
            }), M(e[t], n[t])) : Array.isArray(n[t]) ? e[t] ? Array.isArray(e[t]) && n[t].forEach((n => {
                let i = 1;
                for (let r = 0; r < e[t].length; r++)
                    if (k(e[t][r], n)) {
                        i = 0;
                        break
                    }
                i && e[t].push(n)
            })) : Object.assign(e, {
                [t]: [...n[t]]
            }) : Object.assign(e, {
                [t]: n[t]
            });
        return M(e, ...t)
    }

    function $(e, t, n) {
        if (!e || "object" != typeof e) return "";
        const i = String(t || "").toLowerCase().replace(/\.+$/, ""),
            r = e.site && "string" == typeof e.site.rdomain ? e.site.rdomain.toLowerCase().replace(/\.+$/, "") : "";
        if (i && r && ! function(e, t) {
                return e === t || e.endsWith("." + t) || t.endsWith("." + e)
            }(i, r)) return "domain";
        const o = e.script && "string" == typeof e.script.uah ? e.script.uah : "";
        return o && "string" == typeof n && n && function(e) {
            let t = 5381;
            for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) >>> 0;
            return t.toString(36)
        }(n) !== o ? "ua" : ""
    }

    function B(e) {
        const t = "string" == typeof e ? e.split(",") : Array.isArray(e) ? e : [],
            n = [];
        for (let e = 0; e < t.length; e++) {
            const i = "string" == typeof t[e] ? t[e].trim().toLowerCase() : "";
            i && -1 === n.indexOf(i) && n.push(i)
        }
        return n
    }

    function j(e, t) {
        if (!e || !t || 0 === t.length) return e;
        try {
            const n = new URL(e),
                i = [];
            return n.searchParams.forEach(((e, n) => {
                -1 !== t.indexOf(n.toLowerCase()) && i.push(n)
            })), 0 === i.length ? e : (i.forEach((e => n.searchParams.delete(e))), n.href)
        } catch (t) {
            const n = e.indexOf("#"),
                i = e.indexOf("?");
            return -1 === i || -1 !== n && n < i ? e : e.slice(0, i) + (-1 === n ? "" : e.slice(n))
        }
    }
    const V = function(e) {
            const t = {
                domain: "",
                hostname: "",
                params: {},
                path: ""
            };
            if (!e) return t;
            try {
                const n = new URL(e, window.location.href);
                t.domain = n.hostname.split(".").slice(-2).join("."), t.hostname = n.hostname, t.path = n.pathname;
                const i = new URLSearchParams(n.search);
                for (const [e, n] of i) t.params[e.toLowerCase()] = decodeURIComponent(n)
            } catch (e) {}
            return t
        }(function(e, t) {
            const n = document.getElementById("__gamera__");
            if (n) return n.getAttribute("src");
            let i = document.querySelectorAll('script[src*="gamera.js"]');
            return 1 === i.length ? i[0].getAttribute("src") : void 0
        }()),
        G = /^\d{1,20}$/,
        U = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }(),
        F = {
            _meta: function() {
                try {
                    return JSON.parse(atob("eyJkZXZpY2UiOnsidHlwZSI6ImRlc2t0b3AifSwiZ2VvIjp7ImNvdW50cnkiOiJVUyJ9LCJzaXRlIjp7ImRvbWFpbiI6Ind3dy5jcmF6eWdhbWVzLmNvbSIsInJkb21haW4iOiJjcmF6eWdhbWVzLmNvbSJ9LCJzY3JpcHQiOnsidmVyc2lvbiI6IjEuMTAuMyIsImV4cGVyaW1lbnQiOiIiLCJ1YWgiOiIxMDcwNTl3In19"))
                } catch (e) {
                    return
                }
            }(),
            _contextMismatchAxis: null,
            _ingestionHostname: V.hostname || "metrics.rapidedge.io",
            _ingestionPath: "/gamera/ingest",
            _domain: V.params.domain || "",
            _partner: V.params.partner || "",
            _ltv: +V.params.ltv || 0,
            _wait: +V.params.wait || 0,
            _tpcs: +V.params.tpcs || 0,
            _webMetrics: +V.params.web_metrics || 1,
            _userId: V.params.user_id || "",
            _sessionId: V.params.session_id || "",
            _audience: +V.params.audience || 0,
            _clientSideMetrics: +V.params.client_side_metrics || 0,
            _stripUrlParams: B(V.params.strip_url_params),
            _disableAdPlacementDiscovery: 0,
            _disableGptCuration: 0,
            _collectPlacementHistory: 0,
            _collectAdvertiserDomains: 1,
            _enableSegtaxFetch: 0,
            _enableDcmTracking: 0,
            _enableBouncexTracking: 0,
            _enableWidgetDiscovery: 1,
            _enableGptSlotPatching: 0,
            _enableStickyPlacementSeparation: 1,
            _stickyAncestorDepth: 5,
            _spaIgnoreNavigation: 0,
            _enableUserInitiatedRenderExclusion: 0,
            _curationRules: [],
            _placementStats: "",
            _thirdPartyBillingProviders: [],
            _consentGranted: 0,
            _litems: {},
            _gamNetwork: "",
            _attributionLookup: {},
            _ctLineItems: new Set,
            _customPbjsBidToPlacementFn: null,
            get domain() {
                return this._domain
            },
            get partner() {
                return this._partner
            },
            get ltv() {
                return this._ltv
            },
            get wait() {
                return this._wait
            },
            get tpcs() {
                return this._tpcs
            },
            get webMetrics() {
                return this._webMetrics
            },
            get userId() {
                return this._userId
            },
            get sessionId() {
                return this._sessionId
            },
            get endpoint() {
                return `https://${this._ingestionHostname}${this._ingestionPath}`
            },
            get audience() {
                return this._audience
            },
            get clientSideMetrics() {
                return this._clientSideMetrics
            },
            get stripUrlParams() {
                return this._stripUrlParams
            },
            get disableAdPlacementDiscovery() {
                return U ? 1 : this._disableAdPlacementDiscovery
            },
            get disableGptCuration() {
                return U ? 1 : this._disableGptCuration
            },
            get collectPlacementHistory() {
                return this._collectPlacementHistory
            },
            get collectPbjsSummary() {
                return !this._collectPlacementHistory
            },
            get collectAdvertiserDomains() {
                return this._collectAdvertiserDomains
            },
            get enableSegtaxFetch() {
                return U ? 0 : this._enableSegtaxFetch
            },
            get enableDcmTracking() {
                return U ? 0 : this._enableDcmTracking
            },
            get enableBouncexTracking() {
                return U ? 0 : this._enableBouncexTracking
            },
            get enableWidgetDiscovery() {
                return U ? 0 : this._enableWidgetDiscovery
            },
            get enableGptSlotPatching() {
                return U ? 0 : this._enableGptSlotPatching
            },
            get enableStickyPlacementSeparation() {
                return this._enableStickyPlacementSeparation
            },
            get stickyAncestorDepth() {
                return this._stickyAncestorDepth
            },
            get spaIgnoreNavigation() {
                return this._spaIgnoreNavigation
            },
            get enableUserInitiatedRenderExclusion() {
                return U ? 0 : this._enableUserInitiatedRenderExclusion
            },
            get curationRules() {
                return U ? [] : this._curationRules
            },
            get placementStats() {
                return U ? "" : this._placementStats
            },
            get runningInIframe() {
                return U
            },
            get thirdPartyBillingProviders() {
                return this._thirdPartyBillingProviders
            },
            get consentGranted() {
                return !this._wait || this._consentGranted
            },
            get litems() {
                return this._litems
            },
            get gamNetwork() {
                return this._gamNetwork
            },
            get attributionLookup() {
                return this._attributionLookup
            },
            get ctLineItems() {
                return this._ctLineItems
            },
            get customPbjsBidToPlacementFn() {
                return this._customPbjsBidToPlacementFn
            },
            get meta() {
                return this._meta
            },
            grantConsent() {
                this._consentGranted = 1
            },
            contextMismatchAxis() {
                if (null === this._contextMismatchAxis) {
                    this._contextMismatchAxis = "";
                    try {
                        let e = $(this._meta, window.location.hostname, navigator.userAgent);
                        "domain" === e && V.params.domain && (e = $({
                            script: this._meta.script
                        }, window.location.hostname, navigator.userAgent)), this._contextMismatchAxis = e
                    } catch (e) {
                        this._contextMismatchAxis = ""
                    }
                }
                return this._contextMismatchAxis
            },
            isForeignScriptContext() {
                return "" !== this.contextMismatchAxis()
            },
            setConfig(e) {
                if (e.hasOwnProperty("ingestionHostname") && (this._ingestionHostname = e.ingestionHostname), e.hasOwnProperty("ingestionPath") && (this._ingestionPath = e.ingestionPath), e.hasOwnProperty("domain") && (this._domain = e.domain), e.hasOwnProperty("partner") && (this._partner = e.partner), e.hasOwnProperty("ltv") && (this._ltv = +e.ltv), e.hasOwnProperty("wait") && (this._wait = +e.wait), e.hasOwnProperty("tpcs") && (this._tpcs = +e.tpcs), e.hasOwnProperty("webMetrics") && (this._webMetrics = +e.webMetrics), e.hasOwnProperty("userId") && "string" == typeof e.userId && (this._userId = e.userId), e.hasOwnProperty("sessionId") && "string" == typeof e.sessionId && (this._sessionId = e.sessionId), e.hasOwnProperty("audience") && (this._audience = +e.audience), e.hasOwnProperty("clientSideMetrics") && (this._clientSideMetrics = +e.clientSideMetrics), e.hasOwnProperty("stripUrlParams") && (this._stripUrlParams = B(this._stripUrlParams.concat(B(e.stripUrlParams)))), e.hasOwnProperty("disableAdPlacementDiscovery") && (this._disableAdPlacementDiscovery = +e.disableAdPlacementDiscovery), e.hasOwnProperty("disableGptCuration") && (this._disableGptCuration = +e.disableGptCuration), e.hasOwnProperty("collectPlacementHistory") && (this._collectPlacementHistory = +e.collectPlacementHistory), e.hasOwnProperty("collectAdvertiserDomains") && (this._collectAdvertiserDomains = +e.collectAdvertiserDomains), e.hasOwnProperty("enableSegtaxFetch") && (this._enableSegtaxFetch = +e.enableSegtaxFetch), e.hasOwnProperty("enableDcmTracking") && (this._enableDcmTracking = +e.enableDcmTracking), e.hasOwnProperty("enableBouncexTracking") && (this._enableBouncexTracking = +e.enableBouncexTracking), e.hasOwnProperty("enableWidgetDiscovery") && (this._enableWidgetDiscovery = +e.enableWidgetDiscovery), e.hasOwnProperty("enableGptSlotPatching") && (this._enableGptSlotPatching = +e.enableGptSlotPatching), e.hasOwnProperty("enableStickyPlacementSeparation") && (this._enableStickyPlacementSeparation = +e.enableStickyPlacementSeparation), e.hasOwnProperty("stickyAncestorDepth")) {
                    const t = Math.floor(+e.stickyAncestorDepth);
                    Number.isFinite(t) && t > 0 && (this._stickyAncestorDepth = t)
                }
                e.hasOwnProperty("spaIgnoreNavigation") && (this._spaIgnoreNavigation = +e.spaIgnoreNavigation), e.hasOwnProperty("enableUserInitiatedRenderExclusion") && (this._enableUserInitiatedRenderExclusion = +e.enableUserInitiatedRenderExclusion), e.hasOwnProperty("curationRules") && Array.isArray(e.curationRules) && (this._curationRules = this.isForeignScriptContext() ? [] : e.curationRules), e.hasOwnProperty("placementStats") && (this._placementStats = this.isForeignScriptContext() ? "" : e.placementStats), e.hasOwnProperty("thirdPartyBillingProviders") && Array.isArray(e.thirdPartyBillingProviders) && (this._thirdPartyBillingProviders = e.thirdPartyBillingProviders), e.hasOwnProperty("litems") && x(e.litems) && (this._litems = e.litems), e.hasOwnProperty("gamNetwork") && "string" == typeof e.gamNetwork && (this._gamNetwork = e.gamNetwork), e.hasOwnProperty("attributionLookup") && x(e.attributionLookup) && (this._attributionLookup = e.attributionLookup), e.hasOwnProperty("ctLineItems") && (this._ctLineItems = function(e) {
                    const t = new Set;
                    if (!Array.isArray(e)) return t;
                    for (let n = 0; n < e.length && t.size < 5e3; n++) "string" == typeof e[n] && G.test(e[n]) && t.add(e[n]);
                    return t
                }(e.ctLineItems)), e.hasOwnProperty("customPbjsBidToPlacementFn") && "function" == typeof e.customPbjsBidToPlacementFn && (this._customPbjsBidToPlacementFn = e.customPbjsBidToPlacementFn)
            }
        };

    function q(e) {
        var t = new XMLHttpRequest,
            n = "metrics.rapidedge.io";
        if (-1 === n.indexOf("EXCEPTION_STORE_HOSTNAME")) {
            var i = "https://" + n + "/error/ingest",
                r = {
                    message: e.message,
                    stack: e.stack
                },
                o = JSON.stringify(r);
            t.open("POST", i, !0), t.setRequestHeader("Content-Type", "application/json"), t.send(o)
        }
    }
    let W = null;
    const H = "\n    :host {\n        all: initial;\n        display: block;\n        pointer-events: none;\n    }\n    \n    .row-grid-root {\n        font-family: 'Roboto', 'Arial', sans-serif;\n        font-size: 12px;\n        line-height: 1.4;\n        color: white;\n        -webkit-font-smoothing: antialiased;\n        box-sizing: border-box;\n    }\n    \n    .row-grid-root *, \n    .row-grid-root *::before, \n    .row-grid-root *::after {\n        box-sizing: border-box;\n    }\n    \n    .row-grid-container {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        pointer-events: none;\n        z-index: 2147483647;\n    }\n    \n    .row-grid-line {\n        position: absolute;\n        left: 0;\n        width: 100%;\n        height: 0;\n        border-top: 1px dashed red;\n        box-sizing: border-box;\n    }\n    \n    .row-grid-label {\n        position: absolute;\n        left: 0;\n        background-color: rgba(255, 0, 0, 0.5);\n        color: white;\n        font-size: 12px;\n        padding: 2px 4px;\n        pointer-events: none;\n    }\n    \n    .row-grid-overlay {\n        position: absolute;\n        border: 2px solid blue;\n        background-color: rgba(0, 0, 255, 0.1);\n        pointer-events: none;\n        z-index: 2147483647;\n    }\n    \n    .row-grid-info-label {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: rgba(0, 0, 255, 0.8);\n        color: white;\n        font-size: 12px;\n        padding: 4px;\n        max-width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: pre-wrap;\n    }\n\n    .row-grid-video-overlay {\n        position: absolute;\n        border: 2px dashed #c026d3;\n        background-color: rgba(192, 38, 211, 0.1);\n        pointer-events: none;\n        z-index: 2147483647;\n    }\n\n    .row-grid-video-info-label {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: rgba(192, 38, 211, 0.85);\n        color: white;\n        font-size: 12px;\n        padding: 4px;\n        max-width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: pre-wrap;\n    }\n\n    .row-grid-widget-overlay {\n        position: absolute;\n        border: 2px dashed #16a34a;\n        background-color: rgba(22, 163, 74, 0.1);\n        pointer-events: none;\n        z-index: 2147483647;\n    }\n\n    .row-grid-widget-info-label {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: rgba(22, 163, 74, 0.85);\n        color: white;\n        font-size: 12px;\n        padding: 4px;\n        max-width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: pre-wrap;\n    }\n";

    function z(e, t, n) {
        n ? (e.style.position = "fixed", e.style.top = `${t.top}px`, e.style.left = `${t.left}px`) : (e.style.top = `${t.top+window.scrollY}px`, e.style.left = `${t.left+window.scrollX}px`), e.style.width = `${t.width}px`, e.style.height = `${t.height}px`
    }

    function J(e, t = [], n = []) {
        if (!document || !document.body) return void y.debug("document.body not found, skipping row grid drawing");
        if (!W) {
            W = document.createElement("div"), W.id = "row-grid-shadow-host", document.body.appendChild(W);
            const e = W.attachShadow({
                    mode: "open"
                }),
                t = document.createElement("style");
            t.textContent = H, e.appendChild(t);
            const n = document.createElement("div");
            n.className = "row-grid-root", e.appendChild(n)
        }
        const i = W.shadowRoot.querySelector(".row-grid-root");
        i.innerHTML = "";
        const r = document.createElement("div");
        r.className = "row-grid-container", r.style.height = `${document.body.scrollHeight}px`;
        const o = window.innerHeight,
            a = o / m,
            s = Math.ceil(document.body.scrollHeight / a);
        for (let e = 0; e <= s; e++) {
            const t = e * a,
                n = Math.floor(t / o) + 1,
                i = document.createElement("div");
            i.className = "row-grid-line", i.style.top = `${t}px`;
            const s = document.createElement("div");
            s.className = "row-grid-label", s.style.top = `${t}px`, s.textContent = `Row ${n}-${e%m+1}`, r.appendChild(i), r.appendChild(s)
        }
        const d = R();
        e.forEach((e => {
            const t = document.getElementById(e.divId);
            if (!t) return;
            const n = t.getBoundingClientRect(),
                r = document.createElement("div");
            r.className = "row-grid-overlay", z(r, n, !!e.sticky);
            const o = document.createElement("div");
            if (o.className = "row-grid-info-label", o.textContent = `ID: ${e.universalPlacementId}\nCOORD: ${e.coordinates}\nDIV: ${e.divId}\nGPID: ${e.gpid}`, e.attentionState) {
                let t = e.attentionState.pastTimeInViewport;
                e.attentionState.isVisible && (t += d - e.attentionState.lastEnteredViewport), o.textContent += `\nATT: ${(t/1e3).toFixed(1)}s`, o.textContent += `\nisVisible: ${e.attentionState.isVisible}`
            }
            if (e.sovValues && e.sovValues.length > 0) {
                const t = e.sovValues.reduce(((e, t) => e + t), 0) / e.sovValues.length;
                o.textContent += `\nSOV (avg): ${(100*t).toFixed(1)}%`
            }
            if (e.adDensityValues && e.adDensityValues.length > 0) {
                const t = e.adDensityValues.reduce(((e, t) => e + t), 0) / e.adDensityValues.length;
                o.textContent += `\nAD DENSITY (avg): ${t.toFixed(1)}`
            }
            r.appendChild(o), i.appendChild(r)
        })), t.forEach((e => {
            const t = e ? .container;
            if (!(t && t instanceof Element && t.isConnected)) return;
            const n = t.getBoundingClientRect();
            if (0 === n.width && 0 === n.height) return;
            const r = document.createElement("div");
            r.className = "row-grid-video-overlay", z(r, n, !0 === e.sticky);
            const o = !0 === e.sticky ? "yes" : !1 === e.sticky ? "no" : "unknown",
                a = document.createElement("div");
            a.className = "row-grid-video-info-label", a.textContent = `VIDEO: ${e.vendor}\nSTICKY: ${o}`, r.appendChild(a), i.appendChild(r)
        })), n.forEach((e => {
            const t = e ? .container;
            if (!(t && t instanceof Element && t.isConnected)) return;
            const n = t.getBoundingClientRect();
            if (0 === n.width && 0 === n.height) return;
            const r = document.createElement("div");
            r.className = "row-grid-widget-overlay", z(r, n, !1);
            const o = document.createElement("div");
            o.className = "row-grid-widget-info-label", o.textContent = `WIDGET: ${e.vendor}`, o.textContent += `\nID: ${e.widgetId}`, o.textContent += `\nVP-ROW: ${e.viewport}-${e.row}`, r.appendChild(o), i.appendChild(r)
        })), i.appendChild(r)
    }
    const Y = {};

    function X(e, t) {
        e && "string" == typeof e ? t && "function" == typeof t ? (Y[e] = Y[e] || [], Y[e].push(t)) : y.error(`Invalid handler: ${t}`) : y.error(`Invalid event name: ${e}`)
    }

    function K(e, t) {
        e && "string" == typeof e ? Y[e] && Y[e].forEach((e => {
            try {
                e(t)
            } catch (e) {
                y.error(`Error in event handler: ${e}`)
            }
        })) : y.error(`Invalid event name: ${e}`)
    }
    const Q = "undefined" != typeof WeakRef ? WeakRef : class {
        constructor(e) {
            this.element = e
        }
        deref() {
            return this.element.isConnected ? ? document.contains(this.element) ? this.element : null
        }
    };
    let Z = [],
        ee = 0;

    function te() {
        const e = Z.filter((e => e.containerRef.deref()));
        return e.length !== Z.length && (Z = e), e
    }

    function ne() {
        const e = [],
            t = te();
        for (let n = 0; n < t.length; n++) {
            const i = t[n].containerRef.deref();
            i && e.push(i)
        }
        return e
    }

    function ie() {
        Z = Z.filter((e => {
            const t = e.containerRef.deref();
            return !(!t || !t.isConnected)
        }))
    }

    function re() {
        const e = [],
            t = te();
        for (let n = 0; n < t.length; n++) {
            const i = t[n],
                r = i.containerRef.deref();
            r && e.push({
                vendor: i.vendor,
                widgetId: i.widgetId,
                viewport: i.viewport,
                row: i.row,
                container: r
            })
        }
        return e
    }
    const oe = "undefined" != typeof WeakRef ? WeakRef : class {
            constructor(e) {
                this.element = e
            }
            deref() {
                return this.element.isConnected ? ? document.contains(this.element) ? this.element : null
            }
        },
        ae = Object.create(null),
        se = Object.create(null);

    function de(e) {
        return e.containerRef.deref() || null
    }

    function ce(e) {
        const t = ae[e];
        if (!t) return [];
        let n = !1;
        for (let e = 0; e < t.length; e++)
            if (!t[e].containerRef.deref()) {
                n = !0;
                break
            }
        if (!n) return t;
        const i = t.filter((e => e.containerRef.deref()));
        return ae[e] = i, i
    }

    function le(e, t, n) {
        const i = ce(e),
            r = null != n;
        if (r)
            for (let r = 0; r < i.length; r++)
                if (i[r].playerKey === n) return de(i[r]) !== t && (i[r].containerRef = new oe(t), y.debug(`video discovery: ${e} player container replaced, following it`)), null;
        if (function(e, t) {
                const n = ce(e);
                return !!n.length && n.some((e => de(e) === t))
            }(e, t)) return null;
        e in se || (se[e] = 0);
        const o = {
            vendor: e,
            playerId: se[e]++,
            playerKey: r ? n : null,
            containerRef: new oe(t),
            sticky: null,
            outstream: null,
            detectedAt: Date.now()
        };
        return e in ae || (ae[e] = []), ae[e].push(o), y.debug(`video discovery: added ${e} player`), o
    }

    function ue(e) {
        return e in ae
    }

    function pe(e, t) {
        null === e.sticky && (e.sticky = t, t && y.debug(`video discovery: ${e.vendor} player is sticky`))
    }

    function ge(e, t) {
        e.outstream = "boolean" == typeof t ? t : null
    }

    function me() {
        const e = Object.keys(ae);
        for (let t = 0; t < e.length; t++) {
            const n = ce(e[t]);
            for (let e = 0; e < n.length; e++)
                if (null === n[e].sticky) return !0
        }
        return !1
    }

    function fe() {
        const e = [],
            t = Object.keys(ae);
        for (let n = 0; n < t.length; n++) {
            const i = ce(t[n]);
            for (let t = 0; t < i.length; t++) {
                const n = i[t],
                    r = de(n);
                r && e.push({
                    vendor: n.vendor,
                    playerId: n.playerId,
                    container: r,
                    sticky: n.sticky,
                    outstream: n.outstream,
                    detectedAt: n.detectedAt
                })
            }
        }
        return e
    }
    const he = 242e3,
        ve = .5,
        ye = .3,
        we = 102400,
        be = window.IntersectionObserver && window.IntersectionObserverEntry && window.IntersectionObserverEntry.prototype && "intersectionRatio" in window.IntersectionObserverEntry.prototype,
        Ee = ["banner"];
    let _e = e => Ee.indexOf(e.mediaType) > -1;
    const Se = e => "adsense" === e.viewabilityTracker || "dcm" === e.viewabilityTracker || "bouncex" === e.viewabilityTracker ? {
            root: null,
            rootMargin: "0px",
            threshold: ve
        } : {
            root: null,
            rootMargin: "0px",
            threshold: e.pbjsBid.width * e.pbjsBid.height > he ? ye : ve
        },
        Ae = {},
        Ie = {};

    function Pe(e) {
        const t = Ae[e.universalPlacementId];
        t && (t.disconnect(), delete Ae[e.universalPlacementId]), Ie[e.universalPlacementId] && (clearTimeout(Ie[e.universalPlacementId]), delete Ie[e.universalPlacementId])
    }
    const De = e => (t, n) => {
        t.forEach((t => {
            Ae[e.universalPlacementId] === n && (t.isIntersecting ? (y.debug(`viewable timer starting for element: ${t.target.getAttribute("id")} placement: ${e.universalPlacementId}`), Ie[e.universalPlacementId] = setTimeout((() => {
                n.unobserve(t.target), Pe(e), y.debug(`element: ${t.target.getAttribute("id")} placement: ${e.universalPlacementId} was viewed`), e.history.push({
                    timestamp: D(),
                    type: a.AD_PLACEMENT_VIEWABLE
                }), K(a.AD_PLACEMENT_VIEWABLE, e), e.viewabilityTracker = null
            }), 1e3)) : (y.debug(`element: ${t.target.getAttribute("id")} placement: ${e.universalPlacementId} is out of view`), Ie[e.universalPlacementId] && (clearTimeout(Ie[e.universalPlacementId]), delete Ie[e.universalPlacementId], y.debug(`viewable timer stopped for element: ${t.target.getAttribute("id")} placement: ${e.universalPlacementId}`))))
        }))
    };

    function Re(e) {
        if (!be || !e) return;
        if (!("pbjs" !== e.viewabilityTracker || e.pbjsBid && _e(e.pbjsBid))) return void Pe(e);
        Pe(e);
        const t = new IntersectionObserver(De(e), Se(e)),
            n = document.getElementById(e.divId);
        n ? (t.observe(n), Ae[e.universalPlacementId] = t) : y.error(`element: ${e.divId} not found`)
    }

    function ke(e) {
        return e > he ? ye : ve
    }

    function Ce(e, t, n) {
        return e >= we || t >= ke(n)
    }

    function Te(e) {
        const t = Ge(e);
        if (t <= 0) return {
            visibleArea: 0,
            viewable: !1
        };
        const n = Ue(e);
        return {
            visibleArea: t,
            viewable: Ce(t, n > 0 ? t / n : 0, n)
        }
    }

    function Ne(e) {
        const t = e && e.container;
        if (!t) return {
            visibleArea: 0,
            viewable: !1
        };
        const n = Ge(t);
        if (n <= 0) return {
            visibleArea: 0,
            viewable: !1
        };
        const i = Ue(t);
        return {
            visibleArea: n,
            viewable: (i > 0 ? n / i : 0) >= ke(i)
        }
    }

    function Oe() {
        const e = fe();
        if (0 === e.length) return e;
        const t = [];
        return Pt().forEach((e => {
            const n = document.getElementById(e.divId);
            n && t.push(n)
        })), e.filter((e => {
            const n = e.container;
            return !!n && !t.some((e => n === e || n.contains(e) || e.contains(n)))
        }))
    }
    const xe = () => ({
        root: null,
        rootMargin: "0px",
        threshold: .5
    });
    let Le = null;

    function Me() {
        return new IntersectionObserver(((e, t) => {
            const n = R();
            e.forEach((e => {
                    if (e.isIntersecting) {
                        const t = e.target.getAttribute("id");
                        if (!t) return void y.error("attentionIO: tracked element has no id");
                        const i = $e[t];
                        if (!i) return void y.error(`attentionIO: adPlacement not found for element: ${t}`);
                        i.attentionState.isVisible = !0, i.attentionState.lastEnteredViewport = n
                    } else {
                        const t = e.target.getAttribute("id");
                        if (!t) return void y.error("attentionIO: tracked element has no id");
                        const i = $e[t];
                        if (!i) return void y.error(`attentionIO: adPlacement not found for element: ${t}`);
                        i.attentionState.isVisible && (i.attentionState.pastTimeInViewport += n - i.attentionState.lastEnteredViewport), i.attentionState.isVisible = !1, i.attentionState.lastExitedViewport = n
                    }
                })),
                function() {
                    let e = 0;
                    for (const t of Object.keys($e)) $e[t].attentionState.isVisible && e++;
                    ne().forEach((t => {
                        Te(t).viewable && e++
                    })), Oe().forEach((t => {
                        Ne(t).viewable && e++
                    })), e > 0 && K(a.SESSION_AD_PLACEMENTS_VISIBLE, {
                        count: e
                    })
                }()
        }), xe())
    }
    const $e = {},
        Be = {};
    let je = {};

    function Ve(e) {
        if (!be || !e) return;
        if (!Le) return void($e[e.divId] || (je[e.divId] = e));
        if (Be[e.divId]) {
            if (e.attentionState && e.attentionState.isVisible) {
                const t = R();
                e.attentionState.pastTimeInViewport += t - e.attentionState.lastEnteredViewport, e.attentionState.lastEnteredViewport = t, e.attentionState.lastExitedViewport = t
            }
            Le.unobserve(Be[e.divId]), delete Be[e.divId], delete $e[e.divId]
        }
        const t = document.getElementById(e.divId);
        t ? (e.attentionState = e.attentionState || {
            isVisible: !1,
            pastTimeInViewport: 0,
            lastEnteredViewport: 0,
            lastExitedViewport: 0
        }, $e[e.divId] = e, Be[e.divId] = t, Le.observe(t)) : y.warn(`attentionIO: element ${e.divId} not found`)
    }

    function Ge(e) {
        if (!e) return 0;
        const t = e.getBoundingClientRect(),
            n = window.innerWidth || document.documentElement.clientWidth,
            i = window.innerHeight || document.documentElement.clientHeight,
            r = Math.max(t.left, 0),
            o = Math.min(t.right, n),
            a = Math.max(0, o - r),
            s = Math.max(t.top, 0),
            d = Math.min(t.bottom, i);
        return a * Math.max(0, d - s)
    }

    function Ue(e) {
        if (!e) return 0;
        const t = e.getBoundingClientRect();
        return t.width * t.height
    }

    function Fe(e) {
        return "function" == typeof e
    }

    function qe(e) {
        return "object" == typeof e && null !== e
    }
    let We = null;
    const He = "function" == typeof WeakMap ? new WeakMap : null;

    function ze(e) {
        if (!He) return window.getComputedStyle(e);
        const t = He.get(e);
        if (t) return t;
        const n = window.getComputedStyle(e);
        return He.set(e, n), n
    }

    function Je(e, t) {
        if (!e) return null;
        let n = e;
        for (let e = 0; e < t && n && n !== document.documentElement; e++) {
            if (n.style && "fixed" === n.style.position) return !0;
            try {
                if ("fixed" === ze(n).position) return !0
            } catch (e) {}
            n = n.parentElement
        }
        return null
    }

    function Ye(e) {
        if (!Fe(window.jwplayer)) return null;
        for (let t = 0; t < 10; t++) {
            const n = window.jwplayer(t);
            if (!n || !Fe(n.getContainer)) break;
            if (n.getContainer() === e) return n
        }
        return null
    }

    function Xe(e) {
        return !Number.isFinite(e) || e <= 0 || e > 600 ? null : e
    }
    const Ke = [{
            name: "adplayerpro",
            detectGlobal: () => Fe(window.AdPlayerPro) || Fe(window.playerPro),
            findContainers: () => [...document.querySelectorAll(".orp-player-wrapper")].map((e => e.parentElement)).filter(Boolean),
            checkSticky(e) {
                const t = e.querySelector(".orp-player-wrapper");
                return t && (!!t.classList.contains("orp-went-sticky") || !!t.querySelector(".orp-went-sticky")) || null
            }
        }, {
            name: "adventive",
            detectGlobal: () => qe(window.Adventive),
            findContainers: () => [...document.querySelectorAll('div[id^="adventive_"]:not([id*="_htmlx_"])')],
            checkSticky(e) {
                const t = e.querySelector('iframe[id^="adventive_htmlx_"][id$="_frame"]');
                return t ? Je(t, 5) : null
            }
        }, {
            name: "aniview",
            detectGlobal: () => Fe(window.avPlayer),
            findContainers() {
                const e = document.querySelectorAll('iframe[id^="AVLoader"]'),
                    t = [];
                return e.forEach((e => {
                    const n = e.id.replace(/^AVLoader/, ""),
                        i = document.getElementById(n);
                    i && t.push(i)
                })), t
            },
            checkSticky(e) {
                if ("fixed" === e.style.position) return !0;
                try {
                    if (parseInt(e.style.zIndex, 10) >= 9999999 && "fixed" === ze(e).position) return !0
                } catch (e) {}
                return null
            }
        }, {
            name: "connatix",
            detectGlobal: () => void 0 !== window.cnx || void 0 !== window.cnxel || void 0 !== window.cnxResources || "function" == typeof window.cnxAddEventListener,
            findContainers: () => [...document.querySelectorAll(".cnx-main-container")],
            checkSticky(e) {
                const t = ["cnx-float", "cnx-pinned", "cnx-always-floating"];
                for (const n of t)
                    if (e.classList.contains(n)) return !0;
                for (const n of t)
                    if (e.querySelector(`.${n}`)) return !0;
                return null
            }
        }, {
            name: "exco",
            detectGlobal: () => qe(window.__EXCO) || qe(window.STREAM_CONFIGS) || qe(window.ExCoPlayer),
            findContainers: () => [...document.querySelectorAll('.pbs[data-pbs-root="true"]')],
            checkSticky(e) {
                try {
                    const t = e.id || e.getAttribute("data-id"),
                        n = window.STREAM_CONFIGS && window.STREAM_CONFIGS[t];
                    if (n && n.stickyMode && ["sticky-only", "persistent", "non-persistent-in-view", "non-persistent-per-session"].includes(n.stickyMode)) return !0
                } catch (e) {}
                return "sticky" === e.getAttribute("data-pbs-position") || !("static" !== e.getAttribute("data-pbs-position") || !e.getAttribute("data-pbs-sticky")) || null
            }
        }, {
            name: "jwplayer",
            detectGlobal: () => Fe(window.jwplayer),
            findContainers() {
                if (!Fe(window.jwplayer)) return [];
                const e = [];
                for (let t = 0; t < 10; t++) {
                    const n = window.jwplayer(t);
                    if (!n || !Fe(n.getContainer)) break;
                    const i = n.getContainer();
                    i && "DIV" === i.tagName && i.classList.contains("jwplayer") && e.push(i)
                }
                const t = document.querySelectorAll("div.jwplayer");
                for (let n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
                return e
            },
            getPlayerKey(e) {
                try {
                    const t = Ye(e);
                    return t && "number" == typeof t.uniqueId ? t.uniqueId : null
                } catch (e) {
                    return null
                }
            },
            isOutstream(e) {
                try {
                    const t = Ye(e);
                    if (!t || !Fe(t.getConfig)) return null;
                    const n = t.getConfig();
                    return !!(n && n.advertising && n.advertising.outstream)
                } catch (e) {
                    return null
                }
            },
            bindAdEvents(e, t) {
                try {
                    const n = Ye(e);
                    if (!n || !Fe(n.on)) return !1;
                    const i = {
                            id: null,
                            key: null,
                            duration: null,
                            watched: 0,
                            skipped: !1,
                            seq: 0
                        },
                        r = e => {
                            i.id = e, i.key = `${null===e?"s":e}:${i.seq}`, i.seq++, i.duration = null, i.watched = 0, i.skipped = !1
                        },
                        o = (e, t) => {
                            const n = function(e) {
                                if (!e) return null;
                                const t = e.adPlayId || e.id;
                                return "string" == typeof t && t ? t : null
                            }(e);
                            (t || null === i.key || null !== n && n !== i.id) && r(n)
                        },
                        a = e => {
                            if (null !== i.duration) return;
                            const n = Xe(e && e.duration);
                            null !== n && (i.duration = n, t("adDurationAvg", n, i.key))
                        },
                        s = e => {
                            if (null === e) return;
                            const t = null !== i.duration && e > i.duration ? i.duration : e;
                            t > i.watched && (i.watched = t)
                        },
                        d = () => {
                            null === i.key || null === i.duration || i.watched <= 0 || t("adWatchedAvg", i.watched, i.key)
                        },
                        c = e => t => {
                            try {
                                e(t)
                            } catch (e) {}
                        };
                    return n.on("adViewableImpression", (() => t("adViewableImpressions"))), n.on("adClick", (() => t("adClicks"))), n.on("adImpression", c((e => {
                        t("adImpressions"), o(e, !0), a(e)
                    }))), n.on("adTime", c((e => {
                        o(e), a(e), s(Xe(e && e.position)), d()
                    }))), n.on("adComplete", c((e => {
                        t("adCompleted"), o(e), a(e), i.skipped || s(i.duration), d()
                    }))), n.on("adSkipped", c((e => {
                        t("adSkipped"), o(e), a(e), s(Xe(e && e.position)), i.skipped = !0, d()
                    }))), !0
                } catch (e) {
                    return !1
                }
            },
            checkSticky(e) {
                try {
                    const t = Ye(e);
                    if (t && Fe(t.getFloating) && t.getFloating()) return !0;
                    if (document.getElementById("mini-floating-vid")) return !0;
                    if (t && Fe(t.getConfig)) {
                        const n = function(e) {
                            const t = e && e.floating;
                            if (!qe(t)) return null;
                            if (qe(t.devices)) {
                                const e = function() {
                                        try {
                                            const e = navigator.userAgent,
                                                t = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
                                            if (/iPad|Android(?!.*Mobile)|Tablet/i.test(e) || t) return "tablet";
                                            if (/iPhone|iPod|Android.*Mobile|Windows Phone/i.test(e)) return "mobile";
                                            const n = navigator.maxTouchPoints > 0,
                                                i = Fe(window.matchMedia) && window.matchMedia("(pointer: coarse)").matches;
                                            return n && i ? window.innerWidth < 768 ? "mobile" : "tablet" : "desktop"
                                        } catch (e) {
                                            return null
                                        }
                                    }(),
                                    n = e ? t.devices[e] : null;
                                if (qe(n)) return !!n.enabled
                            }
                            return "never" !== t.mode
                        }(t.getConfig());
                        if (!0 === n) return !0;
                        if (!1 === n) {
                            const t = e.getBoundingClientRect();
                            if (t.top + t.height < 0) return !1
                        }
                    }
                } catch (e) {}
                return !!e.classList.contains("jw-flag-floating") || null
            }
        }, {
            name: "mediavine",
            detectGlobal: () => (void 0 !== window.$mediavine || void 0 !== window.$adManagementConfig || window.mvWrapperJsonp) && (!!document.getElementById("universalPlayer") || !!document.getElementById("universalPlayer_wrapper")),
            findContainers() {
                const e = document.querySelector("#universalPlayer_wrapper.adunitwrapper") || document.querySelector('[data-wrapper="universalPlayer"]');
                return e ? [e] : []
            },
            checkSticky: e => Je(e, 5)
        }, {
            name: "minutely",
            detectGlobal: () => !!window._min_launcher_active || !!window._min_tv || !!window._tvp,
            findContainers: () => [...document.querySelectorAll("div.editor-tv-wrapper")],
            checkSticky(e) {
                try {
                    const e = window._min_tv ? .launcher ? .placements;
                    if (e) {
                        const t = e.find((e => !0 === e.injected));
                        if (t) {
                            const e = t.configOverrides ? .stickyPlayer;
                            if (qe(e) && Object.keys(e).length > 0) return !0;
                            if (!e || !1 === e) return !1
                        }
                    }
                } catch (e) {}
                const t = document.getElementById("minute-size-container");
                return !(!t || !t.classList.contains("min-tv-is-sticky")) || null
            }
        }, {
            name: "primis",
            detectGlobal: () => void 0 !== window.PrimisApiConfig || window.sekindoDisplayedPlacement,
            findContainers() {
                const e = document.getElementById("primisPlayerContainerDiv") || document.querySelector('[id^="primis_playerSekindoSPlayer"]') || document.querySelector('[id^="native_playerSekindoSPlayer"]');
                return e ? [e] : []
            },
            checkSticky(e) {
                if (window.sekindoFlowingPlayerOn) return !0;
                let t = e;
                return e && "primisPlayerContainerDiv" === e.id && (t = e.querySelector('[id^="primis_playerSekindoSPlayer"]') || e.querySelector('[id^="native_playerSekindoSPlayer"]')), Je(t || e, 5)
            }
        }, {
            name: "radiantmedia",
            detectGlobal: () => Fe(window.RadiantMP),
            findContainers: () => [...document.querySelectorAll(".rmp-container")],
            checkSticky(e) {
                try {
                    const t = window.rmpGlobals ? .rmpInstances;
                    if (t)
                        for (const n of t)
                            if (n.dom ? .container === e) {
                                if (!0 === n.floating) return !0;
                                if (!0 === n.floatingStatus) return !0
                            }
                } catch (e) {}
                return !!e.classList.contains("rmp-detach") || !!document.getElementById("rmp-anchor-element") || !(!e.parentElement || "sticky-container" !== e.parentElement.id) || null
            }
        }, {
            name: "raptive",
            detectGlobal: () => qe(window.adthrive),
            findContainers() {
                const e = [];
                return document.querySelectorAll('[id^="adthrive-auto-injected-container"], [id^="adthrive-related-sticky-container"], .adthrive-sticky-outstream').forEach((t => e.push(t))), 0 === e.length && document.querySelectorAll(".raptive-player-container").forEach((t => {
                    const n = t.closest('[id^="adthrive-"]');
                    n && e.push(n)
                })), e
            },
            checkSticky(e) {
                try {
                    if (e.classList.contains("adthrive-sticky-outstream")) {
                        const e = window.adthrive ? .siteAds ? .videoPlayers ? .partners ? .stickyOutstream;
                        let t = "unknown";
                        if ("desktop" === window.adthrive ? .deviceType && (t = "desktop"), "phone" === window.adthrive ? .deviceType && (t = "mobile"), "tablet" === window.adthrive ? .deviceType && (t = "mobile"), "unknown" === t && (t = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop"), e && e[t] ? .enabled) return !0
                    }
                } catch (e) {}
                const t = e.className + " " + (e.parentElement ? .className || "") + " " + (e.querySelector(".raptive-player-container") ? .className || "");
                return !!/adthrive-collapse-(bottom|top)|raptive-player-sticky-(bottom|top)/.test(t) || !!e.querySelector(".adthrive-sticky-outstream-active") || null
            }
        }, {
            name: "showheroes",
            detectGlobal: () => qe(window.__VR) && Array.isArray(window.__VR ? .widgets) || void 0 !== window.__adsbyshowheroes || void 0 !== window.vpt && "function" == typeof window.vpt.play,
            findContainers: () => [...document.querySelectorAll('[id*="viralize-wide-wrapper"]')],
            checkSticky(e) {
                try {
                    const e = window.__VR ? .widgets;
                    if (e) {
                        let t = !1;
                        for (const n of e) {
                            const e = n.config ? .get ? .("vip_mode");
                            if (e && "no" !== e) return !0;
                            "no" === e && (t = !0)
                        }
                        if (t) return !1
                    }
                } catch (e) {}
                return !!e.querySelector('[class*="-vip"]') || null
            }
        }, {
            name: "smartclip",
            detectGlobal: () => void 0 !== window.outstreamplayer && void 0 !== window.smartclientcore,
            findContainers() {
                const e = [],
                    t = function() {
                        if (We) return We;
                        const e = document.getElementsByTagName("iframe");
                        return We = e, e
                    }();
                for (const n of t) {
                    try {
                        const e = n.src;
                        if (e && /^https?:\/\//i.test(e) && new URL(e).origin !== window.location.origin) continue
                    } catch (e) {}
                    try {
                        const t = n.contentDocument || n.contentWindow ? .document;
                        t && t.querySelector(".outstreamplayer__outer") && e.push(n.parentElement || n)
                    } catch (e) {}
                }
                return e
            },
            checkSticky(e) {
                const t = e.querySelector("iframe") || ("IFRAME" === e.tagName ? e : null);
                return !(!t || "fixed" !== t.style.position) || null
            }
        }, {
            name: "stn",
            detectGlobal: () => void 0 !== window.mmVoltaxPlayerConfig || void 0 !== window.voltax && window.voltax ? .players,
            findContainers: () => {
                const e = [...document.querySelectorAll("[data-stn-player]")],
                    t = e.filter((e => "DIV" === e.tagName));
                if (t.length) return t;
                if (e.length) return e;
                const n = [...document.querySelectorAll("stn-player")];
                if (n.length) return n;
                const i = [...document.querySelectorAll("voltax-player")];
                return i.length ? i : []
            },
            checkSticky(e) {
                try {
                    const e = window.mmVoltaxPlayerConfig ? .player ? .config;
                    if (!0 === e ? .anchor_options ? .anchor_enabled) return !0;
                    const t = /Mobi|Android/i.test(navigator.userAgent) ? e ? .anchorOptionsVariations ? .mobile : e ? .anchorOptionsVariations ? .desktop;
                    if (t) {
                        if (!0 === t.anchor_enabled && "none" !== t.anchor_viewability_method) return !0;
                        if (!1 === t.anchor_enabled || "none" === t.anchor_viewability_method) return !1
                    }
                    if (e ? .behavior ? .isFloatApiEnabled) return !0
                } catch (e) {}
                const t = document.getElementById("voltax-mp-video") || document.querySelector("voltax-player");
                if (t ? .shadowRoot) {
                    const e = t.shadowRoot.querySelector(".voltax-mp-placeholder");
                    if (e ? .classList.contains("floating") || e ? .classList.contains("voltax-mp-placeholder-anchor")) return !0
                }
                return null
            }
        }, {
            name: "targetvideo",
            detectGlobal: () => Fe(window.$bp) || Fe(window.BPLR),
            findContainers() {
                const e = window.$bp || window.BPLR;
                return e && e.players ? Object.values(e.players).map((e => e.el)).filter(Boolean) : [...document.querySelectorAll("div.bplr")]
            },
            checkSticky(e) {
                try {
                    const t = /Mobi|Android/i.test(navigator.userAgent),
                        n = window.$bp || window.BPLR;
                    if (n ? .players)
                        for (const i of Object.values(n.players))
                            if (i.el === e) {
                                if (i.isSticky) return !0;
                                if (i.config ? .simple_sticky || i.config ? .slide_inview || i.config ? .boostSticky) return !0;
                                if (t && (i.config ? .slide_intop || i.config ? .slide_inview_mobile)) return !0;
                                if (i.config ? .slide_inposition || i.config ? .lightbox_feature) return !0;
                                if ("fixed" === i.playerHolder ? .el ? .style.position) return !0
                            }
                } catch (e) {}
                const t = e.querySelector(".bplr-holder");
                return !(!t || "fixed" !== t.style.position) || null
            }
        }, {
            name: "teads",
            detectGlobal: () => qe(window.teads),
            findContainers: () => [...document.querySelectorAll("div.teads-inread")],
            checkSticky(e) {
                const t = e.querySelector(".teads-player");
                return t && (!!t.classList.contains("smart-position-corner") || !!t.classList.contains("smart-position-top") || "fixed" === t.style.position || "fixed" === e.style.position) || null
            }
        }, {
            name: "unibots",
            detectGlobal: () => qe(window.unibots) || qe(window.mvPlayer) || Fe(window.unibotsPlayer) || Fe(window.initMVPlayer) || Fe(window.unibotsOsPlayer),
            findContainers: () => {
                const e = [...document.querySelectorAll(".ub-player-container, .mvp-container, [id^='unibots-video'], [id^='div-ub-']")];
                return e.filter((t => !e.some((e => e !== t && e.contains(t)))))
            },
            checkSticky(e) {
                const t = "ubVideo" === e.id ? e : e.querySelector("#ubVideo");
                if (t) {
                    const e = t.classList;
                    for (const t of ["right", "left", "bottom_right"])
                        if (e.contains(`ubsticky_${t}`) || e.contains(`pbsticky_${t}`)) return !0
                }
                const n = "unibots-video" === e.id ? e : e.querySelector("#unibots-video");
                if (n) {
                    const e = n.classList;
                    if (e.contains("ubsticky_right") || e.contains("ubsticky_left") || e.contains("ubsticky_bottom_right")) return !0
                }
                if (document.getElementById("ubStickyDiv")) return !0;
                if ("fixed" === e.style.position) return !0;
                const i = e.parentElement;
                return !(!i || "fixed" !== i.style.position) || null
            }
        }, {
            name: "vdoai",
            detectGlobal: () => qe(window.vdo_ai_),
            findContainers() {
                const e = window.vdo_ai_;
                if (e && Array.isArray(e.ids)) {
                    const t = e.ids.map((e => e.parentId ? document.getElementById(e.parentId) : null)).filter(Boolean);
                    if (t.length) return t
                }
                const t = document.querySelectorAll('[id^="_vdo_ads_player_ai_"]');
                if (t.length) return [...t].map((e => e.parentElement)).filter(Boolean);
                if (e && e.ads) {
                    const t = Object.keys(e.ads).map((e => document.getElementById(e))).filter(Boolean).map((e => e.parentElement)).filter(Boolean);
                    if (t.length) return t
                }
                const n = [...document.querySelectorAll('div[id^="v-"]')].filter((e => /^v-.+-v\d+(-\d+)?$/.test(e.id)));
                return n.length ? n : []
            },
            checkSticky(e) {
                const t = e.querySelector('[id^="_vdo_ads_player_ai_"]'),
                    n = [e, t, e.firstElementChild].filter(Boolean);
                for (const e of n) {
                    if (e.style && "fixed" === e.style.position) return !0;
                    if ("fixed" === ze(e).position) return !0
                }
                return null
            }
        }, {
            name: "vidazoo",
            detectGlobal: () => void 0 !== window._vdzwgt_ || void 0 !== window.__vdzworkers__,
            findContainers() {
                const e = [...document.querySelectorAll('[id^="vdzw_"]'), ...document.querySelectorAll(".wgt-artemis")],
                    t = e.filter((t => !e.some((e => e !== t && e.contains(t)))));
                return [...new Set(t)]
            },
            checkSticky(e) {
                let t = e.querySelector('vdz[data-view="floater"]');
                return !t && e.shadowRoot && (t = e.shadowRoot.querySelector('vdz[data-view="floater"]')), t ? Je(t, 6) || null : !!e.classList.contains("vdz-floating") || Je(e, 5) || null
            }
        }, {
            name: "viously",
            detectGlobal: () => qe(window.viously) && !0 === window.viously.initialised,
            findContainers() {
                const e = [...document.querySelectorAll(".viously-player, .vsly-player, .vsly-placeholder, .viously")];
                return e.filter((t => !e.some((e => e !== t && e.contains(t)))))
            },
            checkSticky(e) {
                const t = e.querySelector(".viously-ui-container");
                if (t && "string" == typeof t.className && t.className.includes("viously-sticked")) return !0;
                if ("fixed" === e.style.position) return !0;
                const n = e.parentElement;
                return !(!n || "fixed" !== n.style.position) || null
            }
        }, {
            name: "vidyard",
            detectGlobal: () => void 0 !== window.Vidyard || void 0 !== window.VidyardV4,
            findContainers: () => {
                const e = [];
                let t = [];
                window.Vidyard && Fe(window.Vidyard.players) ? t = Object.values(window.Vidyard.players()) : window.Vidyard && qe(window.Vidyard._players) ? t = Object.values(window.Vidyard._players) : window.VidyardV4 && Array.isArray(window.VidyardV4.players) && (t = window.VidyardV4.players);
                for (const n of t) n.container ? e.push(n.container) : n.element && e.push(n.element);
                return e
            },
            checkSticky: e => null
        }],
        Qe = Ke,
        Ze = 1e3;

    function et(e) {
        return "function" == typeof e
    }

    function tt(e) {
        return et(e.isOutstream) || et(e.bindAdEvents)
    }
    let nt = null,
        it = !1,
        rt = null,
        ot = 0;

    function at() {
        let e = !1;
        for (const n of Qe) try {
            if (ue(n.name) || n.detectGlobal() && ((t = n.name) in ae || (ae[t] = []), y.debug(`video discovery: detected ${n.name} via global`), K(a.VIDEO_PLAYER_DISCOVERED, {
                    vendor: n.name
                })), ue(n.name)) {
                const t = n.findContainers(),
                    i = tt(n);
                for (const r of t) {
                    const t = et(n.getPlayerKey) ? n.getPlayerKey(r) : null,
                        o = le(n.name, r, t);
                    if (o) {
                        if (e = !0, i) {
                            if (et(n.isOutstream)) try {
                                ge(o, n.isOutstream(r))
                            } catch (e) {
                                y.error(`video discovery: outstream check failed for ${n.name}: ${e}`)
                            }
                            if (et(n.bindAdEvents)) try {
                                n.bindAdEvents(r, ((e, t, i) => {
                                    K(a.VIDEO_PLAYER_AD_EVENT, {
                                        vendor: n.name,
                                        playerId: o.playerId,
                                        field: e,
                                        value: t,
                                        sampleId: i,
                                        outstream: o.outstream
                                    })
                                }))
                            } catch (e) {
                                y.error(`video discovery: ad event binding failed for ${n.name}: ${e}`)
                            }
                        }
                        const t = S(r, m);
                        K(a.VIDEO_PLAYER_CONTAINER_FOUND, {
                            vendor: n.name,
                            container: r,
                            viewport: t ? t.viewport : null,
                            row: t ? t.row : null,
                            playerId: i ? o.playerId : null,
                            outstream: i ? o.outstream : null
                        })
                    }
                }
            }
        } catch (e) {
            y.error(`video discovery: error scanning ${n.name}: ${e}`)
        }
        var t;
        e && dt(), !me() || it && rt || function(e = !0) {
            it || (it = !0, document.addEventListener("scroll", st, {
                capture: !0,
                passive: !0
            })), rt || (y.debug("video discovery: starting periodic sticky checks"), rt = setInterval((() => {
                dt()
            }), 2e3)), e && dt()
        }(!1)
    }

    function st() {
        const e = Date.now();
        e - ot < Ze || (ot = e, dt())
    }

    function dt() {
        for (const e of Qe) {
            if (!ue(e.name)) continue;
            const t = ce(e.name);
            for (const n of t) {
                if (null !== n.sticky) continue;
                const t = n.containerRef.deref();
                if (t) try {
                    const i = e.checkSticky(t);
                    null !== i && (pe(n, i), K(a.VIDEO_PLAYER_STICKY_RESOLVED, {
                        vendor: e.name,
                        container: t,
                        sticky: i,
                        playerId: tt(e) ? n.playerId : null
                    }))
                } catch (t) {
                    y.error(`video discovery: sticky check error for ${e.name}: ${t}`)
                }
            }
        }
        me() || (ct(), y.debug("video discovery: all sticky checks resolved, listeners removed"))
    }

    function ct() {
        it && (document.removeEventListener("scroll", st, {
            capture: !0,
            passive: !0
        }), it = !1), rt && (clearInterval(rt), rt = null)
    }

    function lt(e) {
        return e.filter((t => !e.some((e => e !== t && e.contains(t)))))
    }
    const ut = [{
            name: "taboola",
            findContainers: () => lt([...document.querySelectorAll('div[id^="taboola-"], div[id^="Taboola-main-"], .trc_related_container, .tbl-feed-container')]),
            isFilled: e => !!e.querySelector('[id^="trc_wrapper_"], .trc_rbox_div, .trc_related_container, .tbl-feed-container')
        }, {
            name: "outbrain",
            findContainers: () => lt([...document.querySelectorAll('.OUTBRAIN, [id^="outbrain_widget_"]')]),
            isFilled: e => !!e.querySelector('.ob-widget, .ob-widget-items-container, .ob-dynamic-rec-container, a[href*="paid.outbrain.com/network/redir"]')
        }, {
            name: "revcontent",
            findContainers: () => lt([...document.querySelectorAll('[data-rc-widget], [data-rc-next-widget], [id^="rc-widget-"], [data-widget-host="revcontent"], [data-widget-host="habitat"], div#rev-flicker.rev-flicker')]),
            isFilled: e => e.classList.contains("loaded") || "true" === e.getAttribute("data-widget-rendered") || !!e.querySelector(".rc-item, .rc-wc, .rc-branding, [data-position]")
        }, {
            name: "dianomi",
            findContainers: () => lt([...document.querySelectorAll(".dianomi_context, .dianomi-context, [data-dianomi-context-id]")]),
            isFilled: e => "1" === e.getAttribute("data-dianomi-context-loaded") || "1" === e.getAttribute("data-dianomi-context-done") || !!e.querySelector("iframe.dianomi-parent-iframe, iframe.smartad_iframe, .dianomi-native-iframe")
        }, {
            name: "mgid",
            findContainers: () => lt([...document.querySelectorAll('div[data-type="_mgwidget"], div[id*="ScriptRootC"], div[id^="MarketGidComposite"]')]),
            isFilled: e => !!e.getAttribute("data-uid") || !!e.querySelector('.mgbox, .mgline, [id^="MarketGidComposite"]')
        }, {
            name: "mantis",
            findContainers: () => lt([...document.querySelectorAll("mantis-ui-widget")]),
            isFilled: e => !!e.shadowRoot && !!e.shadowRoot.querySelector("#mantis-ui-widget-container a[href], .mantis-recommender a[href]")
        }],
        pt = 3e3,
        gt = 2e4;
    let mt = !1,
        ft = null,
        ht = 0,
        vt = 0;

    function yt() {
        ht = Date.now() + gt, ft || (bt(), ft = setInterval((() => {
            bt(), Date.now() >= ht && (clearInterval(ft), ft = null)
        }), pt))
    }

    function wt() {
        const e = Date.now();
        e - vt < 1e3 || (vt = e, yt())
    }

    function bt() {
        for (const e of ut) try {
            for (const t of e.findContainers()) {
                if (!e.isFilled(t)) continue;
                const n = t.getBoundingClientRect();
                n.width * n.height <= 0 || Et(e.name, t)
            }
        } catch (t) {
            y.error(`widget discovery: error scanning ${e.name}: ${t}`)
        }
    }

    function Et(e, t) {
        const n = S(t, m);
        if (!n) return;
        const i = function(e, t) {
            if (Z.some((t => t.containerRef.deref() === e))) return null;
            const n = {
                vendor: t.vendor,
                widgetId: "w" + ++ee,
                containerRef: new Q(e),
                viewport: t.viewport,
                row: t.row
            };
            return Z.push(n), y.debug(`widget discovery: added ${t.vendor} widget ${n.widgetId}`), n
        }(t, {
            vendor: e,
            viewport: n.viewport,
            row: n.row
        });
        i && K(a.WIDGET_CONTAINER_FOUND, {
            vendor: e,
            widgetId: i.widgetId,
            viewport: n.viewport,
            row: n.row
        })
    }
    let _t = !1;
    const St = [],
        At = Object.create(null),
        It = {};

    function Pt() {
        return St
    }

    function Dt() {
        return It
    }
    let Rt = !1;

    function kt(e) {
        const t = e.lastRender;
        if (!t) return !1;
        if ("gtag" !== t.type && "pbjs" !== t.type) return !1;
        const {
            pbjsRenderTS: n,
            gtagRenderTS: i,
            gtagSlotRequestedTS: r,
            pbjsBid: o
        } = e;
        return !(!n || !o || !(!i || n >= i || r && n >= r))
    }

    function Ct(e) {
        const t = e.lastRender;
        if (!t) return;
        const {
            pbjsRenderTS: n,
            gtagRenderTS: i
        } = e;
        return "gtag" === t.type && i && t.litemType && (!n || i > n) ? t.litemType : void 0
    }
    const Tt = {},
        Nt = {},
        Ot = {},
        xt = {};
    let Lt = {};

    function Mt(e) {
        if (!e || "function" != typeof e.addService) return;
        const t = e.addService;
        e.addService = function() {
            const n = t.apply(this, arguments);
            try {
                K(a.GPT_SLOT_REGISTERED, {
                    slot: e
                })
            } catch (e) {}
            return n
        }
    }

    function $t() {
        if (Rt) return;
        Rt = !0;
        const e = document.createElement("script");
        e.src = g, e.async = !0, document.head.appendChild(e)
    }

    function Bt(e, t, n) {
        for (const n of t) try {
            const t = e.getTargeting(n);
            if (t && t.length) return t[0]
        } catch (e) {}
        try {
            const t = e.getTargetingKeys();
            for (const i of t || []) {
                if (!i.endsWith(n)) continue;
                const t = e.getTargeting(i);
                if (t && t.length) return t[0]
            }
        } catch (e) {}
        return ""
    }

    function jt(e) {
        const t = e.lastRender;
        if (!t || "gtag" !== t.type) return !1;
        const n = e.pbjsRenderTS - t.timestamp,
            i = e.pbjsBid && e.pbjsBid.adId;
        return void 0 !== t.pbjsAdId ? !!i && i === t.pbjsAdId && n <= p : i && i === t.gtagAdId ? n <= p : n <= u
    }

    function Vt(e, t) {
        let n = null;
        if (F.customPbjsBidToPlacementFn) try {
            const i = F.customPbjsBidToPlacementFn(e, t);
            i && (n = Pt().find((e => e.universalPlacementId === i)) || null)
        } catch (e) {
            y.error(`Error calling customPbjsBidToPlacementFn: ${e}`)
        }
        if (n || (n = Jt(e)), n || (n = function(e) {
                if (!e) return null;
                const t = Pt();
                let n = null,
                    i = 0;
                for (const r of t) {
                    const t = r.lastRender;
                    if (t && "gtag" === t.type && t.gtagAdId === e && (n = r, i++, i > 1)) return y.warn(`more than 1 placement matched for prebid adId ${e}`), null
                }
                return n
            }(t && t.adId)), !n) return;
        const i = D();
        n.pbjsRenderTS = i, n.pbjsBid = t, n.clicked = !1, n.history.push({
            timestamp: i,
            type: a.AD_PLACEMENT_PBJS_RENDERED,
            data: {
                adUnitCode: e.code,
                bidder: t.bidder,
                cpm: t.cpm,
                adId: t.adId || ""
            }
        }), K(a.AD_PLACEMENT_PBJS_RENDERED, n), jt(n) ? n.lastRender && (n.lastRender.pbjsAdId = t.adId || "") : (n.lastRender = {
            type: "pbjs",
            timestamp: i
        }, n.renders++, K(a.AD_PLACEMENT_RENDERED, n), Ve(n), n.viewabilityTracker = "pbjs", Re(n))
    }

    function Gt(e) {
        const t = e.adUnits;
        if (!t || !Array.isArray(t)) return;
        const n = {},
            i = {};
        t.forEach((e => {
            const t = e.code,
                r = N(e, "ortb2Imp.ext.gpid") || "",
                o = `${t}#${r}#${N(e,"ortb2Imp.ext.data.pbadslot")||""}`;
            if (n[o]) return;
            n[o] = !0;
            const s = Jt(e);
            s && (r && K(a.AD_PLACEMENT_PBJS_GPID_SEEN, {
                placement: s,
                gpid: r
            }), F.collectPbjsSummary && (i[s.universalPlacementId] || (i[s.universalPlacementId] = !0, K(a.AD_PLACEMENT_PBJS_AUCTION_INIT, s))))
        }))
    }

    function Ut(e) {
        if (!x(e)) return void y.error("adUnitPlacements is not a plain object, skipping");
        const t = [];
        Object.keys(e).forEach((n => {
            const i = e[n];
            if (i && "string" == typeof i) {
                Tt[n] = i;
                try {
                    for (let e = 0; e < St.length; e++) {
                        const t = St[e];
                        if (t.divId === i) return void(It[n] = t)
                    }
                    const e = Wt(i, "", !1);
                    if (!e) return;
                    t.push(e), It[n] = e
                } catch (e) {
                    y.error(`while adding ad unit placement ${n}->${i}: ${e}`)
                }
            }
        })), Ht(t)
    }

    function Ft() {
        if (!_t) return void y.debug("googletag not loaded yet, skipping ad slot discovery");
        let e = [];
        try {
            e = window.googletag.pubads().getSlots()
        } catch (e) {
            y.error(`while getting slots: ${e}`)
        }
        const t = [];
        e.forEach((e => {
            try {
                const n = e.getSlotElementId(),
                    i = e.getAdUnitPath(),
                    r = en(e);
                for (let e = 0; e < St.length; e++) {
                    const t = St[e];
                    if (t.divId === n) return void(t.gpid && t.gpid === i || (y.debug(`updating gpid for placement ${n} from ${t.gpid} to ${i}`), t.gpid = i))
                }
                const o = Wt(n, i, r);
                if (!o) return;
                t.push(o)
            } catch (e) {
                y.error(`while discovering new ad slot: ${e}`)
            }
        })), Ht(t)
    }

    function qt() {
        Ft(), Ut(T(Tt))
    }

    function Wt(e, t, n = !1) {
        const i = document.getElementById(e);
        if (!i) return void y.debug(`adDiv not found for elementId ${e}, skipping placement creation`, {
            once: !0
        });
        const r = i.getBoundingClientRect(),
            o = Math.max(0, r.top + b()),
            s = _();
        if (0 === s) return void y.error("viewportHeight is 0, skipping placement creation");
        const d = s / m;
        let c = Math.floor(o / d) % m + 1,
            l = Math.floor(o / s) + 1;
        o === s && (l = 1, c = m), n && (l = 0, c = Math.floor(o / d) + 1);
        const u = !(n || !F.enableStickyPlacementSeparation) && (function(e) {
            let t = e;
            const n = F.stickyAncestorDepth;
            for (let e = 0; e < n && t && 1 === t.nodeType && t !== document.body && t !== document.documentElement; e++) {
                if ("fixed" === (t.style && t.style.position)) return !0;
                try {
                    if ("fixed" === window.getComputedStyle(t).position) return !0
                } catch (e) {}
                t = t.parentElement
            }
            return !1
        }(i) || function(e) {
            return "string" == typeof e && tn.test(e)
        }(e));
        return {
            divId: e,
            gpid: t,
            row: c,
            viewport: l,
            sticky: u,
            div: i,
            x: window.scrollX + r.left,
            y: o,
            history: [{
                timestamp: D(),
                type: a.AD_PLACEMENT_FOUND
            }],
            renders: 0
        }
    }

    function Ht(e) {
        if (!e || 0 === e.length) return;
        e.sort(((e, t) => {
            switch (!0) {
                case e.viewport < t.viewport:
                    return -1;
                case e.viewport > t.viewport:
                    return 1;
                case e.row < t.row:
                    return -1;
                case e.row > t.row:
                    return 1;
                case !e.sticky && t.sticky:
                    return -1;
                case e.sticky && !t.sticky:
                    return 1;
                case e.div === t.div:
                    return 0;
                case e.div.compareDocumentPosition(t.div) & Node.DOCUMENT_POSITION_FOLLOWING:
                    return -1;
                default:
                    return 1
            }
        }));
        let t = 0,
            n = null,
            i = null,
            r = null;
        e.forEach((e => {
            const o = !!e.sticky;
            e.viewport === n && e.row === i && o === r || (n = e.viewport, i = e.row, r = o, t = o ? f : 0, St.forEach((n => {
                n.viewport === e.viewport && n.row === e.row && !!n.sticky === o && (t = Math.max(t, n.position))
            }))), t++, e.position = t, e.coordinates = `${e.viewport}-${e.row}-${e.position}`, e.universalPlacementId = btoa(e.coordinates).replace(/=/g, ""), e.stats = Lt[e.universalPlacementId] || null, delete e.div
        })), e.length > 0 && (y.debug(`added ${e.length} new ad placements`), St.push(...e), e.forEach((e => {
            e.divId && (At[e.divId] = e), K(a.AD_PLACEMENT_FOUND, e)
        })))
    }

    function zt() {
        const e = [];
        return window._pbjsGlobals && Array.isArray(window._pbjsGlobals) ? (window._pbjsGlobals.forEach((t => {
            const n = window[t] && window[t].adUnits || [];
            Array.isArray(n) && n.length > 0 && e.push(...n)
        })), e) : e
    }

    function Jt(e) {
        if (!e || !e.code) return null;
        const t = Pt(),
            n = Dt()[e.code];
        if (n) return n;
        for (const n of t)
            if (e.code === n.divId) return n;
        const i = N(e, "ortb2Imp.ext.gpid");
        if (i)
            for (const e of t)
                if (e.gpid && i === `${e.gpid}#${e.divId}`) return e;
        let r = null,
            o = 0;
        for (const n of t)
            if (n.gpid && (e.code === n.gpid || i === n.gpid) && (r = n, o++, o > 1)) {
                y.warn(`more than 1 placement matched for ${e.code}`);
                break
            }
        return 1 === o ? r : null
    }

    function Yt(e) {
        if (!e || "function" != typeof e.getSlotElementId || "function" != typeof e.getAdUnitPath) return null;
        const t = e.getSlotElementId(),
            n = e.getAdUnitPath(),
            i = Pt();
        for (const e of i)
            if (t === e.divId && n === e.gpid) return e;
        for (const e of i)
            if (t === e.divId) return e;
        return null
    }
    let Xt = 0,
        Kt = 0;

    function Qt() {
        if (!document || !document.activeElement || "IFRAME" !== document.activeElement.nodeName) return;
        if (Xt > Kt) return;
        const e = Pt();
        let t = document.activeElement;
        for (let n = 0; n < 3 && (t = t.parentNode, t); n++) {
            if (!t.id) continue;
            const n = e.filter((e => e.divId && e.divId === t.id));
            if (!n.length) continue;
            let i = 0,
                r = null;
            if (n.forEach((e => {
                    e.gtagRenderTS && e.gtagRenderTS > i && (i = e.gtagRenderTS, r = e), e.pbjsRenderTS && e.pbjsRenderTS > i && (i = e.pbjsRenderTS, r = e)
                })), !r) break;
            if (r.clicked) break;
            let o = !1;
            for (let e = r.history.length - 1; e >= 0; e--) {
                const t = r.history[e];
                if (t.type === a.AD_PLACEMENT_VIEWABLE) {
                    o = !0;
                    break
                }
                if (t.type === a.AD_PLACEMENT_GTAG_RENDERED || t.type === a.AD_PLACEMENT_PBJS_RENDERED || t.type === a.AD_PLACEMENT_ADSENSE_RENDERED || t.type === a.AD_PLACEMENT_DCM_RENDERED || t.type === a.AD_PLACEMENT_BOUNCEX_RENDERED) break
            }
            if (!o) break;
            r.clicked = !0, r.history.push({
                timestamp: D(),
                type: a.AD_PLACEMENT_CLICKED
            }), K(a.AD_PLACEMENT_CLICKED, r), Zt(r);
            break
        }
    }

    function Zt(e) {
        try {
            const t = document.activeElement;
            y.debug(`gamera-click activeElement id: ${t.id}`), y.debug(`gamera-click placement id: ${e.universalPlacementId} divId: ${e.divId}`);
            const n = t.getBoundingClientRect();
            y.debug(`gamera-click iframe dimensions: ${n.width}x${n.height}`), y.debug(`gamera-click iframe coordinates: ${n.top},${n.left}`);
            const i = document.getElementById(e.divId).getBoundingClientRect();
            y.debug(`gamera-click divElement dimensions: ${i.width}x${i.height}`), y.debug(`gamera-click divElement coordinates: ${i.top},${i.left}`)
        } catch (e) {
            y.error("error logging ad click", e)
        }
    }

    function en(e) {
        try {
            return !0 === e.getOutOfPage()
        } catch (e) {
            y.error(`error checking if slot is out of page: ${e}`)
        }
        return !1
    }
    const tn = /(^|[-_])sticky([-_]|$)/i,
        nn = new WeakSet;
    let rn = !1,
        on = 0;

    function an(e) {
        rn && e && e.isTrusted && (on = R())
    }
    const sn = /^[A-Za-z0-9_-]+$/,
        dn = {};

    function cn(e) {
        const t = e && e.aliasRegistry;
        if (t)
            for (const e of Object.keys(t)) {
                const n = t[e];
                "string" == typeof n && n && (dn[e] = n)
            }
    }

    function ln(e) {
        if (!e || !e.meta || !Array.isArray(e.meta.advertiserDomains)) return {};
        const t = function(e) {
            let t;
            if ("string" == typeof e.adapterCode && e.adapterCode) t = e.adapterCode;
            else {
                if ("string" != typeof e.bidder || !e.bidder) return;
                t = e.bidder
            }
            return function(e) {
                if ("string" != typeof e || !e) return e;
                const t = {};
                let n = e;
                for (;;) {
                    t[n] = !0;
                    const e = dn[n];
                    if ("string" != typeof e || !e || t[e]) return n;
                    n = e
                }
            }(t)
        }(e);
        if (!t || t.length > 40 || !sn.test(t)) return {};
        const n = e.meta.advertiserDomains.join(",");
        return n.length > 100 ? {} : {
            exchange: t,
            advertiser: n
        }
    }
    const un = /^\d{1,20}$/;

    function pn(e) {
        return "string" == typeof e && un.test(e) ? e : ""
    }

    function gn(e, t) {
        const n = t => {
            const n = e.events.pages;
            for (let e = n.length - 1; e >= 0; e--)
                if (n[e].pvid === t) return void(n[e]._send = !0)
        };
        X(a.AD_PLACEMENT_GTAG_RENDERED, (n => {
            n._ct = null;
            const i = F.ctLineItems;
            if (!i.size) return;
            const r = function(e) {
                    const t = e.history || [];
                    for (let e = t.length - 1; e >= 0; e--)
                        if (t[e].type === a.AD_PLACEMENT_GTAG_RENDERED) return t[e].data || null;
                    return null
                }(n),
                o = r && r.lineItemId;
            if ("string" != typeof o || !i.has(o)) return;
            const s = {
                    rid: A(),
                    renderTs: D(),
                    viewableTs: 0,
                    clickTs: 0,
                    advertiserId: pn(r.advertiserId),
                    lineItemId: o,
                    creativeId: pn(r.creativeId)
                },
                d = {
                    r: s,
                    pvid: null,
                    render: n.lastRender
                };
            n._ct = d,
                function(i) {
                    const r = () => {
                        try {
                            (() => {
                                const i = e.getCurrentPage(),
                                    r = i && t(n),
                                    o = r ? r.trackedRenders = r.trackedRenders || [] : null;
                                !o || o.length >= 50 ? n._ct === d && (n._ct = null) : (o.push(s), d.pvid = i.pvid)
                            })()
                        } catch (e) {
                            y.error(`campaign tracking: ${e}`)
                        }
                    };
                    "function" == typeof queueMicrotask ? queueMicrotask(r) : Promise.resolve().then(r)
                }()
        }));
        const i = e => !!e._ct && e.lastRender === e._ct.render;
        X(a.AD_PLACEMENT_VIEWABLE, (e => {
            i(e) && 0 === e._ct.r.viewableTs && (e._ct.r.viewableTs = D(), e._ct.pvid && n(e._ct.pvid))
        })), X(a.AD_PLACEMENT_CLICKED, (e => {
            i(e) && 0 === e._ct.r.clickTs && (e._ct.r.clickTs = D(), e._ct.pvid && n(e._ct.pvid))
        }))
    }
    const mn = ["renders", "viewable", "clicks"],
        fn = "gamera_cr",
        hn = ["adImpressions", "adViewableImpressions", "adClicks", "adCompleted", "adSkipped"],
        vn = ["adDurationAvg", "adWatchedAvg"];

    function yn(e, t) {
        if ("number" != typeof t) return null;
        e.players = e.players || [];
        for (let n = 0; n < e.players.length; n++)
            if (e.players[n].playerId === t) return e.players[n];
        if (e.players.length >= 20) return null;
        const n = {
            playerId: t
        };
        return e.players.push(n), n
    }
    class wn {
        constructor() {
            this.url = window.location.href, this.referrer = window.document.referrer || "", this.referrerParams = function() {
                const e = {};
                try {
                    const t = I("_fbc"),
                        n = I("_fbp");
                    t && (e.fbc = t), n && (e.fbp = n)
                } catch (e) {}
                return e
            }(), this.viewportSize = [E(), _()], this.domain = void 0, this.partner = void 0, this.dimensions = void 0, this.metrics = void 0, this.userId = void 0, this.sessionId = void 0, this.webMetrics = {}, this.meta = F.meta, this.events = {
                pages: [],
                custom: []
            }, this._startedEmitting = !1, this._startTs = D(), this._lastSeen = this._startTs, this._pbjsGpidsByPage = {}, this._backfillSeen = {}, this.processNewPage();
            const e = e => {
                    const t = this.getCurrentPage();
                    if (!t) return;
                    const n = e.universalPlacementId;
                    return t.adPlacements[n] = t.adPlacements[n] || {}, F.collectPlacementHistory && (t.adPlacements[n].history = e.history), t._send = !0, t.adPlacements[n]
                },
                t = t => {
                    const n = t.universalPlacementId;
                    if (t.lastRenderPvid)
                        for (let e = this.events.pages.length - 1; e >= 0; e--) {
                            const i = this.events.pages[e];
                            if (i.pvid === t.lastRenderPvid && i.adPlacements[n]) return F.collectPlacementHistory && (i.adPlacements[n].history = t.history), i._send = !0, i.adPlacements[n]
                        }
                    return e(t)
                };
            X(a.AD_PLACEMENT_FOUND, (t => {
                e(t)
            })), gn(this, e), X(a.AD_PLACEMENT_GTAG_RENDERED, (t => {
                const n = e(t);
                if (!n) return;
                n.gtagRenders = n.gtagRenders || 0, n.gtagRenders++;
                const i = Ct(t);
                i && this.addLitemImpsAndRev(t, i)
            })), X(a.AD_PLACEMENT_PBJS_RENDERED, (t => {
                const n = e(t);
                n && (n.pbjsRenders = n.pbjsRenders || 0, n.pbjsRenders++, this.addWinningBidImpsAndRev(t.pbjsBid), F.collectPbjsSummary && (n.pbjsSummary = n.pbjsSummary || {}, n.pbjsSummary.wins = n.pbjsSummary.wins || 0, n.pbjsSummary.wins++, n.pbjsSummary.totalCPM = n.pbjsSummary.totalCPM || 0, n.pbjsSummary.totalCPM += t.pbjsBid.cpm))
            })), X(a.AD_PLACEMENT_ADSENSE_RENDERED, (t => {
                const n = e(t);
                if (!n) return;
                n.adSenseRenders = n.adSenseRenders || 0, n.adSenseRenders++;
                let i = 0,
                    r = "USD";
                try {
                    const e = function(e) {
                        const t = zt(),
                            n = Dt();
                        let i = null;
                        for (const [r, o] of Object.entries(n))
                            if (o.universalPlacementId === e.universalPlacementId) {
                                i = t.find((e => e.code === r));
                                break
                            }
                        return i || (i = t.find((t => t.code === e.divId)), i || !e.gpid || (i = t.find((t => t.code === e.gpid || N(t, "ortb2Imp.ext.gpid") === e.gpid || N(t, "ortb2Imp.ext.gpid") === `${e.gpid}#${e.divId}`))), i)
                    }(t);
                    if (e) {
                        const t = function(e) {
                            if (!e || !window._pbjsGlobals || !Array.isArray(window._pbjsGlobals)) return null;
                            for (const t of window._pbjsGlobals)
                                if (window[t] && window[t].adUnits && window[t].adUnits.find((t => t === e))) return window[t];
                            return null
                        }(e);
                        if (t) {
                            const n = t.getHighestUnusedBidResponseForAdUnitCode(e.code);
                            n && n.cpm && n.currency && (i = n.cpm, r = n.currency)
                        }
                    }
                } catch (e) {
                    y.error(`Error getting prebid ad unit for placement ${t.universalPlacementId}: ${e}`)
                }
                const o = (i + .01) / 1e3;
                this.addPageRevenue({
                    type: "adsense",
                    revenue: o,
                    currency: r
                })
            })), X(a.AD_PLACEMENT_DCM_RENDERED, (t => {
                const n = e(t);
                n && (n.dcmRenders = n.dcmRenders || 0, n.dcmRenders++, this.addPageRevenue({
                    type: "dcm",
                    revenue: 1e-5,
                    currency: "USD"
                }))
            })), X(a.AD_PLACEMENT_BOUNCEX_RENDERED, (t => {
                const n = e(t);
                if (!n) return;
                n.bouncexRenders = n.bouncexRenders || 0, n.bouncexRenders++;
                const i = t.bouncexBid && +t.bouncexBid.price || 0,
                    r = t.bouncexBid && t.bouncexBid.currency || "USD";
                this.addPageRevenue({
                    type: "bouncex",
                    revenue: (i + .01) / 1e3,
                    currency: r
                })
            })), X(a.AD_PLACEMENT_PBJS_AUCTION_INIT, (t => {
                const n = e(t);
                n && (n.pbjsSummary = n.pbjsSummary || {}, n.pbjsSummary.auctions = n.pbjsSummary.auctions || 0, n.pbjsSummary.auctions++)
            })), X(a.AD_PLACEMENT_PBJS_GPID_SEEN, (({
                placement: t,
                gpid: n
            }) => {
                if (!e(t)) return;
                const i = this.getCurrentPage();
                if (!i) return;
                const r = i.pvid,
                    o = t.universalPlacementId;
                this._pbjsGpidsByPage[r] = this._pbjsGpidsByPage[r] || {}, this._pbjsGpidsByPage[r][o] = this._pbjsGpidsByPage[r][o] || {};
                const a = this._pbjsGpidsByPage[r][o];
                (a[n] || Object.keys(a).length < 20) && (a[n] = !0)
            })), X(a.AD_PLACEMENT_RENDERED, (t => {
                const n = e(t);
                if (!n) return;
                n.renders = n.renders || 0, n.renders++, n.requests || (n.requests = 1);
                const i = this.getCurrentPage();
                i && (t.lastRenderPvid = i.pvid, this.stampPageFirstRenderMs(i)), t.lastRender && "pbjs" === t.lastRender.type && t.pbjsBid && this.addPageRevenue({
                    type: "pbjs",
                    revenue: t.pbjsBid.cpm / 1e3,
                    currency: t.pbjsBid.currency
                });
                const r = R(),
                    o = function(e, t) {
                        if (!rn) return !1;
                        try {
                            const n = function(e) {
                                    const t = document.getElementById(e.divId);
                                    return !!t && !nn.has(t) && (nn.add(t), !0)
                                }(e),
                                i = e.lastUnifiedRenderTS;
                            return !!i && n && on > i && t - on <= 5e3
                        } catch (e) {
                            return y.error(`while classifying render: ${e}`), !1
                        }
                    }(t, r);
                if (t.skipNextRenderGap) t.skipNextRenderGap = !1;
                else if (o && t.lastUnifiedRenderTS) n.userInitiatedRenders = (n.userInitiatedRenders || 0) + 1;
                else if (t.lastUnifiedRenderTS) {
                    const e = (r - t.lastUnifiedRenderTS) / 1e3;
                    if (t.renderGaps = t.renderGaps || [], e < 900 && t.renderGaps.length < 30) {
                        t.renderGaps.push(e);
                        const i = t.renderGaps.slice().sort(((e, t) => e - t)),
                            r = Math.floor(i.length / 2);
                        n.refreshInterval = i.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r]
                    }
                }
                t.lastUnifiedRenderTS = r
            })), X(a.AD_PLACEMENT_REQUESTED, (t => {
                const n = e(t);
                n && (n.requests = (n.requests || 0) + 1)
            })), X(a.AD_PLACEMENT_GTAG_RENDERED_EMPTY, (t => {
                const n = e(t);
                n && (n.requests || (n.requests = 1))
            })), X(a.AD_PLACEMENT_CLICKED, (e => {
                const n = t(e);
                if (!n) return;
                n.clicks = n.clicks || 0, n.clicks++;
                const i = Ct(e);
                kt(e) ? this.addWinningBidClick(e.pbjsBid) : i && this.addLitemClick(e, i)
            })), X(a.HEAVY_AD_INTERVENTION, (e => {
                const n = this.getCurrentPage();
                if (n && (n.heavyAdInterventions = (n.heavyAdInterventions || 0) + 1, n._send = !0), !e) return;
                if (e.lastUnifiedRenderTS && R() - e.lastUnifiedRenderTS >= 500) {
                    const t = Ct(e);
                    kt(e) ? this.addWinningBidHeavyAdIntervention(e.pbjsBid) : t && this.addLitemHeavyAdIntervention(e, t)
                }
                const i = t(e);
                i && (i.heavyAdInterventions = (i.heavyAdInterventions || 0) + 1)
            })), X(a.AD_PLACEMENT_VIEWABLE, (e => {
                const n = t(e);
                if (!n) return;
                n.viewable = n.viewable || 0, n.viewable++;
                const {
                    sov: i,
                    adDensity: r
                } = function(e) {
                    if (!e || !e.divId) return y.error("calculatePlacementSOV: invalid targetPlacement"), {
                        sov: 0,
                        adDensity: 0
                    };
                    const t = document.getElementById(e.divId);
                    if (!t) return y.warn(`calculatePlacementSOV: element not found for divId ${e.divId}`), {
                        sov: 0,
                        adDensity: 0
                    };
                    const n = Ge(t),
                        i = Pt();
                    let r = 0,
                        o = 0;
                    i.forEach((e => {
                        if (e.renders <= 0) return;
                        const i = document.getElementById(e.divId);
                        if (!i) return;
                        const a = i === t ? n : Ge(i);
                        if (a <= 0) return;
                        r += a;
                        const s = Ue(i);
                        (s > 0 ? a / s : 0) >= ke(s) && o++
                    })), ne().forEach((e => {
                        const {
                            visibleArea: t,
                            viewable: n
                        } = Te(e);
                        t <= 0 || (r += t, n && o++)
                    })), Oe().forEach((e => {
                        const {
                            visibleArea: t,
                            viewable: n
                        } = Ne(e);
                        t <= 0 || (r += t, n && o++)
                    }));
                    let a = 0;
                    return n > 0 && r > 0 && (a = n / r), y.debug(`calculatePlacementSOV: placement ${e.universalPlacementId} SOV=${a.toFixed(4)} density=${o} (${n}px / ${r}px)`), {
                        sov: a,
                        adDensity: o
                    }
                }(e);
                i > 0 && (e.sovValues = e.sovValues || [], e.sovValues.push(i)), r > 0 && (e.adDensityValues = e.adDensityValues || [], e.adDensityValues.push(r));
                const o = Ct(e);
                kt(e) ? this.addWinningBidViewable(e.pbjsBid) : o && this.addLitemViewable(e, o)
            })), X(a.SESSION_NEW_PAGE, (() => {
                for (const e of Pt()) e.lastUnifiedRenderTS = void 0, e.renderGaps = void 0, e.skipNextRenderGap = !1
            })), X(a.SESSION_AD_PLACEMENTS_VISIBLE, (e => {
                const t = this.getCurrentPage();
                t && (t.maxAdPlacementsVisible = Math.max(t.maxAdPlacementsVisible || 0, e.count))
            })), X(a.GAM_AD_REQUESTED, (e => {
                if (e && e.gameraId && e.gameraId.length > 0) {
                    let t = {};
                    e.gameraId.forEach((e => {
                        t[`signals_${e}_gam`] = 1
                    })), this.addPageObservabilityMetrics(t, !0)
                }
            })), X(a.VIDEO_PLAYER_DISCOVERED, (e => {
                const t = this.getCurrentPage();
                t && (t.videoPlayers[e.vendor] = t.videoPlayers[e.vendor] || {}, t._send = !0)
            })), X(a.VIDEO_PLAYER_CONTAINER_FOUND, (e => {
                const t = this.getCurrentPage();
                if (!t) return;
                const n = t.videoPlayers[e.vendor] = t.videoPlayers[e.vendor] || {};
                n.containers = n.containers || 0, n.containers++, "number" == typeof e.viewport && (n.viewports = n.viewports || [], n.viewports.length < 20 && n.viewports.push(e.viewport));
                const i = yn(n, e.playerId);
                i && ("boolean" == typeof e.outstream && (i.outstream = e.outstream), "number" == typeof e.viewport && (i.viewport = e.viewport), "number" == typeof e.row && (i.row = e.row)), t._send = !0
            })), X(a.VIDEO_PLAYER_STICKY_RESOLVED, (e => {
                const t = this.getCurrentPage();
                if (!t) return;
                const n = t.videoPlayers[e.vendor] = t.videoPlayers[e.vendor] || {};
                n.sticky = n.sticky || e.sticky;
                const i = yn(n, e.playerId);
                i && (i.sticky = e.sticky), t._send = !0
            })), X(a.VIDEO_PLAYER_AD_EVENT, (e => {
                const t = this.getCurrentPage();
                if (!t) return;
                const n = -1 !== hn.indexOf(e.field),
                    i = !n && -1 !== vn.indexOf(e.field);
                if (!n && !i) return;
                if (i && (!Number.isFinite(e.value) || e.value <= 0)) return;
                const r = yn(t.videoPlayers[e.vendor] = t.videoPlayers[e.vendor] || {}, e.playerId);
                r ? ("boolean" != typeof r.outstream && "boolean" == typeof e.outstream && (r.outstream = e.outstream), n ? r[e.field] = (r[e.field] || 0) + 1 : function(e, t, n, i, r, o) {
                    const a = e._videoAdSamples || (e._videoAdSamples = Object.create(null)),
                        s = `${t}:${n.playerId}:${i}`,
                        d = a[s] || (a[s] = {
                            sum: 0,
                            count: 0,
                            lastKey: null,
                            lastValue: 0
                        });
                    null != o && o === d.lastKey ? d.sum += r - d.lastValue : (d.sum += r, d.count++, d.lastKey = o), d.lastValue = r, n[i] = Math.round(d.sum / d.count * 100) / 100
                }(t, e.vendor, r, e.field, e.value, e.sampleId), t._send = !0) : t._send = !0
            })), X(a.WIDGET_CONTAINER_FOUND, (e => {
                const t = this.getCurrentPage();
                if (!t) return;
                const n = t.widgets[e.widgetId] = t.widgets[e.widgetId] || {};
                n.vendor = e.vendor, n.viewport = e.viewport, n.row = e.row, t._send = !0
            }))
        }
        addDimensions(e) {
            this.dimensions || (this.dimensions = {}), Object.keys(e).forEach((t => {
                const n = t.trim();
                if ("" === n || -1 !== n.indexOf(":")) return;
                const i = e[t];
                if ("string" != typeof i && "number" != typeof i && "boolean" != typeof i) return;
                const r = this.dimensions[n] || [];
                i.toString().split(",").forEach((e => {
                    const t = e.trim();
                    "" !== t && -1 === r.indexOf(t) && r.push(t)
                })), r.length && (this.dimensions[n] = r)
            }));
            const t = this.getCurrentPage();
            if (t) return t._send = !0, t
        }
        calculateAdPlacementsAttention(e) {
            const t = R(),
                n = Pt(),
                i = {};
            n.forEach((e => {
                i[e.universalPlacementId] = e
            }));
            const r = e._attentionBaseline || {};
            Object.keys(e.adPlacements).forEach((n => {
                const o = e.adPlacements[n],
                    a = i[n];
                if (!a || !a.attentionState) return;
                let s = a.attentionState.pastTimeInViewport || 0;
                a.attentionState.isVisible && (s += t - a.attentionState.lastEnteredViewport);
                const d = Math.max(0, s - (r[n] || 0));
                o.att = Math.round(d) / 1e3
            }))
        }
        attachAdPlacementsPbjsGpids(e) {
            const t = this._pbjsGpidsByPage[e.pvid];
            if (!t) return;
            Object.keys(t).forEach((n => {
                const i = e.adPlacements[n];
                if (!i) return;
                const r = Object.keys(t[n]);
                0 !== r.length && (i.pbjsGpids = r)
            }));
            const n = this.getCurrentPage();
            n && n.pvid === e.pvid || delete this._pbjsGpidsByPage[e.pvid]
        }
        _buildAttributableRendersContext() {
            try {
                const e = F.attributionLookup;
                if (!e || 0 === Object.keys(e).length) return null;
                const t = {};
                return Pt().forEach((e => {
                    t[e.universalPlacementId] = e
                })), {
                    attributionLookup: e,
                    byId: t,
                    memo: {}
                }
            } catch (e) {
                return y.warn(`failed to build attributable-renders context: ${e}`), null
            }
        }
        attachAdPlacementsAttributableRenders(e, t) {
            if (t) try {
                const n = this.events.pages,
                    i = n.indexOf(e),
                    r = i <= 0 ? -1 / 0 : e._ts,
                    o = n[i + 1],
                    s = o ? o._ts : 1 / 0;
                Object.keys(e.adPlacements).forEach((n => {
                    const i = t.byId[n];
                    if (!i) return;
                    let o = t.memo[n];
                    void 0 === o && (o = function(e, t) {
                        if (!Array.isArray(e) || !t) return [];
                        try {
                            return function(e, t) {
                                const n = [];
                                let i = null,
                                    r = null;
                                for (const o of e) {
                                    const e = o.type;
                                    if (e !== a.AD_PLACEMENT_PBJS_RENDERED && e !== a.AD_PLACEMENT_ADSENSE_RENDERED && e !== a.AD_PLACEMENT_CUSTOM_RENDERED && e !== a.AD_PLACEMENT_DCM_RENDERED && e !== a.AD_PLACEMENT_BOUNCEX_RENDERED)
                                        if (e !== a.AD_PLACEMENT_GTAG_RENDERED)
                                            if (e === a.AD_PLACEMENT_VIEWABLE && i) {
                                                const e = i.data || {},
                                                    t = {
                                                        renderTs: i.timestamp,
                                                        viewableTs: o.timestamp,
                                                        advertiserId: e.advertiserId,
                                                        lineItemId: e.lineItemId,
                                                        creativeId: e.creativeId,
                                                        clicked: !1,
                                                        clickTs: 0
                                                    };
                                                n.push(t), i = null, r = t
                                            } else e === a.AD_PLACEMENT_CLICKED && r && (r.clicked = !0, r.clickTs = o.timestamp, r = null);
                                    else {
                                        const e = o.data || {},
                                            n = e.advertiserId,
                                            a = e.lineItemId;
                                        n && a && "string" == typeof n && "string" == typeof a && t[n] && -1 !== t[n].indexOf(a) ? (i = o, r = null) : (i = null, r = null)
                                    } else i = null, r = null
                                }
                                return n
                            }(e, t)
                        } catch (e) {
                            return []
                        }
                    }(i.history, t.attributionLookup), t.memo[n] = o);
                    const d = o.filter((e => e.renderTs >= r && e.renderTs < s));
                    d.length > 0 && (e.adPlacements[n].attributableRenders = d)
                }))
            } catch (e) {
                y.warn(`failed to attach attributable renders: ${e}`)
            }
        }
        calculateAdPlacementsSOV(e) {
            const t = Pt(),
                n = {};
            t.forEach((e => {
                n[e.universalPlacementId] = e
            })), Object.keys(e.adPlacements).forEach((t => {
                const i = e.adPlacements[t],
                    r = n[t];
                if (!r || !r.sovValues || 0 === r.sovValues.length) return;
                const o = r.sovValues.reduce(((e, t) => e + t), 0) / r.sovValues.length;
                i.sov = Math.round(1e4 * o) / 1e4
            }))
        }
        stampPageFirstRenderMs(e) {
            void 0 === e.firstRenderMs && "number" == typeof e._pnStart && (e.firstRenderMs = Math.max(0, Math.round(R() - e._pnStart)))
        }
        calculatePageOverlappingAdUnitPaths(e) {
            const t = Object.create(null),
                n = Pt();
            for (let i = 0; i < n.length; i++) {
                const r = n[i],
                    o = r.gpid;
                if (o && e.adPlacements[r.universalPlacementId]) {
                    if (t[o]) return void(e.overlappingAdUnitPaths = !0);
                    t[o] = !0
                }
            }
        }
        calculateAdPlacementsAdDensity(e) {
            const t = Pt(),
                n = {};
            t.forEach((e => {
                n[e.universalPlacementId] = e
            })), Object.keys(e.adPlacements).forEach((t => {
                const i = e.adPlacements[t],
                    r = n[t];
                if (!r || !r.adDensityValues || 0 === r.adDensityValues.length) return;
                const o = r.adDensityValues.reduce(((e, t) => e + t), 0) / r.adDensityValues.length;
                i.avgAdDensity = Math.round(100 * o) / 100
            }))
        }
        addMetrics(e) {
            this.metrics || (this.metrics = {}), Object.keys(e).forEach((t => {
                const n = t.trim();
                if ("" === n) return;
                const i = e[t];
                "number" == typeof i && (this.metrics[n] = i)
            }));
            const t = this.getCurrentPage();
            if (t) return t._send = !0, t
        }
        setDomain(e) {
            "string" == typeof e && e.length > 0 && (this.domain = e.toLowerCase())
        }
        setPartner(e) {
            "string" == typeof e && e.length > 0 && (this.partner = e.toLowerCase())
        }
        setUserId(e) {
            this.userId = e
        }
        getUserId() {
            return this.userId
        }
        getMeta() {
            return this.meta
        }
        getCurrentPage() {
            return this.events.pages.length ? this.events.pages[this.events.pages.length - 1] : void 0
        }
        setSessionId(e) {
            this.sessionId = e
        }
        sync() {
            const e = D();
            if (e === this._lastSeen) return;
            e - this._lastSeen >= 1800 || e - this._startTs >= 28800 ? this._reset() : this._lastSeen = e;
            const t = this.getCurrentPage();
            t && e - t._ts >= 14400 && this.processNewPage(!0)
        }
        processNewPage(e = !1) {
            const t = window.location.pathname,
                n = this.getCurrentPage(),
                i = t.replace(/\/\d+$/, "");
            if (!e && n && (n.page === t || n.page === i)) return;
            const r = D(),
                o = R();
            n && (this.calculateAdPlacementsAttention(n), this.calculateAdPlacementsSOV(n), this.calculateAdPlacementsAdDensity(n), n.tPage = r - n._ts, n._send = !0, n._engagementState._isEngaged && (n._engagementState._pDuration += o - n._engagementState._pStart), n._engagementState._isEngaged = !1);
            const s = b(),
                d = s + this.viewportSize[1],
                c = {
                    page: t,
                    pvid: A(),
                    scrollDepth: 1,
                    ads: {},
                    rev: {},
                    adBids: {},
                    advertiserMetrics: {},
                    observability: {},
                    adPlacements: {},
                    videoPlayers: {},
                    widgets: {},
                    tPage: 0,
                    webMetrics: Object.assign({}, this.webMetrics),
                    _ts: r,
                    _pnStart: o,
                    _yStart: s,
                    _yEnd: d,
                    _send: !0,
                    _videoAdSamples: null,
                    _engagementState: {
                        _pStart: o,
                        _pDuration: 0,
                        _isEngaged: "visible" === document.visibilityState
                    },
                    _attentionBaseline: bn(o)
                };
            (function(e) {
                if (!e || -1 === e.indexOf(fn)) return !1;
                try {
                    return new URLSearchParams(e).get("utm_source") === fn
                } catch (e) {
                    return !1
                }
            })(window.location.search) && (c.backfillLanding = !0), this.events.pages.push(c);
            const l = F.contextMismatchAxis();
            return l && (c.observability.metrics = {
                [`gamera_foreign_ctx_${l}`]: 1
            }), K(a.SESSION_NEW_PAGE, {
                page: c
            }), c
        }
        updatePageScroll() {
            const e = this.getCurrentPage();
            if (!e) return;
            e._send = !0;
            const t = b(),
                n = this.viewportSize[1];
            return e._yEnd >= t + n || (e._yEnd = t + n, e.scrollDepth = +((e._yEnd - e._yStart) / n).toFixed(2)), e
        }
        keepPageAlive() {
            const e = this.getCurrentPage();
            if (e) return e._send = !0, e
        }
        updateWebMetrics(e) {
            if (!e || !e.name || "string" != typeof e.name) return;
            const t = e.name.toLowerCase(),
                n = Math.round(1e3 * e.value) / 1e3;
            if (this.webMetrics[t] === n) return;
            this.webMetrics[t] = n;
            const i = this.getCurrentPage();
            return i ? (i.webMetrics = Object.assign({}, this.webMetrics), i._send = !0, K(a.WEB_VITALS_CHANGED, {
                name: t,
                value: n
            }), i) : void 0
        }
        processNewAdEvent(e) {
            const t = this.getCurrentPage();
            if (t && "gam" === e.src) {
                {
                    const n = t.ads[e.nid] || {},
                        i = n[e.lid] || 0;
                    n[e.lid] = i + 1, t.ads[e.nid] = n
                }
                return t._send = !0, t
            }
        }
        addPageRevenue(e) {
            const t = this.getCurrentPage();
            if (!t) return;
            const n = t.rev[e.type] || [],
                i = n.find((t => t.currency === e.currency));
            return i ? (i.revenue += +e.revenue, i.count++) : n.push({
                currency: e.currency,
                revenue: +e.revenue,
                count: 1
            }), t.rev[e.type] = n, t._send = !0, K(a.SESSION_PAGE_REVENUE_ADDED, {
                data: e
            }), t
        }
        processNewCustomEvent(e, t) {
            const n = {
                id: A(),
                name: e,
                params: t,
                page: window.location.pathname,
                _send: !0
            };
            return this.events.custom.push(n), n
        }
        addAdvertiserMetric(e, t, n, i) {
            if ("string" != typeof e || "string" != typeof t || "string" != typeof n || !Number.isFinite(i)) return;
            if (!(e && t && n && i)) return;
            const r = this.getCurrentPage();
            if (!r) return;
            const o = r.advertiserMetrics[e] || {};
            return !o[t] && Object.keys(o).length >= 30 ? void 0 : (r.advertiserMetrics[e] = o, o[t] = o[t] || {}, o[t][n] = o[t][n] || 0, o[t][n] += i, r._send = !0, r)
        }
        addWinningBid(e) {
            if (!F.collectAdvertiserDomains) return;
            if (!e || !e.meta || !Array.isArray(e.meta.advertiserDomains)) return;
            const t = e.meta.advertiserDomains.join(","),
                n = this.getCurrentPage();
            if (!n) return;
            if (!n.adBids[t] && Object.keys(n.adBids).length >= 30) return;
            const i = n.adBids[t] || {
                imps: 0,
                rev: 0
            };
            return i.imps += 1, i.rev += +e.cpm / 1e3, n.adBids[t] = i, n._send = !0, n
        }
        _addWinningBidCounter(e, t) {
            if (!F.collectAdvertiserDomains) return;
            if (!e || !e.meta || !Array.isArray(e.meta.advertiserDomains)) return;
            const n = e.meta.advertiserDomains.join(","),
                i = this.getCurrentPage();
            if (!i) return;
            if (!i.adBids[n] && Object.keys(i.adBids).length >= 30) return;
            const r = i.adBids[n] || {};
            return r[t] = (r[t] || 0) + 1, i.adBids[n] = r, i._send = !0, i
        }
        addWinningBidImpsAndRev(e) {
            const {
                exchange: t,
                advertiser: n
            } = ln(e);
            this.addAdvertiserMetric(t, n, "imps", 1), this.addAdvertiserMetric(t, n, "rev", +e ? .cpm / 1e3 || 0)
        }
        addLitemImpsAndRev(e, t) {
            const n = e.lastRender.advertiserId;
            this.addAdvertiserMetric(t, n, "imps", 1);
            let i = 0;
            Number.isFinite(e.lastRender.pb) && (i = e.lastRender.pb), i += .01, this.addAdvertiserMetric(t, n, "rev", i / 1e3)
        }
        addWinningBidClick(e) {
            const {
                exchange: t,
                advertiser: n
            } = ln(e);
            return this.addAdvertiserMetric(t, n, "clicks", 1), this._addWinningBidCounter(e, "clicks")
        }
        addLitemClick(e, t) {
            const n = e.lastRender.advertiserId;
            this.addAdvertiserMetric(t, n, "clicks", 1)
        }
        addWinningBidViewable(e) {
            const {
                exchange: t,
                advertiser: n
            } = ln(e);
            return this.addAdvertiserMetric(t, n, "viewable", 1), this._addWinningBidCounter(e, "viewable")
        }
        addLitemViewable(e, t) {
            const n = e.lastRender.advertiserId;
            this.addAdvertiserMetric(t, n, "viewable", 1)
        }
        addWinningBidHeavyAdIntervention(e) {
            const {
                exchange: t,
                advertiser: n
            } = ln(e);
            return this.addAdvertiserMetric(t, n, "heavyAdInterventions", 1), this._addWinningBidCounter(e, "heavyAdInterventions")
        }
        addLitemHeavyAdIntervention(e, t) {
            const n = e.lastRender.advertiserId;
            this.addAdvertiserMetric(t, n, "heavyAdInterventions", 1)
        }
        _getSessionPayload() {
            const e = D(),
                t = R(),
                n = {
                    url: j(this.url, F.stripUrlParams),
                    referrer: j(this.referrer, F.stripUrlParams),
                    referrerParams: this.referrerParams,
                    viewportSize: this.viewportSize,
                    domain: this.domain,
                    partner: this.partner,
                    dimensions: this.dimensions,
                    metrics: this.metrics,
                    userId: this.userId,
                    sessionId: this.sessionId,
                    events: {},
                    meta: this.meta,
                    elapsed: e - this._startTs,
                    cts: e
                },
                i = this._buildAttributableRendersContext(),
                r = [];
            for (let n = 0, o = this.events.pages.length; n < o; n++) {
                const a = this.events.pages[n];
                if (!a._send) continue;
                let s, d, c = a._engagementState._pDuration;
                n === o - 1 && (a.tPage = e - a._ts, this.calculateAdPlacementsAttention(a), this.calculateAdPlacementsSOV(a), this.calculateAdPlacementsAdDensity(a), a._engagementState._isEngaged && (c += t - a._engagementState._pStart)), this.attachAdPlacementsPbjsGpids(a), this.attachAdPlacementsAttributableRenders(a, i), this.calculatePageOverlappingAdUnitPaths(a), Object.keys(a.videoPlayers).length && (s = a.videoPlayers), Object.keys(a.widgets).length && (d = a.widgets), r.push({
                    page: a.page,
                    pvid: a.pvid,
                    scrollDepth: a.scrollDepth,
                    ads: a.ads,
                    rev: a.rev,
                    adBids: a.adBids,
                    advertiserMetrics: a.advertiserMetrics,
                    tPage: a.tPage,
                    eng: Math.floor(c),
                    webMetrics: a.webMetrics,
                    observability: a.observability,
                    adPlacements: a.adPlacements,
                    videoPlayers: s,
                    widgets: d,
                    adDensity: a.maxAdPlacementsVisible,
                    heavyAdInterventions: a.heavyAdInterventions,
                    overlappingAdUnitPaths: a.overlappingAdUnitPaths,
                    firstRenderMs: a.firstRenderMs,
                    backfill: a.backfill,
                    backfillLanding: a.backfillLanding
                })
            }
            r.length && (n.events.pages = r);
            const o = [];
            for (const e of this.events.custom) e._send && o.push({
                id: e.id,
                name: e.name,
                params: e.params,
                page: e.page
            });
            return o.length && (n.events.custom = o), n
        }
        bookBackfillCounters() {
            try {
                const e = this.getCurrentPage();
                if (!e) return;
                const t = function(e, t) {
                    if (!e || "object" != typeof e) return null;
                    let n = null;
                    for (let i = 0; i < mn.length; i++) {
                        const r = mn[i],
                            o = e[r],
                            a = t[r] || 0;
                        !Number.isInteger(o) || o <= a || (t[r] = o, n = n || {
                            renders: 0,
                            viewable: 0,
                            clicks: 0
                        }, n[r] = o - a)
                    }
                    return n
                }(function() {
                    const e = window.gamera && window.gamera._backfill;
                    return e && "function" == typeof e.getCounters ? e.getCounters() : null
                }(), this._backfillSeen);
                t && (function(e, t) {
                    const n = e.backfill || (e.backfill = {
                        renders: 0,
                        viewable: 0,
                        clicks: 0
                    });
                    for (let e = 0; e < mn.length; e++) {
                        const i = mn[e];
                        n[i] += t[i]
                    }
                }(e, t), e._send = !0)
            } catch (e) {
                y.error(`while reading backfill counters: ${e}`)
            }
        }
        async _sendPayload(e) {
            this.bookBackfillCounters();
            const t = this._getSessionPayload();
            if (!Object.keys(t.events).length) return;
            const n = {};
            for (const e of t.events.pages || []) n[e.pvid] = !0;
            for (const e of t.events.custom || []) n[e.id] = !0;
            const i = JSON.stringify(t);
            let r = i,
                o = F.endpoint;
            if (i.length > 16384 && "undefined" != typeof CompressionStream) try {
                const e = new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"));
                r = new Blob([await new Response(e).arrayBuffer()], {
                    type: "text/plain"
                }), o = F.endpoint + (-1 === F.endpoint.indexOf("?") ? "?" : "&") + "gzip=1"
            } catch (e) {
                y.warn(`gzip compression failed, sending uncompressed: ${e}`), r = i, o = F.endpoint
            }
            if (e) {
                if (!navigator.sendBeacon(o, r)) {
                    const e = "string" == typeof r ? r.length : r.size;
                    y.warn(`navigator.sendBeacon returned false (body size: ${e})`)
                }
            } else fetch(o, {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "text/plain"
                },
                body: r,
                keepalive: !0
            }).then((e => {})).catch((e => {
                for (const e of this.events.pages) n[e.pvid] && (e._send = !0);
                for (const e of this.events.custom) n[e.id] && (e._send = !0)
            }));
            for (const e of this.events.pages) n[e.pvid] && (e._send = !1);
            for (const e of this.events.custom) n[e.id] && (e._send = !1)
        }
        startEmitting() {
            this._startedEmitting || (this._startedEmitting = !0, window.setInterval((() => {
                this._sendPayload(!1).catch((e => {
                    y.error(`Error sending payload: ${e}`)
                }))
            }), 6e5), document.addEventListener("visibilitychange", (() => {
                const e = this.getCurrentPage();
                "hidden" === document.visibilityState ? (e && e._engagementState._isEngaged && (e._engagementState._pDuration += R() - e._engagementState._pStart, e._engagementState._isEngaged = !1), this._sendPayload(!0).catch((e => {
                    y.error(`Error sending payload: ${e}`)
                }))) : e && (e._engagementState._isEngaged = !0, e._engagementState._pStart = R())
            })))
        }
        _reset() {
            this.events = {
                pages: [],
                custom: []
            }, this.sessionId = void 0, this._startTs = D(), this._lastSeen = this._startTs, this._pbjsGpidsByPage = {}, this.processNewPage(), K(a.SESSION_RESET);
            const e = this.getCurrentPage();
            e && (e._attentionBaseline = {})
        }
        hasStartedEmitting() {
            return this._startedEmitting
        }
        addPageObservability(e) {
            const t = this.getCurrentPage();
            if (t) return t.observability = M(t.observability, e), t._send = !0, t
        }
        addPageObservabilityMetrics(e, t = !1) {
            const n = this.getCurrentPage();
            if (n) return n.observability.metrics = n.observability.metrics || {}, Object.keys(e).forEach((i => {
                const r = e[i];
                "number" == typeof r && (n.observability.metrics[i] = t ? (n.observability.metrics[i] || 0) + r : r)
            })), n._send = !0, n
        }
    }

    function bn(e) {
        const t = {};
        return Pt().forEach((n => {
            const i = n.attentionState;
            if (!i) return;
            let r = i.pastTimeInViewport || 0;
            i.isVisible && (r += e - i.lastEnteredViewport), t[n.universalPlacementId] = r
        })), t
    }
    let En;

    function _n() {
        return En || (En = new wn), En
    }
    var Sn, An = -1,
        In = function(e) {
            addEventListener("pageshow", (function(t) {
                t.persisted && (An = t.timeStamp, e(t))
            }), !0)
        },
        Pn = function() {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
        },
        Dn = function() {
            var e = Pn();
            return e && e.activationStart || 0
        },
        Rn = function(e, t) {
            var n = Pn(),
                i = "navigate";
            return An >= 0 ? i = "back-forward-cache" : n && (document.prerendering || Dn() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-"))), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: i
            }
        },
        kn = function(e, t, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var i = new PerformanceObserver((function(e) {
                        Promise.resolve().then((function() {
                            t(e.getEntries())
                        }))
                    }));
                    return i.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})), i
                }
            } catch (e) {}
        },
        Cn = function(e, t, n, i) {
            var r, o;
            return function(a) {
                t.value >= 0 && (a || i) && ((o = t.value - (r || 0)) || void 0 === r) && (r = t.value, t.delta = o, t.rating = function(e, t) {
                    return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                }(t.value, n), e(t))
            }
        },
        Tn = function(e) {
            requestAnimationFrame((function() {
                return requestAnimationFrame((function() {
                    return e()
                }))
            }))
        },
        Nn = function(e) {
            document.addEventListener("visibilitychange", (function() {
                "hidden" === document.visibilityState && e()
            }))
        },
        On = function(e) {
            var t = !1;
            return function() {
                t || (e(), t = !0)
            }
        },
        xn = -1,
        Ln = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        Mn = function(e) {
            "hidden" === document.visibilityState && xn > -1 && (xn = "visibilitychange" === e.type ? e.timeStamp : 0, Bn())
        },
        $n = function() {
            addEventListener("visibilitychange", Mn, !0), addEventListener("prerenderingchange", Mn, !0)
        },
        Bn = function() {
            removeEventListener("visibilitychange", Mn, !0), removeEventListener("prerenderingchange", Mn, !0)
        },
        jn = function() {
            return xn < 0 && (xn = Ln(), $n(), In((function() {
                setTimeout((function() {
                    xn = Ln(), $n()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return xn
                }
            }
        },
        Vn = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return e()
            }), !0) : e()
        },
        Gn = [1800, 3e3],
        Un = function(e, t) {
            t = t || {}, Vn((function() {
                var n, i = jn(),
                    r = Rn("FCP"),
                    o = kn("paint", (function(e) {
                        e.forEach((function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - Dn(), 0), r.entries.push(e), n(!0)))
                        }))
                    }));
                o && (n = Cn(e, r, Gn, t.reportAllChanges), In((function(i) {
                    r = Rn("FCP"), n = Cn(e, r, Gn, t.reportAllChanges), Tn((function() {
                        r.value = performance.now() - i.timeStamp, n(!0)
                    }))
                })))
            }))
        },
        Fn = [.1, .25],
        qn = 0,
        Wn = 1 / 0,
        Hn = 0,
        zn = function(e) {
            e.forEach((function(e) {
                e.interactionId && (Wn = Math.min(Wn, e.interactionId), Hn = Math.max(Hn, e.interactionId), qn = Hn ? (Hn - Wn) / 7 + 1 : 0)
            }))
        },
        Jn = function() {
            "interactionCount" in performance || Sn || (Sn = kn("event", zn, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        Yn = [],
        Xn = new Map,
        Kn = 0,
        Qn = function() {
            return (Sn ? qn : performance.interactionCount || 0) - Kn
        },
        Zn = [],
        ei = function(e) {
            if (Zn.forEach((function(t) {
                    return t(e)
                })), e.interactionId || "first-input" === e.entryType) {
                var t = Yn[Yn.length - 1],
                    n = Xn.get(e.interactionId);
                if (n || Yn.length < 10 || e.duration > t.latency) {
                    if (n) e.duration > n.latency ? (n.entries = [e], n.latency = e.duration) : e.duration === n.latency && e.startTime === n.entries[0].startTime && n.entries.push(e);
                    else {
                        var i = {
                            id: e.interactionId,
                            latency: e.duration,
                            entries: [e]
                        };
                        Xn.set(i.id, i), Yn.push(i)
                    }
                    Yn.sort((function(e, t) {
                        return t.latency - e.latency
                    })), Yn.length > 10 && Yn.splice(10).forEach((function(e) {
                        return Xn.delete(e.id)
                    }))
                }
            }
        },
        ti = function(e) {
            var t = self.requestIdleCallback || self.setTimeout,
                n = -1;
            return e = On(e), "hidden" === document.visibilityState ? e() : (n = t(e), Nn(e)), n
        },
        ni = [200, 500],
        ii = [2500, 4e3],
        ri = {},
        oi = [800, 1800],
        ai = function e(t) {
            document.prerendering ? Vn((function() {
                return e(t)
            })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return e(t)
            }), !0) : setTimeout(t, 0)
        },
        si = function(e, t) {
            t = t || {};
            var n = Rn("TTFB"),
                i = Cn(e, n, oi, t.reportAllChanges);
            ai((function() {
                var r = Pn();
                r && (n.value = Math.max(r.responseStart - Dn(), 0), n.entries = [r], i(!0), In((function() {
                    n = Rn("TTFB", 0), (i = Cn(e, n, oi, t.reportAllChanges))(!0)
                })))
            }))
        };
    new Date;
    const di = D();

    function ci(e) {
        return Pt().filter((t => t.viewport === e)).length
    }
    const li = [],
        ui = [];
    let pi = 0;

    function gi(e) {
        return "function" == typeof e && li.push(e), hi().onpage || []
    }

    function mi(e, t, n, i) {
        if (!F.consentGranted) return {};

        function r(e) {
            const t = i && Array.isArray(i) && i.length > 0 ? i : zt(),
                n = gi();
            return t.forEach((t => {
                const i = Jt(t);
                if (i && i.universalPlacementId) {
                    e.adUnits = e.adUnits || {}, e.adUnits[t.code] = e.adUnits[t.code] || {};
                    const r = {
                            ext: {
                                data: {
                                    gameraPlacementId: i.universalPlacementId
                                }
                            }
                        },
                        o = fi(i, n, "pbjs");
                    o && o.length > 0 && (r.ext.data.gameraId = o), M(e.adUnits[t.code], r)
                }
            })), e
        }
        return F.disableAdPlacementDiscovery || qt(), "function" == typeof e && ui.push((t => {
            e(r(t))
        })), r(hi().pb || {})
    }

    function fi(e, t, n) {
        return e && e.universalPlacementId ? function(e, t, n) {
            const i = t || [],
                r = F.curationRules || [],
                o = D();
            return r.filter((t => {
                const r = !!t.inverted;
                let a = t.target || ["pbjs"];
                return Array.isArray(a) || (a = [a]), !!a.includes(n) && (t.segmentsInclusion && Array.isArray(t.segmentsInclusion) && t.segmentsInclusion.length > 0 && r === i.some((e => t.segmentsInclusion.includes(e))) ? r : !(t.segmentsExclusion && Array.isArray(t.segmentsExclusion) && t.segmentsExclusion.length > 0 && i.some((e => t.segmentsExclusion.includes(e)))) && (t.placementIds && Array.isArray(t.placementIds) && -1 === t.placementIds.indexOf(e.universalPlacementId) || t.maxRenderSequence && e.renders >= t.maxRenderSequence || t.maxViewportAdDensity && ci(e.viewport) > t.maxViewportAdDensity || t.maxTimeOnPage && (o - di > t.maxTimeOnPage || o - di < 0) ? r : !r))
            })).map((e => e.id))
        }(e, t, n) : null
    }

    function hi() {
        try {
            if (!F.consentGranted) return {};
            let e = I("gamera_segtax");
            if (!e) return vi(), {};
            const t = JSON.parse(e),
                n = D();
            return Math.abs(n - t.ts) > 3600 && vi(), t.data
        } catch (e) {
            y.error(`while getting gamera_segtax: ${e}`)
        }
        return {}
    }

    function vi() {
        if (!F.audience) return void y.warn("trying to fetch gamera segtax without audience feature being ON!");
        if (!F.enableSegtaxFetch) return;
        if (!F.consentGranted) return;
        const e = D();
        if (!(e - pi < 600)) {
            pi = e;
            try {
                let e = [],
                    t = _n().getUserId() || I("gamera_user_id");
                t && e.push(`uid=${encodeURIComponent(t)}`), e.push(`domain=${encodeURIComponent(F.domain||window.location.hostname)}`), e.push(`path=${encodeURIComponent(window.location.pathname)}`), F.partner && e.push(`partner=${encodeURIComponent(F.partner)}`), fetch(`${F.endpoint}?${e.join("&")}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json, text/plain, */*"
                    }
                }).then((e => {
                    if (!e.ok) throw new Error(`gamera_segtax response was not ok: ${e.statusText}`);
                    const t = e.headers.get("Content-Type");
                    return t && t.includes("application/json") ? e.json() : e.text()
                })).then((e => {
                    let t = e;
                    "string" == typeof e && (t = JSON.parse(e));
                    const n = {
                        data: t,
                        ts: D()
                    };
                    ! function(e) {
                        let t = C((() => JSON.parse(I("gamera_segtax"))));
                        t = t || {};
                        const n = t && t.data && t.data.onpage || [],
                            i = t && t.data && t.data.pb || {},
                            r = e.onpage || [],
                            o = e.pb || {};
                        k(r, n) || li.forEach((e => C((() => {
                            e(r)
                        })))), k(o, i) || ui.forEach((e => C((() => {
                            e(o)
                        }))))
                    }(t), P("gamera_segtax", JSON.stringify(n), 8760, "Lax")
                })).catch((e => {
                    y.error(`while fetching gamera_segtax: ${e}`)
                }))
            } catch (e) {
                y.error(`while fetching gamera_segtax: ${e}`)
            }
        }
    }
    let yi = {
            sessionStart: 0,
            lastSeen: 0,
            adsRendered: 0,
            adsViewable: 0,
            pageCount: 0,
            vitals: {},
            sessionRevenue: 0
        },
        wi = {
            sessionStart: 0,
            lastSeen: 0,
            adsRendered: 0,
            adsViewable: 0,
            pageCount: 0,
            vitals: {},
            sessionRevenue: 0
        },
        bi = !1,
        Ei = !1,
        _i = !1;

    function Si() {
        if (!bi) return;
        const e = Ai();
        try {
            localStorage.setItem("_gameraClientSideMetrics", JSON.stringify(e))
        } catch (e) {}
    }

    function Ai() {
        const e = _n();
        return {
            sessionStart: wi.sessionStart || yi.sessionStart,
            lastSeen: yi.lastSeen,
            adsRendered: wi.adsRendered + yi.adsRendered,
            adsViewable: wi.adsViewable + yi.adsViewable,
            pageCount: wi.pageCount + (e.events.pages.length || 1),
            vitals: { ...e.webMetrics,
                ...wi.vitals,
                ...yi.vitals
            },
            sessionRevenue: wi.sessionRevenue + yi.sessionRevenue
        }
    }

    function Ii() {
        const e = E(),
            t = _();
        let n = [];
        F.audience && !F.disableAdPlacementDiscovery ? n.push(...Pt().filter((e => e.renders > 0)).map((e => e.divId))) : (window.googletag && L(window.googletag.pubads) && L(window.googletag.pubads().getSlots) && n.push(...window.googletag.pubads().getSlots().map((e => e.getSlotElementId()))), n.push(...zt().map((e => e.code)))), n = [...new Set(n)];
        let i = 0;
        return n.forEach((n => {
            if (!n) return;
            const r = document.getElementById(n);
            if (r) {
                const n = r.getBoundingClientRect();
                n.left < e && n.right > 0 && n.top < t && n.bottom > 0 && i++
            }
        })), i
    }
    let Pi = !1,
        Di = null,
        Ri = !1,
        ki = null,
        Ci = null;

    function Ti(e) {
        return "y" === e.getAttribute("data-dcm-processed") && e.children.length > 0
    }
    let Ni = !1,
        Oi = null,
        xi = null;
    const Li = {};

    function Mi(e) {
        const t = e && e.gbi && e.gbi.placements;
        if (!t) return null;
        const n = Object.keys(t);
        return 0 === n.length ? null : t[n[0]]
    }

    function $i(e) {
        return e ? `${e.arrivalTime||0}|${e.adUnitId||""}` : null
    }

    function Bi(e) {
        return {
            provider: e.provider || "",
            price: +e.price || 0,
            dealId: e.dealId || "",
            dealName: e.dealName || "",
            adUnitId: e.adUnitId || "",
            arrivalTime: +e.arrivalTime || 0
        }
    }

    function ji() {
        const e = window.bouncex;
        if (!(e && e.website && e.website.ads && e.website.ads.enabled)) return;
        const t = e.campaigns;
        if (!t || "object" != typeof t) return;
        const n = [],
            i = [],
            r = Object.entries(t);
        for (let e = 0; e < r.length; e++) {
            const t = r[e][0],
                o = r[e][1],
                a = Mi(o);
            if (!a) continue;
            const s = "bx-campaign-" + t;
            if (!document.getElementById(s)) continue;
            const d = {
                campaignId: t,
                divId: s,
                type: o.type || "",
                width: +a.width || 0,
                height: +a.height || 0,
                winningBid: null
            };
            Li[t] || (Li[t] = {
                lastBidKey: null
            }, n.push(d));
            const c = o.winningBid,
                l = !0 === o.ad_shown ? $i(c) : null;
            l && l !== Li[t].lastBidKey && (Li[t].lastBidKey = l, i.push({ ...d,
                winningBid: Bi(c)
            }))
        }
        n.length > 0 && K(a.BOUNCEX_SLOTS_FOUND, {
            slots: n
        }), i.forEach((e => K(a.BOUNCEX_SLOT_RENDERED, {
            slot: e
        })))
    }

    function Vi() {
        if (!xi) {
            try {
                ji()
            } catch (e) {
                y.error("Error in initial BounceX poll", e)
            }
            xi = setInterval((() => {
                try {
                    ji()
                } catch (e) {
                    y.error("Error in BounceX poll", e)
                }
            }), n), y.debug("Polling window.bouncex.campaigns for BounceX placements")
        }
    }
    const Gi = [{
        name: "magnite",
        _state: {
            _billablePageviews: new Set,
            _failedBillingPageviews: []
        },
        billPageview: function(e) {
            if (e && e.pvid)
                if (this._state._billablePageviews.has(e.pvid)) y.warn("Pageview ID already billed, skipping billing");
                else {
                    this._state._billablePageviews.add(e.pvid), y.debug(`Billing pageview for ${this.name} with pageview ID ${e.pvid}`);
                    try {
                        const t = {
                            vendor: "gamera",
                            type: "pageView",
                            billingId: e.pvid
                        };
                        if ("function" != typeof window ? .pbjs ? .rp ? .billableEvent) return y.warn("pbjs.rp.billableEvent is not a function, queuing billing"), window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], void window.pbjs.que.push((() => {
                            try {
                                if ("function" == typeof window ? .pbjs ? .rp ? .billableEvent) {
                                    if (!window.pbjs.rp.billableEvent(t)) return y.warn(`Failed to bill pageview for ${this.name} with pageview ID ${e.pvid}`), void this._state._failedBillingPageviews.push(e.pvid);
                                    y.debug(`Billed pageview for ${this.name} with pageview ID ${e.pvid}`)
                                } else y.warn("pbjs.rp.billableEvent is not a function, skipping billing"), this._state._failedBillingPageviews.push(e.pvid)
                            } catch (t) {
                                y.error(`Error billing pageview for ${this.name} with pageview ID ${e.pvid}: ${t}`), this._state._failedBillingPageviews.push(e.pvid)
                            }
                        }));
                        if (!window.pbjs.rp.billableEvent(t)) return y.warn(`Failed to bill pageview for ${this.name} with pageview ID ${e.pvid}`), void this._state._failedBillingPageviews.push(e.pvid);
                        y.debug(`Billed pageview for ${this.name} with pageview ID ${e.pvid}`)
                    } catch (t) {
                        y.error(`Error billing pageview for ${this.name} with pageview ID ${e.pvid}: ${t}`), this._state._failedBillingPageviews.push(e.pvid)
                    }
                }
            else y.warn("No page or pageview ID found, skipping billing")
        }
    }];
    let Ui = !1;
    const Fi = 3;

    function qi(e) {
        try {
            if (!e || "intervention" !== e.type) return;
            const t = e.body;
            if (!t || "HeavyAdIntervention" !== t.id) return;
            const n = function(e) {
                if (!e || "string" != typeof e) return null;
                const t = e.match(/\(id=([^;]*);url=/);
                if (t && t[1]) {
                    const e = Wi(t[1]);
                    if (e) return e
                }
                const n = e.split(/[\s"'`();[\]<>=]+/);
                let i = null;
                for (const e of n) {
                    if (!e) continue;
                    let t = Wi(e);
                    if (!t) {
                        const n = e.replace(/[.;:!?,]+$/, "");
                        t = n && n !== e ? Wi(n) : null
                    }
                    if (!t) continue;
                    const n = 0 === e.indexOf("google_ads_iframe_") ? 2 : 1;
                    if ((!i || n > i.score) && (i = {
                            placement: t,
                            score: n
                        }, 2 === n)) break
                }
                return i ? i.placement : null
            }(t.message);
            n ? (n.skipNextRenderGap = !0, y.debug(`heavy-ad intervention attributed to placement ${n.universalPlacementId} in ${n.divId}`)) : y.debug("heavy-ad intervention (unattributed)"), K(a.HEAVY_AD_INTERVENTION, n || null)
        } catch (e) {
            y.error(`Error handling heavy-ad intervention report: ${e}`)
        }
    }

    function Wi(e) {
        const t = document.getElementById(e);
        return t && t.tagName && "IFRAME" === t.tagName.toUpperCase() ? function(e) {
            let t = e;
            for (let e = 0; t && e <= Fi; e++) {
                if (t.id) {
                    const e = (n = t.id, Object.prototype.hasOwnProperty.call(At, n) ? At[n] : void 0);
                    if (e) return e
                }
                t = t.parentElement
            }
            var n;
            return null
        }(t) : null
    }

    function Hi(e, t, n, i, r, o, a) {
        if (e.ortb2Imp = e.ortb2Imp || {}, e.ortb2Imp.ext = e.ortb2Imp.ext || {}, e.ortb2Imp.ext.data = e.ortb2Imp.ext.data || {}, e.ortb2Imp.ext.data.customdata = e.ortb2Imp.ext.data.customdata || [], !Array.isArray(e.ortb2Imp.ext.data.customdata)) return void y.error(`[${o} enrichments] customdata is not an array for bid: ${e.bidder}`);
        e.ortb2Imp.ext.data.customdata = e.ortb2Imp.ext.data.customdata.filter((e => "gamera" !== e.provider));
        const d = {
            plcmt: t.universalPlacementId
        };
        if (t.stats) {
            Object.keys(t.stats).forEach((e => {
                const n = t.stats[e];
                if ("number" != typeof n) return;
                const i = s[e];
                i && "cpm2" !== e && "cpm4" !== e && "cpm6" !== e && "cpm8" !== e && (d[i] = n)
            }));
            const e = `signals_pstats_${o}`;
            a[e] = (a[e] || 0) + 1
        }
        const c = n - di,
            l = ci(t.viewport),
            u = (t.renders || 0) + 1;
        d.time_on_page = c >= 0 ? c : Math.floor(performance.now() / 1e3), d.viewport_density = l, d.render_sequence = u, i && (d.vp = i), r && (d.partner = r), e.ortb2Imp.ext.data.customdata.push({
            provider: "gamera",
            value: JSON.stringify(d)
        })
    }
    const zi = "msft",
        Ji = "gamera",
        Yi = 100;
    let Xi;
    window.gamera = window.gamera || {}, window.gamera.cmd = window.gamera.cmd || [], window.gamera.fastlane = window.gamera.fastlane || [];
    let Ki = {},
        Qi = !1;
    if (!0 === window.gamera.loaded) y.error("gamera already loaded, exiting.");
    else try {
        window.gamera.loaded = !0, window.gamera.setLogLevel = e => y.setLogLevel(e), window.gamera.setUserId = e => {
                e ? Xi.hasStartedEmitting() ? y.error("userId override provided too late, ignoring.") : Xi.setUserId(e.toString()) : y.error("empty userId override provided, ignoring.")
            }, window.gamera.setConfig = e => F.setConfig(e), window.gamera.event = er, window.gamera.addDimensions = ir, window.gamera.addMetrics = function(e) {
                e && "object" == typeof e && !Array.isArray(e) ? Zi({
                    type: o.ADD_METRICS,
                    data: e
                }) : y.error('argument "metrics" has an invalid type')
            }, window.gamera.addPageRevenue = function(e) {
                e && e.revenue ? (e.currency || (e.currency = "USD"), e.type || (e.type = "unknown"), Zi({
                    type: o.PAGE_REVENUE,
                    data: e
                })) : y.error('argument "data" has no "revenue" property')
            }, window.gamera.getOnPageSegments = gi, window.gamera.getPrebidSegments = mi, window.gamera.getUserMetrics = function() {
                const e = gi(),
                    t = {};
                return e.forEach((e => {
                    try {
                        const n = e.split("_");
                        if (e.startsWith("LRPU_P_")) return void(t.lrpu_p = +n[n.length - 1]);
                        if (e.startsWith("user_cpm_avg_")) return void(t.avg_cpm = +n[n.length - 1]);
                        if (e.startsWith("user_fillrate_avg_")) return void(t.avg_fillrate = +n[n.length - 1]);
                        if (e.startsWith("user_ltv_")) return void(t.ltv = +n[n.length - 1]);
                        if (e.startsWith("user_visits_")) {
                            const e = n[n.length - 1].split(",").map(Number);
                            return void(t.visits = {
                                last_7: e[0],
                                last_14: e[1],
                                last_30: e[2],
                                lifetime: e[2]
                            })
                        }
                        if (e.startsWith("user_lcp_avg_")) return void(t.avg_lcp = +n[n.length - 1])
                    } catch (t) {
                        y.error(`while parsing segment ${e}: ${t}`)
                    }
                })), t
            }, window.gamera.getGptSegments = function() {
                if (!F.consentGranted) return {};
                F.disableAdPlacementDiscovery || qt();
                let e = {};
                const t = Pt(),
                    n = gi();
                return t.forEach((t => {
                    if (!t.gpid) return;
                    const i = fi(t, n, "gpt");
                    i && i.length > 0 && (e[t.gpid] = {
                        gamera: i
                    })
                })), e
            }, window.gamera._storeException = q, window.gamera._getAdPlacements = () => T(Pt()), window.gamera._drawRowGrid = function() {
                J(St, fe(), re())
            }, window.gamera._getDiagnosticsData = function() {
                const e = {};
                if (Xi) {
                    e.meta = Xi.getMeta();
                    const t = Xi.getCurrentPage();
                    t && (e.maxAdPlacementsVisible = t.maxAdPlacementsVisible)
                }
                return e.curationRules = T(F.curationRules || []), e
            }, window.gamera.loadDiagnostics = function(e) {
                try {
                    const n = e && "object" == typeof e ? e : {};
                    window.localStorage.setItem(t, JSON.stringify(n))
                } catch (e) {
                    y.error(`while persisting gamera diagnostics params: ${e}`)
                }
                $t()
            }, window.gamera._getVP = fe, window.gamera._getWidgets = re,
            function(e) {
                if ("function" == typeof e.enableRecirc && "function" == typeof e.disableRecirc) return;
                const t = t => {
                    e._recircEnabled = t;
                    const n = e._backfill;
                    n && "function" == typeof n.setEnabled && n.setEnabled(t)
                };
                e.enableRecirc = () => t(!0), e.disableRecirc = () => t(!1)
            }(window.gamera),
            function() {
                Xi = _n();
                let n = window.history;
                if (n && n.pushState) try {
                    let e = n.pushState;
                    n.pushState = function() {
                        e.apply(n, arguments), F.spaIgnoreNavigation || Zi({
                            type: o.NEW_PAGE
                        })
                    }, window.addEventListener("popstate", (() => {
                        F.spaIgnoreNavigation || Zi({
                            type: o.NEW_PAGE
                        })
                    }))
                } catch (e) {
                    y.error(`while patching pushState: ${e}`)
                }
                let s = 0;
                document.addEventListener("scroll", (e => {
                        s || (s = setTimeout((() => {
                            Zi({
                                type: o.PAGE_SCROLL
                            }), s = 0
                        }), 250))
                    }), !0), document.addEventListener("click", nr), document.addEventListener("auxclick", nr), document.addEventListener("mousedown", tr), document.addEventListener("keydown", tr), document.addEventListener("touchstart", tr),
                    function() {
                        var n;
                        if (window.addEventListener(i, (() => {
                                F.grantConsent()
                            }), {
                                once: !0
                            }), window.gamera.fastlane.forEach((e => "function" == typeof e && e())), window.gamera.fastlane = {
                                push: e => e()
                            }, F.clientSideMetrics && (function() {
                                const e = D();
                                let t = null;
                                try {
                                    const n = localStorage.getItem("_gameraClientSideMetrics");
                                    n && (t = JSON.parse(n), t.sessionStart = +t.sessionStart || 0, t.lastSeen = +t.lastSeen || 0, t.adsRendered = +t.adsRendered || 0, t.adsViewable = +t.adsViewable || 0, t.pageCount = +t.pageCount || 0, t.vitals = t.vitals || {}, t.sessionRevenue = +t.sessionRevenue || 0, (e - t.lastSeen >= 1800 || e - t.sessionStart >= 28800) && (t = null))
                                } catch (e) {
                                    t = null
                                }
                                t && (wi = t), yi.sessionStart = e, yi.lastSeen = e, bi = !0, Si(), bi && (F.audience && !F.disableAdPlacementDiscovery ? (X(a.AD_PLACEMENT_GTAG_RENDERED, (e => {
                                    if (e.history.length && e.history[e.history.length - 1].type === a.AD_PLACEMENT_GTAG_RENDERED) {
                                        const t = (e.history[e.history.length - 1].data.pb || 0) + .01;
                                        yi.sessionRevenue += t / 1e3, Si()
                                    }
                                })), X(a.AD_PLACEMENT_PBJS_RENDERED, (e => {
                                    jt(e) || (yi.sessionRevenue += e.pbjsBid.cpm / 1e3, Si())
                                })), X(a.AD_PLACEMENT_RENDERED, (e => {
                                    yi.adsRendered++, Si()
                                })), X(a.AD_PLACEMENT_VIEWABLE, (e => {
                                    yi.adsViewable++, Si()
                                }))) : X(a.SESSION_PAGE_REVENUE_ADDED, (({
                                    data: e
                                }) => {
                                    yi.sessionRevenue += +e.revenue, "pbjs" === e.type && yi.adsRendered++, Si()
                                })), X(a.WEB_VITALS_CHANGED, (({
                                    name: e,
                                    value: t
                                }) => {
                                    yi.vitals[e] = t, Si()
                                })), X(a.SESSION_NEW_PAGE, (e => {
                                    Si()
                                })), X(a.SESSION_RESET, (() => {
                                    const e = D();
                                    wi = {
                                        sessionStart: 0,
                                        lastSeen: 0,
                                        adsRendered: 0,
                                        adsViewable: 0,
                                        pageCount: 0,
                                        vitals: {},
                                        sessionRevenue: 0
                                    }, yi = {
                                        sessionStart: e,
                                        lastSeen: e,
                                        adsRendered: 0,
                                        adsViewable: 0,
                                        pageCount: 0,
                                        vitals: {},
                                        sessionRevenue: 0
                                    }, Si()
                                })), function(e, t, n) {
                                    let i = 0;

                                    function r() {
                                        i = setTimeout(o, e), document.addEventListener("pointermove", a), document.addEventListener("mousedown", a), document.addEventListener("keydown", a), document.addEventListener("touchstart", a), document.addEventListener("scroll", a, !0)
                                    }

                                    function o() {
                                        i = 0, t()
                                    }

                                    function a() {
                                        i ? clearTimeout(i) : n(), document.removeEventListener("pointermove", a), document.removeEventListener("mousedown", a), document.removeEventListener("keydown", a), document.removeEventListener("touchstart", a), document.removeEventListener("scroll", a, !0), setTimeout(r, 1e3), yi.lastSeen = D(), _i = !0
                                    }
                                    r()
                                }(2e4, (() => {
                                    Ei = !0, Si()
                                }), (() => {
                                    Ei = !1
                                })), document.addEventListener("visibilitychange", (() => {
                                    "hidden" === document.visibilityState && Si()
                                })), document.addEventListener("blur", (() => {
                                    Si()
                                })), window.addEventListener("blur", (() => {
                                    Si()
                                })))
                            }(), window.gamera.getSessionMetrics = () => function() {
                                const e = D(),
                                    t = Ai(),
                                    n = _n(),
                                    i = n.events.pages[n.events.pages.length - 1];
                                let r = null;
                                n.dimensions && Array.isArray(n.dimensions.tpcs) && (r = -1 !== n.dimensions.tpcs.indexOf("enabled"));
                                let o = null;
                                o = window.navigator && window.navigator.userActivation ? window.navigator.userActivation.hasBeenActive : _i;
                                const a = {
                                    sessionStart: t.sessionStart,
                                    lastSeen: t.lastSeen,
                                    sessionLength: e - t.sessionStart,
                                    timeOnPage: i ? e - i._ts : 0,
                                    isIdle: Ei,
                                    hasEngaged: o,
                                    adsRendered: t.adsRendered,
                                    adsViewable: t.adsViewable,
                                    adDensity: Ii(),
                                    pageCount: t.pageCount,
                                    scrollDepth: i ? i.scrollDepth : 1,
                                    vitals: t.vitals,
                                    sessionRevenue: t.sessionRevenue,
                                    tpcs: r
                                };
                                return n.meta && n.meta.geo ? a.geo = n.meta.geo : a.geo = {}, n.meta && n.meta.device ? a.device = n.meta.device : a.device = {}, a
                            }()), F.audience && !F.runningInIframe ? window.gamera.addAdUnitPlacements = Ut : window.gamera.addAdUnitPlacements = () => {}, window.gamera.cmd.forEach((e => {
                                if ("function" == typeof e) try {
                                    e()
                                } catch (t) {
                                    y.error(`while processing fn ${e.name}: ${t}`)
                                }
                            })), window.gamera.cmd = {
                                push: e => e()
                            }, F.domain && Xi.setDomain(F.domain), F.partner && Xi.setPartner(F.partner), F.userId && Xi.setUserId(F.userId), F.sessionId && Xi.setSessionId(F.sessionId), F.ltv && (n = Zi, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                                _t = !0, window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                                    if (!e) return;
                                    if (e.isEmpty) {
                                        const t = Yt(e.slot);
                                        return void(t && K(a.AD_PLACEMENT_GTAG_RENDERED_EMPTY, t))
                                    }
                                    let t = e.slot.getAdUnitPath() || "";
                                    t = t.startsWith("/") ? t.toLowerCase() : "/" + t.toLowerCase();
                                    const i = {
                                        src: "gam",
                                        div: e.slot.getSlotElementId() || "",
                                        sid: t,
                                        nid: t.split("/")[1] || "",
                                        cid: String(e.sourceAgnosticCreativeId),
                                        lid: String(e.sourceAgnosticLineItemId),
                                        aid: String(e.advertiserId),
                                        adid: "",
                                        pb: ""
                                    };
                                    i.adid = Bt(e.slot, c, l), i.pb = Bt(e.slot, d, "_pb"),
                                        function(e, t) {
                                            const n = Yt(e);
                                            if (!n) return void y.debug(`gtag render for untracked slot ${t.div||t.sid}, skipping placement stats`);
                                            let i;
                                            F.gamNetwork && F.litems && Object.keys(F.litems).length > 0 && (i = "", t.nid === F.gamNetwork && t.lid && F.litems[t.lid] && (i = F.litems[t.lid]));
                                            const r = D();
                                            n.gtagRenderTS = r, n.lastRender = {
                                                type: "gtag",
                                                timestamp: r,
                                                gtagAdId: t.adid || "",
                                                litemType: i,
                                                advertiserId: t.aid || "n/a",
                                                pb: +t.pb || 0
                                            }, n.clicked = !1, n.history.push({
                                                timestamp: r,
                                                type: a.AD_PLACEMENT_GTAG_RENDERED,
                                                data: {
                                                    adUnitPath: t.sid,
                                                    networkId: t.nid,
                                                    lineItemId: t.lid,
                                                    advertiserId: t.aid,
                                                    creativeId: t.cid,
                                                    pb: +t.pb || 0,
                                                    adId: t.adid || "",
                                                    litemType: i
                                                }
                                            }), K(a.AD_PLACEMENT_GTAG_RENDERED, n), n.renders++, K(a.AD_PLACEMENT_RENDERED, n), n.viewabilityTracker || (n.viewabilityTracker = "gpt"), Ve(n)
                                        }(e.slot, i), n({
                                            type: o.AD_RENDERED,
                                            data: i
                                        })
                                })), window.googletag.pubads().addEventListener("slotRequested", (function(e) {
                                    if (!e || e.isEmpty) return;
                                    let t = e.slot.getAdUnitPath() || "";
                                    t = t.startsWith("/") ? t.toLowerCase() : "/" + t.toLowerCase();
                                    const n = {
                                        src: "gam",
                                        div: e.slot.getSlotElementId() || "",
                                        sid: t,
                                        nid: t.split("/")[1] || "",
                                        adid: "",
                                        pb: "",
                                        gameraId: []
                                    };
                                    n.adid = Bt(e.slot, c, l), n.pb = Bt(e.slot, d, "_pb");
                                    try {
                                        const t = e.slot.getTargeting("gamera");
                                        t && t.length && (n.gameraId = t)
                                    } catch (e) {}
                                    K(a.GAM_AD_REQUESTED, n);
                                    const i = Yt(e.slot);
                                    i && (i.gtagSlotRequestedTS = D(), K(a.AD_PLACEMENT_REQUESTED, i), i.viewabilityTracker && "gpt" !== i.viewabilityTracker && (Pe(i), i.viewabilityTracker = null))
                                })), window.googletag.pubads().addEventListener("impressionViewable", (function(e) {
                                    const t = Yt(e.slot);
                                    t && "gpt" === t.viewabilityTracker && (t.history.push({
                                        timestamp: D(),
                                        type: a.AD_PLACEMENT_VIEWABLE
                                    }), K(a.AD_PLACEMENT_VIEWABLE, t), t.viewabilityTracker = null)
                                }))
                            })), window.addEventListener("message", (e => {
                                const t = e && e.data;
                                t && t.type && t.type === r && n({
                                    type: o.AD_RENDERED,
                                    data: t.data
                                })
                            })), window.addEventListener("cnxImpressionData", (e => {
                                e && e.detail && e.detail.lineItemRevenue && n({
                                    type: o.PAGE_REVENUE,
                                    data: {
                                        type: "connatix",
                                        currency: "USD",
                                        revenue: +e.detail.lineItemRevenue
                                    }
                                })
                            }))), F.thirdPartyBillingProviders && F.thirdPartyBillingProviders.length > 0 && function(e) {
                                if (Ui) return void y.warn("Third party billing can only be enabled once");
                                if (Ui = !0, !Array.isArray(e)) return void y.error("Third party billing providers must be an array");
                                const t = e.filter((e => !Gi.some((t => t.name === e))));
                                t.length > 0 && y.warn(`Unsupported third party billing providers found: ${t.join(", ")}`);
                                const n = Gi.filter((t => e.includes(t.name)));
                                0 !== n.length ? n.forEach((e => {
                                    if ("function" != typeof e.billPageview) return void y.debug(`Third party billing provider ${e.name} does not have a billPageview function, skipping`);
                                    const t = _n() ? .events ? .pages || [];
                                    t.length > 0 && t.forEach((t => {
                                        try {
                                            e.billPageview(t)
                                        } catch (n) {
                                            y.error(`Error billing pageview for ${e.name} with pageview ID ${t.pvid}: ${n}`)
                                        }
                                    })), X(a.SESSION_NEW_PAGE, (t => e.billPageview(t ? .page))), y.debug(`Subscribed to SESSION_NEW_PAGE event for third party billing provider ${e.name}`)
                                })) : y.error("No active third party billing providers found")
                            }(F.thirdPartyBillingProviders), F.webMetrics) try {
                            const e = e => {
                                Xi.updateWebMetrics(e)
                            };
                            (function(e, t) {
                                t = t || {}, Un(On((function() {
                                    var n, i = Rn("CLS", 0),
                                        r = 0,
                                        o = [],
                                        a = function(e) {
                                            e.forEach((function(e) {
                                                if (!e.hadRecentInput) {
                                                    var t = o[0],
                                                        n = o[o.length - 1];
                                                    r && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (r += e.value, o.push(e)) : (r = e.value, o = [e])
                                                }
                                            })), r > i.value && (i.value = r, i.entries = o, n())
                                        },
                                        s = kn("layout-shift", a);
                                    s && (n = Cn(e, i, Fn, t.reportAllChanges), Nn((function() {
                                        a(s.takeRecords()), n(!0)
                                    })), In((function() {
                                        r = 0, i = Rn("CLS", 0), n = Cn(e, i, Fn, t.reportAllChanges), Tn((function() {
                                            return n()
                                        }))
                                    })), setTimeout(n, 0))
                                })))
                            })(e, {
                                reportAllChanges: !0
                            }),
                            function(e, t) {
                                "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (t = t || {}, Vn((function() {
                                    var n;
                                    Jn();
                                    var i, r = Rn("INP"),
                                        o = function(e) {
                                            ti((function() {
                                                e.forEach(ei);
                                                var t, n = (t = Math.min(Yn.length - 1, Math.floor(Qn() / 50)), Yn[t]);
                                                n && n.latency !== r.value && (r.value = n.latency, r.entries = n.entries, i())
                                            }))
                                        },
                                        a = kn("event", o, {
                                            durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
                                        });
                                    i = Cn(e, r, ni, t.reportAllChanges), a && (a.observe({
                                        type: "first-input",
                                        buffered: !0
                                    }), Nn((function() {
                                        o(a.takeRecords()), i(!0)
                                    })), In((function() {
                                        Kn = 0, Yn.length = 0, Xn.clear(), r = Rn("INP"), i = Cn(e, r, ni, t.reportAllChanges)
                                    })))
                                })))
                            }(e, {
                                reportAllChanges: !0
                            }),
                            function(e, t) {
                                t = t || {}, Vn((function() {
                                    var n, i = jn(),
                                        r = Rn("LCP"),
                                        o = function(e) {
                                            t.reportAllChanges || (e = e.slice(-1)), e.forEach((function(e) {
                                                e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - Dn(), 0), r.entries = [e], n())
                                            }))
                                        },
                                        a = kn("largest-contentful-paint", o);
                                    if (a) {
                                        n = Cn(e, r, ii, t.reportAllChanges);
                                        var s = On((function() {
                                            ri[r.id] || (o(a.takeRecords()), a.disconnect(), ri[r.id] = !0, n(!0))
                                        }));
                                        ["keydown", "click"].forEach((function(e) {
                                            addEventListener(e, (function() {
                                                return ti(s)
                                            }), !0)
                                        })), Nn(s), In((function(i) {
                                            r = Rn("LCP"), n = Cn(e, r, ii, t.reportAllChanges), Tn((function() {
                                                r.value = performance.now() - i.timeStamp, ri[r.id] = !0, n(!0)
                                            }))
                                        }))
                                    }
                                }))
                            }(e, {
                                reportAllChanges: !0
                            }), Un(e), si(e)
                        } catch (e) {}
                        F.audience && (function() {
                            let e = ["pbjs"];
                            "freestar" === F.partner ? e.push("fsprebid") : "publift" === F.partner ? e.push("fusePbjs") : "adverge" === F.partner && e.push("adv"), window._pbjsGlobals && Array.isArray(window._pbjsGlobals) && (e = window._pbjsGlobals.slice()), rr(e);
                            const t = (new Date).getTime();
                            let n = setInterval((function() {
                                if (window._pbjsGlobals && Array.isArray(window._pbjsGlobals)) {
                                    const t = window._pbjsGlobals.filter((t => -1 === e.indexOf(t)));
                                    t.length > 0 && (e.push(...t), rr(t))
                                }(new Date).getTime() - t > 1e4 && (clearInterval(n), y.debug("stopping pbjs discovery."))
                            }), 200)
                        }(), F.disableAdPlacementDiscovery || (function() {
                            try {
                                Lt = function(e) {
                                    const t = {};
                                    if (!e || "string" != typeof e) return t;
                                    const n = e.split("\n"),
                                        i = n[0],
                                        r = n.slice(1),
                                        o = i.split(",");
                                    return r.forEach((e => {
                                        if (!e) return;
                                        const n = e.split(","),
                                            i = n[0],
                                            r = {};
                                        for (let e = 1; e < o.length; e++) {
                                            const t = +n[e];
                                            r[o[e]] = isNaN(t) ? n[e] : t
                                        }
                                        t[i] = r
                                    })), t
                                }(F.placementStats)
                            } catch (e) {
                                y.error(`while parsing placement stats: ${e}`)
                            }
                            window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                                    var e;
                                    _t = !0,
                                        function() {
                                            let e = 0;
                                            Ft();
                                            let t = setInterval((() => {
                                                if (e++, e >= 10) return clearInterval(t), void(t = 0);
                                                Ft()
                                            }), 500);
                                            document.addEventListener("scroll", (() => {
                                                e = 0, 0 === t && (Ft(), t = setInterval((() => {
                                                    if (e++, e >= 10) return clearInterval(t), void(t = 0);
                                                    Ft()
                                                }), 500))
                                            }), !0)
                                        }(), F.enableGptSlotPatching && ("function" == typeof window.googletag.defineSlot && (window.googletag.defineSlot = (e = window.googletag.defineSlot, function() {
                                            var t = e.apply(this, arguments);
                                            try {
                                                Mt(t)
                                            } catch (e) {}
                                            return t
                                        })), "function" == typeof window.googletag.defineOutOfPageSlot && (window.googletag.defineOutOfPageSlot = function(e) {
                                            return function() {
                                                var t = e.apply(this, arguments);
                                                try {
                                                    Mt(t)
                                                } catch (e) {}
                                                return t
                                            }
                                        }(window.googletag.defineOutOfPageSlot)))
                                })),
                                function() {
                                    if (!be || Le) return;
                                    Le = Me();
                                    const e = () => {
                                            if (!Le) return;
                                            Le.disconnect(), Le = null;
                                            const e = R();
                                            Object.keys($e).forEach((t => {
                                                const n = $e[t];
                                                n.attentionState.isVisible && (n.attentionState.pastTimeInViewport += e - n.attentionState.lastEnteredViewport, n.attentionState.isVisible = !1, n.attentionState.lastExitedViewport = e)
                                            })), y.debug("attentionIO disconnected")
                                        },
                                        t = () => {
                                            Le || (Le = Me(), Object.keys($e).forEach((e => {
                                                Ve($e[e])
                                            })), Object.keys(je).forEach((e => {
                                                Ve(je[e])
                                            })), je = {}, y.debug("attentionIO reconnected"))
                                        };
                                    document.addEventListener("visibilitychange", (() => {
                                        "hidden" === document.visibilityState ? e() : t()
                                    })), window.addEventListener("focus", (() => {
                                        t()
                                    })), window.addEventListener("blur", (() => {
                                        e()
                                    })), X(a.SESSION_RESET, (() => {
                                        const e = R();
                                        Object.keys($e).forEach((t => {
                                            const n = $e[t];
                                            n && (n.attentionState.isVisible ? (n.attentionState.pastTimeInViewport = 0, n.attentionState.lastEnteredViewport = e, n.attentionState.lastExitedViewport = e) : n.attentionState.pastTimeInViewport = 0, n.sovValues && (n.sovValues = []), n.adDensityValues && (n.adDensityValues = []))
                                        }))
                                    }))
                                }();
                            let n = !1;
                            try {
                                (window.location.search.indexOf("gameraDiagnostics") > -1 || function() {
                                    try {
                                        return null !== window.localStorage.getItem(t)
                                    } catch (e) {
                                        return !1
                                    }
                                }()) && ($t(), n = !0)
                            } catch (e) {
                                y.error(`while gamera diagnostics script: ${e}`)
                            }
                            if (!n && window.location.search.indexOf(e) > -1) {
                                const e = () => J(St, fe(), re());
                                e(), setInterval((() => {
                                    document.hidden || e()
                                }), 2e3), window.addEventListener("resize", e)
                            }
                            X(a.ADSENSE_SLOTS_FOUND, (e => {
                                if (!e || !e.slots || !Array.isArray(e.slots)) return;
                                const t = [];
                                e.slots.forEach((e => {
                                    e.parentElementId && !Nt[e.parentElementId] && (t.push(e), Nt[e.parentElementId] = !0)
                                })), t.length > 0 && function(e) {
                                    if (!e || !Array.isArray(e)) return;
                                    const t = [];
                                    e.forEach((e => {
                                        try {
                                            for (let t = 0; t < St.length; t++)
                                                if (St[t].divId === e.parentElementId) return;
                                            const n = Wt(e.parentElementId, "", !1);
                                            if (!n) return;
                                            t.push(n)
                                        } catch (t) {
                                            y.error(`while adding AdSense placement ${e.parentElementId}: ${t}`)
                                        }
                                    })), Ht(t)
                                }(t)
                            })), X(a.ADSENSE_SLOT_FILLED, (e => {
                                e && e.slot && function(e) {
                                    const t = function(e) {
                                        if (!e || !e.parentElementId) return null;
                                        const t = Pt();
                                        for (const n of t)
                                            if (n.divId === e.parentElementId) return n;
                                        return null
                                    }(e);
                                    if (!t) return;
                                    const n = D();
                                    t.adSenseRenderTS = n, t.clicked = !1, t.history.push({
                                        timestamp: n,
                                        type: a.AD_PLACEMENT_ADSENSE_RENDERED,
                                        data: {
                                            adSlot: e.adSlot || "",
                                            adClient: e.adClient || "",
                                            adStatus: e.adStatus || ""
                                        }
                                    }), K(a.AD_PLACEMENT_ADSENSE_RENDERED, t), t.lastRender = {
                                        type: "adsense",
                                        timestamp: n
                                    }, t.renders++, K(a.AD_PLACEMENT_RENDERED, t), Ve(t), t.viewabilityTracker = "adsense", Re(t)
                                }(e.slot)
                            })), X(a.ADSENSE_SLOT_UNFILLED, (e => {
                                e && e.slot && y.debug(`AdSense slot ${e.slot.adSlot} in ${e.slot.parentElementId} is unfilled`)
                            })), X(a.DCM_SLOTS_FOUND, (e => {
                                if (!e || !e.slots || !Array.isArray(e.slots)) return;
                                const t = [];
                                e.slots.forEach((e => {
                                    e.parentElementId && !Ot[e.parentElementId] && (t.push(e), Ot[e.parentElementId] = !0)
                                })), t.length > 0 && function(e) {
                                    if (!e || !Array.isArray(e)) return;
                                    const t = [];
                                    e.forEach((e => {
                                        try {
                                            for (let t = 0; t < St.length; t++)
                                                if (St[t].divId === e.parentElementId) return;
                                            const n = Wt(e.parentElementId, "", !1);
                                            if (!n) return;
                                            t.push(n)
                                        } catch (t) {
                                            y.error(`while adding DCM placement ${e.parentElementId}: ${t}`)
                                        }
                                    })), Ht(t)
                                }(t)
                            })), X(a.DCM_SLOT_FILLED, (e => {
                                e && e.slot && function(e) {
                                    const t = function(e) {
                                        if (!e || !e.parentElementId) return null;
                                        const t = Pt();
                                        for (const n of t)
                                            if (n.divId === e.parentElementId) return n;
                                        return null
                                    }(e);
                                    if (!t) return;
                                    const n = D();
                                    t.dcmRenderTS = n, t.clicked = !1, t.history.push({
                                        timestamp: n,
                                        type: a.AD_PLACEMENT_DCM_RENDERED,
                                        data: {
                                            placement: e.placement || ""
                                        }
                                    }), K(a.AD_PLACEMENT_DCM_RENDERED, t), t.lastRender = {
                                        type: "dcm",
                                        timestamp: n
                                    }, t.renders++, K(a.AD_PLACEMENT_RENDERED, t), Ve(t), t.viewabilityTracker = "dcm", Re(t)
                                }(e.slot)
                            })), X(a.BOUNCEX_SLOTS_FOUND, (e => {
                                if (!e || !e.slots || !Array.isArray(e.slots)) return;
                                const t = [];
                                e.slots.forEach((e => {
                                    e.divId && !xt[e.divId] && (t.push(e), xt[e.divId] = !0)
                                })), t.length > 0 && function(e) {
                                    if (!e || !Array.isArray(e)) return;
                                    const t = [];
                                    e.forEach((e => {
                                        try {
                                            for (let t = 0; t < St.length; t++)
                                                if (St[t].divId === e.divId) return;
                                            const n = Wt(e.divId, "bouncex/" + e.campaignId, !1);
                                            if (!n) return;
                                            t.push(n)
                                        } catch (t) {
                                            y.error(`while adding BounceX placement ${e.divId}: ${t}`)
                                        }
                                    })), Ht(t)
                                }(t)
                            })), X(a.BOUNCEX_SLOT_RENDERED, (e => {
                                e && e.slot && function(e) {
                                    const t = function(e) {
                                        if (!e || !e.divId) return null;
                                        const t = Pt();
                                        for (const n of t)
                                            if (n.divId === e.divId) return n;
                                        return null
                                    }(e);
                                    if (!t) return;
                                    const n = D();
                                    t.bouncexRenderTS = n, t.clicked = !1, t.bouncexBid = {
                                        campaignId: e.campaignId || "",
                                        provider: e.winningBid && e.winningBid.provider || "",
                                        price: e.winningBid && +e.winningBid.price || 0,
                                        currency: "USD",
                                        dealId: e.winningBid && e.winningBid.dealId || "",
                                        dealName: e.winningBid && e.winningBid.dealName || "",
                                        adUnitId: e.winningBid && e.winningBid.adUnitId || ""
                                    }, t.history.push({
                                        timestamp: n,
                                        type: a.AD_PLACEMENT_BOUNCEX_RENDERED,
                                        data: {
                                            campaignId: t.bouncexBid.campaignId,
                                            provider: t.bouncexBid.provider,
                                            price: t.bouncexBid.price,
                                            dealId: t.bouncexBid.dealId,
                                            dealName: t.bouncexBid.dealName,
                                            adUnitId: t.bouncexBid.adUnitId
                                        }
                                    }), K(a.AD_PLACEMENT_BOUNCEX_RENDERED, t), t.lastRender = {
                                        type: "bouncex",
                                        timestamp: n
                                    }, t.renders++, K(a.AD_PLACEMENT_RENDERED, t), Ve(t), t.viewabilityTracker = "bouncex", Re(t)
                                }(e.slot)
                            }))
                        }(), function() {
                            if (F.disableGptCuration) return;
                            if (!(F.curationRules || []).some((e => Array.isArray(e.target) ? e.target.includes("gpt") : "gpt" === e.target))) return;
                            Qi = !0, dr(), X(a.GPT_SLOT_REGISTERED, (e => {
                                const t = e && e.slot;
                                t && (y.debug(`GPT slot registered: ${t.getAdUnitPath()} / ${t.getSlotElementId()}`), function(e) {
                                    if (!Qi || !F.consentGranted) return;
                                    const t = function(e) {
                                        if (!e || "function" != typeof e.getSlotElementId || "function" != typeof e.getAdUnitPath) return null;
                                        const t = e.getSlotElementId(),
                                            n = e.getAdUnitPath(),
                                            i = At[t];
                                        if (i) return i.gpid && i.gpid === n || (y.debug(`updating gpid for placement ${t} from ${i.gpid} to ${n}`), i.gpid = n), i;
                                        const r = Wt(t, n, en(e));
                                        return r ? (Ht([r]), At[t] || r) : null
                                    }(e);
                                    if (!t) return;
                                    const n = `${e.getAdUnitPath()}#${e.getSlotElementId()}`,
                                        i = function(e) {
                                            if (!e || !e.gpid) return null;
                                            const t = fi(e, gi(), "gpt");
                                            return t && t.length > 0 ? {
                                                gamera: t
                                            } : null
                                        }(t);
                                    if (i) Object.keys(i).forEach((t => {
                                        ar(e, t, i[t])
                                    })), Ki[n] = i;
                                    else if (Ki[n]) {
                                        const t = Ki[n];
                                        Object.keys(t).forEach((t => {
                                            sr(e, t)
                                        })), delete Ki[n]
                                    }
                                }(t))
                            }));
                            let e = 250;
                            const t = () => {
                                dr(), e = Math.min(2 * e, 2e3), window.setTimeout(t, e)
                            };
                            window.setTimeout(t, e)
                        }(), function() {
                            if (Pi) return;
                            Pi = !0;
                            const e = () => {
                                if (!Pi) return;
                                const e = document.getElementsByTagName("INS"),
                                    t = new WeakMap,
                                    n = () => {
                                        const n = [],
                                            i = [],
                                            r = [],
                                            o = Array.from(e);
                                        for (let e = 0; e < o.length; e++) {
                                            const a = o[e];
                                            if (!a.classList.contains("adsbygoogle") || !a.hasAttribute("data-ad-client")) continue;
                                            const s = a.getAttribute("data-ad-status"),
                                                d = a.getAttribute("data-ad-client"),
                                                c = a.getAttribute("data-ad-slot"),
                                                l = a.parentElement ? .id,
                                                u = {
                                                    adClient: d,
                                                    adSlot: c,
                                                    adStatus: s,
                                                    parentElementId: l
                                                },
                                                p = t.get(a);
                                            p ? p.lastStatus !== s && (p.lastStatus = s, "filled" === s ? i.push(u) : "unfilled" === s && r.push(u)) : (n.push(u), t.set(a, {
                                                lastStatus: s
                                            }), "filled" === s ? i.push(u) : "unfilled" === s && r.push(u))
                                        }
                                        n.length > 0 && K(a.ADSENSE_SLOTS_FOUND, {
                                            slots: n
                                        }), i.forEach((e => K(a.ADSENSE_SLOT_FILLED, {
                                            slot: e
                                        }))), r.forEach((e => K(a.ADSENSE_SLOT_UNFILLED, {
                                            slot: e
                                        })))
                                    };
                                try {
                                    n()
                                } catch (e) {
                                    y.error("Error in initial AdSense check", e)
                                }
                                Di = setInterval(n, 1e3), y.debug("Polling live HTMLCollection for ins.adsbygoogle")
                            };
                            "loading" !== document.readyState && document.body ? e() : document.addEventListener("DOMContentLoaded", e)
                        }(), F.enableDcmTracking && function() {
                            if (Ri) return;
                            Ri = !0;
                            const e = () => {
                                if (!Ri) return;
                                const e = document.getElementsByTagName("INS"),
                                    t = new WeakMap,
                                    n = () => {
                                        const n = [],
                                            i = [],
                                            r = Array.from(e);
                                        for (let e = 0; e < r.length; e++) {
                                            const o = r[e];
                                            if (!o.classList.contains("dcmads") || !o.hasAttribute("data-dcm-placement")) continue;
                                            const a = o.getAttribute("data-dcm-placement"),
                                                s = o.parentElement ? .id,
                                                d = Ti(o),
                                                c = {
                                                    placement: a,
                                                    parentElementId: s
                                                },
                                                l = t.get(o);
                                            l ? !l.lastFilled && d && (l.lastFilled = !0, i.push(c)) : (n.push(c), t.set(o, {
                                                lastFilled: d
                                            }), d && i.push(c))
                                        }
                                        n.length > 0 && K(a.DCM_SLOTS_FOUND, {
                                            slots: n
                                        }), i.forEach((e => K(a.DCM_SLOT_FILLED, {
                                            slot: e
                                        })))
                                    },
                                    i = (e, t, i) => {
                                        let r = 0;
                                        ki = setInterval((() => {
                                            try {
                                                n()
                                            } catch (e) {
                                                y.error("Error in DCM check", e)
                                            }
                                            r++, r >= t && (clearInterval(ki), ki = null, i())
                                        }), e)
                                    },
                                    r = () => {
                                        ki && (clearInterval(ki), ki = null), i(1e3, 5, (() => {
                                            Ri && i(2e3, 5, (() => {}))
                                        }))
                                    };
                                try {
                                    n()
                                } catch (e) {
                                    y.error("Error in initial DCM check", e)
                                }
                                r();
                                const o = () => {
                                    Ri && (ki || r())
                                };
                                document.addEventListener("scroll", o, {
                                    capture: !0,
                                    passive: !0
                                }), Ci = () => {
                                    document.removeEventListener("scroll", o, {
                                        capture: !0
                                    }), ki && (clearInterval(ki), ki = null)
                                }, y.debug("Polling live HTMLCollection for ins.dcmads")
                            };
                            "loading" !== document.readyState && document.body ? e() : document.addEventListener("DOMContentLoaded", e)
                        }(), F.enableBouncexTracking && function() {
                            if (Ni) return;
                            Ni = !0;
                            const e = () => {
                                Ni && function() {
                                    if (window.bouncex) return void Vi();
                                    const e = Date.now();
                                    Oi = setInterval((() => Ni ? window.bouncex ? (clearInterval(Oi), Oi = null, void Vi()) : void(Date.now() - e > 1e4 && (clearInterval(Oi), Oi = null, y.debug("window.bouncex never appeared, stopping BounceX tracking"))) : (clearInterval(Oi), void(Oi = null))), 250)
                                }()
                            };
                            "loading" !== document.readyState && document.body ? e() : document.addEventListener("DOMContentLoaded", e)
                        }(), function() {
                            if (nt) return;
                            y.debug("video discovery: starting"), at();
                            const e = Date.now();
                            nt = setInterval((() => {
                                at(), Date.now() - e >= 12e4 && (clearInterval(nt), nt = null, ct(), y.debug("video discovery: periodic scan ended"))
                            }), 3e3)
                        }(), F.enableWidgetDiscovery && (mt || (mt = !0, y.debug("widget discovery: starting"), X(a.SESSION_NEW_PAGE, ie), X(a.SESSION_RESET, ie), document.addEventListener("scroll", wt, {
                            capture: !0,
                            passive: !0
                        }), yt())), F.enableUserInitiatedRenderExclusion && function() {
                            try {
                                document.addEventListener("click", an, {
                                    capture: !0,
                                    passive: !0
                                }), rn = !0
                            } catch (e) {
                                y.error(`while enabling user-initiated render detection: ${e}`)
                            }
                        }()), document.addEventListener("visibilitychange", (() => {
                            "hidden" === document.visibilityState && Qt()
                        })), document.addEventListener("blur", (() => {
                            Qt()
                        })), window.addEventListener("blur", (() => {
                            Qt()
                        })), document.addEventListener("keydown", (e => {
                            "Tab" === e.key && (Xt = Date.now())
                        })), document.addEventListener("pointermove", (e => {
                            Kt = Date.now()
                        })), function() {
                            if ("function" == typeof ReportingObserver) try {
                                new ReportingObserver((e => {
                                    if (e && e.length)
                                        for (let t = 0; t < e.length; t++) qi(e[t])
                                }), {
                                    buffered: !0,
                                    types: ["intervention"]
                                }).observe()
                            } catch (e) {
                                y.error(`Error enabling heavy-ad intervention tracking: ${e}`)
                            }
                        }());
                        const s = () => {
                            F.audience && (function() {
                                try {
                                    let e = Xi.getUserId() || I("gamera_user_id");
                                    e || (e = A()), P("gamera_user_id", e, 8760, "Lax"), Xi.setUserId(e)
                                } catch (e) {
                                    y.error(`while generating gamera_user_id: ${e}`)
                                }
                            }(), hi()), Xi.startEmitting()
                        };
                        F.consentGranted ? s() : window.addEventListener(i, s, {
                                once: !0
                            }),
                            function() {
                                try {
                                    ir({
                                        gamera_ctx: F.runningInIframe ? "iframe" : "top"
                                    })
                                } catch (e) {
                                    y.error(`while checking js execution context: ${e}`)
                                }
                            }(),
                            function() {
                                try {
                                    (F.curationRules && F.curationRules.length > 0 || F.placementStats) && ir({
                                        gamera_signals: "true"
                                    })
                                } catch (e) {
                                    y.error(`while checking for curation rules and placement stats: ${e}`)
                                }
                            }()
                    }()
            }()
    } catch (e) {
        q(e)
    }

    function Zi(e) {
        try {
            switch (Xi.sync(), e.type) {
                case o.AD_RENDERED:
                    Xi.processNewAdEvent(e.data);
                    break;
                case o.BID_WON:
                    Xi.addWinningBid(e.data);
                    break;
                case o.PAGE_SCROLL:
                    if (Xi.updatePageScroll(), F.spaIgnoreNavigation) break;
                case o.NEW_PAGE:
                    Xi.processNewPage();
                    break;
                case o.CUSTOM:
                    Xi.processNewCustomEvent(e.name, e.data);
                    break;
                case o.ADD_DIMENSIONS:
                    Xi.addDimensions(e.data);
                    break;
                case o.ADD_METRICS:
                    Xi.addMetrics(e.data);
                    break;
                case o.PAGE_REVENUE:
                    Xi.addPageRevenue(e.data);
                    break;
                default:
                    y.warn(`unknown event type: ${e.type}`)
            }
        } catch (t) {
            y.error(`while processing ${e.type}: ${t}`), q(t)
        }
    }

    function er(e, t) {
        Zi({
            type: o.CUSTOM,
            name: e,
            data: t
        })
    }

    function tr() {
        try {
            Xi.sync(), Xi.keepPageAlive()
        } catch (e) {}
    }

    function nr(e) {
        if ("auxclick" === e.type && 1 !== e.button) return;
        let t = e.target,
            n = "";
        for (let e = 0; e <= 3 && t && "function" == typeof t.getAttribute; e++) {
            const e = t.getAttribute("data-click");
            if (null !== e) {
                n = e || t.getAttribute("id");
                break
            }
            t = t.parentNode
        }
        n && er("click", {
            target: n
        })
    }

    function ir(e) {
        e && "object" == typeof e && !Array.isArray(e) ? Zi({
            type: o.ADD_DIMENSIONS,
            data: e
        }) : y.error('argument "dimensions" has an invalid type')
    }

    function rr(e) {
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            window[n] = window[n] || {}, window[n].que = window[n].que || [];
            const i = {},
                r = function() {
                    window[n].onEvent("bidWon", (e => {
                        cn(window[n]), Zi({
                            type: o.BID_WON,
                            data: e
                        });
                        let t = null;
                        e.adUnitId && (t = i[e.adUnitId]), t || (t = window[n].adUnits.find((t => t.code === e.adUnitCode))), t || (y.warn(`ad unit not found for bid won PBJS ad unit ${e.adUnitCode}, will try matching just by adUnitCode`), t = {
                            code: e.adUnitCode
                        }), setTimeout((() => {
                            Vt(t, e)
                        }), 0)
                    })), window[n].onEvent("auctionInit", (e => {
                        const t = e.adUnits;
                        t && Array.isArray(t) && (t.forEach((e => {
                            if (!e.adUnitId) return;
                            const t = e.code,
                                n = N(e, "ortb2Imp.ext.gpid"),
                                r = N(e, "ortb2Imp.ext.data.pbadslot");
                            i[e.adUnitId] = {
                                code: t,
                                ortb2Imp: {
                                    ext: {
                                        gpid: n,
                                        data: {
                                            pbadslot: r
                                        }
                                    }
                                }
                            }
                        })), Gt(e))
                    })), window[n].onEvent("beforeRequestBids", (e => {
                        F.consentGranted && (y.debug("enriching pbjs bidder params"), or(n, e))
                    })), window[n].onEvent("setTargeting", (e => {
                        dr()
                    })), window[n].onEvent("auctionEnd", (({
                        adUnitCodes: e
                    }) => {
                        zt().filter((t => -1 !== e.indexOf(t.code))).forEach((e => {
                            N(e, "ortb2Imp.ext.data.gameraId") && delete e.ortb2Imp.ext.data.gameraId
                        }))
                    }))
                };
            if ("function" == typeof window[n].onEvent) try {
                r()
            } catch (e) {
                y.warn(`direct pbjs subscribe failed for ${n}, falling back to que: ${e}`), window[n].que.push(r)
            } else window[n].que.push(r)
        }
    }

    function or(e, t) {
        if (t && Array.isArray(t) && 0 !== t.length) try {
            const n = D(),
                i = window[e] ? .aliasRegistry || window[e] ? .bidderAlias || {},
                r = {},
                o = (mi(null, 0, 0, t), null);
            t.forEach((e => {
                const t = N(e, "ortb2Imp.ext.data.gameraId");
                t && Array.isArray(t) && t.length > 0 && t.forEach((e => {
                    const t = `signals_${e}_pbjs`;
                    r[t] = (r[t] || 0) + 1
                })), (e.bids || []).forEach((e => {
                    if (!e || "medianet" !== e.bidder && "medianet" !== i[e.bidder]) try {
                        e && function(e, t) {
                            if ("string" != typeof e || !e) return !1;
                            const n = t && "object" == typeof t ? t : {},
                                i = new Set;
                            let r = e;
                            for (;;) {
                                if (r === zi) return !0;
                                i.add(r);
                                const e = n[r];
                                if ("string" != typeof e || !e || i.has(e)) return !1;
                                r = e
                            }
                        }(e.bidder, i) && function(e, t) {
                            if (!e || "object" != typeof e) return [];
                            if (null != e.params && ("object" != typeof e.params || !Object.isExtensible(e.params))) return [];
                            const n = e.params ? e.params.keywords : void 0;
                            if (null != n && "string" != typeof n) return [];
                            const i = (n || "").split(",").filter((e => "" !== e.trim() && e.split("=")[0].trim() !== Ji)),
                                r = Math.max(0, Yi - i.length),
                                o = [];
                            (Array.isArray(t) ? t : []).forEach((e => {
                                "string" == typeof e && e && !/[,=]/.test(e) && o.length < r && !o.includes(e) && o.push(e)
                            }));
                            const a = o.map((e => `${Ji}=${e}`)),
                                s = i.concat(a).join(",");
                            return s ? (e.params = e.params || {}, e.params.keywords = s) : e.params && "keywords" in e.params && delete e.params.keywords, o
                        }(e, t).length > 0 && (r.signals_gamera_msft = (r.signals_gamera_msft || 0) + 1)
                    } catch (e) {
                        y.error(`while setting msft keywords: ${e}`)
                    } else if (t && Array.isArray(t) && t.length > 0) {
                        const e = "signals_gamera_medianet";
                        r[e] = (r[e] || 0) + 1
                    }
                }));
                const a = Jt(e);
                if (a) {
                    const t = (e.bids || []).filter((e => e && ("medianet" === e.bidder || "medianet" === i[e.bidder])));
                    t.forEach((e => {
                        ! function(e, t, n, i, r, o) {
                            if (Hi(e, t, n, i, r, "medianet", o), !t.stats) return;
                            e.ortb2Imp = e.ortb2Imp || {}, e.ortb2Imp.ext = e.ortb2Imp.ext || {}, e.ortb2Imp.ext.data = e.ortb2Imp.ext.data || {}, e.ortb2Imp.ext.data.gameraMetrics = {}, t.stats && Object.keys(t.stats).forEach((n => {
                                const i = t.stats[n];
                                if ("number" != typeof i) return;
                                const r = s[n];
                                r && (e.ortb2Imp.ext.data.gameraMetrics[r] = i)
                            }));
                            const a = n - di,
                                d = ci(t.viewport),
                                c = (t.renders || 0) + 1;
                            e.ortb2Imp.ext.data.gameraMetrics.time_on_page = a >= 0 ? a : Math.floor(performance.now() / 1e3), e.ortb2Imp.ext.data.gameraMetrics.viewport_density = d, e.ortb2Imp.ext.data.gameraMetrics.render_sequence = c
                        }(e, a, n, o, F.partner, r)
                    }));
                    const d = (e.bids || []).filter((e => e && ("ix" === e.bidder || "ix" === i[e.bidder])));
                    d.forEach((e => {
                        ! function(e, t, n, i, r, o) {
                            Hi(e, t, n, i, r, "ix", o)
                        }(e, a, n, o, F.partner, r)
                    }));
                    const c = (e.bids || []).filter((e => e && ("openx" === e.bidder || "openx" === i[e.bidder])));
                    c.forEach((e => {
                        ! function(e, t, n, i, r, o) {
                            Hi(e, t, n, i, r, "openx", o)
                        }(e, a, n, o, F.partner, r)
                    }))
                }
            })), Object.keys(r).length > 0 && Xi.addPageObservabilityMetrics(r, !0)
        } catch (e) {
            y.error(`while setting/counting bid enrichments: ${e}`)
        }
    }

    function ar(e, t, n) {
        e ? "function" == typeof e.setConfig ? e.setConfig({
            targeting: {
                [t]: n
            }
        }) : "function" == typeof e.setTargeting ? e.setTargeting(t, n) : y.warn(`while setting targeting for slot: slot has no compatible targeting API, key: ${t}`) : y.warn(`while setting targeting for slot: slot is null, key: ${t}`)
    }

    function sr(e, t) {
        e ? "function" == typeof e.setConfig ? e.setConfig({
            targeting: {
                [t]: null
            }
        }) : "function" == typeof e.clearTargeting ? e.clearTargeting(t) : y.warn(`while clearing targeting for slot: slot has no compatible targeting API, key: ${t}`) : y.warn(`while clearing targeting for slot: slot is null, key: ${t}`)
    }

    function dr() {
        if (!Qi || !F.consentGranted) return;
        const e = function() {
            F.disableAdPlacementDiscovery || qt();
            let e = {};
            const t = Pt(),
                n = gi();
            return t.forEach((t => {
                if (!t.gpid) return;
                const i = fi(t, n, "gpt");
                i && i.length > 0 && (e[`${t.gpid}#${t.divId}`] = {
                    gamera: i
                })
            })), e
        }();
        (_t ? window.googletag.pubads().getSlots() : []).forEach((t => {
            const n = `${t.getAdUnitPath()}#${t.getSlotElementId()}`;
            if (e[n]) {
                const i = e[n];
                Object.keys(i).forEach((e => {
                    ar(t, e, i[e])
                }))
            } else if (Ki[n]) {
                const e = Ki[n];
                Object.keys(e).forEach((e => {
                    sr(t, e)
                }))
            }
        })), Ki = e
    }
})();