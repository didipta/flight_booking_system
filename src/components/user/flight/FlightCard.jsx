"use client";
import Api from "@/service/axios/baseInterceptors";
import { cityOptions } from "@/utils/list/Citylist";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const FlightCard = ({ flight }) => {
  const [quaintity, setQuaintity] = useState(1);
  const handleBook = () => {
    const confirmed = Swal.fire({
      title: "Are you sure?",
      text: "Do you want to book this flight?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
    if (confirmed) {
      Api.post("/booking", {
        flightId: flight.id,
        numberOfSeats: quaintity,
      })
        .then((res) => {
          toast.success("Flight booked successfully");
        })
        .catch((err) =>
          toast.error(err?.response?.data?.message || "Something went wrong")
        );
    }
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/assets/images/flight.jpg"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg lg:w-96 max-2xl:"
          alt="movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title lg:text-lg md:text-base text-sm text-yellow-700">
          {cityOptions.find((city) => city.value === flight?.origin)?.label} to{" "}
          {
            cityOptions.find((city) => city.value === flight?.destination)
              ?.label
          }
        </h2>
        <div className=" w-full flex md:flex-row flex-col lg:gap-5 md:gap-4 gap-2">
          <div className="md:text-sm text-xs text-gray-500">
            <span className=" font-semibold">Flight Number:</span>{" "}
            {flight?.flightNumber}
          </div>
          <div className="md:text-sm text-xs text-gray-500 ">
            <span className=" font-semibold">Flight Name:</span>{" "}
            {flight?.airline}
          </div>
        </div>
        <div className=" w-full flex md:flex-row flex-col lg:gap-5 md:gap-4 gap-2">
          <div className="md:text-sm text-xs text-gray-500">
            <span className=" font-semibold">Date:</span>{" "}
            {new Date(flight?.date).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="md:text-sm text-xs text-gray-500 ">
            <span className=" font-semibold">Time:</span> {flight?.time}
          </div>
        </div>
        <div className="card-actions justify-end">
          <div className="flex gap-2">
            <div
              className="btn btn-sm btn-ghost bg-info text-white"
              onClick={() => setQuaintity(quaintity + 1)}
            >
              +
            </div>
            <p className="text-gray-500">{quaintity}</p>
            <div
              className="btn btn-sm btn-ghost bg-error text-white"
              onClick={() => {
                if (quaintity > 1) {
                  setQuaintity(quaintity - 1);
                }
              }}
            >
              -
            </div>
          </div>
          <div
            className="btn btn-sm btn-ghost bg-success text-white"
            onClick={handleBook}
            disabled={
              flight?.availableSeats < quaintity || flight?.availableSeats === 0
            }
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
