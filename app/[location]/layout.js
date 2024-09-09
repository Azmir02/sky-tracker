import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sky Track",
    description: "Weather App",
};

export default function RootLayout({ children, weather, aqi, temperature, wind }) {
    return (

        <div className={inter.className}>
            <div className="relative w-full min-h-screen lg:h-screen bg-bgImage bg-no-repeat bg-center bg-cover py-8 lg:py-0">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10  flex items-center justify-center h-full">
                    <div className="w-4/5">
                        <div className="grid grid-cols-1 lg:grid-cols-[400px,400px] justify-between mb-3">
                            {children}
                            {aqi}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 items-center">

                            {weather}
                            {temperature}
                            {wind}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
