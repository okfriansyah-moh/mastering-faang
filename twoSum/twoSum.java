package twoSum;

// Given an Array of integers, return the indices of the two numbers that add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
import java.util.HashMap;
import java.util.Map;
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}

// time complexity: O(n) - We traverse the list containing n elements only once.
// Each look up in the table costs only O(1) time.
// space complexity: O(n) - We use a map to store the indices of the numbers.

// this is the brute force solution, which is not efficient for large inputs
class SolutionBruteForce {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j };
                }
            }
        }
        return new int[] {};
    }
}

// time complexity: O(n^2) - We have a nested loop
// that goes through the list of n elements twice.
// space complexity: O(1) - We do not use any extra space.