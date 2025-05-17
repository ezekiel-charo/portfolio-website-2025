"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

export function DarkModeToggleButton() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={toggleDarkMode}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-800 dark:text-gray-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m8.66-11.66l-.707.707M4.34 4.34l-.707.707m16.97 8.66h1M3 12h1m16.97 4.34l-.707-.707M4.34 19.66l-.707-.707M12 3a9 9 0 100 18 9 9 0 000-18z"
        />
      </svg>
    </button>
  );
}
