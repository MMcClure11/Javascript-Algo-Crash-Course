//Amazon

//When is the best time to buy and sell stock
//takes in array of numbers

//[7,1,5,3,6,4]
// minBuyPrice = 1
//maxProfit = 6-1 = 5
//must buy stock first then sell it
//need to vars
//minBuyPrice and maxProfit

const maxProfit = (prices) => {
  let minBuyPrice = Infinity
  let maxProfit = 0

  if(!prices || prices.length === 0) {
    return maxProfit
  }

  for (let price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price
    } else if (price - minBuyPrice > maxProfit) {
      maxProfit = price - minBuyPrice
    }
  }
  
  return maxProfit

}
