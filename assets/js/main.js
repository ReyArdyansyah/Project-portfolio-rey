function initApp() {
  document.body.classList.add("page-enter");

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");
  const html = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(val) {
    try {
      localStorage.setItem("theme", val);
    } catch (e) {}
  }

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
    setStoredTheme(isDark ? "dark" : "light");
  }

  const storedTheme = getStoredTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(storedTheme ? storedTheme === "dark" : prefersDark);

  if (themeToggle) {
    themeToggle.onclick = (e) => {
      e.preventDefault();
      const currentIsDark = html.classList.contains("dark");
      applyTheme(!currentIsDark);
    };
  }

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.onclick = () => {
      mobileMenu.classList.toggle("hidden");
    };

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}