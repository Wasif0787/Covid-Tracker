import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Checkbox from "@mui/material/Checkbox";


const Graph = () => {
    const [casesShow, setCasesShow] = useState(true);
    const [recoveredShow, setRecoveredShow] = useState(false);
    const [deathsShow, setDeathsShow] = useState(false);



    const { isPending, error, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all#").then(
                (res) => res.json()
            ),
    });



    // if (loading) return <Lottie options={defaultOptions1} height={200} width={200} />;
    // if (loading2) return <Lottie options={defaultOptions2} height={100} width={100} />;

    if (isPending) return <>
        {/* <Lottie options={defaultOptions2} height={100} width={100} /> */}
        <h1>Loading</h1>
    </>;
    if (error) return <>"An error has occurred: " + {error.message}</>;
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-around">
                <div className="flex justify-center text-center items-center">
                    <h1 className=" text-lg font-bold text-white">
                        COVID-19 Cases Fluctuations
                    </h1>
                </div>
            </div>
            <div className="bg-slate-300">
                <LineChart
                    height={500}
                    margin={{ left: 100, right: 30, top: 70 }}
                    grid={{ horizontal: true }}
                    series={[
                        casesShow
                            ? {
                                data: Object.values(data.cases),
                                label: "Cases",
                                color: "blue",
                            }
                            : { data: [] },
                        deathsShow
                            ? {
                                data: Object.values(data.deaths),
                                label: "Deaths",
                                color: "red",
                            }
                            : { data: [] },
                        recoveredShow
                            ? {
                                data: Object.values(data.recovered),
                                label: "Recovered",
                                color: "green",
                            }
                            : { data: [] },
                    ]}
                    xAxis={[{ scaleType: "point", data: Object.keys(data.cases) }]}
                />
            </div>

            <div className="flex justify-center text-center pb-4 font-semibold gap-4 text-white">
                <div>
                    Cases
                    <Checkbox sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}
                        checked={casesShow}
                        onChange={() => {
                            setCasesShow(casesShow ? false : true);
                        }}
                    />
                </div>
                <div>
                    Deaths
                    <Checkbox sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    }}
                        checked={deathsShow}
                        onChange={() => {
                            setDeathsShow(deathsShow ? false : true);
                        }}
                    />
                </div>
                <div>
                    Recovered
                    {/* <input className={`appearance-none border border-white hover:cursor-pointer bg-transparent rounded-sm p-2`} type="checkbox" name="" id="" checked={recoveredShow} onChange={() => {
                        setRecoveredShow(recoveredShow ? false : true);
                    }} /> */}
                    <Checkbox
                        sx={{
                            color: 'white',
                            '&.Mui-checked': {
                                color: 'white',
                            },
                        }}
                        checked={recoveredShow}
                        onChange={() => {
                            setRecoveredShow(recoveredShow ? false : true);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Graph