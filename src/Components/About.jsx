import React from 'react';

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 mb-4 border-b-4 border-orange-300 inline-block">
          About Us
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          <span className="font-semibold text-gray-900">Janvi Technologies & Services</span> is a forward-thinking technology company committed to delivering robust, innovative, and scalable IT solutions. With a team of skilled professionals, we specialize in <span className="text-orange-500 font-medium">networking, cloud computing, infrastructure support, cybersecurity, and managed IT services</span>.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Our mission is to empower businesses by providing cutting-edge solutions that enhance efficiency, productivity, and security. We believe in building long-term partnerships through trust, transparency, and technical excellence.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          At Janvi Technologies, we are driven by values of <span className="text-orange-500 font-medium">innovation, reliability, and customer satisfaction</span>. Whether you're a startup or an enterprise, we tailor our services to meet your unique needs, ensuring technology works for you, not against you.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-orange-50 rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">💡 Vision</h4>
            <p className="text-gray-700">
              To be a trusted global IT solutions provider, helping businesses evolve through smart technology.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">🎯 Mission</h4>
            <p className="text-gray-700">
              Deliver quality-driven, customer-focused solutions to enhance business performance through innovation.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">🤝 Values</h4>
            <p className="text-gray-700">
              Integrity, Innovation, Excellence, Accountability, and Teamwork form the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
