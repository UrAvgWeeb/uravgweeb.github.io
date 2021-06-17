if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 250);

}

var x = 0;

var titleText = ["n", "ne", "neo", "neoz", "neoz.", "neoz.x", "neoz.xy", "neoz.xyz", "neoz.xyz", "neoz.xyz", "neoz.xyz", "neoz.xyz", "-", ".", "$"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

