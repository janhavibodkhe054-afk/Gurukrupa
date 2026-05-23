import React from "react";

export default function SimpleHero() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="relative ">
        
        {/* SINGLE IMAGE */}
        <img
          src="/hero.png"
          alt="Hero"
          className="w-full h-full object-contain"
        />

        
      </div>
    </section>
  );
}