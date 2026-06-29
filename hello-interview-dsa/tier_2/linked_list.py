# Palindrome LL
def is_palindrome(head):
	# find middle
	slow = fast = head
	while fast and fast.next:
		fast = fast.next.next
		slow = slow.next

	# reverse second half
	curr, prev = slow, None
	while curr:
		temp = curr.next
		curr.next = prev
		prev = curr
		curr = temp

	# check palindrome
	l, r = head, prev
	while r:
		if l.val != r.val:
			return False
		l = l.next
		r = r.next
	return True


# LL Cycle
class Node:
	def __init__(self, val=0, next=None) -> None:
		self.val = val
		self.next = next

def cyclical(head):
	slow = head
	fast = head

	while fast and fast.next:
		slow = slow.next
		fast = fast.next.next

		if slow == fast:
			return True
	
	return False


# Remove Nth Node from End
def remove_from_end(head, n):
	temp = ListNode(0)
	temp.next = head

	fast, slow = temp, temp
	for _ in range(n):
		fast = fast.next

	while fast.next:
		fast = fast.next
		slow = slow.next

	slow.next = slow.next.next
	return temp.next
