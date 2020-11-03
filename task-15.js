//https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function(s) {
    
  let arr = []
  let save;
  let str = "";
  

  for (let i = 0; i < s.length; i++) {
    
    arr.push(s[i])
  }
  let saveIndex = arr.length-1;
  for(let i=0; i<arr.length; i++)
  {
    if(i > saveIndex)
    {
      break;
    }
    
    if(arr[i]=='a' || arr[i]=='e' || arr[i]=='u' || arr[i]=='i' || arr[i]=='o' 
    || arr[i]=='A' || arr[i]=='E' || arr[i]=='U' || arr[i]=='I' || arr[i]=='O')
    {
      for(let j=saveIndex; j>=0; j--)
      {
          if(arr[j]=='a' || arr[j]=='e' || arr[j]=='u' || arr[j]=='i' || arr[j]=='o' 
          || arr[j]=='A' || arr[j]=='E' || arr[j]=='U' || arr[j]=='I' || arr[j]=='O')
          {
              save = arr[i];
              arr[i] = arr[j]
              arr[j] = save;
              j--;
              saveIndex = j;
              
              break;
          }
      }
    }
  }

    
  for (let i = 0; i < arr.length; i++) {
    str+=arr[i];
    
  }
  return str;
};