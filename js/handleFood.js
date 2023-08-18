
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
                const foodPrice = food.foodPrice;
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
                        <span id-food="${food.id}">${food.id}</span>
                    </div>
                <div class="food__name">
                    <span>${foodName}</span>
                </div>
                <div class="food__image">
                    <img src="${foodImage}" alt="" class="imgdish">
                </div>
                <div class="price d-flex justify-content-center ">
                  <div class="food__price me-1">${foodPrice}</div><span>$</span>
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
                    if (valueQuantityFood > 0) {
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

// Tạo biến đếm đơn hàng
let currenOderId = 1;
function addOrder(event) {
    event.preventDefault();
    const idTable = document.getElementById('table--select').value;
    const itemFoods = document.querySelectorAll('.item__Foods');

    const idFood = document.getElementById('oderFood');
    const orderFoodItems = [];
    itemFoods.forEach((itemFoods) => {
        const quantity = parseInt(itemFoods.querySelector('.quantity__food').value);
        if (quantity > 0) {
            const foodName = itemFoods.querySelector('.food__name').innerText;
            const idItemFood = itemFoods.querySelector('.food__id').innerText;
            const imageItemFood = itemFoods.querySelector('.imgdish').getAttribute('src');
            const priceItemFood = itemFoods.querySelector('.food__price').innerText;
            orderFoodItems.push({ foodName, idItemFood, imageItemFood, quantity, priceItemFood });
            itemFoods.querySelectorAll('.quantity__food').value = "0";
        }
    });
    if (orderFoodItems.length > 0) {
        const order = {
            idTable,
            items: orderFoodItems
        }
        fetch('http://localhost:3000/orders', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        then((response) => response.json())
            .then((data) => {
                console.log('Đơn hàng đã được thêm', data);
                currenOderId++;
            })
            .catch(error => console.error('Lỗi khi thêm đơn hàng', error));
    }
}
foodPosts();
