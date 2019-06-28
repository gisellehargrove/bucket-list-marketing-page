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

    let data = JSON.stringify({
      firstname: firstName,
      lastname: 'test',
      email: email
    });

    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
    $.ajax('https://bucket-list-be.herokuapp.com/api/contacts', {
      method: 'POST',
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      data: data
    }).then((res) => {
      // $.ajax(`https://bucket-list-be.herokuapp.com/api/${res.id}/messages`, {
      //   method: 'POST',
      //   contentType:"application/json; charset=utf-8",
      //   dataType:"json",
      //   data: JSON.stringify({
      //     contact_id: res.id,
      //     message: message
      //   })
      // }).then((res) => {
      //   console.log('sent message to server', res);
      // })
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
