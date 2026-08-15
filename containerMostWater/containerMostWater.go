package containermostwater

// You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
// Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Implemented in Go lang.
func maxArea(height []int) int {
	left, right := 0, len(height)-1
	maxArea := 0

	for left < right {
		width := right - left
		h := min(height[left], height[right])
		area := width * h
		if area > maxArea {
			maxArea = area
		}

		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}

	return maxArea
}

// output of above function is maximum area of water that can be contained between two lines in the given array of heights.
// example:
// Given height = [1,8,6,2,5,4,8,3,7],
// The maximum area of water that can be contained is 49 (between lines at index 1 and index 8).
// why?
// We use two pointers starting at both ends of the array and move them towards each other, always keeping track of the maximum area found.
// lets say for iteration 1, left = 0, right = 8, width = 8, height = min(1,7) = 1, area = 8 * 1 = 8
// iteration 2, left = 1, right = 8, width = 7, height = min(8,7) = 7, area = 7 * 7 = 49
// iteration 3, left = 1, right = 7, width = 6, height = min(8,3) = 3, area = 6 * 3 = 18
// time complexity: O(n) - We traverse the list containing n elements only once.
// space complexity: O(1) - We are not using any extra space.
