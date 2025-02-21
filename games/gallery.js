/**
 * JavaScript for the image gallery
 */

//function for opening the lightbox when the image thumbnail is clicked
function openLightbox(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imgElement.src;
    
    lightbox.style.display = "flex";
}

//and for closing it
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}