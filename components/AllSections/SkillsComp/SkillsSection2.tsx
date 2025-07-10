import ImageTextInfo from "@/components/ImageTextInfo";
import React from "react";

export default function SkillsSection2() {
  return (
    <div className="w-full h-auto bg-white rounded-t-none md:rounded-t-[120px] px-[5%] py-[6%]">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold  text-black mb-6">Hard Skills</h2>
      </div>
      <div>
        <div className="w-full h-fit block lg:flex lg:justify-between items-center mb-[6%]">
          <div className="w-full 2xl:max-w-[1040px]  flex flex-col gap-5  h-auto mb-[6%] lg:mb-[0%] ">
            <p className="text-black text-lg">🎨 UI/UX Design</p>
            <ImageTextInfo
              imageSrc="/images/Skills_Images/figma.png"
              text="Figma"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/wireframes.png"
              text="Wireframing"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/responsive.png"
              text="Design responsive"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/userTest.png"
              text="User tests"
            />
          </div>

          <div className="w-full 2xl:max-w-[1040px]  flex flex-col gap-5  h-auto ">
            <p className="text-black text-lg">🧩 Développement Front-End</p>
            <ImageTextInfo
              imageSrc="/images/Skills_Images/js.png"
              text="HTML5 / CSS3 / JavaScript"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/react.png"
              text="React / React Native / Next.js"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/tailwind.png"
              text="Tailwind CSS"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/expo.png"
              text="Expo"
            />
          </div>
        </div>

        <div className="w-full h-fit flex justify-between mb-[6%]">
          <div className="w-full 2xl:max-w-[1040px] flex flex-col gap-5  h-auto ">
            <p className="text-black text-lg">📦 Tools & Project Management</p>
            <ImageTextInfo
              imageSrc="/images/Skills_Images/github.png"
              text="Git / GitHub"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/notion.png"
              text="Notion"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/vscode.png"
              text="Visual Studio Code"
            />
          </div>
        </div>

        <div className="w-full h-fit flex-wrap justify-between mb-[6%]">
          <div className="w-full 2xl:max-w-[1040px]  flex flex-col gap-5  h-auto  mb-[6%]">
            <p className="text-black text-2xl md:text-4xl font-bold "> Softs Skills</p>
            <ImageTextInfo
              imageSrc="/images/Skills_Images/analytics.png"
              text="Analytical skills and attention to detail"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/team.png"
              text="Teamwork / collaboration"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/listening.png"
              text="Ability to listen and adapt"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/time.png"
              text="Time management / autonomy"
            />
            <ImageTextInfo
              imageSrc="/images/Skills_Images/star.png"
              text="Solution-oriented creativity"
            />
          </div>

          <div className="w-full">
            <div className="w-full 2xl:max-w-[1040px]  flex flex-col gap-5  h-auto ">
              <p className="text-black text-2xl md:text-4xl font-bold "> Languages</p>
              <ImageTextInfo
                imageSrc="/images/Skills_Images/dot.png"
                text="Frensh"
              />
              <ImageTextInfo
                imageSrc="/images/Skills_Images/dot.png"
                text="English"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
