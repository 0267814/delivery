import React from 'react';

function Map(){

    return(
        <div class="content-box">
            <iframe id="map" title="Map" src="https://my.atlist.com/map/26a7bdb4-a130-4e37-8c31-76c48fd14555?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="675px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </div>
    );
}

export default Map;