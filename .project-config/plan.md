
# Clearance Giant Website Revamp Plan

## Overview
This plan addresses four key requirements:
1. Update color scheme to match the original red and black palette
2. Add navigation with pages matching the original site structure
3. Create a Blog page that opens in a new tab with SEO optimization
4. Fix button contrast issues on "Browse Deals" and "Email Us" buttons

---

## 1. Color Scheme Update

### Current Issue
The current design uses navy blue (`#1e293b`) as the dark color. The original Clearance Giant site uses pure black or near-black for backgrounds.

### Changes Required
**File: `src/index.css`**
- Change `--navy` from `222 47% 17%` (navy blue) to `0 0% 0%` (pure black)
- Keep `--primary` as red (`#e53935`) - this matches the original
- Update gradient definitions to use black instead of navy
- Ensure dark backgrounds use true black for the header and hero sections

---

## 2. Navigation Structure

### Current State
The header only has anchor links to sections on the same page (How It Works, Benefits, Brands, etc.)

### Required Navigation
Match the original site:
- **About Us** → `/about-us`
- **Contact Us** → `/contact-us`
- **Sell to Us** → `/sell-to-us`
- **Buy From Us** → `/buy-from-us`
- **Blog** → Opens `https://blogs.clearancegiant.com/` in new tab

### Files to Create/Modify

**New Pages:**
- `src/pages/AboutUs.tsx` - Company information page
- `src/pages/ContactUs.tsx` - Dedicated contact page
- `src/pages/SellToUs.tsx` - For sellers wanting to sell excess stock
- `src/pages/BuyFromUs.tsx` - For buyers wanting to purchase wholesale

**Modifications:**
- `src/App.tsx` - Add routes for new pages
- `src/components/Header.tsx` - Update navigation with page links and external Blog link (target="_blank")

---

## 3. Blog Page Implementation

### Approach
Since the blog is hosted externally at `https://blogs.clearancegiant.com/`, we will:

1. Add "Blog" as an external link in the navigation that opens in a new tab
2. The link will use `target="_blank"` and `rel="noopener noreferrer"` for security

### Why External Link?
- The blog is a separate WordPress installation
- Fetching and displaying blog content would require a backend service
- Opening in a new tab maintains user experience while keeping them on the blog platform

---

## 4. Button Contrast Fixes

### Current Issues Identified

**Hero.tsx - "Browse Deals" Button (Line 79-86):**
```tsx
<Button
  variant="outline"
  className="border-white/30 text-white hover:bg-white/10"
>
```
- On hover, background becomes very light (`white/10`) but text stays white - low contrast
- Button is nearly invisible against the dark background on hover

**Contact.tsx - "Email Us" area:**
- Similar contrast issues with links/buttons on dark backgrounds

### Proposed Fixes

**Browse Deals Button:**
- Change to solid background with good contrast
- Use secondary color (blue) as background: `bg-secondary text-white hover:bg-secondary/90`
- OR use white background with dark text: `bg-white text-navy hover:bg-white/90`

**Email Button/Links:**
- Ensure all interactive elements have sufficient contrast
- Use the secondary blue color for email-related CTAs
- Add visible hover states

---

## Technical Implementation Summary

### Files to Create (4 new files)
1. `src/pages/AboutUs.tsx`
2. `src/pages/ContactUs.tsx`
3. `src/pages/SellToUs.tsx`
4. `src/pages/BuyFromUs.tsx`

### Files to Modify (4 files)
1. `src/index.css` - Update navy to black color
2. `src/App.tsx` - Add new routes
3. `src/components/Header.tsx` - Update navigation structure
4. `src/components/Hero.tsx` - Fix button contrast

### Page Structure for New Pages
Each new page will include:
- Header component (shared)
- Hero section with page-specific content
- Relevant content sections from the main page (reorganized)
- Contact CTA section
- Footer component (shared)

---

## Visual Changes Summary

| Element | Before | After |
|---------|--------|-------|
| Dark backgrounds | Navy blue (#1e293b) | True black (#000000) |
| Browse Deals button | White outline, invisible on hover | Solid white/blue background, visible text |
| Navigation | Section anchors only | Full page navigation + external Blog |
| Blog link | Not present | Opens new tab to blogs.clearancegiant.com |
