let images = document.querySelectorAll('img[data-src]');
for (let img of images) {
    img.src = img.dataset.src;
    img.style.position = 'static';
}

// vim:ts=4 sts=4 sw=4 et
