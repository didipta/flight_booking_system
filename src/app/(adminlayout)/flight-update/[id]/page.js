import Create from "@/components/admin/flight/Create";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <Create id={params.id} />
    </div>
  );
};

export default page;
