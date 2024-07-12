import { BentoDemo } from "@/components/Bento";
import { AnimatedShinyTextDemo } from "@/components/anime-text-shining";

import BlurFade from "@/components/magicui/blur-fade";

import IconCloud from "@/components/magicui/icon-cloud";
import SparklesText from "@/components/magicui/sparkles-text";
import { ProjectCard } from "@/components/project-card";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";



import DotPattern from "@/components/DotPattern";
import { FlipWords } from "@/components/animation/aceternity/FlipWord";

import { WavyBackground } from "@/components/animation/aceternity/Wavy-background";

import { AnimatedPinDemo } from "@/components/animation/aceternity/AnimatedPinDemo";
import DarkModeFlow from "@/components/DarkmodeFlow";



const BLUR_FADE_DELAY = 0.04;

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "go",
  "html5",
  "css3",
  "nuxtdotjs",
  "nextdotjs",
  "python",
  "nodedotjs",
  "mysql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "gitea",
  "figma",
];

const words = ["Frontend", "Backend", "Database", "API"];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="absolute inset-0 z-0">
        <DotPattern />
        <WavyBackground/>
       
      </div>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <section id="bentogrid">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="space-y-12 w-full ">
                      <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                          <div className="space-y-2">
                            <div className="inline-block rounded-lg text-background px-3 py-1 text-xl">
                              <AnimatedShinyTextDemo />
                            </div>
                            <div className=" flex justify-center items-center px-4">
                            <div className="text-4xl mx-auto font-semibold dark:text-neutral-400">
                             Développeurs FullStacks spécialisés
                              <FlipWords words={words} /> <br />
                            </div>
                          </div>
                          </div>
                          <BentoDemo />
                         
                        </div>
                      </BlurFade>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pt-4">
                      Voici nos derniers projets
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-4">
                      I&apos;ve worked on a variety of projects, from simple
                      websites to complex web applications. Here are a few of my
                      favorites.
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">

                      {DATA.projects.map((project, id) => (
                        <BlurFade
                          key={project.title}
                          delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                          <ProjectCard
                            href={project.href}
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                          />
                        </BlurFade>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3 py-8">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <SparklesText text={"Skills"} className="text-3xl"></SparklesText>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>

                </BlurFade>
              ))}
              <div className="item-center flex"> 
              <IconCloud iconSlugs={slugs}></IconCloud>
              </div>
            
            </div>
          </div>
        </section>
      </section>
    
        {/*
          <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/*
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
    */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <AnimatedPinDemo/>
              
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
