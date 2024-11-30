"use client";
import { cityOptions } from "@/utils/list/Citylist";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const Create = () => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Flight Details
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid md:grid-cols-2 grid-cols-1 gap-4"
        >
          {/* Flight Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Flight Number
            </label>
            <input
              type="text"
              {...register("flightNumber", {
                required: "Flight number is required",
              })}
              placeholder="Enter flight number"
              className={`w-full p-2 border rounded-md ${
                errors.flightNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.flightNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.flightNumber.message}
              </p>
            )}
          </div>

          {/* Airline */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Airline
            </label>
            <input
              type="text"
              {...register("airline", {
                required: "Airline name is required",
              })}
              placeholder="Enter airline name"
              className={`w-full p-2 border rounded-md ${
                errors.airline ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.airline && (
              <p className="text-red-500 text-sm mt-1">
                {errors.airline.message}
              </p>
            )}
          </div>

          {/* Origin */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Origin
            </label>
            <Controller
              name="origin"
              control={control}
              rules={{ required: "Origin is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={cityOptions}
                  placeholder="Select Origin"
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: errors.origin
                        ? "1px solid red"
                        : "1px solid #ddd",
                    }),
                  }}
                  onChange={(selected) => setValue("origin", selected.value)}
                />
              )}
            />
            {errors.origin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.origin.message}
              </p>
            )}
          </div>

          {/* Destination */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Destination
            </label>
            <Controller
              name="destination"
              control={control}
              rules={{ required: "Destination is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={cityOptions}
                  placeholder="Select Destination"
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: errors.destination
                        ? "1px solid red"
                        : "1px solid #ddd",
                    }),
                  }}
                  onChange={(selected) =>
                    setValue("destination", selected.value)
                  }
                />
              )}
            />
            {errors.destination && (
              <p className="text-red-500 text-sm mt-1">
                {errors.destination.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className={`w-full p-2 border rounded-md ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Time
            </label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className={`w-full p-2 border rounded-md ${
                errors.time ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
              })}
              placeholder="Enter price"
              className={`w-full p-2 border rounded-md ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Available Seats */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Available Seats
            </label>
            <input
              type="number"
              {...register("availableSeats", {
                required: "Available seats are required",
                min: { value: 1, message: "At least 1 seat is required" },
              })}
              placeholder="Enter available seats"
              className={`w-full p-2 border rounded-md ${
                errors.availableSeats ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.availableSeats && (
              <p className="text-red-500 text-sm mt-1">
                {errors.availableSeats.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-fit px-5 bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600 font-semibold"
            >
              Submit
            </button>
            <button className="w-fit px-5 bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 font-semibold ml-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
