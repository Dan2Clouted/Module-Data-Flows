function getComic() {
  fetch("https://xkcd.vercel.app/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const img = document.getElementById("comic");
      img.src = data.img;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
getComic();
