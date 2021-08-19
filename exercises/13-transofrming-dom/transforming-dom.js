/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  let alert1 = document.querySelector('#alert1');
  console.log(alert1);
  alert1.setAttribute("role","alert");
  let alert2 = document.querySelector(".alert.alert-warning a")
  alert2.setAttribute("href","https://developer.mozilla.org/en-US/docs/Web/JavaScript")
  
  
  let alert3 = document.querySelector(".alert .alert-success")
  alert3.textContent = "I am victorious!";

  let alert4 = document.querySelector(".alert .alert-info");
  alert4.getElementsByClassName.backgroundColor = "grey";

  let alert5 = document.querySelector(".alert .alert-danger");
  alert5.getElementsByClassName.color = "red";

  let alert6 = document.querySelector("#alert6");
  alert6.removeAttribute("#alert6");

  let alert7 = document.querySelector("#alert7");
  alert7.


  }
  


  
})();
