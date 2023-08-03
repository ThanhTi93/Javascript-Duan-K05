let containerLeft = document.querySelector('.container__left'),
    containerRight = document.querySelector('.container__right'),
    containerLeftShowAll = document.querySelector('.container__left__showAll'),
    containerLeftShowIcon = document.querySelector('.container__left__showIcon'),
    authorList = document.querySelector('.author__list'),

    clickMenu = document.querySelector('.btn__show__menu')
    clickAuthor = document.querySelector('.author');
  

clickMenu.addEventListener('click', function () {
    containerLeft.classList.toggle('container__left__after');
    containerRight.classList.toggle('container__right__after');
    containerLeftShowAll.classList.toggle('container__left__showAll__after');
    containerLeftShowIcon.classList.toggle('container__left__showIcon__after');
})
// e.stopPropagation();
clickAuthor.addEventListener('click', function(){
    authorList.classList.toggle('author__list__after')
})