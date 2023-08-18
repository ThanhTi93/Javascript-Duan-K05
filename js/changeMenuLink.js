// Truy cập đến class
let containerLeftShowAll = document.querySelector('.container__left__showAll'),
    containerLeftShowIcon = document.querySelector('.container__left__showIcon'),
    authorList = document.querySelector('.author__list'),

    // Click 
    clickMenuHide = document.getElementById('btn--menu--hide'),
    clickMenuShow = document.getElementById('btn--menu--show'),
    clickAuthor = document.querySelector('.author');

// Action 
clickMenuHide.addEventListener('click', function () {
    containerLeftShowAll.style.display = "none";
    containerLeftShowIcon.style.display = "block";
})
clickMenuShow.addEventListener('click', function () {
    containerLeftShowAll.style.display = "block";
    containerLeftShowIcon.style.display = "none";
})
clickAuthor.addEventListener('click', function () {
    authorList.classList.toggle('author__list__after')
})
// Click đóng author
document.addEventListener('click', function (event) {
    const author = document.querySelector('.author');
    const authorList = document.querySelector('.author__list');

    // Check if the clicked element is outside the author element
    if (!author.contains(event.target)) {
        authorList.classList.remove('author__list__after');
    }
});
