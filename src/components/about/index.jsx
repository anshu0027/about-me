/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            <strong>About Me</strong>
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            As a passionate web developer pursuing a B.Tech in Computer Science
            Engineering, I am dedicated to creating impactful digital solutions.
            Proficient in the MERN stack, I’ve developed various applications,
            including an Instagram clone and a code collaboration app,
            showcasing my ability to turn complex concepts into user-friendly
            interfaces. As a freelance developer, I enjoy bringing clients'
            visions to life while continuously honing my skills in React.js and
            modern web technologies. With a strong interest in entrepreneurship,
            I strive to make a positive impact in the tech world through
            innovative projects and collaborations.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ clients
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+ years of experience
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=anshu0027&layout=donut-vertical&theme=transparent&hide_border=true&title_color=1051de&text_color=FFFFFF&icon_color=1051de&text_bold=false`}
            alt="anshu-patel"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=anshu0027&theme=transparent&hide_border=true&title_color=1051de&text_color=FFFFFF&icon_color=1051de&text_bold=false`}
            alt="anshu-patel"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=babel,bootstrap,css,git,github,html,js,jquery,mongodb,mysql,netlify,nextjs,nodejs,npm,react,redux,replit,sass,tailwind,threejs,vercel,vite,vscode`}
            alt="anshu-patel"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=anshu0027&theme=dark&hide_border=true&type=png&background=EB545405&ring=1051de&currStreakLabel=1051de`}
            alt="anshu-patel"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/anshu0027/Code-Collab-App"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=anshu0027&repo=Code-Collab-App&theme=transparent&hide_border=true&title_color=1051de&text_color=FFFFFF&icon_color=1051de&text_bold=false&description_lines_count=2`}
              alt="anshu-patel"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
