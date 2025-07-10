import Image from "next/image";
import React from "react";

export default function WaveSection2() {
  return (
    <div className="w-full h-hauto rounded-t-[120px] flex flex-col justify-around gap-10 p-[5%]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-4xl text-black ">Project Context </p>
        </div>
        <div>
          <p className="text-black/50">
            This redesign of the Wave application is a personal project aimed at
            improving the user experience while modernizing the interface. The
            main goal was to simplify navigation flows, enhance readability, and
            deliver a more cohesive and modern visual identity.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-3">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-4xl text-black ">
              UX Analysis of the Existing Product{" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>
              Before beginning the design phase of the Wave app redesign. I
              conducted a thorough analysis
              <br /> of the existing interface and user experience. Although
              Wave is a widely used and overall functional <br />
              financial application, several elements caught my attention as a
              designer particularly in terms of <br />
              ergonomics, visual hierarchy, simplicity of user flows, and
              graphic identity. Here are the main issues
              <br /> I identified:
            </p>
            <p>
              <strong>1. Complex Navigation:</strong> Core actions like sending
              money require too many steps, which slows down the user
              experience.
            </p>
            <p>
              <strong>2. Weak Visual Hierarchy: </strong>
              Key information such as balance, transactions, and action buttons
              is not clearly highlighted.
            </p>
            <p>
              <strong>3. Low Accessibility in Color Palette:</strong>
              Some contrast levels are too low, which negatively affects
              readability.
            </p>
            <p>
              <strong>4. Unintuitive Contact Management:</strong>
              There is no clear interface for quickly finding, adding, or
              managing beneficiaries.
            </p>
            <p>
              <strong>5. Lack of Strong Visual Identity:</strong>
              The interface lacks visual consistency and does not convey a
              strong brand personality.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/images/Project_Images/Details/Wave/waveOld.png"
            alt="Description"
            width={300}
            height={0}
            className=""
          />
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-between gap-3">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-4xl text-black ">
              Proposed Solutions / UX Strategy{" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>
              Following the analysis of the current interface’s weaknesses, I
              defined a user-centered approach to bring concrete improvements to
              the overall experience. The main objective was to simplify user
              flows, clarify information, and strengthen visual consistency —
              all while respecting the functional nature of a mobile money
              application.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-3 ">
          <Image
            src="/images/Project_Images/Details/Wave/wavaPresent1.png"
            alt="Description"
            width={300}
            height={0}
            className=""
          />

          <Image
            src="/images/Project_Images/Details/Wave/wavaPresent2.png"
            alt="Description"
            width={300}
            height={0}
            className=""
          />
        </div>
      </div>

      <div className="text-black flex flex-wrap justify-between gap-6">
        <div className="w-full md:w-[48%]">
          <p>
            <strong>1. Navigation Redesign:</strong> <br />I restructured the
            navigation to allow quick and direct access to key actions such as
            money transfers, balance consultation, and adding contacts. A
            simplified navigation bar, combined with well-positioned visual
            shortcuts, enhances the overall flow and usability of the app.
          </p>
        </div>
        <div className="w-full md:w-[48%]">
          <p>
            <strong>2. Clear Visual Hierarchy Implementation:</strong> <br />
            By improving the use of contrast, element sizing, and spacing, key
            information — such as balance, action buttons, and alerts — is now
            more readable and immediately noticeable. Each screen has been
            structured according to a logical visual priority order.
          </p>
        </div>
      </div>

      <div className="flex justify-between 2xl:justify-around items-center gap-3">
        <div className="">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[40vh] 2xl:w-[20vh] h-auto shadow-lg rounded-2xl"
          >
            <source
              src="https://res.cloudinary.com/docanichi/video/upload/v1752175194/waveRecord_qoi5g5.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-black flex-col gap-6">
          <div className="w-fit mb-4">
            <p>
              <strong>1. Navigation Redesign:</strong> <br />I restructured the
              navigation to allow quick <br />
              and direct access to key actions such as money transfers, balance{" "}
              <br />
              consultation, and adding contacts. A simplified navigation bar,{" "}
              <br />
              combined with well-positioned visual shortcuts, enhances the
              overall flow and usability of the app.
            </p>
          </div>
          <div className="w-fit">
            <p>
              <strong>2. Clear Visual Hierarchy Implementation:</strong> <br />
              By improving the use of contrast,
              <br /> element sizing, and spacing, key information — such as
              balance,
              <br /> action buttons, and alerts — is now more readable and{" "}
              <br />
              immediately noticeable. Each screen has been structured according
              to a logical visual priority order.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-4xl text-black ">Personal Reflections</p>
        </div>
        <div>
          <p className="text-black/50">
          This project allowed me to deepen my understanding of the challenges specific to financial
          apps — such as secure UX, accessibility, and clarity. It also gave me the opportunity to
          practice building a complete and consistent design system.
          </p>
        </div>
      </div>
    </div>
  );
}
