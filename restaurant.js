const { chefMaxPrice, mongerInventory } = require("./fishMonger.js")



// The chefMenu function returns HTML
funct chefMenu = (mongerArray, chefMaxPrice) =>{

    for (const menuItem of mongerArray) {
        menuHTML += `<section> ${typeOfFish} Soup </section>`
    }
    // call 2nd function in fishmonger
}

// what should this return, perhaps chefInventory?

funct chefMenu(approvedChefFish) {
    let menuHTML = '';

    for (const fish of chefInventory) {
        menuHTML += `<h2>${fish.type}</h2>`;
        menuHTML += `<section class="menu__item">${fish.type} Soup</section>`;
        menuHTML += `<section class="menu__item">${fish.type} Sandwich</section>`;
        menuHTML += `<section class="menu__item">Grilled ${fish.type}</section>`;
    }
    return menuHTML;
}





/*
for of loop that goes through the chefInventory array and for each different type of 
    fish create the 3 meals

Chef creating 3 meals 
${typeOfFish} Soup
${typeOfFish} Sandwich
Grilled ${typeOfFish} 

const displayMenuItem = document.getElementsByClassName("menu__item")
    
displayMenuItem.forEach(chefMenu => {});

    chefMenu.textContent = `${typeOfFish} Soup`
    chefMenu.textContent = `${typeOfFish} Sandwich`
    chefMenu.textContent = `Grilled ${typeOfFish}`
*/



/*
const menuElement = restaurant.createElement('div');
menuElement.classList.add('menu');

restaurant.body.appendChild()
*/

/*
const todaysFish = mongerInventory()
const chefPrice

todays = fishMenu(todaysFish, chefPrice)*/

//document.getElementById('totalInput').innerHTML = total

/*