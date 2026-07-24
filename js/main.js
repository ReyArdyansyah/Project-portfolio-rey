document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-enter");

  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  const html = document.documentElement;

  function applyTheme(isDark) {
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    
    if (iconSun && iconMoon) {
      if (isDark) {
        iconSun.classList.remove("hidden");
        iconMoon.classList.add("hidden");
      } else {
        iconSun.classList.add("hidden");
        iconMoon.classList.remove("hidden");
      }
    }
    
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (err) {}
  }

  try {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(storedTheme ? storedTheme === "dark" : prefersDark);
  } catch (err) {
    applyTheme(false);
  }

  document.addEventListener("click", (e) => {
    const themeBtn = e.target.closest("#theme-toggle");
    if (themeBtn) {
      e.preventDefault();
      const currentIsDark = html.classList.contains("dark");
      applyTheme(!currentIsDark);
      return;
    }

    const menuBtn = e.target.closest("#menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
      e.preventDefault();
      mobileMenu.classList.toggle("hidden");
      return;
    }

    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      if (e.target.closest("a")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });

  const reducedMotion = window.matchMedia("(prefers-color-scheme: reduce)").matches;
  const revealElements = document.querySelectorAll(".reveal");

  if (!reducedMotion && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px" 
    });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("visible"));
  }

  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("href");
      
      if (!target || target.startsWith("#") || target.startsWith("mailto:") || target.startsWith("http") || link.getAttribute("target") === "_blank") {
        return;
      }

      const currentPath = window.location.pathname.split("/").pop() || "index.html";
      const targetPath = target.split("#")[0];
      
      if (targetPath === currentPath) {
        if (target.includes("#")) {
          const id = target.split("#")[1];
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
        return;
      }

      e.preventDefault();
      document.body.classList.remove("page-enter");
      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = target;
      }, 280);
    });
  });
});