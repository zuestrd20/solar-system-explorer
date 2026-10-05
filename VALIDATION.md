# Verification — cosmic-scale expansion, 2026-10-05

## Passed locally
- Vite production build with relative `./` base and self-contained offline HTML generation.
- 13/13 Node/jsdom tests, including all original solar-system tests.
- Seven cosmic data stages, official citations, diameter/separation/observable-radius definitions.
- Exact linear Earth-model calculations: 1 cm Earth → 117.4 m to Sun, about 3.53 km to Neptune's orbit, about 31,481 km Sun–Proxima separation.
- Deterministic finite geometry, at most 1,500 points per layer.
- All seven Canvas fallback drawing paths exercised with a mocked 2D context; actual pixels are not established by this test.
- Direct jumps, slider preview versus committed history, previous/next endpoints, keyboard/Home/End, reset, return to original solar section.
- Browser Back restores both cosmic scale and original planet state; invalid URL defaults safely.
- Reduced-motion preference and recalculation of model-Earth ruler; original body selection/comparison preserved.

## Visual verification limits
- Runtime disallows local Chromium launch due to process/socket restrictions. No local desktop/mobile screenshots.
- Actual WebGL2 shader appearance, 3D camera transitions, GPU context loss and touch scrolling require browser verification. Unit tests are not equivalent to GPU or touch QA.
- The earlier version's published 1165px desktop 2D fallback was verified. This expansion must be reviewed on the updated public URL after deployment; old screenshots do not validate new content.

## Science and media
- Independent official NASA/JPL source research in SOURCES.md and COSMIC_SOURCES.md.
- All 3D/2D surfaces, star points and galaxy shapes are original programmatic teaching diagrams, not photographs or precise maps.
- Scale transitions are explicitly separate illustrative layers. Heliosphere, planetary region and Oort cloud are not conflated. Observable radius, light-travel time and age are distinguished.

## Build notice
- Vite emits a non-blocking size notice for the bundled Three.js client. No external CDN or network assets are needed for the offline file.

## Published expansion verification

- Public URL: https://zuestrd20.github.io/solar-system-explorer/
- Runtime source commit: 8dd198d3964a595286faeece0fa682da7ae4aad4.
- Exact deployed gh-pages commit: 17c09834e467ca386ac6b03f6223013725bb12aa; Pages workflow 37308695962 succeeded.
- All 29 source files and all 5 dist files matched remote SHA/size; all 5 public HTTP assets matched local hashes.
- Cloud Chrome at 1165px: WebGL disabled by the environment; Canvas2D final observable-universe layer visually inspected, no horizontal overflow.
- Public UI passed direct layer jumps, slider Home/Arrow controls, Back, Earth ruler at 1.1 cm, End/reset, and return to original solar-system explorer.
- Actual GPU rendering and mobile viewport/touch remain unverified. Published fallback tests do not claim GPU validation.

## Continuous Earth-anchored zoom revision — 2026-10-05, 12:51 UTC

- 21/21 tests pass, including new deterministic animation-clock tests and Canvas2D render integration with recorded arc radii.
- Intermediate frames demonstrably change geometric scale and Earth radius; reversal begins at the current value, rapid retarget preserves position, reset/Back cancel old motion, reduced-motion immediately resolves targets.
- Shared Earth anchor and matching Sun geometry across neighboring solar layers verified mathematically.
- Vite build and offline generation pass. All prior content/ruler/comparison/history tests retained.
- Public visual verification for this new animation is pending deployment. Prior expansion screenshots do not validate this animation revision. Real GPU and mobile remain unverified.
