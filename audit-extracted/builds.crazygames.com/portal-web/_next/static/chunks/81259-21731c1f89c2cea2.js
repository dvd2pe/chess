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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8512e002-abfe-4af3-ac45-1da5df38f6a4", e._sentryDebugIdIdentifier = "sentry-dbid-8512e002-abfe-4af3-ac45-1da5df38f6a4")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61360, 81259], {
        3992: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Directory: () => o.__,
                Encoding: () => o.Wi,
                Filesystem: () => i,
                FilesystemDirectory: () => o.Vc,
                FilesystemEncoding: () => o.Rz
            });
            var a = r(34651),
                o = r(5381);
            let i = (0, a.registerPlugin)("Filesystem", {
                web: () => r.e(53321).then(r.bind(r, 53321)).then(e => new e.FilesystemWeb)
            });
            ! function(e = !1) {
                var t, r;
                typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, void 0 === window.Capacitor || e ? void 0 !== window.cordova && ((t = window).CapacitorUtils.Synapse = new Proxy({}, {
                    get: (e, r) => t.cordova.plugins[r]
                })) : (r = window).CapacitorUtils.Synapse = new Proxy({}, {
                    get: (e, t) => new Proxy({}, {
                        get: (e, a) => (e, o, i) => {
                            let n = r.Capacitor.Plugins[t];
                            void 0 === n ? i(Error(`Capacitor plugin ${t} not found`)) : "function" != typeof n[a] ? i(Error(`Method ${a} not found in Capacitor plugin ${t}`)) : (async () => {
                                try {
                                    let t = await n[a](e);
                                    o(t)
                                } catch (e) {
                                    i(e)
                                }
                            })()
                        }
                    })
                }))
            }()
        },
        4811: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            });
            let a = r(34651);
            class o extends a.WebPlugin {
                constructor() {
                    super(...arguments), this.lastProgressUpdate = 0, this.PROGRESS_UPDATE_INTERVAL = 100
                }
                async downloadFile(e) {
                    try {
                        let t = this.buildUrl(e.url, e.params),
                            r = new Headers(e.headers),
                            a = {
                                method: e.method || "GET",
                                headers: r,
                                redirect: e.disableRedirects ? "manual" : "follow"
                            },
                            o = new AbortController,
                            i = e.connectTimeout || 6e4,
                            n = setTimeout(() => o.abort(), i),
                            s, l = 0;
                        try {
                            let r = await fetch(t, { ...a,
                                signal: o.signal
                            });
                            if (!r.ok) throw Error(`HTTP error: ${r.status}`);
                            if (e.progress && r.body) {
                                let t = r.body.getReader(),
                                    a = parseInt(r.headers.get("content-length") || "0", 10),
                                    o = r.headers.get("content-type") || "",
                                    i = 0,
                                    n = [];
                                for (;;) {
                                    let {
                                        done: r,
                                        value: o
                                    } = await t.read();
                                    if (r) break;
                                    o && (n.push(o), i += o.length, this.notifyProgress(e.url, i, a, a > 0, "download"))
                                }
                                let c = new Uint8Array(i),
                                    d = 0;
                                for (let e of n) c.set(e, d), d += e.length;
                                s = new Blob([c], {
                                    type: o
                                }), l = i, e.progress && this.notifyProgress(e.url, l, l, !0, "download", !0)
                            } else l = (s = await r.blob()).size
                        } finally {
                            clearTimeout(n)
                        }
                        if (await this.tryWriteToFilesystem(s, e.path)) return {
                            path: e.path,
                            blob: s
                        };
                        let c = URL.createObjectURL(s),
                            d = document.createElement("a");
                        return d.href = c, d.download = this.extractFilename(e.path, e.url), document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(c), {
                            blob: s,
                            path: e.path
                        }
                    } catch (t) {
                        throw this.handleError(t, e.url, e.path)
                    }
                }
                async uploadFile(e) {
                    try {
                        let t;
                        if (e.blob) t = e.blob;
                        else {
                            let r = await this.tryReadFromFilesystem(e.path);
                            if (r) t = r;
                            else throw Error("File upload from path is not supported in web without @capacitor/filesystem plugin. Please provide a blob instead.")
                        }
                        return new Promise((r, a) => {
                            let o = new XMLHttpRequest,
                                i = this.buildUrl(e.url, e.params);
                            e.progress && (o.upload.onprogress = t => {
                                this.notifyProgress(e.url, t.loaded, t.total, t.lengthComputable, "upload")
                            }), o.onload = () => {
                                if (o.status >= 200 && o.status < 300) {
                                    e.progress && this.notifyProgress(e.url, t.size, t.size, !0, "upload", !0);
                                    let a = {};
                                    o.getAllResponseHeaders().split(`\r
`).forEach(e => {
                                        let [t, r] = e.split(": ");
                                        t && r && (a[t] = r)
                                    }), r({
                                        bytesSent: t.size,
                                        responseCode: o.status.toString(),
                                        response: o.responseText,
                                        headers: a
                                    })
                                } else a(Error(`HTTP error: ${o.status}`))
                            }, o.onerror = () => {
                                a(Error("Network error occurred"))
                            }, o.open(e.method || "POST", i, !0), e.headers && Object.entries(e.headers).forEach(([e, t]) => {
                                o.setRequestHeader(e, t)
                            });
                            let n = new FormData,
                                s = e.fileKey || "file";
                            n.append(s, t, e.path), e.params && Object.entries(e.params).forEach(([e, t]) => {
                                Array.isArray(t) ? t.forEach(t => n.append(e, t)) : n.append(e, t)
                            }), o.send(n)
                        })
                    } catch (t) {
                        throw this.handleError(t, e.path, e.url)
                    }
                }
                buildUrl(e, t) {
                    if (!t || 0 === Object.keys(t).length) return e;
                    let r = new URL(e);
                    return Object.entries(t).forEach(([e, t]) => {
                        Array.isArray(t) ? t.forEach(t => r.searchParams.append(e, t)) : r.searchParams.append(e, t)
                    }), r.toString()
                }
                notifyProgress(e, t, r, a, o, i = !1) {
                    let n = Date.now();
                    (i || n - this.lastProgressUpdate >= this.PROGRESS_UPDATE_INTERVAL) && (this.notifyListeners("progress", {
                        type: o,
                        url: e,
                        bytes: t,
                        contentLength: r,
                        lengthComputable: a
                    }), this.lastProgressUpdate = n)
                }
                handleError(e, t, r) {
                    return e instanceof TypeError && "Failed to fetch" === e.message ? {
                        code: "OS-PLUG-FLTR-0008",
                        message: "Failed to connect to server",
                        source: t,
                        target: r
                    } : e instanceof Error ? {
                        code: "OS-PLUG-FLTR-0011",
                        message: e.message,
                        source: t,
                        target: r
                    } : {
                        code: "OS-PLUG-FLTR-0011",
                        message: "An unknown error occurred",
                        source: t,
                        target: r
                    }
                }
                extractFilename(e, t) {
                    let r = e.split("?")[0].split("#")[0].split(/[/\\]/),
                        a = r[r.length - 1];
                    if (!a.includes(".")) {
                        let e = t.split(".");
                        if (e.length > 1) {
                            let t = e[e.length - 1].split("?")[0];
                            a = `${e[e.length-2].split("/").pop()}.${t}`
                        }
                    }
                    return a || (a = "download"), a
                }
                isFilesystemAvailable() {
                    try {
                        return !!globalThis ? .Capacitor ? .Plugins ? .Filesystem
                    } catch {
                        return !1
                    }
                }
                async tryReadFromFilesystem(e) {
                    if (!this.isFilesystemAvailable()) return null;
                    try {
                        let t = window.Capacitor ? .Plugins ? .Filesystem;
                        if (!t) return null;
                        let r = (await t.readFile({
                            path: e
                        })).data;
                        if (!r) throw Error("No data returned from Filesystem plugin");
                        let a = this.getMimeTypeFromPath(e) || "application/octet-stream",
                            o = atob(r),
                            i = [];
                        for (let e = 0; e < o.length; e += 512) {
                            let t = o.slice(e, e + 512),
                                r = Array(t.length);
                            for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                            let a = new Uint8Array(r);
                            i.push(a)
                        }
                        return new Blob(i, {
                            type: a
                        })
                    } catch (e) {
                        return console.error("Error reading file from Filesystem:", e), null
                    }
                }
                async tryWriteToFilesystem(e, t) {
                    if (!this.isFilesystemAvailable()) return !1;
                    try {
                        let r = window.Capacitor ? .Plugins ? .Filesystem;
                        if (!r) return !1;
                        let a = await this.blobToBase64(e);
                        if (!a) throw Error("Failed to convert blob to base64");
                        let o = t.split("/");
                        if (o.length > 1) {
                            let e = o.slice(0, -1).join("/");
                            await r.stat({
                                path: e
                            }).catch(async () => {
                                await r.mkdir({
                                    path: e,
                                    recursive: !0
                                })
                            })
                        }
                        return await r.writeFile({
                            path: t,
                            data: a.split(",")[1],
                            recursive: !0
                        }), !0
                    } catch (e) {
                        return console.error("Error writing file to Filesystem:", e), !1
                    }
                }
                blobToBase64(e) {
                    return new Promise((t, r) => {
                        let a = new FileReader;
                        a.onload = () => t(a.result), a.onerror = () => r(Error("Failed to convert blob to base64")), a.readAsDataURL(e)
                    })
                }
                getMimeTypeFromPath(e) {
                    let t = e.split(".").pop() ? .toLowerCase();
                    return t && ({
                        jpg: "image/jpeg",
                        jpeg: "image/jpeg",
                        png: "image/png",
                        gif: "image/gif",
                        pdf: "application/pdf",
                        txt: "text/plain",
                        html: "text/html",
                        htm: "text/html",
                        json: "application/json",
                        doc: "application/msword",
                        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        xls: "application/vnd.ms-excel",
                        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        zip: "application/zip",
                        mp3: "audio/mpeg",
                        mp4: "video/mp4",
                        wav: "audio/wav",
                        xml: "application/xml",
                        csv: "text/csv"
                    })[t] || null
                }
            }
            t.FileTransferWeb = o
        },
        5381: (e, t, r) => {
            "use strict";
            var a, o, i, n;
            r.d(t, {
                Rz: () => l,
                Vc: () => s,
                Wi: () => o,
                __: () => a
            }), (i = a || (a = {})).Documents = "DOCUMENTS", i.Data = "DATA", i.Library = "LIBRARY", i.Cache = "CACHE", i.External = "EXTERNAL", i.ExternalStorage = "EXTERNAL_STORAGE", i.ExternalCache = "EXTERNAL_CACHE", i.LibraryNoCloud = "LIBRARY_NO_CLOUD", i.Temporary = "TEMPORARY", (n = o || (o = {})).UTF8 = "utf8", n.ASCII = "ascii", n.UTF16 = "utf16";
            let s = a,
                l = o
        },
        16186: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            });
            let a = r(34651).registerPlugin("FileTransfer", {
                web: () => Promise.resolve().then(() => r(4811)).then(e => new e.FileTransferWeb)
            });
            ! function(e = !1) {
                var t, r;
                typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, void 0 === window.Capacitor || e ? void 0 !== window.cordova && ((t = window).CapacitorUtils.Synapse = new Proxy({}, {
                    get: (e, r) => t.cordova.plugins[r]
                })) : (r = window).CapacitorUtils.Synapse = new Proxy({}, {
                    get: (e, t) => new Proxy({}, {
                        get: (e, a) => (e, o, i) => {
                            let n = r.Capacitor.Plugins[t];
                            void 0 === n ? i(Error(`Capacitor plugin ${t} not found`)) : "function" != typeof n[a] ? i(Error(`Method ${a} not found in Capacitor plugin ${t}`)) : (async () => {
                                try {
                                    let t = await n[a](e);
                                    o(t)
                                } catch (e) {
                                    i(e)
                                }
                            })()
                        }
                    })
                }))
            }(), t.FileTransfer = a
        },
        32662: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var a = r(6029),
                o = r(75155);
            r(55729);
            var i = r(50212),
                n = r(73366),
                s = r.n(n);
            let l = e => {
                let t, r, n, l, c, d, p, u = (0, o.c)(19),
                    {
                        title: m,
                        count: h,
                        subtitle: w,
                        className: g,
                        subtitleClassName: f,
                        action: y
                    } = e;
                return u[0] !== g ? (t = (0, i.A)(s().container, g), u[0] = g, u[1] = t) : t = u[1], u[2] !== h ? (r = void 0 !== h && (0, a.jsx)("span", {
                    className: s().count,
                    children: h
                }), u[2] = h, u[3] = r) : r = u[3], u[4] !== r || u[5] !== m ? (n = (0, a.jsxs)("span", {
                    className: s().mainText,
                    children: [m, r]
                }), u[4] = r, u[5] = m, u[6] = n) : n = u[6], u[7] !== y ? (l = y && (0, a.jsx)("span", {
                    className: s().action,
                    children: y
                }), u[7] = y, u[8] = l) : l = u[8], u[9] !== n || u[10] !== l ? (c = (0, a.jsxs)("h2", {
                    className: s().title,
                    children: [n, l]
                }), u[9] = n, u[10] = l, u[11] = c) : c = u[11], u[12] !== w || u[13] !== f ? (d = w && (0, a.jsx)("p", {
                    className: (0, i.A)(s().subtitle, f),
                    children: w
                }), u[12] = w, u[13] = f, u[14] = d) : d = u[14], u[15] !== t || u[16] !== c || u[17] !== d ? (p = (0, a.jsxs)("div", {
                    className: t,
                    children: [c, d]
                }), u[15] = t, u[16] = c, u[17] = d, u[18] = p) : p = u[18], p
            }
        },
        34046: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                CapacitorZip: () => a
            });
            let a = (0, r(34651).registerPlugin)("CapacitorZip", {
                web: () => r.e(22876).then(r.bind(r, 22876)).then(e => new e.CapacitorZipWeb)
            })
        },
        38910: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var a = r(6029),
                o = r(75155),
                i = r(55729),
                n = r(77650),
                s = r(79942),
                l = r(50212),
                c = r(81930),
                d = r(93800),
                p = r(71684),
                u = r(37434),
                m = r(98089),
                h = r(47352),
                w = r(90962),
                g = r.n(w);
            let f = e => {
                    let t, r, i, n, s, c = (0, o.c)(15),
                        {
                            name: p,
                            selected: u,
                            stretchTapArea: m,
                            onClick: h
                        } = e,
                        w = m && g().rowTapArea;
                    c[0] !== w ? (t = (0, l.A)(g().downloadButton, w), c[0] = w, c[1] = t) : t = c[1];
                    let f = u && g().checkboxSelected;
                    return c[2] !== f ? (r = (0, l.A)(g().checkbox, f), c[2] = f, c[3] = r) : r = c[3], c[4] !== u ? (i = u && (0, a.jsx)(d.A, {
                        name: "check",
                        size: 12
                    }), c[4] = u, c[5] = i) : i = c[5], c[6] !== r || c[7] !== i ? (n = (0, a.jsx)("span", {
                        className: r,
                        children: i
                    }), c[6] = r, c[7] = i, c[8] = n) : n = c[8], c[9] !== p || c[10] !== h || c[11] !== u || c[12] !== t || c[13] !== n ? (s = (0, a.jsx)("button", {
                        type: "button",
                        className: t,
                        onClick: h,
                        "aria-pressed": u,
                        "aria-label": p,
                        children: n
                    }), c[9] = p, c[10] = h, c[11] = u, c[12] = t, c[13] = n, c[14] = s) : s = c[14], s
                },
                y = e => {
                    let t, r, i, c, p = (0, o.c)(23),
                        {
                            downloading: h,
                            failed: w,
                            stretchTapArea: f,
                            onClick: y
                        } = e,
                        b = f && g().rowTapArea;
                    if (h) {
                        let e, t, r, o;
                        return p[0] !== b ? (e = (0, l.A)(g().downloadButton, b), p[0] = b, p[1] = e) : e = p[1], p[2] === Symbol.for("react.memo_cache_sentinel") ? (t = n.Ru._({
                            id: "common.offline.downloadGame"
                        }), p[2] = t) : t = p[2], p[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)("span", {
                            className: g().loading,
                            children: (0, a.jsx)(m.A, {
                                bulletColor: "var(--brand-60)",
                                bulletSize: 6,
                                waveDistance: 3
                            })
                        }), p[3] = r) : r = p[3], p[4] !== y || p[5] !== e || p[6] !== t ? (o = (0, a.jsx)("button", {
                            type: "button",
                            className: e,
                            onClick: y,
                            disabled: !0,
                            "aria-label": t,
                            children: r
                        }), p[4] = y, p[5] = e, p[6] = t, p[7] = o) : o = p[7], o
                    }
                    if (w) {
                        let e, t, r, o;
                        return p[8] !== b ? (e = (0, l.A)(g().actionPill, b), p[8] = b, p[9] = e) : e = p[9], p[10] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(d.A, {
                            name: "refresh"
                        }), r = (0, a.jsx)(s.x6, {
                            id: "common.offline.downloadListItem.failed"
                        }), p[10] = t, p[11] = r) : (t = p[10], r = p[11]), p[12] !== y || p[13] !== e ? (o = (0, a.jsxs)(u.A, {
                            variant: "outlined",
                            color: "warning",
                            height: 34,
                            className: e,
                            onClick: y,
                            children: [t, r]
                        }), p[12] = y, p[13] = e, p[14] = o) : o = p[14], o
                    }
                    return p[15] !== b ? (t = (0, l.A)(g().downloadButton, b), p[15] = b, p[16] = t) : t = p[16], p[17] === Symbol.for("react.memo_cache_sentinel") ? (r = n.Ru._({
                        id: "common.offline.downloadGame"
                    }), i = (0, a.jsx)(d.A, {
                        name: "download2",
                        size: 34
                    }), p[17] = r, p[18] = i) : (r = p[17], i = p[18]), p[19] !== y || p[20] !== t || p[21] !== r ? (c = (0, a.jsx)("button", {
                        type: "button",
                        className: t,
                        onClick: y,
                        "aria-label": r,
                        children: i
                    }), p[19] = y, p[20] = t, p[21] = r, p[22] = c) : c = p[22], c
                },
                b = e => {
                    let t, r, n, s, u, m, w, b, _, x, v, A = (0, o.c)(42),
                        {
                            gameId: E,
                            slug: T,
                            name: P,
                            coverSrc: C,
                            size: F,
                            downloading: j,
                            failed: S,
                            onDownload: L,
                            selected: D,
                            onToggleSelect: R
                        } = e,
                        {
                            crazyAnalyticsService: I
                        } = i.useContext(p.A).services,
                        [k, U] = i.useState(!1);
                    A[0] !== L || A[1] !== R ? (t = e => {
                        e.preventDefault(), e.stopPropagation(), (R ? ? L) ? .()
                    }, A[0] = L, A[1] = R, A[2] = t) : t = A[2];
                    let N = t;
                    A[3] !== C ? (r = C ? (0, c.Ay)(C, {
                        width: 70,
                        height: 70,
                        fit: "cover"
                    }) : void 0, A[3] = C, A[4] = r) : r = A[4];
                    let M = r,
                        O = R && D && g().itemSelected;
                    A[5] !== O ? (n = (0, l.A)(g().item, O), A[5] = O, A[6] = n) : n = A[6], A[7] !== k || A[8] !== C || A[9] !== M || A[10] !== P ? (s = (0, a.jsx)("div", {
                        className: g().icon,
                        children: M && !k ? (0, a.jsx)("img", {
                            className: g().iconImage,
                            src: M,
                            srcSet: (0, c.Wn)(C, {
                                width: 70,
                                height: 70,
                                fit: "cover"
                            }),
                            alt: P,
                            width: 70,
                            height: 70,
                            draggable: !1,
                            onError: () => U(!0)
                        }) : (0, a.jsx)(d.A, {
                            name: "arcade",
                            size: 28,
                            className: g().iconPlaceholder
                        })
                    }), A[7] = k, A[8] = C, A[9] = M, A[10] = P, A[11] = s) : s = A[11], A[12] !== P ? (u = (0, a.jsx)("span", {
                        className: g().name,
                        children: P
                    }), A[12] = P, A[13] = u) : u = A[13], A[14] !== F ? (m = F && (0, a.jsx)("span", {
                        className: g().size,
                        children: F
                    }), A[14] = F, A[15] = m) : m = A[15], A[16] !== u || A[17] !== m ? (w = (0, a.jsxs)("div", {
                        className: g().info,
                        children: [u, m]
                    }), A[16] = u, A[17] = m, A[18] = w) : w = A[18], A[19] !== j || A[20] !== S || A[21] !== N || A[22] !== P || A[23] !== R || A[24] !== D || A[25] !== T ? (b = R ? (0, a.jsx)(f, {
                        name: P,
                        selected: D,
                        stretchTapArea: !T,
                        onClick: N
                    }) : (0, a.jsx)(y, {
                        downloading: j,
                        failed: S,
                        stretchTapArea: !T,
                        onClick: N
                    }), A[19] = j, A[20] = S, A[21] = N, A[22] = P, A[23] = R, A[24] = D, A[25] = T, A[26] = b) : b = A[26], A[27] !== n || A[28] !== s || A[29] !== w || A[30] !== b ? (_ = (0, a.jsxs)("div", {
                        className: n,
                        children: [s, w, b]
                    }), A[27] = n, A[28] = s, A[29] = w, A[30] = b, A[31] = _) : _ = A[31];
                    let z = _;
                    if (!T) {
                        let e, t;
                        return A[32] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.A)(g().link, g().pressableRow), A[32] = e) : e = A[32], A[33] !== z ? (t = (0, a.jsx)("div", {
                            className: e,
                            children: z
                        }), A[33] = z, A[34] = t) : t = A[34], t
                    }
                    return A[35] !== I || A[36] !== E ? (x = () => E && I.sendClickOnGame(E), A[35] = I, A[36] = E, A[37] = x) : x = A[37], A[38] !== z || A[39] !== T || A[40] !== x ? (v = (0, a.jsx)(h.A, {
                        slug: T,
                        className: g().link,
                        onClick: x,
                        children: z
                    }), A[38] = z, A[39] = T, A[40] = x, A[41] = v) : v = A[41], v
                }
        },
        61820: (e, t, r) => {
            "use strict";
            r.d(t, {
                g: () => s
            });
            var a = r(75155),
                o = r(95815),
                i = r(69542),
                n = r(78956);
            let s = () => {
                let e, t, r, s = (0, a.c)(11),
                    {
                        entries: c,
                        coverBaseUrl: d,
                        entriesPublished: p,
                        refreshSettled: u
                    } = (0, i.eX)(),
                    m = (0, o.DD)();
                e: {
                    let t;
                    if (!d) {
                        e = c;
                        break e
                    }
                    if (s[0] !== c || s[1] !== d) {
                        let e;
                        s[3] !== d ? (e = e => e.covers ? { ...e,
                            covers: { ...e.covers,
                                "1x1": (0, n.rO)(d, e.gameSlug)
                            }
                        } : e, s[3] = d, s[4] = e) : e = s[4], t = c.map(e), s[0] = c, s[1] = d, s[2] = t
                    } else t = s[2];e = t
                }
                let h = e;
                s[5] !== h ? (t = Object.fromEntries(h.map(l)), s[5] = h, s[6] = t) : t = s[6];
                let w = t,
                    g = !p || 0 === h.length && !u && m;
                return s[7] !== h || s[8] !== w || s[9] !== g ? (r = {
                    entries: h,
                    entriesByGameId: w,
                    loading: g
                }, s[7] = h, s[8] = w, s[9] = g, s[10] = r) : r = s[10], r
            };

            function l(e) {
                return [e.gameId, e]
            }
        },
        66497: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => a,
                s: () => o
            });

            function a(e) {
                if (e) return `${Math.max(1,Math.round(e/1048576))}mb`
            }

            function o(e) {
                return e >= 0x40000000 ? `${(e/0x40000000).toFixed(1)} GB` : e >= 1048576 ? `${Math.round(e/1048576)} MB` : 0 === e ? "0 MB" : `${Math.max(1,Math.round(e/1024))} KB`
            }
        },
        73366: e => {
            e.exports = {
                container: "SectionTitle_container__45nrn",
                title: "SectionTitle_title__8hItE",
                mainText: "SectionTitle_mainText__s1Xse",
                count: "SectionTitle_count__CizDS",
                action: "SectionTitle_action__xAjFr",
                subtitle: "SectionTitle_subtitle__F6SoI"
            }
        },
        90962: e => {
            e.exports = {
                link: "DownloadListItem_link__WPg_O",
                item: "DownloadListItem_item__6MaMn",
                "item-in": "DownloadListItem_item-in__ZpjZj",
                pressableRow: "DownloadListItem_pressableRow__27qmp",
                itemSelected: "DownloadListItem_itemSelected__GDzxQ",
                icon: "DownloadListItem_icon__wqSVi",
                iconImage: "DownloadListItem_iconImage__nwFqL",
                iconPlaceholder: "DownloadListItem_iconPlaceholder__8AQmj",
                info: "DownloadListItem_info__OF1GU",
                name: "DownloadListItem_name__pcLtZ",
                size: "DownloadListItem_size__l9uPN",
                downloadButton: "DownloadListItem_downloadButton__AUgl_",
                actionPill: "DownloadListItem_actionPill__UEiam",
                loading: "DownloadListItem_loading__Or_WQ",
                checkbox: "DownloadListItem_checkbox__canzD",
                checkboxSelected: "DownloadListItem_checkboxSelected__VRMED",
                rowTapArea: "DownloadListItem_rowTapArea__PpUmy"
            }
        }
    }
]);