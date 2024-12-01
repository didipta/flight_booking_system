import React from "react";
import FlightCard from "./FlightCard";
import { cityOptions } from "@/utils/list/Citylist";

const FlightList = ({ data, from, to, departure }) => {
  console.log(data);
  return (
    <div className="container  p-6 ">
      <div>
        <h1 className="text-xl font-bold text-center mb-6">
          Your Search Results
        </h1>
        <p className="text-sm font-semibold text-gray-500 text-center mb-6">
          {cityOptions.find((city) => city.value === from)?.label} to{" "}
          {cityOptions.find((city) => city.value === to)?.label} on {departure}
        </p>
      </div>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {data.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg font-semibold text-gray-500">
          No Flights Found
        </div>
      )}
    </div>
  );
};

export default FlightList;
