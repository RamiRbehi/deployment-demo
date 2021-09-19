import React from "react";
import "../CSS/Témoignages.css"

function Témoignages(props) {

    return (
        <div id="temoignages">
        <div className="temoignage-title">
            <h2>CE QUE NOS CLIENTS DISENT</h2>
        </div>
<div className="row">
{props.data 
? props.data.map((d, i) => (
    <div key={`${d.name}-${i}`} className='col-md-4'>
        <div className="temoignage">
            <div className="image">
                <img src={d.img} alt="" />
            </div>
            <div className="content">
                <p>"{d.text}"</p>
                <div className="meta"> - {d.name}</div>
            </div>
        </div>
    </div>
))
: "Loading"}
</div>
    </div>
    )


}


export default Témoignages;