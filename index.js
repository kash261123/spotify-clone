let songIndex = 0;
let audioElement = new Audio("./songs/0.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "I Like Me Better",
    filePath: "./songs/0.mp3",
    coverPath: "./cover/1-let me love you.jpg",
    duration: 3.26,
  },
  {
    songName: "One Direction  18",
    filePath: "./songs/1.mp3",
    coverPath: "./cover/2-18.jpg",
    duration: 4.09,
  },
  {
    songName: "Little Things",
    filePath: "./songs/2.mp3",
    coverPath: "./cover/3-little.jpg",
    duration: 3.38,
  },
  {
    songName: "Night Changes",
    filePath: "./songs/3.mp3",
    coverPath: "./cover/4-night.jpg",
    duration: 4.01,
  },
  {
    songName: "Steal My Girl",
    filePath: "./songs/4.mp3",
    coverPath: "./cover/5-steal.jpg",
    duration: 5.19,
  },
  {
    songName: "Beautiful",
    filePath: "./songs/5.mp3",
    coverPath: "./cover/6-what-makes.jpg",
    duration: 3.27,
  },
  {
    songName: "Let Her Go",
    filePath: "./songs/6.mp3",
    coverPath: "./cover/7-let-her-go.jpg",
    duration: 4.15,
  },
  {
    songName: "Make You Mine",
    filePath: "./songs/7.mp3",
    coverPath: "./cover/8-public.jpg",
    duration: 3.56,
  },
  {
    songName: "Blank Space",
    filePath: "./songs/8.mp3",
    coverPath: "./cover/9-blank-space.jpg",
    duration: 4.33,
  },
  {
    songName: "ZAYN  Let Me",
    filePath: "./songs/9.mp3",
    coverPath: "./cover/10-zyan.jpg",
    duration: 4.12,
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songnames")[0].innerText = songs[i].songName;
  element.getElementsByClassName("timestamp")[0].innerText = songs[i].duration;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (element) => {
      makeAllPlays();
      songIndex = parseInt(element.target.id);
      element.target.classList.remove("fa-play-circle");
      element.target.classList.add("fa-pause-circle");
      audioElement.src = `./songs/${songIndex}.mp3`;
      mastersongname.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  mastersongname.innerText = songs[songIndex].songName;
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./songs/${songIndex}.mp3`;
  mastersongname.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
