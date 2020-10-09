var nutritionistApp = document.getElementById("nutritionistApp");
var trainerApp = document.getElementById("trainerApp");

function nutritionistAppDisplay() {
    nutritionistApp.style.display = "block";
    trainerApp.style.display = "none";

    window.location.href = "#nutritionistApp";
}

function nutritionistAppSubmit() {
    var firstname = document.getElementById("nutritionistFirsttName");
    var lastname = document.getElementById("nutritionistLastName");
    var email = document.getElementById("nutritionistEmail");
    var phonenumber = document.getElementById("nutritionistPhoneNumber");
    var availablity = document.getElementById("nutritionistAvailability");
    var rate = document.getElementById("nutritionistRate");
    var specialties = document.getElementById("nutritionistSpecialties");
    var statement = document.getElementById("nutritionistStatement");

    console.log(firstname, lastname, email, phonenumber, availablity, rate, specialties);

    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phonenumber.value = "";
    availablity.value = "";
    rate.value = "";
    specialties.value = "";
    statement.value = "";
}

function trainerAppDisplay() {
    trainerApp.style.display = "block";
    nutritionistApp.style.display = "none";

    window.location.href = "#trainerApp";
}

function trainerAppSubmit() {
    var firstname = document.getElementById("trainerFirsttName");
    var lastname = document.getElementById("trainerLastName");
    var email = document.getElementById("trainerEmail");
    var phonenumber = document.getElementById("trainerPhoneNumber");
    var availablity = document.getElementById("trainerAvailability");
    var rate = document.getElementById("trainerRate");
    var specialties = document.getElementById("trainerSpecialties");

    var clientTypesParent = document.getElementById("clientTypes");
    var clientTypes = clientTypesParent.getElementsByTagName("input");
    var clients = [];
    for (var i = 0; i < clientTypes.length; i++) {
        clients.push(clientTypes[i].value);
        clientTypes[i].checked = false;
    }

    var trainingMedium = document.getElementById("trainingMedium");
    var trainingMedia = trainingMedium.getElementsByTagName("input");
    var training = [];
    for (var i = 0; i < trainingMedia.length; i++) {
        training.push(trainingMedia[i].value);
        trainingMedia[i].checked = false;
    }

    var trainerStyle = document.getElementById("trainerStyle");
    var statement = document.getElementById("trainerStatement");

    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phonenumber.value = "";
    availablity.value = "";
    rate.value = "";
    specialties.value = "";
    statement.value = "";
    trainerStyle.value = "";
}

