document.addEventListener('DOMContentLoaded', () => {
    const newCoffeeForm = document.querySelector('#new-coffee-form');
    newCoffeeForm.addEventListener('submit', handleNewCoffeeFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    document.querySelectorAll('.accordion__button').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('accordion__button--active');

            if (button.classList.contains('accordion__button--active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});

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
    countryOfOrigin.textContent = `origin: ${form.country.value}`;
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
    if(form.roast.value <= '30') {
        roastLevel.textContent = 'roast level: Dark';
    } else if (form.roast.value <= '60') {
        roastLevel.textContent = 'roast level: Medium';
    } else {
        roastLevel.textContent = 'roast level: Light';

    }

    coffeeListItem.appendChild(roastLevel); // will it work??!

    const accordionDiv = document.createElement('div'); // create accordion div
    accordionDiv.classList.add('accordion');
    accordionDiv.insertAdjacentHTML('afterbegin', `<button type="button" class="accordion__button">tasting notes: ${form.notes.value}  </button>`);
    coffeeListItem.appendChild(accordionDiv);
    
    const accordionContent = document.createElement('div');
    accordionContent.classList.add('accordion__content');
    accordionContent.insertAdjacentHTML('afterbegin', `<p>full description: ${form.description.value} </p>`);
    accordionDiv.appendChild(accordionContent);

    

    // const price = document.createElement('p');
    // price.textContent = `price: £${form.price.value}`;
    // coffeeListItem.appendChild(price);

    return coffeeListItem;
}

const handleDeleteAllClick = (event) => {
    const coffeesList = document.querySelector('#coffees-list');
    coffeesList.innerHTML = '';
}


// could sort alphabetically??!!
