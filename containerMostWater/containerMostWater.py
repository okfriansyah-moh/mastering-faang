# You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
# Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
# Return the maximum amount of water a container can store.
# Implemented in Python
def max_area(height):
    left = 0
    right = len(height) - 1
    max_area = 0

    while left < right:
        # Calculate the area formed by the lines at the left and right pointers
        current_area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, current_area)

        # Move the pointer pointing to the shorter line inward
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area