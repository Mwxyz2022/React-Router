const apiUrl = 'https://api.github.com/users';

export const fetchUser = userId =>
  fetch(`${apiUrl}/${userId}`).then(response => {
    if (!response.ok) {
      throw new Error(`Internal Server Error.`);
    }
    return response.json();
  });
