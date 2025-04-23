import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function ThemeMode() {
  const [mode, setMode] = useState(() => {
    const themeStore = localStorage.getItem("themeMode");
    return themeStore
      ? themeStore === "true"
      : window.matchMedia("(prefers-color-scheme: dark)")?.matches;
  });

  useEffect(() => {
    const element = document.documentElement;

    if (mode) {
      element?.classList.add("dark");
      localStorage.setItem("themeMode", "true");
    } else {
      element?.classList.remove("dark");
      localStorage.setItem("themeMode", "false");
    }
  }, [mode]);

  function handleMode() {
    setMode((mode) => !mode);
  }

  return (
    <button
      className="absolute bottom-8 right-7 mt-auto size-[26px] text-violet-700 transition-all duration-500 hover:size-[26px]"
      onClick={handleMode}
    >
      {mode ? <MoonIconSolid /> : <MoonIconOutline />}
    </button>
  );
}

export default ThemeMode;
