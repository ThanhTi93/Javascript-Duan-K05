
// Lấy dữ liệu từ json
function tablePosts() {
    fetch('http://localhost:3000/tables')
        .then(response => response.json())
        .then(data => {
            const tablesList = document.getElementById('booking');
// Order select
            const tableSelect = document.getElementById('table--select');

            const filterOption = data.filter((table, index) => {
                return table.status == false;
            })
            // Hiển thị dữ liệu lấy từ JSON Server
            filterOption.forEach(table => {
                const listItemTable = document.createElement('option');
                listItemTable.value = table.id;
                listItemTable.textContent = ` Table ${table.id}`;
                tableSelect.appendChild(listItemTable); 
            })
// Pay bill select
            const paybillSelect = document.getElementById('select--paybill');
            const filterOptionpayBill = data.filter((table, index) => {
                return table.status == false;
            })
            // Hiển thị dữ liệu lấy từ JSON Server
            filterOptionpayBill.forEach(table => {
                const listItemTable = document.createElement('option');
                listItemTable.value = table.id;
                listItemTable.textContent = ` Table ${table.id}`;
                paybillSelect.appendChild(listItemTable);
            })

            // Hiển thị dữ liệu lấy từ JSON Server
            data.forEach(table => {
                const listItem = document.createElement('div');
                const imageBooking = table.status ? "./image/datBan-default.png" : "./image/datBan.png";
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
                                    <button type="button" class="btn btn-info" onclick="clickAdd(${table.id})">
                                        <span class="btn-label"><i class="fa-solid fa-circle-plus"></i></span>Add
                                    </button>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#listFoodOder" onclick="clickCard(${table.id})">
                                        <span class="btn-label"><i class="fa-solid fa-cart-plus"></i></span>Card
                                    </button>
                                </div>
                                <div class="bg__btn__booking" style="${listBtnBooking}">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                    data-bs-target="#bookingTable" onclick="clickBooking(${table.id})">
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
function clickBooking(tableID) {
    console.log(tableID);
    id = tableID;
};

// Tạo biến đếm toàn cục
var selectedTableId = null;
// Click nút card để xem thông tin món ăn đã chọn

function clickCard(tableId) {
    const tdListFoodOder = document.querySelector('.td--list--food--oder');
    console.log(tableId);
    tdListFoodOder.innerHTML = '';
    fetch('http://localhost:3000/orders')
        .then(response => response.json())
        .then(data => {
            const orderForTable = data.filter(oder => oder.idTable == tableId);
            console.log("Đây là odder của table", orderForTable);
            orderForTable.forEach(order => {
                order.items.forEach((item, stt) => {
                    const totalPrice = parseInt(item.quantity) * parseInt(item.priceItemFood);
                    console.log("Lặp chưa", totalPrice);

                    const row = `
                <tr>
                <th scope="row">${stt+1}</th>
                <td class="td__food__image"><img src="${item.imageItemFood}" alt=""></td>
                <td>${item.foodName}</td>
                <td>${item.quantity}</td>
                <td>${totalPrice} $</td>
              </tr>
                `;
                    console.log('Row ở đâu:', row);
                    tdListFoodOder.innerHTML += row;

                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
// Click nút Add
// async function initialize(){
//     await tablePosts();
//     await foodPosts();
// }

function clickAdd(tableID) {
    console.log(tableID);
    // css lại nav và ẩn thèn đặt bàn 
    boxElement[1].style.display = "none";
    contentMenuTo[1].classList.remove('nav--link--active');
    contentMenuNho[1].classList.remove('nav--link--active');
    contentMenuMin[1].classList.remove('nav--link--active');
    // // css lại nav và hiện thèn oder food
    boxElement[2].style.display = "block";
    contentMenuTo[2].classList.add('nav--link--active');
    contentMenuNho[2].classList.add('nav--link--active');
    contentMenuMin[2].classList.add('nav--link--active');
    const id = document.getElementById('table--select');
    id.value = tableID;
}
// initialize();

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

