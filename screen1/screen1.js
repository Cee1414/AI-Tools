
//dark overlay functions
  function clickHandlerDarkOverlay() {

    createDarkOverlay();

    document.body.removeEventListener("click", clickHandlerDarkOverlay);

  }


  function createDarkOverlay() {

  var newDiv = document.createElement("div");
    
    newDiv.className = "dark-overlay";
    
    document.body.appendChild(newDiv);

  }

  document.body.addEventListener("click", clickHandlerDarkOverlay); 

  document.body.addEventListener("click", clickHandlerGameOverScreen); //click event listeners 


//GameOverScreen Functions

  function clickHandlerGameOverScreen() {

    createGameOverScreen();

    document.body.removeEventListener("click", clickHandlerGameOverScreen);

  }

  function createGameOverScreen() {

    var gameOverBoxDiv = document.createElement("div");
  gameOverBoxDiv.className = "game-over-box";

  var gameOverMainContentDiv = document.createElement("div");
  gameOverMainContentDiv.className = "game-over-main-content";

  var yourScoreDiv = document.createElement("div");
  yourScoreDiv.className = "your-score";
  var yourScoreText = document.createTextNode("your score: ");
  var scoreValue = document.createElement("p");
  scoreValue.textContent = "54";
  yourScoreDiv.appendChild(yourScoreText);
  yourScoreDiv.appendChild(scoreValue);

  var watchtimeLineDiv = document.createElement("div");
  watchtimeLineDiv.className = "watchtime-line";
  var watchtimeText = document.createElement("p");
  watchtimeText.textContent = "Watchtime";
  var watchtimeBarDiv = document.createElement("div");
  watchtimeBarDiv.className = "watchtime-bar";
  var watchtimeBarText = document.createElement("p");
  watchtimeBarText.textContent = "5:24 / 10:00";
  watchtimeBarDiv.appendChild(watchtimeBarText);
  watchtimeLineDiv.appendChild(watchtimeText);
  watchtimeLineDiv.appendChild(watchtimeBarDiv);

  var likeLineDiv = document.createElement("div");
  likeLineDiv.className = "like-line";
  var likeText = document.createElement("p");
  likeText.textContent = "Like?";
  var likeBarDiv = document.createElement("div");
  likeBarDiv.className = "like-bar";
  var likeBarText = document.createElement("p");
  likeBarText.textContent = "YES";
  likeBarDiv.appendChild(likeBarText);
  likeLineDiv.appendChild(likeText);
  likeLineDiv.appendChild(likeBarDiv);

  var commentLineDiv = document.createElement("div");
  commentLineDiv.className = "comment-line";
  var commentText = document.createElement("p");
  commentText.textContent = "Comment?";
  var commentBarDiv = document.createElement("div");
  commentBarDiv.className = "comment-bar";
  var commentBarText = document.createElement("p");
  commentBarText.textContent = "NO";
  commentBarDiv.appendChild(commentBarText);
  commentLineDiv.appendChild(commentText);
  commentLineDiv.appendChild(commentBarDiv);

  gameOverMainContentDiv.appendChild(yourScoreDiv);
  gameOverMainContentDiv.appendChild(watchtimeLineDiv);
  gameOverMainContentDiv.appendChild(likeLineDiv);
  gameOverMainContentDiv.appendChild(commentLineDiv);

  var bottomDiv = document.createElement("div");
  bottomDiv.className = "bottom";
  var nextButtonDiv = document.createElement("div");
  nextButtonDiv.className = "next-button";
  nextButtonDiv.textContent = "NEXT";
  bottomDiv.appendChild(nextButtonDiv);

  gameOverBoxDiv.appendChild(gameOverMainContentDiv);
  gameOverBoxDiv.appendChild(bottomDiv);

  document.body.appendChild(gameOverBoxDiv);

  }