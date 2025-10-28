// ------------------------
// Xử lý form đặt tour
// ------------------------
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm để xác nhận tour.");
  this.reset();
});

// ------------------------
// HERO SLIDESHOW
// ------------------------
const hero = document.querySelector(".hero");
// Mảng chứa link ảnh (có thể là link thật hoặc demo)
const images = [
  "/img/hanoi.jpg",
  "/img/vinh-ha-long-01.jpg",
  "/img/danang.jpg",
  "/img/sapa.jpg",
];

let current = 0;

function changeHeroImage() {
  hero.classList.add("fade-out");
  setTimeout(() => {
    hero.style.backgroundImage = `url('${images[current]}')`;
    hero.classList.remove("fade-out");
    current = (current + 1) % images.length;
  }, 1500);
}

// Ảnh đầu tiên và bắt đầu chạy slideshow
hero.style.backgroundImage = `url('${images[0]}')`;
setInterval(changeHeroImage, 1000);
