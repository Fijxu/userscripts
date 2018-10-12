let lazy_images = document.querySelectorAll('img.lazy-img__image');
for (let img of lazy_images) {
    img.src = img.getAttribute('data-native-src');
    img.classList.add('loaded');
}

// vim:ts=4 sts=4 sw=4 et
