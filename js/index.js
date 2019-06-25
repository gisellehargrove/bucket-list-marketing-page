const logoImg = document.querySelector('.logo-img');
// Give the logo image a nice animation on load of the page using GSAP
TweenMax.to(
  '.logo-img',
  2,
  {
    rotation: 360
  }
);
