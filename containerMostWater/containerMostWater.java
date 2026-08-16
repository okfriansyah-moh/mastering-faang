// You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
// Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Implemented in java

package containerMostWater;

class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxArea = 0;

        while (left < right) {
            int width = right - left;
            int currentHeight = Math.min(height[left], height[right]);
            int currentArea = width * currentHeight;
            maxArea = Math.max(maxArea, currentArea);

            // Move the pointer of the shorter line inward
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}

// output: The function returns the maximum area of water that can be contained
// between two lines in the given array of heights.
// Example usage:
// public class Main {
// public static void main(String[] args) {
// Solution solution = new Solution();
// int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
// int maxWater = solution.maxArea(height);
// System.out.println("The maximum amount of water a container can store is: " +
// maxWater);
// }
// }
// time complexity: O(n), where n is the number of elements in the height array,
// since we are using a two-pointer approach that traverses the array once.
// space complexity: O(1), as we are using a constant amount of extra space
// regardless of the input size.