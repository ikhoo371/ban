
// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

  navMenu.classList.toggle("open");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navMenu.classList.remove("open");

  });

});

