import React from "react";
import voiceImg from "../assets/voice.png";
import avImg from "../assets/AV-integration.png";
import Doc from "../assets/document.png";
import Doc1 from "../assets/document-01.png";
import Security from "../assets/Security.png";
import Support from "../assets/support01.png";

import AMX from "../assets/amx.jpg"

import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Voice Communications",
    desc: "Janvi Tech. Systems has emerged as a compelling Voice Communications Solutions provider. We are known as a leading organization involved in providing all in one UC Solutions for SMBs.",
    image: voiceImg,
  },
  {
    title: "AV Integration and Boardroom Solution Dealers",
    desc: "Audio visual integration is the blending of technologies related to hearing and sight into a unified whole. It is the process of coordinating speakers, microphones, projectors, displays, control panels, and video conferencing software.",
    image: avImg,
  },
  {
    title: "Video Conferencing & Collaboration",
    desc: "We are one of the leading service providers of Video Conference & Collaboration solutions. Enables users to place calls via any device, share screens, annotate, and visually collaborate with colleagues.",
    image: Doc,
  },
  {
    title:"Data Networking & Infrastructure",
    desc: "We provide Data Networking & Infrastructure solutions that are designed to meet the needs of modern businesses. Our solutions include high-speed internet access, secure data storage, and reliable network infrastructure.",
    image: Doc1,
  },
  {
    title: "Security & Surveillance",
    desc: "Janvi Tech Systems plays a major role in enhancing security and surveillance capabilities.  We are offering many increasingly technical solutions for Fire Alarm, Access control, Time Attendance,, Video surveillance & IP CCTV surveillance.",
    image: Security,
  },
  {
    title: "Project Consultancy & System Integration",
    desc: "We have the broadest & most innovative portfolio to deliver customer value, with growing emphasis on software & service solution.",
    image: Support,
  }
];

const GrowthPartners = [
    {
        image: AMX,
    },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-10 px-4">
        {services.map((item, index) => (
          <div key={index} className="text-center hover:bg-amber-300 p-6 rounded-lg shadow-lg transition duration-300">
            {/* Hexagon image */}
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <div className="clip-hexagon w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>

            {/* Read More Button */}
            <button className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded flex items-center mx-auto">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}
