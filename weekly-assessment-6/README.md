# Filter out Strings from an Array

Create a function that takes an array of non-negative **integers** and **strings** and return a new array without the strings.

### Examples

```
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
```

### Notes

-   Zero is a non-negative integer.
-   The given array only has integers and strings.
-   Numbers in the array should not repeat.
-   The original order must be maintained.




# Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array

According to the lodash documentation, `_.dropRight` Creates a slice of an array with n elements dropped from the end.

This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

### Examples

```
dropRight([1, 2, 3]) ➞ [1, 2]

dropRight([1, 2, 3], 2) ➞ [1]

dropRight([1, 2, 3], 5) ➞ []

dropRight([1, 2, 3], 0) ➞ [1, 2, 3]
```

### Notes

-   Do not attempt to import lodash; you are simply writing your own version.

# Sum of Cubes

Create a function that takes in an array of numbers and returns the sum of its cubes.

### Examples

```
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0
```

### Notes

If given an empty array, return `0`.


# IMPORTANT

Please submit into this form :
https://docs.google.com/forms/d/e/1FAIpQLSeSCKoYEyzES8HQqnObnC9DWHwk8YWH612GVO5l7h8is1kxbA/viewform