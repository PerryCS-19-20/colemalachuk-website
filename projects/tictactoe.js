var player = 1;
var winners = 0;

function move(box) {
    if(winners == 0) {
    var cell = document.getElementById(box);
    if(cell.textContent === "") {
        if(player === 1) {
            var text = "X";
            cell.textContent = text;
            var text = " "
            var cell = document.getElementById("message");
            cell.textContent = text;
            player = 2
            checkWin();
        } else {
            var text = "O";
            cell.textContent = text;
            var text = " "
            var cell = document.getElementById("message");
            cell.textContent = text;
            player = 1
            checkWin();
        }
    } else {
        var text = "You need to click in a new box."
        var cell = document.getElementById("message");
        cell.textContent = text;
    }
    }
}


 function checkWin() {
     console.log("starting win check")
     var c1 = document.getElementById("1").textContent;
     var c2 = document.getElementById("2").textContent;
     var c3 = document.getElementById("3").textContent;
     var c4 = document.getElementById("4").textContent;
     var c5 = document.getElementById("5").textContent;
     var c6 = document.getElementById("6").textContent;
     var c7 = document.getElementById("7").textContent;
     var c8 = document.getElementById("8").textContent;
     var c9 = document.getElementById("9").textContent;
     
     
     if (("" != c1) && (c1 === c2) && (c2 === c3)) {
         console.log("row 1 won");
         winner(c1);
     } else if (("" !== c4) && (c4 === c5) && (c5 === c6)) {
         console.log("row 2 won");
         winner(c4);
     } else if (("" != c7) && (c7 === c8) && (c8 === c9)) {
         console.log("row 3 won");
         winner(c7);
     } else if (("" != c1) && (c1 === c5) && (c5 === c9)) {
         console.log("diag 159 won");
         winner(c1);
     } else if (("" != c3) && (c3 === c5) && (c5 === c7)) {
         console.log("diag 357 won");
         winner(c3);
     } else if (("" != c1) && (c1 === c4) && (c4 === c7)) {
         console.log("col 147 won");
         winner(c1);
     } else if (("" != c2) && (c2 === c5) && (c5 === c8)) {
         console.log("col 258 won");
         winner(c2);
     } else if (("" != c3) && (c3 === c6) && (c6 === c9)) {
         console.log("col 369 won");
         winner(c3);
     }
     
}
 
 function winner(xory) {
        var text = xory + " won!";
        var cell = document.getElementById("message");
        cell.textContent = text;
        winners = 1;
 }