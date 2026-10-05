"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";
import { applyLang, getLang, t } from "./i18n.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
  form();
  skillbar();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  // Dark mode
  const themeToggle = document.querySelector("#theme-toggle");
  const root = document.documentElement;

  const updateToggleLabel = () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    themeToggle.setAttribute("aria-label", t(isDark ? "theme.toLight" : "theme.toDark"));
  };
  // Idioma (español / inglés)
  const langToggle = document.querySelector("#lang-toggle");
  applyLang(getLang());
  langToggle.addEventListener("click", () => {
    applyLang(getLang() === "es" ? "en" : "es");
    updateToggleLabel();
  });

  updateToggleLabel();

  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "dark");
    }
    try {
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } catch (e) {}
    updateToggleLabel();
  });

  //Hamburger menu
  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});
