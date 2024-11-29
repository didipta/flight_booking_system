"use client";
import { cityOptions } from "@/utils/list/Citylist";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const SearchSection = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (typeof data === "object" && data !== null) {
      // Convert form data to query string
      const queryParams = new URLSearchParams(data).toString();

      // Navigate to the desired route with query parameters
      router.push(`/search-results?${queryParams}`);
    } else {
      console.error("Invalid data:", data);
    }
  };

  return (
    <div className="w-full h-svh relative overflow-hidden">
      <Image
        src="/assets/images/banner.png"
        alt="banner"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-svh object-cover object-top"
      />
      <div className="absolute top-0 bottom-5 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="container m-auto flex flex-col justify-center h-full">
          <h1 className="lg:text-4xl md:text-2xl text-xl text-white text-center">
            Welcome to Flight Booking
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#d4eaff7e] shadow-xl lg:p-6 p-2 rounded-lg mx-auto lg:mt-10 mt-4 w-full"
          >
            {/* Buttons for Type */}
            <div className="flex items-center space-x-4 mb-4">
              <button
                type="button"
                className="px-4 py-2 bg-yellow-100 text-yellow-500 rounded-full font-medium"
              >
                Flight
              </button>
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Hotel
              </button>
              <button
                type="button"
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Visa
              </button>
            </div>

            {/* Trip Type */}
            <div className="flex items-center space-x-6 lg:mb-6 mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="One Way"
                  className="md:radio-sm radio-xs radio radio-warning"
                  defaultChecked
                />
                <span className="text-gray-800 font-semibold md:text-base text-sm">
                  One Way
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Round Trip"
                  className="md:radio-sm radio-xs radio radio-warning"
                />
                <span className="text-gray-800 font-semibold md:text-base text-sm">
                  Round Trip
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Multi City"
                  className="md:radio-sm radio-xs radio radio-warning"
                />
                <span className="text-gray-800 font-semibold md:text-base text-sm">
                  Multi City
                </span>
              </label>
            </div>

            {/* Input Fields */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between md:gap-4 gap-2 mb-6">
              {/* From Field */}
              {/* From Field */}
              <div>
                <label className="block text-gray-900 mb-1 font-semibold">
                  From
                </label>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <Controller
                    name="from"
                    control={control}
                    rules={{ required: "From field is required" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={cityOptions}
                        placeholder="Select Departure City"
                        classNamePrefix="react-select"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            border: "none",
                            boxShadow: "none",
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            color: "#000",
                          }),
                        }}
                        // Properly update the value in `react-hook-form`
                        onChange={(selected) => {
                          field.onChange(selected.value); // Save the value in the form state
                        }}
                        value={cityOptions.find(
                          (option) => option.value === field.value
                        )} // Ensure selected value is displayed
                      />
                    )}
                  />
                </div>
                {errors.from && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.from.message}
                  </p>
                )}
              </div>

              {/* To Field */}
              <div>
                <label className="block text-gray-900 mb-1 font-semibold">
                  To
                </label>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <Controller
                    name="to"
                    control={control}
                    rules={{ required: "To field is required" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={cityOptions}
                        placeholder="Select Destination City"
                        classNamePrefix="react-select"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            border: "none",
                            boxShadow: "none",
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            color: "#000",
                          }),
                        }}
                        onChange={(selected) => {
                          field.onChange(selected.value);
                        }}
                        value={cityOptions.find(
                          (option) => option.value === field.value
                        )}
                      />
                    )}
                  />
                </div>
                {errors.to && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.to.message}
                  </p>
                )}
              </div>

              {/* Departure Field */}
              <div>
                <label className="block text-gray-900 mb-1 font-semibold">
                  Departure
                </label>
                <input
                  type="date"
                  {...register("departure", {
                    required: "Departure date is required",
                  })}
                  className={`outline-none xl:p-4 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${
                    errors.departure ? "border-red-500" : ""
                  }`}
                />
                {errors.departure && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.departure.message}
                  </p>
                )}
              </div>

              {/* Return Field */}
              <div>
                <label className="block text-gray-900 mb-1 font-semibold">
                  Return
                </label>
                <input
                  type="date"
                  {...register("return")}
                  className="outline-none xl:p-4 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>

            {/* Fare Type */}
            <div className="flex items-center space-x-4 mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Regular"
                  defaultChecked
                  className="md:radio-sm radio-xs radio radio-warning"
                />
                <span className="text-gray-800 font-semibold md:text-base text-sm">
                  Regular Fares
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Student"
                  className="md:radio-sm radio-xs radio radio-warning"
                />
                <span className="text-gray-800 font-semibold md:text-base text-sm">
                  Student Fares
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Seaman"
                  className="md:radio-sm radio-xs radio radio-warning"
                />
                <span className="text-gray-800 font-semibold md:text-base text-sm">
                  Seaman Fares
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <button
                type="submit"
                className="w-60 max-w-2xl bg-yellow-500 text-white py-3 rounded-lg shadow-md hover:bg-yellow-600 font-bold text-lg"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
