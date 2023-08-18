
function loadOrderInfo() {
  const selectedTable = document.getElementById("select--paybill").value;
  console.log(selectedTable);
  const orderInfoContainer = document.getElementById("orderInfo");
  console.log(orderInfoContainer);
  let totalAmount = 0; // Biến để tính tổng tiền

  // Tạo yêu cầu đến JSON Server để lấy thông tin order theo id bàn
  fetch(`http://localhost:3000/orders?idTable=${selectedTable}`)
    .then(response => response.json())
    .then(data => {
      orderInfoContainer.innerHTML = ""; // Xóa nội dung cũ
      data.forEach(order => {
          order.items.forEach((dish, index) => {
            const row = document.createElement("tr");
            const dishTotalPrice = parseInt(dish.priceItemFood) * parseInt(dish.quantity); // Tính tổng tiền cho món ăn
            totalAmount += dishTotalPrice; // Cộng vào tổng tiền của đơn hàng
            row.innerHTML = `
                  <th scope="row">${index+1}</th>
                  <td class="td__food__image"><img src="${dish.imageItemFood}" alt=""></td>
                  <td>${dish.foodName}</td>
                  <td>${dish.quantity}</td>
                  <td>${dishTotalPrice} $</td>
            `;
            orderInfoContainer.appendChild(row);
        });
      });

      // Thêm dòng tổng tiền cho toàn bộ đơn hàng
      const totalRow = document.createElement("tr");
      totalRow.innerHTML = `
        <td colspan="4"><strong>Tổng cộng</strong></td>
        <td><strong>${totalAmount} $</strong></td>
      `;
      orderInfoContainer.appendChild(totalRow);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function resetTableAndOrders() {
  const selectedTable = document.getElementById("select--paybill").value;
console.log("duan");
  // Reset table status and customerName
  fetch(`http://localhost:3000/tables/${selectedTable}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: true,
      customerName: "",
      quantity: 0,
    }),
  })
    .then(response => response.json())
    .then(() => {
      console.log(`Table ${selectedTable} has been reset.`);
    })
    .catch(error => {
      console.error("Error resetting table:", error);
    });

  // Delete orders with the corresponding tableId
  fetch(`http://localhost:3000/orders?idTable=${selectedTable}`)
    .then(response => response.json())
    .then(data => {
      const orderIds = data.map(order => order.id);

      orderIds.forEach(orderId => {
        fetch(`http://localhost:3000/orders/${orderId}`, {
          method: "DELETE",
        })
          .then(() => {
            console.log(`Order ${orderId} has been deleted.`);
          })
          .catch(error => {
            console.error(`Error deleting order ${orderId}:`, error);
          });
      });
    })
    .catch(error => {
      console.error("Error fetching orders:", error);
    });
}