let compass = document.querySelector('.compass');
let links = []


function loadNavLinks(event) {
    console.log(event)
    links = [
        {
            name:'About',
            link: 'about.html'
        },
        {
            name: 'Portfolio',
            link: 'portfolio.html'
        },
        {
            name: 'Contact',
            link: 'contact.html'
        }
    ]
    createLinks(links)
}

function createLinks(links){
    console.log(links)
    let navLinks = document.querySelector('nav-links');

    for (let i = 0; i < links[i].length; i++) {
        let linkName = links.name;
        let linkHref = links.link;
        let linkItem = document.createElement('li');
        let linkTag = document.createElement('a');

        console.log(linkName, linkHref)
        
        linkItem.setAttribute('class', 'liItem');
        // linkTag.setAttribute({
        //     'class': 'liLink',
        //     // 'src' : linkHref
        // });

        linkItem.textContent = linkName;

        linkItem.appendChild(linkTag);
        navLinks.appendChild(linkItem)
    }

}

compass.addEventListener('click', loadNavLinks)