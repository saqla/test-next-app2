'use client';

import axios from 'axios';
import { useState } from 'react';

export default function FetchButton() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      setError(null);
      alert('Data fetched successfully!');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
      alert('Error occurred while fetching data.');
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}