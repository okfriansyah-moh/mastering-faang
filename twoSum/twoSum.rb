# Given an Array of integers, return the indices of the two numbers that add up to a specific target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# Example:
# Given nums = [2, 7, 11, 15], target = 9,
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1]
# use ruby to implement the solution

def two_sum(nums, target)
  hash = {}
  nums.each_with_index do |num, index|
    complement = target - num
    return [hash[complement], index] if hash.key?(complement)

    hash[num] = index
  end
  []
end
# time complexity: O(n)
# space complexity: O(n) - we use a hash to store the indices of the numbers.

# Example usage:
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
puts "Indices of the two numbers that add up to #{target}: #{result}"

# this is the example where we are not using maps solutions
# time complexity: O(n^2) - we have a nested loop that goes through the list of n elements twice.
# space complexity: O(1) - we do not use any extra space.
def two_sum_brute_force(nums, target)
  nums.each_with_index do |num1, index1|
    nums.each_with_index do |num2, index2|
      next if index1 == index2
      return [index1, index2] if num1 + num2 == target
    end
  end
  []
end
