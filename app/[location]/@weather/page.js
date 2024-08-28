import NoLocation from '@/components/NoLocation'
import WeatherComponent from '@/components/WeatherComponent'
import { getResolveLocation } from '@/lib/location-info'
import React from 'react'

const WeatherPage = async ({ params: { location }, searchParams: {
    latitude, longitude
} }) => {
    const resolve = await getResolveLocation(location, latitude, longitude)
    if (resolve?.lat && resolve?.lon) {
        return <WeatherComponent lat={resolve?.lat} lon={resolve?.lon} />
    } else {
        return <NoLocation />
    }
}

export default WeatherPage