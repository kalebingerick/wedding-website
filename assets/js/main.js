(function () {
  "use strict";

  // HELPER - selections
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  // HELPER - event listener
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  }

  // HELPER - on scroll event listener
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled');
        } else {
            selectHeader.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled)
  }

})();