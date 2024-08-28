import LocationDitactor from "@/components/LocationDitactor";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense>
        <LocationDitactor />
      </Suspense>
    </main>
  );
}
