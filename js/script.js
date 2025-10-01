// ===== SINGLE PAGE APPLICATION FUNCTIONALITY =====

// DOM Elements
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const backToTopBtn = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const sections = document.querySelectorAll(".section");

// ===== NAVIGATION FUNCTIONALITY =====

// Mobile Navigation Toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===== SCROLL FUNCTIONALITY =====

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Add shadow to navbar on scroll
  if (scrollY > 50) {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }

  // Show/hide back to top button
  if (scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Back to top functionality
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
const observerOptions = {
  root: null,
  rootMargin: "-70px 0px -70px 0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove active class from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to current section's nav link
      const activeLink = document.querySelector(`[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

// Observe all sections
sections.forEach((section) => {
  observer.observe(section);
});

// ===== SCROLL ANIMATIONS =====
const fadeElements = document.querySelectorAll(
  ".fade-in, .project-card, .skill-item"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

fadeElements.forEach((element) => {
  element.classList.add("fade-in");
  fadeObserver.observe(element);
});

// ===== CONTACT FORM HANDLING =====
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const formObject = {};

  // Convert FormData to object
  for (let [key, value] of formData.entries()) {
    formObject[key] = value;
  }

  // Validate form
  if (!validateForm(formObject)) {
    return;
  }

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  try {
    // Simulate form submission (replace with actual endpoint)
    await simulateFormSubmission(formObject);

    // Show success message
    showNotification(
      "Message sent successfully! I'll get back to you soon.",
      "success"
    );
    contactForm.reset();
  } catch (error) {
    // Show error message
    showNotification(
      "Sorry, there was an error sending your message. Please try again.",
      "error"
    );
  } finally {
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Form validation
function validateForm(data) {
  const { name, email, subject, message } = data;

  if (!name.trim()) {
    showNotification("Please enter your name.", "error");
    return false;
  }

  if (!email.trim()) {
    showNotification("Please enter your email.", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address.", "error");
    return false;
  }

  if (!subject.trim()) {
    showNotification("Please enter a subject.", "error");
    return false;
  }

  if (!message.trim()) {
    showNotification("Please enter a message.", "error");
    return false;
  }

  return true;
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulate form submission (replace with actual implementation)
function simulateFormSubmission(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success (90% chance) or failure (10% chance)
      Math.random() > 0.1 ? resolve(data) : reject(new Error("Network error"));
    }, 2000);
  });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${
              type === "success"
                ? "check-circle"
                : type === "error"
                ? "exclamation-circle"
                : "info-circle"
            }"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        min-width: 300px;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${
          type === "success"
            ? "background: #d4edda; color: #155724; border-left: 4px solid #28a745;"
            : ""
        }
        ${
          type === "error"
            ? "background: #f8d7da; color: #721c24; border-left: 4px solid #dc3545;"
            : ""
        }
        ${
          type === "info"
            ? "background: #d1ecf1; color: #0c5460; border-left: 4px solid #17a2b8;"
            : ""
        }
    `;

  // Style notification content
  const content = notification.querySelector(".notification-content");
  content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;

  // Style close button
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.style.cssText = `
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        color: inherit;
        opacity: 0.7;
        transition: opacity 0.2s ease;
    `;

  closeBtn.addEventListener("click", () => {
    removeNotification(notification);
  });

  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.opacity = "1";
  });

  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.opacity = "0.7";
  });

  // Add to DOM
  document.body.appendChild(notification);

  // Trigger animation
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);
}

function removeNotification(notification) {
  notification.style.transform = "translateX(100%)";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// ===== DYNAMIC CONTENT LOADING =====

// Project data (in a real SPA, this would come from an API)
const projectsData = {
  all: [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
      image: "assets/images/project1.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "assets/images/project2.jpg",
      tech: ["Vue.js", "Firebase", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that displays current conditions, forecasts, and historical data with beautiful visualizations.",
      image: "assets/images/project3.jpg",
      tech: ["JavaScript", "Chart.js", "API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
};

// Load project filters (if you want to add filtering functionality)
function initializeProjectFilters() {
  const filtersContainer = document.querySelector(".project-filters");
  if (!filtersContainer) return;

  const filters = ["All", "Web Apps", "Mobile", "Desktop"];

  filters.forEach((filter) => {
    const filterBtn = document.createElement("button");
    filterBtn.textContent = filter;
    filterBtn.className = `filter-btn ${filter === "All" ? "active" : ""}`;
    filterBtn.addEventListener("click", () =>
      filterProjects(filter.toLowerCase())
    );
    filtersContainer.appendChild(filterBtn);
  });
}

// Filter projects (placeholder for future functionality)
function filterProjects(category) {
  console.log(`Filtering projects by: ${category}`);
  // Implementation would filter and re-render projects
}

// ===== REMOVED TYPING ANIMATION =====
// Typing animation removed - hero subtitle is now static

// ===== SIMPLE PARALLAX BACKGROUND =====
function initSimpleParallax() {
  // The parallax effect is now handled purely by CSS with background-attachment: fixed
  // This function can be used for additional effects if needed
  console.log("Simple parallax background active via CSS");
}

// ===== PARTICLE BACKGROUND ANIMATION =====
function initParticles() {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "0";

  heroSection.style.position = "relative";
  heroSection.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
    };
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      particle.x += particle.dx;
      particle.y += particle.dy;

      // Wrap around screen
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle with green colors
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(17, 126, 35, ${particle.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animateParticles);
  }

  // Initialize particles
  resizeCanvas();
  for (let i = 0; i < 30; i++) {
    particles.push(createParticle());
  }

  animateParticles();

  window.addEventListener("resize", resizeCanvas);
}

// ===== INITIALIZE ALL FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", () => {
  // Initialize simple parallax background
  initSimpleParallax();

  // Initialize particles (optional - can be heavy on mobile)
  if (window.innerWidth > 1024) {
    initParticles();
  }

  // Initialize project filters if container exists
  initializeProjectFilters();

  // Add loading animation to page
  document.body.classList.add("loaded");
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for resize events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Optimize scroll events
const optimizedScroll = throttle(() => {
  const scrollY = window.pageYOffset;

  // Navbar effects
  if (scrollY > 50) {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }

  // Back to top button
  if (scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
}, 10);

// Replace the original scroll event listener
window.removeEventListener("scroll", window.addEventListener);
window.addEventListener("scroll", optimizedScroll);

// ===== ERROR HANDLING =====
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error);
  // In production, you might want to send this to a logging service
});

// Handle unhandled promise rejections
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled Promise Rejection:", e.reason);
  e.preventDefault();
});

// ===== ACCESSIBILITY IMPROVEMENTS =====

// Keyboard navigation for mobile menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  }
});

// Focus trap for mobile menu
navToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    navToggle.click();
  }
});

// Skip to content link (for screen readers)
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.textContent = "Skip to main content";
skipLink.className = "skip-link";
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #667eea;
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10001;
    transition: top 0.3s ease;
`;

skipLink.addEventListener("focus", () => {
  skipLink.style.top = "6px";
});

skipLink.addEventListener("blur", () => {
  skipLink.style.top = "-40px";
});

document.body.insertBefore(skipLink, document.body.firstChild);

console.log("✨ Personal Portfolio SPA loaded successfully!");
