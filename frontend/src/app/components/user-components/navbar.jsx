"use client";

import { Button } from "@/components/ui/button";
import "flowbite";
import { Dropdown } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const currentPath = usePathname();

  useEffect(() => {
    const handlePathChange = () => {
      setActiveLink(currentPath);
    };

    handlePathChange();
    return () => {
      // No need to remove event listeners since we're not using them
    };
  }, [currentPath]);
  return (
    <div className="navbar-container bg-[#00ABCD]">
      <nav className="bg-[#00ABCD] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            </span> */}
          {/* </a> */}
            <img src="/moneymaster.png" className="h-8" alt="img" />

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                
                  href="/user"
                  className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent ${
                    currentPath === '/user' ? " border-b-4 border-blue-700" : "" 
                  }`}
                >
                  DASHBOARD
                </a>
              </li>
              <li>
                <Dropdown
                  style={{ backgroundColor: "rgba(0, 172, 205, 0.25)" }}
                  className=""
                  label="TRANSACTION"
                  dismissOnClick={false}
                >
                  <Dropdown.Item>
                    <a href="/user/transaction">Transaction List</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="/user/transaction/add-transaction">
                      Add Transaction
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </li>
              <li>
                <Dropdown className="" label="BUDGET" dismissOnClick={false}>
                  <Dropdown.Item>
                    <a href="/user/budget/manage-budget">Manage Budget</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="/user/budget/set-budget">Set Budget</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="/user/budget/add-cat">Add Category</a>
                  </Dropdown.Item>
                </Dropdown>
              </li>

              <li>
                <Dropdown className="" label="ACCOUNT" dismissOnClick={false}>
                  <Dropdown.Item>
                    <a href="/user/account/manage-account">Manage Account</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="/user/account/add-account">Add Account</a>
                  </Dropdown.Item>
                </Dropdown>
              </li>
              <li>
              <a
                
                href="/user/report"
                className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent ${
                  currentPath === '/user/report' ? " border-b-4 border-blue-700" : ""
                }`}
              >
                  REPORT
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a href="/">
              <Button className="text-white bg-transparent border-2 shadow-md">
                Sign Out
              </Button>
            </a>
            {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-blue-700">
  Click Me
</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
