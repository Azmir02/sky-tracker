import LocationDitactor from "@/components/LocationDitactor";
import { getLocation } from "./api/location/locationutils";

export default function Home() {
  return (
    <main>
      <LocationDitactor />
    </main>
  );
}
