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

  /**
   * Toggle .header-scrolled class to #mobile-header when page is scrolled
   */
  let mobileSelectHeader = select('#mobile-header');
  if (mobileSelectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            mobileSelectHeader.classList.add('header-scrolled');
        } else {
            mobileSelectHeader.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled)
  }

  /**
   * Toggle mobile nav
   */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('#navbar').classList.toggle('navbar-mobile');
  //   this.classList.toggle('bi-list');
  //   this.classList.toggle('bi-x');
  // });
  
  // on('click', '.navbar .dropbown > a', function(e) {
  //   if (select('#navbar').classList.contains('navbar-mobile')) {
  //     e.preventDefault();
  //     this.nextElementSibling.classList.toggle('dropdown-active');
  //   }
  // }, true);
  on('click', '.mobile-nav-toggle', function(e) {
    var element = select('#mobile-links');
    if (element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  });

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', e => {
      if (question.querySelector("i")) {
        const allQuestions = document.querySelectorAll(".faq-question i");
        allQuestions.forEach(el => {
          el.classList.remove("bi-dash");
          el.classList.add("bi-plus");
        });

        const expanded = question.querySelector("i");

        if (!question.classList.contains("collapsed")) {
          expanded.classList.add("bi-dash");
          expanded.classList.remove("bi-plus");
        }
      }
    })
  });

  on('click', '#about-us-link', function(e) {
    const toShow = document.getElementsByClassName("not-first-section");
    Array.from(toShow).forEach(el => el.style.display = "block");
    document.getElementById("about-us-link").style.display = "none";
  })

})();