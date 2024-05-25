const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var images = ["./image/1.jpg", "./image/2.jpg", "./image/3.jpg"]; // List of image URLs
var texts = [
  {
    heading: "Batik Parang",
    paragraph:
      "Motif 'S' pada batik Parang mencerminkan keselarasan vertikal, terinspirasi dari ombak laut yang abadi. Penyatuan huruf-huruf tersebut mengekspresikan kontinuitas, baik dalam perjuangan, ikatan persaudaraan, maupun pertumbuhan pribadi. Filosofi batik Parang yang kaya bermula dari zaman Keraton Kuno dan menjadi motif tertua dalam dunia batik.",
  },
  {
    heading: "Batik Tujuh Rupa",
    paragraph:
      "Batik ini kental dengan alam, yakni mengangkat tema flora atau fauna ke dalam gambar batik itu sendiri. Berasal dari Pekalongan, batik ini merupakan hasil perpaduan dari budaya lokal dan China. Hal ini dikarenakan tanah Pekalongan yang dulu dijadikan tempat persinggahan para pedagang yang datang dari berbagai negara, termasuk China.",
  },
  {
    heading: "Batik Gentongan",
    paragraph:
      "Motif batik yang khas dari daerah ini adalah sentuhan flora dan fauna, termasuk dalam batik gentongan yang juga berasal dari Madura. Namun, gambar batik gentongan lebih condong ke motif flora dan abstrak. Warna yang dimiliki batik gentongan serupa dengan batik khas Madura lainnya, yaitu bernuansa terang seperti merah, kuning, hijau, dan biru, dengan masing-masing warna mewakilkan arti filosofis yang indah.",
  },
]; // List of corresponding texts
var currentSlide = 0;

function showSlide(index) {
  document.getElementById("image1").src = images[index];
  document.getElementById("text1").innerText = texts[index].heading;
  document.getElementById("paragraph1").innerText = texts[index].paragraph;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  showSlide(currentSlide);
}

// Automatically transition to the next slide every 3 seconds
setInterval(nextSlide, 5000);
