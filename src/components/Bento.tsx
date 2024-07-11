// src/components/BentoDemo.js
import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon, DatabaseZap, LineChart, SquareDashedMousePointer } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";


import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";


import { AnimatedBeamDemo } from "./bi-directional";

import ChartsDemo from "./chartsDemo";
import ChartsDemo2 from "./chartsDemo2";

import { FollowingPointerDemo } from "./animation/aceternity/FollowingPointerDemo";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}



const features = [
  {
    Icon: SquareDashedMousePointer,
    name: "Créativité",
    description: "We automatically save your files as you type.",
    
    className: "col-span-3 lg:col-span-1",
    background: (
      <FollowingPointerDemo/>
    ),
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>screenshot.png</CommandItem>
            <CommandItem>bitcoin.pdf</CommandItem>
            <CommandItem>finances.xlsx</CommandItem>
            <CommandItem>logo.svg</CommandItem>
            <CommandItem>keys.gpg</CommandItem>
            <CommandItem>seed.txt</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: DatabaseZap,
    name: "Backend",
    description: "Supports 100+ integrations and counting.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamDemo/>
    ),  
  },

  {
    Icon: CalendarIcon,
    name: "Pierre Skills",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-3",
    href: "/",
    cta: "Learn more",
    background: (
      <ChartsDemo  />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Adrien Skills",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-3",
    href: "/",
    cta: "Learn more",
    background: (
      <ChartsDemo2 />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
