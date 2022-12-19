function validateForm() {
    let x = document.forms["contact"]["name"].value;
    let y = document.forms["contact"]["email"].value;
    let z = document.forms["contact"]["message"].value;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    if (y == "") {
        alert("Email must be filled out");
        return false;
    }

    if (z == "") {
        alert("Message must be filled out");
        return false;
    }

}
