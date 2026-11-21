! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "587f6099-f8df-428d-82a3-1763187c5938", e._sentryDebugIdIdentifier = "sentry-dbid-587f6099-f8df-428d-82a3-1763187c5938")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [59787, 67088], {
        17710: (e, t, n) => {
            "use strict";
            n.d(t, {
                $5: () => l,
                Ls: () => r,
                eP: () => c,
                yI: () => d
            });
            var o = n(55729);

            function r(e, t, n, r) {
                let l = o.useRef(!1);
                o.useEffect(() => {
                    if (!r) return;
                    let o = n => {
                            let o = n.target,
                                r = o.closest('[role="menuitem"]');
                            if (r && t.current && t.current.contains(r) || e && e.contains(o)) {
                                l.current = !1;
                                return
                            }
                            l.current = !0
                        },
                        c = t => {
                            let o = t.target;
                            e && e.contains(o) || !l.current || (n(), l.current = !1, o.closest("[data-menu-trigger]") || (t.stopPropagation(), t.stopImmediatePropagation(), t.preventDefault()))
                        };
                    return setTimeout(() => {
                        document.addEventListener("mousedown", o, !0), document.addEventListener("click", c, !0), document.addEventListener("touchstart", o, !0)
                    }, 0), () => {
                        document.removeEventListener("mousedown", o, !0), document.removeEventListener("click", c, !0), document.removeEventListener("touchstart", o, !0), l.current = !1
                    }
                }, [e, t, n, r])
            }

            function l(e, t, n) {
                o.useEffect(() => {
                    if (!n) return;
                    let o = n => {
                        e.current && !e.current.contains(n.target) && t()
                    };
                    return document.addEventListener("mousedown", o), document.addEventListener("touchstart", o), () => {
                        document.removeEventListener("mousedown", o), document.removeEventListener("touchstart", o)
                    }
                }, [e, t, n])
            }

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
                    o = window.innerHeight,
                    r = e.top,
                    l = o - e.bottom;
                return "top" === t ? r < n && l > r ? "bottom" : "top" : l < n && r > l ? "top" : "bottom"
            }

            function d(e) {
                let {
                    anchorRect: t,
                    menuWidth: n,
                    gap: o = 16,
                    disablePortal: r = !1
                } = e, l = window.innerWidth;
                if (r) return t.left + n > l - o ? {
                    left: "auto",
                    right: 0,
                    shouldAlignRight: !0
                } : t.left < o ? {
                    left: o - t.left,
                    shouldAlignRight: !1
                } : {
                    left: 0,
                    shouldAlignRight: !1
                }; {
                    let e = t.left;
                    return e + n > l && (e = Math.max(o, l - n - o)), e < o && (e = o), {
                        left: e,
                        shouldAlignRight: !1
                    }
                }
            }
        },
        67088: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => _,
                c: () => s
            });
            var o = n(6029),
                r = n(75155),
                l = n(55729),
                c = n(50212),
                d = n(93800),
                i = n(17710),
                a = n(83376),
                u = n.n(a);
            let s = e => null,
                _ = e => {
                    let t, n, a, s, _, w, h, m, f, z, B, g, b, v, D, k, E, x, A, S, I, C, N = (0, r.c)(84),
                        {
                            value: L,
                            defaultValue: j,
                            onChange: P,
                            children: M,
                            className: R,
                            selectClassName: W,
                            style: U,
                            disabled: O,
                            label: T,
                            height: Z,
                            width: F,
                            renderValue: K,
                            native: V,
                            multiline: Y,
                            dataTestId: G
                        } = e,
                        q = void 0 !== Y && Y,
                        [H, Q] = l.useState(!1),
                        [$, X] = l.useState(L ? ? j),
                        [J, ee] = l.useState(-1),
                        [et, en] = l.useState(!1),
                        eo = l.useRef(null),
                        er = l.useRef(null),
                        el = l.useRef(null),
                        ec = l.useRef(-1);
                    if (N[0] !== M) {
                        let e;
                        e = [], l.Children.forEach(M, t => {
                            if (l.isValidElement(t)) {
                                let n = t.props;
                                e.push({
                                    value: n.value,
                                    label: n.children,
                                    disabled: n.disabled
                                })
                            }
                        }), t = e, N[0] = M, N[1] = t
                    } else t = N[1];
                    let ed = t,
                        [ei, ea] = l.useState(L);
                    L !== ei && (ea(L), void 0 !== L && X(L)), N[2] !== J ? (n = () => {
                        ec.current = J
                    }, a = [J], N[2] = J, N[3] = n, N[4] = a) : (n = N[3], a = N[4]), l.useEffect(n, a), N[5] !== ed || N[6] !== $ ? (s = ed.find(e => e.value === $) ? ? null, N[5] = ed, N[6] = $, N[7] = s) : s = N[7];
                    let eu = s;
                    e: {
                        if (K) {
                            let e;
                            N[8] !== K || N[9] !== eu ? (e = K(eu), N[8] = K, N[9] = eu, N[10] = e) : e = N[10], _ = e;
                            break e
                        }
                        if (eu) {
                            _ = eu.label;
                            break e
                        }
                        _ = T
                    }
                    let es = _;
                    N[11] !== P ? (w = (e, t) => {
                        !e.disabled && (X(e.value), Q(!1), ee(-1), P && P(t, e.value))
                    }, N[11] = P, N[12] = w) : w = N[12];
                    let e_ = w;
                    N[13] !== e_ || N[14] !== H || N[15] !== ed ? (h = e => {
                        if (!H) return;
                        let t = ed.filter(p),
                            n = ec.current;
                        switch (e.key) {
                            case "ArrowDown":
                                {
                                    e.preventDefault();
                                    let o = n + 1,
                                        r = o >= t.length ? 0 : o;ee(r);
                                    let l = el.current ? .children[r];l ? .scrollIntoView({
                                        behavior: "smooth",
                                        block: "nearest"
                                    });
                                    break
                                }
                            case "ArrowUp":
                                {
                                    e.preventDefault();
                                    let o = n - 1,
                                        r = o < 0 ? t.length - 1 : o;ee(r);
                                    let l = el.current ? .children[r];l ? .scrollIntoView({
                                        behavior: "smooth",
                                        block: "nearest"
                                    });
                                    break
                                }
                            case "Enter":
                                e.preventDefault(), n >= 0 && n < t.length && e_(t[n], null);
                                break;
                            case "Escape":
                                e.preventDefault(), Q(!1), ee(-1), er.current ? .focus();
                                break;
                            case "Tab":
                                Q(!1), ee(-1)
                        }
                    }, N[13] = e_, N[14] = H, N[15] = ed, N[16] = h) : h = N[16];
                    let ep = h;
                    N[17] !== ep || N[18] !== H ? (m = () => {
                        if (H) return document.addEventListener("keydown", ep), () => {
                            document.removeEventListener("keydown", ep)
                        }
                    }, f = [H, ep], N[17] = ep, N[18] = H, N[19] = m, N[20] = f) : (m = N[19], f = N[20]), l.useEffect(m, f), N[21] === Symbol.for("react.memo_cache_sentinel") ? (z = () => Q(!1), N[21] = z) : z = N[21], (0, i.$5)(eo, z, H), N[22] === Symbol.for("react.memo_cache_sentinel") ? (B = e => {
                        ee(e)
                    }, N[22] = B) : B = N[22];
                    let ey = B;
                    N[23] !== O || N[24] !== H ? (g = () => {
                        if (!O) {
                            let e = !H;
                            if (Q(e), e && (ee(-1), er.current)) {
                                let e = er.current.getBoundingClientRect();
                                en("top" === (0, i.eP)(e, "bottom"))
                            }
                        }
                    }, N[23] = O, N[24] = H, N[25] = g) : g = N[25];
                    let ew = g;
                    if (V) {
                        let e, t, n, r, l, i, a, s;
                        return N[26] !== W ? (e = (0, c.A)(u().selectComponent, W), N[26] = W, N[27] = e) : e = N[27], N[28] !== P ? (t = e => P && P(e, e.target.value), N[28] = P, N[29] = t) : t = N[29], N[30] === Symbol.for("react.memo_cache_sentinel") ? (n = () => Q(!0), r = () => Q(!1), N[30] = n, N[31] = r) : (n = N[30], r = N[31]), N[32] !== Z || N[33] !== F ? (l = {
                            height: Z,
                            width: F
                        }, N[32] = Z, N[33] = F, N[34] = l) : l = N[34], N[35] !== M || N[36] !== G || N[37] !== O || N[38] !== e || N[39] !== t || N[40] !== L || N[41] !== l ? (i = (0, o.jsx)("select", {
                            "data-testid": G,
                            className: e,
                            onChange: t,
                            onFocus: n,
                            onBlur: r,
                            value: L,
                            style: l,
                            disabled: O,
                            children: M
                        }), N[35] = M, N[36] = G, N[37] = O, N[38] = e, N[39] = t, N[40] = L, N[41] = l, N[42] = i) : i = N[42], N[43] !== H ? (a = H ? (0, o.jsx)(d.A, {
                            name: "chevron-up",
                            size: 24,
                            className: (0, c.A)(u().iconExpandSelect)
                        }, "chevron") : (0, o.jsx)(d.A, {
                            name: "chevron-down",
                            size: 24,
                            className: (0, c.A)(u().iconExpandSelect)
                        }, "chevron"), N[43] = H, N[44] = a) : a = N[44], N[45] !== i || N[46] !== a ? (s = (0, o.jsxs)("div", {
                            className: u().selectWrapper,
                            children: [i, a]
                        }), N[45] = i, N[46] = a, N[47] = s) : s = N[47], s
                    }
                    return N[48] !== R || N[49] !== W ? (b = (0, c.A)(R, W), N[48] = R, N[49] = W, N[50] = b) : b = N[50], N[51] !== Z || N[52] !== U || N[53] !== F ? (v = {
                        position: "relative",
                        ...U,
                        height: Z,
                        width: F
                    }, N[51] = Z, N[52] = U, N[53] = F, N[54] = v) : v = N[54], N[55] !== H ? (D = (0, c.A)(u().selectButton, {
                        "Mui-expanded": H
                    }), N[55] = H, N[56] = D) : D = N[56], N[57] !== Z ? (k = {
                        height: Z
                    }, N[57] = Z, N[58] = k) : k = N[58], N[59] !== es ? (E = (0, o.jsx)("div", {
                        className: u().dropdownContent,
                        children: es
                    }), N[59] = es, N[60] = E) : E = N[60], N[61] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(d.A, {
                        name: "chevron-down",
                        size: 24,
                        className: (0, c.A)(u().iconExpandSelect, "IconExpandSelect")
                    }), N[61] = x) : x = N[61], N[62] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, o.jsx)(d.A, {
                        name: "chevron-up",
                        size: 24,
                        className: (0, c.A)(u().iconCollapseSelect, "IconCollapseSelect")
                    }), N[62] = A) : A = N[62], N[63] !== G || N[64] !== O || N[65] !== ew || N[66] !== H || N[67] !== D || N[68] !== k || N[69] !== E ? (S = (0, o.jsxs)("button", {
                        ref: er,
                        type: "button",
                        "data-testid": G,
                        className: D,
                        onClick: ew,
                        disabled: O,
                        "aria-haspopup": "listbox",
                        "aria-expanded": H,
                        style: k,
                        children: [E, x, A]
                    }), N[63] = G, N[64] = O, N[65] = ew, N[66] = H, N[67] = D, N[68] = k, N[69] = E, N[70] = S) : S = N[70], N[71] !== e_ || N[72] !== H || N[73] !== q || N[74] !== ed || N[75] !== J || N[76] !== $ || N[77] !== et ? (I = H && (0, o.jsx)("div", {
                        className: (0, c.A)(u().dropdownPopper, {
                            [u().dropdownPopperFlipped]: et
                        }),
                        children: (0, o.jsx)("ul", {
                            ref: el,
                            className: u().listBox,
                            role: "listbox",
                            children: ed.filter(y).map((e, t) => {
                                let n = e.value === $,
                                    r = t === J;
                                return (0, o.jsx)("li", {
                                    role: "option",
                                    "aria-selected": n,
                                    className: (0, c.A)({
                                        [u().selectedOption]: r,
                                        [u().multilineSelectOption]: q
                                    }),
                                    onClick: t => e_(e, t),
                                    onMouseEnter: () => ey(t),
                                    onTouchStart: () => ey(t),
                                    children: e.label
                                }, t)
                            })
                        })
                    }), N[71] = e_, N[72] = H, N[73] = q, N[74] = ed, N[75] = J, N[76] = $, N[77] = et, N[78] = I) : I = N[78], N[79] !== b || N[80] !== v || N[81] !== S || N[82] !== I ? (C = (0, o.jsxs)("div", {
                        ref: eo,
                        className: b,
                        style: v,
                        children: [S, I]
                    }), N[79] = b, N[80] = v, N[81] = S, N[82] = I, N[83] = C) : C = N[83], C
                };

            function p(e) {
                return !e.disabled
            }

            function y(e) {
                return !e.disabled
            }
        },
        83376: e => {
            e.exports = {
                czyButton: "Dropdown_czyButton__SEMem",
                "czyButton--contained--purple": "Dropdown_czyButton--contained--purple__k0o_y",
                "czyButton--contained--white": "Dropdown_czyButton--contained--white__PdaAU",
                "czyButton--contained--grey": "Dropdown_czyButton--contained--grey__7qEVY",
                "czyButton--contained--warning": "Dropdown_czyButton--contained--warning__Gf0mK",
                "czyButton--contained--alert": "Dropdown_czyButton--contained--alert__taYKB",
                "czyButton--contained--success": "Dropdown_czyButton--contained--success__b4LjM",
                "czyButton--contained--black": "Dropdown_czyButton--contained--black__4pezU",
                "czyButton--contained--green-gradient": "Dropdown_czyButton--contained--green-gradient__R8ATz",
                "czyButton--contained--animated-green-gradient": "Dropdown_czyButton--contained--animated-green-gradient__2hPn3",
                "scroll-gradient": "Dropdown_scroll-gradient__iIUek",
                "czyButton--outlined--purple": "Dropdown_czyButton--outlined--purple__grQkN",
                "czyButton--link--purple": "Dropdown_czyButton--link--purple__mxuur",
                "czyButton--outlined--white": "Dropdown_czyButton--outlined--white__0pNpZ",
                "czyButton--link--white": "Dropdown_czyButton--link--white__NtuCG",
                "czyButton--outlined--grey": "Dropdown_czyButton--outlined--grey__cox9U",
                "czyButton--link--grey": "Dropdown_czyButton--link--grey__q156j",
                "czyButton--outlined--warning": "Dropdown_czyButton--outlined--warning__k9_jL",
                "czyButton--link--warning": "Dropdown_czyButton--link--warning__dFrkN",
                "czyButton--outlined--alert": "Dropdown_czyButton--outlined--alert__OsMxz",
                "czyButton--link--alert": "Dropdown_czyButton--link--alert__AYL2K",
                "czyButton--outlined--success": "Dropdown_czyButton--outlined--success__kjoKD",
                "czyButton--link--success": "Dropdown_czyButton--link--success__jzrWS",
                "czyButton--outlined": "Dropdown_czyButton--outlined__zbIEQ",
                "czyButton--disabled": "Dropdown_czyButton--disabled__Fo0Lm",
                "czyButton--height50": "Dropdown_czyButton--height50__3SzAu",
                "czyButton--height34": "Dropdown_czyButton--height34__A_B8Z",
                "czyButton--height28": "Dropdown_czyButton--height28__H5Xad",
                "czyButton--fullWidth": "Dropdown_czyButton--fullWidth__vGhRj",
                "czyButton--headerIcon": "Dropdown_czyButton--headerIcon__24VZP",
                "czyButton--headerIcon--desktop": "Dropdown_czyButton--headerIcon--desktop__ZvDFy",
                "czyButton--headerIcon--mobile": "Dropdown_czyButton--headerIcon--mobile__z5W6e",
                "czyButton--headerIcon--withLabel": "Dropdown_czyButton--headerIcon--withLabel__AAPew",
                selectComponent: "Dropdown_selectComponent__e0C_2",
                selectButton: "Dropdown_selectButton__kNaYk",
                selectWrapper: "Dropdown_selectWrapper__TdpR7",
                iconExpandSelect: "Dropdown_iconExpandSelect__pIMZn",
                iconCollapseSelect: "Dropdown_iconCollapseSelect__nTNxY",
                dropdownContent: "Dropdown_dropdownContent__k7Pf_",
                dropdownPopper: "Dropdown_dropdownPopper__nek4W",
                dropdownPopperFlipped: "Dropdown_dropdownPopperFlipped__g4zkp",
                multilineSelectOption: "Dropdown_multilineSelectOption__Wx0h1",
                listBox: "Dropdown_listBox__hZZvB",
                selectedOption: "Dropdown_selectedOption__aRWs0",
                "optionUnstyledClasses-disabled": "Dropdown_optionUnstyledClasses-disabled__ziivl",
                "menuItemUnstyledClasses-disabled": "Dropdown_menuItemUnstyledClasses-disabled___yZE1"
            }
        }
    }
]);