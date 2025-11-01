// SecureShield Website JavaScript

// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  console.log("SecureShield website loaded successfully");

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Add active class to current page in navigation
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (currentLocation.includes(linkPath) && linkPath !== "index.html") {
      link.parentElement.classList.add("active");
    } else if (currentLocation.endsWith("/") && linkPath === "index.html") {
      link.parentElement.classList.add("active");
    }
  });

  // Pricing tabs functionality
  const pricingTabs = document.querySelectorAll(".pricing-tabs .tab");
  if (pricingTabs.length > 0) {
    const pricingCards = document.querySelectorAll(".pricing-card");
    const prices = [
      // Monthly prices
      { starter: 999, professional: 2499, enterprise: "Custom" },
      // Quarterly prices
      { starter: 2699, professional: 6999, enterprise: "Custom" },
      // Annual prices
      { starter: 9999, professional: 24999, enterprise: "Custom" },
    ];

    pricingTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Update active tab
        pricingTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Update prices based on selected tab
        if (pricingCards.length >= 3) {
          // Starter plan
          const starterAmount = pricingCards[0].querySelector(".amount");
          const starterPeriod = pricingCards[0].querySelector(".period");
          if (starterAmount && starterPeriod) {
            starterAmount.textContent = prices[index].starter;
            starterPeriod.textContent =
              index === 0 ? "/month" : index === 1 ? "/quarter" : "/year";
          }

          // Professional plan
          const proAmount = pricingCards[1].querySelector(".amount");
          const proPeriod = pricingCards[1].querySelector(".period");
          if (proAmount && proPeriod) {
            proAmount.textContent = prices[index].professional;
            proPeriod.textContent =
              index === 0 ? "/month" : index === 1 ? "/quarter" : "/year";
          }

          // Enterprise plan
          const enterpriseAmount = pricingCards[2].querySelector(".amount");
          if (enterpriseAmount) {
            enterpriseAmount.textContent = prices[index].enterprise;
          }
        }
      });
    });
  }

  // Enhanced mobile menu functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");

      // Change hamburger icon to close icon and vice versa
      const icon = mobileMenuButton.querySelector("i");
      if (mobileMenu.classList.contains("open")) {
        icon.setAttribute("data-feather", "x");
      } else {
        icon.setAttribute("data-feather", "menu");
      }
      feather.replace();
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        const icon = mobileMenuButton.querySelector("i");
        icon.setAttribute("data-feather", "menu");
        feather.replace();
      });
    });
  }

  // Enhanced theme toggle functionality with smooth transition
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");

      // Save preference to localStorage
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Update icon with smooth transition
      const sunIcon = themeToggle.querySelector(".dark\\:block");
      const moonIcon = themeToggle.querySelector(".dark\\:hidden");

      if (isDark) {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      }

      // Dispatch custom event for other components to react to theme change
      window.dispatchEvent(
        new CustomEvent("themeChange", { detail: { isDark } })
      );
    });
  }

  // Listen for theme changes and update Vanta.js background
  window.addEventListener("themeChange", function (e) {
    // Update Vanta.js background based on theme
    const vantaBg = document.getElementById("globe-bg");
    if (vantaBg) {
      // Reinitialize Vanta.js with appropriate colors for dark/light mode
      if (typeof VANTA !== "undefined" && VANTA.GLOBE) {
        // Destroy existing effect if it exists
        if (window.vantaEffect) {
          window.vantaEffect.destroy();
        }

        // Create new effect with theme-appropriate colors
        window.vantaEffect = VANTA.GLOBE({
          el: "#globe-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: e.detail.isDark ? 0x4a3fff : 0x2f81f7,
          size: 1.4,
          backgroundColor: e.detail.isDark ? 0x0d1117 : 0xf9fafb,
        });
      }
    }
  });

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form fields
      const name = form.querySelector("#full-name");
      const email = form.querySelector("#email");

      // Simple validation
      if (name && name.value.trim() === "") {
        alert("Please enter your name");
        name.focus();
        return;
      }

      if (email && email.value.trim() === "") {
        alert("Please enter your email");
        email.focus();
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email.value)) {
        alert("Please enter a valid email address");
        email.focus();
        return;
      }

      // If validation passes, show success message
      alert("Thank you for your submission! We will get back to you soon.");
      form.reset();
    });
  });

  // Accessibility improvements
  // Add skip to content link
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.className = "skip-link";
  skipLink.textContent = "Skip to main content";
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Ensure all links have proper aria labels
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (!link.hasAttribute("aria-label") && link.querySelector("i")) {
      // If link contains only an icon, add aria label
      const icon = link.querySelector("i");
      if (icon && icon.hasAttribute("data-feather")) {
        const iconName = icon.getAttribute("data-feather");
        link.setAttribute("aria-label", iconName.replace("-", " "));
      }
    }
  });

  // Ensure all buttons have proper aria labels
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (!button.hasAttribute("aria-label") && button.querySelector("i")) {
      // If button contains only an icon, add aria label
      const icon = button.querySelector("i");
      if (icon && icon.hasAttribute("data-feather")) {
        const iconName = icon.getAttribute("data-feather");
        button.setAttribute("aria-label", iconName.replace("-", " "));
      }
    }
  });
});

// Cross-browser compatibility functions
function supportsLocalStorage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}

// Polyfill for smooth scrolling (for older browsers)
if (!("scrollBehavior" in document.documentElement.style)) {
  // Add smooth scrolling polyfill
  (function () {
    // Implementation for older browsers
  })();
}

// Performance optimization - Lazy loading for images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(function (img) {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    images.forEach(function (img) {
      img.src = img.dataset.src;
    });
  }
});
