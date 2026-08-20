# Two Sum

This project solves the classic `Two Sum` problem using a hash map in Go.

## Problem

Given an array of integers and a target value, return the indices of the two numbers that add up to the target.

Constraints:

- exactly one valid answer exists
- you cannot use the same element twice

## Example

```go
nums := []int{2, 7, 11, 15}
target := 9
```

Output:

```go
[]int{0, 1}
```

Because `nums[0] + nums[1] = 2 + 7 = 9`.

## Approach

We use one pass with a hash map:

- iterate through the array once
- for each value `num`, compute the complement `target - num`
- if the complement already exists in the map, return both indices
- otherwise store the current value and index in the map

Why this works:

- when we reach a number, all previous numbers are available in the map
- if its complement has appeared before, we have found the pair immediately
- this avoids nested loops

## Go Implementation

```go
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
```

## Complexity

- Time complexity: `O(n)`
- Space complexity: `O(n)`

A brute-force alternative with nested loops is `O(n^2)` time and `O(1)` space.

## Files

- [twoSum.go](twoSum.go)
- [twoSum.java](twoSum.java)
- [twoSum.js](twoSum.js)
- [twoSum.py](twoSum.py)
- [twoSum.rb](twoSum.rb)
- [twoSum.ts](twoSum.ts)
