import React, { useEffect, useRef } from "react";
import partner1 from "../assets/01-1.jpg";
import partner2 from "../assets/02-1.jpg";
import partner3 from "../assets/06.jpg";
import partner4 from "../assets/08.jpg";
import partner5 from "../assets/10.jpg";
import partner6 from "../assets/11.jpg";
import partner7 from "../assets/12.jpg";
import partner8 from "../assets/14.jpg";
import partner9 from "../assets/17.jpg";
import partner10 from "../assets/18.jpg";
import partner11 from "../assets/20.jpg";
import partner12 from "../assets/amx.jpg";
import partner13 from "../assets/aruba.jpg";
import partner14 from "../assets/biomax-1024x800-2.jpg";
import partner15 from "../assets/COMMSCOPE.jpg";
import partner16 from "../assets/Dahua-1.jpg";
import partner17 from "../assets/dlink.jpg";
import partner18 from "../assets/eSSL-Logo.jpg";
import partner19 from "../assets/jbl.jpg";
import partner20 from "../assets/logitech.jpg";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18, partner19, partner20];

export default function Partners() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Prevent vertical scroll
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Partners in Growth
        </h2>

        <div
          ref={scrollRef}
          className="flex  gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {partners.map((logo, index) => (
            <div
              key={index}
              className="hover:border-2 flex-shrink-0 w-36 h-20 bg-gray-100 rounded shadow flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
