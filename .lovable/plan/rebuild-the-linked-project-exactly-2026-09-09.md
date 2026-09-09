# Rebuild the linked project exactly

The linked project is public and I downloaded it. It is built on the same foundation as this project, so it can be reproduced exactly — same pages, same text, same colours, same fonts, same interactive behaviour.

## What the site is

A single interactive page explaining "The Central Bank — Standard Reserve". One switch flips between two states, expansion and contraction, and five sections react to it:

- Bank canvas (main visual)
- Issuance rate
- Fee routing
- Licenses
- Exits

## What I will copy over, unchanged

1. The five section pieces of the page.
2. The home page itself, with its exact wording, headings, and the expansion/contraction switch.
3. The visual style: warm paper background, ink text, green expansion / red contraction accents, square-ish corners, the Archivo and IBM Plex Mono typefaces.
4. The Google Fonts loading so the typefaces render identically.
5. The page title and description used for search and link previews.

Everything else in the two projects is already byte-identical: the shared building blocks, the setup files, and the installed packages. Nothing needs to be added or removed there.

## Technical detail

- Copy `src/components/{BankCanvas,IssuanceRate,FeeRouting,Licenses,Exits}.tsx` verbatim.
- Replace `src/routes/index.tsx` with the source version (includes its own `head()`).
- Replace `src/styles.css` with the source version (adds `--paper`, `--ink`, `--hairline`, `--expansion`, `--contraction`, `--sand`, font tokens, `.label` base layer, and the `--radius: 0.25rem` scale).
- Add the two `preconnect` links plus the Google Fonts stylesheet `<link>` to `head().links` in `src/routes/__root.tsx`; leave the rest of that file untouched.
- `package.json`, `vite.config.ts`, `components.json`, `src/router.tsx`, `src/start.ts`, `src/server.ts`, `src/lib/*`, and all 46 `src/components/ui/*` files are already identical — no changes.
- No database, auth, or server logic exists in the source, so there is nothing backend to migrate.

## Verification

Build clean, then load the page and toggle the switch to confirm both states render as in the original.
