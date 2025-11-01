# SecureShield Website - Memory Backup

## User Preferences

- User name: Alex
- Assistant nickname: Clive
- Interaction mode: Direct, simple assistance without unsolicited suggestions
- Technical jargon: Minimal
- Learning intent assumptions: None

## Project Introduction

### Core Features Implemented

- **Working Contact Form**: Integrated with EmailJS, includes validation, success/error messages, privacy consent
- **Auto-Rotating Testimonial Slider**: Rotates every 5 seconds, supports click navigation, displays client profiles and ratings
- **Blog Section**: Includes featured post, 6 categorized posts, tags, dates, and newsletter signup
- **Data Recovery Page**: Details 6 professional services with descriptions and feature lists
- **Dark Mode Support**: Fully implemented across all pages
- **Mobile-First Responsive Design**: Optimized for all devices

### Technology Stack

- **HTML5** for structure
- **Tailwind CSS** for styling
- **Vanilla JavaScript** for interactivity
- **Feather Icons** for iconography
- **EmailJS** for contact form email integration

### Design and UX Highlights

- Gradient hero sections on key pages
- Professional card layouts with hover effects and shadows
- Smooth CSS animations
- Feather icons integrated throughout
- Auto-rotating testimonial slider
- Dark/light mode toggle
- Mobile-first responsive layout with hamburger menu
- Fast loading performance and SEO-friendly structure

### Project Directory Structure

Root directory contains:

- **10 HTML pages**: `index.html`, `services.html`, `team.html`, `case-studies.html`, `resources.html`, `success-stories.html`, `consulting.html`, `data-recovery.html`, `blog.html`, `contact.html`
- **Styling & Scripting**: `styles.css`, `script.js`
- **Documentation files**: `README_COMPLETE.md`, `FEATURE_IMPLEMENTATION_GUIDE.md`, `UPDATES_SUMMARY.md`, `PROJECT_SCHEDULE.md`, etc.

### EmailJS Integration Setup

To activate the contact form:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Obtain Public Key
3. Replace `YOUR_PUBLIC_KEY` in `contact.html` (line 13)
4. Create an email template in EmailJS
5. Update `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` in `contact.html` (line 372)
   After setup, the form will send submissions directly to your email.

## Project Information

### Frontend Responsive Design Framework

The website uses Tailwind CSS for responsive design, ensuring compatibility across Android, iOS, Windows, and Mac devices.

### Responsive Design Requirements

The website layout must adapt to mobile phones (max-width: 480px), tablets (max-width: 768px), laptops (max-width: 1024px), and desktops (1200px+), using Tailwind CSS utility classes with semantic HTML5 structure and relative units (% ,rem, em, vh, vw).

### Navigation Dropdown Structure

The main navigation must include a Services dropdown menu containing: Web Application Penetration Testing (WAPT), Vulnerability Assessment (VA) for Networks, Basic Security Consulting, Auditing & Compliance Guidance, Training / Awareness, and Data Recovery.

### Blog Navigation Requirement

The Blog section must be added to the main navigation bar and be fully accessible from all pages.

### Navigation Update Rule

Replace 'Request Demo' with a service-appropriate alternative like 'Get Consulting' in all navigation menus and associated pages.

---

_This memory backup file was created to preserve all important project information and user preferences._
