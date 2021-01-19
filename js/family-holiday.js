//fixed topic bar
$(window).scroll(function(){
    $pos = $('html,body').scrollTop();
    if($pos>500){
      $('.topic-banner').css('display','none');
      $('.topic-bar').css('display','block');
    }
    else{
      $('.topic-banner').css('display','block');
      $('.topic-bar').css('display','none');
    }
  });

//topic arrow
$('.topic .item').click(function(){
	$('.topic .item').find('.arrow').css('display','none');
	$(this).find('.arrow').css('display','block');
});




//test scroll to function
$(window).scroll(function() {
   var hT = $('.trips').offset().top,
       hH = $('.trips').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     // alert(hT);
   }
});