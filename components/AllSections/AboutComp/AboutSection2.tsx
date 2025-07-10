import Image from "next/image";
import React from "react";

export default function AboutSection2() {
  return (
    <div className="w-full h-fit bg-white px-[5%] py-[2%] rounded-t-none md:rounded-t-[120px] flex flex-col">
      <div className="w-full h-fit flex justify-between items-center">
        <div className="w-full flex flex-wrap-reverse md:flex-nowrap justify-between items-center">
          <div className="flex flex-col">
            <div>
              <p className="font-semibold text-2xl md:text-4xl text-black mb-6">
                About me
              </p>
            </div>
            <div>
              <p className="text-black text-lg mb-6 leading-loose">
                I&apos;m a young UI/UX designer and developer with a passion for
                creating intuitive, aesthetic and effective digital experiences.
                My aim is to design interfaces that combine simplicity, visual
                impact and usefulness for users. Curious by nature, I transform
                ideas into high-potential digital products.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/About_Images/aboutme.png"
              alt="Description"
              width={300}
              height={300}
              className="max-w-[100px] md:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex justify-between items-center">
        <div className="w-full flex flex-wrap-reverse md:flex-nowrap justify-between items-center">
          <div className="flex flex-col">
            <div>
              <p className="font-semibold text-2xl md:text-4xl text-black mb-6">
                My Story
              </p>
            </div>
            <div>
              <p className="text-black text-lg mb-6 leading-loose">
                After exploring different creative fields, I naturally
                gravitated towards UI/UX design and front-end development.
                I&apos;ve worked on a variety of personal projects, from the
                creation of a fictional streaming app to a meal ordering
                platform. Today, I&apos;m looking to collaborate with startups,
                agencies or ambitious entrepreneurs, to transform their ideas
                into concrete digital products.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/About_Images/myStory.png"
              alt="Description"
              width={300}
              height={300}
              className="max-w-[100px] md:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex justify-between items-center">
        <div className="w-full flex flex-wrap-reverse md:flex-nowrap justify-between items-center">
          <div className="flex flex-col">
            <div>
              <p className="font-semibold text-2xl md:text-4xl text-black mb-6">
                My philosophy
              </p>
            </div>
            <div>
              <p className="text-black text-lg mb-6 leading-loose">
                I believe that good design isn&apos;t just what you see, but
                what you feel. My approach is user-centered, and I strive to
                create interfaces that make sense, going to the essential,
                without sacrificing beauty.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/About_Images/myPhylo.png"
              alt="Description"
              width={300}
              height={300}
              className="max-w-[100px] md:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex justify-between items-center">
        <div className="w-full flex flex-wrap-reverse md:flex-nowrap justify-between items-center">
          <div className="flex flex-col">
            <div>
              <p className="font-semibold text-2xl md:text-4xl text-black mb-6">
                What I propose
              </p>
            </div>
            <div>
              <p className="text-black text-lg mb-6 leading-loose">
                - UI design for web and mobile
                <br />
                - UX layout & prototyping (Figma)
                <br />
                - Front-end integration (React / React Native / Tailwind)
                <br />- Collaboration on startup or MVP projects
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/About_Images/proposing.png"
              alt="Description"
              width={300}
              height={300}
              className="max-w-[100px] md:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
