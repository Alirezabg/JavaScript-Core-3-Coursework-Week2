function fetchDogPhoto() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => {
      return response.json();
    })
    .then((objects) => {
      let dogPhoto = document.createElement(`img`);
      let newList = document.createElement(`li`);
      let mainUl = document.getElementById(`dogPhotoesList`);
      dogPhoto.src = objects.message;
      newList.appendChild(dogPhoto);
      mainUl.appendChild(newList);
    });
}
fetchDogPhoto();
let dogButton = document.createElement("button");
dogButton.innerText = "Add More Dog Photo"
let dogButtonDiv = document.getElementById(`dogButtonDiv`);
dogButtonDiv.appendChild(dogButton);
dogButton.addEventListener("click", fetchDogPhoto);
