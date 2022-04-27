var removeElement = function(nums, val) {
    let indexCounter = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[indexCounter] = nums[i]
            indexCounter++; 
        }
    }; 
    return indexCounter;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2)); 