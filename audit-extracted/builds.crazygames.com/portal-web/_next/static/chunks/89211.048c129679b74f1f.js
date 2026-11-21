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
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "09f7ad05-5e58-4ab7-8308-3410289de873", e._sentryDebugIdIdentifier = "sentry-dbid-09f7ad05-5e58-4ab7-8308-3410289de873")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [89211], {
        89211: e => {
            e.exports = {
                messages: JSON.parse('{"tag.faq.faq":["FAQ"],"tag.faq.mobile":["What are the best ",["title"]," to play on mobile phones and tablets?"],"tag.faq.popular":["What are the most popular ",["title"],"?"],"tag.faq.whatAre":["What are ",["title"],"?"],"tag.faq.whatAreSomeUnderrated":["What are some underrated ",["title"],"?"],"tag.fillergrid.title":["Hot games"],"tag.head.metaDescription":["Play the Best Online ",["title"]," for Free on CrazyGames, No Download or Installation Required. \uD83C\uDFAE Play ",["game"]," and Many More Right Now!"],"tag.head.title":[["title"]," \uD83D\uDD79️ Play on CrazyGames",["pageNumber","select",{"1":[" "],"other":[" - Page ",["pageNumber"]]}]],"tag.leftcolumn.new":["New ",["title"]],"tag.leftcolumn.related":["Related Games"],"tag.leftcolumn.top":["Top ",["title"]]}')
            }
        }
    }
]);