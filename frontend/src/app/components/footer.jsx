import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 172, 205, 0.25)" }}
      className="footer-container bg-[#00ABCD] mt-20"
    >
      <div className="container">
        <table class="w-full border-collapse">
          <thead className="border-b-4 rounded-lg border-[#dbdee0]">
            <tr>
              <th class="px-4 py-2 font-bold w-1/3">
                <img src="/moneymaster.png" />
              </th>
              <th class="px-4 py-2 font-bold text-[#22577A]">Navigation</th>
              <th class="px-4 py-2 font-bold text-[#00ABCD]">Contact</th>
              <th class="px-4 py-2 font-bold text-[#00ABCD]">
                Get the latest Information
              </th>
            </tr>
          </thead>
          <tbody className="text-[#857E7E]">
            <tr>
              <td class="px-4 py-2">
                Physiological respiration involves the mechanisms that ensure
                that the composition of the functional
              </td>
              <td class="px-4 py-2">
                <ul class="list-disc pl-6">
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>FAQs</li>
                </ul>
              </td>
              <td class="px-4 py-2">
                <ul class="list-disc pl-6">
                  <li>+(406) 555-0120</li>
                  <li>+(480) 555-0103</li>
                  <li>thuhang.nute@gmail.com</li>
                  <li>Abstergo Ltd.</li>
                </ul>
              </td>
              <td class="px-4 py-2 relative">
                <div class="flex items-center border bg-white rounded-full pl-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    class="w-full focus:ring-blue-500 appearance-none focus:outline-none"
                  />
                  <button
                    type="submit"
                    class="ml-2 text-gray-500 p-4 bg-[#22577A] hover:text-gray-700 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
                  >
                    <img src="/images/send.png" w={40} alt="send imag" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-10 mb-5">
          <ul className="flex justify-end gap-6">
            <li>
              <img src="/images/facebook.png" />
            </li>
            <li>
              <img src="/images/github.png" />
            </li>
            <li>
              <img src="/images/twitter.png" />
            </li>
            <li>
              <img src="/images/linkedin.png" />
            </li>
          </ul>
        </div>

        <div class="bg-transparent rounded-lg dark:bg-gray-800 pb-5 pt-5">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 <span class="hover:underline">Estio</span>. All Rights
              Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <span>User Terms & Conditions </span>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <span> Privacy & Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;