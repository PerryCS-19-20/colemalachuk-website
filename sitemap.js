function buildMap(id) {
    var sitemap = document.getElementById(id);
    var ul = document.createElement("ul");
    sitemap.appendChild(ul);
    var index = new Array("Home", "index.html", "About", "bio.html",
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
            "Sitemap", "sitemap.html");
    for (var i = 0; i < 26; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        var a = document.createElement("a");
        a.textContent = index[i];
        i++;
        a.href = index[i];
        li.appendChild(a);
    }
}