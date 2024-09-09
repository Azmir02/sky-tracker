const data = [
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
    { location: "New York City", latitude: 40.7128, longitude: -74.0060 },
    { location: "London", latitude: 51.5074, longitude: -0.1278 },
    { location: "Tokyo", latitude: 35.6762, longitude: 139.6503 },
    { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
    { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
    { location: "Berlin", latitude: 52.5200, longitude: 13.4050 },
    { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
    { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
    { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
    { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
    { location: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
    { location: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
    { location: "Toronto", latitude: 43.651070, longitude: -79.347015 }
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