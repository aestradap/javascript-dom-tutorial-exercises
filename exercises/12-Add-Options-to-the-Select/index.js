let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let mySelect = document.querySelector('#mySelect');
for(let country of countries){
    let newCountry = document.createElement('option');
    newCountry.innerHTML = country
    mySelect.appendChild(newCountry);
}

mySelect.addEventListener("change", function () {
    alert(mySelect.value);
  });
