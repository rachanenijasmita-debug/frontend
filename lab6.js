document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student details
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    // Get marks
    let maths = Number(document.getElementById("maths").value);
    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);
    let computer = Number(document.getElementById("computer").value);
    let english = Number(document.getElementById("english").value);

    // Calculate total
    let total = maths + physics + chemistry + computer + english;

    // Calculate percentage
    let percentage = total / 5;

    // Calculate grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Check pass or fail
    let result;

    if (
        maths >= 35 &&
        physics >= 35 &&
        chemistry >= 35 &&
        computer >= 35 &&
        english >= 35
    ) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }

    // Display result
    let tableBody = document.getElementById("resultBody");

    let row = tableBody.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = total;
    row.insertCell(3).innerHTML = percentage.toFixed(2) + "%";
    row.insertCell(4).innerHTML = grade;
    row.insertCell(5).innerHTML = result;

});