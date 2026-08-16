# Container With Most Water

This project solves the classic `Container With Most Water` problem using the two-pointer technique in Go.

## Problem

You are given an array of non-negative integers where each integer represents the height of a line. Pick two lines and form a container with the x-axis. The container can hold a certain amount of water.

The goal is to find the maximum area that can be stored.

## Formula

For two lines at positions `i` and `j`:

- width = `j - i`
- height = `min(height[i], height[j])`
- area = `width * height`

## Approach

We use two pointers:

- `left` starts at the beginning of the array
- `right` starts at the end of the array
- compute the area between them
- track the maximum area seen so far
- move the pointer pointing to the shorter line inward

Why this works:

- the water trapped is limited by the shorter line
- if the shorter line does not move, the container cannot get taller
- so moving the shorter side is the most efficient choice

## Go Implementation

```go
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
```

## Example

```go
height := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
```

The maximum area is `49`.

## Complexity

- Time complexity: `O(n)`
- Space complexity: `O(1)`

This is efficient because each pointer moves toward the center at most once.

## File

- [containerMostWater.go](containerMostWater.go)
