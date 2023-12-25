// $.get("https://jsonplaceholder.typicode.com/users", function (data) {
//   console.log(data);
// });

$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  method: "get",
  success: function (data) {
    for (let i in data) {
      // console.log(data[i].name);
      let name = data[i].name;
      $("aside").append(`<button class= ${+i + 1}> ${data[i].name}</button>`);
      $("aside").on("click", `.${i}`, function () {
        $.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${i}`,

          function (data) {
            $("section ul").text(``);

            let arr = [];
            for (let i in data) {
              arr.push(data[i].title);
              $("section ul").append(`<li> ${data[i].title} </li>`);
            }
          }
        );
      });
    }
  },
  error: function () {},
});
