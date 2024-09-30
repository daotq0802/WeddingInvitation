var countDownDate = new Date("Dec 25, 2024 23:59:59").getTime();
// Cập nhật theo từng giây
var x = setInterval(function () {
  // Lấy thời gian ở thời điểm hiện tại
  var now = new Date().getTime();
  // Tính khoảng cách đếm ngược
  var distance = countDownDate - now;
  // Tính thời gian còn lại
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Hiển thị thời gian đếm ngược
  document.getElementById("countdown").innerHTML = `

  <div class="countdown-view">
                <label>${days}</label>
                <span>ngày</span>
              </div>
              
              <div class="countdown-view">
                <label>${hours}</label>
                <span>giờ</span>
              </div>

              <div class="countdown-view">
                <label>${minutes}</label>
                <span>phút</span>
              </div>

              <div class="countdown-view">
                <label>${seconds}</label>
                <span>giây</span>
              </div>`;
  // Đưa thông báo khi thời gian đếm ngược kết thúc
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//hình ảnh slide show
let slider = document.querySelector(".slider");
setInterval(() => {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
}, 5000);

//
let attend = document.getElementsByName("attendance")[0];
let unattend = document.getElementsByName("attendance")[1];
attend.addEventListener("change", () => {
  document.querySelector(".cant-enjoy").style.display = "none";
  document.querySelector(".enjoy-form").style.display = "flex";
});

unattend.addEventListener("change", () => {
  document.querySelector(".cant-enjoy").style.display = "flex";
  document.querySelector(".enjoy-form").style.display = "none";
});



