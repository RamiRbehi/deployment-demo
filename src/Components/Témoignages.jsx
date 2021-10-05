import React, {useState} from "react";
import "../CSS/Témoignages.css"
// import ZazaVideo from "../videos/ZAZA Show.mp4"

// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Témoignages(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div id="temoignages">
        <div className="temoignage-title">
            <h2>CE QUE NOS CLIENTS DISENT</h2>
        </div>
{/* <div className="row">
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
</div> */}


<div className="row">
{props.data 
? props.data.map((d, i) => (
    <div key={`${d.name}-${i}`} className='col-md-4'>
        <div className="temoignage">
            <div className="image">
                <Button onClick={handleOpen} >
                <i className="fas fa-play"></i>
                <img src={d.img} alt="" />
                </Button>

                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <video src={d.vid} className="vid" width="550" height="350" controls  />
                    </Modal>
            </div>
                <div className="meta"> {d.name}</div>
        </div>
    </div>
))
: "Loading"}
</div>

{/* <div>
<Button onClick={handleOpen}>Open modal</Button>

<Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
      <video width="550" height="350" controls>
      
    <source  src={ZazaVideo}
    type="video/mp4" />
</video>
         
      </Modal>
</div> */}

 {/* <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          </Box> */}
    </div>
    )


}


export default Témoignages;