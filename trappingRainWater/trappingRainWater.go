// given an array of integers, representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
// implemented in go
// time complexity: O(n) - We traverse the list containing n elements only once.
// space complexity: O(1) - We are not using any extra space.
package trappingRainWater

func trap(height []int) int {
	if len(height) == 0 {
		return 0
	}

	left, right := 0, len(height)-1
	leftMax, rightMax := height[left], height[right]
	water := 0

	for left < right {
		if leftMax < rightMax {
			left++
			leftMax = max(leftMax, height[left])
			water += leftMax - height[left]
		} else {
			right--
			rightMax = max(rightMax, height[right])
			water += rightMax - height[right]
		}
	}

	return water
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// output of above function is the total amount of water that can be trapped after raining given the elevation map represented by the array of heights.
// example:
// Given height = [0,1,0,2,1,0,1,3,2,1,2,1],
// The total amount of water that can be trapped is 6.
// why?
// We use two pointers starting at both ends of the array and move them towards each other, always keeping track of the maximum height seen so far from both ends.
// lets say for iteration 1, left = 0, right = 11, leftMax = 0, rightMax = 1
// iteration 2, left = 1, right = 11, leftMax = 1, rightMax = 1
// iteration 3, left = 2, right = 11, leftMax = 1, rightMax = 1
// water += leftMax - height[left] => water += 1 - 0 => water = 1
// iteration 4, left = 3, right = 11, leftMax = 2, rightMax = 1
// iteration 5, left = 4, right = 11, leftMax = 2, rightMax = 1
// water += leftMax - height[left] => water += 2 - 1 => water = 2
// iteration 6, left = 5, right = 11, leftMax = 2, rightMax = 1
// water += leftMax - height[left] => water += 2 - 0 => water = 4
// iteration 7, left = 6, right = 11, leftMax = 2, rightMax = 1
// water += leftMax - height[left] => water += 2 - 1 => water = 5
// iteration 8, left = 7, right = 11, leftMax = 3, rightMax = 1
// iteration 9, left = 8, right = 11, leftMax = 3, rightMax = 2
// water += leftMax - height[left] => water += 3 - 2 => water = 6
// iteration 10, left = 9, right = 11, leftMax = 3, rightMax = 2
// water += leftMax - height[left] => water += 3 - 1 => water = 8
// iteration 11, left = 10, right = 11, leftMax = 3, rightMax = 2
// water += leftMax - height[left] => water += 3 - 2 => water = 9
// iteration 12, left = 11, right = 11, leftMax = 3, rightMax = 2
// time complexity: O(n) - We traverse the list containing n elements only once.
// space complexity: O(1) - We are not using any extra space.

// brute force approach is to use two nested loops to find the maximum height to the left and right of each bar and calculate the trapped water. However, this approach has a time complexity of O(n^2) and is not efficient for large inputs. The two-pointer approach used in the above function is optimal with a time complexity of O(n) and space complexity of O(1).
func trapBruteForce(height []int) int {
	if len(height) == 0 {
		return 0
	}

	water := 0

	for i := 0; i < len(height); i++ {
		leftMax, rightMax := 0, 0

		for j := i; j >= 0; j-- {
			leftMax = max(leftMax, height[j])
		}

		for j := i; j < len(height); j++ {
			rightMax = max(rightMax, height[j])
		}

		water += min(leftMax, rightMax) - height[i]
	}

	return water
}
