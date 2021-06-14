import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button } from 'react-bootstrap';




class FavDigimon extends React.Component {
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
                        <Button variant="danger" onClick={()=> this.props.deleteFav(this.props.index)}>Delete</Button>
                        <Button variant="success" onClick={()=> this.props.showForm(this.props.index)}>Update</Button>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default FavDigimon;