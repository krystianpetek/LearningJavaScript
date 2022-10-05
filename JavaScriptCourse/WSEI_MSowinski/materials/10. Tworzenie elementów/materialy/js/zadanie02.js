/* jshint -W104 */
/* jshint -W119 */
const orderId = document.querySelector('#orderId');
const item = document.querySelector('#item');
const quantity = document.querySelector('#quantity');
const addBtn = document.querySelector('#addBtn');
const orders = document.querySelector('#orders');

addBtn.addEventListener('click', function () {

    const row = document.createElement('tr');
    const tdOrderId = document.createElement('td');
    const tdItem = document.createElement('td');
    const tdQuantity = document.createElement('td');

    try {
        if (Number.parseInt(orderId.value) && item.value && Number.parseInt(quantity.value)) {

            tdOrderId.append(orderId.value);
            row.appendChild(tdOrderId);

            tdItem.append(item.value);
            row.appendChild(tdItem);

            tdQuantity.append(quantity.value);
            row.appendChild(tdQuantity);

            orders.appendChild(row);
        }
    } catch (error) {
        console.log(error);
    }

});