import React from "react";
import Container from "react-bootstrap/Container";

function Connect(){
    return(
        <Container id="connect">
            <h1 className="savers_h1">
                We &hearts; new friends!
            </h1>
            <div  id="icon" >
            <i className="fa fa-facebook-official " aria-hidden="true"></i>
            <i className="fa fa-instagram " aria-hidden="true"></i>
            <i className="fa fa-twitter " aria-hidden="true"></i>
            </div>
            <div>
            <p className="contact">
                Email: support@couchpotato.com
                </p>
            </div>
            <div>
            <p className="contact">
                Phone: +91 6376035607
                </p>
            </div>
        </Container>
    );
}

export default Connect;