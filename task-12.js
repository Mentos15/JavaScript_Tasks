//https://leetcode.com/problems/relative-sort-array/

var relativeSortArray = function(arr1, arr2) {
  
  for (let i = 1; i < arr1.length; i++)
  {
    for (let j = 0; j < i; j++)
    {
        if (arr1[i] < arr1[j]) 
        {
          let x = arr1[i];
          arr1[i] = arr1[j];
          arr1[j] = x;
        }
    }
  }

  
  for (let i = arr2.length-1; i >=0 ; i--) {
    for (let j = 0; j < arr1.length; j++) {
      if(arr1[j]===arr2[i]){
        
        if(j!=0)
        {
          arr1.splice(j,1);
          j--;
          arr1.unshift(arr2[i]);
        }
      }
    }
    
  }
  
  return arr1;
};