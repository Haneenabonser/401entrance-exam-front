import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';




class Update extends React.Component {
    render() {
        return (
            <>
                <Form onSubmit= {this.props.updateForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={this.props.name} onChange={this.props.nameHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control value={this.props.img} onChange={this.props.imgHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Level</Form.Label>
                        <Form.Control value={this.props.level} onChange={this.props.levelHandler}/>
                    </Form.Group>
                  
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>


            </>
        )
    }
}

export default Update;
