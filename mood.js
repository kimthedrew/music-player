const correctName = "Ashley Aderi";
const moods = {
    happy: ["music/the_wanted_chasing_the_sun.mp3"],
    sad: ["music/one_direction_best_song_ever.mp3"],
    justThere: ["music/anne-marie_james_arthur_rewrite_the_stars_from_the_greatest_showman_reimagined.mp3"],
    all: ["music/warriyo_mortals_ft._laura_brehm_mp3_69512.mp3"]
};

function checkName() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput === correctName) {
        console.log("correct name entered")
        document.getElementById("moodSection").style.display = "block";

    } else {
        console.log("incorrect name entered")
        alert("Incorrect name, use both names that start with A.");
    }
}

function checkMood() {
    const moodInput = document.getElementById("moodInput").value.toLowerCase();
    if (moods[moodInput]) {
        localStorage.setItem("userMood", moodInput);
        window.location.href = "page.html"
    } else {
        alert("Mood not recognized, try again.");
    }
}