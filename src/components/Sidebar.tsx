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
    return (

        <div>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                                e.preventDefault()
                                setShowMap(false); // Set other states to false
                                setShowGraph(false); // Set other states to false
                                setShowDashboard(true);
                            }} href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-slate-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-slate-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3 hover:text-slate-700">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                                e.preventDefault()
                                setShowMap(false); // Set other states to false
                                setShowGraph(true);
                                setShowDashboard(false); // Set other states to false
                            }} href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-slate-700 group">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg> */}
                                <img className="flex-shrink-0 w-6 h-6" src="/graph.svg" alt="" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Graph</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                                e.preventDefault()
                                setShowMap(true);
                                setShowGraph(false); // Set other states to false
                                setShowDashboard(false); // Set other states to false
                            }} href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-100 hover:text-slate-700 group">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878 c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212 c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084 c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358 c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307 C198.98,120.938,175.559,144.358,146.667,144.358z" />
                                </svg> */}
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
    )
}

export default Sidebar