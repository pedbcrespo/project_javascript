import React from 'react';
import Card from 'react-bootstrap/Card';
export default (props) =>{
    return (
    <div style={{marginLeft: "24rem"}}>
        <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
                <Card.Text>
                    {props.text}
                </Card.Text>
                {/* <Card.Link href="#">Ver mais</Card.Link> */}
            </Card.Body>
        </Card>
    </div>
    );
}