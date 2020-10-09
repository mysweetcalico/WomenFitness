var nutritionistApp = document.getElementById("nutritionistApp");
var trainerApp = document.getElementById("trainerApp");

console.log("hello");

function trainerAppDisplay() {
    trainerApp.style.display = block;
    nutritionistapp.style.display = none;
}

function nutritionistAppDisplay() {
    nutritionistApp.style.display = block;
    trainerApp.style.display = none;
}

