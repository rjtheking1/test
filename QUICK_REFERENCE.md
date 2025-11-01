# Quick Reference Guide

## 🍪 Cookie Consent Controls

### User Actions:

- **Accept Cookies**: Stores `cookieConsent = 'accepted'` in localStorage
- **Decline Cookies**: Stores `cookieConsent = 'declined'` in localStorage
- **Manage Cookies**: Opens preferences (customizable)
- **Footer Link**: "Manage Cookies" reopens the popup

### Reset Cookie Consent:

```javascript
// In browser console:
localStorage.removeItem("cookieConsent");
location.reload();
```

---

## 🌓 Dark Mode Controls

### How It Works:

1. Checks localStorage for saved preference
2. Falls back to system preference (`prefers-color-scheme`)
3. Defaults to light mode if neither exists

### Manual Control:

```javascript
// Force dark mode
localStorage.setItem("theme", "dark");
document.documentElement.classList.add("dark");

// Force light mode
localStorage.setItem("theme", "light");
document.documentElement.classList.remove("dark");

// Reset to system preference
localStorage.removeItem("theme");
location.reload();
```

---

## 📱 Responsive Breakpoints

| Device  | Max Width | Layout                        |
| ------- | --------- | ----------------------------- |
| Mobile  | 480px     | Single column, hamburger menu |
| Tablet  | 768px     | 2 columns, expanded menu      |
| Laptop  | 1024px    | Full navigation, 3 columns    |
| Desktop | 1200px+   | Optimal spacing, 4 columns    |

---

## 🎨 Color Customization

### Change Primary Color:

```javascript
// In <script> section (Tailwind config)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#YOUR_COLOR_HERE",
      },
    },
  },
};
```

### Change Dark Mode Colors:

```css
html.dark {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --text-primary: #e5e7eb;
}
```

---

## 🔍 Testing Checklist

### Before Deploying:

- [ ] Test on mobile (375px - iPhone SE)
- [ ] Test on tablet (768px - iPad)
- [ ] Test on desktop (1920px)
- [ ] Test dark mode toggle
- [ ] Test cookie consent popup
- [ ] Test navigation dropdown
- [ ] Test mobile hamburger menu
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Verify all links work
- [ ] Check console for errors

---

## 🚀 Deployment to Netlify

### Steps:

1. Push code to GitHub repository
2. Connect Netlify to your GitHub repo
3. Build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root)
4. Deploy!

### Add Security Headers:

Create `_headers` file in root:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
```

---

## 🛠️ Common Tasks

### Hide Cookie Popup CSS:

```css
#cookie-consent {
  display: none !important;
}
```

### Change Header Height:

```css
:root {
  --header-height: 5rem; /* Adjust this */
}
```

### Disable Right-Click (Optional):

```javascript
document.addEventListener("contextmenu", (e) => e.preventDefault());
```

---

## 📞 Quick Links

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Feather Icons**: https://feathericons.com/
- **Can I Use**: https://caniuse.com/
- **GDPR Compliance**: https://gdpr.eu/cookies/

---

## 🐛 Debug Commands

```javascript
// Check theme
console.log(localStorage.getItem("theme"));

// Check cookie consent
console.log(localStorage.getItem("cookieConsent"));

// Clear all data
localStorage.clear();

// Check if dark mode is active
console.log(document.documentElement.classList.contains("dark"));
```

---

**Everything is ready to deploy!** 🎉
