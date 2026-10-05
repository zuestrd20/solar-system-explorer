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
