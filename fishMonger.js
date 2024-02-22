const { boatInventory } = require("./fishingBoat.js")
const { dailyPriceLimit } = require("./main.js")

dailyPriceLimit = chefMaxPrice;
const todaysCatch = boatInventory()

function mongerInventory(chefPrice) {
// ! this function takes the fish from the boat and filters it with the price the 
// ! monger is willing to pay. it then pushes the "approved" fish to the MPF[] array
// ! and returns the MPF[]
const mongerPurchasedFish = [] // todaysCatch

    for (const fish of todaysCatch) {
        if (fish.amount >= 10 && fish.price <= 7.50) {
            mongerPurchasedFish.push(fish);
        }
    }
    chefMaxPrice()
    return mongerPurchasedFish
    //return chefMaxPrice(mongerPurchasedFish,)  
}

function chefMaxPrice(MPF, chefPrice) {
    
    let netApprovedFish = [];

    for (const fish of mongerInventory(MPF)) {
        if (fish.price <= dailyPriceLimit) {
            netApprovedFish = netApprovedFish.amount / 2
            netApprovedFish.push(fish);
        }
    }

    return netApprovedFish;
}

module.exports = { mongerInventory, chefMaxPrice }

//  ------------------------------------------------------------

/*
 +--^----------,--------,-----,--------^-,
 | |||||||||   `--------'     |          O ----- KILL ME OLD CODE BELOW
 `+---------------------------^----------| 
   `\_,---------,---------,--------------'
     / XXXXXX /'|       /'
    / XXXXXX /  `\    /'
   / XXXXXX /`-------'
  / XXXXXX /
 / XXXXXX /
(________(                
 `------'    

*/





//let filteredInventory = mongerInventory(todaysCatch)


/*const chefMaxPrice = (filteredInventory, chefPrice) => {

    let approvedChefFish = []
    
        for (const fish of filteredInventory) { 
            let halfAmount = fish.amount /2
            // let updatedFish = {...fish, amount: halfAmount};
            if (chefPrice < fish.price)
                approvedChefFish.push(updatedFish);
        }
        return approvedChefFish
    }

const todaysFish = chefMaxPrice(filteredInventory, dailyPriceLimit)


module.exports = { mongerInventory, chefMaxPrice }

/*

for (const fish of filteredInventory) {  
    if (chefPrice < fish.price) {
        fish.amount = fish.amount /  2; // Halve the amount
        approvedChefFish.push(fish); // Push the modified fish object
    }
}

    }
    return approvedChefFish;
}


let approvedChefFish = [];
filteredInventory.forEach(fish => {
  let halfAmount = fish.amount / 2;
  if (chefPrice < fish.price) {
    fish.amount = halfAmount;
    approvedChefFish.push(fish);
  }
}



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