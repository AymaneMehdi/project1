import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import Data from "@data/sections/services.json";
import Image from "next/image";

const Caroucel = () => {
  const [chunkedItems, setChunkedItems] = useState([]);

  useEffect(() => {
    // Function to chunk data
    const chunkData = () => {
      const chunks = [];
      let chunkSize = window.innerWidth < 768 ? 1 : 2; // Use screen width to determine chunk size

      for (let i = 0; i < Data.items.length; i += chunkSize) {
        chunks.push(Data.items.slice(i, i + chunkSize));
      }
      setChunkedItems(chunks);
    };

    // Chunk data initially and on window resize
    chunkData();
    window.addEventListener("resize", chunkData);

    // Cleanup
    return () => window.removeEventListener("resize", chunkData);
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pb-8">
      <Carousel>
        {chunkedItems.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex justify-center space-x-4">
            {chunk.map((item, index) => (
              <div key={index} className="w-full sm:w-full md:w-1/2 relative">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg filter brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <h3 className="text-white text-lg font-bold text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Caroucel;
