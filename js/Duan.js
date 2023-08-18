let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

// Chức năng đăng ký
/*
- Lấy id form đăng kí và add event submit
- e.preventDefaut()
- Tạo các biến được lấy từ value theo id của input
- Sử dụng câu lệnh if để xem password có trùng khớp hay không
- Tạo ra 1 object có các phần tử như sau username: username,...
- Chuyển đổi object sang string
- Setitem lên LocalStorage theo key và value
- Chuyển hướng trang
*/

// document.getElementById('sign-up').addEventListener('submit', (e) => {
//     e.preventDefault();
//     var username = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var repassword = document.getElementById('repassword').value;

//     if (password !== repassword) {
//         alert('Mật khẩu không trùng khớp');
//         return;
//     }

//     const user = {
//         username : username,
//         password : password,
//         email : email
//     }

//     const userData = JSON.stringify(user);
//     localStorage.setItem('user', userData);
//     alert('Đăng kí thành công');
//     window.location.href = "dashboard.html"
// })

document.getElementById('sign-up').addEventListener('submit', (e) => {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    if(password !== repassword){
        alert('Mật khẩu không trùng khớp');
        return
    }
    var user = {
        username: username,
        email: email,
        password: password,
        img: './image/avt.jpeg'
    }
    userData = JSON.stringify(user);
    localStorage.setItem('user', userData);
    alert('Đăng kí thành công');
    window.location.href = "dashboard.html"
})

// Chức năng đăng nhập
/*
- Lấy id của form đăng nhập và add envent submit
- e.preventDefault
- Tạo ra các biến user, password
- Tạo biến userData lấy từ local về bằng getItem
- Tạo 1 biến user là được đổi từ string sang object
- So sánh user và pasword và chuyển hướng đăng nhập.

*/

document.getElementById('sign-in').addEventListener('submit', (e) => {
    e.preventDefault();
    var username = document.getElementById('username--sign--in').value;
    var password = document.getElementById('password--sign--in').value;

    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    
    if(user.username == username && user.password == password){
        alert('Đăng nhập thành công');
        window.location.href = "dashboard.html";
    }else{
        alert('Sai thông tin đăng nhập');
        return
    }
});