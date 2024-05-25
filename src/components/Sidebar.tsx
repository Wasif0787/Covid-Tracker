import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Graph from "./Graph";
import DashBoard from "./DashBoard";
import Map from "./Map";
import 'flowbite';

const queryClient = new QueryClient();

const Sidebar = () => {
    const [showMap, setShowMap] = useState(false);
    const [showGraph, setShowGraph] = useState(false);
    const [showDashboard, setShowDashboard] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMap = () => {
        setShowMap(true);
        setShowGraph(false);
        setShowDashboard(false);
        setIsSidebarOpen(false); // Close sidebar after selecting an option
    };

    const toggleGraph = () => {
        setShowMap(false);
        setShowGraph(true);
        setShowDashboard(false);
        setIsSidebarOpen(false); // Close sidebar after selecting an option
    };

    const toggleDashboard = () => {
        setShowMap(false);
        setShowGraph(false);
        setShowDashboard(true);
        setIsSidebarOpen(false); // Close sidebar after selecting an option
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className={`absolute top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"}`} aria-label="Sidebar">
                <div className="h-full px-3 py-4  bg-gray-800">
                    <button onClick={closeSidebar} className="absolute top-0 right-0 m-4 text-gray-400 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a onClick={toggleDashboard} href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-slate-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-slate-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3 hover:text-slate-700">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={toggleGraph} href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-slate-700 group">
                                <img className="flex-shrink-0 w-6 h-6" src="/graph.svg" alt="" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Graph</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={toggleMap} href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-slate-700 group">
                                <img className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" src="/map.svg" alt="" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Maps</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <QueryClientProvider client={queryClient}>
                <div className="flex">
                    <div className="p-4 sm:ml-64 md:pt-10 flex-grow z-0">
                        {showMap && <Map />}
                        {showGraph && <Graph />}
                        {showDashboard && <DashBoard />}
                    </div>
                </div>
            </QueryClientProvider>
        </div>
    );
}

export default Sidebar;
``
