import React from "react";

const page = async ({ searchParams }) => {
  const { from, to, departure, return: returnDate } = await searchParams || {};
  let data = await fetch(
    `${process.env.BASE_URL}/flight/Search?origin=${from}&destination=${to}&date=${departure}`
  ).then((res) => res.json());
  console.log(data);
  return <div></div>;
};

export default page;
