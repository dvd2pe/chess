# Verifica runtime del mirror Chess Free (build 375)

**Data:** 21/11/2026 — verifica eseguita con browser headless (Chromium via Playwright) servendo il mirror attraverso la route di sola lettura `/game-full` del portal (`/home/z/my-project/src/app/game-full/[[...path]]/route.ts`), che inietta solo `<base href="/game-full/">` nell'HTML senza alterare i file del mirror.

## Risultati

| # | Check | Esito |
|---|---|---|
| 1 | Boot: pagina caricata, titolo **Chess Free** | OK |
| 2 | Menu principale completo: Play with computer, Play online, Play online with friends, Play together, Solve puzzles, Shop, Bonuses, Rules, Profile, Leaders, Design, Chat | OK |
| 3 | "Play with computer" avvia la partita; scacchiera 8x8 renderizzata con entrambi gli eserciti | OK |
| 4 | Pezzi renderizzati come sprite **base64 embedded nel bundle** (`data:image/webp;base64,...` su `data-figure-type`): nessun file skin esterno richiesto per il gioco base | OK |
| 5 | Mossa umana **e2–e4** accettata; AI ("Nort", livello 100) risponde **a6**; lista mosse `1 | e4 | a6` | OK |
| 6 | Richieste di rete fallite (4xx/5xx) durante boot + menu + partita: **0** | OK |

## Nota sulle 644 `missing_refs` del report mirror

Le stringhe `../../packages/chess-board/src/images/chess/...(boards|figures)/...` presenti nel bundle (e elencate in `scripts/mirror_report.json`) **non vengono mai richieste a runtime** (0 richieste su `packages/chess-board`). Sono i percorsi del monorepo sorgente originale rimasti in un catalogo dati: gli asset effettivamente usati sono gli sprite hashed già presenti in `assets/` oppure embedded base64. Il mirror è **completo ai fini di esecuzione**.

Unici file CDN non recuperati (non bloccanti, non richiesti in boot/partita): 4 mp3 di musica di sottofondo (`alexander-nakarada-untold-stories.mp3`, `keys-of-moon-courage-and-willpower.mp3`, `le-gang-lay-on-the-couch-all-day.mp3`, `ron-gelinas-chillout-lounge-soul-searching.mp3`) e `poki-privacy.html`.

## Come eseguire il mirror in locale

```bash
# opzione 1 — server statico diretto
cd repo-chess/audit-extracted/chess-free.game-files.crazygames.com/chess-free/375
python3 -m http.server 8000    # → http://localhost:8000

# opzione 2 — dal portal (repo-chess/ accanto al progetto Next.js)
npm run dev                    # → http://localhost:3000/game-full
```

Nota: l'overlay "Fullscreen banner" all'avvio è il fallback ads GamePush integrato nel gioco; si chiude con "CLOSE AD [X]" e non impedisce il gioco.
