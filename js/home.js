/*Counter Function*/
$(document).ready(function(){
  $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});
/*End Counter Funvtion*/

$(function () {
  /* ---------------------------------------------------------------------------------------------- */
  /*                                         Search Now Button                                         */
  /* ---------------------------------------------------------------------------------------------- */
  $("#explore").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".features-section").offset().top,
      },
      800
    );
  });
});



