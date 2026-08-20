# given an array of integers, representing an elevation map where the width of each bar is 1,
# compute how much water it can trap after raining.
# time complexity: O(n) - We traverse the list containing n elements only once.
# space complexity: O(1) - We are not using any extra space.
# implemented in python
def trapping_rain_water(height):
    left = 0
    right = len(height) - 1
    left_max = 0
    right_max = 0
    water_trapped = 0

    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water_trapped += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water_trapped += right_max - height[right]
            right -= 1

    return water_trapped

# Example usage:
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trapping_rain_water(height))  # Output: 6

# brief explanation:
# The algorithm uses two pointers, left and right, to traverse the height array from both ends. It keeps track of the maximum height encountered from the left and right sides (left_max and right
#_max). At each step, it compares the heights at the left and right pointers. If the height at the left pointer is less than that at the right pointer, it checks if the current height is greater than or equal to left_max. If it is, it updates left_max; otherwise, it adds the difference between left_max and the current height to water_trapped. The same logic applies when the height at the right pointer is less than or equal to that at the left pointer. This process continues until the two pointers meet, resulting in the total amount of trapped water being calculated efficiently in O(n) time and O(1) space.
# brute force solution:
def trapping_rain_water_brute_force(height):
    water_trapped = 0
    n = len(height)

    for i in range(n):
        left_max = max(height[:i + 1])  # Maximum height to the left of the current bar
        right_max = max(height[i:])     # Maximum height to the right of the current bar
        water_trapped += min(left_max, right_max) - height[i]  # Water trapped at the current bar

    return water_trapped    