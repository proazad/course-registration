const Carts = () => {
  return (
    <div className="w-full lg:w-[300px]">
      <div className="bg-base-100 shadow-xl p-4 rounded-md">
        <div className="border-b-2">
          <h3 className="text-blue-600 font-semibold text-lg pb-3">
            Credit Hour Remaining : 7 hr
          </h3>
        </div>
        <div className="border-b-2 my-5 pb-4">
          <h3 className="text-xl font-bold mb-5">Course Name</h3>
          <p className="text-base font-normal text-gray-600">
            1. <span>Introducto to c programming</span>
          </p>
          <p className="text-base font-normal text-gray-600">
            2. <span>Introducto to c++ for DSA</span>
          </p>
          <p className="text-base font-normal text-gray-600">
            3. <span>Software Engineering</span>
          </p>
        </div>
        <div className="border-b-2 my-5 pb-4">
          <p className="text-base font-medium text-gray-600">
            Total Credit Hour: 13
          </p>
        </div>
        <div className="my-5 ">
          <p className="text-base font-medium text-gray-600">
            Total Price: 13000 USD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carts;
