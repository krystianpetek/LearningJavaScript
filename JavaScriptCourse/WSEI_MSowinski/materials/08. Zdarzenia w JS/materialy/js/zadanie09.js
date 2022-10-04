document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
  // addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id b
    innerFuncOne(event.target);
    console.log("b: ", this);


    function innerFuncOne(obj) {
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.
      if (obj) {
        console.log("innerFuncOne: ", obj)
      }

      console.log("innerFuncOne: ", this);
    }

  });

})
