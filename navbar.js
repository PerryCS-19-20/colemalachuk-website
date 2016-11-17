var nbHTML = "<ul class='nav' id='top'> \
    <li class='nav'><a class='active' href='#top'>Home</a></li> \
    <li class='dropdown'> \
    <a href='#proj' class='dropbtn'>Projects</a> \
    <div class='dropdown-content'> \
        <a href='projects/breakout.html'>Breakout</a> \
        <a href='projects/popup.html'>Popup</a> \
        <a href='projects/crazyball.html'>Crazy Ball</a> \
        <a href='projects/js-colorchange.html'>JavaScript Color Change</a> \
        <a href='projects/htmltest.html'>HTML Test</a> \
        <a href='projects/htmltest.html'>To Do List</a> \
    </div> \
  </li> \
    <li class='nav'><a href='bio.html'>About</a></li> \
</ul>";
document.getElementById("navbar").innerHTML = nbHTML.value;