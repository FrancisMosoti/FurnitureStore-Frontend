const ProductCard = ({ productName, productImg, productPrice, index }) => {
  return (
    <div key={index} className="flex flex-col items-center relative">
      <div className="flex flex-col items-center space-y-2 w-[300px]">
        <img src={productImg} alt={`${productName} image`} srcset="" />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4 font-semibold text-gray-700">
        <p>{productName}</p>
        <p className="text-xl font-bold ">{productPrice}</p>
      </div>
      <div className="absolute bg-amber-500"></div>
    </div>
  );
};

export default ProductCard;
