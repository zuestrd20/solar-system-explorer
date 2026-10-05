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
