// Given an Array of integers, return the indices of the two numbers that add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]
// use typescript to implement the solution

export {};

function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }

        numMap.set(nums[i], i);
    }

    throw new Error("No two sum solution");
}

// time complexity: O(n) - we traverse the list containing n elements only once. 
// Each look up in the table costs only O(1) time.

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

// this is the example where we are not using maps solutions
function twoSumBruteForce(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    throw new Error("No two sum solution");
}
// time complexity: O(n^2) - we have a nested loop that goes through the list of n elements twice.
// space complexity: O(1) - we do not use any extra space.