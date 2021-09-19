import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUp';
import "../CSS/ScrollTopArrow.css";



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        borderRadius: 100,
        backgroundColor: "white",
        width: 40,
        height: 30,
      },
    },
  }));


function ScrollTopArrow() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", checkScrollTop)
        return function cleanUp() {
            window.removeEventListener("scroll", checkScrollTop)
        }
    })
    
    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    };

    const classes = useStyles();
    return <div className={classes.root}>
    <KeyboardArrowUpRoundedIcon
    className="back-to-top" 
    onClick={scrollTop}
    style={{height: 40, display: showScroll ? "flex" : "none"}}
    item  xs={4}></KeyboardArrowUpRoundedIcon>
    </div>
}

export default ScrollTopArrow;