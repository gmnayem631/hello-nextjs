import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="my-10 grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2 ml-3">
        <Link href={"/"} className="text-lg font-semibold">
          Dev Story
        </Link>
        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="bg-gray-200 text-black px-2 py-4 rounded-lg text-lg"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="bg-gray-200 text-black px-2 py-4 rounded-lg text-lg"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="bg-gray-200 text-black px-2 py-4 rounded-lg text-lg"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
