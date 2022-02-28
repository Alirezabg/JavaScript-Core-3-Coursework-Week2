fetch(`https://xkcd.now.sh/?comic=latest`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let imageDiv = document.getElementById("imageDiv");
    let image = document.createElement(`img`);
    image.src = data.img;
    image.alt= data.alt;
    imageDiv.appendChild(image);

    console.log(data);
  });
