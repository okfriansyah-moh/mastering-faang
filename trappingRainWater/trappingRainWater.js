// given an array of integers, representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
// time complexity: O(n) - We traverse the list containing n elements only once.
// space complexity: O(1) - We are not using any extra space.
// implemented in javascript
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
};

// Example usage:
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6

// Explanation: The above elevation map (represented by the array) can trap 6 units of water after raining.
// The water trapped is represented by the blue areas in the elevation map.
// The algorithm uses two pointers to traverse the elevation map from both ends, keeping track of the maximum heights encountered from the left and right sides. It calculates the trapped water based on the difference between the current height and the maximum height on that side.
// The time complexity is O(n) because we traverse the list containing n elements only once, and the space complexity is O(1) since we are not using any extra space.
// brutal force approach would be to use two nested loops to calculate the trapped water for each bar, but that would result in a time complexity of O(n^2), which is inefficient for large inputs. The two-pointer approach used here is optimal and efficient.
var trapBruteForce = function(height) {
    let waterTrapped = 0;
    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;

        // Find the maximum height to the left of the current bar
        for (let j = 0; j <= i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }

        // Find the maximum height to the right of the current bar
        for (let j = i; j < height.length; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        // Calculate the water trapped at the current bar
        waterTrapped += Math.min(leftMax, rightMax) - height[i];
    }
    return waterTrapped;
};

// Example usage of brute force approach:
console.log(trapBruteForce(height)); // Output: 6