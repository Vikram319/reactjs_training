import React from 'react';
import logo from './logo.svg';
// import Greet from './Greet';
// import productList from "./productList";
// import ProductList from './components/ProductList'

import { Button } from 'reactstrap';
import ProjectList from './components/ProjectList';
import LoginContainer from './containers/LoginContainer';
function App() {
  // console.log(productList)
  return (
    <LoginContainer/>
    // <div className="App">
    //   <Greet name={"vikram"}/>
    //   {productList.map(product => <h3>{product.name}</h3>)}
    //   <ProductList />
    //   <ProjectList />
    // </div>
  );
}

export default App