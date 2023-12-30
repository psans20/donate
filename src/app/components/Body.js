"use client";
import { useState } from "react";

export default function Body(){
  const [formattedNumber, setFormattedNumber] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Remove commas from the input string
    const numberWithoutCommas = inputValue.replace(/,/g, "");

    // Parse the string to a number and format it using toLocaleString
    const formattedValue = Number(numberWithoutCommas).toLocaleString();

    // Update the state with the formatted value
    setFormattedNumber(formattedValue);
  };


    return(
        <div className="flex flex-col h-screen items-center justify-evenly p-8">
            <h2 className="text-center text-white md:text-lg">Help me afford my first Lamborghini</h2>
        <img src="https://cdn.pixabay.com/animation/2023/03/23/17/00/17-00-52-997_512.gif" className="w-48 md:w-72"/>


<div className="flex w-full md:container md:mx-auto md:w-96 items-center rounded-lg bg-gray-100/30 text-white focus:outline-none">
  <p className="rounded-l-lg bg-gray-300 px-4 py-3 text-lg text-black">
   GBP
  </p>
  <input
    type="text"
    className="w-full rounded-lg bg-transparent px-4 py-3 text-white placeholder-gray-50 transition duration-200 focus:outline-none"
    placeholder="Enter Amount"
  id="numberInput"
        value={formattedNumber}
        onChange={handleInputChange}
  />

</div>

<button className="w-full md:container md:mx-auto md:w-96 py-3 text-xl font-semibold text-gray-200">
  <span>Donate</span>
</button>

        </div>
    )
}