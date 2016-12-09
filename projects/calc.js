var ans = 0;
var sc = 0;
function formula() {
    var r = parseFloat(document.getElementById("r").value);
    ans = Math.PI * Math.pow(r, 2);
    var answer = document.getElementById("answer");
    answer.textContent = ans;
    if (sc == 0) {
        var div = document.getElementById("ans");
        var button = document.createElement("button");
        button.onclick = round;
        button.textContent = "Round Answer";
        div.appendChild(button);
        sc = 1;
    } else {
        /* do nothing */
    }
}

function round() {
    var answer = document.getElementById("answer");
    answer.textContent = Math.round(answer.textContent);
}