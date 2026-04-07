const scrollTopButton = document.querySelector(".scroll-top");
const backToTopLink = document.querySelector('a[href="#top"]');
const seminarVideo = document.querySelector("#seminar-video");
const seminarVideoFrame = document.querySelector(".video-frame");
const heroPlayButton = document.querySelector(".video-frame .play-button");

if (scrollTopButton) {
  const toggleScrollTop = () => {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > 240);
  };

  toggleScrollTop();
  window.addEventListener("scroll", toggleScrollTop, { passive: true });

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (backToTopLink) {
  backToTopLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (seminarVideo && heroPlayButton) {
  const syncHeroPlayButton = () => {
    heroPlayButton.classList.toggle(
      "is-hidden",
      !seminarVideo.paused && !seminarVideo.ended,
    );
  };

  const toggleHeroVideoPlayback = () => {
    if (seminarVideo.paused || seminarVideo.ended) {
      seminarVideo.play();
      return;
    }

    seminarVideo.pause();
  };

  seminarVideo.addEventListener("play", syncHeroPlayButton);
  seminarVideo.addEventListener("pause", syncHeroPlayButton);
  seminarVideo.addEventListener("ended", syncHeroPlayButton);
  seminarVideo.controls = false;

  if (seminarVideoFrame) {
    seminarVideoFrame.addEventListener("click", toggleHeroVideoPlayback);
  }

  syncHeroPlayButton();
}
