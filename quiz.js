/**
 * Javascript for the quiz page
 */

// variables for points and a list for form ids
let points = 0;
const formIds = ['unity1', 'unity2', 'unity3', 'unity4'];


// check the form by id
function check(formId) {
    var form = document.getElementById(formId);
    var selected = form.querySelector('input[type="radio"]:checked');
    var resultElement = form.querySelector('.result');

    // if no button is selected
    if (!selected) {
        resultElement.innerText = "Please select an option.";
        resultElement.style.color = "#cb4b16";
        return;
    }

    // if the selection is correct or incorrect
    if (selected.value == "correct") {
        resultElement.innerText = "Correct!";
        resultElement.style.color = "#859900";
        points += 1;
    } else {
        resultElement.innerText = "Incorrect!";
        resultElement.style.color = "#dc322f";
    }

    // update the points text and progress bar
    updatePoints();
}

// the check button calls this and sends every form to the check function.
// the name is checkUnity because I had plans for other questions too but decided to scrap it because of time constraints
function checkUnity() {
    
    points = 0;
    formIds.forEach(formId => {
        check(formId);
    });
}

//function to reset all the forms
function resetAllForms() {

    formIds.forEach(formId => {     
        const form = document.getElementById(formId);
        form.reset();

        const resultElement = form.querySelector('.result');
        resultElement.innerHTML = "&nbsp;";
    });

    points = 0;
    updatePoints();
}

// function for updating the points text and progress bar.

function updatePoints() {
    
    const progressBarFill = document.getElementById("progress-bar-fill");
    const progressPercentage = (points / 4) * 100;

    document.getElementById("points").innerText = "Results: " + points + "/4 correct";
    progressBarFill.style.width = `${progressPercentage}%`;
}