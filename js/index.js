$(document).ready(() => {

  // Scroll button
  $('#scroll').click(function(){
      $('html, body').animate({
        scrollTop: $('#log-in-button').scrollTop()
      }, 1000);
      return false;
  });

  $('.send-button').click(() => {

    $.ajax('https://bucket-list-be.herokuapp.com/api/contacts', {
      method: 'POST',
      data: {
        firstname: 'Giselle',
        lastname: 'Hargrove',
        email: 'gisellehargrove@gmail.com',
      },
      error: (error) => {
        console.log(error);
      }
    })
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
        delay: 1,
        transform: 1.2
      }
    )
    time += 0.25;
  });
});
