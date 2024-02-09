function redirectToAnotherPage() {
    // Redirect to "clickme.html" or your desired page
    window.location.href = "clickme.html";
}

function toggleMusic() {
    var music = document.getElementById("birthdayMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
