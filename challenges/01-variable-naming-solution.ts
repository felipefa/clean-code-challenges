// Variable naming

const userCategories = [
  {
    title: 'User',
    minimumFollowers: 5
  },
  {
    title: 'Friendly',
    minimumFollowers: 50,
  },
  {
    title: 'Famous',
    minimumFollowers: 500,
  },
  {
    title: 'Super Star',
    minimumFollowers: 1000,
  },
];

export default async function getUserGithubCategoryByUsername(req, res) {
  const githubUsername = String(req.query.username);

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    });
  }

  const githubUserResponse = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (githubUserResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    });
  }

  const githubUserData = await githubUserResponse.json();

  const sortedUserCategoriesByMinimumFollowers = userCategories.sort((category1, category2) => category2.minimumFollowers - category1.minimumFollowers);

  const userCategory = sortedUserCategoriesByMinimumFollowers.find(possibleCategory => githubUserData.minimumFollowers > possibleCategory.minimumFollowers);

  const userGithubAndCategory = {
    github: githubUsername,
    category: userCategory.title
  };

  return userGithubAndCategory;
}

getUserGithubCategoryByUsername({
  query: {
    username: 'josepholiveira'
  }
}, {});