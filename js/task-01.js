const quantityAllEl = document.querySelectorAll('.item');
console.log('Number of categories: ', quantityAllEl.length);

quantityAllEl.forEach(item => {
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    
    const itemsEl = item.querySelectorAll('li');
    console.log(`Elements: ${itemsEl.length}`);
})
