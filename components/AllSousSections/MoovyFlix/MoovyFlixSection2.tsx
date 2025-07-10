import Image from "next/image";
import React from "react";

export default function MoovyFlixSection2() {
  return (
    <div className="w-full h-hauto rounded-t-[120px] flex flex-col justify-around gap-10 p-[5%]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-4xl text-black ">Project Context </p>
        </div>
        <div>
          <p className="text-black/50">
            Moovy Flix is a mobile video streaming app concept designed from
            scratch. The goal was to create a modern, accessible, and
            personalized platform that allows users to watch movies, series, and
            documentaries within a simple, elegant, and immersive interface.
            This fictional project enabled me to explore all aspects of product
            design: UX strategy, information architecture, wireframing, UI
            design, prototyping, and design system development.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-3">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-4xl text-black ">Objectives </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>- Create a smooth and intuitive streaming experience.</p>
            <p>- Provide an interface that visually highlights content.</p>
            <p>
              - Integrate smart recommendation and resume playback features.
            </p>
            <p>- Offer personalized navigation based on user preferences.</p>
          </div>
        </div>

        <div>
          <Image
            src="/images/Project_Images/Details/MoovyFlix/moovyReal1.png"
            alt="Description"
            width={500}
            height={0}
            className=""
          />
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-between gap-3">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-4xl text-black ">
              Problems Identified (in existing apps){" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>- Interfaces often feel cluttered and difficult to read.</p>
            <p>- Lack of personalized content recommendations.</p>
            <p>- Complicated access to resume watching or favorites.</p>
            <p>
              - Poor visual distinction between movies, series, and
              documentaries.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-3">
        <div>
          <Image
            src="/images/Project_Images/Details/MoovyFlix/moovyReal2.png"
            alt="Description"
            width={300}
            height={0}
            className=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-4xl text-black ">
              Proposed Solutions / UX Strategy{" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>
              - A dynamic home page with clear sections: “Trending,” “Continue
              Watching,” “Popular Movies,” and “Recommended for You.”
            </p>
            <p>
              - An advanced filter system to search by genre, duration,
              language, or popularity.
            </p>
            <p>
              - An immersive movie detail page featuring a trailer, synopsis,
              user ratings, tags, and a play button.
            </p>
            <p>
              - A dark-themed interface for optimal visual comfort, with
              large-format visuals.
            </p>
            <p>
              - A user profile with favorites, watch history, and personalized
              recommendations.
            </p>
            <p>
              - A floating mini-player to keep watching while browsing other
              content.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="font-semibold text-4xl text-black mb-6 ">Overview </p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <div>
            <Image
              src="/images/Project_Images/Details/MoovyFlix/moovyReal3.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/MoovyFlix/moovyReal4.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/MoovyFlix/moovyReal5.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/MoovyFlix/moovyReal6.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-4xl text-black ">
            Expected Results / Simulated Impact
          </p>
        </div>
        <div>
          <p className="text-black/50">
            Although this is a fictional project, the UX approach adopted aims
            to:
          </p>
        </div>
        <div className="text-black/50 flex flex-col gap-5">
          <p>
            - Reduce friction in content discovery and playback.
          </p>
          <p>
            - Improve user retention through a personalized experience.
          </p>
          <p>
            - Encourage content exploration via smart content highlighting.
          </p>
          <p>
            - Convey a premium and modern brand image from the very first screens.
          </p>
        </div>
      </div>
    </div>
  );
}
