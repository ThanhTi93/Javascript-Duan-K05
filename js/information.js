// hàm sử lý form thông tin
document.addEventListener('DOMContentLoaded', function () {
  const updateForm = document.getElementById('form--update--info');
  const imagePreview = document.querySelectorAll('.avatar');
  console.log("Đây là danh sách avt", imagePreview);
  const profileImageInput = document.getElementById('profileImage');
  console.log(profileImageInput);
  // Get localStore

  // const rowAuthour = document.createElement('span');
  // rowAuthour.innerHTML= `
  // Phan Văn Duẩn
  // `;

  // Action change
  profileImageInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    // *****
    if(file){
      var avtURL = URL.createObjectURL(file);
      imagePreview.forEach((element) => {
        element.src = avtURL;
      })
    }else{
      console.log('Chưa có hình ảnh');
    }
  });

  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Đây là đâu')
    const username = document.getElementById('inputUsername').value;
    const firtname = document.getElementById('inputFirstName').value;
    const lastname = document.getElementById('inputLastName').value;
    const orgname = document.getElementById('inputOrgName').value;
    const location = document.getElementById('inputLocation').value;
    const email = document.getElementById('inputEmailAddress').value;
    const phone = document.getElementById('inputPhone').value;
    const birthday = document.getElementById('inputBirthday').value;
    // ************
    const users = localStorage.getItem('user');
    const getUsers = JSON.parse(users);
    const userInfo = {
      username: username,
      firtname: firtname,
      lastname: lastname,
      orgname: orgname,
      location: location,
      email: email,
      phone: phone,
      birthday: birthday,
      img: getUsers.img,
      password: getUsers.password
    };

    // Convert the userInfo object to a JSON string
    const userInfoJSON = JSON.stringify(userInfo);

    // Save the JSON string to Local Storage
    localStorage.setItem('user', userInfoJSON);

    alert('Personal information updated and saved.');

    // Reset the form and image preview
    // updateForm.reset();
    // imagePreview.style.display = 'none';
  });
});