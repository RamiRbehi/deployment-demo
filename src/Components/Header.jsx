import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import '../CSS/Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Header(props) {

  const classes = useStyles();


    return( <div>
<div id="home-section">
    <Carousel fade  controls={false}>
    <Carousel.Item interval={4000}>
      <div className="item-1"></div>
      <div className="layer"></div>
      <Carousel.Caption>
      <div className="text-area">
      <h5>{props.data ? props.data.quote : "Loading"}</h5>
         <h1>{props.data ? props.data.Title1 : 'Loading'}</h1>
          {/* <p>{props.data ? props.data.Paragraph : "Loading"}</p> */}
          <div className={classes}>
          <Button 
          variant="contained" 
          href="#about" 
          className="btn-custom"><ExpandMoreIcon/></Button>
        </div>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
    <div className="item-2"></div>
    <div className="layer"></div>
      <Carousel.Caption>
      <div className="text-area">
      <h5>{props.data ? props.data.quote : "Loading"}</h5>
         <h1>{props.data ? props.data.Title2 : 'Loading'}</h1>
          {/* <p>{props.data ? props.data.Paragraph : "Loading"}</p> */}
          <div className={classes}>
          <Button 
          variant="contained"
          href="#about" 
          className="btn-custom"><ExpandMoreIcon/></Button>
        </div>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
     
    <div className="item-3"></div>
    <div className="layer"></div>
      <Carousel.Caption>
      <div className="text-area">
      <h5>{props.data ? props.data.quote : "Loading"}</h5>
         <h1>{props.data ? props.data.Title3 : 'Loading'}</h1>
          {/* <p>{props.data ? props.data.Paragraph : "Loading"}</p> */}
          <div className={classes}>
          <Button 
          variant="contained"
          href="#about" 
          className="btn-custom"><ExpandMoreIcon/></Button>
        </div>
      </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>

    </div>
      );
}



export default Header;