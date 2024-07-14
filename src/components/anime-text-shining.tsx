"use client";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { AvatarCirclesDemo } from "./avatar-circles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedShinyTextDemo() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing or a loading state while we wait for the theme to be determined
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border bg-neutral-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <div
          className={cn(
            "text-xl inline-flex items-center justify-center px-6 py-1.5 transition ease-out hover:duration-300",
            {
              "text-black hover:text-neutral-600": currentTheme === "light",
              "text-white hover:dark:text-neutral-400": currentTheme === "dark",
            }
          )}
        >
          <span className="pr-2">✨ PA Code</span>
          <AvatarCirclesDemo />
        </div>
      </div>
    </div>
  );
}
