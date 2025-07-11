import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { fetchPosts } from '../api/api';

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">API Data</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <Card key={post.id}>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ApiData;