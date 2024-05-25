gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

function playLoadingSound() {
  const loadingSound = document.getElementById("loadingSound");
  loadingSound.currentTime = 0; 
  loadingSound.play();
}

window.addEventListener("load", () => {
  setTimeout(playLoadingSound, 3670); 
  setTimeout(() => {
    window.location.href = "login.html"; // Redirect ke halaman login setelah delay selesai
  }, 9500); // Delay untuk memastikan bahwa animasi dan audio selesai
});

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function () {
    playLoadingSoundWithDelay();
  });
});
