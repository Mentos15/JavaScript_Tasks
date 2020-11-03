//https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
  let swap;
  for(var i=0,j=s.length-1; i<j; i++,j--)
  {
      swap = s[j];
      s[j] = s[i];
      s[i] = swap;
  }
  return s;
};
