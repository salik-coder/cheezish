# Cheezish — Definition of Done

## 1. Purpose

This document defines when Cheezish Version 1 may be considered complete.

A feature or page must not be reported as complete only because it visually appears finished.

Completion requires implementation, verification and evidence.

---

# 2. General Done Rule

A feature is Done only when:

- Required behavior is implemented
- Required design is implemented
- Responsive behavior is verified
- Accessibility basics are verified
- Relevant errors are handled
- Relevant tests/checks pass
- No known critical issue remains
- Documentation is updated where necessary

Do not claim something is complete unless it has actually been checked.

---

# 3. Required Pages

The following pages must exist and work:

- Home
- Menu
- About
- Gallery
- Contact

Done means:

- All routes load
- Navigation links work
- No required route returns 404
- Each page has intended content
- Layout works on mobile and desktop

---

# 4. Navbar Gate

The navbar must contain:

CHEEZISH | Home | Menu | About | Gallery | Contact | ORDER NOW

Done means:

- CHEEZISH links to Home
- All navigation links work
- ORDER NOW is clearly visible
- Keyboard navigation works
- Focus state is visible
- Mobile navigation works
- Navbar does not clip or overlap important content

---

# 5. Home Page Gate

The Home page is Done only when it includes:

- Cinematic intro
- 3D hero burger
- Hero headline
- ORDER NOW CTA
- VIEW MENU CTA
- Ingredient separation sequence
- Signature burger showcase
- Menu preview
- Gallery preview
- About preview
- Final Order CTA
- Footer

The cinematic experience must not make the normal page unusable.

---

# 6. 3D Hero Gate

The 3D hero is Done only when:

- Burger model loads successfully
- Lighting is intentional
- Camera framing is correct
- Text remains readable
- CTAs remain clickable
- Scene does not cover required UI
- Loading state exists
- Failure/fallback state is usable
- Mobile version remains usable
- Reduced-motion behavior exists

---

# 7. Ingredient Animation Gate

The burger ingredient animation is Done only when:

- Ingredients separate correctly
- Animation responds to intended scroll progress
- Reverse scrolling does not break state
- Burger can return to its intended composition
- Labels do not overlap badly
- Mobile behavior is simplified where necessary
- Reduced-motion behavior is available

---

# 8. Menu Gate

The Menu page is Done only when:

- Menu exists as HTML content
- Required categories are visible
- Menu cards are readable
- Prices are clearly demo data
- Dietary/spicy labels are understandable
- Order CTA exists where required
- Mobile cards work
- Menu does not depend on WebGL

Required categories:

- Signature Burgers
- Loaded Fries
- Deals
- Drinks
- Desserts

---

# 9. About Gate

The About page is Done only when:

- Cheezish demo brand story exists
- Burger/ingredient philosophy exists
- Content is readable
- No fake awards are used
- No fake history is presented as real
- Page remains usable without animation

---

# 10. Gallery Gate

The Gallery page is Done only when:

- Images are responsive
- No image causes overflow
- Image quality is acceptable
- Below-the-fold images are optimized/lazy-loaded where appropriate
- Meaningful images include useful alt text
- Optional lightbox works if implemented
- Mobile gallery is usable

---

# 11. Contact Gate

The Contact page is Done only when it includes:

- Cheezish demo identity
- Manchester, UK
- Demo address
- Demo phone
- Demo email
- Opening hours
- Ordering options
- Booking interface if included

The page must not pretend a real Cheezish restaurant received a booking.

---

# 12. Responsive Gate

The site must be tested approximately from:

320px width

through:

Large desktop widths

Done means:

- No unintended horizontal scroll
- No clipped headings
- No clipped buttons
- Navigation remains usable
- 3D scene adapts appropriately
- Cards reflow correctly
- Touch targets remain usable
- Forms remain readable

Testing only one desktop width is not sufficient.

---

# 13. Accessibility Gate

Before completion verify:

- Keyboard navigation
- Visible focus
- Semantic headings
- Form labels
- Button labels
- Image alt text
- Appropriate contrast
- Reduced motion
- Usable touch targets

Core content must not exist only inside a canvas.

---

# 14. Reduced Motion Gate

When prefers-reduced-motion is enabled:

Reduce or disable:

- Camera fly-through
- Aggressive burger rotation
- Long particle sequences
- Strong parallax
- Complex scroll-controlled travel

Keep available:

- Food visuals
- Navigation
- Text
- Menu
- Contact details
- CTAs

The site must remain usable.

---

# 15. Performance Gate

Before release:

- Optimize large images
- Use responsive image sizes
- Use modern image formats where appropriate
- Lazy-load below-the-fold media where appropriate
- Optimize GLB models
- Avoid unnecessarily large textures
- Reduce expensive mobile effects
- Avoid unnecessary client JavaScript
- Avoid excessive third-party scripts
- Check for major layout shifts

Performance must be measured.

Do not assume performance is acceptable only because it runs well on the development computer.

---

# 16. 3D Performance Gate

The 3D experience is Done only when:

- Models are optimized appropriately
- Texture sizes are reasonable
- Particle implementation is efficient
- Mobile particle count is reduced where required
- Expensive shadows/effects are reduced where required
- Scene remains responsive
- Advanced effects have fallback behavior

A visually impressive scene that makes the page unusable is not Done.

---

# 17. Functionality Gate

Verify:

- Navigation
- CTA buttons
- Menu links
- Order links
- Gallery interactions
- Mobile menu
- Forms
- Filters if implemented
- Lightbox if implemented
- Scroll interactions
- 3D loading states

No required interaction should silently fail.

---

# 18. Browser Console Gate

Before completion:

- No major uncaught runtime errors
- No repeated critical warnings
- No missing required assets
- No broken required network requests

Non-critical warnings must be reviewed rather than ignored automatically.

---

# 19. TypeScript Gate

TypeScript errors must be resolved.

Avoid:

- Unnecessary `any`
- Ignored errors without explanation
- Unsafe assumptions about nullable data

The production build must not fail because of type errors.

---

# 20. Lint Gate

Run:

npm run lint

or the equivalent configured lint command.

Done means:

- Required lint check passes
or
- Any intentional exception is documented and justified

Do not report lint as passing if it was not run.

---

# 21. Production Build Gate

Run:

npm run build

Done means:

- Production build completes successfully
- Required routes are generated/compiled correctly
- No build-blocking error remains

A site that only works in development mode is not Done.

---

# 22. Security Gate

Before release verify:

- No API keys in repository
- No passwords in source
- No production credentials
- No real secret .env values committed
- No unsafe raw HTML without justification
- Dependencies have a clear purpose
- Production uses HTTPS

---

# 23. Dependency Gate

Before adding a dependency confirm:

- It solves a real requirement
- Existing stack cannot solve it simply enough
- Package appears maintained
- License is acceptable
- Bundle impact is reasonable

Do not add random dependencies.

---

# 24. Asset License Gate

For every third-party asset record:

- Name
- Source
- License
- Whether it was modified
- Where it is used

Do not use:

- Unlicensed photos
- Unlicensed fonts
- Unlicensed 3D models
- Copied restaurant imagery
- Copied website assets
- Paid assets without approval

---

# 25. Content Gate

Before completion verify:

- No lorem ipsum remains
- No accidental placeholder text remains
- No broken image placeholders remain
- Demo content is clear
- No fake customer reviews
- No fake ratings
- No fake awards
- No fake business statistics
- No fake real-world claims

---

# 26. SEO Gate

Before release verify:

- Page titles
- Page descriptions
- Sitemap
- robots configuration
- Open Graph metadata where appropriate
- Canonical behavior where required
- Structured data validity if structured data is used

Demo structured data must not misrepresent Cheezish as a real operating business.

---

# 27. Image Gate

Images are Done when:

- Correct image is used
- Correct dimensions/aspect ratio are used
- File size is reasonable
- Responsive behavior works
- Alt text is appropriate
- Below-the-fold loading behavior is appropriate

---

# 28. Font Gate

Fonts are Done when:

- Space Grotesk direction is correctly implemented
- Inter direction is correctly implemented
- Licensing/source is acceptable
- Font loading does not create major layout problems
- Readability remains strong

---

# 29. Animation Gate

Animation is Done when it feels:

- Smooth
- Controlled
- Cinematic
- Intentional

Reject animation that feels:

- Random
- Bouncy
- Excessive
- Distracting
- Constant

Animation should support hierarchy and food presentation.

---

# 30. Design System Gate

Implementation should follow:

- Approved colors
- Approved typography
- Approved button style
- Approved radius system
- Approved spacing direction
- Approved animation language

New design styles must not be introduced randomly.

---

# 31. Mobile Gate

Mobile is Done only when:

- Navigation works
- ORDER NOW is easy to access
- Typography is readable
- 3D quality is appropriately reduced
- Touch interactions work
- No desktop-only interaction blocks the user
- Menu is easy to read
- Contact form is usable

Mobile must not be treated as an afterthought.

---

# 32. Data Gate

Version 1 menu data should remain structured and maintainable.

If menu data uses:

src/data/menu.ts

verify:

- No unnecessary duplicated item data
- IDs are stable
- Categories are consistent
- Prices are valid values
- Cards render from shared data

---

# 33. Backend Gate

Version 1 must NOT contain an unnecessary custom backend.

Before completion verify that the project has not silently added:

- Database
- Authentication
- Payment processing
- Admin dashboard
- Production booking storage
- Real delivery API integration

unless scope was explicitly changed.

---

# 34. Documentation Gate

Before final completion update where necessary:

- README
- docs/00-project-brief.md
- docs/01-requirements.md
- docs/02-design-system.md
- docs/03-architecture.md
- docs/05-definition-of-done.md
- docs/decision-log.md
- docs/versions.md

Documentation must match the actual implementation.

---

# 35. Git Gate

Before a major milestone is considered complete:

- Changes are reviewed
- Unnecessary files are not committed
- Secrets are not committed
- Commit is meaningful
- Working tree status is understood

Do not commit generated garbage or private credentials.

---

# 36. Deployment Gate

Production is Done only when:

- Production build passes
- Deployment succeeds
- Production URL loads
- HTTPS works
- Required pages work in production
- Mobile is verified in production
- Order links are checked
- No major production console errors remain

---

# 37. Operations Gate

Before handover/release document where applicable:

- Hosting
- Repository ownership
- Domain ownership
- Asset licenses
- Known limitations
- Manual steps
- Future backlog

For the demo project, unavailable real-client operational information should not be invented.

---

# 38. Known Limitations Gate

Any known limitation that remains intentionally must be documented.

Examples:

- Demo booking only
- Demo order links
- Fictional restaurant information
- Simplified mobile 3D
- No backend
- No database
- No payment system

Known limitations should not be hidden.

---

# 39. Final Required Commands

Before Codex reports final completion, run the relevant available commands.

At minimum:

npm run lint

npm run build

If a separate type-check command exists, run it.

If tests exist, run them.

Do not invent command results.

---

# 40. Final Manual Verification

Manually verify:

Home
Menu
About
Gallery
Contact

Desktop
Tablet
Mobile

Also verify:

- Navigation
- ORDER NOW
- 3D hero
- Ingredient sequence
- Reduced motion
- Menu readability
- Gallery
- Contact
- Forms
- Loading states

---

# 41. Final Report Required

When implementation is complete, report:

## Changed Files
List important changed files.

## Features Completed
List implemented requirements.

## Verification
Report commands actually run and their real results.

## Responsive Testing
State which viewport/device sizes were checked.

## Accessibility
State what was manually checked.

## Performance
State what was measured or optimized.

## Assets
List third-party assets and their licenses.

## Known Limitations
List remaining limitations.

## Manual Steps
List anything the developer/user still needs to do.

## Remaining Work
Clearly state anything not completed.

Do not report unfinished work as completed.

---

# 42. Final Definition

Cheezish Version 1 may be called Done only when:

- Required pages work
- Required functionality works
- 3D experience works
- Mobile experience works
- Accessibility basics are respected
- Reduced-motion fallback works
- Content is complete
- Assets are licensed
- Lint passes
- Production build passes
- No critical errors remain
- Known limitations are documented
- Final verification report is produced