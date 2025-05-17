import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function swithOnDarkMode() {
    document.body.classList.toggle("dark", true);
    localStorage.setItem("theme", "dark");
  }

  function swithOffDarkMode() {
    document.body.classList.toggle("dark", false);
    localStorage.removeItem("theme");
  }

  function toggleDarkMode() {
    const _isDarkMode = !isDarkMode;
    setIsDarkMode(_isDarkMode);
    if (_isDarkMode) {
      swithOnDarkMode();
    } else {
      swithOffDarkMode();
    }
  }

  useEffect(() => {
    const _isDarkMode = localStorage.getItem("theme") === "dark";

    if (_isDarkMode) {
      swithOnDarkMode();
    } else {
      swithOffDarkMode();
    }

    setIsDarkMode(_isDarkMode);
  }, []);

  return { isDarkMode, toggleDarkMode };
}
