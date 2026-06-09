# Task 8: Download/Pricing Landing Page

**Date:** 2025-03-06
**Agent:** code-agent
**Status:** Completed

## What was done
Created `/home/z/my-project/download/mtverse-admin/landing/index.html` — a standalone TailAdmin-style download/pricing page for the "mtverse admin" dashboard product.

## Page Structure (5 sections)

1. **Header/Navigation Bar** — Sticky top, white bg, border-b gray-200
   - Left: mtverse admin logo (brand-500 "M" icon + text) with "v1.0" badge
   - Center: Nav links — Components, Download (active/brand-500), Docs, Products (with chevron-down), Resources (with chevron-down)
   - Right: GitHub Stars ("1.2k+ Stars on Github" with star icon), Live Preview dropdown (gray-800 bg), Pricing & FAQ button (brand-500 bg), Login button (border)
   - Mobile: hamburger menu toggle with slide-down animation

2. **Hero Section** — Centered, white bg, py-16/20
   - Title: "Download mtverse admin Now" (text-4xl sm:text-5xl, font-bold, gray-900)
   - Subtitle: "Select your preferred option below..." (text-gray-500, max-w-2xl)
   - Framework pill tabs (horizontally scrollable):
     - "All Together - Bundle" (brand-500 bg, white text) + green "Best Value" badge
     - HTML (orange HTML5 SVG icon), React (blue React icon), Next.js (black icon), Vue.js (green icon), Angular (red icon), Laravel (red icon)
     - Active tab: brand-500 bg, white text; Inactive: gray-100 bg, gray-700 text

3. **Pricing Comparison Section** — py-12/16, white bg
   - Three-column card layout in rounded-xl border container:
     - **Left**: Framework icon (dynamic), title, "1.2k+ Stars on Github", star link, "Key Features" label
     - **Middle (Basic)**: Folder icon, "Basic" label, "mtverse admin Free", "Free Download" button (gray-800 bg)
     - **Right (Premium)**: Crown icon, brand-500 border highlight, "Premium" label, "mtverse admin Pro", "Get Premium - $149" button (brand-500 bg)
   - 15 feature comparison rows with Lucide icons, green checkmarks and gray dashes
   - Bottom CTA row with repeated download buttons

4. **Footer** — Dark gray-900 bg, py-12/16
   - Left: logo + description + social icons
   - Middle Left: Useful Links (Documentation, Download, Changelog, Blog, Components)
   - Middle Right: About (Privacy, Refund, License, Support, Contact)
   - Right: Newsletter with email input + Subscribe button
   - Bottom: Framework icons row + "© 2026 mtverse admin"

5. **JavaScript Interactivity**
   - Framework tab switching (updates icon/title/description in left column)
   - Mobile menu toggle with animation
   - Live Preview dropdown with click-outside-to-close
   - Sticky header shadow on scroll
   - Back-to-top button
   - Smooth scroll for anchors
   - Newsletter subscribe feedback

## Technology
- Tailwind CSS CDN with custom brand color config
- Google Fonts (Outfit)
- Lucide Icons CDN
- Vanilla JavaScript
- SVG framework logo icons
- Responsive design (mobile-first)

## File size
- 891 lines, ~53KB
