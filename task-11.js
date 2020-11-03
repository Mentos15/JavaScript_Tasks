//https://leetcode.com/problems/add-to-array-form-of-integer/


var addToArrayForm = function(A, K) {
    
  let arr = [];
  let arrK = [];
  K = String(K);

  let summ = 0;

  for(let i=0; i<K.length; i++)
  {
    arrK.push(K[i]);
  }
  if(K.length > A.length)
  {
    let x = A.length;
    for(let i=0; i<K.length-x; i++)
    {
      A.unshift(0);
    }
  }

  for(let i=A.length-1; i>=0; i--)
  {
    if(K[arrK.length-1] === undefined)
    {
      if(i === 0)
      {
        arr.unshift(A[i]);
        arrK.splice(-1,1);
        break;
      }
      if(A[i] > 9)
      {
        A[i-1]+=1;
      }
      arr.unshift(A[i]%10);
      arrK.splice(-1,1,);
      
    }
    else
    {
      if(A[i] === undefined)
      {
        A[i] = 0;
      }
      else if(K[arrK.length-1] === undefined)
      {
        K[arrK.length-1] = 0;
      }
      summ = Number(A[i]) + Number(K[arrK.length-1]);
      if(i === 0)
      {
        arr.unshift(summ);
        arrK.splice(-1,1);
        break;
      }
      else if(summ > 9)
      {
        A[i-1]+=1; 
      }
      arr.unshift(summ%10);
      arrK.splice(-1,1);
    } 
  }
  let str = "";
  for(let i=0; i<arr.length; i++)
  {
    str+=arr[i];
  }
  arr = [];
  for(let i=0;i<str.length; i++)
  {
    arr.push(str[i]);
  }
  return arr;
};