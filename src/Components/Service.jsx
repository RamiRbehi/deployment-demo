import React from "react";
import "../CSS/Service.css"

function Service(props) {
    console.log(props.data);
return <div id="services" className="text-center">
            <div className="service-title">
                <h2>{props.data ? props.data.serviceH2 : "Loading"}</h2>
                <p>{props.data ? props.data.serviceIntro : "Loading"}</p>
                </div>
            <div className="row services-types">
                {props.data ? 
                props.data.servicesList.map((obj, id) => (
                    <div key={id} className="col-md-4">
                        <i className={obj.icon}></i>
                        <div className="service-desc">
                            <h3>{obj.name}</h3>
                            <p>{obj.text}</p>
                        </div>
                    </div>
                ))
                : "Loading"}
            </div>
        </div>
}
export default Service;