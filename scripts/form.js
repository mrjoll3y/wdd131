
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


const productSelect = document.getElementById('product');
products.forEach(product => {
  let option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const footer = document.querySelector('footer');
footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} Callen Jolley | Last Modified: ${document.lastModified}</p>`;


window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;
  
  
  if (screenWidth < 600) { // For mobile devices
      footer.style.fontSize = "12px";
  } else { 
      footer.style.fontSize = "16px";
  }
});


window.dispatchEvent(new Event('resize'));

  