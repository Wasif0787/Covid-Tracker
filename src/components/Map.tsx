import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import { createCustomIcon } from "./CreateCustomIcon";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


interface CountryData {
    country: string;
    countryInfo: CountryInfo;
    active: number;
    recovered: number;
    deaths: number;
}
interface CountryInfo {
    lat: number;
    long: number;
}



function Map() {

    const { isPending, error, data } = useQuery({
        queryKey: ["repoDataMap"],
        queryFn: () =>
            fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
                res.json()
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
        <>
            <div className="flex justify-center items-center h-96">
                <MapContainer
                    className="h-full w-screen"
                    center={[data[94].countryInfo.lat, data[94].countryInfo.long]}
                    zoom={4}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {data.map((elem: CountryData) => (
                        <Marker
                            icon={createCustomIcon}
                            key={elem.country}
                            position={[elem.countryInfo.lat, elem.countryInfo.long]}
                        >
                            <Popup>
                                <div>
                                    <span className="font-bold">Country: </span>
                                    {elem.country}
                                </div>
                                <div>
                                    <span className="font-bold">Acitve Cases: </span>{" "}
                                    {elem.active}
                                </div>
                                <div>
                                    <span className="font-bold">Recovered Cases: </span>{" "}
                                    {elem.recovered}
                                </div>
                                <div>
                                    <span className="font-bold">Deaths: </span> {elem.deaths}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );
}

export default Map;