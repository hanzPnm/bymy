import React from "react";
import { useState, useEffect } from "react";
import { Toast} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Count = () => {
    const counter = useSelector(state => state.login.login);

    const [show, setShow] = useState();
    useEffect(() => {
        setShow(true);
        
    }, [counter]);


  return (
    <main>
       <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Toast cool</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, Welcome Admin!</Toast.Body>
        </Toast>
    </main>
  );
};

export default Count;