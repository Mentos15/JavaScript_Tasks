//https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array){
  let str = "";
  
  for(let i=0; i<array.length; i++)
  {
    if(i+1==array.length)
      {
        str+=array[i];
        break;
      }
    str+=array[i]+","    
  }
  return str;
}