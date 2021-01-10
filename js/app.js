document.addEventListener('DOMContentLoaded', () => {
    const newCoffeeForm = document.querySelector('#new-coffee-form');
    newCoffeeForm.addEventListener('submit', handleNewCoffeeFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewCoffeeFormSubmit = (event) => {
    event.preventDefault();

    const coffeeListItem = createCoffeeListItem(event.target); // call fn to make new coffee list item
    const coffeeList = document.querySelector('#coffees-list');
    coffeeList.appendChild(coffeeListItem); // append new li to parent list
    
    event.target.reset(); // reset form fields
}

const createCoffeeListItem = (form) => {
    const coffeeListItem = document.createElement('li'); // make new coffee list item
    coffeeListItem.classList.add('coffee-list-item'); // add it to class for css purposes

    // append input from form to new list item
    const coffeeName = document.createElement('h2');
    coffeeName.textContent = form.coffee.value;
    coffeeListItem.appendChild(coffeeName);

    const originType = document.createElement('p');
    originType.textContent = form.origintype.value;
    coffeeListItem.appendChild(originType);

    const countryOfOrigin = document.createElement('h3');
    countryOfOrigin.textContent = `country of origin: ${form.country.value}`;
    coffeeListItem.appendChild(countryOfOrigin);

    const process = document.createElement('h4');
    process.textContent = `process: ${form.process.value}`;
    coffeeListItem.appendChild(process);

    // const altitude = document.createElement('p');
    // altitude.textContent = `altitude: ${form.altitude.value} metres above sea level`;
    // coffeeListItem.appendChild(altitude);

    // const cultivar = document.createElement('p');
    // cultivar.textContent = `cultivar: ${form.cultivar.value}`;
    // coffeeListItem.appendChild(cultivar);

    const roastLevel = document.createElement('p');
    roastLevel.textContent = `roast level: ${form.roast.value}`;
    coffeeListItem.appendChild(roastLevel); // will it work??!

    const tastingNotes = document.createElement('p');
    tastingNotes.textContent = `tasting notes: ${form.notes.value}`;
    tastingNotes.classList.add('detailed');
    coffeeListItem.appendChild(tastingNotes);

    const fullDescription = document.createElement('p');
    fullDescription.textContent = `full description: ${form.description.value}`;
    // add it to css class for accordion targetting
    coffeeListItem.appendChild(fullDescription);

    // const price = document.createElement('p');
    // price.textContent = `price: £${form.price.value}`;
    // coffeeListItem.appendChild(price);

    return coffeeListItem;
}

const handleDeleteAllClick = (event) => {
    const coffeesList = document.querySelector('#coffees-list');
    coffeesList.innerHTML = '';
}


// might I need this in the handle..submit? 
// could sort alphabetically??!!
