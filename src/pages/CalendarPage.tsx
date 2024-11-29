import React, { useState } from "react";

export function CalendarPage() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    phone: "",
    appointmentType: "consultation",
    appointmentDate: "",
    appointmentTime: "",
    email: "",
    doctor: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="bg-white rounded-lg shadow-lg w-3/4 p-6">
        <h3 className="text-2xl font-semibold text-center mb-4">
          Book an Appointment
        </h3>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-gray-700">Full Name:</label>
              <input
                type="text"
                name="name"
                value={appointmentDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={appointmentDetails.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Email Address:</label>
            <input
              type="email"
              name="email"
              value={appointmentDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex space-x-4">
            {/* Appointment Type */}
            <div className="w-full">
              <label className="block text-gray-700">Appointment Type:</label>
              <select
                name="appointmentType"
                value={appointmentDetails.appointmentType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="consultation">Consultation</option>
                <option value="procedure">Procedure</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-gray-700">Preferred Doctor:</label>
              <select
                name="doctor"
                value={appointmentDetails.doctor}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Lee">Dr. Lee</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            {/* Appointment Date */}
            <div className="w-full">
              <label className="block text-gray-700">Appointment Date:</label>
              <input
                type="date"
                name="appointmentDate"
                value={appointmentDetails.appointmentDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-700">Appointment Time:</label>
              <input
                type="time"
                name="appointmentTime"
                value={appointmentDetails.appointmentTime}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Additional Notes:</label>
            <textarea
              name="notes"
              value={appointmentDetails.notes}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
