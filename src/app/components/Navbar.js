"use client";
import { useState } from "react";

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function Navbar() {
  const [donation, useDonation] = useState(25000);

  const donationPercentage = (donation / 1000000) * 100;
  let barColor;

  if (donationPercentage < 30) {
    barColor = 'bg-red-600';
  } else if (donationPercentage < 60) {
    barColor = 'bg-orange-600';
  } else if (donationPercentage < 90) {
    barColor = 'bg-green-600';
  } else {
    // Default color when donationPercentage is 80% or more
    barColor = 'bg-green-600';
  }

  return (
    <nav className="flex-col space-y-4 justify-around items-center p-4 font-mono">
      <h2 className="text-white font-semibold text-xl md:text-2xl md:font-bold text-center">
        £{formatNumber(donation)} / 1,000,000 Raised
      </h2>

      <div className="w-full md:w-3/4 container mx-auto bg-gray-200 rounded-full h-2.5 md:h-3.5">
        <div
          className={`h-2.5 md:h-3.5 rounded-full transition-all ${barColor}`}
          style={{ width: `${donationPercentage}%` }}
          id="bar"
        ></div>
      </div>
    </nav>
  );
}
