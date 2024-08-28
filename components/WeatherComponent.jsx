import { getWeatherData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const WeatherComponent = async ({ lat, lon }) => {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card>
      <div>
        <h4 className="text-lg text-gray-300">Current Weather</h4>
        <div className="flex items-center justify-center flex-col">
          <Image
            src="/images/weather.png"
            width={500}
            height={500}
            alt="weather"
            className="w-20 h-20 object-cover"
          />
          <h3 className="text-xl text-white font-bold mt-2">{main}</h3>
          <h5 className="text-base text-slate-200 mt-1">{description} </h5>
        </div>
      </div>
    </Card>
  );
};

export default WeatherComponent;
