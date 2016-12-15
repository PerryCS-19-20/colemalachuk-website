function buildMap(id) {
    var sitemap = document.getElementById(id);
    var topul = document.createElement("ul");
    topul.className = "nav";
    sitemap.appendChild(topul);

    var nondrop = new Array("Home", "index.html", "About", "bio.html", "Site Map", "sitemap.html");
    for (var i = 0; i < 6; i++) {
        var li = document.createElement("li");
        li.className = "nav";
        topul.appendChild(li);
        var a = document.createElement("a");
        a.textContent = nondrop[i];
        i++;
        a.href = nondrop[i];
        li.appendChild(a);
    }
    var dropdown = new Array(
            "Breakout", "projects/breakout.html",
            "Popup", "projects/popup.html",
            "Crazy Ball", "projects/crazyball.html",
            "JavaScript Color Change", "projects/js-colorchange.html",
            "HTML Test", "projects/htmltest.html",
            "To Do List", "projects/todolist.html",
            "Chalkboard", "projects/chalkboard.html",
            "Tic Tac Toe", "projects/tictactoe.html",
            "Multiplication", "projects/multiplication.html",
            "Multiplication with Sliders", "projects/multiplication_slider.html",
            "Sitemap", "sitemap.html",
            "Calculator", "projects/calc.html"
            );
    var li = document.createElement("li");
    li.className = "dropdown";
    topul.appendChild(li);
    var a = document.createElement("a");
    a.textContent = "Projects";
    a.href = "#proj";
    a.className = "dropbtn";
    li.appendChild(a);
    var div = document.createElement("div");
    div.className = "dropdown-content";
    li.appendChild(div);
    for (var i = 0; i < 24; i++) {
        var li = document.createElement("li");
        div.appendChild(li);
        var a = document.createElement("a");
        a.textContent = dropdown[i];
        i++;
        a.href = dropdown[i];
        div.appendChild(a);
    }
}

function navProj(id) {
    var sitemap = document.getElementById(id);
    var topul = document.createElement("ul");
     sitemap.appendChild(topul);

    var nondrop = new Array("Home", "index.html", "About", "bio.html", "Site Map", "sitemap.html");
    for (var i = 0; i < 6; i++) {
        var li = document.createElement("li");
        li.className = "nav";
        topul.appendChild(li);
        var a = document.createElement("a");
        a.textContent = nondrop[i];
        i++;
        a.href = nondrop[i];
        li.appendChild(a);
    }
    var dropdown = new Array(
            "Breakout", "breakout.html",
            "Popup", "popup.html",
            "Crazy Ball", "crazyball.html",
            "JavaScript Color Change", "js-colorchange.html",
            "HTML Test", "htmltest.html",
            "To Do List", "todolist.html",
            "Chalkboard", "chalkboard.html",
            "Tic Tac Toe", "tictactoe.html",
            "Multiplication", "multiplication.html",
            "Multiplication with Sliders", "multiplication_slider.html",
            "Calculator", "calc.html",
            "Sitemap", "sitemap.html"
            );
    var li = document.createElement("li");
    li.className = "dropdown";
    topul.appendChild(li);
    var a = document.createElement("a");
    a.textContent = "Projects";
    a.href = "#proj"
    a.className = "dropbtn"
    li.appendChild(a);
    var div = document.createElement("div");
    div.className = "dropdown-content"
    li.appendChild(div);    for (var i = 0; i < 24; i++) {
        var li = document.createElement("li");
        div.appendChild(li);
        var a = document.createElement("a");
        a.textContent = dropdown[i];
        i++;
        a.href = dropdown[i];
        div.appendChild(a);
    }
}