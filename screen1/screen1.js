
  // console.log("hello world")

  function clickHandler() {

    createOverlay();

    document.body.removeEventListener("click", clickHandler);

  }


  function createOverlay() {

  var newDiv = document.createElement("div");
    
    newDiv.className = "dark-overlay";
    
    document.body.appendChild(newDiv);

  }

  document.body.addEventListener("click", clickHandler); 