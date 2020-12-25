
document.addEventListener('keydown', function (e) {
    console.log('key code ', e.key)
    const keyCode = e.key;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    console.log(audio)
    const animateButton = document.querySelector(`li[data-key="${keyCode}"`);
    animateButton.classList.add("playing");
    animateButton.classList.add("sound");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(animateButton);

    //let buffer = BaseAudioContext.createBuffer(2, 22050, 44100)
});

document.addEventListener('keyup', function (e) {
    const keyCode = e.key;
    const animateButton = document.querySelector(`li[data-key="${keyCode}"`);
    animateButton.classList.remove("playing");
    animateButton.classList.remove("sound");
});