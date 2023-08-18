// Xử lí hoạt động của menu
const contentMenuTo = document.querySelectorAll('.container__left__showAll .nav--link');
const contentMenuNho = document.querySelectorAll('.container__left__showIcon .nav--link');
const contentMenuMin = document.querySelectorAll('.container__left__mobile .nav--link');
const boxElement = document.querySelectorAll('.row__body');
const linkElement = document.querySelectorAll('.linkDashboard');
const contentLink = document.getElementById('contentLink');

//  Click nav menu to
// Dùng forEach để duyệt các phần tử trong contentMenuto
contentMenuTo.forEach((elements, index) => {
  
    elements.addEventListener('click', () => {
        boxElement.forEach((box) => {
            box.style.display = "none";
        })
        boxElement[index].style.display = "block";
// Link menu

linkElement.forEach((elements, i) => {
    contentLink.style.display = "flex";
    if(i === index){
        elements.style.display= "block";
    }else{
        elements.style.display = "none";
    }
})
        // menu mobile
        contentMenuMin.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active');
                
            } else {
                elements.classList.remove('nav--link--active')
            }
        })
        // menu nho
        contentMenuNho.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        })
        // menu lon
        contentMenuTo.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        })
    })
})
// Click menu nhỏ
contentMenuNho.forEach((elements, index) => {
    elements.addEventListener('click', () => {
        //  Hide all box 
        boxElement.forEach((box) => {
            box.style.display = "none";
        })
        //  Show box theo index
        boxElement[index].style.display = "block";

        // Menu mobile 
        contentMenuMin.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        });

        // Menu icon
        contentMenuNho.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        });
        // Menu to
        contentMenuTo.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        });
    })
})

//  Click menu min
contentMenuMin.forEach((elements, index) => {
    elements.addEventListener('click', () => {
        //  Hide all box 
        boxElement.forEach((box) => {
            box.style.display = "none";
        })
        //  Show box theo index
        boxElement[index].style.display = "block";

        // Menu mobile 
        contentMenuMin.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        });

        // Menu icon
        contentMenuNho.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        });
        // Menu to
        contentMenuTo.forEach((elements, i) => {
            if (i === index) {
                elements.classList.add('nav--link--active')
            } else {
                elements.classList.remove('nav--link--active')
            }
        });
    })
})