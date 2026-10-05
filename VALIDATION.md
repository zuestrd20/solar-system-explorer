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

### Published continuous-animation verification

- Runtime main commit eb869a48be9cc26dff6b625267a3d97e8d8e6257; gh-pages commit 8c0e0e56cad9956dd32a1cfc5ce9fa8c2156c4c4. Pages workflow 37312540868 succeeded.
- All 32 source files and 5 dist files matched remote SHA/size; all 5 public HTTP assets returned 200 with matching hashes.
- Public Cloud Chrome Canvas2D: two intermediate screenshots visibly show decreasing Earth radius, with measured progress 0.0002 → 0.0596 → 0.2172.
- Mid-animation reversal verified at progress 0.0764 → 0.0694 with target 0. Rapid retarget preserved an intermediate position; reset yielded progress 0 / moving false, Back restored progress 2 / moving false.
- Continuous slider step 0.01, return to solar explorer, Mars selection, and all three comparison metrics passed. No horizontal overflow at 1165px.
- GPU rendering and mobile viewport/touch remain unverified. Canvas2D animation was visually verified; this does not imply WebGL validation.

## Galaxy groups and cosmic-web revision — 2026-10-05, 16:12 UTC

- Actual user screenshot inspected: previous local-group view contained only three sparse point clouds.
- New local group has recognizable procedural galaxy discs and dwarf-galaxy context; two new stages show neighboring groups/cluster and the cosmic web.
- Shared procedural glyphs implemented in Canvas2D and WebGL sprite paths.
- Node tests execute the actual Three.js group builder and validate galaxy sprites, alpha/depth settings, finite transforms and filament geometry without a GPU. This is code/geometry validation, not a claim of GPU rendering.
- Public visual QA and final full-test results will be recorded after release.

- Full build/offline and 25/25 tests passed for this revision. Coverage includes all nine fallback stages, existing astronomy values, continuous tween/reversal/reset/Back, original planet controls, local-group glyph count, neighbor labels/classification, cosmic-web deterministic geometry, and actual Three.js sprite/line construction.

### Published galaxy-group revision: verified scope and remaining limits

- Runtime main commit cc57a0d39ab83bd7efec7dd52c4eadbd8813cf18; gh-pages commit a3287e012af1bddfc207eec19867eb65d54d3469. Pages workflow 37339392591 succeeded.
- All 36 source files and 5 dist files matched remote SHA/size.
- Public cloud-browser Canvas2D local-group stage was visually inspected: three clearly visible disc-shaped main galaxies and surrounding dwarf-galaxy context. Neighbor stage loaded as 07/09.
- Further browser QA was denied by the tool approval layer. The exact call was retried once with the user's authorization evidence and remained denied; no bypass route was attempted.
- Consequently, this release's public cosmic-web stages 7/8, animated reversal regression, mobile view and real GPU rendering were not visually verified. Their source/geometry/automated checks passed, but those do not replace public visual QA.
- The separate public-HTTP asset sweep was cancelled before a complete report, so no complete public HTTP hash match is claimed for this revision. Remote repository hashes and Pages CI were verified as stated above.
