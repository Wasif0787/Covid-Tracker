import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Map from "../components/Map";
import Graph from "../components/Graph";
import DashBoard from "../components/DashBoard";
const queryClient = new QueryClient();

const Chart = () => {
    const [showMap, setShowMap] = useState(true);
    const [showGraph, setShowGraph] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);

    return (
        <div className='min-h-screen chart-body'>
            <div className="w-full flex flex-col items-center">
                <div className=" rounded-md shadow-md pt-2 gap-0 md:gap-3 flex flex-row  text-white">
                    <button
                        className={`text-xl shadow-md  md:text-2xl font-semibold py-2 px-4 rounded-md focus:outline-none ${showMap ? 'bg-[#515151] text-white' : 'hover:bg-gray-300'}`}
                        onClick={() => {
                            setShowMap(true);
                            setShowGraph(false); // Set other states to false
                            setShowDashboard(false); // Set other states to false
                        }}
                    >
                        Maps
                    </button>
                    <button
                        className={`text-xl shadow-md  md:text-2xl font-semibold py-2 px-4 rounded-md focus:outline-none ${showGraph ? 'bg-[#515151] text-white' : 'hover:bg-gray-300'}`}
                        onClick={() => {
                            setShowMap(false); // Set other states to false
                            setShowGraph(true);
                            setShowDashboard(false); // Set other states to false
                        }}
                    >
                        Graph
                    </button>
                    <button
                        className={`text-xl  shadow-md  md:text-2xl font-semibold py-2 px-4 rounded-md focus:outline-none ${showDashboard ? 'bg-[#515151] text-white' : 'hover:bg-gray-300'}`}
                        onClick={() => {
                            setShowMap(false); // Set other states to false
                            setShowGraph(false); // Set other states to false
                            setShowDashboard(true);
                        }}
                    >
                        Dashboard
                    </button>
                </div>
            </div>
            <QueryClientProvider client={queryClient}>
                <div className="p-4">
                    <div className=" pb-4">
                        {showMap && <Map />}
                        {showGraph && <Graph />}
                        {showDashboard && <DashBoard />}
                    </div>
                </div>
            </QueryClientProvider>
        </div>
    )
}

export default Chart;
