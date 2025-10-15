import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-12 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">CONTACT US</h2>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        <div className="border rounded p-4 shadow">
          <h3 className="font-semibold mb-2">CALL US</h3>
          <p>+91-86938 65558</p>
          <p>+91-96197 07429</p>
        </div>
        <div className="border rounded p-4 shadow">
          <h3 className="font-semibold mb-2">MAIL US</h3>
          <p><a href="mailto:sales@sterlingtelecomm.com">Chandrashekhar.y@janavitechnologies.co.in</a></p>
        </div>
        <div className="border rounded p-4 shadow">
          <h3 className="font-semibold mb-2">ADDRESS</h3>
          <p>
            Signature Society, Block 401, Plot No 118, Sector 19,
            Ulwe, Navi Mumbai 410206
          </p>
        </div>
      </div>

      {/* Google Map + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Map */}
        <div className="w-full h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.064248423769!2d73.02610207454745!3d18.972769755206446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c33000235727%3A0x3949ce9dacc9f1d1!2sSignature%20Homes%20co%20operative%20housing%20society!5e0!3m2!1sen!2sin!4v1752856884228!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4"
          action="https://formsubmit.co/Chandrashekhar.y@janavitechnologies.co.in"
          method="POST">
          <input type="text" placeholder="Your name" className="border p-2 rounded" />
          <input type="email" placeholder="Your email" className="border p-2 rounded" />
          <input type="text" placeholder="Subject" className="border p-2 rounded" />
          <textarea placeholder="Your message (optional)" className="border p-2 rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
