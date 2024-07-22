const videoPlayer = document.querySelector(".video-player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");

// кнопка для просмотра видео
playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "×";
    video.requestFullscreen();
  } else {
    video.pause();
    e.target.textContent = "▶";
  }
});

// значки для плеера ▶ ⏯ ⏹ ⏸ ×

// убираем контроллер до клика по видео
document.addEventListener("DOMContentLoaded", function () {
  let videos = document.getElementsByClassName("video2"); // получаем видео
  videos = [].slice.call(videos); // преобразуем в массив
  videos.forEach(function (item) {
    // перебираем массив и навешиваем обработчики
    let media = item;
    media.onclick = function () {
      media.play(); // запускаем проигрывание
      media.controls = true; // добавляем контроллер
    };
    media.addEventListener("ended", function () {
      media.controls = false; // видео просмотрено, убираем контроллер
    });
  });
});
