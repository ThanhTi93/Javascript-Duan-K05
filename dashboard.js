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
clickMenuShow.addEventListener('click', function(){
    containerLeftShowAll.style.display = "block";
    containerLeftShowIcon.style.display = "none";
})
clickAuthor.addEventListener('click', function(){
    authorList.classList.toggle('author__list__after')
})

// clickNavItemDashboard.addEventListener('click', () => {
//     bodyDashboard.style.display = "block";
//     bodyReservation.style.display = "none"
//     // navLinkDashboard.classList.add('nav__dashboard__active');
//     // navLinkReservation.classList.remove('nav__dashboard__active');
// })

// clickNavItemReservation.addEventListener('click', () => {
//     bodyDashboard.style.display = "none";
//     bodyReservation.style.display = "block";
//     // navLinkReservation.classList.add('nav__dashboard__active');
//     // navLinkDashboard.classList.remove('nav__dashboard__active');
// })


/* -----------------Nav link ------------------------- */

const navLink = document.querySelectorAll('.nav--link');
const pageNavLink = document.querySelectorAll('.row__body');
for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', () => {
        const navLinkActive = document.querySelector('.nav--link--active');
        const pageNavLinkActive = document.querySelector('.row__body__active')
        if(navLinkActive){
            navLinkActive.classList.remove('nav--link--active');
            pageNavLinkActive.classList.remove('row__body__active')
        }
        navLink[i].classList.add('nav--link--active');
        pageNavLink[i].classList.add('row__body__active');
        
    })
}
/* ------------------- End nav link --------------------- */