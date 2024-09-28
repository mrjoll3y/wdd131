const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

footer.innerHTML = `<p>&copy; ${currentYear} Callen Jolley | Last Modified: ${lastModified}</p>`;

const mainnav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
  document.querySelector("h1").classList.toggle("hide");
});