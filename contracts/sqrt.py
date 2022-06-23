# Returns the square root of n.
# Note that the function
from itertools import count


def squareRootFunction(number):
    counter = 0
    approx = number
    y = 1
		
		# e decides the accuracy level
    while(1 < approx - y):
        counter+=1
        approx = (approx + y)/2
        y = number / approx
	
    print (approx, counter)