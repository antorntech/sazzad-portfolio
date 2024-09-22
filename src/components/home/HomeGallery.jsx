import React, { useState } from "react";
import CustomModal from "../custommodal/CustomModal";

const HomeGallery = () => {
  const gallerys = [
    {
      id: 1,
      thumbnail: "/images/blog-1.jpg",
    },
    {
      id: 2,
      thumbnail: "/images/gallery-2.jpg",
    },
    {
      id: 3,
      thumbnail: "/images/blog-3.jpg",
    },
    {
      id: 4,
      thumbnail: "/images/gallery-4.jpg",
    },
    {
      id: 5,
      thumbnail: "/images/blog-2.jpg",
    },
    {
      id: 6,
      thumbnail: "/images/blog-4.jpg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <section className="md:h-[100vh]">
        <div className="py-5 px-4 md:px-0 bg-no-repeat bg-cover bg-[url('/images/features-bg.jpg')] bg-center h-full w-full relative overflow-hidden z-[1] before:absolute before:inset-0 before:bg-[#18377e]/70 before:-z-[1]">
          <div className="max-w-screen-xl h-full mx-auto flex flex-row md:flex-col justify-center gap-8 ">
            <div className="grid grid-cols-2 md:grid-cols-3">
              {gallerys.map((gallery) => (
                <div
                  key={gallery.id}
                  className="w-full h-full md:h-[300px] overflow-hidden relative group"
                >
                  <img
                    src={gallery.thumbnail}
                    alt=""
                    className="w-full h-full object-fit  group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full md:h-[300px] bg-black opacity-0 group-hover:opacity-75 transition-all duration-500">
                    <i
                      className="fa-solid fa-circle-plus text-5xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => handleImageClick(gallery.thumbnail)}
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default HomeGallery;
