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
// Dùng forEach để duyệt các phần tử trong contentMenuto
contentMenuTo.forEach((elements, index) => {
    elements.addEventListener('click', () => {
        boxElement.forEach((box) => {
            box.style.display = "none";
        })
        boxElement[index].style.display = "block";
        // menu mobile
        contentMenuMin.forEach((elements, i) => {
            if(i === index){
                elements.classList.add('nav--link--active')
            }else{
                elements.classList.remove('nav--link--active')
            }
        })
          // menu nho
          contentMenuNho.forEach((elements, i) => {
            if(i === index){
                elements.classList.add('nav--link--active')
            }else{
                elements.classList.remove('nav--link--active')
            }
        })
          // menu lon
          contentMenuTo.forEach((elements, i) => {
            if(i === index){
                elements.classList.add('nav--link--active')
            }else{
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
// Lấy dữ liệu từ json
function tablePosts() {
    fetch('http://localhost:3000/tables')
        .then(response => response.json())
        .then(data => {
            const tablesList = document.getElementById('booking');

            const tableSelect = document.getElementById('table--select');
            const filterOption = data.filter((table,index) => {
                return table.status == false;
            })
            // 2.Hiển thị dữ liệu lấy từ JSON Server
            filterOption.forEach(table => {
                const listItemTable = document.createElement('option');
                 listItemTable.value = table.id;
                 listItemTable.textContent = ` Bàn ${table.id}`;
                   tableSelect.appendChild(listItemTable);
            })
            // Hiển thị dữ liệu lấy từ JSON Server
            data.forEach(table => {
                const listItem = document.createElement('div');
                const imageBooking = table.status ? "./image/datBan2.png" : "./image/datBan.png";
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
                                    data-bs-target="#staticBackdrop" onclick="clickBooking(${table.id})">
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
tablePosts();
var id = null;
function clickBooking(tableID){
    console.log(tableID);
     id = tableID;
};
// Update
document.getElementById('btn--booking').addEventListener('click', function () {

    const custumerName = document.getElementById('custumerName').value;
    const quantity = document.getElementById('quantity').value;

 
    const newTable = {
        tableID: id,
        custumerName: custumerName,
        quantity: quantity,
        status: false
    };
    console.log(custumerName, quantity)
    fetch(`http://localhost:3000/tables/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTable),
    })
        .then((response) => response.json())
        .then((data) => {
             console.log(data);
           
        })
        .catch(error => console.error('Error creating post:', error));
       
});


// Tăng giản số lượng món


// Lấy dữ liệu đổ vào oder food

// 1.Lấy dữ liệu từ json
function foodPosts() {
    fetch('http://localhost:3000/foods')
        .then(response => response.json())
        .then(data => {
            const foodList = document.getElementById('oderFood');

            // 2.Hiển thị dữ liệu lấy từ JSON Server
            data.forEach(food => {
                // tạo biến
                const listItem = document.createElement('div');
                const foodName = food.foodName;
                const foodImage = food.foodImage;
// add class
                listItem.classList.add("col-12");
                listItem.classList.add("col-sm-6");
                listItem.classList.add("col-md-4");
                listItem.classList.add("col-lg-3");
                listItem.classList.add("dish");
// in ra html
                listItem.innerHTML = `       
                <div class="item__Foods">
                    <div class="edit__food">
                        <button type="button" class="btn">
                            <span class="btn-label"><i class="fa-solid fa-pen-to-square"></i></span>
                        </button>
                    </div>
                    <div class="food__id">
                        <span data-itemFood-id="">${food.id}</span>
                    </div>
                <div class="food__name">
                    <span>${foodName}</span>
                </div>
                <div class="food__image">
                    <img src="${foodImage}" alt="">
                </div>
                <div class="food__number">
                    <button class="reduce__quantity__food"><span>-</span></button>
                    <input type="text" name="" class="quantity__food" value="0" readonly>
                    <button class="add__quantity__food"><span>+</span></button>
                </div>
            </div>
          `;
          foodList.appendChild(listItem);
        //   tạo biến tăng giảm số lượng sản phẩm
          const reducaQuantityFood = listItem.querySelector('.reduce__quantity__food');
          const addQuantityFood = listItem.querySelector('.add__quantity__food');
          const quantityFood = listItem.querySelector('.quantity__food');
        //   action của biến giảm
          reducaQuantityFood.addEventListener('click', () => {
            console.log("vào đây");
            let valueQuantityFood = parseInt(quantityFood.value);
            if(valueQuantityFood > 0){
                quantityFood.value = (valueQuantityFood - 1).toString();
            }
          });
        //   action của biến tăng
          addQuantityFood.addEventListener('click', () => {
            console.log("vào nut +");
            let valueQuantityFood = parseInt(quantityFood.value);
            quantityFood.value = (valueQuantityFood + 1).toString();
          });
       

            });
             //  tạo 1 function để sumbit các món ăn lên data
        //   function addOrder(){
        //     const tableId = document.getElementById('tableId');
        //     const itemFoods = document.querySelectorAll('.item__Foods');
        //     console.log(tableId);
        // }
        // addOrder();
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Gọi hàm fetchPosts để lấy dữ liệu khi trang web được tải




function clickOption(){

}
// Tạo biến đếm đơn hàng
let currenOderId = 1;
function addOrder(){
    // const tableIdss = document.getElementById('table--select').value;
    const itemFoods = document.querySelectorAll('.dish');
 
    // const idRow = document.getElementById('oderFood');
    console.log(itemFoods);
    // console.log(itemFoods);
    // const orderFoodItems = [];
    // itemFoods.forEach((itemFoods) => {
    //     const quantity = parseInt(itemFoods.querySelector('.quantity__food').value);
    //     if(quantity > 0){
    //         const itemFoodId = itemFoods.getAttribute('data-itemFood-id');
    //         console.log(itemFoodId);
    //         console.log('Vào đây')
    //     }
    // })
}
addOrder();
foodPosts();
