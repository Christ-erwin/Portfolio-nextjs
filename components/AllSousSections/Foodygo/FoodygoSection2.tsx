import Image from "next/image";
import React from "react";

export default function FoodygoSection2() {
  return (
    <div className="w-full h-hauto rounded-t-[120px] flex flex-col justify-around gap-10 p-[5%]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-4xl text-black ">Project Context </p>
        </div>
        <div>
          <p className="text-black/50">
            Foody GO is a mobile app concept imagined for a fictional restaurant
            looking to digitize its services. The goal was to design an
            intuitive solution that allows customers to browse the menu, place
            orders, pay online, and track their food delivery with ease.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-around items-center gap-3">
        <div>
          <Image
            src="/images/Project_Images/Details/Foodygo/foodygoReal1.png"
            alt="Description"
            width={500}
            height={0}
            className=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <p className="font-semibold text-4xl text-black mb-6">My Role </p>
            </div>
            <div className="text-black/50 flex flex-col gap-5">
              <p>- Created the visual identity (logo, colors, typography)</p>
              <p>- Designed the full UX/UI of the application</p>
              <p>- Built high-fidelity mockups in Figma</p>
              <p>- Prototyped user journeys</p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-semibold text-4xl text-black mb-6 ">
                Key Features{" "}
              </p>
            </div>
            <div className="text-black/50 flex flex-col gap-5">
              <p>
                - Category-based navigation (starters, main courses, desserts,
                drinks)
              </p>
              <p>- Dish display with photo, description, and price</p>
              <p>
                - Add to cart with customization options (e.g., cooking level,
                extras)
              </p>
              <p>- Online payment (simulated design)</p>
              <p>- Real-time order tracking</p>
              <p>- Customer profile and order history management</p>
              <p>- Notifications at every stage of the order</p>
            </div>
          </div>
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
              The UX strategy for Foody GO focused on creating a seamless and
              stress-free food ordering experience. The objective was to
              simplify the digital journey for restaurant customers through
              intuitive design choices and clear visual organization. Here are
              the key solutions that shaped the experience:{" "}
            </p>
          </div>
          <div className="text-black/50 flex flex-col gap-5">
            <p>
              - <strong>Category-Based Navigation:</strong> The menu is
              structured into clear sections (starters, mains, desserts, drinks)
              to help users find what they want without cognitive overload.
            </p>
            <p>
              - <strong>Visual-First Design:</strong> Each dish is displayed
              with a high-quality photo, brief description, and price to enhance
              decision-making and encourage ordering.
            </p>
            <p>
              - <strong>Customizable Orders:</strong> Users can personalize
              their meals (e.g., cooking preferences, extras) directly before
              adding to cart, improving user control and satisfaction.
            </p>
            <p>
              - <strong>Streamlined Checkout Flow:</strong> The ordering and
              payment process was designed to be minimal and linear, reducing
              friction and drop-off at critical moments.
            </p>
            <p>
              - <strong>Real-Time Order Tracking:</strong> A dynamic tracking
              screen was included to reassure users and keep them informed at
              every stage of the delivery process.
            </p>
            <p>
              - <strong>User Account Features:</strong> Profiles with saved
              order history, delivery addresses, and favorite dishes make
              reordering easy and personalized.
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
              src="/images/Project_Images/Details/Foodygo/foodygoReal2.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/Foodygo/foodygoReal3.png"
              alt="Description"
              width={300}
              height={0}
              className=""
            />
          </div>
          <div>
            <Image
              src="/images/Project_Images/Details/Foodygo/foodygoReal4.png"
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
              Foody GO allowed me to explore the challenges of conversion in
              e-commerce apps, refine my skills in responsive mobile design, and
              build a consistent user journey centered around food ordering. I
              also learned how to balance aesthetics and efficiency in a highly
              competitive environment.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/Project_Images/Details/Foodygo/foodygoReal5.png"
            alt="Description"
            width={300}
            height={0}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
