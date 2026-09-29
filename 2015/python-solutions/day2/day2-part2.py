# Information of Puzzle Day2 - Part 2: https://adventofcode.com/2015/day/2#part2

# Given a list of the dimensions (length(l), width(w), and hegiht(h)) of each present. (All numbers are in feets)
# The required ribbon for each present is: 2*min(l+w, w+h, l+h) + l*w*h
# How many total square feet of ribbon should they order?

import sys


def get_total_ribbon():
    with open('./day2-input.txt', 'r') as file:
        lines = file.read().splitlines()

    presents = (line.split('x') for line in lines)
    total = 0

    for present in presents:
        l = int(present[0])
        w = int(present[1])
        h = int(present[2])

        total += 2*min(l+w, w+h, l+h) + l*w*h

    print(total)

    return total


if __name__ == '__main__':
    sys.exit(get_total_ribbon())
