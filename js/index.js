// Give the logo image a nice animation on load of the page using GSAP
TweenMax.from(
  '.logo-img',
  2,
  {
    rotation: 360,
    y: -500,
    ease: Bounce.easeOut
  }
);

TweenMax.from(
  '.page-title',
  0.5,
  {
    opacity: 0,
    delay: 2
  }
)

// Animate the cards into the page
// Left side info card
TweenMax.from(
  '.card-1',
  0.5,
  {
    x: -700,
    delay: 3
  }
)
// Animate the right side info card
TweenMax.from(
  '.card-2',
  0.5,
  {
    x: 700,
    delay: 4
  }
)
