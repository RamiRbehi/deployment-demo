import React from "react";
import "../CSS/Apropos.css"
import card01 from "../Images/AboutUs/card-01.jpg";
import imgBack1 from "../Images/AboutUs/xv.png";
import CountUp from "react-countup";

function Apropos(props) {


    return <div id="about" >
        <div className="container">
                <div>
                   <div className="about-text">
                        <h2>{props.data ? props.data.titleH2 : "Loading"}</h2>
                        <p className="about-intro">{props.data ? props.data.paragraphH2 : "Loading"}</p>
                   </div> 
                </div>

                
                <div className="row cards">
                <div className="flip-card col-md-4">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={card01} alt="" style={{width: "250px", height: "250px"}} />
                <h5>Planification de service complet</h5>
                </div>
                <div className="flip-card-back">
                <img src={imgBack1} alt="" />
                <h5>Planification de service complet</h5>
                
                    {/* <p className="flip-text">Que vous planifiez une réunion intime ou une célébration somptueuse, 
                    nous vous offrons la tranquillité d'esprit, vous permettant, à vous et à votre famille, 
                    de vous détendre et de chérir chaque moment de votre célébration. 
                    Nous accordons une attention méticuleuse aux moindres détails et traduirons de manière 
                    transparente votre vision du mariage parfait en un événement spectaculaire qui est magnifiquement stylé et vraiment vôtre.</p> */}
                </div>
                </div>
                </div>

                <div className="flip-card col-md-4">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={card01} alt="" style={{width: "250px", height: "250px"}} />
                <h5>Planification de service complet</h5>
                </div>
                <div className="flip-card-back">
                <img src={imgBack1} alt="" />
                <h5>Planification de service complet</h5>
                    {/* <p className="flip-text">Que vous planifiez une réunion intime ou une célébration somptueuse, 
                    nous vous offrons la tranquillité d'esprit, vous permettant, à vous et à votre famille, 
                    de vous détendre et de chérir chaque moment de votre célébration. 
                    Nous accordons une attention méticuleuse aux moindres détails et traduirons de manière 
                    transparente votre vision du mariage parfait en un événement spectaculaire qui est magnifiquement stylé et vraiment vôtre.</p> */}
                </div>
                </div>
                </div>

                <div className="flip-card col-md-4">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={card01} alt="" style={{width: "250px", height: "250px"}} />
                <h5>Planification de service complet</h5>
                </div>
                <div className="flip-card-back">
                <img src={imgBack1} alt="" />
                <h5>Planification de service complet</h5>
                    {/* <p className="flip-text">Que vous planifiez une réunion intime ou une célébration somptueuse, 
                    nous vous offrons la tranquillité d'esprit, vous permettant, à vous et à votre famille, 
                    de vous détendre et de chérir chaque moment de votre célébration. 
                    Nous accordons une attention méticuleuse aux moindres détails et traduirons de manière 
                    transparente votre vision du mariage parfait en un événement spectaculaire qui est magnifiquement stylé et vraiment vôtre.</p> */}
                </div>
                </div>
                </div> 

                </div>
        </div>

<div className="row counter-up">
<div className="col-sm-4 counter-content">
             <CountUp 
             className="counter-wrapper"
             start={0}
             end={1000}
             duration={5}
            delay={3}
            redraw={true}
            suffix=" +"
             /> 
             <div className="counter-title">
             <span>Marriages Parfaites</span>  
             </div>  
              
              </div>

    <div className="col-sm-4 counter-content">
              <CountUp 
            className="counter-wrapper"
             start={0}
             end={4}
             duration={3}
             separator=" "
            delay={3}
            redraw={true}
             /> 
             <div className="counter-title">
              <span>LIEUX DE LUXE</span>
              </div>  
</div>

<div className="col-sm-4 counter-content">
              <CountUp 
              className="counter-wrapper"
             start={0}
             end={520}
             duration={3}
             separator=" "
            delay={3}
            suffix=" +"
            redraw={true}
             /> 
             <div className="counter-title">
              <span>couples heureux</span> 
              </div>
        </div>
              </div>



    </div>
}




export default Apropos;