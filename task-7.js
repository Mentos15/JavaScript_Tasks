// https://leetcode.com/problems/longest-common-prefix/submissions/

var longestCommonPrefix = function(strs) {

  let str = strs[0];
  let result = "";
  let index;
  for (let i = 0; i < strs.length; i++) {
    if(strs[i].length < str.length)
    {
      str = strs[i];
      index = i;
    }
  }

  strs.splice(index,1);
  let flag = false;

  if(str === undefined)
  {
      return result;
  }
  else if(strs.length === 0)
  {
    return str;
  }

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < strs.length; j++) {
  
      if(str[i] === strs[j][i])
      {
        flag = true;
      }
      else
      {
        flag = false;
        return result;
      }     
    }
    if(flag)
    {
      result += str[i]
    } 
  }
  return result;
}
