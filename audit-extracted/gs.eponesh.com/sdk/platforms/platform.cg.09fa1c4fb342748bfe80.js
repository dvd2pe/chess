(self.webpackChunkgame_score_sdk = self.webpackChunkgame_score_sdk || []).push([
    [5433], {
        4340: (t, e, r) => {
            "use strict";
            r.d(e, {
                D: () => i
            });
            const i = () => Promise.resolve({
                success: !1,
                rating: 0,
                error: ""
            })
        },
        5572: (t, e, r) => {
            "use strict";
            r.d(e, {
                VK: () => n,
                yl: () => s,
                ZP: () => o
            });
            var i = function(t, e, r, i) {
                return new(r || (r = Promise))((function(n, s) {
                    function o(t) {
                        try {
                            u(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            u(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, a)
                    }
                    u((i = i.apply(t, e || [])).next())
                }))
            };
            const n = {
                    success: !0,
                    payload: {}
                },
                s = {
                    success: !1,
                    payload: {}
                };
            class o {
                getSDK() {}
                getNativeSDK() {}
                _onPlatformPauseChange(t) {}
                mapGamesCollections(t) {
                    return i(this, void 0, void 0, (function*() {
                        return t
                    }))
                }
                getPlayerRewards(t) {
                    return i(this, void 0, void 0, (function*() {
                        return []
                    }))
                }
                requestPermissions(t) {
                    return i(this, void 0, void 0, (function*() {
                        return n
                    }))
                }
                uploadImage(t) {
                    return null
                }
                getVariables(t) {
                    return i(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                consumePlayerReward(t) {
                    return i(this, void 0, void 0, (function*() {}))
                }
            }
        },
        2712: (t, e, r) => {
            "use strict";
            r.d(e, {
                aD: () => l,
                FU: () => f,
                hc: () => v
            });
            const i = (t, e) => ({
                    type: t,
                    getLink: e
                }),
                n = i("facebook", (t => `//www.facebook.com/sharer/sharer.php?u=${t.url}`)),
                s = i("whatsapp", (t => `//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),
                o = i("telegram", (t => `//t.me/share/url?url=${t.url}&text=${t.text}`)),
                a = i("vkontakte", (t => `//vk.ru/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),
                u = i("twitter", (t => `//twitter.com/share?text=${t.text}&url=${t.url}`)),
                c = i("odnoklassniki", (t => `//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),
                h = i("viber", (t => `viber://forward?text=${t.text}%20${t.url}`)),
                d = i("moymir", (t => `//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),
                l = [s, o, a, c, d],
                f = [n, u, o, s, h],
                v = [n, u, o, s, h, a, c, d]
        },
        6390: (t, e, r) => {
            "use strict";

            function i() {
                try {
                    return window.top.location.href || location.href
                } catch (t) {
                    return location.href
                }
            }
            r.d(e, {
                T: () => i
            })
        },
        209: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => n
            });
            var i = r(6558);
            const n = {
                stringify: t => btoa(encodeURIComponent(JSON.stringify(t))),
                parse(t) {
                    if (!t) return {};
                    const e = function(t) {
                        try {
                            return JSON.parse(decodeURIComponent(atob(t) || "{}"))
                        } catch (t) {
                            return ""
                        }
                    }(t);
                    return Object.keys(e).length > 0 ? e : JSON.parse(function(t) {
                        try {
                            return JSON.parse(atob(t) || "{}")
                        } catch (t) {
                            return ""
                        }
                    }(t) || "{}")
                },
                addShareParamsToUrl(t, e) {
                    try {
                        const r = new URL(t);
                        return Object.entries(e).forEach((([t, e]) => {
                            r.searchParams.set(t, e)
                        })), r.href
                    } catch (e) {
                        i.kg.error("Invalid URL", t, e)
                    }
                    return t
                }
            }
        },
        70: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => U
            });
            var i = r(8293),
                n = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, s) {
                        function o(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(o, a)
                        }
                        u((i = i.apply(t, e || [])).next())
                    }))
                };
            class s {
                constructor(t) {
                    this.sdk = t, this.isStickyAvailable = !0, this.stickyBannerConfig = {
                        isOverlapping: !1,
                        height: 0
                    }, this.isFullscreenAvailable = !0, this.isRewardedAvailable = !0, this.isPreloaderAvailable = !0, this.canShowFullscreenBeforeGamePlay = !0, this.needToLeaveFullscreenBeforeAds = !1
                }
                showPreloader() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.showPreloader().catch((() => !1))
                    }))
                }
                showFullscreen() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.showFullscreen().catch((() => !1))
                    }))
                }
                showRewardedVideo() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.sdk.ready, this.sdk.showRewardedVideo().catch((() => !1))
                    }))
                }
                showSticky(t) {
                    return n(this, void 0, void 0, (function*() {
                        const e = (0, i._)();
                        return this.sdk.app.banners.sticky ? (e.done(!0), e.ready) : (this.sdk.app.createSticky(t), yield this.sdk.crazysdk.banner.requestResponsiveBanner("responsive-banner-container"), e.done(!0), e.ready)
                    }))
                }
                refreshSticky(t) {
                    return n(this, void 0, void 0, (function*() {
                        if (!this.sdk.app.banners.sticky) return this.showSticky(t);
                        const e = (0, i._)();
                        return yield this.sdk.crazysdk.banner.requestResponsiveBanner("responsive-banner-container"), e.done(!0), e.ready
                    }))
                }
                closeSticky() {
                    return n(this, void 0, void 0, (function*() {
                        yield this.sdk.ready, this.sdk.app.closeSticky()
                    }))
                }
            }
            var o = r(180),
                a = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, s) {
                        function o(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(o, a)
                        }
                        u((i = i.apply(t, e || [])).next())
                    }))
                };
            class u {
                constructor(t, e) {
                    this.sdk = t, this.gp = e, this.hasCredetials = !1, this.userId = "", this.authFinished = Promise.resolve()
                }
                get isAuthorizedAtPlatform() {
                    return this.sdk._isAuthorized
                }
                get isTokenUsed() {
                    var t;
                    return this.gp.platform.saveFormat.isCloudSave || (null === (t = this.gp.platform.config.paymentsConfig.configs.web) || void 0 === t ? void 0 : t.activeService) === o.L_.Xsolla
                }
                get isNeedToRevalidateToken() {
                    return this.isTokenUsed && this.sdk.isTokenExpired()
                }
                getPlayerAuthInfo() {
                    return a(this, void 0, void 0, (function*() {
                        if (!this.isTokenUsed) return this.hasCredetials = this.isAuthorizedAtPlatform, {
                            id: this.userId,
                            token: null
                        };
                        const {
                            id: t,
                            token: e
                        } = yield this.sdk.getToken();
                        return this.userId = t, this.hasCredetials = Boolean(this.userId), {
                            id: this.userId,
                            token: e
                        }
                    }))
                }
                getPlayerContext() {
                    return a(this, void 0, void 0, (function*() {
                        const {
                            id: t,
                            token: e
                        } = yield this.getPlayerAuthInfo();
                        return {
                            platformData: {
                                token: e
                            },
                            key: t
                        }
                    }))
                }
                loginPlayer() {
                    return a(this, void 0, void 0, (function*() {
                        return this.sdk.loginPlayer()
                    }))
                }
                logoutPlayer() {
                    return a(this, void 0, void 0, (function*() {
                        return !1
                    }))
                }
                getPlayer() {
                    return a(this, void 0, void 0, (function*() {
                        return this.sdk.getPlayer()
                    }))
                }
                publishRecord(t) {}
                isPlatformAvatar(t) {
                    return t.includes("https://images.crazygames.com")
                }
                setCredentials(t) {}
            }
            var c = r(2712),
                h = r(5942),
                d = r(5572),
                l = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, s) {
                        function o(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(o, a)
                        }
                        u((i = i.apply(t, e || [])).next())
                    }))
                };
            class f {
                constructor(t, e) {
                    this.sdk = t, this.config = e, this.hasIntegratedAuth = !1, this.isExternalLinksAllowed = !0, this.isSecretCodeAuthAvailable = !1, this._hasAuthModal = !0, this.isLogoutAvailable = !1, this.type = h.z.CRAZY_GAMES, this.socialNetworks = c.FU, this.isSupportsImageUploading = !1, this.hasAccountLinkingFeature = !0, this.isSupportsRemoteVariables = !1, this.isSupportsCloudSaves = !0, this.isBackendAllowed = !0, this.isPlatformPausePriority = !1;
                    const r = this.config.paymentsConfig.configs.web;
                    this.hasIntegratedAuth = this.sdk.isUserAccountAvailable, this.paymentService = null == r ? void 0 : r.activeService
                }
                getSDK() {
                    return this.sdk
                }
                getNativeSDK() {
                    return this.sdk.crazysdk
                }
                _onPlatformPauseChange(t) {}
                get isChatAvailable() {
                    return this.sdk.isChatAvailable
                }
                mapGamesCollections(t) {
                    return l(this, void 0, void 0, (function*() {
                        return t
                    }))
                }
                requestPermissions() {
                    return l(this, void 0, void 0, (function*() {
                        return d.VK
                    }))
                }
                uploadImage() {
                    return null
                }
                getVariables() {
                    return l(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                consumePlayerReward(t) {
                    return l(this, void 0, void 0, (function*() {}))
                }
                getPlayerRewards(t) {
                    return l(this, void 0, void 0, (function*() {
                        return []
                    }))
                }
            }
            class v {
                constructor(t) {
                    this.sdk = t, this.isSupportsShare = !0, this.isSupportsNativeShare = !1, this.isSupportsNativePosts = !1, this.isSupportsNativeInvite = !1, this.isSupportsNativeCommunityJoin = !1, this.canJoinCommunity = !0, this.isSupportShareParams = !0
                }
                get shareParams() {
                    return this.sdk.shareParams
                }
                share(t) {
                    return Promise.resolve(!1)
                }
                post(t) {
                    return Promise.resolve(!1)
                }
                invite(t) {
                    return Promise.resolve(!1)
                }
                getCommunityLink(t) {
                    return t
                }
                joinCommunity() {
                    return Promise.resolve(!1)
                }
                addShareParamsToUrl(t, e) {
                    return this.sdk.addShareParamsToUrl(t, e)
                }
                makeShareUrl(t) {
                    return this.sdk.makeShareUrl(t)
                }
                getShareParam(t) {
                    return this.sdk.getShareParam(t)
                }
            }
            var p = r(1271),
                y = r(4340);
            class m {
                constructor(t) {
                    this.sdk = t, this.canAddShortcut = !1, this.canRequestReview = !1, this.isAlreadyReviewed = !1
                }
                addShortcut() {
                    return t = this, e = void 0, i = function*() {
                        return !1
                    }, new((r = void 0) || (r = Promise))((function(n, s) {
                        function o(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(o, a)
                        }
                        u((i = i.apply(t, e || [])).next())
                    }));
                    var t, e, r, i
                }
                requestReview() {
                    return (0, y.D)()
                }
                requestGameUrl() {
                    return this.sdk.requestGameUrl()
                }
            }
            var g, w = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, s) {
                        function o(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(o, a)
                        }
                        u((i = i.apply(t, e || [])).next())
                    }))
                },
                k = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            class S {
                constructor(t) {
                    this.sdk = t, g.set(this, void 0), this.isLocal = null
                }
                ready() {
                    return w(this, void 0, void 0, (function*() {
                        k(this, g, "f") || (yield this.sdk.ready,
                            function(t, e, r, i, n) {
                                if ("m" === i) throw new TypeError("Private method is not writable");
                                if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                                if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                                "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r)
                            }(this, g, yield this.sdk.getStorage(), "f"))
                    }))
                }
                set(t, e) {
                    return w(this, void 0, void 0, (function*() {
                        yield this.ready(), k(this, g, "f").setItem(t, JSON.stringify(e))
                    }))
                }
                get(t) {
                    return w(this, void 0, void 0, (function*() {
                        yield this.ready();
                        try {
                            return JSON.parse(k(this, g, "f").getItem(t) || "null")
                        } catch (t) {}
                    }))
                }
                remove(t) {
                    return w(this, void 0, void 0, (function*() {
                        yield this.ready();
                        try {
                            return k(this, g, "f").removeItem(t)
                        } catch (t) {}
                    }))
                }
            }
            g = new WeakMap;
            var P = r(2665),
                b = r(2231),
                A = r(3357),
                C = r(5526),
                x = r(4024),
                I = r(940),
                R = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, s) {
                        function o(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(o, a)
                        }
                        u((i = i.apply(t, e || [])).next())
                    }))
                };
            class _ {
                constructor(t) {
                    this.sdk = t, this.isSupportsSubscriptions = !1, this.isOneTimeSubscription = !0, this.isSupportsPayments = !1, this.isServerValidation = !1, this.isNeedAuthorizeBeforePurchase = !1
                }
                mapProducts(t, e) {
                    return R(this, void 0, void 0, (function*() {
                        return e
                    }))
                }
                consumeAllExpired(t, e, r) {
                    return R(this, void 0, void 0, (function*() {}))
                }
                fetchPurchases() {
                    return R(this, void 0, void 0, (function*() {
                        return {
                            payload: {},
                            purchases: []
                        }
                    }))
                }
                purchase(t) {
                    return R(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                consume(t) {
                    return R(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                subscribe(t, e) {
                    return R(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
                unsubscribe(t, e) {
                    return R(this, void 0, void 0, (function*() {
                        return {}
                    }))
                }
            }

            function U(t) {
                var e, r, i, n, a, c;
                return i = this, n = void 0, c = function*() {
                    const i = new p.Z(t.gp, {}),
                        [, , n] = yield Promise.all([i.init(t.scriptPreloadPromise), t.setupStorage([]), t.fetchConfig()]), {
                            progressSaveFormat: a
                        } = n.platformConfig, {
                            isLocalSave: c,
                            isPlatformSave: h,
                            isCloudSave: d
                        } = (0, A.q)(a), l = `gs-db-project-${t.gp.projectId}`;
                    let y;
                    switch (null === (e = n.platformConfig.paymentsConfig.configs.web) || void 0 === e ? void 0 : e.activeService) {
                        case o.L_.Xsolla:
                            switch (null === (r = n.platformConfig.payload) || void 0 === r ? void 0 : r.purchaseMethod) {
                                case o.qr.Webhook:
                                    y = new I.Z(t.gp);
                                    break;
                                default:
                                    y = new x.Z(t.gp)
                            }
                            break;
                        default:
                            y = new x.Z(t.gp)
                    }
                    if (i._setSDK(y), d && t.gp._storage.replaceStorages([new b.Z(l)]), c) {
                        if (null !== window.localStorage) {
                            const e = new P.Z(t.gp.projectId);
                            e.isLocal = !1, t.gp._storage.replaceStorages([e, new b.Z(l)])
                        }
                        n.platformConfig.progressSaveFormat = o.pQ.Platform, t.gp._storage.setSaveInPlatformStorage(!0)
                    }
                    h && t.gp._storage.replaceStorages([new S(i)]);
                    const g = new u(i, t.gp),
                        w = new s(i),
                        k = new m(i),
                        R = new f(i, n.platformConfig),
                        U = new v(i);
                    let $;
                    switch (R.paymentService) {
                        case o.L_.Xsolla:
                            $ = new C.Z(t.gp, i);
                            break;
                        default:
                            $ = new _(i)
                    }
                    return {
                        appAdapter: k,
                        adsAdapter: w,
                        playerAdapter: g,
                        platformAdapter: R,
                        socialsAdapter: U,
                        paymentsAdapter: $,
                        projectConfig: n
                    }
                }, new((a = void 0) || (a = Promise))((function(t, e) {
                    function r(t) {
                        try {
                            o(c.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function s(t) {
                        try {
                            o(c.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function o(e) {
                        var i;
                        e.done ? t(e.value) : (i = e.value, i instanceof a ? i : new a((function(t) {
                            t(i)
                        }))).then(r, s)
                    }
                    o((c = c.apply(i, n || [])).next())
                }))
            }
        }
    }
]);