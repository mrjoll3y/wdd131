const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

footer.innerHTML = `<p>&copy; ${currentYear} Callen Jolley | Last Modified: ${lastModified}</p>`;

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const menuButton = document.createElement('button');
    
    menuButton.classList.add('menu-button');
    menuButton.innerHTML = '&#9776;'; 
    nav.prepend(menuButton);

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.innerHTML = nav.classList.contains('open') ? '✖' : '&#9776;'; 
    });
});