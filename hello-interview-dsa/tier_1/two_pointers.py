from typing import List


# Two Sum (Sorted Array)
def two_sum(nums, target):
	l, r = 0, len(nums) - 1;

	while (r < l):
		curr = nums[l] + nums[r];
		if curr == target:
			return True
		if curr < target:
			l += 1;
		elif curr > target:
			r -= 1;

	return False;


# Container with most water
def max_area(heights: List[int]) -> int:
	l, r = 0, len(heights) - 1; 
	curr_max = 0;

	while (r < l):
		h = min(heights[r], heights[l]);
		w = r - l;
		area = h * w;
		curr_max = max(curr_max, area);

		if heights[l] < heights[r]:
			l += 1;
		else: 
			r -= 1;

	return curr_max


# 3-Sum
def three_sum(nums: List[int]) -> List[List[int]]:
	nums.sort()
	res = []
	for i in range(len(nums) - 2):
		if i > 0 and nums[i] == nums[i - 1]: # skip i duplicates
			continue;
		l = i + 1
		r = len(nums) - 1
		while l < r:
			total = nums[i] + nums[l] + nums[r]
			if total < 0:
				l += 1
			elif total > 0:
				r -= 1
			else:
				res.append([nums[i], nums[l], nums[r]])
				while l < r and nums[l] == nums[l + 1]: # skip l duplicates
					l += 1
				while l < r and nums[r] == nums[r - 1]: # skip r duplicates
					r -= 1
				l += 1
				r -= 1
	return res;


# Triangle Numbers
def triangle_numbers(nums: List[int]) -> int:
	nums.sort();
	count = 0
	for i in range(len(nums) - 1, 1, -1): # start, stop, step
		l = 0
		r = i - 1
		while l < r:
			if nums[l] + nums[r] > nums[i]:
				count += r - l # every number between the two is valid
				r -= 1
			else:
				l += 1
	return count


# Move Zeroes
def move_zeroes(nums: List[int]) -> None:
	firstZero = 0
	for i in range(len(nums)):
		if nums[i] != 0:
			nums[firstZero], nums[i] = nums[i], nums[firstZero]
			firstZero += 1


# Sort Colors
def sort_colors(nums: List[int]) -> None:
	l, i, r = 0, 0, len(nums) - 1 # l is where to swap zeroes, r is where to swap twos
	while i <= r:
		if nums[i] == 0:
			nums[i], nums[l] = nums[l], nums[i]
			l += 1
			i += 1
		elif nums[i] == 2:
			nums[i], nums[r] = nums[r], nums[i]
			r -= 1
		else:
			i += 1


# Trapping Rain Water
def trapping_water(heights: List[int]) -> int:
	# l and r will go towards the highest point
	if not heights:
		return 0
	l, r = 0, len(heights) - 1
	l_max, r_max = heights[l], heights[r]
	count = 0

	while l < r:
		if l_max < r_max:
			l += 1
			if heights[l] >= l_max: # move sides of container
				l_max = heights[l]
			else:
				count += l_max - heights[l]
		else:
			r -= 1
			if heights[r] >= r_max:
				r_max = heights[r]
			else:
				count += r_max - heights[r]

	return count
