export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message);

    }
}

export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/location`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const getLocationLatLong = async (locationName) => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/location/${locationName}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const getResolveLocation = async (location, lat, lon) => {
    if (lat & lon) {
        return { lat, lon }
    }
    const locationLatLon = await getLocationLatLong(location)

    if (locationLatLon.latitude && locationLatLon.longitude) {
        const lat = locationLatLon.latitude
        const lon = locationLatLon.longitude

        return { lat, lon }
    }
}