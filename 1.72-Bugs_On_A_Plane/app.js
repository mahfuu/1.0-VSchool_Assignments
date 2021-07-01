const airForm = document.getElementById("airline-form");
const submitBtn = document.getElementById("submit");
// var query = document.querySelector;

function formAlert() {
    var firstName = airForm.elements["first-name"].value;
    var lastName = airForm.elements["last-name"].value;
    var age = airForm.elements["age"].value;
    var gender = airForm.elements["gender"].value;
    var location = airForm.elements["travel-location"].value;
    var diet = [];
    if (airForm.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (airForm.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (airForm.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submitBtn.addEventListener("click", formAlert);