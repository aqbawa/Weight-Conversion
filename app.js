let pounds = document.getElementById("lbs-input");
pounds.addEventListener("input", (event) => {
  let lbs = event.target.value;
  let kg = document.getElementById("kg-btn");
  kg.addEventListener("click", () => {
    let kgWeight = Math.floor(lbs / 2.205);
    kg.textContent = "Kilograms=" + kgWeight;
  });
  let grams = document.getElementById("g-btn");
  grams.addEventListener("click", () => {
    let gWeight = Math.floor(lbs * 454);
    grams.textContent = "Grams=" + gWeight;
  });
  let ounces = document.getElementById("oz-btn");
  ounces.addEventListener("click", () => {
    let ozWeight = Math.floor(lbs * 16);
    ounces.textContent = "Ounces=" + ozWeight;
  });
});
