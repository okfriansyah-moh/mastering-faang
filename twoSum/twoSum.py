# Given an Array of integers, return the indices of the two numbers that add up to a specific target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# Example:
# Given nums = [2, 7, 11, 15], target = 9,
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1]
# use python to implement the solution

def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []
# time complexity: O(n) - we traverse the list containing n elements only once.
# Each look up in the table costs only O(1) time.
# Example usage:
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(result)  # Output: [0, 1]

# this is the example where we are not using maps solutions
def two_sum_brute_force(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
# time complexity: O(n^2) - we have two nested loops, each of which can go up to n in the worst case.
# space complexity: O(1) - we do not use any extra space.