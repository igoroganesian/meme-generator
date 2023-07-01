const form = document.getElementById('memeForm');
const memeContainer = document.getElementById('memeContainer');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const imageUrl = document.getElementById('url').value;
  const topText = document.getElementById('toptext').value;
  const bottomText = document.getElementById('bottomtext').value;

  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');

  const imageContainer = createImageContainer(imageUrl);
  memeDiv.appendChild(imageContainer);

  const deleteButton = createDeleteButton();
  memeDiv.appendChild(deleteButton);

  /* IF TEXT */ 
  if (topText !== '') {
    const topTextElement = createTextElement('top-text', topText);
    imageContainer.appendChild(topTextElement);
  }

  if (bottomText !== '') {
    const bottomTextElement = createTextElement('bottom-text', bottomText);
    imageContainer.appendChild(bottomTextElement);
  }

  memeContainer.appendChild(memeDiv);

  form.reset();
});

/* IMG CONTAINER */
function createImageContainer(imageUrl) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageContainer.appendChild(imageElement);

  return imageContainer;
}

/* DELETE BUTTON */
function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'X';

  deleteButton.addEventListener('click', function(e) {
    const memeDiv = e.target.closest('.meme');
    memeContainer.removeChild(memeDiv);
  });

  return deleteButton;
}

/* TEXT EL */
function createTextElement(className, textContent) {
  const textElement = document.createElement('div');
  textElement.classList.add(className);
  textElement.textContent = textContent;

  return textElement;
}

