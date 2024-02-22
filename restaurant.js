const { mongerInventory } = require("./fishMonger.js")
// mongerInventory




function fishMenu(price) {//price
    let menuHTML = '';
    chefInventory = mongerInventory(price)
    for (const fish of chefInventory) {
        

        menuHTML += `<h2>${fish.type}</h2>`;
        menuHTML += `<section class="menu__item">${fish.type} Soup</section>`;
        menuHTML += `<section class="menu__item">${fish.type} Sandwich</section>`;
        menuHTML += `<section class="menu__item">Grilled ${fish.type}</section>`;
    }
    return menuHTML;
}

module.exports = { fishMenu }



/* const fisMenu = (price) =>{
//    let menuHTML = '';
//add logic
    for (const fish of chefInventory) {
        menuHTML += `<h2>${fish.type}</h2>`;
        menuHTML += `<section class="menu__item">${fish.type} Soup</section>`;
        menuHTML += `<section class="menu__item">${fish.type} Sandwich</section>`;
        menuHTML += `<section class="menu__item">Grilled ${fish.type}</section>`;
    }
    return menuHTML;
}*/


/*
    
displayMenuItem.forEach(chefMenu => {});

    chefMenu.textContent = `${typeOfFish} Soup`
    chefMenu.textContent = `${typeOfFish} Sandwich`
    chefMenu.textContent = `Grilled ${typeOfFish}`
*/



