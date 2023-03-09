const apiUrl = 'https://api.github.com/users';

export const fetchUser = async userId => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Failed to fetch user!`);
  } catch (error) {
    alert(error.message);
  }
};
