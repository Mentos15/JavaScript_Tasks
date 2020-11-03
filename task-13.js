//https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  let arr = [];
  let firstT;
  
  for(let i = 0; i<items.length; i++)
  {
    if(Array.isArray(items[i]))
    {
      if(pred(items[i].length)==true){
        arr.push(items[i]);
        items.splice(i,1);
        i--;
      }
    }
    else if(pred(items[i])==true){
      arr.push(items[i]);
      items.splice(i,1);
      i--;
    }
  }
  firstT  = items.length;
  for(let i = 0; i< arr.length; i++)
  {
    items.push(arr[i]);
  }
  return firstT;
}


