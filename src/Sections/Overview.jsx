import Button from "../Components/Button";

const chairs = [
  {
    name: "Nordic Chair",
    price: "Ksh. 20,000",

    image: "/product-1.png",
  },
  {
    name: "Modern Chair",
    price: "Ksh. 25,000",

    image: "/product-2.png",
  },
  {
    name: "Classic Chair",
    price: "Ksh. 30,000",

    image: "/product-3.png",
  },
];

const Overview = () => {
  return (
    <section className="container md:mx-auto px-4 py-8 bg-gray-200 flex items-center md:flex-row flex-col">
      <div className=" mt-5 md:mt-7 md:w-1/4  md:ml-12 p-4 flex flex-col space-y-4 items-start">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">
          Crafted with excellent material.
        </h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat omnis
          fuga minima? Laboriosam minus esse animi recusandae reiciendis
          explicabo, nisi obcaecati dicta sit repudiandae eos sint error
          facilis, asperiores dolor!
        </p>

        <Button className=" px-6 py-2 rounded-full bg-gray-700 text-white font-semibold mr-4 border-2 border-transparent hover:border-[#365A4C] hover:text-gray-800 hover:bg-transparent transition-all duration-300 ease-in-out shadow hover:shadow-lg">
          Shop Now
        </Button>
      </div>

      {chairs.map((chair, index) => (
        <div key={index} className="flex flex-col items-center relative">
          <div className="flex flex-col items-center space-y-2 w-[300px]">
            <img src="/product-1.png" alt="" srcset="" />
          </div>
          <div className="flex flex-col items-center space-y-2 mt-4 font-semibold text-gray-700">
            <p>Nordic Chair</p>
            <p className="text-xl font-bold ">Ksh. 20,000</p>
          </div>
          <div className="absolute bg-amber-500"></div>
        </div>
      ))}
    </section>
  );
};

export default Overview;
