// Lyrics - Start
const lyrics = [
  [31.6, "Some people think I'm acting worse for wear"],
  [35.12, "Suffice to say this is a quaint affair"],
  [38.58, "But no one really knows me like Harvey"],
  [42.15, "And once you've met him, I'm sure you'll agree"],
  [57.81, "Harvey"],
  [59.25, "Nobody knows what I see"],
  [62.64, "Nobody knows I'm waiting"],
  [66.01, "Waiting for you to call"],
  [71.12, "Harvey"],
  [72.74, "Nobody knows what I see"],
  [76.2, "Everyone thinks I'm crazy"],
  [79.46, "Crazy for you, oh boy"],
  [85.78, "Barked at the moon amid an empty street"],
  [89.12, "We felt the remnants of the evening heat"],
  [92.25, 'Said, "Harvey let me be the one to say'],
  [95.81, "I wouldn't dream this any other way\""],
  [111.93, "Harvey"],
  [113.43, "Nobody knows what I see"],
  [116.7, "Nobody knows I'm waiting"],
  [120.07, "Waiting for you to call"],
  [125.19, "Harvey"],
  [127.04, "Nobody knows what I see"],
  [130.35, "Everyone thinks I'm crazy"],
  [133.8, "Crazy for you, oh boy"],
  [152.42, "Harvey"],
  [154.24, "Nobody knows what I see"],
  [157.19, "Everyone thinks I'm crazy"],
  [160.48, "Crazy for you, oh boy"],
  [165.77, "Harvey"],
  [167.47, "Nobody knows what I see"],
  [170.75, "Nobody knows I'm waiting"],
  [174.1, "Waiting for you to call"],
  [179.18, "Harvey"],
  [181.04, "Nobody knows what I see"],
  [184.3, "Everyone thinks I'm crazy"],
  [187.49, "Crazy for you, oh boy"],
];

const audio = document.getElementById("harvey");
const lyric = document.getElementById("lyric");
let current = -1;

function showLyric() {
  const time = audio.currentTime;
  let index = -1;

  for (let i = 0; i < lyrics.length; i++) {
    if (time >= lyrics[i][0]) {
      index = i;
    } else {
      break;
    }
  }

  if (index === current) return;
  current = index;

  if (index === -1) {
    lyric.classList.remove("show");
    lyric.textContent = "";
    return;
  }

  lyric.classList.remove("show");
  void lyric.offsetWidth;
  lyric.textContent = lyrics[index][1];
  lyric.classList.add("show");
}

audio.addEventListener("timeupdate", showLyric);
audio.addEventListener("seeked", showLyric);
audio.addEventListener("play", showLyric);
audio.addEventListener("ended", () => {
  current = -1;
  lyric.classList.remove("show");
  lyric.textContent = "";
});
// Lyrics - Finish

// Wave - Start
const wave = document.querySelectorAll(".wave");

wave.forEach((element) => {
  console.log([...element.textContent]);

  element.innerHTML = [...element.textContent].map(
    (character, index) =>
      `<span style="--i:${index}">${character === " " ? "&nbsp" : character}</span>`,
  ).join('')
});
// Wave - Finish
