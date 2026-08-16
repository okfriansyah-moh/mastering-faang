// You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
// Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Implemented in javascript
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentWater = width * currentHeight;

        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Example usage:
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights)); // Output: 49