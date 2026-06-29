import heapq

# Kth Largest Element in an Array
def kth_largest(nums, k):
	if not nums:
		return

	heap = []
	for n in nums:
		if len(heap) < k:
			heapq.heappush(heap, n)
		elif n > heap[0]:
			heapq.heappushpop(heap, n)
	
	return heap[0]

# K Closest Points to Origin
def k_closest_points(points, k):
	heap = []
	for i in range(len(points)):
		x, y = points[i]
		distance = x * x + y * y

		if len(heap) < k:
			heapq.heappush(heap, (-distance, i))
		elif distance < -heap[0][0]:
			heapq.heappushpop(heap, (-distance, i))

	return [points[p[1]] for p in heap]


# Find K Closest Elements
def k_closest(nums, k, target):
	heap = []
	for n in nums:
		distance = abs(n - target)
		if len(heap) < k:
			heapq.heappush(heap, (-distance, n)) # use negative distance to make it a max heap
		elif distance < -heap[0][0]:
			heapq.heappushpop(heap, (-distance, n))

	distances = [pair[1] for pair in heap]
	distances.sort()
	return distances
