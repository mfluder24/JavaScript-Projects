function validateForm() {
    let x = document.forms["contact"]["fname"]["lname"]["email"].value;
    if (x == "") {
        alert("All fields must be filled.");
        return false;
    }
}