# Maximum Depth of Binary Tree
def maxdepth(self, root):
	if root is None:
		return 0

	l = self.maxDepth(root.l)
	r = self.maxDepth(root.r)
	return max(l, r) + 1


# Path Sum
def pathsum(self, root, target):
	if not root:
		return False

	# at leaf node, target has been subtracted down the DFS branch to be checked against leaf val
	if not root.l and not root.r:
		return target == root.val

	l = pathsum(root.l, target - root.val)
	r = pathsum(root.r, target - root.val)
	return l or r


# Good Nodes
def goodnodes(root):
	def dfs(root, max_):
		if root is None:
			return 0

		count =	0
		if root.val >= max_:
			count += 1
			max_ = root.val

		l = dfs(root.l, max_)
		r = dfs(root.r, max_)
		return l + r + count

	return dfs(root, -float("inf"))


# Validate BST
def validate_bst(root):
	def dfs(node, min_, max_):
		if node is None:
			return True

		if node.val <= min_ or node.val >= max_:
			return False

		return dfs(node.left, min_, node.val) and dfs(node.right, node.val, max_)

	return dfs(root, float('-inf'), float('inf'))


# Calculate Tilt
def find_tilt(root) -> int:
	tilt = 0

	def dfs(node):
		nonlocal tilt
		if not node:
			return 0

		left = dfs(node.left)
		right = dfs(node.right)

		tilt += abs(left - right)

		return left + right + node.val

	dfs(root)
	return tilt


# Diameter of a Binary Tree
def diameter_of_bt(root):
	max_ = 0
	def dfs(node):
		nonlocal max_
		if not node:
			return 0

		left = dfs(node.left)
		right = dfs(node.right)
		max_ = max(max_, left + right)
		return max(left, right) + 1 # returning the longest path of the children

	dfs(root)
	return max_


# Path Sum 2
def path_sum(root, target) -> List[List[int]]:
	def dfs(node, target, path):
		if not node:
			return

		path.append(node.val)
		if not node.left and not node.right:
			if node.val == target:
				result.append(path[:])

		dfs(node.left, target - node.val, path)
		dfs(node.right, target - node.val, path)

		path.pop()

	result = []
	dfs(root, target, [])
	return result


# Longest Univalue Path
def longest_univalue_path(root):
	max_length = 0

	def dfs(node):
		nonlocal max_length
		if not node:
			return 0

		left_length = dfs(node.left)
		right_length = dfs(node.right)

		left_arrow = right_arrow = 0

		if node.left and node.left.value == node.val:
			left_arrow = left_length + 1
		if node.right and node.right.value == node.val:
			right_arrow = right_length + 1

		max_length = max(max_length, left_arrow + right_arrow)
		return max(left_arrow, right_arrow)

	dfs(root)
	return max_length


### GRAPHS

# Copy Graph (creating an adjency list)
def copy_graph(node):
	adj_list = {}

	def dfs(node):
		if node.value in adj_list:
			return

		adj_list[node.value] = [n.value for n in node.neighbors]
		for neighbor in node.neighbors:
			dfs(neighbor)

		if node:
			dfs(node)

	return adj_list


# Graph Valid Tree
def valid_tree(n, edges):
	# Mathematical property: a tree with 'n' nodes MUST have exactly 'n - 1' edges.
	#	If it has more, there is a cycle. If it has fewer, it is disconnected.
	if len(edges) != n - 1:
		return False

	adj = [[] for _ in range(n)]
	for u, v in edges:
		adj[u].append(v)
		adj[v].append(u)

	visited = set()

	def dfs(node):
		visited.add(node)

		for neighbor in adj[node]:
			if neighbor not in visited:
				dfs(neighbor)

	dfs(0)

	# if we visited all 'n' nodes, the graph is connected.
	# because we already checked that edges == n - 1, connectivity guarantees no cycles.
	return len(visited) == n


# DFS on a Matrix
def dfs(matrix):
	visited = set()
	# up, down, left, right
	directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

	def dfs_helper(r, c):
		if (r, c) in visited:
			return

		# check if the cell is out of bounds
		if r < 0 or r >= len(matrix) or c < 0 or c >= len(matrix[0]):
			return

		visited.add((r, c))
		for dr, dc in directions:
			dfs_helper(r + dr, c + dc)
		return

	dfs_helper(0, 0)


# Flood Fill
def flood_fill(image, sr, sc, color):
	rows, cols =	len(image), len(image[0])
	original_color = image[sr][sc]

	if original_color == color:
		return image

	def dfs(r, c):
		if image[r][c] == original_color:
			image[r][c] = color

			if r >= 1: dfs(r - 1, c)
			if r + 1 < rows: dfs(r + 1, c)
			if c >= 1: dfs(r, c - 1)
			if c + 1 < cols: dfs(r, c + 1)

	dfs(sr, sc)
	return image
