
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center md:text-left relative z-10">
          <h2
            className={`text-5xl md:text-6xl font-extrabold leading-tight `}
          >
            Trusted Care{" "}
            <span className="text-primary">For Your Loved One</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Find reliable caretakers for children, seniors, and special needs —
            anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href={"/service"}
              className="btn btn-primary btn-wide shadow-md hover:shadow-xl transition-transform hover:scale-105"
            >
              Explore Services
            </Link>
            {/* <Link
              href={"/contact"}
              className="btn btn-outline btn-primary btn-wide hover:scale-105 transition-transform"
            >
              Contact Us
            </Link> */}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center relative">
          {/* Decorative glow */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

          <Image
            alt="family"
            src="/assets/hero.png"
            width={500}
            height={400}
            className="rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;