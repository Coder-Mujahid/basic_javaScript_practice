function findIndices(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}

// Example usage:
const numbers = [1, 3, 5, 7, 9, 11, 13];
const targetSum = 16;

const result = findIndices(numbers, targetSum);

if (result) {
    console.log(`Indices with values ${targetSum} are: [${result}]`);
} else {
    console.log("No such indices found.");
}
