import { getLocationByName } from "../locationutils";

export async function GET(request, { params }) {
    const locationNameData = getLocationByName(params?.name)

    return Response.json(locationNameData)
}