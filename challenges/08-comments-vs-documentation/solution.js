async function registerUser(data) {
  const { email, name, avatar } = data;

  if (!avatar) {
    return { error: 'avatar is required' };
  }

  if (!name) {
    return { error: 'name is required' };
  }

  const doesUserExist = getUserByEmail(email);

  if (doesUserExist) {
    return { error: 'email already used' };
  }

  /**
   * This function performs the conversion of images to JPG in order to avoid compatibility errors.
   * More information here: https://github.com/rocketseat-education/example-repository/issues/1
   */
  const avatarInJPG = convertImageToJPG(avatar);

  const user = await createUser({ email, name, avatar: avatarInJPG });

  return { user };
}
