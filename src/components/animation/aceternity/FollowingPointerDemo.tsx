import Image from "next/image";
import { FollowerPointerCard } from "@/components/animation/aceternity/Following-pointer";
import { GridPatternDashed } from "@/components/grid-pattern";
import SparklesText from "@/components/magicui/sparkles-text";

export function FollowingPointerDemo() {
  return (
    <div className="top-12 origin-top transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] group-hover:scale-105">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden rounded-2xl transition duration-200 group">
          <div className="w-full aspect-w-16 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
            />
          </div>
          <div className="p-4 relative">
            <div className="inset-0 z-0">
              <GridPatternDashed />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <SparklesText className="text-xl" text="Hover me" />
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Rachel",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="40"
      width="40"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
