let compass = document.querySelector('.compass');
let navLinks = document.querySelector('.nav-links')



function toggleNav(event) {
    console.log(event)
   if (navLinks.style.display === 'none')
   navLinks.style.display = 'flex';
   else navLinks.style.display = 'none';
}



compass.addEventListener('mouseover', toggleNav)