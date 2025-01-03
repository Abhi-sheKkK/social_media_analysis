import React from 'react';
import DataSummary from './Datasummary';
import InsightsCarousel from './Insights';
import PostCards from './Postcard';

const Overview = () => {
  return (
      <div className="">
        <DataSummary />
        <InsightsCarousel />
        <PostCards />
      </div>
  );
};

export default Overview;
