//https://leetcode.com/problems/find-common-characters/

var commonChars = function(A) {
    
  let arr = [];
  let letter;
  let flag = false;
  
  for(let i=0; i<A[0].length; i++)
  {
      letter = A[0][i];
      for(let x=1; x<A.length;x++)
      {
          for(let j=0; j<A[x].length; j++)
          {
              flag = false;
              if(A[x][j] === letter)
              {
                  flag = true;
                  A[x] = A[x].replace(letter, '');
                  j--;
                  break;
              }
          
          }
          if(flag && x === A.length-1)
          {
              arr.push(letter);
              break;
          }
          else if(!flag)
          {
              break;
          }
      }
  }
  return arr;
};