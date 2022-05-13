// Send message
$("#form-submit").click(function () {
  let form = $("#form")[0];
  let user_name = $("#username").val();
  let user_phone = $("#usertel").val();
  let user_subject = $("#service").val();
  let user_comment = $("#message").val();
  $.ajax({
    url: "includes/sendmail.php",
    type: "post",
    dataType: "json",
    data: {
      user_name: user_name,
      user_phone: user_phone,
      user_subject: user_subject,
      user_comment: user_comment,
    },

    success: function (data) {
      if (data.result == "success") {
        $(".messages").html(
          "<span class='message-success' style='color: green;'>Дякуємо, повідомлення успішно відправлено! Ми зв'яжемося з Вами найближчим часом.</span>"
        );
        form.reset();
      } else {
        $(".messages").html(data.result);
      }
    },
  });
});
