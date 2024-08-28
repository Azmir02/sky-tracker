"use client";
import { getLocation } from "@/app/api/location/locationutils";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LocationDitactor = () => {
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, searchParams]);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          {loading && (
            <div>
              <Image
                src="/images/weather.gif"
                alt="loading..."
                width={300}
                height={300}
                style={{
                  width1: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <h2
                style={{
                  fontSize: "30px",
                }}
              >
                Getting location...
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LocationDitactor;
