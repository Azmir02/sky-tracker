import NoLocation from '@/components/NoLocation'
import TemperatureComponent from '@/components/TemperatureComponent'
import { getResolveLocation } from '@/lib/location-info'
import React from 'react'

const TemperaturePage = async ({ params: { location }, searchParams: {
    latitude, longitude
} }) => {
    const resolve = await getResolveLocation(location, latitude, longitude)
    if (resolve?.lat && resolve?.lon) {
        return <TemperatureComponent lat={resolve?.lat} lon={resolve?.lon} />
    } else {
        return <NoLocation />
    }

}

export default TemperaturePage