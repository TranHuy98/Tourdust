// preloader
$(window).on('load',function(){
     $('#preloader').fadeOut('slow');
});


//back to top
$(document).ready(function(){
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

//header scroll fixed
  // $(window).scroll(function(){
  //   var pos = $('html,body').scrollTop();
  //   if(pos>30){
  //     $('.header').addClass('fixed-header');
  //   }
  //   else{
  //     $('.header').removeClass('fixed-header');
  //   }
  // });

// drop menu 
  $('.menu li').mouseenter(function(){
    $(this).find('.drop-menu').css('animation-name','dropMenuShow');
  })
  $('.menu li').mouseleave(function(){
    $(this).find('.drop-menu').css('animation-name','dropMenuHide');
  })

//drop child menu
  $('.drop-menu .item').mouseenter(function(){
    $(this).find('.drop-child-menu').css('animation-name','dropChildShow');
  })
  $('.drop-menu .item').mouseleave(function(){
    $(this).find('.drop-child-menu').css('animation-name','dropChildHide');
  })

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

//grand child menu of res menu
  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grandchild-menu').slideToggle(500);
  });

  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grand-child-menu').slideToggle(500);
  });

//toggle each item of res menu
  $('.pre-hid').click(function(){
    $('.each').slideUp(300);
    if($(this).parent().find('.child-menu').css('display') == 'none'){
      $(this).parent().find('.child-menu').slideDown(300);
    }
    else{
      $(this).parent().find('.child-menu').slideUp(300);
    }
  });

//read policy
  $('#check-policy').click(function(){
    if ($(this).is(':checked')){
      $('.condition-policy').css('opacity','1');
      $('.condition-policy').css('pointer-events','all');
      $('.condition-policy').css('cursor','pointer');
    }
    else{
      $('.condition-policy').css('opacity','0.7');
      $('.condition-policy').css('pointer-events','none');
      $('.condition-policy').css('cursor','default');
    }
  });
});