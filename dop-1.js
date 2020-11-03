//https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {

  if(m===0 && n===1)
  {
    nums1[0]=nums2[0];
    return nums1;
  }
  else if(m === 0 )
  {
      for(let i=0; i<nums2.length; i++)
      {
          nums1[i] = nums2[i];
      }
      return nums1;
  }
  nums1.splice(m,n);

  for(let i=0; i<m+n; i++)
  {
      for(let j=0; j<n; j++)
      {
          if((nums1[i]<=nums2[j] && nums1[i+1]>nums2[j]))
          {
              nums1.splice(i+1, 0, nums2[j]);
              nums2.splice(j,1);
              j--;
              i++;
          }
          else if(nums1[i]>nums2[j] )
          {
            nums1.splice(i, 0, nums2[j]);
            nums2.splice(j,1);
            j--;
            i++;
          }
          else if (nums1[i] <= nums2[j] && i === nums1.length-1)
          {
            nums1.splice(i+1, 0, nums2[j]);
            nums2.splice(j,1);
            j--;
            i++;
          }

      }
  }
  return nums1;
}
