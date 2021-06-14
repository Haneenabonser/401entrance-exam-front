import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button } from 'react-bootstrap';




class Digimon extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' , display: 'inline-block' }}>
                    <Card.Img variant="top" src={this.props.digimon.img}/>
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Text>
                        {this.props.digimon.level}
                        </Card.Text>
                        <Button variant="dark" onClick={()=> this.props.addToFav(this.props.digimon)}>Add to Favorite</Button>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default Digimon;
