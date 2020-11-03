//https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {

    let flag = false;
    let count = 0;
    for (let i = s.length-1; i >= 0; i--) {
        if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z') || (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z'))
        {
            count++;
            flag = true;
        }
        else if(s[i] === ' ' && flag === true)
        {
            return count;
        }
    }
    if(flag === false)
    {
        return count;
    }
    return count;
};