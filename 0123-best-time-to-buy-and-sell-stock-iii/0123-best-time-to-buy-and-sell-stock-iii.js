/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;

  let firstBuy = -Infinity;
  let firstSell = 0;
  let secondBuy = -Infinity;
  let secondSell = 0;

  for (let price of prices) {
    firstBuy = Math.max(firstBuy, -price);
    firstSell = Math.max(firstSell, firstBuy + price);
    secondBuy = Math.max(secondBuy, firstSell - price);
    secondSell = Math.max(secondSell, secondBuy + price);
  }

  return secondSell;
};