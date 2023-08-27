"use client";
import { Switch } from "@nextui-org/react";
import React from "react";
import { SunIcon } from "./UI/icons/SunIcon";
import { MoonIcon } from "./UI/icons/MoonIcon";
import { useThemeSwitch } from "@/hooks/useThemeSwitch";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useThemeSwitch();
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      thumbIcon={({ isSelected, className }) => {
        setIsDark(isSelected);
        return isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        );
      }}
    />
  );
};

export default ThemeSwitcher;
