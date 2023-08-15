// DOM manipulation

// We want an <h2> that says Hello "name"! 
// If the name is "student", we want the title to change

function sayHello () {
  var name = document.getElementById("name").value;
  var message = "<h2>Hello " + name + "!</h2>";

  // If it was simple text
  // document.getElementById("content").textContent = message;

  // Since it is an <h2> element we use .innerHTML
  document.getElementById("content").innerHTML = message;

  // If the name is "student", we want the tile to change
  if (name === "student") {
    // querySelector is much more general than getElementById,
    // because it allows to specify a selector in general
    var title = document.querySelector("#title").textContent;
    title += " & Lovin' it!";
    document.querySelector("h1").textContent = title;
  }
}