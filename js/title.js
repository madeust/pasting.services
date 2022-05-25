if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["a", "az", "azi", "azis", "azis.", "azis.s", "azis.sh", "azis.sho", "azis.shop", "azis.sho", "azis.sh", "azis.s", "azis.", "azis", "azi", "az", "a" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}
