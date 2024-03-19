// Function Clear Calculator screen.
function clearScreen () {
    document.getElementById("result").value = "";
}

// Function Show Values
function display(value) {
    document.getElementById("result").value += value;
}

// Function Show Values
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
