"use client";
import Api from "@/service/axios/baseInterceptors";
import { cityOptions } from "@/utils/list/Citylist";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const [bookinglist, setBookinglist] = useState([]);
  useEffect(() => {
    if (user) {
      Api.get("/booking/user/" + user.id)
        .then((res) => {
          setBookinglist(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);
  return (
    <div className=" container p-6">
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-2xl text-center">Profile</h1>
          <div className=" relative h-[60vh]">
            <div>
              <Image
                src="/assets/images/cover.jpg"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-60 object-cover rounded-md "
                alt=" "
              />

              <div className="flex flex-col justify-center gap-4 mt-4 w-full items-center max-w-4xl p-4 absolute top-20 left-1/2 -translate-x-1/2">
                <div>
                  <Image
                    src="/assets/images/user.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-full lg:w-60 w-40 bg-white"
                    alt=" "
                  />
                </div>
                <div className=" text-center">
                  <div>
                    <p className=" text-2xl font-bold text-yellow-800">
                      @{user.username}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-500">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl text-center font-semibold">Booking List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bookinglist.map((booking, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md p-4 space-y-2"
                >
                  <div className=" flex justify-between items-center">
                    <p className="text-base font-semibold">
                      {booking.flightId?.flightNumber}
                    </p>
                    <p className="text-sm font-semibold badge-success text-white px-2 rounded">
                      {booking.bookingStatus}
                    </p>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="text-sm font-semibold">
                      {booking.flightId?.airline}
                    </p>
                    <p className="text-sm text-white font-semibold bg-warning px-2 rounded">
                      Tk-{booking.totalPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-semibold">
                      {
                        cityOptions.find(
                          (city) => city.value === booking.flightId?.origin
                        )?.label
                      }{" "}
                      to{" "}
                      {
                        cityOptions.find(
                          (city) => city.value === booking.flightId?.destination
                        )?.label
                      }
                    </p>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="text-sm text-white px-2 rounded badge-info">
                      {new Date(booking.flightId?.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-900 badge-ghost px-2 rounded">
                      Seats : {booking.numberOfSeats}
                    </p>
                    <p className="text-sm text-white badge-neutral px-2 rounded">
                      {booking.flightId?.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
