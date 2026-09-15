# Cheezish — Decision Log

This file records important project decisions.

Do not silently reverse an approved decision.

If a decision changes:
1. Add a new dated entry.
2. Explain why it changed.
3. Mention which documents are affected.
4. Update those documents after approval.

---

## DEC-001 — Project Type

Date:
2026-09-03

Decision:
Cheezish Version 1 is a fictional portfolio/demo restaurant website.

Reason:
The project is being created as a professional portfolio demonstration rather than for a currently operating real restaurant.

Impact:
- Demo contact information is allowed.
- Demo menu items and prices are allowed.
- Fictional information must not be presented as real business information.
- No fake reviews, awards, statistics or real-world claims.

Status:
Approved

---

## DEC-002 — Restaurant Concept

Date:
2026-09-03

Decision:
Cheezish is a burger-focused restaurant concept based in Manchester, United Kingdom.

Primary categories:

- Signature Burgers
- Loaded Fries
- Deals
- Drinks
- Desserts

Reason:
This concept supports strong visual food presentation and the intended cinematic 3D experience.

Status:
Approved

---

## DEC-003 — Target Audience

Date:
2026-09-03

Decision:
Primary target users are:

- Students
- Young adults
- Families
- Food lovers

Reason:
The brand, menu and visual direction should appeal to a broad modern fast-food audience.

Status:
Approved

---

## DEC-004 — Primary CTA

Date:
2026-09-03

Decision:
The primary CTA is:

ORDER NOW

Secondary actions:

- View Menu
- Book a Table
- Call Restaurant

Reason:
Ordering food is the strongest business action for the restaurant concept.

Status:
Approved

---

## DEC-005 — Website Pages

Date:
2026-09-03

Decision:
Version 1 contains five pages:

1. Home
2. Menu
3. About
4. Gallery
5. Contact

Reason:
These pages provide enough content for a professional restaurant demo without unnecessary scope.

Status:
Approved

---

## DEC-006 — Navbar

Date:
2026-09-03

Decision:
Desktop navbar remains:

CHEEZISH | Home | Menu | About | Gallery | Contact | ORDER NOW

Reason:
A more experimental navigation was considered, but the standard version was preferred for clarity and usability.

Status:
Approved

---

## DEC-007 — Visual Direction

Date:
2026-09-03

Decision:
Cheezish visual identity is:

- Dark
- Cinematic
- Premium
- Futuristic
- Bold
- Food-focused

Reason:
The website should resemble a high-end immersive experience rather than a generic restaurant template.

Status:
Approved

---

## DEC-008 — Primary Motion Reference

Date:
2026-09-03

Decision:
The uploaded cinematic 3D reference video is the primary motion-quality reference.

Use it for principles such as:

- Cinematic camera movement
- Atmospheric depth
- Particle effects
- Floating objects
- Object assembly/disassembly
- Lighting
- Smooth transitions

Do not copy its assets or distinctive branded content directly.

Reason:
The project should achieve a similar level of visual impact while remaining original to Cheezish.

Status:
Approved

---

## DEC-009 — Homepage Sequence

Date:
2026-09-03

Decision:
The intended Home page sequence is:

1. Particle intro
2. 3D hero burger
3. Ingredient separation
4. Signature burger showcase
5. Cheese-inspired transition
6. Menu preview
7. Gallery
8. About preview
9. Final 3D order CTA
10. Footer

Reason:
This sequence creates a cinematic journey while progressively exposing normal restaurant content.

Status:
Approved

---

## DEC-010 — Main Brand Color

Date:
2026-09-03

Decision:
Primary Cheezish brand color:

#FFC928

Supporting palette:

Background:
#080808

Surface:
#111111

Warm Cream:
#F5EFE2

Main Text:
#F8F8F8

Muted Text:
#9B9B9B

Accent Red:
#A51F24

Reason:
Cheese Gold connects directly to the product while black creates the premium cinematic environment.

Status:
Approved

---

## DEC-011 — Typography

Date:
2026-09-03

Decision:

Heading direction:
Space Grotesk

Body direction:
Inter

Reason:
The combination provides modern bold headings with highly readable supporting content.

Status:
Approved

---

## DEC-012 — Logo Direction

Date:
2026-09-03

Decision:
Cheezish uses a clean wordmark-style logo.

Avoid:

- Cartoon burger icon
- Chef hat
- Fake luxury crest
- Overly complicated food illustration

Reason:
The visual identity should remain modern and premium.

Status:
Approved

---

## DEC-013 — Core Technology Stack

Date:
2026-09-03

Decision:
Version 1 uses:

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- ScrollTrigger

Reason:
This stack supports normal accessible web content together with advanced 3D and scroll-controlled animation.

Exact installed versions must be recorded in:

docs/versions.md

Status:
Approved

---

## DEC-014 — HTML + 3D Architecture

Date:
2026-09-03

Decision:
The entire website must NOT be one WebGL canvas.

Normal content remains HTML.

3D is used as an enhancement.

HTML includes:

- Navigation
- Headings
- Menu
- CTAs
- About content
- Contact information
- Forms

Reason:
This improves:

- Accessibility
- SEO
- Maintainability
- Mobile usability
- Performance fallback

Status:
Approved

---

## DEC-015 — Backend

Date:
2026-09-03

Decision:
Version 1 has no custom backend.

Reason:
Current requirements do not need:

- User accounts
- Protected data
- Database writes
- Real payment processing
- Real order management
- Production booking storage

Status:
Approved

---

## DEC-016 — Database

Date:
2026-09-03

Decision:
Version 1 has no production database.

Menu content should use structured local project data.

Preferred location:

src/data/menu.ts

Reason:
The demo content is static and does not require persistent database storage.

Status:
Approved

---

## DEC-017 — Ordering

Date:
2026-09-03

Decision:
Version 1 may show demo ordering options for:

- Uber Eats
- Deliveroo
- Just Eat

No real delivery integration will be created without approved real URLs and requirements.

Reason:
The project needs visible restaurant ordering CTAs without unnecessary backend or API work.

Status:
Approved

---

## DEC-018 — Booking

Date:
2026-09-03

Decision:
Version 1 may include a booking interface, but it will not process real restaurant bookings.

Reason:
The interface is useful for portfolio presentation while a real booking backend is outside Version 1 scope.

Status:
Approved

---

## DEC-019 — 3D Burger Asset

Date:
2026-09-03

Decision:
The main burger should ideally contain independently controllable ingredient meshes.

Suggested object names:

- topBun
- sesameSeeds
- houseSauce
- cheeseTop
- pattyTop
- cheeseBottom
- pattyBottom
- pickles
- bottomBun

Reason:
Separate objects allow scroll-controlled ingredient separation and reassembly.

Status:
Approved

---

## DEC-020 — Blender

Date:
2026-09-03

Decision:
Blender is used for:

- 3D model cleanup
- Material work
- Ingredient separation
- Optimization
- GLB export

Three.js is used for browser rendering.

GSAP is used for web animation.

Reason:
Model creation/editing and browser animation have different responsibilities.

Status:
Approved

---

## DEC-021 — Browser 3D Format

Date:
2026-09-03

Decision:
Preferred browser 3D format:

GLB

Editable Blender files should not be served directly to website users.

Reason:
GLB is suitable for browser-oriented real-time 3D delivery.

Status:
Approved

---

## DEC-022 — Ingredient Animation

Date:
2026-09-03

Decision:
Ingredient separation should primarily be controlled by Three.js/React Three Fiber + GSAP rather than relying completely on baked Blender animation.

Reason:
The animation must respond naturally to:

- Forward scroll
- Reverse scroll
- Responsive behavior
- Reduced-motion behavior

Status:
Approved

---

## DEC-023 — 3D Environment

Date:
2026-09-03

Decision:
Version 1 uses an abstract cinematic Cheezish environment rather than a fully modeled restaurant interior.

Direction:

- Dark environment
- Minimal platform/pedestal
- Fog
- Golden lighting
- Food-related particles

Reason:
This keeps the burger as the focus while reducing unnecessary asset and performance cost.

Status:
Approved

---

## DEC-024 — Mobile 3D

Date:
2026-09-03

Decision:
Mobile may use reduced visual quality.

Possible reductions:

- Particle count
- Texture size
- Shadows
- Post-processing
- Camera movement
- Complex transitions

Reason:
Mobile usability and performance have priority over identical desktop visual quality.

Status:
Approved

---

## DEC-025 — Reduced Motion

Date:
2026-09-03

Decision:
The site must respect:

prefers-reduced-motion

Advanced movement should reduce while all core content remains available.

Reason:
3D and cinematic motion must not prevent accessibility.

Status:
Approved

---

## DEC-026 — Asset Licensing

Date:
2026-09-03

Decision:
Do not use unlicensed:

- Photos
- Fonts
- 3D models
- Illustrations
- Code

Third-party assets must have source and license information recorded.

Reason:
The project should remain suitable for a professional portfolio and future client adaptation.

Status:
Approved

---

## DEC-027 — 3D Asset Source Strategy

Date:
2026-09-03

Decision:
Preferred strategy:

Licensed base asset where useful
+
Blender customization
+
Website optimization

Poly Haven may be considered for suitable CC0 resources.

Other marketplace assets require their individual license to be reviewed.

Reason:
This balances quality, development time and legal safety.

Status:
Approved

---

## DEC-028 — Deployment Direction

Date:
2026-09-03

Decision:
Initial deployment direction:

Git repository
→ Vercel
→ Custom domain later

Reason:
The project uses Next.js and benefits from a simple Git-based deployment workflow.

Status:
Approved

---

## DEC-029 — Project Location

Date:
2026-09-03

Decision:
Local Cheezish project is stored on the D: drive.

Current project path:

D:\Projects\cheezish

Reason:
The C: drive had very limited free storage.

Status:
Approved

---

## DEC-030 — Development Workflow

Date:
2026-09-03

Decision:
Development should happen in controlled milestones.

Preferred sequence:

1. Base project
2. Documentation
3. Base layout/design system
4. Normal page content
5. 3D foundation
6. Hero burger
7. Scroll sequence
8. Secondary animations
9. Responsive polish
10. Accessibility
11. Performance
12. Testing
13. Deployment

Reason:
Building everything in one large AI prompt makes debugging and verification harder.

Status:
Approved

---

## DEC-031 — Completion Reporting

Date:
2026-09-03

Decision:
Codex must not say the project is complete without reporting:

- Changed files
- Implemented features
- Commands actually run
- Test/build results
- Known limitations
- Remaining work
- Manual steps

Reason:
Verification evidence is required rather than unsupported completion claims.

Status:
Approved

---

# Future Decision Template

Use this template for future important decisions:

## DEC-XXX — Decision Name

Date:
YYYY-MM-DD

Decision:
Describe the approved decision.

Reason:
Explain why the decision was made.

Affected Files:
List documentation/code affected if relevant.

Status:
Proposed / Approved / Rejected / Superseded