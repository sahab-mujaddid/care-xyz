import { myFont } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center ">
      {/* Left Side */}
      <div className="flex-1 space-y-5">
        <h2 className={`text-5xl font-bold text-primary`}>
  Trusted Care <span className="text-primary">For Your Loved One</span>
</h2>

        <p className="">
         Find Relaible Caretaker for children,seniors and speacial needs-anytime,anywhere.
        </p>
        <Link href={'/service'} className="btn btn-primary btn-outline" >Explore Services</Link>
       
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center">
        <Image
          alt="family"
          src="/assets/hero.png"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;