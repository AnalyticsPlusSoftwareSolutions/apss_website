$(document).ready(function(){
  // smooth scrolling to links in navbar and footer link
  $(".navbar a, footer a[href='#Home']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var position = $(this).offset().top;

      var windowTop = $(window).scrollTop();
        if (position < windowTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  
  
  // Fade in element*
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            var top_of_object = $(this).offset().top + 200;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_object ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    
    });
})



