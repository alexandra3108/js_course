import LocationApi from './location_api';
import DOMAPI from './dom';

const location = new LocationAPI();
const dom = new DOMAPI();

dom.showPreloader();
location.getMyIP()
.then(ip => location.getMyLocation(ip))
.then(res => {
dom.SetCoordinates(res);
dom.hidePreloader();
    });

    const input = document.getElementById ('email');
input.addEventListener('change', () => {
        console.log (input.value);
    const /
    }
});
