"use client";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  const isLogin = !!session;

  const serviceId = parseInt(params.service_id, 10);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <p className="text-center mt-10 text-red-500">Service not found.</p>;
  }

  const add2book = () => {
    if (isLogin) {
      router.push(`/booking/${service.id}`);
    } else {
      router.push(`/login?callbackUrl=/booking/${service.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-primary mb-6 text-center">
          {service.title}
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-8">
          <img
            src={service.image}
            alt={service.title}
            width={500}
            height={400}
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center md:text-left">
          {service.details}
        </p>

        <div className="flex justify-center">
          <button
            className="btn btn-primary btn-wide shadow-md hover:shadow-xl transition-transform hover:scale-105"
            onClick={add2book}
          >
            {isLogin ? "Book Service" : "Login to Book"}
          </button>
        </div>
      </div>
    </div>
  );
}