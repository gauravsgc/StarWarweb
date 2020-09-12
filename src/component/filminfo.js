import React, { Component } from 'react'
import {Container,Row,Col } from 'react-bootstrap';
export class filminfo extends Component {
    render() {
        return (
            <div>
                {/*this.props.filmdata*/}
                <Container>
                <Row>
               {this.props.filmdata.map((film,index) => < >
                   
                 { index<3 ?
                   <Col md={{ span:3,offset:1}} className="text-white bg-success">
                   {film.split('\n').map((item, index) => {
    return (index === 0) ? item : [<br key={index} />, item]
  })}
                
</Col> :''   }
                   </>)} 
                   </Row>
                   <br/>
                   <br/>
                <Row>
               {this.props.filmdata.map((film,index) => < >
                   
                 { index>=3 ?
                   <Col md={{ span:3,offset:1}} className="text-white bg-success">
                   {film.split('\n').map((item, index) => {
    return (index === 0) ? item : [<br key={index} />, item]
  })}
                
</Col> :''   }
                   </>)} 
                   </Row>
                   </Container>
            </div>
        )
    }
}

export default filminfo
