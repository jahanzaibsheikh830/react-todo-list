import React, { useState } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FbCard() {
  let [data, setData] = useState([])
  React.useEffect(()=>{
    const userData = localStorage.getItem('data')
    if (userData) {
      setData(JSON.parse(userData))
    }
  },[])
  React.useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data))
  })
  function post(event) {
    event.preventDefault();
    var item = document.getElementById('item').value;
    setData(previousValue => {
      return previousValue.concat(item);
    })
  }

  function del(i){
     let new_todo = [...data]
     new_todo.splice(i,1);
    setData(new_todo);
  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 form">
            <h1 className="text-center mb-3">Todo List</h1>
            <Form onSubmit={post}>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Add item</Form.Label>
                  <Form.Control type="text" placeholder="Add item" id="item" />
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </div>
        </div>
      </div>
      {
        data.map((element,i) => {
          return <div key={i} id="main-card">
            <div className="container">
              <div className="row justify-content-center mt-5 " >
                <div className="col-md-6 fb-card">
                  <ul>
                    <li>{element}  <button onClick={(e)=>del(i)}>Delete</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        })}
    </div>
  );
}

ReactDOM.render(
  <FbCard />
  ,
  document.getElementById('root')
);

