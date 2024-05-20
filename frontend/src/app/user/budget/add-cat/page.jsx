import React from "react";

const AddCatagory = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-xl font-bold text-[#22577A]">
            Budget Catagory Form
          </h1>

          <hr className="h-1 bg-gray-400 w-full" />
          <div>
            <p className="text-gray-500 mt-5">
              Required fields are marked{" "}
              <span className="text-red-600 ">*</span>
            </p>
            <hr className="h-1 bg-gray-400 w-full" />
          </div>
        </div>

        <form className="max-w-lg">
          <div className="flex mb-5">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-40"
            >
              Budget Type :
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Expense</option>
              <option>Income</option>
              <option>Saving</option>
              <option>Debt</option>
            </select>
          </div>

          <div className="mb-5 flex items-center">
            <label
              for="account"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-40 "
            >
              Budget Title <span className="text-red-600">*</span> :
            </label>
            <input
              type="account"
              id="account"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter account"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white border-2 shadow-md bg-[#00ABCD] hover:bg-[#328393] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10 ml-32"
          >
            Subimt
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCatagory;
