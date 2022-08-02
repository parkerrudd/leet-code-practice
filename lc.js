// var searchInsert = function(nums, target) {
//    let lower = 0
//    let upper = nums.length - 1
   
//    while (lower < upper) {
//        const middle = lower + Math.floor((upper - lower) / 2)
       
//        if (nums[middle] === target) return middle
       
//        if (nums[middle] < target) {
//            lower = middle + 1
//        }
       
//        if (nums[middle] > target) {
//            upper = middle - 1
//        }
//    }
   
//    return -1
   
// };

var mySqrt = function(x) {
   let lower = 1
   let upper = x 
   while (lower <= upper) {
       const middle = lower + Math.floor((upper - lower) / 2)
       console.log(middle);
       if (Math.round(middle * middle) === x) return middle
       
       if (Math.round(middle * middle) > x) upper = middle - 1
       
       if (Math.round(middle * middle) < x) lower = middle + 1
   }
   return lower + Math.floor((upper - lower) / 2)
};

console.log(mySqrt(25));

1,2,3,4,5,6,7,8