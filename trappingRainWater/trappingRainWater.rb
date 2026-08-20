# given an array of integers, representing an elevation map where the width of each bar is 1,
# compute how much water it can trap after raining.
# time complexity: O(n) - We traverse the list containing n elements only once.
# space complexity: O(1) - We are not using any extra space.
# implemented in ruby
def trap(height)
  return 0 if height.empty?

  state = initial_state(height.length)
  process_until_pointers_meet(height, state)

  state[:water_trapped]
end

def initial_state(length)
  {
    left: 0,
    right: length - 1,
    left_max: 0,
    right_max: 0,
    water_trapped: 0
  }
end

def process_until_pointers_meet(height, state)
  step_trap(height, state) while state[:left] < state[:right]
end

def step_trap(height, state)
  move_left?(height, state) ? trap_left_step(height, state) : trap_right_step(height, state)
end

def move_left?(height, state)
  height[state[:left]] < height[state[:right]]
end

def trap_left_step(height, state)
  state[:left_max], trapped = update_left(height[state[:left]], state[:left_max])
  state[:water_trapped] += trapped
  state[:left] += 1
end

def trap_right_step(height, state)
  state[:right_max], trapped = update_right(height[state[:right]], state[:right_max])
  state[:water_trapped] += trapped
  state[:right] -= 1
end

def update_left(current_height, left_max)
  return [current_height, 0] if current_height >= left_max

  [left_max, left_max - current_height]
end

def update_right(current_height, right_max)
  return [current_height, 0] if current_height >= right_max

  [right_max, right_max - current_height]
end

# example usage
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
puts "Water trapped: #{trap(height)}" # Output: Water trapped: 6

# brute force solution
def trap_brute_force(height)
  water_trapped = 0
  n = height.length

  (0...n).each do |i|
    left_max = height[0..i].max
    right_max = height[i..-1].max
    water_trapped += [left_max, right_max].min - height[i]
  end

  water_trapped
end

# example usage
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
puts "Water trapped (brute force): #{trap_brute_force(height)}" # Output: Water trapped (brute force): 6
