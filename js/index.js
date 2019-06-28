$(document).ready(() => {

  // Scroll button
  $('#scroll').click(() => {
    $('html, body').animate({
      scrollTop: "100px"})
  });

  $('.send-button').click((e) => {
    e.preventDefault();
    let firstName = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    console.log(firstName, email, message);
    $.ajax('https://bucket-list-be.herokuapp.com/api/contacts').then((data, error) => {
      console.log(data, 'data');
      console.log(error, 'error');
    });
    // $.ajax('https://bucket-list-be.herokuapp.com/api/contacts/47/messages', {
    //   method: 'POST',
    //   data: {
    //     contact_id: 47,
    //     message: 'test message'
    //   },
    //   error: (error) => {
    //     console.log(error, 'error');
    //   },
    //   success: (obj) => {
    //     console.log(obj);
    //   }
    // })
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
