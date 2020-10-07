$(document).ready(function () {
  /**Menu Transparente */
  var nav = document.getElementById("nav");
  window.onscroll = function () {
    if (window.pageYOffset > 100) {
      nav.style.background = "rgba(8, 10, 114, 0.5)";
      nav.style.border = "none";
    } else {
      nav.style.background = "transparent";
      nav.style.borderBottom = "1px solid rgba(215, 215, 230, 0.5)";
    }
  };
  /**Navegacion menu */
  $("#home").on("click", function () {
    var position = 0;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#home").addClass("linea-menu");
    $("#planes").removeClass("linea-menu");
    $("#servicios").removeClass("linea-menu");
    $("#cliente").removeClass("linea-menu");
  });

  $("#planes").on("click", function () {
    var position = 575;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#planes").addClass("linea-menu");
    $("#home").removeClass("linea-menu");
    $("#servicios").removeClass("linea-menu");
    $("#cliente").removeClass("linea-menu");
  });

  $("#servicios").on("click", function () {
    var position = 1500;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $("#servicios").addClass("linea-menu");
    $("#home").removeClass("linea-menu");
    $("#planes").removeClass("linea-menu");
    $("#cliente").removeClass("linea-menu");
  });
  /*
  $('.menu-dinamico').on('mouseenter mouseleave', function() {  
    $('.sub-menu').addClass('show-menu');
    $('#home').removeClass('sub-menu');
    $('#planes').removeClass('linea-menu');
  })

  //$("#cliente").click(function (e) { */
  $("#cliente").on("mouseenter mouseover ", function () {
    // Resetear, por si acaso has estado jugando con la otra propiedad
    $(".sub-menu").css("display", "block");
    $(".sub-menu").css("visibility", "visible"); 
    $(".sub-menu").css("left", "400px");
    $(".sub-menu").css("position", "relative");
    $(".sub-menu").css("z-index", "1");
    if ($(".sub-menu").is(":hidden")) {
      $('.sub-menu').on('mouseenter mouseleave', function() {  
        $(".sub-menu").css("display", "block");
        $(".sub-menu").css("visibility", "visible");    
    });
    } else {
      $('.sub-menu').on('mouseleave ', function() {  
        $(".sub-menu").css("display", "none");
        $(".sub-menu").css("visibility", "hidden");    
    })
    }
  });
  
  /**Clck en planes Hogar - Negocio */
  $(".i-hogar").on("click", function () {
    var position = 880;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $(".hogar").addClass("show-hogar");
    $(".negocio").removeClass("show-negocio");
    $(".i-hogar").addClass("i-f-hogar");
    $(".i-negocio").removeClass("i-f-negocio");
  });

  $(".i-negocio").on("click", function () {
    var position = 880;
    $("body, html").animate(
      {
        scrollTop: position + "px",
      },
      2000
    );
    $(".negocio").addClass("show-negocio");
    $(".hogar").removeClass("show-hogar");
    $(".i-negocio").addClass("i-f-negocio");
    $(".i-hogar").removeClass("i-f-hogar");
  });
});
