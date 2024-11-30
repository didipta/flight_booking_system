"use client";
import Api from "@/service/axios/baseInterceptors";
import { cityOptions } from "@/utils/list/Citylist";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const List = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    getFlights(page);
  }, [page]);
  const handlePage = (p) => {
    setPage(p);
  };

  const getFlights = (page) => {
    Api.get(`/flight?page=${page}`)
      .then((res) => {
        setFlights(res.data.data.data);
        setTotalPage(res.data.meta.total);
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    Api.delete(`/flight/${id}`)
      .then((res) => {
        toast.success("Flight deleted successfully");
        getFlights(page);
      })
      .catch((err) => toast.error("Something went wrong"));
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Flight List</h2>
        </div>
        <Link
          href={"/flight-create"}
          className="text-white border-0 bg-yellow-500 hover:bg-yellow-600 btn"
        >
          Create Flight
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>AvailableSeats</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Origin</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              flights?.map((flight, index) => (
                <tr key={index}>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="w-10 h-10">
                        <Image
                          src="/assets/images/flight.jpg"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-full object-cover object-right rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className=" font-bold">{flight.flightNumber}</div>
                        <div className="text-xs text-gray-500">
                          {flight.airline}
                        </div>
                      </div>
                    </div>
                  </td>
                    <td>{flight.availableSeats}</td>
                  <td>
                    {cityOptions.map(
                      (city) => city.value === flight.origin && city.label
                    )}
                  </td>
                  <td>
                    {cityOptions.map(
                      (city) => city.value === flight.destination && city.label
                    )}
                  </td>
                  <td>{flight.price}</td>
                  <td>{new Date(flight.date).toLocaleDateString()}</td>
                  <td>{flight.time}</td>
                  <td>
                    <Link href={`/flight-update/${flight.id}`}>
                      <button className="btn bg-info btn-sm btn-ghost mr-2 text-white">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn bg-error text-white btn-sm btn-ghost"
                      onClick={() => handleDelete(flight.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-end">
          <ul className="flex items-center p-4">
            <li>
              <button
                onClick={() => handlePage(page - 1)}
                className="btn btn-ghost"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPage }, (v, k) => k + 1).map((p) => (
              <li key={p}>
                <button
                  onClick={() => handlePage(p)}
                  className={`btn btn-sm ${
                    p === page ? " btn-warning text-white" : ""
                  }`}
                >
                  {p}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePage(page + 1)}
                className="btn btn-ghost"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
