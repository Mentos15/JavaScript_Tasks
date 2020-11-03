//https://leetcode.com/problems/squares-of-a-sorted-array/submissions/

var sortedSquares = function(A) {
  let arr = [];
  
  
  for(let i=0; i<A.length; i++)
  {
      arr.push(A[i]*A[i]);
  }
  
  for(let i=1; i<arr.length; i++)
  {
      for(let j=0; j<arr.length; j++)
      {
          let swap;
              
          if(arr[i]<arr[j])
          {
              swap = arr[j];
              arr[j] = arr[i];
              arr[i] = swap;
          }
      }
  }
  
  return arr;
};