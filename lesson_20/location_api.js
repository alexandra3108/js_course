export default class LocationAPI {
    getMyIP() {
        return fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(obj => obj.ip);
    }
getMyLocation (ip) {
    return fetch ('http://ip-api.com/json/${ip}')
    .then(res => res.json())
    .then(ob) => ({lat: obj.lat, lon: obj.lon}));
}
}