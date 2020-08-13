import React from 'react'
import ProjectCard from './ProjectCard'
import { Container, Row, Col } from 'reactstrap';
let ProjectRow = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="6"><ProjectCard project = {props.project1}/></Col>
                <Col xs="6"><ProjectCard project = {props.project2}/></Col>
            </Row>
        </Container>
    );
};

export default ProjectRow;