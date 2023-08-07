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

// const navLink = document.querySelectorAll('.nav--link');
// const pageNavLink = document.querySelectorAll('.row__body');
// for(let i = 0; i < navLink.length; i++){
//     navLink[i].addEventListener('click', () => {
//         const navLinkActive = document.querySelector('.nav--link--active');
//         const pageNavLinkActive = document.querySelector('.row__body__active')
//         if(navLinkActive){
//             navLinkActive.classList.remove('nav--link--active');
//             pageNavLinkActive.classList.remove('row__body__active')
//         }
//         navLink[i].classList.add('nav--link--active');
//         pageNavLink[i].classList.add('row__body__active');

//     })
// }
/* ------------------- End nav link --------------------- */

// Xử lí hoạt động của menu
const contentMenuTo = document.querySelectorAll('.container__left__showAll .nav--link');
const contentMenuNho = document.querySelectorAll('.container__left__showIcon .nav--link');
const contentMenuMin = document.querySelectorAll('.container__left__mobile .nav--link');
const boxElement = document.querySelectorAll('.row__body');


//  Click nav menu to
contentMenuTo.forEach((elements, index) => {
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
});

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
// Lấy dữ liệu từ json
function fetchPosts() {
    fetch('http://localhost:3000/tables')
        .then(response => response.json())
        .then(data => {
            const tablesList = document.getElementById('booking');

            // Hiển thị dữ liệu lấy từ JSON Server
            data.forEach(table => {
                const listItem = document.createElement('div');
                const imageBooking = table.status ? "./image/datBan.png" : "./image/datBan2.png";
                const listBtnAddCard = table.status ? "display: none" : "display: flex";
                const listBtnBooking = table.status ? "display: flex" : "display: none";

                listItem.classList.add("col-6");
                listItem.classList.add("col-sm-4");
                listItem.classList.add("col-md-3");
                listItem.classList.add("col--booking");

                listItem.innerHTML = `       
                                 <div class="wrapper__booking">
                                 <div class="booking__number">
                                     <span>${table.id}</span>
                                 </div>
                                 <div class="booking__imgage">
                                     <img src="${imageBooking}" alt="">
                                 </div>
                                 <div class="bg__btn__booking" style="${listBtnAddCard}">
                                    <button type="button" class="btn btn-info">
                                        <span class="btn-label"><i class="fa-solid fa-circle-plus"></i></span>Add
                                    </button>
                                    <button type="button" class="btn btn-danger">
                                        <span class="btn-label"><i class="fa-solid fa-cart-plus"></i></span>Card
                                    </button>
                                </div>
                                <div class="bg__btn__booking" style="${listBtnBooking}">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">
                                        <span class="btn-label"><i class="fa-solid fa-circle-plus"></i></span>Booking
                                    </button>
                                </div>
          `;
                tablesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Gọi hàm fetchPosts để lấy dữ liệu khi trang web được tải
fetchPosts();

// Thêm mới 
document.getElementById('btn--booking').addEventListener('click', function(event) {
    event.preventDefault();
  
    const custumerName = document.getElementById('custumerName').value;
    const custumerNumber = document.getElementById('custumerNumber').value;
  
    const newPost = {
      custumerName: custumerName,
      custumerNumber: custumerNumber,
    };
  
    fetch('http://localhost:3000/tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    })
      .then(response => response.json())
      .then(data => {
        custumerName.value = '';
        custumerNumber.value = '';
  
        // Sau khi tạo thành công, làm mới danh sách bài đăng
        fetchPosts();
      })
      .catch(error => console.error('Error creating post:', error));
  });