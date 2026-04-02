"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Caretakers = () => {
  const [ctakers, setCtakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api") 
      .then(res => res.json())
      .then(data => setCtakers(data))
      .catch(err => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading caretakers...</p>;
  if (!ctakers.length) return <p className="text-center">No caretakers found.</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-primary text-4xl font-bold mb-10">
        Meet Our Caretakers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ctakers.slice(0, 4).map((c) => (
          <div key={c._id} className="card shadow-md border text-center p-4">
            <img
              src={c.image || "/icons/profile.png"}
              alt={c.name || "Caretaker"}
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />

            <h2 className="font-bold mt-2">{c.name || "Unnamed"}</h2>
            <p>{c.role || "Caretaker"}</p>

            {c.rating && <p>⭐ {Number(c.rating).toFixed(1)}</p>}

            <p className="text-xs text-gray-500">
              {c.availability || "Availability unknown"}
            </p>

            {/* <button className="btn btn-sm btn-primary mt-3">
              Book Now
            </button>
             <button className="btn btn-sm btn-primary mt-3">
              View Details
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caretakers;