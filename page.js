let currentSongIndex = 0;
let currentMood = localStorage.getItem("userMood");
let songs = {
    happy:["music/the_wanted_chasing_the_sun.mp3",
        "music/one_direction_best_song_ever.mp3",
        "music/fetty_wap_trap_queen.mp3",
        "music/future_metro_boomin_travis_scott_playboi_carti_type_shit.mp3",
        "music/pills_automobiles.mp3",
        "music/a_boogie_wit_da_hoodie_look_back_at_it.mp3",
        "music/chris_brown_under_the_influence.mp3"

    ],
    sad: ["music/warriyo_mortals_ft._laura_brehm_mp3_69512.mp3",
        "music/mac_miller_my_favorite_part.mp3",
        "music/hotel_ugly_shut_up_my_moms_calling.mp3",
        "music/chris_brown_under_the_influence.mp3"
        , 
        "music/maroon_5_payphone_explicit_ft._wiz_khalifa.mp3"],
    justThere: ["music/anne-marie_james_arthur_rewrite_the_stars_from_the_greatest_showman_reimagined.mp3"],
    all: ["music/warriyo_mortals_ft._laura_brehm_mp3_69512.mp3",
        "music/the_wanted_we_own_the_night.mp3",
        "music/the_wanted_chasing_the_sun.mp3",
        "music/one_direction_what_makes_you_beautiful.mp3",
        "music/one_direction_night_changes.mp3",
        "music/one_direction_live_while_we_re_young.mp3",
        "music/one_direction_drag_me_down.mp3",
        "music/maroon_5_payphone_explicit_ft._wiz_khalifa.mp3",
        "music/john_legend_all_of_me.mp3",
        "music/anne-marie_james_arthur_rewrite_the_stars_from_the_greatest_showman_reimagined.mp3",
        "music/night_lovell_forget_about_me.mp3",
        "music/a_boogie_wit_da_hoodie_look_back_at_it.mp3",
        "music/brandz_zion_intro.mp3",
        "music/chanin_soulmate.mp3",
        "music/chris_brown_under_the_influence.mp3",
        "music/conga.mp3",
        "music/d4vd_here_with_me.mp3",
        "music/dababy_shake_sumn.mp3",
        "music/dej_loaf_me_u_hennessy.mp3",
        "music/fetty_wap_trap_queen.mp3",
        "music/future_metro_boomin_travis_scott_playboi_carti_type_shit.mp3",
        "music/hotel_ugly_shut_up_my_moms_calling.mp3",
        "music/j._cole_work_out.mp3",
        "music/love_songs_bonus.mp3",
        "music/mac_miller_my_favorite_part.mp3",
        "music/pills_automobiles.mp3",
        "music/sauti_sol_afrikan_star_featuring_burna_boy.mp3"

    ]
};

function loadSongs() {
    const musicList = document.getElementById("musicList");
    musicList.innerHTML = '';

    if (songs[currentMood]) {
        songs[currentMood].forEach((song, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${song} <button onclick="playSong(${index})">Play</button> <button onclick="deleteSong(${index})">Delete</button>`;
            musicList.appendChild(listItem);
        });
    }
}

function playSong(index) {
    const audioPlayer = document.getElementById("audioPlayer");

    if (audioPlayer) {
    audioPlayer.src = songs[currentMood][index];
    currentSongIndex = index;
    audioPlayer.play();

    audioPlayer.onended = function() {
        nextSong();
    };
    } else {
        console.error("Error: 'audioPlayer' element not found.")
    }
}

function deleteSong(index) {
    songs[currentMood].splice(index, 1);
    loadSongs();
}

function nextSong() {
    currentSongIndex++;

    if (currentSongIndex >= songs[currentMood].length) {
        currentSongIndex = 0;
    }
    playSong(currentSongIndex);
}

function addSong() {
    const newSong = document.getElementById("newSong").Value;
    if (newSong) {
        songs[currentMood].push(newSong);
        loadSongs();
    }
}

window.onload = loadSongs;