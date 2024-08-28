import { getLocation } from "./locationutils";

export async function GET() {
    const locationsData = getLocation()

    return Response.json(locationsData)
}