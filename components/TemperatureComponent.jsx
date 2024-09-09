import { getTemperatureData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const TemperatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <>
      <Card>
        <div>
          <h4 className="text-base lg:text-lg text-gray-300">
            Current Temperature
          </h4>
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/images/temp.png"
              width={500}
              height={500}
              alt="temp"
              className="w-20 h-20 object-cover"
            />
            <h3 className="text-sm lg:text-xl text-white font-bold mt-2">
              {temp} °C
            </h3>
            <h5 className="text-sm lg:text-base text-slate-200 mt-1">
              Fells Like {feels_like} °C
            </h5>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TemperatureComponent;
