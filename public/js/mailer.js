$(function () {
  $(".modal").modal();

  $("#send-button-email").on("click", function (e) {
    e.preventDefault();
    $(".red-text").remove();

    let data = {
      tel: $("#send-tel").val(),
      email: $("#send-email").val(),
      message: $("#sens-message").val(),
    };
    console.log(data);

    $.ajax({
      type: "POST",
      data: data,
      url: "/contacts",
    })
      .done(function (data) {
        console.log(data);
        if (data.status === 1) {
          $("#modal1").modal("open");
          $("#send-form-email")[0].reset();
        }
        if (data.status === 2) {
          data.fields.forEach(function (item) {
            $(item).addClass("invalid");
            $(item).after(`<div class="red-text">${data.message}</div>`);
          });
        }
      })
      .fail(function (data) {
        console.log("Error load");
        $("#modal2").modal("open");
      });
  });
});
