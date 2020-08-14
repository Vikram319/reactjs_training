import React from 'react';
// import LoginContainer from '../containers/LoginContainer';
import { CardBody, Container, Row, Col, Card, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
let LoginComponent = ({ username, password, setUsername, setPassword, logValues, schema }) => {
    const setUsernameWrapper = (evt) => {
        console.log(evt.target.value)
        setUsername(evt.target.value)
    };
    const setPasswordWrapper = (evt) => {
        setPassword(evt.target.value)
        console.log(evt.target.value)
    };
    const showError = () => {
        schema.validate({username: username, password: password}, {abortEarly: false})
            .catch( (err) => {
                console.log(err.errors[0]);
            });
    }
    return (
        <>
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
                                <Button onClick={ () => {logValues(); showError();} } >Login</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <p id= '1'></p>
        </>
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