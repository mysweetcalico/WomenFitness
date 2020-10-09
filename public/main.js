var nutritionistApp = document.getElementById("nutritionistApp");
var trainerApp = document.getElementById("trainerApp");

function nutritionistAppDisplay() {
    nutritionistApp.style.display = "block";
    trainerApp.style.display = "none";

    window.location.href = "#nutritionistApp";
}

function nutritionistAppSubmit() {
    var firstname = document.getElementById("nutritionistFirsttName").value;
    var lastname = document.getElementById("nutritionistLastName").value;
    var email = document.getElementById("nutritionistEmail").value;
    var phonenumber = document.getElementById("nutritionistPhoneNumber").value;
    var availablity = document.getElementById("nutritionistAvailability").value;
    var rate = document.getElementById("nutritionistRate").value;
    var specialties = document.getElementById("nutritionistSpecialties").value;
    var statement = document.getElementById("nutritionistStatement").value;

    console.log(firstname, lastname, email, phonenumber, availablity, rate, specialties);

}

function trainerAppDisplay() {
    trainerApp.style.display = "block";
    nutritionistApp.style.display = "none";

    window.location.href = "#trainerApp";
}

function trainerAppSubmit() {
    var firstname = document.getElementById("trainerFirsttName").value;
    var lastname = document.getElementById("trainerLastName").value;
    var email = document.getElementById("trainerEmail").value;
    var phonenumber = document.getElementById("trainerPhoneNumber").value;
    var availablity = document.getElementById("trainerAvailability").value;
    var rate = document.getElementById("trainerRate").value;
    var specialties = document.getElementById("trainerSpecialties").value;

    var clientTypesParent = document.getElementById("clientTypes");
    var clientTypes = clientTypesParent.getElementsByTagName("input");
    var clients = [];
    for (var i = 0; i < clientTypes.length; i++) {
        clients.push(clientTypes[i].value);
    }
    console.log(clients);

    var trainingMedium = document.getElementById("trainingMedium");
    var trainingMedia = trainingMedium.getElementsByTagName("input");
    var training = [];
    for (var i = 0; i < trainingMedia.length; i++) {
        training.push(trainingMedia[i].value);
    }
    console.log(training);

    var trainerStyle = document.getElementById("trainerStyle");
    var statement = document.getElementById("trainerStatement");
}

