import React from 'react'

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-auto h-full transform origin-center object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="/public/eren4k.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Landing;
