function _getFirstFiveRatings(ratings) {
  return ratings.length >= 5 && ratings.slice(0, 5)
}

function _sumFirstFiveRatings(ratings) {
  const ratingsBool = !!ratings

  if (ratingsBool) {
    const firstFiveRatings = _getFirstFiveRatings(ratings)

    if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum += +rating
    }

    return { ratingsSum, created_at: +new Date() }
  }

  return { error: 'ratings is required' }
}

const _appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
_sumFirstFiveRatings(_appRatings)