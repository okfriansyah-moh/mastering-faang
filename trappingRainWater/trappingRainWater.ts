// given an array of integers, representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
// time complexity: O(n) - We traverse the list containing n elements only once.
// space complexity: O(1) - We are not using any extra space.
// implemented in typescript
const trappingRainWater = (height: number[]): number => {
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
const sampleHeight = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappingRainWater(sampleHeight)); // Output: 6
// Export the function for use in other modules
export default trappingRainWater;
// brute force solution
const trappingRainWaterBruteForce = (height: number[]): number => {
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
console.log(trappingRainWaterBruteForce(sampleHeight)); // Output: 6    