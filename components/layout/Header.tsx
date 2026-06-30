"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 h-[68px] bg-white shadow-2xs">
      <div className="flex items-center justify-between p-4">
        {/* Left Section */}
        <div className="flex items-center gap-3 md:gap-8">
          <h1 className="text-[24px] font-semibold text-gray-900">
            ticktock
          </h1>

          <p className="text-xs md:text-sm font-medium text-gray-900">
            Timesheets
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {session?.user?.name ?? "User"}
            <FiChevronDown
              className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-32 rounded-md border border-gray-200 bg-white shadow-lg">
              <button
                onClick={() => {
                  signOut();
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}