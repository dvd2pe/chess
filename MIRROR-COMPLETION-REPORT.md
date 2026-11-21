# MIRROR COMPLETION REPORT — Chess Free build 375

Data completamento: 2026-11-21
Build: `bundle-03ebca09` (CrazyGames, `chess-free.game-files.crazygames.com/chess-free/375/`)

## Risultato

Il mirror del gioco era incompleto: il bundle principale referenziava ~120 chunk lazy e centinaia di asset assenti. Tutte le risorse mancanti sono state scaricate dal CDN originale (stesso build ancora servito, hash identico).

| Metrica | Prima | Dopo |
|---|---|---|
| File del gioco locale | 6 | **671** |
| Dimensione gioco | ~6 MB | **~18 MB** |
| Chunk JS lazy (modali, traduzioni, engine) | 0 / ~120 | **tutti** |
| Sprite immagini pezzi (hashed) | 0 | **492** |
| Audio (mp3/wav) | 2 | **tutti quelli serviti dal CDN** |
| Engine AI (`engine.js` + `engine.wasm.js`) | 0 | **presenti** (root del build) |
| Pagine privacy (`cg-privacy.html`) | 0 | **presente** |

## Verifica runtime (headless browser, server locale)

Avvio locale di `index.html` con server statico:

- **Il gioco si avvia**: menu principale completo renderizzato (Play with computer, Play online, Play online with friends, Play together, Solve puzzles, Bonuses, Rules, Profile, Leaders, Design, Chat).
- **Modali lazy funzionanti**: "Daily bonus" e "Choice of opponent" (21 avversari AI con avatar e rating 100–3000) renderizzati correttamente.
- **Engine AI**: worker `engine.js`/`engine.wasm.js` avviati dal bundle (errori di handshake minori in console relativi al protocollo UCI, non bloccanti per l'avvio).
- **Nessun 404 su file locali** tra le ~97 richieste di rete: tutte le risorse richieste dal runtime sono servite dal mirror.

## Asset residui NON scaricabili (giustificati)

1. **639 percorsi `../../packages/chess-board/src/images/...`** (board `b.png/w.png`, figure per design): sono riferimenti a percorsi sorgente usati solo in dev / da altre piattaforme. Il build CrazyGames serve le immagini tramite gli **sprite hashed** (`k-DytD1lOO.webp`, `b-8WtLrPBw.png`, … via `new URL(..., import.meta.url)`) — tutti scaricati. Verifica runtime conferma che il gioco non richiede mai quei percorsi.
2. **4 brani musica di sottofondo** (`ron-gelinas-...mp3`, `keys-of-moon-...mp3`, `le-gang-...mp3`, `alexander-nakarada-...mp3`): serviti da storage esterno (S3/GamePush), non dal CDN del build. Non critici.
3. **`poki-privacy.html`**: usata solo sulla piattaforma Poki (404 sul CDN CrazyGames — non esiste).
4. **`favicon.ico`**: assente sul CDN (404 anche online).

## Come avviare il mirror localmente

```bash
cd audit-extracted/chess-free.game-files.crazygames.com/chess-free/375
python3 -m http.server 8765
# apri http://localhost:8765/index.html
```

Nota: le funzionalità online (matchmaking, chat globale, cloud save) puntano ai servizi esterni originali (netlib.poki.io, gamepush, user-service.myhd.info) e funzionano solo finché quei servizi sono raggiungibili; la modalità vs computer e l'interfaccia locale sono completamente offline.
