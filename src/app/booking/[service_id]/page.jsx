"use client";
import React, { useState } from "react";
import serviceCenters from "@/data/serviceCenters.json";
const services = [
  {
    id: 1,
    title: "Babysitting Service",
    description: "Quality care for our Loved Ones",
    image: "/assets/baby.png",
    details:
      "Our babysitting service provides experienced sitters who ensure safety, fun, and care for your children.",
  },
  {
    id: 2,
    title: "Elderly Care Services",
    description: "Quality care for our Loved Ones",
    image: "/assets/elderly.png",
    details:
      "Compassionate elderly care with trained caretakers who assist with daily activities and companionship.",
  },
  {
    id: 3,
    title: "Sick Care Service",
    description: "Quality care for our Loved Ones",
    image: "/assets/special-care.png",
    details:
      "Personalized sick care at home, ensuring proper rest, medication support, and attentive monitoring.",
  },
];
const BookingPage = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const divisions = [...new Set(serviceCenters.map(c => c.region))];

  const districts =
    division !== ""
      ? [...new Set(serviceCenters.filter(c => c.region === division).map(c => c.district))]
      : [];

  const cities =
    district !== ""
      ? [...new Set(serviceCenters.filter(c => c.district === district).map(c => c.city))]
      : [];

  const areas =
    city !== ""
      ? serviceCenters.find(c => c.city === city)?.covered_area || []
      : [];

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <form className="bg-base-100 shadow-lg rounded-lg p-6 w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold text-primary text-center">Book a Service</h2>

        {/* Duration */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Select Duration</legend>
          <input type="number" className="input input-bordered w-full" placeholder="Enter duration (days/hours)" />
        </fieldset>

        {/* Location */}
        <fieldset className="fieldset space-y-4">
          <legend className="fieldset-legend">Select Location</legend>

          {/* Division */}
          <select
            className="select select-bordered w-full"
            value={division}
            onChange={e => {setDivision(e.target.value); setDistrict(""); setCity(""); setArea("");}}
          >
            <option value="" disabled>Pick Division</option>
            {divisions.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>

          {/* District */}
          <select
            className="select select-bordered w-full"
            value={district}
            onChange={e => {setDistrict(e.target.value); setCity(""); setArea("");}}
            disabled={!division}
          >
            <option value="" disabled>Pick District</option>
            {districts.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>

          {/* City */}
          <select
            className="select select-bordered w-full"
            value={city}
            onChange={e => {setCity(e.target.value); setArea("");}}
            disabled={!district}
          >
            <option value="" disabled>Pick City</option>
            {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>

          {/* Area */}
          <select
            className="select select-bordered w-full"
            value={area}
            onChange={e => setArea(e.target.value)}
            disabled={!city}
          >
            <option value="" disabled>Pick Area</option>
            {areas.map((a, i) => <option key={i} value={a}>{a}</option>)}
          </select>

          {/* Address Input */}
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter specific address"
            disabled={!area}
          />
        </fieldset>

        {/* Cost */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Total Cost</legend>
          <p className="text-lg font-semibold text-primary">0 Taka</p>
        </fieldset>

        {/* Confirm */}
        <button type="button" className="btn btn-primary w-full">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;