var ans = 0;

function formula() {
    var r = parseFloat(document.getElementById("r").value); 
    ans = Math.PI * Math.pow(r, 2);
    var answer = document.getElementById("answer");
    answer.textContent = ans;
    var div = document.getElementById("ans");
    var button = document.createElement("button");
    button.onclick = "round();";
    button.textContent = "Round Answer";
    div.appendChild(button);
}

function round() {
    var answer = document.getElementById("answer");
    answer.textContent = Math.round(document.getElementById("answer").value);
}