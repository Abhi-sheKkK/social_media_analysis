import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaThumbsUp, FaComment, FaShareAlt, FaEye } from "react-icons/fa";

function DataSummary({ data }) {
  const totalPosts = data.length;

  // Calculate the sums
  const totalViews = data.reduce((acc, post) => acc + post.views, 0);
  const totalLikes = data.reduce((acc, post) => acc + post.likes, 0);
  const totalComments = data.reduce((acc, post) => acc + post.comments, 0);
  const totalShares = data.reduce((acc, post) => acc + post.shares, 0);
  const averageEngagementRate = totalPosts
    ? (
        data.reduce((acc, post) => acc + post.engagementrate, 0) /
        totalPosts
      ).toFixed(2)
    : 0;

  // Find Top Post Type
  const postTypeCount = totalPosts
    ? data.reduce((acc, post) => {
        acc[post.posttype] = (acc[post.posttype] || 0) + 1;
        return acc;
      }, {})
    : {};
  const topPostType = totalPosts
    ? Object.keys(postTypeCount).reduce((a, b) =>
        postTypeCount[a] > postTypeCount[b] ? a : b
      )
    : "N/A";

  // Animation for numbers
  const animatedNumber = (startValue) =>
    useSpring({
      from: { value: 0 },
      to: { value: startValue },
      config: { tension: 200, friction: 20 },
    });

  return (
    <section className=" p-6 rounded-lg mb-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-purple1 my-10 text-center">Dataset Overview</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-all flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800">Total Posts</h3>
          <animated.p className="text-blue-600 text-4xl font-bold">
            {useSpring({
              from: { value: 0 },
              to: { value: totalPosts },
            }).value.to((n) => n.toFixed(0))}
          </animated.p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-110 transition-all flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800">Avg Engagement Rate</h3>
          <animated.p className="text-green-600 text-4xl font-bold">
            {averageEngagementRate}%
          </animated.p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-110 transition-all flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800">Top Post Type</h3>
          <p className="text-purple-600 text-3xl font-bold">{topPostType}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-110 transition-all flex flex-col items-center">
          <FaEye className="text-blue-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-gray-800">Total Views</h3>
          <animated.p className="text-blue-600 text-3xl font-bold">
            {animatedNumber(totalViews).value.to((n) => n.toFixed(0))}
          </animated.p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-110 transition-all flex flex-col items-center">
          <FaThumbsUp className="text-pink-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-gray-800">Total Likes</h3>
          <animated.p className="text-pink-600 text-3xl font-bold">
            {animatedNumber(totalLikes).value.to((n) => n.toFixed(0))}
          </animated.p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-110 transition-all flex flex-col items-center">
          <FaShareAlt className="text-green-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-gray-800">Total Shares</h3>
          <animated.p className="text-green-600 text-3xl font-bold">
            {animatedNumber(totalShares).value.to((n) => n.toFixed(0))}
          </animated.p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:scale-110 transition-all flex flex-col items-center">
          <FaComment className="text-yellow-500 text-3xl mb-2" />
          <h3 className="text-lg font-semibold text-gray-800">Total Comments</h3>
          <animated.p className="text-yellow-600 text-3xl font-bold">
            {animatedNumber(totalComments).value.to((n) => n.toFixed(0))}
          </animated.p>
        </div>
      </div>
    </section>
  );
}

export default DataSummary;
