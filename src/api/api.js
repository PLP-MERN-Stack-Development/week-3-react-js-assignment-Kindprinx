const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching posts: ' + error.message);
  }
}