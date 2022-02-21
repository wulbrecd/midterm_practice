const flashingBlock = document.querySelector('#color-timer-target');

flashingBlock.classList.add('blue');
setInterval(() => {
    flashingBlock.classList.toggle('blue');
    flashingBlock.classList.toggle('yellow');
}, 2000);