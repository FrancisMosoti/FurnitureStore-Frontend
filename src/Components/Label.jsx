const Label = ({children}) => {
  return <label
                htmlFor=""
                className="text-start text-gray-800 font-semibold text-md"
              >
               {children}
              </label>;
};
