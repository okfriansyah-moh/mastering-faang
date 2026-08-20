package trappingRainWater;

// given an array of integers, representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// implemented in java
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }

        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--;
            }
        }

        return totalWater;
    }
}

// output: The function returns the total amount of water that can be trapped
// after raining
// Example usage:
// public class Main {
// public static void main(String[] args) {
// Solution solution = new Solution();
// int[] height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
// int trappedWater = solution.trap(height);
// System.out.println("The total amount of water that can be trapped is: " +
// trappedWater);
// }
// }
// time complexity: O(n), where n is the number of elements in the height array,
// since we are using a two-pointer approach that traverses the array once.
// space complexity: O(1), as we are using a constant amount of extra space
// regardless of the input size.

// brute force approach: We can also solve this problem using a brute force
// approach, where we iterate through each element of the height array and
// calculate the amount of water that can be trapped at that position by finding
// the maximum height to the left and right of that position. However, this
// approach has a time complexity of O(n^2) and is not efficient for large input
// sizes.
class BruteForceSolution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }

        int totalWater = 0;
        int n = height.length;

        for (int i = 0; i < n; i++) {
            int leftMax = 0;
            int rightMax = 0;

            // Find the maximum height to the left of the current position
            for (int j = 0; j <= i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }

            // Find the maximum height to the right of the current position
            for (int j = i; j < n; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            // Calculate the water trapped at the current position
            totalWater += Math.min(leftMax, rightMax) - height[i];
        }

        return totalWater;
    }
}
