document.addEventListener('DOMContentLoaded', () => {
    const newCoffeeForm = document.querySelector('#new-coffee-form');
    newCoffeeForm.addEventListener('submit', handleNewCoffeeFormSubmit);
})

const handleNewCoffeeFormSubmit = (event) => {
    const coffeeListItem = createCoffeeListItem(event.target); // call fn to make new coffee list item
    const coffeeList = document.querySelector('#coffee-list');
    coffeeList.appendChild(coffeeListItem); // append new li to parent list
    
    event.target.reset(); // reset form fields
}

const createCoffeeListItem = (form) => {
    const coffeeListItem = document.createElement('li'); // make new coffee list item
    coffeeListItem.classList.add('coffee-list-item'); // add it to class for css purposes

    // append input from form to new list item
    const coffeeName = document.createElement('h2');
    coffeeName.textContent = form.coffee-name.value;
    coffeeListItem.appendChild(coffeeName);

    const originType = document.createElement('h3');
    originType.textContent = form.origin-type.value;


    return coffeeListItem;
}




// might I need this in the handle..submit? event.preventDefault();
// could sort alphabetically??!!
