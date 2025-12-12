# Portfolio Website Design Guidelines for Shashwat Jain

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like Linear's careers page, GitHub profiles, and Vercel's clean aesthetic. Focus on clarity, professionalism, and technical credibility while maintaining visual interest.

## Core Design Principles
1. **Professional Minimalism**: Clean layouts that let content breathe while maintaining visual sophistication
2. **Technical Credibility**: Design communicates expertise through precision and attention to detail
3. **Scannable Hierarchy**: Clear information architecture for recruiters and potential clients
4. **Performance-First**: Fast loading, optimized for all devices

---

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts)
**Secondary Font**: JetBrains Mono or Fira Code for technical elements

**Hierarchy**:
- Hero Headline: 4xl/5xl (mobile/desktop), font-weight 700
- Section Headers: 3xl/4xl, font-weight 700
- Subsection Titles: xl/2xl, font-weight 600
- Body Text: base/lg, font-weight 400, line-height relaxed
- Technical Labels: sm/base, font-weight 500, uppercase tracking-wide
- Code/Stats: mono font, base size

---

## Layout System

**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for all spacing
- Component internal padding: p-6 to p-8
- Section vertical spacing: py-16 to py-24
- Container max-width: max-w-6xl
- Grid gaps: gap-6 to gap-8

**Container Strategy**: 
- Full-width sections with inner max-w-6xl containers
- Consistent horizontal padding: px-6 on mobile, px-8 on desktop

---

## Page Structure & Sections

### 1. Hero Section (100vh)
- **Layout**: Full viewport height, centered content
- **Content**: Name, professional title ("Senior Software Developer"), brief tagline highlighting expertise (e.g., "Building scalable web solutions with React, Node.js & Cloud Technologies")
- **CTA Buttons**: Two buttons - "View Projects" (primary), "Download Resume" (secondary) with backdrop-blur
- **Background**: Large hero image showing modern workspace/coding environment or abstract tech visualization
- **Scroll indicator**: Subtle animated arrow at bottom

### 2. About/Introduction (natural height)
- **Layout**: Two-column on desktop (text left, professional headshot right), single column mobile
- **Content**: 2-3 paragraphs professional summary, years of experience highlighted, current location
- **Contact Info**: Email, LinkedIn, Phone displayed with icons from Heroicons

### 3. Experience Timeline (natural height, py-24)
- **Layout**: Vertical timeline with alternating left/right cards on desktop, stacked on mobile
- **Cards**: Each position in elevated card (shadow-lg, rounded-lg)
- **Content Structure per card**:
  - Company logo placeholder (64x64, rounded)
  - Job title (text-xl, font-semibold)
  - Company name & location (text-base, muted)
  - Date range (text-sm, mono font)
  - 3-4 key achievements as bullet points
- **Visual Timeline**: Vertical line connecting all positions with dot indicators

### 4. Technical Skills (py-20)
- **Layout**: Grid layout - 4 columns on desktop, 2 on tablet, 1 on mobile
- **Categories**: Languages, Frameworks/Libraries, Dev Tools, Databases & Cloud, Domain Knowledge
- **Skill Display**: Individual skill badges with icons, rounded-full, with subtle hover lift effect
- **Badge Style**: px-4 py-2, text-sm, with tech-specific icons from Font Awesome

### 5. Education (py-16)
- **Layout**: Two-column grid (one card per degree)
- **Cards**: University logo area, degree name, institution, location, dates, relevant coursework in smaller text
- **Styling**: Less prominent than experience section but maintains consistency

### 6. Certifications (py-16)
- **Layout**: Three-column grid on desktop, responsive stacking
- **Cards**: Certificate name, issuing organization, date, credential ID if applicable
- **Visual**: Badge/ribbon icon accent for each certification

### 7. Footer (py-12)
- **Content**: Contact information repeat, social links (LinkedIn, GitHub), copyright
- **Layout**: Centered, compact

---

## Component Specifications

**Navigation Bar** (sticky):
- Logo/Name left, navigation links center/right
- Links: About, Experience, Skills, Education, Contact
- Height: h-16, backdrop-blur on scroll, border-bottom on scroll
- Mobile: Hamburger menu with slide-in drawer

**Cards** (Experience, Education, Certifications):
- rounded-lg, shadow-md hover:shadow-xl transition
- Internal padding: p-6 to p-8
- Background: subtle gradient or solid with border

**Buttons**:
- Primary: solid fill, rounded-lg, px-6 py-3
- Secondary: outline style, same size
- On image overlays: backdrop-blur-sm background

**Timeline Connector**:
- Vertical line: 2px width, positioned absolute
- Dots: 12px diameter circles at each position
- Current/most recent: Larger dot (16px)

---

## Images

**Hero Image**: 
- Full-width background image of modern office workspace, developer setup, or abstract technology visualization
- Should be professional, high-quality, and slightly darkened for text contrast
- Overlay: subtle gradient from transparent to semi-dark at bottom

**Professional Headshot** (About section):
- Square or circular crop, 400x400px minimum
- Professional photo showing confidence and approachability
- Position: Right side on desktop, above text on mobile

**Company Logos** (Experience cards):
- 64x64px placeholder circles
- Use actual logos: Miller Construction Services, L&T Infotech/Scania, Infosys/BP, ILabz/Syngenta, Yash Technologies

**University Logos** (Education):
- UMBC and RGTU logos, 80x80px

---

## Iconography
**Library**: Heroicons (outline style for most, solid for emphasis)
- Contact: envelope, phone, link
- Skills: code, server, database, cloud, cog
- Education: academic-cap
- Certifications: badge-check

---

## Responsive Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md-lg)
- Desktop: > 1024px (xl)

**Key Adaptations**:
- Hero text: Scale from 3xl to 5xl
- Timeline: Vertical left-aligned on mobile, alternating on desktop
- Skills grid: 1 → 2 → 4 columns
- Navigation: Hamburger menu below 768px

---

## Animations (Minimal)
- Hero scroll indicator: gentle bounce
- Card hover: shadow elevation only
- Timeline dots: fade-in on scroll (intersection observer)
- Navigation: smooth scroll behavior
- No distracting parallax or complex scroll animations

**Critical**: This is a professional developer portfolio - credibility through clean execution, not flashy effects.