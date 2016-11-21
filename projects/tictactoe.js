var player = 1;

function move(box) {
    var cell = document.getElementById(box);
    if(cell.textContent == "") {
        if(player == 1) {
            var text = "X";
            cell.textContent = text;
            var text = " "
            var cell = document.getElementById("message");
            cell.textContent = text;
            player = 2
        } else {
            var text = "O";
            cell.textContent = text;
            var text = " "
            var cell = document.getElementById("message");
            cell.textContent = text;
            player = 1
        }
    } else {
        var text = "You need to click in a new box."
        var cell = document.getElementById("message");
        cell.textContent = text;
    }
}
