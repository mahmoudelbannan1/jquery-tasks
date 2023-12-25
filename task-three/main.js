$("aside").hover(
  function () {
    $(this).css({ left: "0px" });
  },
  function () {
    $(this).css({ left: "-270px" });
  }
);

function showOne() {
  $("p.one").slideToggle(2000);
  // $(`${$(this)} + p`);
}
function showTwo() {
  $("p.two").slideToggle(2000);
}
