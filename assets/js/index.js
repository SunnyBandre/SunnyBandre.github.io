const navToggle = document.querySelector('.nav__toggle');
const navbar = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const navHeight = document.querySelector('.header').offsetHeight;
const skillItems = document.querySelectorAll('.skills__item');
const skillItemName = document.querySelectorAll('.skills__item-names');

// NAV
// toggle open and closing of nav
function navClickHandler() {
  navbar.classList.toggle('nav-active');
  document.body.classList.toggle('overflow-hide');
}

// Check if nav toggle is clicked
navToggle.addEventListener('click', () => {
  navClickHandler();
});

// Check if any nav link is clicked
Array.from(navLinks).forEach((link) => {
  link.addEventListener('click', () => {
    navClickHandler();
  });
});

// Work out height of header
document.documentElement.style.setProperty(
  '--scroll-padding',
  navHeight + 'px'
);

// Add and hide name of logo when clicked
skillItems.forEach((s) => {
  s.addEventListener('click', () => {
    let childNames = s.querySelector('.skills__item-names');
    skillItemName.forEach((n) => {
      if (
        !n.classList.contains('hidden') &&
        childNames.classList.contains('hidden')
      ) {
        n.classList.add('hidden');
        skillItems.forEach((e) => {
          e.classList.remove('light-up');
        });
      }
    });
    childNames.classList.toggle('hidden');
    s.classList.toggle('light-up');
  });
});
