const baseUrl = 'http://localhost:3100'

/**
 * Use this method to make API calls to the quiz backend.
 * This method uses the Fetch API and returns a promise that resolves with the JSON response.
 * Example usage:
    apiCall('quiz', 'POST', {}).then(handleResponse)
 */
export const apiCall = (path, method, body) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return fetch(`${baseUrl}/${path}`, options)
    .then(response => response.json())
    .catch(error => {
      console.error('error', error)
    })
}