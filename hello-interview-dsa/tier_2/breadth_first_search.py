from collections import deque
from typing import List


# Level Order Sum
def level_order_sum(root) -> List[int]:
	if not root:
		return []

	nodes = []
	queue = deque([root])

	while queue:
		level_size = len(queue)
		sum_ = 0

		for i in range(level_size):
			node = queue.popleft() # guarantees you finish the current level before the next level
			sum_ += node.val
			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)

		nodes.append(sum_)

	return nodes


# Rightmost Node
def right_most_node(root) -> List[int]:
	if not root:
		return []

	nodes = []
	queue = deque([root])

	while queue:
		level_size = len(queue)
		for i in range(level_size):
			node = queue.popleft()

			if i == level_size - 1:
				nodes.append(node.val)

			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)

	return nodes


# Zigzag Level Order
def zig_zag(root):
	if not root:
		return []

	nodes = []
	queue = deque([root])
	left_to_right = True

	while queue:
		level_size = len(queue)
		nodes_for_level = deque()
		
		for i in range(level_size):
			node = queue.popleft()

			if left_to_right:
				nodes_for_level.append(node.val)
			else:
				nodes_for_level.appendleft(node.val)

			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)

		nodes.append(list(nodes_for_level))
		left_to_right = not left_to_right

	return nodes

# Maximum Width of Binary Tree
def max_width(root: TreeNode) -> List[int]:
	if not root:
		return 0

	# enqueue the root node with position 0
	queue = deque([(root, 0)])
	max_ = 0

	while queue:
		level_size = len(queue)

		_, leftPos = queue[0]
		rightPos = -1

		for i in range(level_size):
			node, pos = queue.popleft()

			if i == level_size - 1:
				rightPos = pos

			# add children to queue
			if node.left:
				queue.append((node.left, 2 * pos + 1))
			if node.right:
				queue.append((node.right, 2 * pos + 2))

		max_ = max(max_, rightPos - leftPos + 1)
	
	return max_

###### GRAPHS

# BFS on Adjacency List
adjList = {
	"1": ["2", "4"],
	"2": ["1", "3"],
	"3": ["2", "4"],
	"4": ["1", "3", "5"],
	"5": ["4"]
}

def bfs(start):
	visited = set([start])
	queue = deque([start])

	while queue:
		node = queue.popleft()
		for neighbor in adjList[node]:
			if neighbor not in visited:
				visited.add(neighbor)
				queue.append(neighbor)


# BFS on a Matrix (2D Grid)
matrix = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 0]
]

def bfs_grid(grid):
	visited = set()
	# up, down, left, right
	directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

	queue = deque([0, 0])
	visited.add((0, 0))

	while queue:
		row, col = queue.popleft()

		# enqueue neighbors
		for dr, dc in directions:
			n_row = row + dr
			m_col = col + dc

			# check bounds and if neighbor is visited
			if 0 <= n_row < len(grid) and 0 <= m_col < len(grid[0]) and (n_row, m_col) not in visited:
				queue.append((n_row, m_col))
				visited.add((n_row, m_col))


# Nodes at a Level
def bfs_adjacency_list_level_by_level(graph, start):
	queue = deque([start])
	visited = set()
	visited.add(start)
	levels = []

	while queue:
		level_size = len(queue)
		current_level =	[]

		for _ in range(level_size):
			node = queue.popleft()
			current_level.append(node)
			for neighbor in graph[node]:
				if neighbor not in visited:
					visited.add(neighbor)
					queue.append(neighbor)

		levels.append(current_level)
	
	return levels

def bfs_matrix_level_by_level(matrix):
	rows, cols = len(matrix), len(matrix[0])
	directions = [(0, -1), (1, 0), (0, -1), (-1, 0)]

	queue = deque([0, 0])
	visited = set([0, 0])

	levels = []
	while queue:
		level_size = len(queue)
		current_level = []

		for _ in range(level_size):
			row, col = queue.popleft()
			current_level.append((row, col))
			for dr, dc in directions:
				r, c = row + dr, col + dc
				if 0 <= r < rows and 0 <= c < cols and (r, c) not in visited:
					visited.add((r, c))
					queue.append((r, c))

		levels.append(current_level)

	return levels
