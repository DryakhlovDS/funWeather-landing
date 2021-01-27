$(window).ready(function(){
  var firstHeight=$('.first').height(),
    scrollOffset=$(window).scrollTop(),
      downloadOffset=$('.download').offset().top;
  
  var $all_slides=$('.slider').find('.slider__item'),
        all_items=$all_slides.length - 1;
    var $active_item, slide_active_index;
  var downloadOffsettop=$('.download').offset().top-287;
//  console.log(downloadOffset);
  
  checkScroll(scrollOffset);
  
  function checkScroll(scrollOffset){
    if (scrollOffset>=firstHeight+70 && scrollOffset<downloadOffset){
      $('.header').addClass('header_fixed');
    }
    else {    
      $('.header').removeClass('header_fixed');
    }
    
  }
  
  $(window).scroll(function(){
    scrollOffset=$(this).scrollTop();
    checkScroll(scrollOffset);
    
    if(scrollOffset>2133){
       $('.screenshots__pics:eq(0)').removeClass('hidden_left');
       }
    
    if(scrollOffset>3117){
       $('.screenshots__pics:eq(1)').removeClass('hidden_right');
       }
    
    if(scrollOffset>3983){
       $('.screenshots__pics:eq(2)').removeClass('hidden_left');
       }
    if(scrollOffset > downloadOffsettop){
      $('.download__image:eq(0)').removeClass('hidden_right');
      $('.download__image:eq(1)').removeClass('hidden_center');
      $('.download__image:eq(2)').removeClass('hidden_left');
    }
    console.log(scrollOffset);
  });
  
  $('[data-scroll]').click(function(){
    var blockId=$(this).data('scroll'),
        blockOffset=$(blockId).offset().top-69;
    
      $('html, body').animate({
            scrollTop: blockOffset
        }, 700);
    
  });
        
  function sliderInit(){
     $active_item=$('.slider').find('.slider__item_active');
     slide_active_index=$active_item.index();
  }
  
  $('.slider-next').click(function(){
    sliderInit();
    $active_item.removeClass('slider__item_active');
    
   if(slide_active_index<all_items){ 
      $all_slides.eq(slide_active_index+1).addClass('slider__item_active');
  }
    else{
      $all_slides.eq(0).addClass('slider__item_active');
    }

  });
  
  $('.slider-prev').click(function(){
    sliderInit();
    $active_item.removeClass('slider__item_active');
    
   if(slide_active_index>0){ 
      $all_slides.eq(slide_active_index-1).addClass('slider__item_active');
  }
    else{
      $all_slides.eq(-1).addClass('slider__item_active');
    }

  });
  
  $('.nav-toggle').click(function(){
    $(this).toggleClass("nav-toggle_active");
  });
  
});
