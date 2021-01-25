//fixed topic bar
$(window).scroll(function(){
    $pos = $('html,body').scrollTop();
    if($pos>500){
      $('.topic').addClass('topic-bar');
    }
    else{
      $('.topic').removeClass('topic-bar');
    }
  });

//topic arrow
$('.topic .item').click(function(){
  $('.topic .item').find('.arrow').css('display','none');
  $(this).find('.arrow').css('display','block');
});

//display ribbon when scroll to location
$(document).on('scroll', function() {
    if( ($(this).scrollTop() >= $('#trips-scroll').position().top) &&($(this).scrollTop() < $('#tips-scroll').position().top) ){
      $('.topic .item').find('.arrow-trips').css('display','block');
    }
    else{
      $('.topic .item').find('.arrow-trips').css('display','none');
    }

    if( ($(this).scrollTop() >= $('#overview-scroll').position().top) &&($(this).scrollTop() < $('#trips-scroll').position().top) ){
      $('.topic .item').find('.arrow-overview').css('display','block');
    }
    else{
      $('.topic .item').find('.arrow-overview').css('display','none');
    }

    if( ($(this).scrollTop() >= $('#tips-scroll').position().top) &&($(this).scrollTop() < $('.decision').position().top) ){
      $('.topic .item').find('.arrow-tips').css('display','block');
    }
    else{
      $('.topic .item').find('.arrow-tips').css('display','none');
    }
});