import React, { useEffect, useState } from "react";
import DataSummary from "./Datasummary";
import OverviewTable from "./Table"; 

const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/dataset.json")
      .then((response) => { 
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
  }, []);

  return (
    <div className="">
      <DataSummary data={data}/>
      <OverviewTable data={data} /> 
    </div>
  );
};

export default Overview;
