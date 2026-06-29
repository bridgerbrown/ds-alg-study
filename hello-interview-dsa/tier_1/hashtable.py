

# Two Sum
from collections import defaultdict


def two_sum(nums, target):
	hashmap = {}
	for i in range(len(nums)):
		hashmap[nums[i]] = i
	for i in range(len(nums)):
		diff = target - nums[i]
		if diff in hashmap and hashmap[diff] != i:
			return [i, hashmap[diff]]
	return []


# Group Anagrams
def group_anagrams(strs):
	ans = defaultdict(list)
	for s in strs:
		key = "".join(sorted(s))
		ans[key].append(s)
	return list(ans.values())


# Top K Frequent Elements
def top_k(nums, k):
	freq = {}
	for num in nums:
		freq[num] = freq.get(num, 0) + 1

	buckets = [[] for _ in range(len(nums) + 1)]
	for num, f in freq.items():
		buckets[f].append(num)
	
	res = []
	for i in range(len(buckets) - 1, 0, -1): # start, stop, step -- down from most freq
		for num in buckets[i]:
			res.append(num)
			if len(res) == k:
				return res


# Longest Consecutive
def longest_consecutive(nums):
	num_set = set(nums)
	longest = 0

	for num in num_set:
		if num - 1 not in num_set:
			length = 1
			while num + length in num_set:
				length += 1
			longest = max(longest, length)
	
	return longest
