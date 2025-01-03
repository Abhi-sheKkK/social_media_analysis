import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostCards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    axios.get('dataset.json').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <section className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.postid} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{post.posttype}</h3>
          <p>Views: {post.views}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          <p>Shares: {post.shares}</p>
          <p className="text-blue-500 font-semibold">
            Engagement Rate: {post.engagementrate}%
          </p>
        </div>
      ))}
    </section>
  );
}

export default PostCards;
