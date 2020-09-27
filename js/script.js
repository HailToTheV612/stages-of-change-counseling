/*Smooth Scrolling */

$("#navbarNav .navbar-nav li .nav-link").on('click', function(smooth) {

    //set hash
    var target = this.hash;
    
    //prevent default clicking behavior
    smooth.preventDefault();
    
    //grab height of navbar
    var navOffset = $('#navbar').height();
    
    //animate the scroll
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 1500, function() {
        //add hash to the end of URL
      return window.history.pushState(null, null, target);
    });
  });

/*Auto close navbar toggler when clicked on*/
$('.navbar-collapse .nav-link').click(function(){
    $(".navbar-collapse").collapse('hide');
});