import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image
            alt="care"
            src="/assets/cross.png"
            width={30}
            height={30}
          />
          <h2 className="text-xl font-bold text-primary">Care</h2>
        </div>
      </Link>
    </div>
  );
};

export default Logo;