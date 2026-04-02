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
    <div className="space-y-16">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex justify-between items-center flex-col md:flex-row"
        >
          {/* Image Side */}
          <div className="flex-1 flex justify-center">
            <img
              alt={service.title}
              src={service.image}
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-5 mt-6 md:mt-0">
            <h2 className="text-5xl font-bold text-primary">{service.title}</h2>
            <p>{service.description}</p>
            <button
              className="btn btn-primary btn-outline"
              onClick={() => router.push(`/service/${service.id}`)}
            >
              Service details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}