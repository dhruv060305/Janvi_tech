import React, { useEffect, useState } from "react";
import bg1 from "../assets/01.jpg";
import bg2 from "../assets/02.jpg";
import bg3 from "../assets/03.jpg";
import bg4 from "../assets/04.jpg";
import bg5 from "../assets/05.jpg";


const slides = [
  {
    image: bg1,
    text: "Voice Communication",
  },
  {
    image: bg2,
    text: "Video Conferencing & Collaboration",
  },
  {
    image: bg3,
    text: "Data Infrastructure & Networking",
  },
  {
    image: bg4,
    text: "AV Integration & Board Room Support",
  },
  {
    image: bg5,
    text: "Seciurity & Surveillance Solutions",
  }
];

export default function Main() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center transition-all duration-1000 flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${slides[index].image})`,
      }}
    >
      <div className="bg-transparent bg-opacity-60 p-8 rounded-xl text-center max-w-2xl">
        <h1 className="text-3xl sm:text-5xl text-amber-300 font-bold">{slides[index].text}</h1>
      </div>
    </section>
  );
}
