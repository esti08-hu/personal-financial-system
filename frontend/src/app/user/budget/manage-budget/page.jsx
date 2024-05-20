import React from "react";

const ManageBudget = () => {
  return (
    <div className="">
      <div class="relative overflow-x-auto sm:rounded-lg mr-10">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-xl font-bold text-[#22577A]">Manage Budget</h1>

          <hr className="h-1 bg-gray-400 w-full" />
          
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Budget Title
              </th>
              <th scope="col" class="px-6 py-3">
                Budget Type
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Action
                <span class="sr-only">
                  <a href="#" className="pr-2">
                    Edit
                  </a>
                  <a href="#">Delete</a>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cloth
              </th>
              <td class="px-6 py-4">Expense</td>
              <td class="px-6 py-4">2021-10-10</td>
              <td class="px-6 py-4">$200</td>
              <td class="px-6 py-4 text-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  {" "}
                  {}
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cloth
              </th>
              <td class="px-6 py-4">Expense</td>
              <td class="px-6 py-4">2021-10-10</td>
              <td class="px-6 py-4">$200</td>
              <td class="px-6 py-4 text-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>{" "}
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  {}
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cloth
              </th>
              <td class="px-6 py-4">Expense</td>
              <td class="px-6 py-4">2021-10-10</td>
              <td class="px-6 py-4">$200</td>
              <td class="px-6 py-4 text-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>{" "}
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  {}
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cloth
              </th>
              <td class="px-6 py-4">Expense</td>
              <td class="px-6 py-4">2021-10-10</td>
              <td class="px-6 py-4">$200</td>
              <td class="px-6 py-4 text-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>{" "}
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cloth
              </th>
              <td class="px-6 py-4">Expense</td>
              <td class="px-6 py-4">2021-10-10</td>
              <td class="px-6 py-4">$200</td>
              <td class="px-6 py-4 text-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>{" "}
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cloth
              </th>
              <td class="px-6 py-4">Expense</td>
              <td class="px-6 py-4">2021-10-10</td>
              <td class="px-6 py-4">$200</td>
              <td class="px-6 py-4 text-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>{" "}
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBudget;
