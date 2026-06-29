# Sort by start -> detect overlaps, merge intervals
# Sort by end -> maximum non-overlapping intervals

# Can Attend Meetings
from typing import List


def can_attend_meetings(intervals):
	if not intervals: return True

	intervals.sort(key=lambda x: x[0])
	
	for i in range(1, len(intervals)):
		if intervals[i][0] < intervals[i-1][1]:
			return False

	return True


# Insert Interval
def insert_interval(intervals: List[List[int]], new: List[int]) -> List[List[int]]:
	merged = []
	i = 0
	length = len(intervals)

	while i < length and intervals[i][1] < new[0]:
		merged.append(intervals[i])
		i += 1

	while i < length and intervals[i][0] <= new[1]:
		new[0] = min(intervals[i][0], new[0])
		new[1] = max(intervals[i][1], new[1])
		i += 1

	merged.append(new)
	for j in range(i, length):
		merged.append(intervals[j])

	return merged
	

# Non-Overlapping Intervals
def non_overlapping_intervals(intervals: List[List[int]]) -> int:
	if not intervals:
		return 0

	intervals.sort(key=lambda x: x[1])
	end = intervals[0][1]
	count = 0

	for i in range(1, len(intervals)):
		if intervals[i][0] < end:
			count += 1
		else:
			end = intervals[i][1]

	return count


# Merge Intervals
def merge_intervals(intervals: List[List[int]]) -> List[List[int]]:
	merged = []
	intervals.sort(key=lambda x: x[0])

	for i in intervals:
		if not merged or i[0] > merged[-1][1]:
			merged.append(i)
		else:
			merged[-1][1] = max(i[1], merged[-1][1])

	return merged

			
# Employee Free Time
def employee_free_time(sched: List[List[List[int]]]) -> List[List[int]]:
	flattened = [i for employee in sched for i in employee]
	intervals = sorted(flattened, key=lambda x: x[0])
	
	merged = []
	for i in intervals:
		if not merged or merged[-1][1] < i[0]:
			merged.append(i)
		else:
			merged[-1][1] = max(merged[-1][1], i[1])

	free_times = []
	for i in range(1, len(merged)):
		start = merged[i-1][1]
		end = merged[i][0]
		free_times.append([start, end])

	return free_times

