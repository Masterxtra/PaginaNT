$(document).ready(function() {
    /**Menu Transparente */
  var nav = document.getElementById("nav");
  window.onscroll = function() {
    if (window.pageYOffset > 100) {
      nav.style.background = "rgba(8, 10, 114, 0.5)";
      nav.style.border = "none";
    } else {
      nav.style.background = "transparent";
      nav.style.borderBottom = "1px solid rgba(215, 215, 230, 0.5)";
    }
  };
    /**Navegacion menu */
  $('#home').on('click', function() {
    var position = 0;
    $('body, html').animate( {
        scrollTop: position + 'px'
    }, 2000);
    $('#home').addClass('linea-menu');
    $('#planes').removeClass('linea-menu');
    $('#servicios').removeClass('linea-menu');
  })

  $('#planes').on('click', function() {
    var position = 575;
    $('body, html').animate( {
        scrollTop: position + 'px'
    }, 2000);
    $('#planes').addClass('linea-menu');
    $('#home').removeClass('linea-menu');
     $('#servicios').removeClass('linea-menu');
  })

  $('#servicios').on('click', function() {
    var position = 1500;
    $('body, html').animate( {
        scrollTop: position + 'px'
    }, 2000);
    $('#servicios').addClass('linea-menu');
    $('#home').removeClass('linea-menu');
    $('#planes').removeClass('linea-menu');
  })
  
});
