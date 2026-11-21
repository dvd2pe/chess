! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var r = arguments[a];
                if (null != r)
                    for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:crazygames-portal": !0
        });
        var a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1f79bb3c-bea8-441d-af3d-065d4c56944c", e._sentryDebugIdIdentifier = "sentry-dbid-1f79bb3c-bea8-441d-af3d-065d4c56944c")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [88936], {
        88936: e => {
            e.exports = {
                messages: JSON.parse('{"carousels.category.showAll":["Show all"],"carousels.desktopOnly.title":["Computer games"],"carousels.intentSelector.title":["Pick a vibe"],"carousels.popularTags":["Popular Tags"]}')
            }
        }
    }
]);