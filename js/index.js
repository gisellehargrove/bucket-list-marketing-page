$(document).ready(() => {


  // Not working
  $('#scroll').click(function(){
      $('html, body').animate({
        scrollTop: $(this).offset().top
        }, 'slow');
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

  // TweenMax.from(
  //   '.page-title',
  //   0.5,
  //   {
  //     opacity: 0,
  //     delay: 2
  //   }
  // )

  TweenMax.to(
    '.page-title',
    1,
    {
      opacity: 1,
      delay: 3
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
        delay: 8
      }
    )
    time += 0.25;
  });

  // Animate the cards into the page
  // Left side info card
//   TweenMax.from(
//     '.card-1',
//     0.5,
//     {
//       x: -700,
//       delay: 3
//     }
//   )
//   // Animate the right side info card
//   TweenMax.from(
//     '.card-2',
//     0.5,
//     {
//       x: 700,
//       delay: 4
//     }
//   )
});
