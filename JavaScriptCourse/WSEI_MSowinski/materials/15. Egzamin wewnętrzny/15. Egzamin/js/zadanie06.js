document.addEventListener("DOMContentLoaded", () => {

    const button1 = document.querySelector('#button-1');
    const button2 = document.querySelector('#button-2');
    const button3 = document.querySelector('#button-3');
    const shoppingList = document.querySelector('#shopping-list');

    button1.addEventListener('click', () => {
        const li = document.createElement('li');
        li.innerText = "Bread";
        shoppingList.appendChild(li);
    });

    button2.addEventListener('click', () => {
        if ([...shoppingList.children].length > 0) {
            shoppingList.lastElementChild.remove();
        }
    });

    button3.addEventListener('click', () => {
        if ([...shoppingList.children].length > 1) {
            const cloned = [...shoppingList.children][1].cloneNode();
            cloned.innerText = [...shoppingList.children][1].innerText;
            shoppingList.appendChild(cloned);
        }
    });

});