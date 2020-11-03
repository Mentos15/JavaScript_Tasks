//https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
  
  let resultSplitStr = "";
  let reversStr = "";
  for(let i=0; i<s.length; i++)
  {
    if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z') || ((s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')) || ((s.charAt(i) >= '0' && s.charAt(i) <= '9')))
    {
      resultSplitStr+=s[i];
    }
    else if((s.charAt(i) >= 'а' && s.charAt(i) <= 'я') || ((s.charAt(i) >= 'А' && s.charAt(i) <= 'Я') ) || ((s.charAt(i) >= '0' && s.charAt(i) <= '9')))
    {
      resultSplitStr+=s[i];
    }
  }

  for(let i=resultSplitStr.length-1;i>=0; i--)
  {
    reversStr += resultSplitStr[i];
  }

  if(reversStr.toLowerCase() === resultSplitStr.toLowerCase())
    return true;
  else 
    return false;

};
