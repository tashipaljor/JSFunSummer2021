// (function(){
//   const comments = document.querySelector("#comment")
//   comments.addEventListener("input",
//   (event) => {
//     console.log(event.target);
//     console.log(event.target.value);

//   })
// })();

// (function(){
//   const department = document.querySelector("#department").addEventListener("input",
//   (event) => {
//     console.log(event.target);
//     console.log(event.target.value);

//   })
// })();

// (function(){
//   const toppings = document.querySelectorAll([name="topping"]).addEventListener("input",
//   (event) => {
//     console.log(event.target);
//     console.log(event.target.value);

//   })
// })();
(function(){
  const form = document.querySelector("form");
  form.addEventListener("POST", (event) => {
    event.preventDefault();
    console.log("Form Posted", event.target.elements);
    [...form.elements].forEach((element) =>{
      if (element.matches("input") || element.matches("select")) {
        console.log(element.value);
      }

    });

  });

})();