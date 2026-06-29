from typing import List

# Valid Parentheses
def is_valid(s: str) -> bool:
  # youre adding what you want to later expect in the stack
  stack = []
  matches = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  for char in s:
    if char in matches:
      stack.append(matches[char])
    else:
      if not stack:
        return False
      expected = stack.pop()
      if char != expected:
        return False
  return len(stack) == 0

# Decode String
def decode_string(s: str):
  stack = []
  for char in s:
    if char == "]":
      # collect characters until we hit the matching '['
      tmp = ""
      while stack and stack[-1] != "[":
        tmp = stack.pop() + tmp  # prepend to maintain left-to-right order
      stack.pop()  # discard the '[' itself
      # collect all digit characters that precede the '['
      multiplier = ""
      while stack and stack[-1].isdigit():
        multiplier = stack.pop() + multiplier  # prepend to reconstruct multi-digit numbers correctly
      # replace the encoded segment with its decoded, repeated version
      stack.append(int(multiplier) * tmp)
    else:
      # nothing to decode yet, just accumulate
      stack.append(char)
  # stack now holds the fully decoded segments, join into final string
  return "".join(stack)

# Longest Valid Parentheses
def longest_valid_parentheses(input: str) -> int:
  max_len = 0
  stack = [-1]
  for i, char in enumerate(input):
    if char == "(":
      stack.append(i)
    else:
      stack.pop()
      if not stack:
        stack.append(i)
      else:
        max_len = max(max_len, i - stack[-1])
  return max_len

def longest_valid_parentheses2(input: str) -> int:
  max_len = 0
  curr_len = 0
  stack = []
  for char in input:
    if char == "(":
      stack.append(curr_len)
      curr_len = 0
    elif stack:
      curr_len += stack.pop() + 2
      max_len = max(max_len, curr_len)
    else:
      curr_len = 0
  return max_len

# Daily Temperatures
def daily_temps(temps: List[int]) -> List[int]:
  n = len(temps)
  result = [0] * n
  stack = []
  for i in range(n):
    while stack and temps[i] > temps[stack[-1]]:
      idx = stack.pop()
      result[idx] = i - idx
    stack.append(i)
  return result

# Largest Rectangle Area
def largest_rectangle_area(heights: list[int]) -> int:
  stack = []  # stores indices
  max_area = 0

  for i, h in enumerate(heights + [0]):
    while stack and heights[stack[-1]] > h:
      height = heights[stack.pop()]
      width = i if not stack else i - stack[-1] - 1
      max_area = max(max_area, height * width)
    stack.append(i)

  return max_area
