export default class DOM {
    constructor () {
        this.preloader = document.getElementById('preloader');
        this.coordinates = document.getElementById ('coordinates')
    }
showPreloader () {
    this.preloader.style.display = 'block';
    this.coordinates.style.display = 'none';
}
hidePreloader (){
    this.preloader.style.display = 'none';
    this.coordinates.style.display = 'block';
}
setCoordinates (coordinates) {
    this.coordinates.innerText =JSON.stringify(cordinates)
}
} 


