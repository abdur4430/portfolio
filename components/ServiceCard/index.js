import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "I’m a creative and curious individual with a growing passion for digital design, web development, and user-focused experiences. I enjoy turning ideas into clean, functional visuals and learning new tools that help bring projects to life. Whether it's building a personal website, collaborating on a team project, or exploring design trends, I’m always eager to grow and create meaningful work. "}
      </p>
    </div>
  );
};

export default ServiceCard;
