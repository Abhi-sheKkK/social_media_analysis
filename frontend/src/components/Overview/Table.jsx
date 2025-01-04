import React from "react";

const OverviewTable = ({ data }) => {
  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden border border-purple-200">
          <thead className="bg-purple1 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Post ID</th>
              <th className="px-4 py-2 text-left">Post Type</th>
              <th className="px-4 py-2 text-right">Views</th>
              <th className="px-4 py-2 text-right">Likes</th>
              <th className="px-4 py-2 text-right">Comments</th>
              <th className="px-4 py-2 text-right">Shares</th>
              <th className="px-4 py-2 text-right">Engagement Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, index) => (
              <tr
                key={post.postid}
                className={`${
                  index % 2 === 0 ? "bg-purplelight" : "bg-white"
                } hover:bg-purplesemi`}
              >
                <td className="px-4 py-2">{post.postid}</td>
                <td className="px-4 py-2">{post.posttype}</td>
                <td className="px-4 py-2 text-right">{post.views.toLocaleString()}</td>
                <td className="px-4 py-2 text-right">{post.likes.toLocaleString()}</td>
                <td className="px-4 py-2 text-right">{post.comments.toLocaleString()}</td>
                <td className="px-4 py-2 text-right">{post.shares.toLocaleString()}</td>
                <td className="px-4 py-2 text-right">{post.engagementrate.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewTable;
