// scrollAnimation.js

document.addEventListener("DOMContentLoaded", function () {
  var bioParagraphs = document.querySelectorAll(".bio-container p");

  function checkScroll() {
    bioParagraphs.forEach(function (paragraph) {
      var position = paragraph.getBoundingClientRect();

      // Bu kontrolü, paragrafın görüntü alanına girdiği anda veya tamamen görüntü alanından çıktığı anda yapabilirsiniz.
      // Aşağıda paragrafın tamamen görüntü alanına girdiği anda kontrol yapılıyor.
      if (position.top < window.innerHeight) {
        paragraph.classList.add("animate");
      }
    });
  }

  // Sayfa yüklendiğinde ve scroll yapıldığında kontrolü gerçekleştir
  window.addEventListener("load", checkScroll);
  window.addEventListener("scroll", checkScroll);
});
