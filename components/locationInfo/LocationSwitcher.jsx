"use client";
import { getLocationLatLongList } from "@/lib/location-info";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbSwitchVertical } from "react-icons/tb";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocationLists();
  }, []);

  const getLocationLists = async () => {
    const locationsList = await getLocationLatLongList();
    setLocations(locationsList);
  };

  console.log(locations);

  return (
    <div>
      <div
        onClick={() => setShowLocationList((prev) => !prev)}
        className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer relative"
      >
        <TbSwitchVertical color="#fff" size={20} />
        {showLocationList && (
          <div className="w-[280px] h-56 overflow-y-auto p-3 bg-white rounded-md absolute top-12 left-0 z-50">
            <ul>
              {locations.map((info) => (
                <li
                  className="text-sm p-3 rounded-sm hover:bg-slate-400 hover:text-white"
                  key={info.location}
                >
                  <Link
                    href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                  >
                    {info.location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSwitcher;
