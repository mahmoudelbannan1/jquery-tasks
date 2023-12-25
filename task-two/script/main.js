$("li").click(function (e) {
  let targetClass = $(e.target).attr("class");
  // remove active from all li
  $("li").each(function () {
    $(this).removeClass("active");
  });
  // add active to the target
  $(e.target).addClass("active");
  //add hidden from all p
  $("p").each(function () {
    $(this).addClass("hidden");
  });
  //remove hidden from the matched
  console.log(targetClass);
  $(`p.${targetClass}`).removeClass("hidden");
});
