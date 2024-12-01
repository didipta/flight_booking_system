import FlightList from "@/components/user/flight/FlightList";
import React from "react";

const page = async ({ searchParams }) => {
  const {
    from,
    to,
    departure,
    return: returnDate,
  } = (await searchParams) || {};
  let data = await fetch(
    `${process.env.BASE_URL}/flight/Search?origin=${from}&destination=${to}&date=${departure}`
  ).then((res) => res.json());
  return (
    <>
      <FlightList data={data?.data}
      from={from}
      to={to}
      departure={departure}
       />
    </>
  );
};

export default page;
