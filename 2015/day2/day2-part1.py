# Information of Puzzle Day2 - Part 1: https://adventofcode.com/2015/day/2

# Given a list of the dimensions (length(l), width(w), and hegiht(h)) of each present. (All numbers are in feets)
# The required wrapping paper for each present is: 2*(l*w + w*h + l*h) + min(l*w, w*h, l*h)
# How many total square feet of wrapping paper should they order?

import sys


def get_total_wrapping_paper():
    with open('./day2-input.txt', 'r') as file:
        lines = file.read().splitlines()

    presents = (line.split('x') for line in lines)
    total = 0

    for present in presents:
        l = int(present[0])
        w = int(present[1])
        h = int(present[2])

        total += 2*(l*w + w*h + l*h) + min(l*w, w*h, l*h)

    print(total)

    return total


if __name__ == '__main__':
    sys.exit(get_total_wrapping_paper())
