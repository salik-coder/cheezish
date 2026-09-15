# Cheezish — Requirements

## 1. Purpose

This document defines the functional and non-functional requirements for Version 1 of the Cheezish demo restaurant website.

Requirements are identified with IDs so implementation and testing can reference them directly.

---

# 2. Global Requirements

## GLOBAL-01 — Pages

The website must contain:

- Home
- Menu
- About
- Gallery
- Contact

Acceptance:
- All five pages are reachable through working navigation.
- No required page returns a 404 error.

---

## GLOBAL-02 — Navbar

The desktop navbar must contain:

CHEEZISH | Home | Menu | About | Gallery | Contact | ORDER NOW

Requirements:
- CHEEZISH logo links to Home.
- ORDER NOW must remain visually prominent.
- Navigation must work using keyboard controls.
- Navbar should begin transparent over the cinematic hero where appropriate.
- Navbar may transition to a dark/glass surface after scrolling.

Acceptance:
- All navigation links work.
- Keyboard focus is visible.
- Navbar does not overlap or clip content.

---

## GLOBAL-03 — Responsive Design

The website must work from approximately 320px wide mobile screens through large desktop screens.

Acceptance:
- No unintended horizontal scrolling.
- No clipped headings or controls.
- Buttons remain usable on touch screens.
- Layout adapts rather than simply shrinking the desktop design.

---

## GLOBAL-04 — Accessibility

The website must provide:

- Semantic HTML
- Logical heading structure
- Keyboard navigation
- Visible focus states
- Accessible form labels
- Appropriate text/background contrast
- Alt text for meaningful images
- prefers-reduced-motion support

Acceptance:
- Main navigation can be used without a mouse.
- Interactive controls expose meaningful labels.
- Reduced-motion users can access all important content.

---

## GLOBAL-05 — Order CTA

ORDER NOW is the primary website action.

Order CTAs may offer demo links for:

- Uber Eats
- Deliveroo
- Just Eat

Acceptance:
- Order CTA is easy to locate.
- Demo links must not pretend to be real Cheezish delivery listings.
- Broken or fake production URLs must not be used.

---

## GLOBAL-06 — Demo Content

Cheezish is a fictional portfolio project.

Do not present fictional information as real business information.

Do not invent:

- Real customer reviews
- Awards
- Business statistics
- Real delivery partnerships
- Real restaurant achievements
- Real address
- Real phone number
- Legal claims

Acceptance:
- Demo information is clearly identifiable as demo content where necessary.

---

# 3. Home Page Requirements

## HOME-01 — Cinematic Intro

The Home page should begin with a dark cinematic introduction.

Desired sequence:

1. Dark screen
2. Subtle Cheezish-colored particles
3. CHEEZISH wordmark reveal
4. Transition into hero scene

Requirements:
- Intro must not block the user unnecessarily.
- Reduced-motion mode must provide a simplified version.
- Loading state should avoid a blank white screen.

Acceptance:
- Intro completes successfully.
- User can still access the page if advanced animation fails.

---

## HOME-02 — 3D Hero Burger

The main hero should include a premium 3D burger.

Hero headline:

BITE INTO
ANOTHER DIMENSION

Primary CTA:
ORDER NOW

Secondary CTA:
VIEW MENU

Desired 3D elements:

- Slow burger motion
- Cinematic lighting
- Atmospheric depth/fog
- Subtle particles
- Controlled camera movement
- Floating ingredient labels

Acceptance:
- Hero content remains readable.
- CTA remains clickable.
- 3D does not cover required text.
- Mobile fallback remains usable.

---

## HOME-03 — Ingredient Explosion

The hero burger should support a scroll-controlled ingredient separation sequence.

Possible ingredient layers:

- Top brioche bun
- House sauce
- Cheddar
- Smash patty
- Cheddar
- Smash patty
- Pickles
- Bottom bun

Desired behavior:

- Ingredients separate progressively.
- Camera may travel between layers.
- Ingredient labels may appear.
- Burger reassembles after the sequence.

Acceptance:
- Animation responds smoothly to scrolling.
- Reverse scrolling should not permanently break the model state.
- Reduced-motion mode must use a simplified presentation.

---

## HOME-04 — Signature Burger Showcase

Display at least three demo burger concepts:

1. The Cheezish
2. Double Melt
3. Inferno

Each item should include:

- Name
- Short description
- Demo price
- Relevant dietary/spicy label if applicable
- Order CTA
- Premium food visual

Acceptance:
- Burger information remains readable without 3D.
- Prices and descriptions are clearly demo data.

---

## HOME-05 — Cheese Transition

A cheese-inspired cinematic transition may connect major Home sections.

Requirements:
- Transition should be visually connected to the Cheezish brand.
- It must not trap scrolling.
- Mobile may use a simplified version.

Acceptance:
- Transition completes without hiding the next section.
- Reduced-motion fallback works.

---

## HOME-06 — Menu Preview

Home should preview these categories:

- Signature Burgers
- Loaded Fries
- Deals
- Drinks
- Desserts

CTA:
EXPLORE FULL MENU

Acceptance:
- CTA links to the Menu page.
- Category names remain HTML text.

---

## HOME-07 — Gallery Preview

Display approximately 3–5 premium food visuals.

Desktop may use:
- Horizontal movement
- Pinned sections
- Subtle parallax

Mobile should use:
- Simple vertical or swipe-friendly layout

Acceptance:
- Images are responsive.
- Below-the-fold imagery may lazy-load.
- Gallery interaction does not break scrolling.

---

## HOME-08 — About Preview

Suggested headline:

BORN IN MANCHESTER.
BUILT FOR CRAVINGS.

Requirements:
- Short fictional brand story.
- Button links to About page.

Acceptance:
- No fake claims or awards.
- Text remains readable on mobile.

---

## HOME-09 — Final Order CTA

The final Home section should return to a cinematic food-focused presentation.

Suggested text:

HUNGRY YET?
ORDER CHEEZISH

Options may include:

- Uber Eats
- Deliveroo
- Just Eat

Acceptance:
- Primary CTA is clearly visible.
- External destinations are clearly demo placeholders until real links exist.

---

# 4. Menu Page Requirements

## MENU-01 — HTML Menu

The menu must exist as accessible HTML content.

It must not be available only as:

- PDF
- Image
- 3D scene

Acceptance:
- Menu items can be read by normal browser text rendering.

---

## MENU-02 — Categories

Required categories:

- Signature Burgers
- Loaded Fries
- Deals
- Drinks
- Desserts

Acceptance:
- Users can easily identify menu categories.

---

## MENU-03 — Menu Item Structure

Each item should support:

- Name
- Description
- Demo price
- Category
- Image
- Dietary label
- Spicy label where relevant
- Order CTA

Acceptance:
- Cards remain readable and responsive.

---

## MENU-04 — Menu Navigation

The Menu page may include filtering/navigation such as:

- All
- Burgers
- Fries
- Deals
- Drinks
- Desserts

Optional dietary filters may be added only if useful.

Acceptance:
- Filtering must not hide content permanently due to JavaScript errors.

---

## MENU-05 — Menu Data

Menu content should be stored in structured project data rather than duplicated manually across components.

Preferred location:

src/data/menu.ts

Acceptance:
- Repeated menu cards consume shared data.

---

# 5. About Page Requirements

## ABOUT-01 — Brand Story

Include a fictional Cheezish story based in Manchester.

Acceptance:
- Story is clearly suitable for a demo brand.
- No claim implies a real operating history unless supplied later.

---

## ABOUT-02 — Burger Philosophy

Explain the visual/product concept around:

- Burgers
- Cheese
- Ingredients
- Food experience

Acceptance:
- Content remains food-focused and concise.

---

## ABOUT-03 — Visual Storytelling

The About page may use:

- Food imagery
- Ingredients
- Large typography
- Controlled motion

Acceptance:
- About page should not require WebGL to understand the content.

---

# 6. Gallery Page Requirements

## GALLERY-01 — Gallery Categories

Suggested categories:

- Burgers
- Fries
- Restaurant
- Behind the Scenes

Acceptance:
- Categories are understandable and usable on mobile.

---

## GALLERY-02 — Responsive Gallery

Gallery should support:

- Responsive grid
- Large cinematic imagery
- Optional lightbox

Acceptance:
- No image causes page overflow.
- Images maintain reasonable aspect ratios.

---

## GALLERY-03 — Image Accessibility

Meaningful images need useful alternative text.

Decorative images should not create unnecessary screen-reader noise.

Acceptance:
- Image accessibility is reviewed before release.

---

## GALLERY-04 — Image Performance

Requirements:
- Use optimized responsive formats where appropriate.
- Lazy-load below-the-fold imagery where appropriate.
- Avoid excessively large raw images.

Acceptance:
- Gallery remains practical on mobile connections.

---

# 7. Contact Page Requirements

## CONTACT-01 — Demo Restaurant Information

Display:

- Cheezish
- Manchester, United Kingdom
- Demo address
- Demo phone
- Demo email

Acceptance:
- Information must not pretend to be a real operating Cheezish location.

---

## CONTACT-02 — Opening Hours

Display demo opening hours.

Acceptance:
- Hours are clearly formatted.
- They may be replaced later with approved real information.

---

## CONTACT-03 — Directions

A location/map section may be included.

Acceptance:
- Demo location must not misrepresent a real restaurant.

---

## CONTACT-04 — Online Ordering

Provide visible demo ordering options for:

- Uber Eats
- Deliveroo
- Just Eat

Acceptance:
- No fake live delivery integration is created.

---

## CONTACT-05 — Booking Interface

A demo table-booking interface may contain:

- Name
- Email
- Phone
- Number of guests
- Date
- Time

Version 1 does NOT include a production booking backend.

Acceptance:
- Form must be clearly demo-only unless a real approved booking provider is connected later.
- Do not show false confirmation suggesting a real restaurant received the booking.

---

# 8. 3D Requirements

## THREE-01 — Core Technology

3D implementation should use the approved stack:

- Three.js
- React Three Fiber
- Drei where useful

Acceptance:
- Do not introduce another 3D engine without approval.

---

## THREE-02 — 3D Enhancement Rule

3D must enhance the experience.

Important restaurant information must not exist only inside a WebGL canvas.

Acceptance:
- Navigation, headings, menu and CTAs remain normal accessible interface content.

---

## THREE-03 — Device Scaling

Desktop/high-capability devices may use:

- More particles
- Better shadows
- Better texture detail
- More post-processing
- Full camera sequences

Mobile/lower-capability devices should reduce:

- Particle count
- Texture sizes
- Shadow cost
- Post-processing
- Aggressive camera motion

Acceptance:
- Mobile remains usable.

---

## THREE-04 — Reduced Motion

When prefers-reduced-motion is enabled:

Reduce or disable:

- Long camera fly-throughs
- Aggressive rotation
- Long particle transitions
- Complex scroll-driven movement

Keep:

- Food visuals
- Text
- Navigation
- Menu
- CTAs

Acceptance:
- All core website tasks remain possible.

---

## THREE-05 — Asset Loading

3D assets should use loading states/fallback behavior.

Acceptance:
- Users do not see a broken blank canvas if an asset is slow or fails.

---

# 9. Animation Requirements

## MOTION-01 — Animation Style

Motion should feel:

- Smooth
- Heavy
- Controlled
- Cinematic

Avoid:

- Random bouncing
- Constant spinning
- Flashing
- Unnecessary animation everywhere

---

## MOTION-02 — GSAP

GSAP may control cinematic UI and timeline animations.

ScrollTrigger may control scroll-driven scenes.

Acceptance:
- Animations clean up correctly when components unmount.
- Scrolling remains controllable.

---

## MOTION-03 — Animation Intensity

High animation:
- Intro
- Hero
- Ingredient explosion
- Final CTA

Medium animation:
- Signature burgers
- Gallery

Low animation:
- Menu
- About
- Contact

Acceptance:
- Page does not feel constantly animated.

---

# 10. Visual Requirements

## DESIGN-01 — Colors

Primary values:

Background:
#080808

Surface:
#111111

Cheezish Gold:
#FFC928

Warm Cream:
#F5EFE2

Main Text:
#F8F8F8

Muted Text:
#9B9B9B

Accent Red:
#A51F24

---

## DESIGN-02 — Typography

Heading direction:
Space Grotesk

Body direction:
Inter

Acceptance:
- Fonts must be licensed/approved.
- Typography must remain readable.

---

## DESIGN-03 — Food First

Visual hierarchy should prioritize:

1. Food
2. Headline
3. Order CTA
4. Supporting information

Acceptance:
- 3D technology should not visually overpower the food/product.

---

# 11. Technical Requirements

## TECH-01 — Framework

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS

Use installed compatible versions documented in versions.md.

---

## TECH-02 — No Backend in V1

Version 1 must not create:

- Custom backend
- Production database
- Authentication
- Shopping cart
- Payment gateway
- Admin dashboard

unless scope is explicitly changed.

---

## TECH-03 — Component Structure

Prefer reusable components rather than one extremely large page component.

Suggested structure:

src/components
src/components/3d
src/sections
src/data
src/hooks
src/lib
src/types

Acceptance:
- 3D implementation must not become one giant unmaintainable file.

---

## TECH-04 — Assets

Web assets should be organized under public.

Suggested directories:

public/models
public/textures
public/images
public/hdr
public/brand
public/icons

Acceptance:
- Third-party assets must have documented sources/licenses.

---

# 12. Performance Requirements

## PERF-01 — Images

Requirements:
- Resize images appropriately.
- Use responsive image delivery.
- Prefer modern formats when appropriate.
- Lazy-load below-the-fold imagery.
- Do not blindly lazy-load the main hero asset if it damages user experience.

---

## PERF-02 — JavaScript

Avoid unnecessary client-side JavaScript.

Acceptance:
- Do not add libraries for functionality already handled simply by the existing stack.

---

## PERF-03 — 3D Assets

Requirements:
- Optimize GLB assets.
- Remove unnecessary geometry.
- Avoid unnecessarily huge textures.
- Test actual asset sizes rather than guessing.

---

## PERF-04 — Performance Testing

Before release, measure key pages rather than assuming performance based only on the development computer.

---

# 13. Security Requirements

## SEC-01 — Secrets

Never commit:

- API keys
- Passwords
- Production credentials
- Real .env files containing secrets

---

## SEC-02 — Dependencies

Dependencies must be purposeful.

Do not install random packages without explaining their need.

---

## SEC-03 — Input Safety

Any interactive form must validate user input appropriately.

No unsafe raw HTML should be introduced without a justified sanitization strategy.

---

# 14. SEO Requirements

## SEO-01 — Metadata

Each major page should have appropriate:

- Title
- Description

---

## SEO-02 — Site Structure

Before release review:

- Sitemap
- robots configuration
- Canonical behavior where required
- Social/Open Graph metadata

---

## SEO-03 — Structured Data

Restaurant/Organization structured data may be used only with clearly appropriate demo information.

Do not publish fake real-business information as factual structured data.

---

# 15. Asset Licensing Requirements

## ASSET-01

Do not use unlicensed:

- Images
- Fonts
- 3D models
- Illustrations
- Code

---

## ASSET-02

For third-party assets record:

- Asset name
- Source
- License
- Modification status
- Purpose in project

---

# 16. Version 1 Out of Scope

The following are explicitly excluded:

- Real ecommerce checkout
- Payment gateway
- Cart
- Authentication
- Customer accounts
- Admin dashboard
- Production database
- CMS
- Real delivery integration
- Real booking backend
- Real analytics/tracking until approved
- Fake reviews
- Fake ratings
- Fake awards
- Fake statistics

---

# 17. Acceptance Criteria

## AC-01
All five required pages are implemented.

## AC-02
Desktop Home includes the intended cinematic 3D hero experience.

## AC-03
Burger ingredient interaction works without permanently breaking scene state.

## AC-04
Menu exists as accessible HTML.

## AC-05
ORDER NOW remains clear and easy to locate.

## AC-06
Website works on mobile, tablet and desktop.

## AC-07
No unintended horizontal overflow exists.

## AC-08
Keyboard navigation works for core controls.

## AC-09
Visible focus styles exist.

## AC-10
Reduced-motion fallback exists.

## AC-11
Important images/models are optimized appropriately.

## AC-12
No secrets are committed.

## AC-13
No fake real-world restaurant claims are presented.

## AC-14
ESLint passes.

## AC-15
TypeScript/type checking passes.

## AC-16
Production build completes successfully.

## AC-17
No major browser console errors remain.

## AC-18
3D assets have useful loading/fallback behavior.

## AC-19
Required CTA links and page links work.

## AC-20
Third-party asset licenses are recorded.

## AC-21
Core content remains usable even if advanced animation is unavailable.

## AC-22
Menu, About and Contact information do not depend on WebGL for accessibility.

---

# 18. Requirement Change Rule

Do not silently change:

- Scope
- Architecture
- Main CTA
- Number of pages
- Backend decision
- Database decision
- Primary brand direction
- Approved technology stack

If a change becomes necessary, document the reason in:

docs/decision-log.md

before implementation.