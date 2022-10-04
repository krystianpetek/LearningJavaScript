const parents = document.querySelectorAll('.parent');

// parents.forEach(parent => {

//     parent.addEventListener('mouseenter', (event) => {
//         // console.log('enter');
//         event.currentTarget.children[0].classList.add('childrenShow');
//     });

//     parent.addEventListener('mouseleave', (event) => {
//         // console.log('leave');
//         event.currentTarget.children[0].classList.remove('childrenShow');
//     })

// });


function hideChildrenElement(el, event) {
    // el.children[0].classList.toggle('childrenShow');
    const htmlCollection = Array.from(el.children);
    htmlCollection.forEach(x => x.classList.toggle('childrenShow'));
    console.log(event.type)
}

parents.forEach(parent => {
    parent.addEventListener('mouseenter', function (ev) {
        hideChildrenElement(this, ev);
    });

    parent.addEventListener('mouseleave', function (ev) {
        hideChildrenElement(this, ev);
    });

});

