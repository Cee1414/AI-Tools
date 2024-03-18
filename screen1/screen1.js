
  console.log("hello world")

  function clickHandler() {
    createOverlay();

    document.body.removeEventListener("click", clickHandler);

  }

  function createOverlay() {

  var newDiv = document.createElement("div");
    
    // Add a class name to the div
    newDiv.className = "dark-overlay";
    
    // Append the new div to the body of the HTML
    document.body.appendChild(newDiv);


    
  }

  document.body.addEventListener("click", clickHandler);