

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { AvatarCirclesDemo } from "./avatar-circles";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border  bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
       
         <div className="text-xl inline-flex items-center justify-center px-6 py-1.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
          <span className="pr-2">✨ PA Code</span>
          <AvatarCirclesDemo />
        </div>
       
      
      </div>
    </div>
  );
}

