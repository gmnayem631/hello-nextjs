"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password === "1234") {
      console.log(router);
      router.push("/dashboard");
    }
  };

  return (
    <div className="text-center space-y-5 mt-8 bg-linear-60 from-sky-200 to-sky-100 p-10 text-black">
      <h2 className="text-4xl font-bold">Welcome to Dev Story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-black duration-200 hover:border hover:border-sky-500"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
