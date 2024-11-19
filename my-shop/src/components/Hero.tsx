import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[70vh] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Spring Collection 2024</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the latest trends in fashion</p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}