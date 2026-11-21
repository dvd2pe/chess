/*
  POST-OPEN player (2026-11-18 round). Shared by every size: _build/post-open.js copies
  this file into each one unchanged, so edit it HERE and rebuild, never in an ad folder.
  Per-size facts (dimensions, how far the background pushes in, the CTA files) come from
  FRAMES, written into each index.html by the build.

  The motion MATCHES THE :30 AV SPOT, DST_30TV_Split-BestPlay_V5 (2026-11-18: "We need
  to match the movement and pacing of the :30 AV exactly... Just make them :30s", then
  V5 with "Has to mimic this exactly"). V5 is byte-identical to Brian's
  _Motion_Reference.mp4, the file his art was cut from. The ad is 30s, like the spot.
  The background pushes in steadily the whole time, and ten cards fade in and out on the
  spot's own cues: eight critics under "THE BEST PLAY OF THE YEAR.", then WINNER, then
  ESSENTIAL, then the endframe holds. Each card fades fully out, headline included,
  before the next comes in, as in the spot. The headline is one shared image that fades
  with each critic's name.

  The cues below were measured off V5 frame by frame, in seconds from its first frame
  (V5 has no slate). Each fade is a straight-line fit through the middle of the spot's
  own ramp -- they are linear to within 1% -- extrapolated to its start and end. Don't
  retime by eye: if the spot changes, re-measure it the same way (see "POST-OPEN" in
  CLAUDE.md).

  Earlier 15s cuts (every quote fading at 1.2s each, then "BEST PLAY holds") are kept at
  the git tag postopen-970x250-choices; FRAMES.holdHeadline still gives the held
  headline over these cues if it is ever wanted again.
*/
var BLT = (function() {

    // [fade-in start, fully on, fade-out start, gone], seconds from the spot's first frame
    var CUES = [
        [0.176, 0.736, 2.232, 2.728], // Vincentelli
        [3.014, 3.573, 5.134, 5.629], // Jones
        [5.917, 6.475, 7.904, 8.399], // Feldman
        [8.685, 9.244, 11.107, 11.604], // Shaw
        [11.888, 12.447, 13.944, 14.441], // Dziemianowicz
        [14.724, 15.282, 16.782, 17.278], // Cote
        [17.558, 18.118, 19.551, 20.049], // Cunningham
        [20.327, 20.887, 22.355, 22.852], // Oleksinski
        [23.129, 23.646, 24.994, 25.366], // WINNER
        [25.450, 26.045, 27.667, 28.084], // ESSENTIAL
    ];
    var EF_CUE = [28.003, 28.580]; // endframe fade in; it then holds to the end

    var HOLD = !!FRAMES.holdHeadline;
    var DURATION = FRAMES.duration;
    var GATE_LEAD = 0.15; // check an image has arrived this long before it is needed
    var MAX_PARALLEL = 3;

    var $ad = document.getElementById('adContainer');
    var $ = function(s) {
        return $ad.querySelector(s);
    };
    var $$ = function(s) {
        return Array.prototype.slice.call($ad.querySelectorAll(s));
    };

    var bgs = $$('.bg'),
        headline = $('.headline'),
        names = $$('.name'),
        cards = $$('.card');
    var endframe = $('.endframe'),
        ctaWrap = $('.cta-wrap'),
        credit = $('.credit');
    // Some sizes (the x90s, R2) have a second photo for the endframe, with the people
    // laid out around it; it fades in with the endframe, over the quotes' photo. It is
    // on the same push as the first, so the zoom carries straight through the change.
    var bgEnd = $('.bg-end');

    // ---- loading -------------------------------------------------------------------
    // The first frame (background, headline, first critic, credit) is in the markup with
    // a real src. Everything else is data-src, loaded here in playback order; `gate`
    // pauses the timeline if something is not in by the time it is needed, and the
    // onload resumes it. On a slow connection the ad waits rather than showing a gap.
    var waitingFor = null;
    var tl = new TimelineMax({
        paused: true
    });

    function arrived(img) {
        img.__ok = true;
        if (waitingFor === img) {
            waitingFor = null;
            tl.play();
        }
    }

    function gate(img) {
        if (!img.__ok) {
            waitingFor = img;
            tl.pause();
        }
    }

    function preload() {
        var queue = $$('img[data-src]'),
            inFlight = 0;
        // the endframe's photo sits early in the markup (under the cards) but is needed
        // last, so it waits in the queue until just before the endframe
        if (bgEnd) {
            var late = Array.prototype.slice.call(bgEnd.querySelectorAll('img[data-src]'));
            queue = queue.filter(function(img) {
                return late.indexOf(img) < 0;
            });
            var at = queue.indexOf(endframe);
            Array.prototype.splice.apply(queue, [at < 0 ? queue.length : at, 0].concat(late));
        }
        (function next() {
            while (inFlight < MAX_PARALLEL && queue.length) {
                var img = queue.shift();
                inFlight++;
                img.onload = img.onerror = (function(el) {
                    return function() {
                        inFlight--;
                        arrived(el);
                        next();
                    };
                }(img));
                img.src = img.getAttribute('data-src');
            }
        }());
    }

    // ---- timeline -------------------------------------------------------------------
    function fadeIn(els, at, dur) {
        [].concat(els).forEach(function(el) {
            var imgs = el.tagName === 'IMG' ? [el] : Array.prototype.slice.call(el.querySelectorAll('img'));
            imgs.forEach(function(img) {
                tl.call(gate, [img], Math.max(0, at - GATE_LEAD));
            });
        });
        tl.to(els, {
            duration: dur,
            autoAlpha: 1,
            ease: 'none'
        }, at);
    }

    function fadeOut(els, at, dur) {
        tl.to(els, {
            duration: dur,
            autoAlpha: 0,
            ease: 'none'
        }, at);
    }

    // the ad opens on the photo alone (plus its credit), as the spot does; card 1 fades
    // in on its cue, 0.18s later. Its files are still in the first load, so it is ready.
    tl.set(bgs.concat([credit]), {
        autoAlpha: 1
    }, 0);
    // the push: from bgStart to bgScale, both relative to Brian's framing (see post-open.js).
    // One background image, or on the leaderboards one per photo panel, each scaling about
    // its own face (its transform-origin is set in the markup).
    tl.fromTo(bgs, {
        scale: FRAMES.bgStart || 1
    }, {
        duration: DURATION,
        scale: FRAMES.bgScale,
        ease: 'none'
    }, 0);

    // The ten cards in order. A critic card is the shared headline plus that name -- or,
    // when the headline holds, the name alone, with the headline coming in with the first
    // critic and going out with the last.
    var sequence = names.map(function(n, i) {
        if (!HOLD) return {
            fadeIn: [headline, n],
            fadeOut: [headline, n]
        };
        return {
            fadeIn: i === 0 ? [headline, n] : [n],
            fadeOut: i === names.length - 1 ? [headline, n] : [n]
        };
    }).concat(cards.map(function(c) {
        return {
            fadeIn: [c],
            fadeOut: [c]
        };
    }));
    if (sequence.length !== CUES.length) throw new Error('expected ' + CUES.length + ' cards, found ' + sequence.length);
    sequence.forEach(function(card, i) {
        var c = CUES[i];
        fadeIn(card.fadeIn, c[0], c[1] - c[0]);
        fadeOut(card.fadeOut, c[2], c[3] - c[2]);
    });
    fadeIn([endframe, ctaWrap].concat(bgEnd ? [bgEnd] : []), EF_CUE[0], EF_CUE[1] - EF_CUE[0]);
    tl.set({}, {}, DURATION); // pad the timeline out to the full ad length

    // ---- start ----------------------------------------------------------------------
    // Show the ad once its first frame has arrived, so it never opens on a half-drawn one.
    function init() {
        var first = $$('img[src]'),
            left = first.length;
        var go = function() {
            if (--left > 0) return;
            $ad.classList.add('ready');
            preload();
            tl.play();
        };
        first.forEach(function(img) {
            img.__ok = true;
            if (img.complete && img.naturalWidth) go();
            else img.addEventListener('load', go), img.addEventListener('error', go);
        });
        $ad.addEventListener('click', exitHandler);
        $ad.addEventListener('mouseenter', function() {
            $ad.classList.add('hover');
        });
        $ad.addEventListener('mouseleave', function() {
            $ad.classList.remove('hover');
        });
    }

    function exitHandler() {
        window.open(clickTag, '_blank');
        tl.time(tl.duration());
    }

    return {
        init: init
    };

}());

document.addEventListener('DOMContentLoaded', BLT.init);