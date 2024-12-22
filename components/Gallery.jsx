import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery" className="py-20  bg-gray-50">
      <div className="flex flex-col max-w-7xl justify-center items-center px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Gallery
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row  items-center gap-4 justify-center mx-auto">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src={`/${i}.jpg`}
              alt={`Gallery image ${i + 1}`}
              className="rounded-lg md:w-[45%] transition-opacity  mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery
