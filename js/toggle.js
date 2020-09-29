
$(function(){
  $('.chevron-in').click(function(){
    $('.menu-font').slideDown(200);
    $('.chevron-in').addClass('chevron-none');  
    $('.chevron-out').addClass('block');
  });
});

$(function(){
  $('.chevron-out').click(function(){
    $('.menu-font').slideUp(200);
    $('.chevron-in').removeClass('chevron-none');
    $('.chevron-out').removeClass('block');  
  });
});

$(function(){
    $(".menu-toggle").click(function(){
      $(".menu-list").slideToggle(200);
    });
});

