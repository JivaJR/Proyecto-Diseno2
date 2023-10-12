import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import redcircle from '/redcircle.png'
const taxiicon = '/taxiIcon.png'
const flagicon = '/flag.png'
import start from '/start.png'

export const MarkerIcon = L.icon({
    iconUrl: icon,
    iconSize:[32,42],
    iconAnchor:[16,42],
    shadowUrl: iconShadow
});

export const TaxiIcon = L.icon({
    iconUrl: taxiicon,
    iconSize:[32,42],
    iconAnchor:[16,42],
});

export const FlagIcon = L.icon({
    iconUrl: flagicon,
    iconSize:[10,12],
    iconAnchor:[5,12],
});

export const CircleIcon = L.icon({
    iconUrl: redcircle,
    iconSize:[10,10],
});

export const StartIcon = L.icon({
    iconUrl : start,
    iconSize: [10,10]
})