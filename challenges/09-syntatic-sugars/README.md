# Syntactic Sugars

In this challenge, you will put into practice everything you just learned in the `Syntactic Sugars` lesson of the **Clean Code** course.

# About the challenge

The code you will practice these concepts on has a goal: to take the first 5 values from an array of app ratings, sum them up, and return the result and the current time. For this, we have two functions:

- `sumFirstFiveRatings`: This function should return an object with the sum of the first 5 ratings and the current time in timestamp format (if you have any doubts about this format, it is the number of seconds that have passed since January 1, 1970). However, if the ratings are falsy or do not have at least 5 values, it should return the respective errors.
- `getFirstFiveRatings`: This function should return the first 5 values from the ratings array if its size is at least 5. If this condition is not met, it should return `false`.

Your goal in this code is to apply the concepts learned in the lesson, removing as many syntactic sugars as possible from the code. Remember that a shorter code is not always better.
