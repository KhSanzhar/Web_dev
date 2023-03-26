# https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true
n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()
avg = sum(student_marks[query_name]) / len(student_marks[query_name])
print(f'{avg:.2f}')
