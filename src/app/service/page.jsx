"use client";
import React from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Babysitting Service",
    description: "Quality care for our Loved Ones",
    image: "/assets/baby.png",
  },
  {
    id: 2,
    title: "Elderly Care Services",
    description: "Quality care for our Loved Ones",
    image: "/assets/elderly.png",
  },
  {
    id: 3,
    title: "Sick Care Service",
    description: "Quality care for our Loved Ones",
    image: "/assets/special-care.png",
  },
];

export default function ServiceListPage() {
  const router = useRouter();

  return (
    <div className="space-y-20 max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
        Our Care Services
      </h1>

      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
         
          <div className="flex-1 flex justify-center">
            <img
              alt={service.title}
              src={service.image}
              width={500}
              height={400}
              className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

        
          <div className="flex-1 space-y-5 text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
            <p className="text-gray-600 text-lg">{service.description}</p>
            <button
              className="btn btn-primary btn-wide shadow-md hover:shadow-xl transition"
              onClick={() => router.push(`/service/${service.id}`)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}