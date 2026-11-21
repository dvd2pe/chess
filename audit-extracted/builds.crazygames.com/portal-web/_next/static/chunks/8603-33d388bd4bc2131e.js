! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                if (null != a)
                    for (var i in a) a.hasOwnProperty(i) && (e[i] = a[i])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b1a5c100-ef2f-45d7-a27a-b141ff2f317f", e._sentryDebugIdIdentifier = "sentry-dbid-b1a5c100-ef2f-45d7-a27a-b141ff2f317f")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8603], {
        298: (e, t, a) => {
            a.d(t, {
                d9: () => p,
                lT: () => d,
                ny: () => u,
                readCatalogCoverBaseUrl: () => f,
                syncCatalogCovers: () => y
            });
            var i = a(74339),
                r = a(16614),
                o = a(85707),
                n = a(81930),
                s = a(81465),
                l = a(78956);
            let d = Math.ceil(400 / 3);

            function c(e, t) {
                if (!e) return;
                let a = Math.min(window.devicePixelRatio || 1, 2);
                return (0, n.Ay)(e, {
                    quality: n.qw[Math.round(a)],
                    width: t,
                    format: "png",
                    dpr: a
                }) || void 0
            }
            async function m(e, t, a) {
                let i = c(e, a);
                i && await r.FileTransfer.downloadFile({
                    url: i,
                    path: t
                })
            }

            function u(e) {
                return [{
                    url: c(e.covers["1x1"], d),
                    path: `${(0,l.PL)(e.gameSlug)}/${l.gh}`
                }, {
                    url: c(e.covers["16x9"], 196),
                    path: `${(0,l.PL)(e.gameSlug)}/${l.l4}`
                }].filter(e => !!e.url)
            }
            async function p(e) {
                let {
                    uri: t
                } = await o.Filesystem.getUri({
                    path: (0, l.PL)(e.gameSlug),
                    directory: o.Directory.Data
                });
                await m(e.covers["1x1"], `${t}/${l.gh}`, d), await m(e.covers["16x9"], `${t}/${l.l4}`, 196)
            }
            async function y(e) {
                let t = await (0, s.f)(l.x2, o.Directory.Data),
                    a = new Set(t.map(e => (0, l.Nh)(e.name))),
                    i = new Set(e.map(e => e.gameSlug));
                await o.Filesystem.mkdir({
                    path: l.x2,
                    directory: o.Directory.Data,
                    recursive: !0
                }).catch(() => void 0);
                let {
                    uri: r
                } = await o.Filesystem.getUri({
                    path: l.x2,
                    directory: o.Directory.Data
                });
                for (let t of e)
                    if (!a.has(t.gameSlug)) try {
                        await m(t.covers ? .["1x1"], `${r}/${(0,l.b9)(t.gameSlug)}`, d)
                    } catch (e) {
                        console.warn(`[OfflineCovers] caching the catalog cover of "${t.gameSlug}" failed:`, e)
                    }
                for (let e of t) i.has((0, l.Nh)(e.name)) || await o.Filesystem.deleteFile({
                    path: `${l.x2}/${e.name}`,
                    directory: o.Directory.Data
                }).catch(t => console.warn(`[OfflineCovers] dropping the stale catalog cover "${e.name}" failed:`, t))
            }
            async function f() {
                let {
                    uri: e
                } = await o.Filesystem.getUri({
                    path: l.x2,
                    directory: o.Directory.Data
                });
                return i.Capacitor.convertFileSrc(e)
            }
        },
        8603: (e, t, a) => {
            let i;
            a.r(t), a.d(t, {
                GAME_FILES_DIR: () => h.dp,
                SDK_VERSIONS: () => C,
                applyOfflineBase: () => A,
                deleteAllOfflineGames: () => V,
                deleteGame: () => W,
                deleteSupersededBuilds: () => Q,
                discardFailedDownload: () => Z,
                downloadGame: () => J,
                finalizeGameDownload: () => K,
                getOfflineLauncherUrl: () => v,
                invalidateDownloadedGamesCache: () => ei,
                isUnityLoader: () => L,
                localPathFor: () => h.yX,
                peekDownloadedGames: () => er,
                prepareGameDownload: () => X,
                readDownloadedGames: () => eo,
                refreshSharedFiles: () => M,
                sweepPartialDownloads: () => ee
            });
            var r = a(20754),
                o = a(74339),
                n = a(16614),
                s = a(85707),
                l = a(64844),
                d = a(54731),
                c = a(13246),
                m = a(61411),
                u = a(57897),
                p = a(69542),
                y = a(298),
                f = a(81465),
                h = a(78956);
            let w = "offline-gameframe-launcher.html",
                g = `${h.Ut}/${w}`;
            async function D() {
                try {
                    let e = await fetch(`${window.location.origin}/${w}`);
                    if (!e.ok) throw Error(`Failed to fetch offline launcher: ${e.status} ${e.statusText}`);
                    let t = await e.text();
                    await s.Filesystem.writeFile({
                        path: g,
                        data: (0, u.Ii)(t),
                        directory: s.Directory.Data,
                        recursive: !0
                    })
                } catch (e) {
                    if (await (0, f.s)(g, s.Directory.Data)) return;
                    throw e
                }
            }
            async function v(e) {
                await D();
                let {
                    uri: t
                } = await s.Filesystem.getUri({
                    path: g,
                    directory: s.Directory.Data
                }), a = new URL(o.Capacitor.convertFileSrc(t));
                return a.hostname = `${e}.${a.hostname}`, a.toString()
            }
            var F = a(15992);
            let $ = {
                "5.4": "unity/unity54",
                "5.6": "unity/unity56",
                2020: "unity/unity2020"
            };

            function L(e) {
                return !!e && e in F.yl && "unity" === F.yl[e].type
            }

            function b(e) {
                if (!e) return null;
                let t = F.yl[e];
                return "unity" !== t.type ? null : $[t.unityLoaderType]
            }
            let S = "__OFFLINE_BASE__";
            async function U(e, t, a) {
                let i = await fetch(e);
                if (!i.ok) throw Error(`Failed to fetch ${e}: ${i.status} ${i.statusText}`);
                let r = await i.arrayBuffer();
                await s.Filesystem.writeFile({
                    path: `${a}/${t}`,
                    data: (0, u.nk)(new Uint8Array(r)),
                    directory: s.Directory.Data,
                    recursive: !0
                })
            }
            async function k(e, t, a) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : U,
                    r = async e => {
                        if ("string" == typeof e) {
                            let r = function(e, t) {
                                let a;
                                try {
                                    a = new URL(e).pathname
                                } catch {
                                    return null
                                }
                                let i = a.split("/").filter(Boolean),
                                    r = i.indexOf(t);
                                return -1 === r || i.length < r + 3 ? null : i.slice(r + 2).join("/")
                            }(e, t);
                            if (r) return `${S}/${r}`;
                            if (/^https?:\/\//i.test(e)) {
                                let t = new URL(e).pathname.split("/").pop() || "asset",
                                    r = `offline-shared/${t}`;
                                return await i(e, r, a), `${S}/${r}`
                            }
                            return e
                        }
                        return Array.isArray(e) ? Promise.all(e.map(r)) : e && "object" == typeof e ? Object.fromEntries(await Promise.all(Object.entries(e).map(async e => {
                            let [t, a] = e;
                            return [t, await r(a)]
                        }))) : e
                    };
                return r(e)
            }

            function A(e, t) {
                let a = e => "string" == typeof e ? e.split(S).join(t) : Array.isArray(e) ? e.map(a) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(e => {
                    let [t, i] = e;
                    return [t, a(i)]
                })) : e;
                return a(e)
            }

            function I(e, t) {
                return `https://${e}.${c.A.Instance.data.gameFiles}/${t}/${e}.html`
            }

            function R(e, t) {
                if (!e.trim()) throw Error(`Unity loader page fetch returned an empty body (${t})`)
            }
            async function O(e, t, a) {
                let i = I(e, t),
                    r = await o.CapacitorHttp.get({
                        url: i,
                        responseType: "text"
                    }),
                    n = String(r.data ? ? "");
                if (r.status < 200 || r.status >= 300) throw Error(`Unity loader page fetch failed: ${r.status}`);
                R(n, i), await s.Filesystem.writeFile({
                    path: `${a}/index.html`,
                    data: (0, u.Ii)(n),
                    directory: s.Directory.Data
                })
            }
            let C = [{
                    filename: "crazygames-sdk-v1.js",
                    url: "https://sdk.crazygames.com/crazygames-sdk-v1.js",
                    path: `${h.Ut}/crazygames-sdk-v1.js`
                }, {
                    filename: "crazygames-sdk-v2.js",
                    url: "https://sdk.crazygames.com/crazygames-sdk-v2.js",
                    path: `${h.Ut}/crazygames-sdk-v2.js`
                }, {
                    filename: "crazygames-sdk-v3.js",
                    url: "https://sdk.crazygames.com/crazygames-sdk-v3.js",
                    path: `${h.Ut}/crazygames-sdk-v3.js`
                }, {
                    filename: "Construct3CrazySDK-v3.js",
                    url: "https://sdk.crazygames.com/Construct3CrazySDK-v3.js",
                    path: `${h.Ut}/Construct3CrazySDK-v3.js`
                }],
                z = [{
                    filename: "nunito-latin.woff2",
                    url: "https://fonts.gstatic.com/s/nunito/v32/XRXV3I6Li01BKofINeaBTMnFcQ.woff2"
                }, {
                    filename: "nunito-latin-ext.woff2",
                    url: "https://fonts.gstatic.com/s/nunito/v32/XRXV3I6Li01BKofIO-aBTMnFcQIG.woff2"
                }, {
                    filename: "nunito-cyrillic.woff2",
                    url: "https://fonts.gstatic.com/s/nunito/v32/XRXV3I6Li01BKofIMeaBTMnFcQIG.woff2"
                }, {
                    filename: "nunito-cyrillic-ext.woff2",
                    url: "https://fonts.gstatic.com/s/nunito/v32/XRXV3I6Li01BKofIOOaBTMnFcQIG.woff2"
                }, {
                    filename: "nunito-vietnamese.woff2",
                    url: "https://fonts.gstatic.com/s/nunito/v32/XRXV3I6Li01BKofIOuaBTMnFcQIG.woff2"
                }].map(e => ({ ...e,
                    path: `${h.Ut}/${e.filename}`
                })),
                N = "offline-game-info.json",
                j = `${h.Ut}/sdk-last-modified.json`;
            async function x() {
                if (!await (0, f.s)(j, s.Directory.Data)) return {};
                try {
                    let {
                        data: e
                    } = await s.Filesystem.readFile({
                        path: j,
                        directory: s.Directory.Data
                    });
                    return JSON.parse((0, u.YU)(e))
                } catch {
                    return {}
                }
            }
            async function B(e) {
                await s.Filesystem.writeFile({
                    path: j,
                    data: (0, u.Ii)(JSON.stringify(e)),
                    directory: s.Directory.Data
                })
            }
            async function P(e) {
                let t = await fetch(e.url, {
                    cache: "no-cache"
                });
                if (!t.ok) throw Error(`Fetch failed: ${t.status} ${t.statusText}`);
                let a = await t.arrayBuffer(),
                    i = `${e.path}.tmp`;
                return await s.Filesystem.writeFile({
                    path: i,
                    data: (0, u.nk)(new Uint8Array(a)),
                    directory: s.Directory.Data
                }), await s.Filesystem.rename({
                    from: i,
                    to: e.path,
                    directory: s.Directory.Data
                }), t.headers.get("last-modified")
            }
            async function _(e, t) {
                let a = await fetch(e.url, {
                    method: "HEAD",
                    cache: "no-store"
                });
                if (!a.ok) throw Error(`HEAD failed: ${a.status} ${a.statusText}`);
                let i = a.headers.get("last-modified");
                return !!i && i === t
            }
            async function T(e) {
                let t, a = new Set((await (0, f.f)(h.Ut, s.Directory.Data)).map(e => e.name)),
                    i = await x(),
                    r = [...C, ...z].filter(e => !a.has(e.filename)),
                    o = [...r, ...(await Promise.all(C.filter(e => a.has(e.filename)).map(async e => {
                        try {
                            return await _(e, i[e.filename]) ? null : e
                        } catch (t) {
                            return console.warn(`[OfflineGameStore] checking ${e.filename} failed:`, t), null
                        }
                    }))).filter(e => null !== e)];
                if (0 === o.length) return;
                e ? .("Downloading SDKs…", "sdks"), await (0, f.s)(h.Ut, s.Directory.Data) || await s.Filesystem.mkdir({
                    path: h.Ut,
                    directory: s.Directory.Data,
                    recursive: !0
                });
                let n = await Promise.allSettled(o.map(async e => {
                    let t = await P(e);
                    C.includes(e) && (t ? i[e.filename] = t : delete i[e.filename])
                }));
                if (await B(i), n.forEach((e, a) => {
                        if ("fulfilled" === e.status) return;
                        let i = o[a];
                        C.includes(i) && r.includes(i) ? t ? ? = e.reason : console.warn(`[OfflineGameStore] downloading ${i.filename} failed:`, e.reason)
                    }), t) throw t
            }
            let E = null;

            function H(e) {
                return E ? ? = T(e).finally(() => {
                    E = null
                })
            }
            async function M() {
                0 !== (await eo()).length && await H()
            }
            async function G(e) {
                let t;
                await s.Filesystem.writeFile({
                    path: `${e}/offlinegame-sw.js`,
                    data: (0, u.Ii)((t = JSON.stringify(Object.fromEntries(C.map(e => [e.url, e.filename]))), `self.addEventListener('install',function(){self.skipWaiting();});self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});var SDK_MAP=${t};self.addEventListener('fetch',function(e){var f=SDK_MAP[e.request.url];if(f){e.respondWith(fetch(new URL('../../../shared/'+f,self.location.href).href).then(function(r){return new Response(r.body,{status:r.status,headers:new Headers({'Content-Type':'application/javascript'})});}));}});`)),
                    directory: s.Directory.Data
                })
            }
            async function X(e) {
                await D();
                let t = `${c.A.Instance.data.api}/${d.m}/${m.Jh}/games/${e.gameSlug}/gameframe?buildId=${e.buildId}`,
                    a = await fetch(t);
                if (!a.ok) throw Error(`Gameframe config fetch failed: ${a.status} ${a.statusText}`);
                let i = await a.json(),
                    r = (0, y.ny)(e).map(e => ({ ...e,
                        stage: "covers"
                    }));
                for (let e of [...C, ...z]) await (0, f.s)(e.path, s.Directory.Data) || r.push({
                    url: e.url,
                    path: e.path,
                    optional: z.includes(e),
                    stage: "sdks"
                });
                let o = (0, h.yX)(e),
                    n = b(i.loader);
                return n && (r.push({
                    url: I(e.gameSlug, n),
                    path: `${o}/index.html`,
                    stage: "unity_page"
                }), i.loaderOptions = await k(i.loaderOptions, e.gameSlug, o, (e, t) => (r.push({
                    url: e,
                    path: `${o}/${t}`,
                    stage: "unity_files"
                }), Promise.resolve()))), {
                    build: e,
                    loadOptions: i,
                    files: r
                }
            }
            async function K(e, t, a) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => void 0,
                    {
                        build: o,
                        loadOptions: n
                    } = e,
                    l = (0, h.yX)(o),
                    d = b(n.loader);
                if (d) {
                    i("unity_page");
                    let e = a.find(e => {
                        let {
                            installPath: t
                        } = e;
                        return t === `${l}/index.html`
                    });
                    if (!e) throw Error("The downloaded Unity loader page is missing.");
                    let {
                        data: t
                    } = await s.Filesystem.readFile({
                        path: e.source,
                        directory: s.Directory.Data,
                        encoding: s.Encoding.UTF8
                    });
                    R("string" == typeof t ? t : await t.text(), I(o.gameSlug, d))
                }
                i("extract"), await (0, f.s)(l, s.Directory.Data) && await s.Filesystem.rmdir({
                    path: l,
                    directory: s.Directory.Data,
                    recursive: !0
                }), await s.Filesystem.mkdir({
                    path: l,
                    directory: s.Directory.Data,
                    recursive: !0
                });
                let [{
                    uri: c
                }, {
                    uri: m
                }] = await Promise.all([s.Filesystem.getUri({
                    path: t,
                    directory: s.Directory.Data
                }), s.Filesystem.getUri({
                    path: l,
                    directory: s.Directory.Data
                })]);
                for (let {
                        source: e,
                        installPath: t
                    } of (await r.CapacitorZip.unzip({
                        source: c.replace(/^file:\/\//, ""),
                        destination: m.replace(/^file:\/\//, "")
                    }), a)) {
                    if (i(t.startsWith(`${h.Ut}/`) ? "sdks" : t.startsWith(`${l}/`) ? "unity_files" : "covers"), t.startsWith(`${h.Ut}/`) && await (0, f.s)(t, s.Directory.Data)) continue;
                    let a = t.slice(0, t.lastIndexOf("/"));
                    await (0, f.s)(a, s.Directory.Data) || await s.Filesystem.mkdir({
                        path: a,
                        directory: s.Directory.Data,
                        recursive: !0
                    }), await s.Filesystem.copy({
                        from: e,
                        to: t,
                        directory: s.Directory.Data,
                        toDirectory: s.Directory.Data
                    })
                }
                i("config"), await G(l);
                let p = {
                    buildId: o.buildId,
                    gameId: o.gameId,
                    gameSlug: o.gameSlug,
                    gameName: o.gameName,
                    loadOptions: n,
                    zipUrl: o.zipUrl,
                    downloadedAt: Date.now()
                };
                await s.Filesystem.writeFile({
                    path: `${l}/${N}`,
                    data: (0, u.Ii)(JSON.stringify(p)),
                    directory: s.Directory.Data
                }), ei()
            }
            async function J(e, t, a) {
                await H(t), await D();
                let i = (0, h.yX)(e),
                    o = `${e.buildId}.zip`;
                t("Downloading…", "zip");
                let {
                    uri: l
                } = await s.Filesystem.getUri({
                    path: o,
                    directory: s.Directory.Cache
                });
                await (0, f.s)(o, s.Directory.Cache) && await s.Filesystem.deleteFile({
                    path: o,
                    directory: s.Directory.Cache
                });
                let p = a ? await n.FileTransfer.addListener("progress", t => {
                    let {
                        url: i,
                        bytes: r,
                        contentLength: o
                    } = t, n = o || e.zipSize || 0;
                    i === e.zipUrl && n > 0 && a(Math.min(r / n, 1))
                }) : void 0;
                try {
                    await n.FileTransfer.downloadFile({
                        url: e.zipUrl,
                        path: l,
                        progress: !!a,
                        connectTimeout: 1e4,
                        readTimeout: 1e4
                    })
                } finally {
                    await p ? .remove()
                }
                t("Extracting…", "extract"), await (0, f.s)(i, s.Directory.Data) && await s.Filesystem.rmdir({
                    path: i,
                    directory: s.Directory.Data,
                    recursive: !0
                }), await s.Filesystem.mkdir({
                    path: i,
                    directory: s.Directory.Data,
                    recursive: !0
                });
                let {
                    uri: w
                } = await s.Filesystem.getUri({
                    path: i,
                    directory: s.Directory.Data
                });
                console.log("[GameBuild] unzipping", l, "→", w), await r.CapacitorZip.unzip({
                    source: l.replace(/^file:\/\//, ""),
                    destination: w.replace(/^file:\/\//, "")
                }), console.log("[GameBuild] unzip complete for", e.gameSlug), await s.Filesystem.deleteFile({
                    path: o,
                    directory: s.Directory.Cache
                }).catch(() => void 0), t("Fetching game config…", "config");
                let g = `${c.A.Instance.data.api}/${d.m}/${m.Jh}/games/${e.gameSlug}/gameframe?buildId=${e.buildId}`,
                    v = await fetch(g);
                if (!v.ok) throw Error(`Gameframe config fetch failed: ${v.status} ${v.statusText}`);
                let F = await v.json(),
                    $ = b(F.loader);
                $ && (t("Fetching Unity loader page…", "unity_page"), await O(e.gameSlug, $, i), t("Preparing Unity files…", "unity_files"), F.loaderOptions = await k(F.loaderOptions, e.gameSlug, i)), await G(i), t("Fetching covers…", "covers"), await (0, y.d9)(e);
                let L = {
                    buildId: e.buildId,
                    gameId: e.gameId,
                    gameSlug: e.gameSlug,
                    gameName: e.gameName,
                    loadOptions: F,
                    zipUrl: e.zipUrl,
                    downloadedAt: Date.now()
                };
                await s.Filesystem.writeFile({
                    path: `${i}/${N}`,
                    data: (0, u.Ii)(JSON.stringify(L)),
                    directory: s.Directory.Data
                }), ei()
            }
            async function W(e) {
                await s.Filesystem.rmdir({
                    path: (0, h.PL)(e),
                    directory: s.Directory.Data,
                    recursive: !0
                }), ei()
            }
            async function V() {
                await Promise.all(h.Z.map(async e => {
                    await (0, f.s)(e, s.Directory.Data).catch(() => !0) && await s.Filesystem.rmdir({
                        path: e,
                        directory: s.Directory.Data,
                        recursive: !0
                    }).catch(t => console.warn(`[deleteAllOfflineGames] removing "${e}" failed:`, t))
                })), ei()
            }
            async function Q() {
                let e = new Map((await (0, p.Nc)()).map(e => [e.gameId, e.zipUrl])),
                    t = new Map,
                    a = [];
                for (let i of (await eo())) {
                    let r = t.get(i.gameId);
                    r ? (0, h.P)(i, r, e.get(i.gameId)) ? (a.push(r), t.set(i.gameId, i)) : a.push(i) : t.set(i.gameId, i)
                }
                let i = !1;
                for (let e of a) {
                    let t = (0, h.yX)(e);
                    await s.Filesystem.rmdir({
                        path: t,
                        directory: s.Directory.Data,
                        recursive: !0
                    }).catch(e => console.warn(`[deleteSupersededBuilds] removing "${t}" failed:`, e)), i = !0, console.log(`[deleteSupersededBuilds] removed "${t}"`)
                }
                i && ei()
            }
            async function Z(e) {
                let t = (0, h.yX)(e);
                await (0, f.s)(`${t}/${N}`, s.Directory.Data).catch(() => !0) || (await s.Filesystem.rmdir({
                    path: t,
                    directory: s.Directory.Data,
                    recursive: !0
                }).catch(e => console.warn(`[discardFailedDownload] removing the unfinished build "${t}" failed:`, e)), console.log(`[discardFailedDownload] removed unfinished build "${t}"`));
                let a = `${e.buildId}.zip`;
                await (0, f.s)(a, s.Directory.Cache).catch(() => !1) && (await s.Filesystem.deleteFile({
                    path: a,
                    directory: s.Directory.Cache
                }).catch(e => console.warn(`[discardFailedDownload] removing the abandoned zip "${a}" failed:`, e)), console.log(`[discardFailedDownload] removed abandoned zip "${a}"`))
            }
            async function q() {
                for (let e of (await (0, f.f)(h.dp, s.Directory.Data))) {
                    if ("directory" !== e.type) continue;
                    let t = `${h.dp}/${e.name}`;
                    for (let a of (await (0, f.f)(t, s.Directory.Data))) {
                        if ("directory" !== a.type) continue;
                        let i = `${t}/${a.name}`;
                        await (0, f.s)(`${i}/${N}`, s.Directory.Data) || (await s.Filesystem.rmdir({
                            path: i,
                            directory: s.Directory.Data,
                            recursive: !0
                        }).catch(() => void 0), console.log(`[sweepPartialDownloads] removed unfinished build "${e.name}/${a.name}"`))
                    }
                }
                for (let e of await l.LiveUpdate.isSyncing().then(e => {
                        let {
                            syncing: t
                        } = e;
                        return t
                    }).catch(() => !1) ? [] : await (0, f.f)("", s.Directory.Cache)) "directory" !== e.type && e.name.endsWith(".zip") && (await s.Filesystem.deleteFile({
                    path: e.name,
                    directory: s.Directory.Cache
                }).catch(t => console.warn(`[sweepPartialDownloads] removing the abandoned zip "${e.name}" failed:`, t)), console.log(`[sweepPartialDownloads] removed abandoned zip "${e.name}"`));
                ei()
            }
            let Y = null;

            function ee() {
                return Y ? ? = q().finally(() => {
                    Y = null
                })
            }
            async function et(e, t) {
                let a, i = (0, h.PL)(e);
                try {
                    a = (await s.Filesystem.readdir({
                        path: i,
                        directory: s.Directory.Data
                    })).files
                } catch (t) {
                    return console.warn(`[readDownloadedGames] could not list the builds of "${e}":`, t), []
                }
                return (await Promise.all(a.filter(e => "directory" === e.type).map(async a => {
                    try {
                        let {
                            data: e
                        } = await s.Filesystem.readFile({
                            path: `${i}/${a.name}/${N}`,
                            directory: s.Directory.Data
                        });
                        return { ...JSON.parse((0, u.YU)(e)),
                            ...t
                        }
                    } catch {
                        return console.warn(`[readDownloadedGames] no metadata file for "${e}/${a.name}" — old download or incomplete, skip`), null
                    }
                }))).filter(e => null !== e)
            }
            async function ea() {
                let e = await (0, f.f)(h.dp, s.Directory.Data);
                return (await Promise.all(e.filter(e => "directory" === e.type).map(e => et(e.name, {
                    coverSrc: o.Capacitor.convertFileSrc(`${e.uri}/${h.gh}`),
                    loadingCoverSrc: o.Capacitor.convertFileSrc(`${e.uri}/${h.l4}`)
                })))).flat().sort((e, t) => t.downloadedAt - e.downloadedAt)
            }

            function ei() {
                i = void 0
            }

            function er() {
                return i ? .entries
            }

            function eo() {
                if (i) return i.promise;
                let e = {
                    promise: ea().then(t => (e.entries = t, t), t => (console.warn("[readDownloadedGames] could not read the downloaded games:", t), i === e && ei(), []))
                };
                return i = e, e.promise
            }
        },
        15992: (e, t, a) => {
            a.d(t, {
                yl: () => i
            });
            let i = {
                iframe: {
                    type: "other",
                    id: "iframe",
                    name: "Externally hosted (iframe)",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                html5: {
                    type: "other",
                    id: "html5",
                    name: "HTML5",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                external: {
                    type: "other",
                    id: "external",
                    name: "External",
                    limitedAdminUpdate: !0,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !1,
                    withDataSave: !1
                },
                ruffle: {
                    type: "other",
                    id: "ruffle",
                    name: "Ruffle",
                    limitedAdminUpdate: !0,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !1,
                    withDataSave: !1
                },
                flash: {
                    type: "other",
                    id: "flash",
                    name: "Flash",
                    limitedAdminUpdate: !0,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !1,
                    withDataSave: !1
                },
                fake: {
                    type: "other",
                    id: "fake",
                    name: "Fake",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !1,
                    withDataSave: !1
                },
                error: {
                    type: "other",
                    id: "error",
                    name: "Error",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !1,
                    withDataSave: !1
                },
                unity6: {
                    type: "unity",
                    id: "unity6",
                    name: "Unity 6",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "2020",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsCustomBuild: !0,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2023: {
                    type: "unity",
                    id: "unity2023",
                    name: "Unity 2023",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "2020",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2022: {
                    type: "unity",
                    id: "unity2022",
                    name: "Unity 2022",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "2020",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2021: {
                    type: "unity",
                    id: "unity2021",
                    name: "Unity 2021",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "2020",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2020: {
                    type: "unity",
                    id: "unity2020",
                    name: "Unity 2020",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "2020",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2019: {
                    type: "unity",
                    id: "unity2019",
                    name: "Unity 2019",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "5.6",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2018: {
                    type: "unity",
                    id: "unity2018",
                    name: "Unity 2018",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "5.6",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                unity2017: {
                    type: "unity",
                    id: "unity2017",
                    name: "Unity 2017",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "5.6",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                "5.6.x": {
                    type: "unity",
                    id: "5.6.x",
                    name: "Unity 5.6",
                    withDataSave: !0,
                    withSitelock: !0,
                    unityLoaderType: "5.6",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !0,
                    supportsCustomBuild: !1,
                    supportsBanners: !0,
                    supportsAps: !0
                },
                "5.4.x": {
                    type: "unity",
                    id: "5.4.x",
                    name: "Unity 5.4",
                    withDataSave: !1,
                    withSitelock: !1,
                    unityLoaderType: "5.4",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !1,
                    isRecommendedLoader: !1,
                    isNonRecommendedLoader: !1,
                    supportsCustomBuild: !1,
                    supportsBanners: !1,
                    supportsAps: !1
                },
                godot: {
                    type: "other",
                    id: "godot",
                    name: "Godot",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                defold: {
                    type: "other",
                    id: "defold",
                    name: "Defold",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                gamemaker: {
                    type: "other",
                    id: "gamemaker",
                    name: "GameMaker",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                gdevelop: {
                    type: "other",
                    id: "gdevelop",
                    name: "GDevelop",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                cocos: {
                    type: "other",
                    id: "cocos",
                    name: "Cocos",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                playcanvas: {
                    type: "other",
                    id: "playcanvas",
                    name: "PlayCanvas",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                unreal: {
                    type: "other",
                    id: "unreal",
                    name: "Unreal",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                construct: {
                    type: "other",
                    id: "construct",
                    name: "Construct",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                },
                layaair: {
                    type: "other",
                    id: "layaair",
                    name: "LayaAir",
                    limitedAdminUpdate: !1,
                    hasHtml5Fallback: !0,
                    isRecommendedLoader: !0,
                    isNonRecommendedLoader: !1,
                    supportsIFrameApsLoader: !0,
                    withDataSave: !0
                }
            }
        },
        16614: (e, t, a) => {
            var i = Object.create ? function(e, t, a, i) {
                void 0 === i && (i = a);
                var r = Object.getOwnPropertyDescriptor(t, a);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                }), Object.defineProperty(e, i, r)
            } : function(e, t, a, i) {
                void 0 === i && (i = a), e[i] = t[a]
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(16186);
            for (var o in r) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || i(t, r, o)
        },
        20754: (e, t, a) => {
            var i = Object.create ? function(e, t, a, i) {
                void 0 === i && (i = a);
                var r = Object.getOwnPropertyDescriptor(t, a);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                }), Object.defineProperty(e, i, r)
            } : function(e, t, a, i) {
                void 0 === i && (i = a), e[i] = t[a]
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(34046);
            for (var o in r) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || i(t, r, o)
        },
        57897: (e, t, a) => {
            function i(e) {
                let t = "";
                for (let a = 0; a < e.length; a += 8192) t += String.fromCharCode(...e.subarray(a, a + 8192));
                return btoa(t)
            }

            function r(e) {
                return i(new TextEncoder().encode(e))
            }

            function o(e) {
                let t = atob(e);
                return new TextDecoder().decode(Uint8Array.from(t, e => e.charCodeAt(0)))
            }
            a.d(t, {
                Ii: () => r,
                YU: () => o,
                nk: () => i
            })
        },
        78956: (e, t, a) => {
            a.d(t, {
                Nh: () => h,
                P: () => c,
                PL: () => l,
                Ut: () => o,
                W7: () => i,
                Z: () => s,
                b9: () => y,
                dp: () => r,
                gh: () => m,
                l4: () => u,
                oC: () => w,
                rO: () => f,
                so: () => n,
                un: () => g,
                x2: () => p,
                yX: () => d
            });
            let i = "offline-games",
                r = `${i}/game-files`,
                o = `${i}/shared`,
                n = `${i}/downloads`,
                s = [r, o, n];

            function l(e) {
                return `${r}/${e}`
            }

            function d(e) {
                return `${l(e.gameSlug)}/${void 0===e.zipUrl?e.buildId:e.zipUrl.slice(e.zipUrl.lastIndexOf("/")+1).replace(/\.zip$/,"")}`
            }

            function c(e, t, a) {
                let i = void 0 !== a && e.zipUrl === a;
                return i !== (void 0 !== a && t.zipUrl === a) ? i : e.downloadedAt > t.downloadedAt
            }
            let m = "cover.png",
                u = "loading-cover.png",
                p = `${i}/catalog-covers`;

            function y(e) {
                return `${e}.png`
            }

            function f(e, t) {
                return `${e}/${y(t)}`
            }

            function h(e) {
                return e.replace(/\.png$/, "")
            }
            let w = `${i}/profile`;

            function g(e, t) {
                return `${w}/${e}/avatar.${t}`
            }
        },
        81465: (e, t, a) => {
            a.d(t, {
                f: () => o,
                s: () => n
            });
            var i = a(85707);

            function r(e) {
                return e ? .code === "OS-PLUG-FILE-0008"
            }
            async function o(e, t) {
                try {
                    return (await i.Filesystem.readdir({
                        path: e,
                        directory: t
                    })).files
                } catch (e) {
                    if (r(e)) return [];
                    throw e
                }
            }
            async function n(e, t) {
                try {
                    return await i.Filesystem.stat({
                        path: e,
                        directory: t
                    }), !0
                } catch (e) {
                    if (r(e)) return !1;
                    throw e
                }
            }
        },
        85707: (e, t, a) => {
            var i = Object.create ? function(e, t, a, i) {
                void 0 === i && (i = a);
                var r = Object.getOwnPropertyDescriptor(t, a);
                (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                }), Object.defineProperty(e, i, r)
            } : function(e, t, a, i) {
                void 0 === i && (i = a), e[i] = t[a]
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(3992);
            for (var o in r) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || i(t, r, o)
        }
    }
]);