const { boatInventory } = require("./fishingBoat.js")


/*
Fish Monger Purchasing Constraints
1. if fish.amount < 10 && fish.price > 7.50 - dont buy
2. else fish.amount >= 10 - buy 10 of that fish
2a. if fish.amount >= 10 && fish.price <7.50 add 10 fish to array (mongerArray)
3. determine what fish meet those requirement 
*/

const todaysCatch = boatInventory()

function mongerInventory(a) {

const mongerPurchasedFish = [] // todaysCatch

    for (const fish of todaysCatch) {
        if (fish.amount >= 10 && fish.price <= 7.50) {
            mongerPurchasedFish.push(fish);
        }
    }
    return mongerPurchasedFish  
}

let filteredInventory = mongerInventory(todaysCatch)


const chefMaxPrice = (filteredInventory, chefPrice) => {

    let approvedChefFish = []
    
        for (const fish of filteredInventory) { 
            let halfAmount = fish.amount /2
            if (chefPrice < fish.price)
                approvedChefFish.push(halfAmount);
        }
        return approvedChefFish
    }

const todaysFish = chefMaxPrice(filteredInventory, 2)
/*

// This function is going to iterate through the array and return objects

Chef Purchasing Constraints
1. let chefMaxPrice = 5.00 - return fish that are only less or equal to that price 
    then add to approvedChefFish array 

2. if price <= chefMaxPrice - add 50% of inventory of each fish to chefInventory array

3. Return final array of all fish that is lower than chefs price
3a. The parameters should be mongerArray && chefPrice

let halfAmount = Math.round(fish.amount *  0.5);
            / Push the fish with the adjusted amount
            approvedChefFish.push({ ...fish, amount: halfAmount });

*/





module.exports = { mongerInventory, chefMaxPrice }