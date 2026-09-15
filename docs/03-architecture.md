# Cheezish — Technical Architecture

## 1. Architecture Goal

Cheezish Version 1 is a frontend-focused cinematic restaurant website.

The architecture must support:

- Five responsive pages
- Accessible HTML content
- Premium 3D visuals
- Scroll-controlled animation
- Mobile performance fallbacks
- Maintainable components
- Simple deployment
- Future expansion if a real client later requires backend features

Version 1 must avoid unnecessary backend complexity.

---

# 2. High-Level Architecture

The application architecture is:

User Browser
    |
    v
Next.js Application
    |
    +----------------------+
    |                      |
    v                      v
Normal Web UI          3D Experience
    |                      |
React Components       Three.js
Tailwind CSS           React Three Fiber
HTML Content           Drei
    |                      |
    +----------+-----------+
               |
               v
             GSAP
         ScrollTrigger
               |
               v
     Cinematic Cheezish UI

Important rule:

The entire website must NOT be implemented as one WebGL canvas.

Normal content such as:

- Navigation
- Headings
- Menu
- Buttons
- About content
- Contact information
- Forms

must remain normal accessible HTML.

3D is an enhancement layer.

---

# 3. Approved Frontend Stack

Cheezish Version 1 uses:

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- GSAP ScrollTrigger

Exact installed versions must be recorded in:

docs/versions.md

Do not change major framework or library versions without documenting the reason.

---

# 4. Next.js Responsibility

Next.js is the primary application framework.

It handles:

- Routing
- Page structure
- Metadata
- Static content
- Image optimization
- Component rendering
- Production build
- Deployment compatibility

Required routes:

/
    Home

/menu
    Menu

/about
    About

/gallery
    Gallery

/contact
    Contact

---

# 5. TypeScript Responsibility

TypeScript should be used across application code.

Purpose:

- Stronger type safety
- Safer component props
- Structured menu data
- Cleaner refactoring
- Fewer accidental runtime mistakes
- Better Codex-generated code validation

Avoid unnecessary use of `any`.

Shared types should be placed in:

src/types/

where useful.

---

# 6. Tailwind CSS Responsibility

Tailwind CSS should handle normal interface styling such as:

- Layout
- Spacing
- Responsive behavior
- Typography
- Buttons
- Navbar
- Cards
- Forms
- Utility states

Custom CSS may be used where Tailwind is not appropriate, especially for:

- Special cinematic effects
- Complex transitions
- Canvas layering
- Advanced animation-specific styling

Do not force every visual effect into Tailwind utilities.

---

# 7. Three.js Responsibility

Three.js is the core WebGL/3D engine.

It is responsible for:

- 3D burger rendering
- Ingredient meshes
- Camera
- Lighting
- Fog
- Particles
- Materials
- 3D environment
- WebGL rendering

Three.js should not control normal website content.

---

# 8. React Three Fiber Responsibility

React Three Fiber integrates Three.js with React.

Use it to structure 3D elements as maintainable React components.

Preferred concept:

HeroScene
    |
    +-- BurgerModel
    +-- IngredientStack
    +-- CameraRig
    +-- SceneLighting
    +-- FoodParticles
    +-- Environment

Avoid one extremely large 3D component.

---

# 9. Drei Responsibility

Drei may be used for useful React Three Fiber helpers such as:

- GLTF loading
- Environment helpers
- Loading utilities
- Camera helpers
- Other justified scene utilities

Do not use a Drei helper simply because it exists.

Only use helpers that make the implementation clearer or more maintainable.

---

# 10. GSAP Responsibility

GSAP controls cinematic animation timelines.

Use GSAP for:

- Text reveals
- Section transitions
- Burger motion
- Ingredient separation
- Camera transitions
- CTA animation
- Cinematic timing

---

# 11. ScrollTrigger Responsibility

GSAP ScrollTrigger may connect scroll progress to cinematic timelines.

Example sequence:

User Scroll
    |
    v
Camera Progress
    |
    v
Burger Rotation
    |
    v
Ingredient Separation
    |
    v
Ingredient Labels
    |
    v
Burger Reassembly

Scroll should remain controllable by the user.

Avoid unnecessary scroll hijacking.

---

# 12. Home Page Architecture

Suggested Home page structure:

HomePage
|
+-- Navbar
|
+-- CinematicExperience
|   |
|   +-- Canvas
|   |   |
|   |   +-- CameraRig
|   |   +-- SceneLighting
|   |   +-- BurgerModel
|   |   +-- IngredientStack
|   |   +-- FoodParticles
|   |   +-- Environment
|   |
|   +-- HTML Overlay
|       |
|       +-- HeroHeading
|       +-- IngredientLabels
|       +-- HeroCTA
|
+-- SignatureBurgersSection
|
+-- MenuPreviewSection
|
+-- GalleryPreviewSection
|
+-- AboutPreviewSection
|
+-- FinalOrderCTA
|
+-- Footer

The exact implementation may evolve while preserving this separation of responsibilities.

---

# 13. Page Architecture

## Home

High cinematic intensity.

Contains:

- 3D intro
- Hero
- Ingredient interaction
- Product showcase
- Menu preview
- Gallery preview
- About preview
- Final CTA

---

## Menu

Primarily normal HTML UI.

Contains:

- Category navigation
- Menu data
- Food cards
- Dietary/spicy labels
- Order CTAs

Heavy WebGL is not required.

---

## About

Primarily normal HTML and imagery.

Contains:

- Brand story
- Burger philosophy
- Ingredients
- Visual storytelling

Motion should remain controlled.

---

## Gallery

Primarily optimized imagery.

Contains:

- Responsive grid
- Category filtering if implemented
- Optional lightbox
- Controlled motion

---

## Contact

Normal accessible HTML interface.

Contains:

- Demo restaurant information
- Opening hours
- Directions/map area
- Online ordering links
- Demo booking form

No production booking backend in Version 1.

---

# 14. Recommended Source Structure

The project should approximately follow:

cheezish/
|
+-- docs/
|
+-- public/
|   |
|   +-- models/
|   +-- textures/
|   +-- images/
|   +-- hdr/
|   +-- brand/
|   +-- icons/
|
+-- src/
    |
    +-- app/
    |
    +-- components/
    |   |
    |   +-- 3d/
    |
    +-- sections/
    |
    +-- data/
    |
    +-- hooks/
    |
    +-- lib/
    |
    +-- types/

Avoid adding new top-level directories without a clear reason.

---

# 15. Standard UI Components

Suggested reusable components include:

src/components/

Navbar.tsx
Footer.tsx
Button.tsx
SectionHeading.tsx
MenuCard.tsx
GalleryCard.tsx
OrderCTA.tsx
LoadingScreen.tsx

Only create abstractions when they are actually reused or improve clarity.

---

# 16. 3D Components

Suggested location:

src/components/3d/

Potential components:

HeroScene.tsx
BurgerModel.tsx
IngredientStack.tsx
CameraRig.tsx
SceneLighting.tsx
FoodParticles.tsx
CheeseTransition.tsx
FinalBurgerScene.tsx

Do not create one giant file containing the complete 3D experience.

---

# 17. Section Components

Suggested location:

src/sections/

Potential components:

HeroSection.tsx
SignatureBurgersSection.tsx
MenuPreviewSection.tsx
GalleryPreviewSection.tsx
AboutPreviewSection.tsx
FinalOrderSection.tsx

Sections should compose reusable UI and 3D components.

---

# 18. Menu Data Architecture

Version 1 does not require a database.

Menu content should use structured local data.

Preferred file:

src/data/menu.ts

Example conceptual data:

{
  id: "the-cheezish",
  name: "The Cheezish",
  category: "Signature Burgers",
  description: "Demo description",
  price: 9.95,
  spicy: false,
  vegetarian: false,
  image: "/images/menu/the-cheezish.webp"
}

The exact menu data will be finalized later.

Benefits:

- Single source of truth
- Easier updates
- Reusable cards
- Less duplicate content

---

# 19. Backend Decision

Version 1:

Backend:
NONE

Custom API:
NONE

Production Database:
NONE

Authentication:
NONE

Payment Gateway:
NONE

Admin Dashboard:
NONE

Reason:

Current Version 1 requirements do not require:

- User accounts
- Protected data
- Database writes
- Payments
- Private API keys
- Order management
- Production booking processing

Do not create a backend unless project scope changes.

---

# 20. Future Backend Expansion

If a future real client requires features such as:

- Real ordering
- Cart
- Checkout
- Authentication
- Customer accounts
- Booking storage
- Admin dashboard
- Order tracking
- CMS

the architecture must be reviewed before implementation.

Potential future backend technology must NOT be selected now without actual requirements.

---

# 21. Ordering Architecture

Version 1 Order Now flow:

ORDER NOW
    |
    v
Ordering Options
    |
    +-- Uber Eats
    +-- Deliveroo
    +-- Just Eat

These are demo placeholders until approved real URLs exist.

Do not fake a live Cheezish listing.

---

# 22. Contact Form Architecture

Version 1 may use a demo-only contact interface.

No production submission system is required.

If real submission is later required, consider:

- Approved managed form provider
or
- Small serverless function

Do not build a full backend only for a basic contact form.

---

# 23. Booking Architecture

Version 1:

Booking UI:
YES

Production booking processing:
NO

Database storage:
NO

Real confirmation:
NO

The user must not be shown a false success message suggesting a real Cheezish restaurant received a booking.

---

# 24. Asset Architecture

Browser-facing assets should be stored under:

public/

Suggested structure:

public/
|
+-- models/
|   +-- cheezishBurger.glb
|   +-- pedestal.glb
|
+-- textures/
|   +-- burger/
|   +-- particles/
|   +-- environment/
|
+-- images/
|   +-- menu/
|   +-- gallery/
|   +-- about/
|
+-- hdr/
|   +-- studioEnvironment.hdr
|
+-- brand/
|   +-- cheezishLogo.svg
|
+-- icons/

Actual filenames may change after asset selection.

---

# 25. Source Asset Architecture

Editable source assets should remain separate from optimized website assets where practical.

Suggested external/project source structure:

source-assets/
|
+-- blender/
+-- raw-images/
+-- licenses/

Example:

source-assets/blender/cheezishBurger.blend

Browser version:

public/models/cheezishBurger.glb

Do not serve Blender source files directly to the browser.

---

# 26. 3D Model Format

Preferred browser model format:

GLB

Workflow:

Licensed or Created Source
        |
        v
      Blender
        |
        v
Cleanup / Materials / Optimization
        |
        v
      GLB Export
        |
        v
public/models/
        |
        v
React Three Fiber

---

# 27. Burger Object Hierarchy

The hero burger should ideally preserve separately controllable ingredient objects.

Suggested conceptual names:

topBun
sesameSeeds
houseSauce
cheeseTop
pattyTop
cheeseBottom
pattyBottom
pickles
bottomBun

Avoid meaningless Blender object names such as:

Cube
Cube.001
Object123

Clear object names allow predictable animation code.

---

# 28. Ingredient Animation Architecture

Ingredient separation should primarily be controlled in the website rather than relying entirely on a baked Blender animation.

Reason:

Scroll progress must control the animation.

Concept:

GSAP ScrollTrigger
        |
        v
Ingredient positions
        |
        +-- topBun
        +-- cheeseTop
        +-- pattyTop
        +-- cheeseBottom
        +-- pattyBottom
        +-- pickles
        +-- bottomBun

This allows:

- Forward scroll
- Reverse scroll
- Controlled timing
- Responsive variations

---

# 29. Camera Architecture

Camera movement should be isolated into a dedicated responsibility such as:

CameraRig.tsx

Camera motion should not be scattered randomly across multiple components.

Camera behavior may include:

- Hero framing
- Slow approach
- Ingredient travel
- Product framing
- Final CTA framing

Mobile should use simpler camera behavior.

---

# 30. Lighting Architecture

Lighting should be managed consistently.

Suggested scene lighting:

- Warm key light
- Gold rim light
- Soft fill light
- Optional product-specific accent

Lighting code should be centralized where practical.

Do not create uncontrolled lights inside unrelated components.

---

# 31. Particle Architecture

Particles should preferably use efficient rendering techniques.

Possible approaches:

- Instancing
- Points
- Shader-based effects

Avoid creating thousands of independent React mesh components.

Particle count must scale down for weaker devices.

---

# 32. Cheese Transition Architecture

The cheese-inspired transition should be implemented as a controlled effect.

Preferred starting direction:

- Shader
- WebGL mask
- Lightweight animated mesh

Avoid expensive physical fluid simulation unless proven necessary.

Mobile may use a simpler visual transition.

---

# 33. Loading Architecture

The application must handle slow 3D asset loading.

Desired flow:

Dark Background
      |
      v
CHEEZISH Loading State
      |
      v
Critical Assets Ready
      |
      v
Intro
      |
      v
Hero

Do not expose:

- Blank white screen
- Broken canvas
- Unhandled asset-loading errors

---

# 34. Performance Architecture

Performance must be considered during implementation, not only after completion.

Use:

- Optimized GLB models
- Appropriate texture sizes
- Responsive images
- Lazy loading where appropriate
- Reduced JavaScript
- Efficient particle rendering
- Conditional expensive effects
- Mobile fallbacks

Do not assume desktop development performance represents mobile performance.

---

# 35. Device Quality Strategy

The application may use multiple visual quality levels.

## Higher Capability

May include:

- More particles
- Better shadows
- More detailed textures
- More post-processing
- Full camera sequence

## Lower Capability / Mobile

Reduce:

- Particle count
- Texture sizes
- Shadow quality
- Post-processing
- Camera complexity
- Heavy effects

Core content must remain available.

---

# 36. Reduced Motion Architecture

Respect:

prefers-reduced-motion

When enabled:

Disable or reduce:

- Camera fly-through
- Aggressive rotations
- Long particle animation
- Complex parallax
- Scroll-controlled object travel

Keep:

- Food visual
- Page content
- Navigation
- Buttons
- Menu
- Contact information

Reduced-motion mode must not become an empty page.

---

# 37. Image Architecture

Normal food photography should use Next.js image handling where appropriate.

Principles:

- Responsive sizes
- Optimized formats
- Correct dimensions
- Lazy-load below-the-fold images
- Prioritize critical hero imagery only where justified

Do not ship giant raw source images directly.

---

# 38. Font Architecture

Preferred fonts:

- Space Grotesk
- Inter

Use an approved and licensed delivery method.

Where practical, use Next.js font handling to reduce layout shift and improve loading.

Do not introduce additional font families without approval.

---

# 39. SEO Architecture

Each major route should support:

- Unique title
- Unique description
- Open Graph metadata where appropriate
- Sitemap
- robots configuration
- Canonical behavior where required

Structured data may be included only using appropriate demo information.

Do not publish fictional information as a real operating restaurant.

---

# 40. Security Architecture

Even without a custom backend:

- No secrets in source code
- No production credentials committed
- No real .env files committed
- No random unsafe HTML
- Dependencies should be purposeful
- HTTPS should be used in production

Any future server-side protected action must enforce authorization on the server.

---

# 41. Dependency Rule

Do not install a package simply to solve a trivial problem.

Before adding a new dependency, determine:

1. What problem does it solve?
2. Can the existing stack solve it simply?
3. Is it maintained?
4. Does it affect bundle size?
5. Is its license acceptable?

Document major dependency decisions if needed.

---

# 42. Integration Architecture

Version 1 integrations are minimal.

Potential external destinations:

- Uber Eats
- Deliveroo
- Just Eat

No real integration should be created until approved URLs/services are supplied.

No unnecessary:

- Analytics
- CMS
- Email service
- Database service
- Authentication provider

should be connected in Version 1.

---

# 43. Deployment Architecture

Preferred starting deployment:

Git Repository
      |
      v
     Vercel
      |
      v
Production Deployment
      |
      v
Custom Domain Later

Vercel is selected because this Version 1 application uses Next.js and requires a straightforward Git-based deployment workflow.

Production deployment must still be tested before handover.

---

# 44. Git Workflow

Use Git throughout development.

Recommended basic workflow:

main
 |
 +-- feature branches where useful

Create meaningful checkpoints after stable milestones.

Examples:

- Initial Next.js setup
- Project documentation
- Base layout
- Home hero
- 3D burger scene
- Menu page
- Gallery
- Accessibility fixes
- Production polish

Do not mix unrelated large changes into one commit where avoidable.

---

# 45. Validation Workflow

After meaningful implementation changes, run relevant checks.

Expected checks include:

- Formatter if configured
- ESLint
- TypeScript checking
- Tests where applicable
- Production build
- Browser verification

Do not claim a check passed unless it was actually run.

---

# 46. Architecture Change Rule

Codex or any developer must not silently change:

- Main framework
- App Router
- 3D engine
- Animation system
- Backend decision
- Database decision
- Deployment direction
- Major folder structure

If a significant change is required:

1. Explain why.
2. Record the decision in docs/decision-log.md.
3. Update this architecture document if approved.

---

# 47. Architecture Priorities

When trade-offs exist, use this priority order:

1. Correctness
2. Accessibility
3. Usability
4. Performance
5. Maintainability
6. Visual fidelity
7. Additional visual effects

A visual effect should be reduced or removed if it makes the website unusable.

---

# 48. Version 1 Architecture Summary

Cheezish Version 1 is:

Frontend:
Next.js + TypeScript + Tailwind CSS

3D:
Three.js + React Three Fiber + Drei

Animation:
GSAP + ScrollTrigger

Data:
Local structured demo data

Backend:
None

Database:
None

Authentication:
None

Payment:
None

Deployment:
Vercel starting direction

3D Philosophy:
Enhancement, not replacement for accessible content

Primary Goal:
Deliver a cinematic premium burger experience while keeping the website practical and maintainable.