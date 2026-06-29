from typing import List


# Max Subarray
def max_subarray_sum(nums, k):
	max_sum = float('-inf')
	count, start = 0, 0

	for end in range(len(nums)):
		count += nums[end]

		if end - start + 1 == k:
			max_sum = max(max_sum, count)
			count -= nums[start]
			start += 1

		return max_sum


# Max Points You Can Obtain From Cards
def max_score(cardPoints: List[int], k: int) -> int:
	# Each iteration, swap one card: add the next card from the left, remove one card from the right. 
	# left starts at 0 and walks right; right starts at n-k and walks toward the end.
	# So the window is always size k, but gradually shifts from "all right" → "all left":
	max_score = score = sum(cardPoints[-k:])
	end = len(cardPoints)

	l = 0
	for r in range(end - k, end):
		score += cardPoints[l] - cardPoints[r]
		l += 1
		max_score = max(max_score, score)

	return max_score


# Max Sum of Distinct Subarrays Length K
def max_subarray_sum(nums: List[int], k: int) -> int:
	# right=0: window=[1]
	# right=1: window=[1,5]
	# right=2: window=[1,5,4]        → size==k, max_sum=10, shrink → [5,4]
	# right=3: window=[5,4,2]        → size==k, max_sum=11, shrink → [4,2]
	# right=4: window=[4,2,9]        → size==k, max_sum=15, shrink → [2,9]
	# right=5: 9 is duplicate! shrink until gone → [9], then add → [9,9]
	#          wait, still duplicate → shrink → [], add → [9]
	# right=6: window=[9,3]
	#          never hits size k with unique elements before end
	num_set = set()
	l = total = max_sum = 0

	for r in range(len(nums)):
		while nums[r] in num_set:
			total -= nums[l]
			num_set.remove(nums[l])
			l += 1

		total += nums[r]
		num_set.add(nums[r])

		if r - l + 1 == k:
			max_sum = max(max_sum, total)
			total -= nums[l]
			num_set.remove(nums[l])
			l += 1

		return max_sum


## VARIABLE LENGTH SLIDING WINDOW

# Fruit Into Baskets
def fruit_into_baskets(fruits):
	start = 0
	state = {}
	max_fruit = 0

	for end in range(len(fruits)):
		state[fruits[end]] = state.get(fruits[end], 0) + 1

		while len(state) > 2:
			state[fruits[start]] -= 1
			if state[fruits[start]] == 0:
				del state[fruits[start]]
			start += 1

		max_fruit = max(max_fruit, end - start + 1)

	return max_fruit


# Longest Repeating Character Replacement Window
def character_replacement(s: str, k: int) -> int:
	max_str = max_repeat = start = 0
	repeated = {}

	for end in range(len(s)):
		repeated[s[end]] = repeated.get(s[end], 0) + 1
		max_repeat = max(max_repeat, repeated[s[end]])

		if (end - start + 1) - max_repeat > k:
			repeated[s[start]] -= 1
			start += 1

		max_str = max(max_str, end - start + 1)

	return max_str
	

