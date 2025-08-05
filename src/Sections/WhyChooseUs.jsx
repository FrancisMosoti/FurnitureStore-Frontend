import React from "react";
import { IconBase } from "react-icons";
import { FaTruck } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiMaterialformkdocs } from "react-icons/si";
import { FaRegClock } from "react-icons/fa6";

const features = [
  {
    title: "Fast Delivery",
    description:
      "We ensure quick and reliable delivery of your furniture to your doorstep.",
    IconBase: <FaTruck />,
  },
  {
    title: "Quality Materials",
    description:
      "We use only the finest materials to ensure durability and style.",
    IconBase: <SiMaterialformkdocs />,
  },
  {
    title: "Easy to shop",
    description:
      "Our online store makes it easy to browse and purchase furniture from the comfort of your home.",
    IconBase: <FaShopify />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any inquiries or issues.",
    IconBase: <RiCustomerService2Line />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-200 pl-10 md:pl-20 pt-32 md:pt-40 flex md:flex-row flex-col items-center justify-between pb-32">
      <div className="md:w-1/2">
        <h2 className="text-3xl text-center md:text-start font-bold mb-8 text-gray-700">
          Why Choose Us?
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8 md:w-3/4 md:text-start">
          We are committed to providing high-quality furniture that meets your
          needs and exceeds your expectations. Our products are crafted with
          care, ensuring durability and style for your home or office.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div className="p-3" key={index}>
              <p className="text-3xl">{feature.IconBase}</p>

              <h3 className="text-xl font-semibold my-4">{feature.title}</h3>
              <p className="text-gray-600">
                We ensure quick and reliable delivery of your furniture to your
                doorstep.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center md:p-12 ">
        <img src="/why-choose-us-img.jpg" alt="" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
