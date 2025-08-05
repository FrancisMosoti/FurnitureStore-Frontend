import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const testimonials = [
  {
    text: "The furniture quality is exceptional! I love my new sofa.",
    fullName: "Jane Doe",
    avatar: "/Avatars/avatar1.jpg",
  },
  {
    text: "I had a great shopping experience. The delivery was fast and the customer service was helpful.",
    fullName: "John Smith",
    avatar: "/Avatars/avatar1.jpg",
  },
  {
    text: "Amazing selection of furniture! I found exactly what I was looking for.",
    fullName: "Emily Johnson",
    avatar: "/Avatars/avatar1.jpg",
  },
  {
    text: "The quality of the furniture exceeded my expectations. Highly recommend!",
    fullName: "Michael Brown",
    avatar: "/Avatars/avatar1.jpg",
  },
];

const CARD_HEIGHT = "min-h-[-60vh]"; // Adjust as needed for your content

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const timeoutRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 10000);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [current]);

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimating(false);
    }, 400);
  };

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  const handleDot = (idx) => {
    if (animating || idx === current) return;
    setDirection(idx > current ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  // Animation classes
  const getCardClass = () => {
    if (!animating) return "translate-x-0 opacity-100";
    if (direction === "right") return "-translate-x-full opacity-0";
    return "translate-x-full opacity-0";
  };

  const getNextCardClass = () => {
    if (!animating) return "translate-x-0 opacity-100";
    if (direction === "right") return "translate-x-full opacity-0";
    return "-translate-x-full opacity-0";
  };

  // For smooth slide, render both current and next card during animation
  const nextIdx =
    direction === "right"
      ? (current + 1) % testimonials.length
      : (current - 1 + testimonials.length) % testimonials.length;

  return (
    <section className="bg-gray-200 p-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">
        What Our Customers Say
      </h2>

      <div className="flex justify-center items-center gap-4">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 text-[#365A4C] text-2xl shadow hover:bg-[#365A4C] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>
        <div
          className={`relative w-3/4 max-w-2xl min-h-[50vh] flex items-center justify-center overflow-hidden`}
        >
          {/* Current card */}
          <div
            className={`absolute w-full transition-all duration-400 ease-in-out ${CARD_HEIGHT} ${
              animating ? getCardClass() : "z-10"
            }`}
            style={{ pointerEvents: animating ? "none" : "auto" }}
          >
            <div className="p-6 rounded-lg flex flex-col items-center">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].fullName}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#365A4C] shadow"
              />
              <p className="text-gray-700 mb-4 text-center text-lg">
                "{testimonials[current].text}"
              </p>
              <p className="font-semibold text-center">
                - {testimonials[current].fullName}
              </p>
            </div>
          </div>
          {/* Next card (only during animation) */}
          {animating && (
            <div
              className={`absolute w-full transition-all duration-400 ease-in-out ${CARD_HEIGHT} z-20 ${getNextCardClass()}`}
            >
              <div className="p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
                <img
                  src={testimonials[nextIdx].avatar}
                  alt={testimonials[nextIdx].fullName}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#365A4C] shadow"
                />
                <p className="text-gray-700 text-center">
                  "{testimonials[nextIdx].text}"
                </p>
                <p className="font-semibold text-center">
                  - {testimonials[nextIdx].fullName}
                </p>
              </div>
            </div>
          )}
        </div>

        <button
          aria-label="Next"
          onClick={handleNext}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-300 text-[#365A4C] text-2xl shadow hover:bg-[#365A4C] hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
      {/* Dots for navigation */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDot(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-[#365A4C]" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
