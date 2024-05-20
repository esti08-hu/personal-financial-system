import React from "react";

const Transaction = () => {
  return (
    <div className="transaction-containe h-5/6">
      <div className="container h-5/6">
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-xl font-bold text-[#22577A]">Transactions</h1>
         
          <hr className="h-1 bg-gray-400 w-full" />
        </div>
        <div class="relative h-5/6 overflow-auto mr-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Transaction Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Income</td>
                <td class="px-6 py-4">1000.0</td>
                <td class="px-6 py-4">Gift Received</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Income</td>
                <td class="px-6 py-4">1000.0</td>
                <td class="px-6 py-4">Gift Received</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Expense</td>
                <td class="px-6 py-4">1.0</td>
                <td class="px-6 py-4">Coffee</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Expense</td>
                <td class="px-6 py-4">1.0</td>
                <td class="px-6 py-4">Coffee</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Expense</td>
                <td class="px-6 py-4">1.0</td>
                <td class="px-6 py-4">Coffee</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Income</td>
                <td class="px-6 py-4">1000.0</td>
                <td class="px-6 py-4">Gift Received</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Income</td>
                <td class="px-6 py-4">1000.0</td>
                <td class="px-6 py-4">Gift Received</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Expense</td>
                <td class="px-6 py-4">1.0</td>
                <td class="px-6 py-4">Coffee</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Expense</td>
                <td class="px-6 py-4">1.0</td>
                <td class="px-6 py-4">Coffee</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2024-09-01
                </th>
                <td class="px-6 py-4">Expense</td>
                <td class="px-6 py-4">1.0</td>
                <td class="px-6 py-4">Coffee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
