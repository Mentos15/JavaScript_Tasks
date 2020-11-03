//https://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {

  if( Number(n) === Infinity || Number(n) === -Infinity || isNaN(n) || (n^0) != n )
  {
    let TypeError = new Error;
    TypeError.name = "TypeError";
    TypeError.message = n + " is invalid";
    throw TypeError
  }
  else if((typeof(n) != "number" && Number(n) !=0) || Number(n) < 0 || n === false)
  {
    let TypeError = new Error;
    TypeError.name = "TypeError";
    TypeError.message = n + " is invalid";
    throw TypeError
  }
  
  else if(v === null)
  {
    return new Array["undefined"]
  }
  else
  {
    let arr = [];
    for (let i = 0; i < Math.floor(Number(n)); i++) {
      arr.push(v);
    }
    return arr; 
  }
}
