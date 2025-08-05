import Button from "../Components/Button";

const Hero = () => {
  return (
    <div className="bg-[#365A4C] text-white flex justify-between p-10 flex-col md:flex-row items-center">
      <div className="flex flex-col space-y-10 md:w-1/2 mt-16">
        <h1 className="font-extrabold text-5xl">
          Modern Interior Design Furniture Store
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          fugiat expedita quaerat deleniti quod? Fugit, quasi. Sunt, nobis
          voluptatum ipsum in et, vitae quasi repellat minima corporis, placeat
          corrupti magni?
        </p>
        <div className="flex space-x-2 gap-4">
          <Button className=" px-6 py-2 rounded-full bg-[#FEC020] text-[#365A4C] font-semibold mr-4 border-2 border-transparent hover:border-[#365A4C] transition-all duration-300 ease-in-out shadow hover:shadow-lg">
            Shop Now
          </Button>
          <Button className=" rounded-full px-6 py-2 text-gray-200 font-semibold border-2 border-gray-200 hover:border-[#FEC020] hover:text-[#FEC020] transition-all duration-300 ease-in-out">
            Explore
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="/couch.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero;
