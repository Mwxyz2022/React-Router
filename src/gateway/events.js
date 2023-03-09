const apiUrl = 'https://api.github.com/users';

export const fetchUser = async userId => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error(`Failed to fetch user!`);
  }
};
