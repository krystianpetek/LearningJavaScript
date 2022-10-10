export let foods = [];

class Food {
    constructor(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.print = () => {
            console.log(`Name: ${this.name}: proteins: ${this.protein}g, carbs: ${this.carbs}g, fat: ${this.fat}g`);
        };
    }
}

class FastFood extends Food {
}

class FatFreeFood extends Food {
}

let addProductForm = document.querySelector('form');
const inputName = addProductForm.querySelector('#name');
const inputProtein = addProductForm.querySelector('#proteins');
const inputCarbs = addProductForm.querySelector('#carbs');
const inputFats = addProductForm.querySelector('#fat');
const submitForm = addProductForm.querySelector('#add');
const products = document.querySelector('#products');

submitForm.addEventListener('click', (event) => {
    event.preventDefault();
    if (isNaN(inputProtein.value) || isNaN(inputCarbs.value) || isNaN(inputFats.value)) {
        console.log('error');
        return;
    }

    const computedProteins = 4 * inputProtein.value;
    const computedCarbs = 4 * inputCarbs.value;
    const computedFats = 9 * inputFats.value;
    const computedKcal = computedProteins + computedCarbs + computedFats;

    if (computedKcal > 250) {
        inputName.value = 'fastFood';
        const fastFood = new FastFood(inputName.value, inputProtein.value, inputCarbs.value, inputFats.value);
        foods.push(fastFood);
    }
    else {
        inputName.value = 'fatFreeFood';
        const fatFreeFood = new FatFreeFood(inputName.value, inputProtein.value, inputCarbs.value, inputFats.value);
        foods.push(fatFreeFood);

    }
    let productToAdd = document.createElement('li');
    productToAdd.innerText = `${inputName.value}: proteins: ${inputProtein.value}g, carbs: ${inputCarbs.value}g, fat: ${inputFats.value}g`;
    products.appendChild(productToAdd);

    console.log(foods);
});

foods.push(new FastFood('Fries', 3.4, 41, 15));
foods.push(new FastFood('Donut', 4.9, 51, 25));
foods.push(new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4));
