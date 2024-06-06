// https://tailwindcomponents.com/component/tailwind-css-admin-dashboard-layout
// https://gist.github.com/Klerith/3949f1c8b884d7101e378dfb668f0f3a
'use client'
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert", href: "alert" },
  { name: "button", href: "button" },
  { name: "alert-dialog", href: "alert-dialog" },
  { name: "dialog", href: "dialog" },
  { name: "badge", href: "badge" },
].sort((a, b) => a.name.localeCompare(b.name));
//aqui funcion para acomodarlo alfabeticamente localcompare con sort



export default function DashboardLayout({ children,}: { children: React.ReactNode;}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };




  return (
<>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleSidebar}
                aria-expanded={sidebarOpen}
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                {sidebarOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
              <a
                href="#"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-6 w-6"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                </svg>
                <span className="self-center whitespace-nowrap ml-2">
                  {" "}
                  Shadcn/ui
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                J.CH
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex overflow-hidden bg-white pt-16">
        <aside
          id="sidebar"
          className={`fixed top-0 left-0 z-20 w-64 h-full transition-transform transform bg-white border-r border-gray-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:flex-shrink-0 lg:static lg:w-64`}
          aria-label="Sidebar"
        >
          <div className="flex-1 h-full flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <div
          className={`bg-gray-900 opacity-50 fixed inset-0 z-10 lg:hidden ${
            sidebarOpen ? "block" : "hidden"
          }`}
          onClick={toggleSidebar}
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="w-full min-h-[calc(100vh-230px)]">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
            <div className="text-sm font-normal text-gray-500">
              © 2023 <a href="#" className="hover:underline">Shadcn/ui</a>. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </>

  );
}
