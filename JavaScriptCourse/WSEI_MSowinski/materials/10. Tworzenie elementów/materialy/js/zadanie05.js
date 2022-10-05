/* jshint -W104 */
const listsOfElements = document.querySelectorAll('div.listContainer.two');

// listsOfElements.forEach(list => {
//     Array.from(list.children)
//         .forEach(item => {
//             Array.from(item.children).forEach(x => x.addEventListener('click', function () {
//                 console.log(x);
//             }))
//         });
// });

const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');

for (const listOfElement of listsOfElements) {

    const arrayOfElements = Array.from(listOfElement.children);

    for (const liElements of arrayOfElements) {

        const arrayOfLiElements = Array.from(liElements.children);

        for (const liElement of arrayOfLiElements) {

            liElement.querySelector('a').addEventListener('click', function () {

                if (liElement.parentElement.id === list1.id) {
                    list2.appendChild(liElement);
                }
                else {
                    list1.appendChild(liElement);
                }
            });
        }

    }

}