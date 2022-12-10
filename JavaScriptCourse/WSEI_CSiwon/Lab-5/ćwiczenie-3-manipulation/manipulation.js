const peopleList = document.getElementById("people");
const item = document.createElement("li");                              //tworzenie elementu
item.innerText = "Roman";
peopleList.appendChild(item);                                           //dodanie elementu do rodzica
peopleList.removeChild(                                                 //usunięcie elementu z rodzica    
    Array.from(peopleList.children)
        .find(item => item.textContent === "Staszek")
);
console.log('parent:', peopleList.parentElement);                       //rodzic listy 'people'
console.log('children:', peopleList.children);                          //kolekcja dzieci listy 'people'
console.log('nextSibling:', peopleList.nextElementSibling);             //następny sąsiad listy 'people'
console.log('prevoiusSibling:', peopleList.previousElementSibling);
//poprzedni sąsiad listy 'people'
/**
 * Cwiczenie 3
 * Zaimplementuj funkcję, która dla podanego elementu 'parent' typu `tbody` utworzy wiersze
 * tabeli `<tr>` z dwoma kolumnami '<td>' na dane z tabeli 'products': nazwę (name) i cenę (price). 
 */
function createTable(parent, products) {

    for (const element of products) {
        let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.textContent = element.name;

        let tdPrice = document.createElement("td");
        tdPrice.textContent = element.price;

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        parent.appendChild(tr);
    }
}

//Przykład tabeli products
const products = [{ name: "Masło", price: 8.5 }, { name: "Bułka", price: 1.45 }, { name: "pomidory", price: 8.90 }];
//Przykład wywołania products
createTable(document.getElementById('products'), products);
