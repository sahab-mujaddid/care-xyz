"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

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

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();

  const serviceId = parseInt(params.service_id, 10);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <p className="text-center mt-10">Service not found.</p>;
  }

  // Replace with actual login state (e.g. from NextAuth session)
  const isLogin = false; 
  const path = usePathname();

  const add2book = () => {
    if (isLogin) {
      router.push(`/booking/${service.id}`); // ✅ dynamic booking route
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-primary mb-6">{service.title}</h2>
      <img
        src={service.image}
        alt={service.title}
        width={500}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{service.details}</p>

      <button className="btn btn-primary" onClick={add2book}>
        Book Service
      </button>
    </div>
  );
}