let memeImage = document.querySelector('#addImage');
let topText = document.querySelector('#addTopText');
let bottomText = document.querySelector('#addBottomText');
let form = document.querySelector('#addMeme');
let memeList = document.querySelector('#generated-memes');

memeList.addEventListener('dblclick', function(e){
  console.log(e.target)
    if(e.target.tagName === 'DIV'){
    e.target.remove();
    }
    if(e.target.tagName === 'H2'){
    e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    let imageUrl = memeImage.value;
    const newMeme = document.createElement('div');
    const upperText = document.createElement('h2');
    const lowerText = document.createElement('h2')
    lowerText.setAttribute("class", "bottom-text")
    newMeme.style.backgroundImage = "url(" + imageUrl + ")";
    console.log(newMeme.style.backgroundImage);
    upperText.innerText = topText.value;
    lowerText.innerText = bottomText.value;
    newMeme.appendChild(upperText);
    newMeme.appendChild(lowerText);
    memeList.appendChild(newMeme);
    memeImage.value = '';
    topText.value = '';
    bottomText.value = '';
})