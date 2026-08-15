// Given an Array of integers, return the indices of the two numbers that add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]
// use go lang
package main

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		if j, ok := m[target-num]; ok {
			return []int{j, i}
		}
		m[num] = i
	}
	return []int{}
}

// time complexity: O(n) - We traverse the list containing n elements only once.
// Each look up in the map costs only O(1) time.
// space complexity: O(n) - We use a map to store the indices of the numbers.

// brute force solution
func twoSumBruteForce(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}

// time complexity: O(n^2) - We have two nested loops, each going through n elements.
// space complexity: O(1) - We are not using any extra space.
