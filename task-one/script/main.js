$(".add").click(function () {
  $(".container").append(
    `<p class="element">${$(
      ".input"
    ).val()} <span class="delete">Delete</span></p>`
  );
  $(".delete").click(function (e) {
    $(e.target.parentElement).remove();
  });
});
