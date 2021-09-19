import React from "react";
import "../CSS/Contact.css";

function GoogleMap() {
    return  <div id="mapouter">
    <h3>Trouve Nous</h3>
    <div class="gmap_canvas">
    <iframe id="gmap_canvas" title="queenParkMap" 
    src="https://maps.google.com/maps?q=Mornag%20queen%20park&t=k&z=15&ie=UTF8&iwloc=&output=embed">
    </iframe>
    </div>
    </div>
};

export default GoogleMap;