// preloader
$(window).on('load',function(){
     $('#preloader').fadeOut('slow');
});


//back to top
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    if(pos>500){
      $('.backToTop').attr('style','visibility:visible; bottom: 5%;')
    }
    else{
      $('.backToTop').attr('style','visibility:hidden;')
    }
  });
  $('.backToTop').click(function() {
      $('html,body').animate({scrollTop: 0},1000);
   });

// resheader button animation
  $('#box1').click(function(){
    $('#box3').css('display','none');
    $('#box1').css('display','none');
    $('#box2').css('display','block');
    $('.resHeader').slideUp(500);
  });
  $('#box2').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.resHeader').slideDown(500);
  });
  $('#box3').click(function(){
    $('#box3').css('display','none');
    $('#box2').css('display','none'); 
    $('#box1').css('display','block');
    $('.resHeader').slideDown(500);
  });

//toggle each item of res menu
  $('.pre-hid').click(function(){
    if($(this).parent().find('.child-menu').css('display') == 'none'){
      $('.pre-hid').parent().find('.child-menu').slideUp(300);
      $('.pre-hid').css('background-color','transparent');
      $(this).parent().find('.child-menu').slideDown(300);
      $(this).css('background-color','#ddd');
    }
    else{
      $(this).parent().find('.child-menu').slideUp(300);
      $(this).css('background-color','transparent');
    }
  });

//holidays responsive slide
$(document).ready(function(){
  $('.holiday2 .list').slick({
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      },
    ]
  });
})
  

