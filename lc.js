var searchInsert = function(nums, target) {
   let lower = 0
   let upper = nums.length - 1
   
   while (lower < upper) {
       const middle = lower + Math.floor((upper - lower) / 2)
       
       if (nums[middle] === target) return middle
       
       if (nums[middle] < target) {
           lower = middle + 1
       }
       
       if (nums[middle] > target) {
           upper = middle - 1
       }
   }
   
   return -1
   
};