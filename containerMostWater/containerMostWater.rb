# You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
# Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
# Return the maximum amount of water a container can store.
# Implemented in ruby
def max_area(height)
  left = 0
  right = height.length - 1
  max_area = 0

  while left < right
    max_area = [max_area, container_area(height, left, right)].max
    left, right = move_pointers(height, left, right)
  end

  max_area
end

private

def container_area(height, left, right)
  (right - left) * [height[left], height[right]].min
end

def move_pointers(height, left, right)
  if height[left] < height[right]
    [left + 1, right]
  else
    [left, right - 1]
  end
end
