import React from 'react';
import projectList from '../projectList';
import ProjectRow from './ProjectRow';
import Header from './Header';


let ProjectList = () => {
    let arr = [];
    arr.push(<Header/>);
    for( let i=0; i<projectList.length; i+=2){
        arr.push(<ProjectRow project1 = {projectList[i]} project2 = {projectList[i+1]}/>);
    }
    return (arr);
};

export default ProjectList;