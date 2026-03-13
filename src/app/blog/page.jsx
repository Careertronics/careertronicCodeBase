"use client";

import { blogs } from "./data/Blog";

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section
        className="text-center py-20 bg-gradient-to-b
        from-[#000000] via-[#3b0f2a] to-[#0e0e11] px-6"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Careertronic Blog
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Explore insights on technology, careers, AI, cloud computing and
          real-world learning.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-red-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category */}
                <span className="text-sm text-red-600 font-medium mb-2">
                  {blog.category}
                </span>

                {/* Title */}
                <h2 className="text-lg font-semibold text-black mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-black text-sm mb-6 line-clamp-3">
                  {blog.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between text-sm text-black">
                  <span>{blog.author}</span>

                  <span>{blog.readTime}</span>
                </div>

                {/* Button */}
                <div className="mt-4">
                  <span className="inline-block text-red-600 border border-red-600 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-red-600 hover:text-white transition">
                    Read Article
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
