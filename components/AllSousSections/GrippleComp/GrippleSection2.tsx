import Image from "next/image";
import React from "react";

export default function GrippleSection2() {
  return (
    <div className="w-full h-hauto rounded-t-[120px] flex flex-col justify-around gap-10 p-[5%]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-4xl text-black ">Project Context </p>
        </div>
        <div>
          <p className="text-black/50">
            Gripple is a social networking app concept I imagined to explore a
            clean, user-centered experience focused on authentic interactions.
            The goal was to offer a lightweight alternative to existing
            platforms, emphasizing simplicity, fluid navigation, and the
            essentials of social features.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-3">
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <p className="font-semibold text-4xl text-black mb-6">My Role </p>
            </div>
            <div className="text-black/50 flex flex-col gap-5">
              <p>- Full UI/UX design (Figma mockups)</p>
              <p>- Screen architecture and layout design</p>
              <p>- User flow prototyping</p>
              <p>- Creation of a modern visual identity</p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-semibold text-4xl text-black mb-6 ">
                Key Features{" "}
              </p>
            </div>
            <div className="text-black/50 flex flex-col gap-5">
              <p>- Sign up / Login</p>
              <p>- Create posts (text, photo, video)</p>
              <p>- Minimalist news feed</p>
              <p>- Likes and comments</p>
              <p>- Follow system (followers)</p>
              <p>- User profile with bio and photo</p>
              <p>- Notifications (designed but not connected to a backend)</p>
            </div>
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
              UX Strategy / Proposed Solutions{" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>
              Gripple’s user experience is built around smooth and intuitive
              navigation, with well-spaced elements and a clear visual
              hierarchy. I prioritized core features to avoid functional
              overload, which is often a source of distraction on traditional
              social platforms.
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
              src="/images/Project_Images/Details/Gripple/grippleReal2.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/Gripple/grippleReal3.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/Gripple/grippleReal4.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
        </div>
      </div>

      <div className="flex  justify-center md:justify-between items-center gap-3">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-4xl text-black ">
              What This Project Taught Me{" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>
              This project helped me strengthen my skills in mobile design,
              content organization, and user interaction management. It also
              allowed me to explore the logic behind social networking apps from
              a minimalist and distraction-free perspective.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/Project_Images/Details/Gripple/grippleReal7.png"
            alt="Description"
            width={900}
            height={0}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
