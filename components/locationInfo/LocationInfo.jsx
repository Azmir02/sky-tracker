import React from "react";
import { getLocationData } from "@/lib/location-info";
import LocationDate from "./LocationDate";
import LocationSwitcher from "./LocationSwitcher";

const LocationInfo = async ({ lat, lon }) => {
  const locationInfo = await getLocationData(lat, lon);
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <h1 className="text-3xl text-white font-bold">
          {locationInfo?.continent}
        </h1>
        <LocationSwitcher />
      </div>
      <h3 className="text-base text-white mt-2">
        {locationInfo?.countryName} | {locationInfo?.city}
      </h3>
      <div className="text-sm text-white mt-3">
        <LocationDate />
      </div>
    </div>
  );
};

export default LocationInfo;
