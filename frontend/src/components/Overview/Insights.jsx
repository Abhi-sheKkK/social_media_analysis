import React from 'react';

function InsightsCarousel() {
  const insights = [
    "Carousel posts have 20% higher engagement than static posts.",
    "Reels drive 2x more comments compared to other formats.",
    "Static images maintain a consistent engagement rate.",
  ];

  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-4">Insights</h2>
      <div className="carousel">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="carousel-item p-4 bg-blue-100 rounded shadow mb-4"
          >
            <p className="text-lg text-gray-800">{insight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InsightsCarousel;