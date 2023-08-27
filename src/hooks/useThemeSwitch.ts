import { Dispatch, SetStateAction, useState } from "react";

type Response = [boolean, Dispatch<SetStateAction<boolean>>];

export const useThemeSwitch = (): Response => {
  const [isDark, setIsDark] = useState(false);

  if (window === undefined) return [false, setIsDark];

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }

  return [isDark, setIsDark];
};
