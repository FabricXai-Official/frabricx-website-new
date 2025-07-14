"use client";

import Image from "next/image";

export default function InsightAndStory() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: "url('/bg/bg3.png')" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Latest Insights & Stories
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Discover how AI, innovation, and data are shaping the future of garment manufacturing.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left - Main Blog */}
        <div className="flex flex-col h-full">
          <div className="flex flex-col h-full">
            <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden">
              <Image
                src="/bg/blog-cover1.png"
                alt="Main Blog Cover"
                fill
                className="object-cover" // Changed from object-contain to object-cover
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">
              The Impact of AI on the Fashion Industry
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              How artificial intelligence is transforming fashion design and production........
            </p>
            <button className="mt-3 text-sm font-semibold text-black flex items-center gap-1 group w-fit">
              Read More <span className="transform group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>

        {/* Right - Two Blogs and CTA */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 flex-grow">
            {/* Blog 2 */}
            <div className="flex gap-4 items-start">
              <div className="aspect-[4/3] w-[35%] relative rounded-lg overflow-hidden">
                <Image
                  src="/bg/blog-cover2.png"
                  alt="Blog 2"
                  fill
                  className="object-cover" // Added object-cover for consistency
                />
              </div>
              <div className="flex flex-col justify-between w-[65%]">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Innovative Technologies in Apparel Production
                </h4>
                <p className="text-sm text-gray-700 mt-1">
                  Exploring the latest advancements in garment manufacturing.
                </p>
                <button className="mt-1 text-sm font-semibold text-black flex items-center gap-1 group w-fit">
                  Read More <span className="transform group-hover:translate-x-1 transition">→</span>
                </button>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="flex gap-4 items-start">
              <div className="aspect-[4/3] w-[35%] relative rounded-lg overflow-hidden">
                <Image
                  src="/bg/blog-cover3.png"
                  alt="Blog 3"
                  fill
                  className="object-cover" // Added object-cover for consistency
                />
              </div>
              <div className="flex flex-col justify-between w-[65%]">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Data-Driven Decision Making in Manufacturing
                </h4>
                <p className="text-sm text-gray-700 mt-1">
                  Leveraging data to optimize processes and drive efficiency.
                </p>
                <button className="mt-1 text-sm font-semibold text-black flex items-center gap-1 group w-fit">
                  Read More <span className="transform group-hover:translate-x-1 transition">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Explore All Button */}
          <div className="mt-6">
            <button className="w-full px-6 py-3 border border-gray-400 rounded-md text-black font-semibold hover:bg-gray-200 transition">
              Explore All Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-16 bg-[#1c1e22] text-white rounded-2xl px-6 py-10 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-lg text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">
            Subscribe to Our <span className="text-[#F2F827]">Monthly Insights</span>
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Get exclusive trends and tips straight to your inbox — no spam
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-md text-black w-full sm:w-64"
          />
          <button className="bg-[#F2F827] text-black font-bold px-6 py-2 rounded-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-gray-400 mt-4">
        *Read by 500+ garment industry leaders across Bangladesh.*
      </div>
    </section>
  );
}