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

//Hình ảnh slider
let items = document.querySelectorAll(".carousel .item");
let thumnails = document.querySelectorAll(".thumbnails .item");
let countItem = items.length;
let itemActive = 0;
// Sau 3s chuyển đổi ảnh 1 lần
setInterval(() => {
  itemActive++;
  showImage();
}, 3000);

//Phương thức đổi vị trí ảnh cần hiển thị
function showImage() {
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  let oldItems = document.querySelector(".carousel .item.active");
  let oldThumnails = document.querySelector(".thumbnails .item.active");
  oldItems.classList.remove("active");
  oldThumnails.classList.remove("active");

  items[itemActive].classList.add("active");
  thumnails[itemActive].classList.add("active");
}

//Click vào ảnh nhỏ hiển thị ảnh đó
thumnails.forEach((thumnail, index) => {
  thumnail.addEventListener("click", () => {
    itemActive = index;
    showImage();
  });
});

let attend = document.getElementsByName('attendance')[0]
let unattend = document.getElementsByName('attendance')[1]
attend.addEventListener('change',()=>{
  document.querySelector('.cant-enjoy').style.display = 'none';
  document.querySelector('.enjoy-form').style.display='flex'
});

unattend.addEventListener('change',()=>{
  document.querySelector('.cant-enjoy').style.display = 'flex';
  document.querySelector('.enjoy-form').style.display='none'
});