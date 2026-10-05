# Verification, 2026-10-05

## Passed
- Vite production build, relative base path for GitHub Pages.
- Offline self-contained HTML generation; no external textures/fonts/API required.
- 7 Node/jsdom tests: all 8 planet records and NASA sources; orbit radius/period invariance; closed finite orbit geometry; exact linear ratios; no-WebGL full 2D fallback; repeated body selection and all comparison metrics; invalid query and browser Back selection restoration.
- All scientific facts and numeric sources independently researched against NASA/JPL. Source definitions and visual-model limitations displayed on site.

## Not visually verified locally
- The container's Chromium cannot start due to its process/socket restrictions, including one reviewed attempt outside the shell sandbox. No local desktop/mobile screenshots were obtained.
- WebGL2 rendering, shader appearance, GPU context loss, pointer picking, and camera motion remain unverified on a real GPU. Static geometry tests do not prove GPU rendering quality.
- Desktop/mobile layout must be checked on the authorized public Pages URL through the cloud browser after deployment. Cloud browser without WebGL2 verifies only the 2D fallback and layout, not the 3D renderer.

## Non-blocking build notice
- Vite warns that the Three.js bundle exceeds 500 kB uncompressed (~133 kB gzip). This is expected for the bundled renderer and avoids third-party CDN dependencies.

## Public deployment verification

- Live URL: https://zuestrd20.github.io/solar-system-explorer/
- GitHub Pages successful build for exact gh-pages commit a2f7945078a2681a7092f3bba8ce390b509376c6.
- Publisher verified SHA and size for all 23 source files and all 5 dist files against uploaded content.
- Cloud Chrome at 1165px viewport: WebGL disabled by environment, automatically displayed complete 2D fallback. Screenshot inspected without horizontal overflow; Mars selection, all three comparison controls, and Back restoration passed.
- Mobile viewport and real WebGL2/GPU appearance remain unverified. No claim is made that 3D rendered successfully in this environment.
