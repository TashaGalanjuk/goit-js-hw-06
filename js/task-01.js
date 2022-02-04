const quantityAllEl = document.querySelectorAll('.item');
console.log('Number of categories: ', quantityAllEl.length);

const navItemEl = document.querySelectorAll('h2');
// console.log(`Category:`, navItemEl)

quantityAllEl.forEach(item => {
    // console.log(item)
    const title = item.querySelector('h2');
    // console.log(title.textContent);
    const itemsEl = item.querySelectorAll('li');
    // console.log(itemsEl.length);
    console.log(item.textContent);
})
