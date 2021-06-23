const AFRAME = window.AFRAME;
//import AFRAME from 'aframe';
AFRAME.registerComponent('peakfinder', {
    init: function () {
        this.loaded = false;
        window.addEventListener('gps-camera-update-position', e => {
            if (this.loaded === false) {
                this._loadPeaks(e.detail.position.longitude, e.detail.position.latitude);
                this.loaded = true;
            }
        });
    },
    _loadPeaks: function (longitude, latitude) {
        const scale = 2000;
        console.log(longitude);
        console.log(latitude);
        const entity = document.createElement('a-text');
        entity.setAttribute('look-at', '[gps-projected-camera]');
        entity.setAttribute('value', 'Hola');
        entity.setAttribute('scale', {
            x: scale,
            y: scale,
            z: scale
        });
        entity.setAttribute('gps-projected-entity-place', {
            latitude: latitude+0.0003,
            longitude: longitude+0.0003
        });
        this.el.appendChild(entity);
    }
});