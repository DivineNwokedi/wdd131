const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "jj-2020", name: "Jetpack" },
  { id: "ac-3033", name: "Acme Rocket" },
  { id: "dp-4040", name: "Disappearing Paint" },
  { id: "nb-5050", name: "Neural Blender" }
];

const selectElement = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
