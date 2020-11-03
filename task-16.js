//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
  let maxProfit = 0
  let minPrice = prices[0]
  let nowProfit;
  for(let i=0; i< prices.length; i++)
  {
      if (prices[i] < minPrice)
      {
          minPrice = prices[i]
      }   
      nowProfit = prices[i] - minPrice;
      if(maxProfit < nowProfit)
      {
          maxProfit = nowProfit;
      }
      
  }
  return maxProfit;
};