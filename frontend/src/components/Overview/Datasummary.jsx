import React from 'react';

function DataSummary() {
  return (
    <section className="bg-gray-100 p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Dataset Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Posts</h3>
          <p className="text-blue-600 text-2xl font-bold">149</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Average Engagement Rate</h3>
          <p className="text-green-600 text-2xl font-bold">13.5%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Top Post Type</h3>
          <p className="text-purple-600 text-2xl font-bold">Reels</p>
        </div>
      </div>
    </section>
  );
}

export default DataSummary;