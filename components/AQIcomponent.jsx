import React from "react";
import { getAQIData } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";

const AQIcomponent = async ({ lat, lon }) => {
  const { main, components } = await getAQIData(lat, lon);

  const AQIrating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 2:
        return "Poor";
      case 2:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  return (
    <div>
      <Card>
        <div>
          <h4 className="text-lg text-gray-300">Air Pollution & Quality</h4>
          <ul>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Air quality index</span>
              </div>
              <span className="text-sm text-white">{AQIrating(main?.aqi)}</span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Carbon Monoxide </span>
              </div>
              <span className="text-sm text-white">
                {components.co} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Nitrogen dioxide</span>
              </div>
              <span className="text-sm text-white">
                {components.no2} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Nitrogen monoxide</span>
              </div>
              <span className="text-sm text-white">
                {components.no} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Ozone</span>
              </div>
              <span className="text-sm text-white">
                {components.o3} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Sulphur dioxide</span>
              </div>
              <span className="text-sm text-white">
                {components.so2} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">
                  Fine particles matter
                </span>
              </div>
              <span className="text-sm text-white">
                {components.pm2_5} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">
                  Coarse particulate matter
                </span>
              </div>
              <span className="text-sm text-white">
                {components.pm10} &micro;g/m<sup>3</sup>
              </span>
            </li>
            <li className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/air.png"
                  width={500}
                  height={500}
                  alt="air"
                  className="w-7 h-7 object-cover"
                />
                <span className="text-sm text-white">Ammonia</span>
              </div>
              <span className="text-sm text-white">
                {components.nh3} &micro;g/m<sup>3</sup>
              </span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default AQIcomponent;
