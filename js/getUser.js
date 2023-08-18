
function changeAvatar() {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const avatarChange = document.querySelectorAll('.avatar');
     // Authour Name--------------------------------------
  const authourContent = document.getElementById('author__name');
  authourContent.innerHTML = `${user.username}`;
  // ---------------------------------------------------
    avatarChange.forEach((item) => {
        item.src = user.img;
    });
}
changeAvatar();