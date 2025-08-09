import React from "react";
import WhyChooseUs from "../../Sections/WhyChooseUs";

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mt-4 mb-6 text-[#365A4C]">
        About Us
      </h1>
      <div className="mx-20 md:mx-32 px-4 md:px-0">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#365A4C]">
            Our Story
          </h2>
          <p className="text-lg text-gray-700">
            Founded in 2020, Furni was born out of a passion for modern design
            and a desire to make beautiful, functional furniture accessible to
            everyone. Our journey began with a small team of designers and
            craftsmen who believed that every home deserves to be both stylish
            and comfortable.
          </p>
        </section>
        <WhyChooseUs />

        <section className="mb-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#365A4C]">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              We are committed to providing high-quality products that enhance
              the beauty and functionality of your home. Our mission is to offer
              a curated selection of furniture that combines timeless style,
              durability, and affordability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#365A4C]">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
              To be a leading furniture brand known for innovation, quality, and
              customer satisfaction. We aim to inspire and transform living
              spaces around the world with our unique designs and exceptional
              service.
            </p>
          </div>
        </section>
        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#365A4C]">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700">
            Our team is made up of passionate designers, skilled artisans, and
            friendly customer support specialists. We work together to ensure
            every piece of furniture meets our high standards and every customer
            has a great experience.
          </p>
        </section> */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-[#365A4C]">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700">
            Have questions or need help? Reach out to us at{" "}
            <a
              href="mailto:support@furni.com"
              className="text-[#365A4C] underline"
            >
              support@furni.com
            </a>{" "}
            or call us at{" "}
            <span className="font-semibold">+1 (800) 123-4567</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
