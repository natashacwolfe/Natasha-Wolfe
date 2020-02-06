
let logoImage = document.getElementById('main-image');
let switchImages = ["./assets/images/1.png", "./assets/images/2.png", "./assets/images/3.png", "./assets/images/4.png"]
let i = 0;
let smallLogoImage = document.getElementById('small-main-image')
let smallSwitchImages = ['./assets/images/1small.png', './assets/images/2small.png', './assets/images/3small.png','./assets/images/4small.png' ]
let j = 0;
let galleryTile = document.querySelectorAll('.gallery-image');
// function toggleImg(event){
//     console.log(event);
//     console.log(switchImages)
//  for (let i = 0; i < switchImages.length; i++){
//     logoImage.setAttribute("background", `url${switchImages[i]}`)
//  }
// }
let timer = setInterval(toggleImg, 800);


function toggleImg(){
    // console.log("done")
    logoImage.style.background = `url('${switchImages[i]}')`;
    logoImage.style.backgroundRepeat="no-repeat";
    // console.log(logoImage);
    if (i < switchImages.length - 1){
        i++;
    } else {
        i = 0;
    }
}
let smallImgTimer = setInterval(toggleImgSmall, 800);


function toggleImgSmall(){
    // console.log("done")
    smallLogoImage.style.background = `url('${smallSwitchImages[i]}')`;
    smallLogoImage.style.backgroundRepeat="no-repeat";
    // console.log(logoImage);
    if (i < smallSwitchImages.length - 1){
        j++;
    } else {
        j = 0;
    }
};

function showHidden(event) {
    // let hidden = document.querySelector('.collapsed');
    let gallerycard = event.target.closest(".gallery-card")
    let hidden = (gallerycard.querySelector(".collapsed"));
    console.log(hidden)
    console.log(hidden.style.display)
    if (hidden.style.display == 'flex') {
        hidden.style.display = 'none'; 
    } else{
        hidden.style.display = 'flex';
        console.log(hidden.style.display);
    }
};
// logoImage.addEventListener('mouseover', toggleImg);
galleryTile.forEach((tile)=>{
    tile.addEventListener('click', showHidden);
})