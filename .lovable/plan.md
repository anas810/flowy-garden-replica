# Animate a running man leaving the closed bank

## What changes

Only `src/components/Exits.tsx`. Everything else on the page stays untouched.

## What will be added

- Next to the existing closed-bank icon (the bank with the cross on top), an animated stick-figure man runs out of the bank, toward the right, and slowly fades away until he disappears. The run + fade repeats in an endless loop.
- The animation is pure SVG + CSS inside the component: the figure cycles running leg/arm poses while translating away from the bank door and fading from full opacity to 0, then snaps back to the bank and starts again.
- Colors follow the state switch exactly as they do now:
  - Expansion → man, bank, and the word "cheap" all in green (`var(--expansion)`).
  - Contraction → man, bank, and the word "priced by the crowd" all in red (`var(--contraction)`).
- People who prefer reduced motion get a static frame (no running loop), matching how the rest of the page already behaves.

## Technical detail

- Edit only `src/components/Exits.tsx`: add an SVG stick figure (head circle + line limbs) grouped in a `<g>` with CSS keyframes for a run cycle (limb rotation) and a second keyframe track for translate-right + opacity fade, ~2.5s loop with `animation-iteration-count: infinite`, `stroke` set to the state accent color.
- Existing reduced-motion `<style>` block in the component is extended to freeze the new animations.
- No new packages, no other files touched.

## Verification

Build clean, then load the preview and flip the Positive/Negative switch to confirm: green running man with "cheap" on expansion, red running man with "priced by the crowd" on contraction, and the loop runs continuously.
