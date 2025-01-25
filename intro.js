var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function () {
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function () {
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function () {
    slider3.classList.remove('active')
})


// // ------audio------------
// var buttonSong = document.querySelector('.button')
// var mySong = document.getElementById("song")
// buttonSong.onclick= function(){
//     if(mySong.paused){
//         mySong.play()
//     }
// }




// Lấy các phần tử HTML
const followButton = document.getElementById('follow-button');
const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const nameInput = document.getElementById('name-input');
const wishInput = document.getElementById('wish-input'); // Đổi tên cho đúng
const sendWishButton = document.getElementById('send-wish-button');
const wishOutput = document.getElementById('wish-output');


followButton.addEventListener('click', () => {
    if (content1.style.display === 'none') {
        content1.style.display = 'block'; // Hiện content-1
        content2.style.display = 'none';  // Ẩn content-2
        followButton.textContent = 'Send wishes'; // Đổi thành Gửi lời chúc khi ở content-1
        nameInput.value = ''; // Xóa nội dung trong ô nhập tên
        wishInput.value = ''; // Xóa nội dung trong ô nhập lời chúc

    } else {
        content1.style.display = 'none';  // Ẩn content-1
        content2.style.display = 'block'; // Hiện content-2
        followButton.textContent = 'Back'; // Đổi thành Quay lại khi ở content-2
        nameInput.value = ''; // Xóa nội dung trong ô nhập tên
        wishInput.value = ''; // Xóa nội dung trong ô nhập lời chúc

    }
});

// Xử lý khi nhấn Gửi lời chúc
// Xử lý khi nhấn Gửi lời chúc
sendWishButton.addEventListener('click', () => {
    const userName = nameInput.value.trim();
    const userWish = wishInput.value.trim();

    if (userName && userWish) {
        // Thực hiện gửi dữ liệu bằng fetch
        fetch('http://127.0.0.1:3000/submit-feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `name=${userName}&feedback=${userWish}`  // Gửi dữ liệu vào server
        })
            .then(res => res.text())  // Nhận phản hồi từ server
            .then(data => {
                wishOutput.textContent = `Cảm ơn ${userName}! Lời chúc của bạn đã được gửi tới Tuan.`;
                nameInput.value = '';  // Xóa nội dung trong ô nhập tên
                wishInput.value = '';  // Xóa nội dung trong ô nhập lời chúc
            })
            .catch(err => {
                console.error(err);
                wishOutput.textContent = 'Đã có lỗi xảy ra, vui lòng thử lại sau.';
            });
    } else {
        wishOutput.textContent = 'Vui lòng nhập cả tên và lời chúc trước khi gửi.';
    }
});




