

# Implement B12 Site Design Elements into Unity Fleet App

## Overview
Adapt the key design patterns, imagery, service cards, contact section, and business information from the Unity Fleet B12 staging site into the existing Lovable app, while preserving the premium metallic liquid glass aesthetic already established.

---

## Key Design Elements from B12 Site to Implement

1. **Service Cards Section** -- "Ridesharing", "Vehicle Rentals", "Employee Benefits Package" with image backgrounds and descriptive text
2. **"Discover Unity Fleet" tagline section** -- "Your gateway to autonomous travel / Your Ride OF The Future"
3. **Contact Form Section** -- "Get in touch" with Name, Email, Phone, Message fields + business info sidebar (hours, location, phone, email)
4. **Full-width image hero with overlay text** -- Cinematic vehicle close-ups (wheel/brake, autonomous driving imagery)
5. **CTA Banner** -- "Explore our autonomous fleet services" with dual buttons
6. **Business Hours + Location sidebar** -- Decatur, IL info with hours table

---

## Phase 1: Create New Components

### 1.1 `src/components/ServicesShowcase.tsx` -- Service Cards Section
Inspired by the B12 site's 3-card service layout:
- **Ridesharing** -- Full-width image background card with overlay text, links to `/vehicles`
- **Vehicle Rentals** -- Same pattern, links to `/vehicles`
- **Employee Benefits Package** -- Same pattern, links to `/about`
- Each card: large background image (using existing vehicle images from `public/vehicles/`), glassmorphism overlay with title + description, hover scale effect
- Section header: "Discover Unity Fleet" / "Your Gateway to Autonomous Travel" / italic "Your Ride of The Future"
- Uses Framer Motion for staggered entrance animations

### 1.2 `src/components/ContactSection.tsx` -- Contact Form + Business Info
Split-layout section matching the B12 contact area:
- **Left side**: Contact form with Name, Email, Phone, Message fields using existing glass styling
  - Form validation with `react-hook-form` + `zod`
  - Submit button with loading state
  - Success toast on submission (mock, no backend)
- **Right side**: Business info card with:
  - Phone: +12178271305
  - Email: lambmatt2002@gmail.com
  - Location: Decatur, IL 62525 United States (linked to Google Maps)
  - Hours table (Mon-Fri 7am-7pm, Sat-Sun 8am-6pm)
- Full-width video background (reuse `/videos/map-bg.mp4`) with dark overlay
- Glass-card styling for both form and info panels

### 1.3 `src/components/AutonomousCTA.tsx` -- CTA Banner
Full-width cinematic CTA section:
- Background: video loop from `/videos/showcase-1.mp4` or `/videos/highlight-reel.mp4`
- Bold headline: "Explore Our Autonomous Fleet Services"
- Subtext: "Embrace flexibility -- unlock your potential today!"
- Two buttons: "Get in Touch" (scrolls to contact) and "View Services" (links to `/vehicles`)
- Glass-morphism overlay for readability

---

## Phase 2: Enhance Existing Sections

### 2.1 Update Hero messaging
- Change badge text to "Discover Unity Fleet"
- Update subtitle to include "Your Gateway to Autonomous Travel"
- Add italic tagline "Your Ride of The Future" beneath the main headline

### 2.2 Update Footer contact info
- Update phone to `+12178271305`
- Update email to `lambmatt2002@gmail.com`
- Update address to `Decatur, IL 62525 United States`
- Add business hours to footer

---

## Phase 3: Update Index.tsx Page Flow

Updated section order:
```text
Hero (with updated B12 messaging)
SearchFilter
ServicesShowcase (NEW - 3 service cards)
VehicleHeader (video bg)
TeslaCardCarousel
VideoShowcase
SparklesPreviewTesla (video bg)
TeslaVehiclesParallax
FeaturesSection (video in CTA)
VideoHighlightReel
AutonomousCTA (NEW - cinematic CTA banner)
Map (video bg)
ContactSection (NEW - form + business info)
```

---

## Files Summary

### Files to Create
| File | Purpose |
|---|---|
| `src/components/ServicesShowcase.tsx` | 3-card service offering section with image backgrounds |
| `src/components/ContactSection.tsx` | Contact form + business info with hours |
| `src/components/AutonomousCTA.tsx` | Full-width cinematic CTA banner |

### Files to Modify
| File | Change |
|---|---|
| `src/pages/Index.tsx` | Add 3 new sections to page flow |
| `src/components/Hero.tsx` | Update badge/tagline to match B12 branding |
| `src/components/Footer.tsx` | Update contact info (phone, email, address) |

---

## Technical Details

### ServicesShowcase Card Pattern
```tsx
<motion.div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
  <img src="/vehicles/model-s-white.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  <div className="absolute bottom-0 p-6 z-10">
    <h3 className="text-2xl font-bold text-white">Ridesharing</h3>
    <p className="text-white/70 mt-2">Experience seamless travel...</p>
  </div>
</motion.div>
```

### Contact Form Pattern
- Uses `react-hook-form` with `zod` validation (already installed)
- Glass-card styling with border-bottom input fields (matching B12 style)
- `toast.success()` on submission
- No backend required -- mock submission

### Business Hours Data
```tsx
const hours = [
  { day: 'Monday', open: '7:00am', close: '7:00pm' },
  { day: 'Tuesday', open: '7:00am', close: '7:00pm' },
  // ... through Sunday
];
```

