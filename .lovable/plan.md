

# Enhance Landing Page with Video Backgrounds and New Video Components

## Overview
Use the 7 uploaded MP4 videos to transform bland/plain sections of the landing page into visually rich, immersive experiences. Videos will be used as backgrounds, in cinematic showcase components, and in feature highlight sections.

---

## Video Assignment Strategy

The 7 uploaded MP4 files will be copied to `public/videos/` and used as follows:

| Video File | Usage | Section |
|---|---|---|
| `a77e1f2e...mp4` | Hero section full-screen background video | Hero |
| `4b883753...mp4` | "Zero Emissions" sparkles section cinematic background | SparklesPreviewTesla |
| `6538fee0...mp4` | Features CTA "Start Your Trial" card background | FeaturesSection |
| `a70d450c...mp4` | New cinematic showcase section (video + text reveal) | New: VideoShowcase |
| `98f747f1...mp4` | VehicleHeader section ambient background | VehicleHeader |
| `d05a4679...mp4` | New video testimonial/highlight reel section | New: VideoHighlightReel |
| `e3c6743e...mp4` | Map section ambient background overlay | Map |

---

## Changes by File

### 1. Copy Videos to Public Directory
- Copy all 7 MP4 files to `public/videos/` with clean names:
  - `hero-bg.mp4`
  - `emissions-bg.mp4`
  - `features-cta.mp4`
  - `showcase-1.mp4`
  - `vehicle-header-bg.mp4`
  - `highlight-reel.mp4`
  - `map-bg.mp4`

### 2. `src/components/Hero.tsx` -- Replace static image with video background
- Replace the `<img src="/vehicles/model-s-white.jpg">` with a `<video>` element
- Video: autoplay, muted, loop, playsInline
- Keep the gradient overlay for text readability
- Remove the static image fallback or keep as poster

### 3. `src/components/ui/sparkles-demo.tsx` -- Add video to SparklesPreviewTesla
- The "Zero Emissions / Maximum Performance" section is currently just sparkles on pure black
- Add a looping video background behind the sparkles layer
- Lower the video opacity so sparkles remain prominent

### 4. `src/components/ui/vehicle-header.tsx` -- Add ambient video background
- Currently plain text on transparent background -- very bland
- Add a subtle looping video background with heavy gradient overlay
- Keep text centered and readable

### 5. `src/components/FeaturesSection.tsx` -- Video in CTA card
- Replace the static `model-s-white.jpg` image in the "Start Your Trial" card with a looping video
- Video fills the right column with gradient overlay

### 6. `src/components/Map.tsx` -- Video ambient layer behind map
- Add a subtle video layer behind the entire map section
- Low opacity with dark overlay so the map iframe and station cards remain readable

### 7. New Component: `src/components/VideoShowcase.tsx` -- Cinematic scroll-triggered section
- Full-width section with a looping video background
- Overlay with scroll-triggered text reveal using Framer Motion
- Content: brand story or "The Future of Mobility" messaging
- Glass-morphism stats bar at the bottom
- Placed between TeslaCardCarousel and SparklesPreviewTesla in Index.tsx

### 8. New Component: `src/components/VideoHighlightReel.tsx` -- Multi-video feature highlights
- Split-screen or card grid layout
- Each card has a small looping video thumbnail with a title overlay
- Highlights: "Performance", "Sustainability", "Technology", "Community"
- Placed between FeaturesSection and Map in Index.tsx

### 9. `src/pages/Index.tsx` -- Updated section order
```
Hero (video bg)
SearchFilter
VehicleHeader (video bg)
TeslaCardCarousel
VideoShowcase (NEW)
SparklesPreviewTesla (video bg)
TeslaVehiclesParallax
FeaturesSection (video in CTA)
VideoHighlightReel (NEW)
Map (video bg)
```

---

## Technical Details

### Video Element Pattern (reused across all components)
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30"
  poster="/vehicles/model-s-white.jpg"
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

### Key Principles
- All videos are `autoPlay`, `muted`, `loop`, `playsInline` (required for mobile autoplay)
- Opacity kept between 15-40% depending on section to maintain text readability
- Gradient overlays on top of videos for contrast
- Videos load lazily where possible using `preload="none"` on non-hero sections
- Poster images used as fallbacks

### Files to Create
| File | Purpose |
|---|---|
| `public/videos/hero-bg.mp4` | Copied from upload |
| `public/videos/emissions-bg.mp4` | Copied from upload |
| `public/videos/features-cta.mp4` | Copied from upload |
| `public/videos/showcase-1.mp4` | Copied from upload |
| `public/videos/vehicle-header-bg.mp4` | Copied from upload |
| `public/videos/highlight-reel.mp4` | Copied from upload |
| `public/videos/map-bg.mp4` | Copied from upload |
| `src/components/VideoShowcase.tsx` | Cinematic scroll section |
| `src/components/VideoHighlightReel.tsx` | Multi-card video highlights |

### Files to Modify
| File | Change |
|---|---|
| `src/components/Hero.tsx` | Replace static image with video background |
| `src/components/ui/sparkles-demo.tsx` | Add video layer behind sparkles |
| `src/components/ui/vehicle-header.tsx` | Add ambient video background |
| `src/components/FeaturesSection.tsx` | Replace CTA image with video |
| `src/components/Map.tsx` | Add ambient video behind map section |
| `src/pages/Index.tsx` | Add VideoShowcase and VideoHighlightReel to page flow |

