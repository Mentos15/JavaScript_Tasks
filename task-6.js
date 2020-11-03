//https://leetcode.com/problems/find-peak-element/

var findPeakElement = function(nums) {

    let leftNumber = 0
    let rightNumber = nums.length - 1;
    while(leftNumber < rightNumber){
        let midNumber = Math.floor((leftNumber + rightNumber) / 2);
        if(nums[midNumber] < nums[midNumber + 1])
            leftNumber = midNumber + 1;
        else
            rightNumber = midNumber;
    }
    return leftNumber;
};
