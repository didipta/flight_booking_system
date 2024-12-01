"use client";
import Api from "@/service/axios/baseInterceptors";
import { cityOptions } from "@/utils/list/Citylist";
import React, { useEffect, useState } from "react";

const List = () => {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    getbookings(page);
  }, [page]);
  const handlePage = (p) => {
    setPage(p);
  };

  const getbookings = (page) => {
    Api.get(`/booking?page=${page}`)
      .then((res) => {
        setbookings(res.data.data.data);
        setTotalPage(res.data.data.meta.total);
        setLimit(res.data.data.meta.limit);
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">Booking List</h2>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
      <div className="overflow-x-auto">
          <table className="table">
          <thead>
            <tr>
              <th>Flight Id</th>
              <th>Destination</th>
              <th>User Email</th>
              <th>Number Of Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date & time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.flightId.flightNumber}</td>
                <td>
                  {
                    cityOptions.find(
                      (city) => city.value === booking.flightId.destination
                    )?.label
                  }
                  -
                  {
                    cityOptions.find(
                      (city) => city.value === booking.flightId.origin
                    )?.label
                  }
                </td>
                <td>{booking.userId.email}</td>
                <td>{booking.numberOfSeats}</td>
                <td>{booking?.totalPrice}</td>
                <td>{booking.bookingStatus}</td>
                <td>{new Date(booking.createdAt).toLocaleString()}</td>

                <td>
                  <button className="btn btn-sm btn-info text-white mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

export default List;
