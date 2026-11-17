const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(imgSrc, captionText) {
    lightbox.style.display = 'block';
    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = captionText;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}