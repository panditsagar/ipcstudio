const scrollTopButton = document.querySelector(".scroll-top");
const seminarVideo = document.querySelector("#seminar-video");
const seminarThumbnail = document.querySelector("#seminar-thumbnail");
const backToTopLink = document.querySelector('a[href="#top"]');

const heroVideoConfig = {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "/thumb.png",
    thumbnailAlt: "Seminar video thumbnail"
};

if (scrollTopButton) {
    const toggleScrollTop = () => {
        scrollTopButton.classList.toggle("is-visible", window.scrollY > 240);
    };

    toggleScrollTop();
    window.addEventListener("scroll", toggleScrollTop, { passive: true });

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

if (seminarVideo && seminarThumbnail) {
    seminarVideo.href = heroVideoConfig.videoUrl;
    seminarThumbnail.src = heroVideoConfig.thumbnailUrl;
    seminarThumbnail.alt = heroVideoConfig.thumbnailAlt;
}

if (backToTopLink) {
    backToTopLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
