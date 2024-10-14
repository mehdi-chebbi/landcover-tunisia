const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const nextButton = document.querySelector(".controls button.forward");
const prevButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Symphony",
    name: "Clean Bandit ft. Zara Larsson",
    source:
      "https://github.com/mehdi-chebbi/songs/raw/refs/heads/main/Balti%20feat.%20Hamouda%20-%20Ya%20Lili%20(Official%20Music%20Video).mp3",
  },
  {
    title: "Pawn It All",
    name: "Alicia Keys",
    source:
      "https://github.com/mehdi-chebbi/songs/raw/refs/heads/main/California%20Love%20(Original%20Version).mp3",
  },
  {
    title: "Seni Dert Etmeler",
    name: "Madrigal",
    source:
      "https://github.com/mehdi-chebbi/songs/raw/refs/heads/main/Can't%20Hold%20Us%20-%20Macklemore%20&%20Ryan%20Lewis%20(feat.%20Ray%20Dalton).mp3",
  },
  {
    title: "Instant Crush",
    name: "Daft Punk ft. Julian Casablancas",
    source:
      "https://github.com/mehdi-chebbi/songs/raw/refs/heads/main/GALA%20-%20Freed%20from%20desire%20%5BOfficial%20Video%5D.mp3",
  },
  {
    title: "As It Was",
    name: "Harry Styles",
    source:
      "https://github.com/mehdi-chebbi/songs/raw/refs/heads/main/LMFAO%20-%20Sexy%20and%20I%20Know%20It.mp3",
  },

  {
    title: "Physical",
    name: "Dua Lipa",
    source:
      "https://github.com/mehdi-chebbi/songs/raw/refs/heads/main/Peggy%20Gou%20It%20Goes%20Like%20Nanana%20Lyrics%20I%20can%20t%20explain%20I%20got%20a%20feeling%20that%20I%20just%20I%20can%20t%20erase.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Dua-Lipa-Physical.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", () => {});
}

song.addEventListener("timeupdate", () => {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

song.addEventListener("ended", () => {
  currentSongIndex = (swiper.activeIndex + 1) % songs.length;
  updateSongInfo();
  swiper.slideTo(currentSongIndex);
  playSong();
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", () => {
  song.currentTime = progress.value;
});

progress.addEventListener("change", () => {
  playSong();
});

nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

prevButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

swiper.on("slideChange", () => {
  currentSongIndex = swiper.activeIndex;
  updateSongInfo();
  playPause();
});
