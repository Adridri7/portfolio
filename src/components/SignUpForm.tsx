"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"


import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Prenez rendez-vous!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Remplissez le formulaire pour pouvoir nous contacter et nous reviendrons aussi vite que possible vers vous.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="lastname">Pierre Caboor</Label>
            <a href="https://www.malt.fr/profile/pierrecaboor?q=developpeur+fullstack+frontend&p=2&sourceComponent=search_block_freelancer_dashboard&searchid=66943ba1781c213a80677687" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 text-sm font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="button"
              >
                Profil Malt
                <BottomGradient />
              </button>
            </a>
          </LabelInputContainer>
     
          <LabelInputContainer>
            <Label htmlFor="firstname">Adrien Rocchetti</Label>
            <a href="https://www.malt.fr/profile/adrienrocchetti?q=Adrien+Rocchetti&sourceComponent=search_block_freelancer_dashboard&searchid=66942e3b4e9fc028a825738c" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 text-sm font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="button"
              >
                Profil Malt
                <BottomGradient />
              </button>
            </a>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 py-2">
          <Label htmlFor="email">pa.devcode@gmail.com</Label>
          
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 py-2">
          <Label htmlFor="password">+33 7 86 33 13 81</Label>
          ou
          <Label htmlFor="password">+33 7 67 73 85 95</Label>
          <br></br>
          
          <Input className="item-center flex mb-4" id="password" placeholder="Réponse moyenne en 20 mins" type="text" disabled/>
        </LabelInputContainer>
        


      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;