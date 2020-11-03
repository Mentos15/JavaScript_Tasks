// https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    
  let minCount = nums.length/2;
  
  let number;
  if(nums.length == 1) return nums[0];
  
  for(let i=0; i<nums.length;i++)
  {
      let count = 1;
      for(let j=1; j<nums.length; j++)
      {
          if(nums[i] == nums[j])
          {
              count++;
              number = nums[i];
          }    
      }
      if(count > minCount)
      {
          return number;
      }
  }
};