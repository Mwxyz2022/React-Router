const apiUrl = 'https://api.github.com/users';

export const fetchUser = userId =>
  fetch(`${apiUrl}/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server Error!`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);

      alert(error.message);
    });
