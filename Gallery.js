const fullimgbox = document.getElementById("fullimgbox")
const fullImg = document.getElementById("fullImg")

function opfullimg(reference){
    fullimgbox.style.display = "flex"
    fullImg.scr = reference

}
function cerrarImg() {
    fullimgbox.style.display = "none"
}