import NoLocation from '@/components/NoLocation'
import WindComponent from '@/components/WindComponent'
import { getResolveLocation } from '@/lib/location-info'
import React from 'react'

const WindPage = async ({ params: { location }, searchParams: {
    latitude, longitude
} }) => {
    const resolve = await getResolveLocation(location, latitude, longitude)
    if (resolve?.lat && resolve?.lon) {
        return <WindComponent lat={resolve?.lat} lon={resolve?.lon} />
    } else {
        return <NoLocation />
    }

}

export default WindPage