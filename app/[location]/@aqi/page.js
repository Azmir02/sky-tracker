import AQIcomponent from '@/components/AQIcomponent'
import NoLocation from '@/components/NoLocation'
import { getResolveLocation } from '@/lib/location-info'
import React from 'react'

const AqiPage = async ({ params: { location }, searchParams: {
    latitude, longitude
} }) => {
    const resolve = await getResolveLocation(location, latitude, longitude)
    if (resolve?.lat && resolve?.lon) {
        return <AQIcomponent lat={resolve?.lat} lon={resolve?.lon} />
    } else {
        return <NoLocation />
    }

}

export default AqiPage