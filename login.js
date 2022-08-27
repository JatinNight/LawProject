$(document).ready(function(){
    $('#hiddenOtp').click(function(){
        $('.withOtp').css('display','block');
        $('.withPass').css('display','none');
        $('#textChange').text("Send Otp");
        $('.hiddenPassword').css('display','block',);
        $('.hiddenOtp').css('display','none');
    })
    $('#hiddenPass').click(function(){
        $('.withOtp').css('display','none');
        $('.withPass').css('display','block');
        $('#textChange').text("Login");
        $('.hiddenPassword').css('display','none');
        $('.hiddenOtp').css('display','block');
    })
  });

console.log('i am working')