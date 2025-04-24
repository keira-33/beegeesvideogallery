//Get Current Year
window.onload = function () {
    var d = new Date();
    document.getElementById("copyright").innerHTML = d.getFullYear();
}