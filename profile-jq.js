$(function(){
  $('.event-overview').click(function(){
      $(this).children('.col-lg-10').children('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
      $(this).next().toggle();
