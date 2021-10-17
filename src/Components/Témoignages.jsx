import React, {useState} from "react";
import "../CSS/Témoignages.css"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


function Témoignages(props) {
    console.log(props.data);

    const [open, setOpen] = useState({});

    const shoowVideoModal =  video => {
        setOpen({ ...open, [video]: true});
    }

    const handleCancelVideoModal =  video => {
        setOpen({...open, [video]: false});
    };

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
                <Button onClick={() => shoowVideoModal(d.vid)} >
                <i className="fas fa-play"></i>
                <img src={d.img} alt="" />
                </Button>

                    <Modal
                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                        keepMounted
                        open={open[d.vid]}
                        onClose={() => handleCancelVideoModal(d.vid)}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >   
                        <video  
                         className="vid" onPause
                        width="550" height="350" controls
                        >
                            <source src={d.vid} type="video/mp4" />
                        </video>
                            
                        
                    </Modal>
            </div>
                <div className="meta"> {d.name}</div>
        </div>
    </div>
))
: "Loading"}
</div>
    </div>
    )


}


export default Témoignages;