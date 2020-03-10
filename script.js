function vorige_foto() {
    document.getElementById("foto_1").style.display = none;
    document.getElementById("foto_2").style.display = none;
    document.getElementById("foto_3").style.display = block;
}
function volgende_foto() {
    document.getElementById("foto_1").style.display = none;
    document.getElementById("foto_2").style.display = block;
    document.getElementById("foto_3").style.display = none;
}