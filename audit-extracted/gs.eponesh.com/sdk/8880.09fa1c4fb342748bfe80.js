(self.webpackChunkgame_score_sdk = self.webpackChunkgame_score_sdk || []).push([
    [8880], {
        3716: e => {
            "use strict";
            var t = Array.prototype.slice;

            function i(e) {
                var i, r = t.call(arguments, 1);
                switch (r.length) {
                    case 1:
                        throw new Error("Not enough forms");
                    case 2:
                        i = e > 1 ? r[1] : r[0];
                        break;
                    default:
                        i = r[n(e)]
                }
                return i.replace(/%d/g, e)
            }

            function r(e) {
                return e > 1e6 ? 2 : (e > 1e3 && e < 1e6 && /000$/.test(e) && (e /= 1e3), e % 10 == 1 && e % 100 != 11 || /1000$/.test(e.toString()) ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }

            function n(e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            }
            e.exports = i, e.exports.noun = i, e.exports.verb = function(e) {
                var i = t.call(arguments, 1),
                    n = i[r(e)];
                return n.replace(/%d/g, e)
            }
        },
        1017: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => s
            });
            var r = i(2616),
                n = i.n(r)()((function(e) {
                    return e[1]
                }));
            n.push([e.id, ".gp-crazy-games-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:1000;overflow:hidden}.gp-crazy-games-sticky__creative{position:relative;width:100%;height:100%}.gp-crazy-games-sticky_top{top:0}.gp-crazy-games-sticky_bottom{bottom:0}", ""]);
            const s = n
        },
        4034: (e, t, i) => {
            "use strict";
            i.d(t, {
                V$: () => h,
                vZ: () => l,
                ZP: () => p
            });
            var r, n = i(3716),
                s = i.n(n),
                o = i(7),
                a = i(8293),
                u = i(9503),
                d = function(e, t, i, r) {
                    return new(i || (i = Promise))((function(n, s) {
                        function o(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                e(t)
                            }))).then(o, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                },
                c = function(e, t, i, r) {
                    if ("a" === i && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e)
                };
            const h = {
                    RUB: {
                        [u.Uo.RU]: () => "РУБ",
                        [u.Uo.EN]: () => "RUB"
                    },
                    USD: {
                        [u.Uo.RU]: () => "ДОЛ",
                        [u.Uo.EN]: () => "USD"
                    },
                    EUR: {
                        [u.Uo.RU]: () => "ЕВРО",
                        [u.Uo.EN]: () => "EUR"
                    },
                    GBP: {
                        [u.Uo.RU]: () => "ФУНТ",
                        [u.Uo.EN]: () => "GBP"
                    },
                    AED: {
                        [u.Uo.RU]: () => "AED",
                        [u.Uo.EN]: () => "AED"
                    },
                    INR: {
                        [u.Uo.RU]: () => "INR",
                        [u.Uo.EN]: () => "INR"
                    },
                    KRW: {
                        [u.Uo.RU]: () => "ВОН",
                        [u.Uo.EN]: () => "KRW"
                    },
                    JPY: {
                        [u.Uo.RU]: () => "ИЕН",
                        [u.Uo.EN]: () => "JPY"
                    },
                    CNY: {
                        [u.Uo.RU]: () => "ЮАН",
                        [u.Uo.EN]: () => "CNY"
                    },
                    TRY: {
                        [u.Uo.RU]: () => "ЛИР",
                        [u.Uo.EN]: () => "TRY"
                    },
                    BRL: {
                        [u.Uo.RU]: () => "РЕАЛ",
                        [u.Uo.EN]: () => "BRL"
                    },
                    IDR: {
                        [u.Uo.RU]: () => "IDR",
                        [u.Uo.EN]: () => "IDR"
                    }
                },
                l = (e, t, i) => {
                    var r, n, s;
                    return (null === (s = (null === (r = h[e]) || void 0 === r ? void 0 : r[i]) || (null === (n = h[e]) || void 0 === n ? void 0 : n[u.Uo.EN])) || void 0 === s ? void 0 : s(t)) || e
                };
            class p {
                constructor(e, t, i) {
                    this.gp = e, this.sdk = t, this.isServerValidation = !0, this.isOneTimeSubscription = !1, this.isNeedAuthorizeBeforePurchase = !0, r.set(this, void 0),
                        function(e, t, i, r, n) {
                            if ("m" === r) throw new TypeError("Private method is not writable");
                            if ("a" === r && !n) throw new TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                            "a" === r ? n.call(e, i) : n ? n.value = i : t.set(e, i)
                        }(this, r, i, "f"), c(this, r, "f").on(o.ie.EXTERNAL_PLAYER_PURCHASE, (e => {
                            var t, i;
                            e.success || null === (t = this.purchaseTransaction) || void 0 === t || t.abort(null == e ? void 0 : e.error), null === (i = this.purchaseTransaction) || void 0 === i || i.done(e)
                        }))
                }
                get isSupportsPayments() {
                    var e;
                    return !!(null === (e = this.gp.platform.config.paymentsConfig.configs.web) || void 0 === e ? void 0 : e.activeService)
                }
                get isSupportsSubscriptions() {
                    var e;
                    return !!(null === (e = this.gp.platform.config.paymentsConfig.configs.web) || void 0 === e ? void 0 : e.activeService)
                }
                mapProducts(e, t) {
                    return d(this, void 0, void 0, (function*() {
                        const i = e.platform.config.currencyPluralisations[this.gp.language] || e.platform.config.currencyPluralisations.en;
                        if (!i) return t.map((t => Object.assign(Object.assign({}, t), {
                            price: Number(t.price.toFixed(2)),
                            currencySymbol: l(t.currency, t.price, e.language)
                        })));
                        const r = i.split("|").map((e => e.trim()));
                        return t.map((e => Object.assign(Object.assign({}, e), {
                            price: Number(e.price.toFixed(2)),
                            currencySymbol: s()(e.price, ...r)
                        })))
                    }))
                }
                consumeAllExpired(e, t, i) {
                    return d(this, void 0, void 0, (function*() {}))
                }
                fetchPurchases() {
                    return d(this, void 0, void 0, (function*() {
                        return {
                            payload: {},
                            purchases: []
                        }
                    }))
                }
                purchase(e, t) {
                    return d(this, void 0, void 0, (function*() {
                        return this.purchaseTransaction = (0, a._)(), yield this.sdk.ready, yield c(this, r, "f").send({
                            type: o.W9.REQUEST_TO_PURCHASE,
                            payload: Object.assign({
                                id: e.id,
                                name: e.name,
                                description: e.description,
                                price: e.price,
                                icon: e.icon
                            }, t)
                        }), yield this.purchaseTransaction.ready
                    }))
                }
                consume(e) {
                    return d(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                subscribe(e, t, i) {
                    return d(this, void 0, void 0, (function*() {
                        if (yield this.sdk.ready, !this.gp.player.isLoggedIn) throw new Error("subscribe failed");
                        return 0 == (null == t ? void 0 : t.subscribed) && Date.parse(null == t ? void 0 : t.expiredAt) > Date.parse(this.gp.serverTime) ? this.sdk.resumeSubscription(t) : this.purchase(e, i)
                    }))
                }
                unsubscribe(e, t) {
                    return d(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.unsubscribe(e, t)
                    }))
                }
            }
            r = new WeakMap
        },
        5526: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => d
            });
            var r = i(4034),
                n = i(1271),
                s = function(e, t, i, r) {
                    return new(i || (i = Promise))((function(n, s) {
                        function o(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                e(t)
                            }))).then(o, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                };
            const o = {
                    isSupportsPayments: !0,
                    isSupportsSubscriptions: !0
                },
                a = {
                    [n.Z.name]: e => e.isMobileApp ? {
                        isSupportsPayments: !1,
                        isSupportsSubscriptions: !1
                    } : o
                };

            function u(e) {
                const t = a[e.constructor.name];
                return t ? "function" == typeof t ? t(e) : t : o
            }
            class d {
                constructor(e, t, i = !1) {
                    this.gp = e, this.sdk = t, this.isAndroid = i, this.isServerValidation = !0, this.isOneTimeSubscription = !1
                }
                get isSupportsPayments() {
                    return u(this.sdk).isSupportsPayments
                }
                get isSupportsSubscriptions() {
                    return u(this.sdk).isSupportsSubscriptions
                }
                get isNeedAuthorizeBeforePurchase() {
                    return !this.isAndroid
                }
                mapProducts(e, t) {
                    return s(this, void 0, void 0, (function*() {
                        return t.map((t => Object.assign(Object.assign({}, t), {
                            price: Math.round(100 * (t.price + Number.EPSILON)) / 100,
                            currencySymbol: (0, r.vZ)(t.currency, t.price, e.language)
                        })))
                    }))
                }
                consumeAllExpired(e, t, i) {
                    return s(this, void 0, void 0, (function*() {}))
                }
                fetchPurchases() {
                    return s(this, void 0, void 0, (function*() {
                        return {
                            payload: {},
                            purchases: []
                        }
                    }))
                }
                purchase(e) {
                    return s(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.purchase(e)
                    }))
                }
                consume(e) {
                    return s(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                subscribe(e, t) {
                    return s(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.subscribe(e, t)
                    }))
                }
                unsubscribe(e, t) {
                    return s(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.unsubscribe(e, t)
                    }))
                }
            }
        },
        1271: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => p
            });
            var r = i(6558),
                n = i(8293),
                s = i(4943),
                o = i.n(s),
                a = i(9789),
                u = i(3379),
                d = i.n(u),
                c = i(1017);
            d()(c.Z, {
                insert: "head",
                singleton: !1
            }), c.Z.locals;
            var h = i(209),
                l = function(e, t, i, r) {
                    return new(i || (i = Promise))((function(n, s) {
                        function o(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                e(t)
                            }))).then(o, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                };
            class p {
                constructor(e, t) {
                    this.gp = e, this.config = t, this.app = function() {
                        const e = document.createElement("div");
                        e.id = "gs-crazy-games", document.body.appendChild(e);
                        const t = {
                            sticky: null
                        };
                        return window.addEventListener("resize", (() => (0, a.sO)(t))), {
                            banners: t,
                            createSticky(i) {
                                t.sticky || (t.sticky = function(t) {
                                    const i = o()({
                                            tablet: !0,
                                            featureDetect: !0
                                        }),
                                        r = document.createElement("div");
                                    r.className = `gp-crazy-games-sticky gp-crazy-games-sticky_${t.position||"bottom"}`;
                                    const n = document.createElement("div");
                                    n.id = "responsive-banner-container", n.className = "gp-crazy-games-sticky__creative";
                                    const s = {
                                            $wrapper: r,
                                            $el: n,
                                            options: t
                                        },
                                        u = (0, a.Go)(s, i);
                                    r.style.maxWidth = (0, a.px)(u), n.style.maxWidth = (0, a.px)(u), n.style.width = (0, a.px)(u);
                                    const d = (0, a.Bi)(s, i, 90);
                                    return r.style.maxHeight = (0, a.px)(d), n.style.maxHeight = (0, a.px)(d), n.style.height = (0, a.px)(d), r.appendChild(n), e.appendChild(r), s
                                }(i))
                            },
                            closeSticky() {
                                t.sticky && (t.sticky.$wrapper.remove(), t.sticky.$wrapper.innerHTML = "", t.sticky = null)
                            }
                        }
                    }(), this.gameUrl = "", this.isUserAccountAvailable = !1, this._isAuthorized = !1, this.isChatAvailable = !1, this.isMobileApp = !1, this.cachedToken = null, this.tokenFetchedAt = 0, this.readyAd = (0, n._)();
                    try {
                        const e = new URL(window.location.href).searchParams.get("_gpParams");
                        e && (this.shareParams = h.Z.parse(e))
                    } catch (e) {
                        r.kg.error(e)
                    }
                }
                requestGameUrl() {
                    return l(this, void 0, void 0, (function*() {
                        try {
                            this.gameUrl = yield this.crazysdk.game.inviteLink({})
                        } catch (e) {
                            r.kg.error(e)
                        }
                    }))
                }
                get appUrl() {
                    return this.gameUrl || this.requestGameUrl(), this.gameUrl
                }
                init(e) {
                    return l(this, void 0, void 0, (function*() {
                        const t = (0, n._)();
                        return this.ready = t.ready, yield e.then((() => l(this, void 0, void 0, (function*() {
                            const e = (0, n._)({
                                timeout: 1e4
                            });
                            this.crazysdk = window.CrazyGames.SDK, this.crazysdk.init().then((() => e.done(!0))).catch((() => e.done(!1))), (yield e.ready) || t.abort("CrazyGames SDK initialization failed");
                            const i = this.crazysdk.user.systemInfo;
                            this.isMobileApp = function(e) {
                                return "google_play_store" === (null == e ? void 0 : e.applicationType) || "apple_store" === (null == e ? void 0 : e.applicationType)
                            }(i);
                            const r = function(e) {
                                var t;
                                const i = null === (t = null == e ? void 0 : e.device) || void 0 === t ? void 0 : t.type;
                                return "desktop" !== i && ("mobile" === i || "tablet" === i || "google_play_store" === (null == e ? void 0 : e.applicationType) || "apple_store" === (null == e ? void 0 : e.applicationType) || null)
                            }(i);
                            null !== r && (this.gp.isMobile = r), this.isUserAccountAvailable = this.crazysdk.user.isUserAccountAvailable, this.isChatAvailable = !this.crazysdk.game.settings.disableChat, this.crazysdk.game.settings.muteAudio && this.gp.sounds.setPlatformMuted(!0), this.gp.on("gameplayStart", (() => this.crazysdk.game.gameplayStart())), this.gp.on("gameplayStop", (() => this.crazysdk.game.gameplayStop())), this.isUserAccountAvailable && (this.crazysdk.user.getUser().then((e => {
                                e && (this._isAuthorized = !0)
                            })), this.crazysdk.user.addAuthListener((() => l(this, void 0, void 0, (function*() {
                                const {
                                    player: e
                                } = this.gp;
                                e && (this.resetTokenCache(), this.gp.platform.saveFormat.isCloudSave && (yield e.sync({
                                    silent: !1,
                                    _internal: !0
                                }), e._events.emit("login", !0)))
                            }))))), this.crazysdk.game.addSettingsChangeListener((e => {
                                var t, i;
                                this.isChatAvailable = !(null !== (t = null == e ? void 0 : e.disableChat) && void 0 !== t && t), this.gp.sounds.setPlatformMuted(null !== (i = null == e ? void 0 : e.muteAudio) && void 0 !== i && i)
                            })), this.gp.ready.then((() => {
                                this.gp.achievements.on("unlock", (() => this.crazysdk.game.happytime()))
                            }))
                        })))).catch(r.kg.error), t.done(this), t.ready
                    }))
                }
                getPlayer() {
                    return l(this, void 0, void 0, (function*() {
                        yield this.ready;
                        try {
                            let e = null;
                            return this.isUserAccountAvailable && (e = yield this.crazysdk.user.getUser()), {
                                id: (null == e ? void 0 : e.id) || 0,
                                name: (null == e ? void 0 : e.username) || "",
                                photoLarge: (null == e ? void 0 : e.profilePictureUrl) || "",
                                photoMedium: (null == e ? void 0 : e.profilePictureUrl) || "",
                                photoSmall: (null == e ? void 0 : e.profilePictureUrl) || ""
                            }
                        } catch (e) {
                            return {
                                id: 0,
                                name: "",
                                photoLarge: "",
                                photoMedium: "",
                                photoSmall: ""
                            }
                        }
                    }))
                }
                loginPlayer() {
                    return l(this, void 0, void 0, (function*() {
                        yield this.ready;
                        let e = null;
                        try {
                            if (this.isUserAccountAvailable && (e = yield this.crazysdk.user.getUser()), !e) throw "not_logged_in"
                        } catch (t) {
                            try {
                                this.isUserAccountAvailable && (e = yield this.crazysdk.user.showAuthPrompt())
                            } catch (t) {
                                if ("userAlreadySignedIn" === (null == t ? void 0 : t.code) || "showAuthPromptInProgress" === (null == t ? void 0 : t.code)) try {
                                    this.isUserAccountAvailable && (e = yield this.crazysdk.user.getUser())
                                } catch (e) {
                                    r.kg.error("failed to get user", e)
                                } else r.kg.error("failed to show auth prompt", (null == t ? void 0 : t.message) || t)
                            }
                        }
                        return this._isAuthorized = !!(null == e ? void 0 : e.id), {
                            id: (null == e ? void 0 : e.id) || 0,
                            name: (null == e ? void 0 : e.username) || "",
                            photoLarge: (null == e ? void 0 : e.profilePictureUrl) || "",
                            photoMedium: (null == e ? void 0 : e.profilePictureUrl) || "",
                            photoSmall: (null == e ? void 0 : e.profilePictureUrl) || ""
                        }
                    }))
                }
                isTokenExpired() {
                    if (!this.cachedToken || !this.tokenFetchedAt) return !0;
                    if (Date.now() - this.tokenFetchedAt >= p.TOKEN_REVALIDATE_AFTER_MS) return !0;
                    try {
                        const e = JSON.parse(atob(this.cachedToken.token.split(".")[1]));
                        if (e.exp) return Date.now() >= 1e3 * e.exp - 6e4
                    } catch (e) {
                        return r.kg.error(e), !0
                    }
                    return !1
                }
                resetTokenCache() {
                    this.cachedToken = null, this.tokenFetchedAt = 0
                }
                getToken() {
                    return l(this, void 0, void 0, (function*() {
                        yield this.ready;
                        let e = "";
                        if (this.isUserAccountAvailable && (e = yield this.crazysdk.user.getUserToken()), "string" != typeof e || 3 !== e.split(".").length) throw "cg returned bad token";
                        const t = {
                            id: JSON.parse(atob(e.split(".")[1])).userId,
                            token: e
                        };
                        return this.cachedToken = t, this.tokenFetchedAt = Date.now(), t
                    }))
                }
                showBanner(e) {
                    this.readyAd.done(!1), this.readyAd = (0, n._)();
                    try {
                        this.crazysdk.ad.requestAd(e, {
                            adFinished: () => this.readyAd.done(!0),
                            adError: () => this.readyAd.done(!1)
                        })
                    } catch (e) {
                        this.readyAd.abort(e)
                    }
                    return this.readyAd.ready
                }
                showFullscreen() {
                    return this.showBanner("midgame")
                }
                showRewardedVideo() {
                    return this.showBanner("rewarded")
                }
                showPreloader() {
                    return this.showFullscreen()
                }
                purchase(e) {
                    return l(this, void 0, void 0, (function*() {
                        return this.nativeSdk.makePurchase(e)
                    }))
                }
                subscribe(e, t) {
                    return l(this, void 0, void 0, (function*() {
                        return this.nativeSdk.subscribe(e, t)
                    }))
                }
                resumeSubscription(e) {
                    return l(this, void 0, void 0, (function*() {
                        return this.nativeSdk.resumeSubscription(e)
                    }))
                }
                unsubscribe(e, t) {
                    return l(this, void 0, void 0, (function*() {
                        const i = (0, n._)();
                        try {
                            const r = yield this.nativeSdk.unsubscribe(e, t);
                            r && (r.purchase.subscribed ? i.abort("unsubscribe failed") : i.done({
                                subscription_id: r.purchase._id
                            }))
                        } catch (e) {
                            i.abort(e.message || e)
                        }
                        return i.ready
                    }))
                }
                addShareParamsToUrl(e, t) {
                    return h.Z.addShareParamsToUrl(e, {
                        _gpParams: h.Z.stringify(t)
                    })
                }
                makeShareUrl(e) {
                    return this.addShareParamsToUrl(this.gp.app.url, e)
                }
                getShareParam(e) {
                    return this.shareParams ? this.shareParams[e] : ""
                }
                getStorage() {
                    return l(this, void 0, void 0, (function*() {
                        return yield this.ready, this.crazysdk.data
                    }))
                }
                _setSDK(e) {
                    this.nativeSdk = e
                }
            }
            p.TOKEN_REVALIDATE_AFTER_MS = 24e5
        },
        7: (e, t, i) => {
            "use strict";
            i.d(t, {
                W9: () => r,
                rm: () => n,
                ie: () => s,
                D4: () => o,
                ZP: () => l
            });
            var r, n, s, o, a = i(8293),
                u = i(6558),
                d = i(6390),
                c = i(209),
                h = function(e, t, i, r) {
                    return new(i || (i = Promise))((function(n, s) {
                        function o(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                e(t)
                            }))).then(o, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                };
            ! function(e) {
                e.HANDLE_ADS = "HandleAds", e.REQUEST_TO_LOGIN = "RequestToLogin", e.REQUEST_TO_PURCHASE = "RequestToPurchase", e.REQUEST_TO_PROVIDE_ADS_CONFIG = "ProvideAdsConfig", e.REQUEST_FOR_EXTERNAL_DISPLAY = "RequestForExternalDisplay", e.REQUEST_TO_SHOW_FULLSCREEN = "RequestToShowFullscreen", e.REQUEST_TO_SHOW_PRELOADER = "RequestToShowPreloader", e.REQUEST_TO_SHOW_STICKY = "RequestToShowSticky", e.REQUEST_TO_CLOSE_STICKY = "RequestToCloseSticky", e.REQUEST_TO_REFRESH_STICKY = "RequestToRefreshSticky", e.REQUEST_TO_SHOW_REWARDED_VIDEO = "RequestToShowRewardedVideo", e.REQUEST_TO_CLOSE_REWARDED = "RequestToCloseRewarded"
            }(r || (r = {})),
            function(e) {
                e.GAME_READY = "GameReady"
            }(n || (n = {})),
            function(e) {
                e.EXTERNAL_ADS_SDK_READY = "ExternalAdsSdkReady", e.EXTERNAL_SDK_READY_RESPONSE = "ExternalSdkReadyResponse", e.FIRST_PROVIDE_DATA = "FirstProvideData", e.PROVIDE_PLAYER = "ProvidePlayer", e.PLAYER_LOGOUT = "PlayerLogout", e.PLAYER_LOGIN = "PlayerLogin", e.EXTERNAL_PLAYER_LOGIN = "ExternalPlayerLogin", e.EXTERNAL_PLAYER_PURCHASE = "ExternalPlayerPurchase", e.PROVIDE_ADS_CONFIG = "ProvideAdsConfig", e.SHOW_FULLSCREEN = "ShowFullscreen", e.SHOW_PRELOADER = "ShowPreloader", e.SHOW_STICKY = "ShowSticky", e.REFRESH_STICKY = "RefreshSticky", e.CLOSE_STICKY = "CloseSticky", e.SHOW_REWARDED = "ShowRewarded", e.PROVIDE_DISABLE_GAME_ADS = "ProvideDisabledGameAds", e.GAME_SHOW_AUTH_RESULT = "GameShowAuthResult"
            }(s || (s = {})),
            function(e) {
                e.AD_NOT_AVAILABLE = "AD is not available or does not exist", e.AD_ALREADY_SHOWN = "Ad is already shown", e.BANNER_NOT_EXIST = "Banner does not exist", e.REWARDED_SUCCESS = "Reward was given", e.REWARDED_FAILED = "Reward failed", e.SHOW_AD_SUCCESS = "Show AD success", e.AD_WAS_CLOSED = "Ad was closed", e.INTERNAL_ERROR = "Internal error"
            }(o || (o = {}));
            class l {
                constructor(e, t) {
                    this.gp = e, this.nativeSdk = t, this.userId = "", this.gameUrl = "";
                    try {
                        const e = new URL(window.location.href).searchParams.get("_gpParams");
                        e && (this.shareParams = c.Z.parse(e))
                    } catch (e) {
                        u.kg.error(e)
                    }
                }
                init() {
                    return h(this, void 0, void 0, (function*() {
                        const e = (0, a._)();
                        return this.ready = e.ready, e.done(this), e.ready
                    }))
                }
                get appUrl() {
                    return this.gameUrl ? this.gameUrl : (0, d.T)()
                }
                getPlayer() {
                    return h(this, void 0, void 0, (function*() {
                        return {
                            id: this.userId,
                            name: "",
                            photoSmall: "",
                            photoMedium: "",
                            photoLarge: ""
                        }
                    }))
                }
                loginPlayer() {
                    return h(this, void 0, void 0, (function*() {
                        return this.getPlayer()
                    }))
                }
                purchase(e, t) {
                    return h(this, void 0, void 0, (function*() {
                        return this.nativeSdk.makePurchase(e, t)
                    }))
                }
                subscribe(e, t, i) {
                    return h(this, void 0, void 0, (function*() {
                        return this.nativeSdk.subscribe(e, t, i)
                    }))
                }
                unsubscribe(e, t) {
                    return h(this, void 0, void 0, (function*() {
                        const i = (0, a._)();
                        try {
                            const r = yield this.nativeSdk.unsubscribe(e, t);
                            r && (r.purchase.subscribed ? i.abort("unsubscribe failed") : i.done({
                                subscription_id: r.purchase._id
                            }))
                        } catch (e) {
                            i.abort(e.message)
                        }
                        return i.ready
                    }))
                }
                addShareParamsToUrl(e, t) {
                    return c.Z.addShareParamsToUrl(e, {
                        _gpParams: c.Z.stringify(t)
                    })
                }
                makeShareUrl(e) {
                    return this.addShareParamsToUrl(this.gp.app.url, e)
                }
                getShareParam(e) {
                    return this.shareParams ? this.shareParams[e] : ""
                }
            }
        },
        4024: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => n
            });
            var r = function(e, t, i, r) {
                return new(i || (i = Promise))((function(n, s) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                            e(t)
                        }))).then(o, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            };
            class n {
                constructor(e) {
                    this.gp = e
                }
                makePurchase(e) {
                    return r(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                subscribe(e, t) {
                    return r(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                unsubscribe(e, t) {
                    return r(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                resumeSubscription(e, t) {
                    return r(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                getPurchases() {
                    return r(this, void 0, void 0, (function*() {
                        return []
                    }))
                }
                consume(e) {
                    return r(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                getProducts(e) {
                    return r(this, void 0, void 0, (function*() {
                        return e
                    }))
                }
            }
        },
        940: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => s
            });
            var r = i(8293),
                n = function(e, t, i, r) {
                    return new(i || (i = Promise))((function(n, s) {
                        function o(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                                e(t)
                            }))).then(o, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    }))
                };
            class s {
                constructor(e, t = !1) {
                    this.gp = e, this.isAndroid = t
                }
                makePurchase(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        if (!this.gp.player.isLoggedIn && !this.isAndroid) throw new Error("purchase failed");
                        const i = (0, r._)();
                        try {
                            yield this.gp.loadOverlay(), yield this.gp.overlay.openProductPurchase(e, t), i.done({})
                        } catch (e) {
                            i.abort(e)
                        }
                        return i.ready
                    }))
                }
                subscribe(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        if (!this.gp.player.isLoggedIn) throw new Error("subscribe failed");
                        return 0 == (null == t ? void 0 : t.subscribed) && Date.parse(null == t ? void 0 : t.expiredAt) > Date.parse(this.gp.serverTime) ? this.resumeSubscription(t) : this.makePurchase(e)
                    }))
                }
                unsubscribe(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.gp._services.paymentsService.cancelSubscription({
                            id: t.productId,
                            payload: t.payload
                        })
                    }))
                }
                resumeSubscription(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.gp._services.paymentsService.resumeSubscription({
                            id: e.productId,
                            payload: e.payload
                        })
                    }))
                }
                getPurchases() {
                    return n(this, void 0, void 0, (function*() {
                        return []
                    }))
                }
                consume(e) {
                    return n(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                getProducts(e) {
                    return n(this, void 0, void 0, (function*() {
                        return e
                    }))
                }
            }
        },
        9789: (e, t, i) => {
            "use strict";
            i.d(t, {
                px: () => n,
                bH: () => o,
                sO: () => a,
                pm: () => u,
                Go: () => d,
                Bi: () => c
            });
            var r = i(1642);

            function n(e) {
                return `${e}px`
            }
            const s = {
                PX: "px",
                PERCENT: "%"
            };

            function o(e) {
                return s[e]
            }

            function a(e) {
                u(e.sticky)
            }

            function u(e) {
                e && (e.$el.style.width = `${function(e){let t=window.innerWidth;if("PX"===e.options.maxWidthDimension&&e.options.maxWidth>0&&window.innerWidth>e.options.maxWidth)t=e.options.maxWidth;else if("PERCENT"===e.options.maxWidthDimension&&e.options.maxWidth>0){const i=e.options.maxWidth/100*window.innerWidth;window.innerWidth>e.options.maxWidth&&(t=i)}const i=e.options.fitCanvas&&h()||t;return Math.round(i)}(e)}px`)
            }

            function d(e, t) {
                const i = t ? {
                        value: e.options.maxWidth,
                        dimension: e.options.maxWidthDimension
                    } : e.options.desktopMaxWidth && e.options.desktopMaxWidthDimension ? {
                        value: e.options.desktopMaxWidth,
                        dimension: e.options.desktopMaxWidthDimension
                    } : {
                        value: e.options.maxWidth,
                        dimension: e.options.maxWidthDimension
                    },
                    r = "PERCENT" === i.dimension ? .01 * i.value * window.innerWidth : i.value;
                return Math.min(Math.round(e.options.fitCanvas && h() || r), window.innerWidth) || window.innerWidth
            }

            function c(e, t, i) {
                const r = t ? {
                        value: e.options.maxHeight,
                        dimension: e.options.maxHeightDimension
                    } : e.options.desktopMaxHeight && e.options.desktopMaxHeightDimension ? {
                        value: e.options.desktopMaxHeight,
                        dimension: e.options.desktopMaxHeightDimension
                    } : {
                        value: e.options.maxHeight,
                        dimension: e.options.maxHeightDimension
                    },
                    n = "PERCENT" === r.dimension ? .01 * r.value * window.innerHeight : r.value;
                return Math.min(Math.round(n), window.innerHeight) || i
            }

            function h() {
                var e;
                return window.innerWidth >= 640 && (null === (e = (0, r.Z)()) || void 0 === e ? void 0 : e.offsetWidth) || 0
            }
        },
        1642: (e, t, i) => {
            "use strict";

            function r() {
                return document.querySelector("canvas")
            }
            i.d(t, {
                Z: () => r
            })
        }
    }
]);