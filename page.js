let currentSongIndex = 0;
let currentMood = localStorage.getItem("userMood");
let songs = {
    happy:["music/prodbycpkshawn_ugly_andz_yo_bunny.mp3",
        "music/the_wanted_chasing_the_sun.mp3",
        "music/one_direction_best_song_ever.mp3",
        "music/fetty_wap_trap_queen.mp3",
        "music/future_metro_boomin_travis_scott_playboi_carti_type_shit.mp3",
        "music/pills_automobiles.mp3",
        "music/a_boogie_wit_da_hoodie_look_back_at_it.mp3",
        "music/chris_brown_under_the_influence.mp3",
        "music/oversized_t_shirt_matata_ft._sauti_sol.mp3",
        "music/ssaru_ft._trio_mio_maintain.mp3",
        "music/ssaru_x_tipsy_x_masauti_bad.mp3",
        "music/tipsy_gee_spoiler_4t3_shumpele_shumpe.mp3", 
        "music/matata_ft._watendawili_inakubalika.mp3"      

    ],
    sad: ["music/victony_risk_official_visualizer.mp3",
        "music/warriyo_mortals_ft._laura_brehm_mp3_69512.mp3",
        "music/mac_miller_my_favorite_part.mp3",
        "music/hotel_ugly_shut_up_my_moms_calling.mp3",
        "music/chris_brown_under_the_influence.mp3",
        "music/tom_odell_another_love.mp3",
        "music/centuries_fall_out_boy.mp3",
        "music/maroon_5_payphone_explicit_ft._wiz_khalifa.mp3",
        "music/matata_ft._watendawili_inakubalika.mp3",
        "music/prodbycpkshawn_ugly_andz_yo_bunny.mp3",
        "music/set_it_feat._ajay_buruklynboyz.mp3"
    ],
    nostalgia: [
        "music/xxxtentacion_sad.mp3",
        "music/nf_let_you_down.mp3",
        "music/post_malone_congratulations.mp3",
        "music/post_malone_swae_lee_sunflower.mp3",
        "music/marshmello_silence_ft._khalid.mp3",
        "music/macklemore_ryan_lewis_thrift_shop.mp3",
        "music/lil_wayne_feat._bruno_mars_mirror.mp3",
        "music/lukas_graham_7_years.mp3",
        "music/nicki_minaj_starships.mp3",
        "music/post_malone_better_now.mp3",
        "music/drake_hotline_bling.mp3",
        "music/clean_bandit_symphony_feat._zara_larsson.mp3",
        "music/katy_perry_dark_horse.mp3",
        "music/g-eazy_x_bebe_rexha_me_myself_and_i.mp3",
        "music/centuries_fall_out_boy.mp3",
        "music/khalid_young_dumb_broke.mp3",
        "music/justin_bieber_what_do_you_mean.mp3",
        "music/ellie_goulding_love_me_like_you_do.mp3",
        "music/bruno_mars_grenade.mp3",
        "music/big_sean_blessings_ft._drake.mp3",
        "music/travis_scott_sicko_mode.mp3",
        "music/will.i.am_scream_shout_ft._britney_spears.mp3",
        "music/flo_rida_good_feeling.mp3",
        "music/kanye_west_black_skinhead_yeezus.mp3",
        "music/drake_one_dance_.mp3",
        "music/david_guetta_hey_mama_official_video_ft_nicki_minaj.mp3"


    ],
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
        "music/sauti_sol_afrikan_star_featuring_burna_boy.mp3",
        "music/4mr_frank_white-alicia_keys.mp3",
        "music/eminem_tobey_feat._big_sean_babytron.mp3",
        "music/glorilla_tgif.mp3",
        "music/iyaz_replay.mp3",
        "music/king_von_crazy_story.mp3",
        "music/lil_baby_gunna_drake_never_recover.mp3",
        "music/lil_baby_gunna.mp3",
        "music/nle_choppa_stickin_and_movin.mp3",
        "music/polo_g_martin_gina.mp3",
        "music/ssaru_ft._trio_mio_maintain.mp3",
        "music/ssaru_x_tipsy_x_masauti_bad.mp3",
        "music/tipsy_gee_spoiler_4t3_shumpele_shumpe.mp3",
        "music/set_it_feat._ajay_buruklynboyz.mp3",
        "music/tom_odell_another_love.mp3",
        "music/wstrn_ft._alkaline_txtin.mp3",
        "music/young_thug_relationship_feat._future.mp3",
        "music/ytb_fatt_what_happened.mp3",
        "music/matata_ft._watendawili_inakubalika.mp3",
        "music/prodbycpkshawn_ugly_andz_yo_bunny.mp3",
        "music/rihanna_loveeeeeee_song.mp3",
        "music/shaboozey_a_bar_song_tipsy.mp3",
        "music/victony_risk_official_visualizer.mp3",
        "music/oversized_t_shirt_matata_ft._sauti_sol.mp3",
        "music/xxxtentacion_sad.mp3",
        "music/nf_let_you_down.mp3",
        "music/post_malone_congratulations.mp3",
        "music/post_malone_swae_lee_sunflower.mp3",
        "music/marshmello_silence_ft._khalid.mp3",
        "music/macklemore_ryan_lewis_thrift_shop.mp3",
        "music/lil_wayne_feat._bruno_mars_mirror.mp3",
        "music/lukas_graham_7_years.mp3",
        "music/nicki_minaj_starships.mp3",
        "music/post_malone_better_now.mp3",
        "music/drake_hotline_bling.mp3",
        "music/clean_bandit_symphony_feat._zara_larsson.mp3",
        "music/katy_perry_dark_horse.mp3",
        "music/g-eazy_x_bebe_rexha_me_myself_and_i.mp3",
        "music/centuries_fall_out_boy.mp3",
        "music/khalid_young_dumb_broke.mp3",
        "music/justin_bieber_what_do_you_mean.mp3",
        "music/ellie_goulding_love_me_like_you_do.mp3",
        "music/bruno_mars_grenade.mp3",
        "music/big_sean_blessings_ft._drake.mp3",
        "music/travis_scott_sicko_mode.mp3",
        "music/will.i.am_scream_shout_ft._britney_spears.mp3",
        "music/flo_rida_good_feeling.mp3",
        "music/kanye_west_black_skinhead_yeezus.mp3",
        "music/drake_one_dance_.mp3",
        "music/david_guetta_hey_mama_official_video_ft_nicki_minaj.mp3"


    ]
};

function loadSongs(searchTerm = '') {
    const musicList = document.getElementById("musicList");
    musicList.innerHTML = '';

    if (songs[currentMood]) {
        const filteredSongs = songs[currentMood].filter(song => {
            const songName = song.split('/').pop().replace(/_/g, ' ').replace('.mp3', '');
            return songName.toLowerCase().includes(searchTerm.toLowerCase());
        });

        filteredSongs.forEach((song, index) => {
            let songName = song.split('/').pop().replace(/_/g, ' ').replace('.mp3', '');
            let listItem = document.createElement("li");
            listItem.innerHTML = `${songName} 
            <button onclick="playSong(${index})">Play</button> 
            <button onclick="deleteSong(${index})">Delete</button>`;
            musicList.appendChild(listItem);
        });
    }
}

function searchSongs() {
    const searchInput = document.getElementById("search-bar").value;
    loadSongs(searchInput);
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

function skipSong() {
    nextSong();
}

function addSong() {
    const newSong = document.getElementById("newSong").value;
    if (newSong) {
        songs[currentMood].push(newSong);
        loadSongs();
    }
}

window.onload = function() {
    loadSongs();
}