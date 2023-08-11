import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function VotingItem(props) {
    const [buttonVarient, setButtonVarient] = useState("secondary")
    const [voteValue, setVoteValue] = useState(false)
    function vote() {
        if (voteValue == true) {
            setVoteValue(false)
            setButtonVarient("secondary")
        }
        else {
            setVoteValue(true)
            setButtonVarient("success")
        }

        props.onVote(voteValue)
    }
    const containerStyle = {
        backgroundColor: '#f0f0f0', // Set your desired background color here
        alignItems: 'center',
        display: 'grid',
        justifyContent: 'center',
        flexDirection: 'column',

    };

    return (
        <Container style={containerStyle}>
            < Row >
                <Col><h1>{props.title}</h1></Col>
            </Row >
            <Row>
                <Col> <h3>{props.description}</h3></Col>
            </Row>
            <Row>
                <Col> <Button variant={buttonVarient} size="lg" onClick={vote}>
                    👍
                </Button>{' '}</Col>
            </Row>
        </Container >

    )
}

export default VotingItem