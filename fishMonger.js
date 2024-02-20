const { boatInventory } = require("./fishingBoat.js")


/*



all prices fixed (2)



Fish Monger Purchasing Constraints
1. if fish.amount < 10 && fish.price > 7.50 - dont buy
2. else fish.amount >= 10 - buy 10 of that fish
2a. if fish.amount >= 10 && fish.price <7.50 add 10 fish to array (mongerArray)
3. determine what fish meet those requirement 

function mongerInventory() {

mongerPurchasedFish = []

    for (const fish of boatInventory) {
        if fish.amount < 10 && fish.price > 7.50{

        }else{
            mongerPurchasedFish.push(fish)
        }


    }
    return mongerPurchasedFish  
}



// This function is going to iterate through the array and return objects



Chef Purchasing Constraints
1. let chefMaxPrice = 5.00 - return fish that are only less or equal to that price 
    then add to approvedChefFish array 

2. if price <= chefMaxPrice - add 50% of inventory of each fish to chefInventory array

3. Return final array of all fish that is lower than chefs price
3a. The parameters should be mongerArray && chefPrice

2 func

const chefMaxPrice = (mongerPurchasedFish, chefPrice) =>{

approvedChefFish = []

    for (const fish of mongerPurchasedFish) {
        if chefPrice <= mongerPurchasedFish.price
            approvedChefFish.push(fish.amount) * .5
    }

    return approvedChefFish
 


*/

module.exports = { mongerInventory, chefMaxPrice } // & export chefArray