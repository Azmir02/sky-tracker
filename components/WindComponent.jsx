import { getWindData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <>
      <Card>
        <div>
          <h4 className="text-base lg:text-lg text-gray-300">Current Wind </h4>
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/images/wind.png"
              width={500}
              height={500}
              alt="wind"
              className="w-20 h-20 object-cover"
            />
            <h3 className="text-sm lg:text-xl text-white font-bold mt-2">
              {speed} meter/sec
            </h3>
            <h5 className="text-sm lg:text-base text-slate-200 mt-1">
              {deg} degrees
            </h5>
          </div>
        </div>
      </Card>
    </>
  );
};

export default WindComponent;
