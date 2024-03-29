function translateScrollbarContainerX(translateX) {
    var scrollbarContainer = document.querySelector('.scrollbar-container');
    if (scrollbarContainer) {
      scrollbarContainer.style.transform = `translateX(${translateX}px)`;
    } else {
      console.error('Scrollbar container not found.');
    }
    //in this function 1.8px is 1% ex(90px is 50%)
  }

  function updateParagraphsContent(content) {
    var paragraphs = document.querySelectorAll('.scrollbar-container p');
    for (var i = 0; i < 1; i++) {
  paragraphs[i].textContent = content;
  
}

  }

  // TODO: make function to automatically calculate the percentage based on pixels moved

  translateScrollbarContainerX(90);
  updateParagraphsContent('50%');