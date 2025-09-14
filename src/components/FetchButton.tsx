'use client';  // Client Componentを指定

import axios from 'axios';

interface FetchButtonProps {
  // 必要に応じてpropsを追加
}

export default function FetchButton() {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      alert('Data fetched successfully!');  // または適切なUI更新
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error occurred while fetching data.');
    }
  };

  return (
    <button onClick={fetchData}>
      Fetch Data
    </button>
  );
}