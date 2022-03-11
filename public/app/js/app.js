$(document).ready(function () {
  $(".menu-bar").click(function () {
    $(".nav").toggleClass('active');
  });

  $("#login-register").click(function () {
    $("#login").toggleClass('active');
  });

  $("#login-btn").click(function () {
    $("#login").toggleClass('active');
  });

  $("#register-btn").click(function () {
    $("#register").toggleClass('active');
  });


});
