# Trapping Rain Water

This project solves the classic `Trapping Rain Water` problem using the two-pointer technique in Go.

## Problem

You are given an array of non-negative integers where each value represents an elevation bar of width `1`. Compute how much rain water can be trapped between the bars.

## Formula

At index `i`, trapped water is based on the tallest bars seen on both sides:

- `left_max = max(height[0..i])`
- `right_max = max(height[i..n-1])`
- `water_at_i = min(left_max, right_max) - height[i]`

Total trapped water is the sum of all positive `water_at_i` values.

## Approach

We use two pointers:

- `left` starts at the beginning of the array
- `right` starts at the end of the array
- track `leftMax` and `rightMax`
- move the side with the smaller max height inward
- add trapped water at that side

Why this works:

- trapped water depends on the smaller boundary
- once one side is the limiting boundary, that side can be resolved immediately
- each pointer moves inward at most once

## Go Implementation

```go
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
```

## Example

```go
height := []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
```

The total trapped water is `6`.

## Complexity

- Time complexity: `O(n)`
- Space complexity: `O(1)`

A brute-force alternative computes left/right max for each index in `O(n^2)` time.

## Files

- [trappingRainWater.go](trappingRainWater.go)
- [trappingRainWater.java](trappingRainWater.java)
- [trappingRainWater.js](trappingRainWater.js)
- [trappingRainWater.py](trappingRainWater.py)
- [trappingRainWater.rb](trappingRainWater.rb)
- [trappingRainWater.ts](trappingRainWater.ts)
