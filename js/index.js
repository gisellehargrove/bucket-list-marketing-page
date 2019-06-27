$(document).ready(() => {


  // Scroll button
  $('#scroll').click(function(){
    let top = $(this).offset().top + 75;
      $('html, body').animate({
        scrollTop: $(document).height()
      }, 1000);
      return false;
  });


  /***********  ANIMATIONS  ***********/
  // Give the logo image a nice animation on load of the page using GSAP
  TweenMax.from(
    '.logo-img',
    2,
    {
      rotation: 360,
      y: -500,
      ease: Bounce.easeOut,
      delay: 1,
      opacity: 0
    }
  );

  TweenMax.from(
    '.page-title',
    0.5,
    {
      opacity: 0,
      delay: 2
    }
  );

  const featureCards = $('.mdl-card');
  let time = 1;

  featureCards.each((index, card) => {
    TweenMax.from(
      card,
      time,
      {
        x: -1500,
        delay: 4,
        transform: 1.2
      }
    )
    time += 0.25;
  });
});
