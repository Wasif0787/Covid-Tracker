import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const DashBoard = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ["repoDataDash"],
        queryFn: () =>
            fetch("https://disease.sh/v3/covid-19/all").then((res) =>
                res.json()
            ),
    });

    // if (loading) return <Lottie options={defaultOptions1} height={200} width={200} />;
    // if (loading2) return <Lottie options={defaultOptions2} height={100} width={100} />;

    if (isPending) return (
        <div className="flex justify-center">
            <Spinner />
        </div>
    )

    if (error) return <>"An error has occurred: " + {error.message}</>;

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg">Global Cases</h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12'>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Total Cases
                        </h5>
                        <h6 className="text-slate-300">{data.cases}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Today Cases
                        </h5>
                        <h6 className="text-slate-300">{data.todayCases}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Total Deaths
                        </h5>
                        <h6 className="text-slate-300">{data.deaths}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Today Deaths
                        </h5>
                        <h6 className="text-slate-300">{data.todayDeaths}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Recovered
                        </h5>
                        <h6 className="text-slate-300">{data.recovered}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Today Recovered
                        </h5>
                        <h6 className="text-slate-300">{data.todayRecovered}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Active Cases
                        </h5>
                        <h6 className="text-slate-300">{data.active}</h6>
                    </div>
                </div>
                <div className={`relative border border-gray-200 rounded-lg shadow md:max-w-xl bg-gray-500 dark:border-gray-700   hover:bg-opacity-75 transition-colors duration-300 ease-in-out `}>
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight break-words overflow-hidden">
                            Affected Countries
                        </h5>
                        <h6 className="text-slate-300">{data.affectedCountries}</h6>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default DashBoard