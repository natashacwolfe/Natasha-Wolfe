let compass = document.querySelector('.compass');
let navLinks = document.querySelector('.nav-links');
let logoImage = document.getElementById('main-image');
let switchImages = ["./assets/images/1.png", "./assets/images/2.png", "./assets/images/3.png", "./assets/images/4.png"]
let i = 0;

// function toggleImg(event){
//     console.log(event);
//     console.log(switchImages)
//  for (let i = 0; i < switchImages.length; i++){
//     logoImage.setAttribute("background", `url${switchImages[i]}`)
//  }
// }
let timer = setInterval(toggleImg, 800);

function toggleNav(event) {
    console.log(event)
   if (navLinks.style.display === 'none')
   navLinks.style.display = 'flex';
   else navLinks.style.display = 'none';
};

function toggleImg(){
    console.log("done")
    logoImage.style.background = `url('${switchImages[i]}')`;
    console.log(logoImage);
    if (i < switchImages.length - 1){
        i++;
    } else {
        i = 0;
    }
}

compass.addEventListener('mouseover', toggleNav);
// logoImage.addEventListener('mouseover', toggleImg);
