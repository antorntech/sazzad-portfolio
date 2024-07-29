import React from "react";

const CustomVideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      data-aos="fade-in"
      data-aos-duration="500"
    >
      <button
        onClick={onClose}
        className="absolute flex justify-center items-center top-4 right-4 bg-slate-600 w-12 h-12 rounded-full"
      >
        <i className="fa-solid fa-xmark text-[22px] text-white"></i>
      </button>
      <div className="relative bg-transparent p-4 rounded-md max-w-full max-h-full overflow-auto">
        <iframe
          className="w-[300px] h-[300px] md:w-[800px] md:h-[600px] p-4"
          src={`${video}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default CustomVideoModal;
