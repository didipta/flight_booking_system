import React from "react";

const OverviewSection = () => {
  return (
    <div className=" container space-y-10">
      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          System Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our system provides an intuitive platform to manage flights, hotels,
          visas, and more. With a user-friendly interface, advanced search
          options, and seamless integration, we aim to enhance your travel
          planning and management experience.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-red-500 text-4xl mb-4">
            <i className="fas fa-plane"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Flight Management</h3>
          <p className="text-gray-600">
            Search, book, and manage flights effortlessly with our comprehensive
            system.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-hotel"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Hotel Booking</h3>
          <p className="text-gray-600">
            Find and reserve accommodations that fit your budget and
            preferences.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-green-500 text-4xl mb-4">
            <i className="fas fa-passport"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Visa Assistance</h3>
          <p className="text-gray-600">
            Simplify your travel documentation with our visa services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OverviewSection;
