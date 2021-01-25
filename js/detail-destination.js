
//acommodation button
$('#dropbtn').click(function(){
	$('#js-filter-region-dropdown').slideToggle(300);
});

$(document).mouseup(function(e) 
{
    if (!$('.filter-region').is(e.target) && $('.filter-region').has(e.target).length === 0){
        $('#js-filter-region-dropdown').slideUp();
    }
});

//accommodation slide
$(document).ready(function(){
  $('#slick-accommodation-slide').slick({
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    arrow: false,
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
});

//filter-region
$('.region').click(function(){
	
});
