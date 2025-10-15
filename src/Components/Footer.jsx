import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h2 className="font-bold text-lg mb-4 ">Janvi Technologies & Services</h2>
                    <p className="text-sm mb-4">
                        At Janvi Technologies & Services Systems, we are committed to delivering solutions that truly
                        make a difference. With a focus on innovation, integration, and
                        customer-centricity, we enable organizations to scale, optimize,
                        and thrive in the digital era.
                    </p>
                    <p className="text-sm font-semibold">Call Us:</p>
                    <p className="text-sm">
                        +91-8693865558 | +91-9619707429 | 
                        <br />
                        <p className="text-sm">GSTIN: 27ACCPY3160F1ZK</p>
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="font-bold text-lg mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about" className="hover:underline">About Us</Link></li>
                        <li><Link to="/" className="hover:underline">Products & Services</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="font-bold text-lg mb-4">Request Inquiry for All Demo</h2>
                    <form
                        action="https://formsubmit.co/Chandrashekhar.y@janavitechnologies.co.in"
                        method="POST"
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message (optional)"
                            rows="4"
                            className="w-full px-4 py-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition"
                        >
                            Submit
                        </button>

                        {/* Optional hidden inputs */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />
                    </form>
                </div>


                {/* Contact Info */}
                <div>
                    <h2 className="font-bold text-lg mb-4">Contact Us</h2>
                    <p className="text-sm mb-2">Janvi Technologies & Services</p>
                    <p className="text-sm font-semibold">Address:</p>
                    <p className="text-sm">
                        Signature Society, Block 401, Plot No 118, Sector 19,<br />
                        Ulwe, Navi Mumbai 410206
                    </p>
                    <p className="text-sm font-semibold mt-2">Mail Us:</p>
                    <p className="text-sm">
                        Chandrashekhar.y@janavitechnologies.co.in<br />
                        
                    </p>
                </div>
            </div>
        </footer>
    );
}
