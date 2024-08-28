
import LocationInfo from '@/components/locationInfo/LocationInfo'
import React from 'react'

const page = ({ params: { location }, searchParams: {
    latitude, longitude
} }) => {
    return <LocationInfo lat={latitude} lon={longitude} />
}

export default page