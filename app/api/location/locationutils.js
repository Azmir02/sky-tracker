const data = [
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
    { location: "Chittagong", latitude: 22.3475, longitude: 91.8123 },
    { location: "Gazipura", latitude: 23.9889, longitude: 90.3750 },
    { location: "Rajshahi", latitude: 24.3667, longitude: 88.6000 },
    { location: "Khulna", latitude: 22.8167, longitude: 89.5500 },
    { location: "Rangapukur", latitude: 25.5600, longitude: 89.2500 },
    { location: "Narayanganj", latitude: 23.6200, longitude: 90.5000 },
    { location: "Mymensingh", latitude: 24.7539, longitude: 90.4031 },
    { location: "Bogra", latitude: 24.8500, longitude: 89.3667 },
    { location: "Savar", latitude: 23.8500, longitude: 90.2600 },
    { location: "Tungi", latitude: 23.9000, longitude: 90.4100 },
    { location: "Serpentine Stephen Waterfall", latitude: 51.504212, longitude: -0.159335 },
    { location: "Upper Grosvenor St", latitude: 51.510898, longitude: -0.108205 },
    { location: "Westminster", latitude: 51.505108, longitude: -0.125041 }
];


function getLocation() {
    return data
}

function getLocationByName(location) {
    if (!location) return null
    const found = data.find((item) => item.location.toLowerCase() === location.toLowerCase())
    return found || {}
}

export { getLocation, getLocationByName }