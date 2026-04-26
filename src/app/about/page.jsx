import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>About Us</Title>
      <nav className="flex gap-5 mt-4">
        <Link href={"/about/contact"}>Contact</Link>
        <Link href={"/about/teams"}>Teams</Link>
      </nav>
    </div>
  );
};

export default About;
