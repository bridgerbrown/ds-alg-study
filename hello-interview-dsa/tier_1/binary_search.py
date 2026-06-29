# Apple Harvest
from this import s


def min_harvest_rate(apples: list[int], h: int) -> int:
	# "if I harvest at this rate, how many total hours does the whole job take?"
	def hours_needed(rate: int) -> int:
		return sum((pile + rate - 1) // rate for pile in apples)
		# regular floor division rounds down, so we are just adding a rate + 1
		# be able to round up

	l, r = 1, max(apples)

	while l < r:
		mid = (l + r) // 2
		if hours_needed(mid) > h:
			l = mid + 1
		else: 
			r = mid

	return l


# Search in Rotated Sorted Array
def search(nums, target):
	l, r = 0, len(nums) - 1
	
	while l <= r:
		mid = (l + r) // 2
		if nums[mid] == target:
			return mid

		# find which half is sorted by comparing mid with l and r, 
		# then adjust l and r to closer window around mid 
		if nums[l] <= nums[mid]:
			if nums[l] <= target and target < nums[mid]:
				r = mid - 1
			else:
				l = mid + 1
		else:
			if nums[mid] < target and target <= nums[r]:
				l = mid + 1
			else:
				r = mid - 1
