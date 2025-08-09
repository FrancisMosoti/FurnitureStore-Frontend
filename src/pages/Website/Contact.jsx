import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const contactDetails = [
  {
    icon: <FaLocationDot className="text-2xl md:text-4xl text-[#365A4C]" />,
    title: "Address",
    description: "123 Furniture St, Design City, DC 12345",
  },
  {
    icon: <FaPhone className="text-2xl md:text-4xl text-[#365A4C]" />,
    title: "Phone",

    description: "+1 (800) 123-4567",
  },
  {
    icon: <FaEnvelope className="text-2xl md:text-4xl text-[#365A4C]" />,
    title: "Email",
    description: "francismosoti20@gmail.com",
  },
];

const Contact = () => {
  return (
    <section className="p-6 flex flex-col space-y-6 md:space-y-8 md:flex-row md:space-x-8">
      <div className="w-full md:w-1/2  md:p-10">
        <p className="mt-4 mb-6 text-[#365A4C] font-bold">Contact Us</p>
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          GET IN TOUCH WITH US
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          We would love to hear from you! Whether you have questions about our
          products, need assistance with an order, or just want to share your
          feedback, feel free to reach out.
        </p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="p-4  flex items-center space-x-6 md:space-x-8 hover:bg-gray-50  "
              >
                <div className="text-center bg-white p-4 md:p-6">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#365A4C]">
                    {detail.title}
                  </h3>
                  <p className="text-gray-700">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white md:w-1/2 p-6 md:p-10 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-semibold md:mt-4 text-gray-700 p-6">
            Send Us a Message
          </h2>
          <form className="p-6 space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#365A4C]"
            />

            <Input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#365A4C]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#365A4C]"
            ></textarea>
            <Button
              type="submit"
              className="w-full bg-[#365A4C] text-white py-3 rounded-md hover:bg-[#2c4739] transition-colors duration-200 font-bold"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
