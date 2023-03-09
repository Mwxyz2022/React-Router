const apiUrl = 'https://api.github.com/users';

export const fetchUser = async userId => {
  const response = await fetch(`${apiUrl}/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user!`);
  }
  return await response.json();
};
