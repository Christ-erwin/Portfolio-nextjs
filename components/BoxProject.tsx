import React from "react";
import Link from 'next/link';

interface ProjectCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
}

const BoxProject: React.FC<ProjectCardProps> = ({ backgroundImage, title, description, link, featured = false }) => {
  const lines = description.split('\n');
  return (
    <div className={`relative w-full rounded-3xl overflow-hidden group ${featured ? 'min-h-[50vh]' : 'min-h-[42vh]'}`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          {featured && (
            <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
              ✦ Featured Project
            </span>
          )}
        </div>

        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold mb-1">{title}</p>
            <p className="text-white/60 text-sm">{lines[0]}</p>
            {lines[1] && <p className="text-white/40 text-xs mt-0.5">{lines[1]}</p>}
          </div>
          <Link href={link}>
            <span className="grad-bg text-white font-semibold text-sm px-6 py-3 rounded-full inline-block group-hover:opacity-90 transition-opacity">
              View case study →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BoxProject;
