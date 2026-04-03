"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";   
import serviceCenters from "@/data/serviceCenters.json";
import withAuth from "@/hoc/withAuth";

const services = [
  { id: 1, title: "Babysitting Service", description: "Quality care for our Loved Ones", image: "/assets/baby.png", details: "Our babysitting service provides experienced sitters who ensure safety, fun, and care for your children." },
  { id: 2, title: "Elderly Care Services", description: "Quality care for our Loved Ones", image: "/assets/elderly.png", details: "Compassionate elderly care with trained caretakers who assist with daily activities and companionship." },
  { id: 3, title: "Sick Care Service", description: "Quality care for our Loved Ones", image: "/assets/special-care.png", details: "Personalized sick care at home, ensuring proper rest, medication support, and attentive monitoring." },
];

const BookingPage = ({ user }) => {
  const params = useParams();
  const router = useRouter();
  const serviceId = parseInt(params.service_id, 10);
  const service = services.find(s => s.id === serviceId);

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [durationType, setDurationType] = useState("days");
  const [duration, setDuration] = useState("");

  const divisions = [...new Set(serviceCenters.map(c => c.region))];
  const districts = division ? [...new Set(serviceCenters.filter(c => c.region === division).map(c => c.district))] : [];
  const cities = district ? [...new Set(serviceCenters.filter(c => c.district === district).map(c => c.city))] : [];

  const costPerDay = 2000;
  const costPerHour = 100;
  const totalCost = durationType === "days"
    ? (parseInt(duration, 10) || 0) * costPerDay
    : (parseInt(duration, 10) || 0) * costPerHour;

  if (!service) return <p className="text-center mt-10">Service not found.</p>;

  const handleConfirmBooking = async () => {
    
    if (!duration || !division || !district || !city || !address) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill in all required fields before confirming your booking.",
        icon: "warning",
      });
      return;
    }

    const bookingData = {
      serviceId: service.id,
      serviceTitle: service.title,
      durationType,
      duration,
      division,
      district,
      city,
      address,
      totalCost,
      createdAt: new Date(),
      userEmail: user?.email || "",
      userName: user?.name || ""
    };

    try {
      const res = await fetch("/api/register/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Booking Confirmed!",
          text: `You have booked ${service.title} for ${duration} ${durationType}. Total cost: ${totalCost} Taka.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => router.push("/"));
      } else {
        Swal.fire({ title: "Error", text: data.message || "Could not save booking.", icon: "error" });
      }
    } catch (err) {
      Swal.fire({ title: "Error", text: "Something went wrong.", icon: "error" });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-base-200 via-base-300 to-base-200">
      <form className="bg-base-100 shadow-2xl rounded-2xl p-8 w-full max-w-2xl space-y-8 border border-base-300">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-primary">Book: {service.title}</h2>
          <p className="text-sm text-gray-500">{service.description}</p>
        </div>

        {/* Duration */}
        <fieldset className="fieldset space-y-4">
          <legend className="fieldset-legend font-semibold text-lg">Select Duration</legend>
          <select
            className="select select-bordered w-full focus:ring-2 focus:ring-primary"
            value={durationType}
            onChange={e => setDurationType(e.target.value)}
            required
          >
            <option value="days">Days</option>
            <option value="hours">Hours</option>
          </select>
          <input
            type="number"
            min="1"
            step="1"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            className="input input-bordered w-full focus:ring-2 focus:ring-primary"
            placeholder={`Enter duration in ${durationType}`}
            required
          />
        </fieldset>

        {/* Location */}
        <fieldset className="fieldset space-y-4">
          <legend className="fieldset-legend font-semibold text-lg">Select Location</legend>
          <select
            className="select select-bordered w-full focus:ring-2 focus:ring-primary"
            value={division}
            onChange={e => { setDivision(e.target.value); setDistrict(""); setCity(""); }}
            required
          >
            <option value="" disabled>Pick Division</option>
            {divisions.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>
          <select
            className="select select-bordered w-full focus:ring-2 focus:ring-primary"
            value={district}
            onChange={e => { setDistrict(e.target.value); setCity(""); }}
            disabled={!division}
            required
          >
            <option value="" disabled>Pick District</option>
            {districts.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>
          <select
            className="select select-bordered w-full focus:ring-2 focus:ring-primary"
            value={city}
            onChange={e => setCity(e.target.value)}
            disabled={!district}
            required
          >
            <option value="" disabled>Pick City</option>
            {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
          <input
            type="text"
            className="input input-bordered w-full focus:ring-2 focus:ring-primary"
            placeholder="Enter specific address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            disabled={!city}
            required
          />
        </fieldset>

        {/* Cost */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-semibold text-lg">Total Cost</legend>
          <p className="text-xl font-bold text-primary">{totalCost} Taka</p>
        </fieldset>

        {/* Confirm */}
        <button
          onClick={handleConfirmBooking}
          type="button"
          className="btn btn-primary w-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default withAuth(BookingPage);
