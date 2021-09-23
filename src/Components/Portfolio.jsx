import React from "react";
import "../CSS/Portfolio.css";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';



function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;}

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      justifyContent: 'space-around',
    },
    imageList: {
      width: 1000,
      height: 400,
      paddingTop: 100,
      overflow: 'hidden',
      position: 'relative',
    }
  }));

function Portfolio(props) {
  const classes = useStyles();

    return <div id="portfolio" className={classes.root}>
    <div className="portfolio-title">
                <h2>{props.data ? props.data.portfolioTitle : "Loading"}</h2>
                <p>{props.data ? props.data.portfolioDesc : "Loading"}</p>
            </div>

<ImageList
      sx={{ overflowY: "scroll" }}
      variant="quilted"
      cols={3}
      // rowHeight={161}
      className={classes.imageList}
      gap="5"
    >
      {props.data ?
        props.data.itemData.map((item, id) => (
        <ImageListItem key={`${item.name}-${id}`} cols={item.cols || 1} className="image-small">
        <div className="image-large">
          <a href={item.imgB} 
          >
          <div className="hover-text">
              <p>{item.imgDesc}</p>
              </div>
          <img
            srcSet={srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
          />
          </a>
         
          </div>
          
        </ImageListItem>
      )): "Loading"}
      
    </ImageList>
    </div>
}

    export default Portfolio;