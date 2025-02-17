// src/components/BentoDemo.js
import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon, DatabaseZap, LineChart, SquareDashedMousePointer, FolderTree, Wallpaper, Database, GlobeLockIcon, FileText, Lock, Shield, FileLock, AlertTriangle, Key } from "lucide-react";

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
import { EvervaultCard } from "./animation/aceternity/EvervaultCard";
import ToolTipCard from "./TooltipDemo";
import { FileTreeDemo } from "./FileTreeDemo";
import { DataTextureLoader } from "three/src/Three.js";

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
    name: "Frontend",
    description: "UI personnalisable et unique",
    className: "col-span-3 lg:col-span-1",
    background: <FollowingPointerDemo />,
    href: "#", // Default value
    cta: "", // Default value
  },
  {
    Icon: GlobeLockIcon,
    name: "Securité",
    description: "Hashage, encryptage, backup, firewall...",
    href: "/",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Shield className="mr-2" />
              firewall_rules.config
            </CommandItem>
            <CommandItem>
              <Lock className="mr-2" />
              passwords_encrypted.txt
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2" />
              network_scan_report.pdf
            </CommandItem>
            <CommandItem>
              <FileLock className="mr-2" />
              security_policy.docx
            </CommandItem>
            <CommandItem>
              <AlertTriangle className="mr-2" />
              vulnerability_assessment.xlsx
            </CommandItem>
            <CommandItem>
              <Key className="mr-2" />
              backup_keys.gpg
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: DatabaseZap,
    name: "Backend",
    description: "Serveur, API et Architecture solide",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <AnimatedBeamDemo />,
  },
  {
    Icon: FolderTree,
    name: "Structure",
    description: "Nous optimisons et structurons le code",
    className: "col-span-3 lg:col-span-1",
    background: <FileTreeDemo />,
    href: "#", // Default value
    cta: "", // Default value
  },
  {
    Icon: Wallpaper,
    name: "Compétences de Pierre",
    description: "Compétences orientées FrontEnd.",
    className: "col-span-3 lg:col-span-3",
    href: "https://github.com/pcaboor",
    cta: "Profil Github",
    background: <ChartsDemo />,
  },
  {
    Icon: Database,
    name: "Compétences d'Adrien",
    description: "Compétences orientées BackEnd.",
    className: "col-span-3 lg:col-span-3",
    href: "https://github.com/Adridri7",
    cta: "Profil Github",
    background: <ChartsDemo2 />,
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
