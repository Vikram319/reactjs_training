import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import { CardBody, Container, Row, Col, Card, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
let LoginComponent = ({ username, password, setUsername, setPassword, logValues }) => {
    const setUsernameWrapper = (evt) => {
        console.log(evt.target.value)
        setUsername(evt.target.value)
    };
    const setPasswordWrapper = (evt) => {
        setPassword(evt.target.value)
        console.log(evt.target.value)
    };
    return (
        <Container>
            <Row>
                <Col className="m-auto">
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail" value={username} >Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" onChange={setUsernameWrapper}></Input>
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword" value={password}>Password</Label>
                                    <Input type="password" name="password" id="examplePassword" onChange={setPasswordWrapper}></Input>
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                </FormGroup>
                                <Button onClick={logValues} >Login</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginComponent;

LoginComponent.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    logValues: PropTypes.func.isRequired
}

// LoginComponent.defaultProps = {
//     username: 'vikram'
// }