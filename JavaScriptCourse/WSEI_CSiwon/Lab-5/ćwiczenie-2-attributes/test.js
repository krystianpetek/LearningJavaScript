/**
 * Testy
 */
/**
 * Ćwiczenie 2
 * 1. Dodaj klasę `border` do elementu li z innerText 'Karolina'
 * 2. Odblokuj input o name 'title'
 * 3. Dodaj atrybut max elementu input o name 'year'
 * 4. Nadaj wartość atrybutu type pierwszemu przyciskowi na 'submit'
 * 5. Nadaj wartość atrybutu type drugiemu przyciskowi na 'clear'
 */

let message = "TESTS\n";
let item = Array.from(document.querySelectorAll('li')).filter(i => i.innerText === "Karolina");

for (const element of item) {
    if (element && element.classList.contains('border')) {
        message += 'Test21 passed\n';
    } else {
        message += 'Test21 failed\n';
    }
}
item = Array.from(document.querySelectorAll('input')).find(item => item.id === 'title');
if (item && !item.hasAttribute('disabled')) {
    message += 'Test22 passed\n';
} else {
    message += 'Test22 failed\n';
}

item = document.querySelector('input[name="year"]');
if (item && item.hasAttribute('max')) {
    message += 'Test23 passed\n';
} else {
    message += 'Test23 failed\n';
}

item = document.querySelector('button[type="submit"]');
if (item) {
    message += 'Test24 passed\n';
} else {
    message += 'Test24 failed\n';
}

item = Array.from(document.querySelectorAll('button')).filter(x => x.type == "reset");
console.log(item);
if (item && item.length > 0) {
    message += 'Test25 passed\n';
} else {
    message += 'Test25 failed\n';
}
alert(message);
