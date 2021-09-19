import React, {useState} from "react";
import GoogleMap from "./GoogleMap";
import Footer from "./Footer";
import "../CSS/Contact.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import emailjs from "emailjs-com";
import flowerBG from "../Images/bg/contact.png"


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const useStylesTextArea = makeStyles((theme) => ({
    rootTextArea: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '85ch',
      },
    },
  }));

  const useStylesButton = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #F09819 30%, #EDDE5D 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(185, 179, 57, .2)',
      color: '#fff',
      height: 48,
      padding: '0 30px',
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
    },
    }});

function Contact(props) {
    const classes = useStyles();
    const classesTextArea = useStylesTextArea();
    const classesButton = useStylesButton();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact((prevState) => setContact({...prevState, [name]: value}))
        // console.log(name, email, subject, message);
    }

    const deleteState = () => setContact({...contact})

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, subject, message);
        emailjs.sendForm('service_75gih08', 'template_ako3yn8', e.target, 'user_cN3H6MHFmyg4wc1jYdISe')
        .then(
            (result) => {
                console.log(result.text);
                deleteState()
            },
            (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

   

    return <div id="contact">
        <div className="container">
        <img src={flowerBG} alt="" className="flowerBG" />
        <div className="row">
            <div className="col-md-7">
                <div className="row">
                    <div className="contact-title">
                        <h2>Contact</h2>
                        <p>Veuillez remplir le formulaire ci-dessous pour nous envoyer un e-mail et nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                    <form name={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField type="text"
                                     label="Votre nom et prénom"
                                     name="name"
                                     id="standard-basic"
                                      className="form-control"
                                      variant="filled"
                                      onChange={handleChange}
                                       />
                                       <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField type="email"
                                    id="standard-basic"
                                    name="email"
                                    className="form-control"
                                    label="Votre Email"
                                    variant="filled"
                                    onChange={handleChange}
                                     />
                                     <p className="help-block text-danger"></p>
                                </div>
                            </div> 
                            <div className="col-md">
                                <div className="form-group">
                                    <TextField type="text"
                                     name="subject"
                                     id="outlined-basic"
                                    label="Votre Sujet"
                                    variant="filled"
                                    className="form-control"
                                    onChange={handleChange}
                                    spellcheck="true"
                                    />
                                    <p className="help-block text-danger"></p>
                                 </div>
                            </div>
                        </div>
                        <div className={classesTextArea.root}>
                        <div className="form-group">
                            <TextField name="message"
                            id="standard-textarea"
                            rows={4}
                            multiline
                            label="Votre Message"
                            fullWidth
                            margin="normal"
                            variant="filled"
                            className="form-control"
                            onChange={handleChange}
                            spellcheck="true"
                            />
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div id="success" className="submit-button">
                        <Button type="submit"
                        className={classesButton.root}
                        fullWidth
                        >
                            Envoyer le message
                        </Button> </div>
                    </form>
                </div>
            </div>

            
            <div className="col-md-4 col-md-offset-1 info">
                <div className="item">
                    <h3>Contact Info</h3>
                    <p>
                        <span>
                            <i className="fa fa-map-marker"></i> Adresse
                        </span>{" "}
                        {props.data ? props.data.address : "Loading"}
                    </p>
                </div>
                
                <div className="item">
                    <p>
                        <span>
                            <i className="fa fa-phone"></i> Phone
                        </span>{" "}
                        {props.data ? props.data.phone : "Loading"}
                    </p>
                </div>
                <div className="item">
                    <p>
                        <span>
                            <i className="fa fa-envelope"></i> Email
                        </span>{" "}
                        {props.data ? props.data.email : "Loading"}
                    </p>
                </div>
                <div className="col-md-12">
                <div className="row">
                <div className="social-media">
                <ul>
                    <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                        <i className="fab fa-facebook fa-3x"></i>
                    </a>
                    </li>
                    <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                        <i className="fab fa-instagram fa-3x"></i>
                    </a>
                    </li>
                </ul>
                </div>
                </div>
                </div>
                </div>
            </div>

          
        </div>
        
       

        <GoogleMap />
            <Footer /> 


    </div>
}

export default Contact;